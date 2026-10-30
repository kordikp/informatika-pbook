#!/usr/bin/env node
// Zpráva z pilotu ve školách (docs/TACR-A-PILOT.md §4): souhrn po třídách a za celek z logu interakcí,
// spárovaný s dotazníky učitelů podle kódu třídy. Kód třídy nese každý řádek logu, který přišel ze
// zařízení otevřeného odkazem z /ucitel (engine: rc._sendToLog). Výstup je Markdown na stdout.
//
//   node scripts/pilot-report.mjs --file .log-interactions.jsonl          (lokální log nebo export, .jsonl i .json)
//   SUPABASE_URL=… SUPABASE_KEY=… node scripts/pilot-report.mjs --supabase  (produkce; klíč z `vercel env pull`)
//
// Volby: --od 2027-01-01 --do 2027-03-31 (podle času řádku) · --min 3 (nejmenší počet zařízení, aby se
// třída počítala) · --cena 0.15 (Kč za jedno volání modelu) · --bez kod1,kod2 (testovací kódy)
// · --jen kod (jen jedna třída, třeba souhrn pro její učitele) · --kniha informatika
// · --json souhrn.json (čísla pro další zpracování)
//
// Jak se počítá (stejně jako mapa jader v profilu, js/completion.js):
//   přečtené jádro   = detailview bloku, který patří k jednomu z 24 jader (frontmatter concept/translationOf)
//   ověřené jádro    = recall_score s kvalitou ≥ 1 (kontrolní otázka, opakování, most)
//   obhájené jádro   = jádro mise, jejíž boss dal „pass“ (boss_graded)
//   udržené jádro    = recall_score ≥ 1 aspoň 2 dny po předchozím opakování téhož jádra
//   volání modelu    = boss_graded + team_graded + team_ai + generate_served (bez cache) + remix_served
// Zařízení učitele (userId z jeho dotazníku) se mezi zařízení žáků nepočítá.

import fs from 'fs';
import path from 'path';
import { pathToFileURL } from 'url';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const { CONFIG } = await import(pathToFileURL(path.join(ROOT, 'js/config.js')).href);
const C = path.join(ROOT, CONFIG.book.contentDir || 'content');

const arg = (name, dflt) => { const i = process.argv.indexOf('--' + name); return i < 0 ? dflt : (process.argv[i + 1] ?? true); };
const OD = arg('od') ? Date.parse(arg('od')) : -Infinity;
const DO = arg('do') ? Date.parse(arg('do')) + 864e5 : Infinity;
const MIN = Number(arg('min', 3));
const CENA = arg('cena') != null ? Number(arg('cena')) : null;
const BEZ = new Set(String(arg('bez', '')).split(',').filter(Boolean));
const JEN = arg('jen') ? String(arg('jen')).toLowerCase() : null;
const KNIHA = arg('kniha', CONFIG.book.slug);

// ---------- kniha: 24 jader, blok → jádro, mise → jádra ----------
const missions = JSON.parse(fs.readFileSync(path.join(C, 'missions.json'), 'utf8'));
const MISE = new Map((missions.missions || missions).map(m => [m.id, m.core || []]));
const JADRA = new Set((missions.missions || missions).filter(m => m.group === 'chapter').flatMap(m => m.core || []));
const blokJadro = new Map();
(function projdi(dir) {
  for (const f of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, f.name);
    if (f.isDirectory()) { projdi(p); continue; }
    if (!f.name.endsWith('.md')) continue;
    const fm = (fs.readFileSync(p, 'utf8').match(/^---\r?\n([\s\S]*?)\r?\n---/) || [])[1] || '';
    const pole = k => (fm.match(new RegExp(`^${k}:\\s*"?([^"\\n]+)"?\\s*$`, 'm')) || [])[1]?.trim();
    const id = pole('id');
    if (id) blokJadro.set(id, pole('concept') || pole('translationOf') || id);
  }
})(C);
const jadroBloku = id => { const c = blokJadro.get(id) || id; return JADRA.has(c) ? c : null; };

// ---------- řádky ----------
async function nacti() {
  if (arg('file')) {
    const text = fs.readFileSync(arg('file'), 'utf8').trim();
    return text.startsWith('[') ? JSON.parse(text) : text.split('\n').filter(Boolean).map(l => { try { return JSON.parse(l); } catch (e) { return null; } }).filter(Boolean);
  }
  if (arg('supabase')) {
    const url = process.env.SUPABASE_URL, key = process.env.SUPABASE_KEY;
    if (!url || !key) throw new Error('chybí SUPABASE_URL nebo SUPABASE_KEY v prostředí');
    const out = [], PAGE = 1000;
    for (let od = 0; ; od += PAGE) {
      const res = await fetch(`${url}/rest/v1/interactions?select=created_at,user_id,type,event,item_id,data&data->>classCode=not.is.null&order=id.asc`, {
        headers: { apikey: key, Authorization: 'Bearer ' + key, Range: `${od}-${od + PAGE - 1}` } });
      if (!res.ok) throw new Error(`Supabase HTTP ${res.status}`);
      const rows = await res.json();
      out.push(...rows);
      process.stderr.write(`\rnačteno ${out.length} řádků`);
      if (rows.length < PAGE) break;
    }
    process.stderr.write('\n');
    return out;
  }
  throw new Error('zadejte --file <log> nebo --supabase');
}

// Supabase vrací {user_id, created_at, data:{…}}, lokální log a export řádek tak, jak ho poslal prohlížeč.
// Dotazník z lokálního serveru má pole ještě ve vnořeném data (api/log.js je v produkci vytáhne nahoru).
function normalizuj(r) {
  let x = 'user_id' in r && r.data && typeof r.data === 'object'
    ? { ...r.data, userId: r.data.userId || r.user_id, cas: Date.parse(r.created_at) || r.data.ts }
    : { ...r, cas: r.ts || r.serverTs };
  if (x.type === 'teacher_survey' && x.data && typeof x.data === 'object') x = { ...x, ...x.data };
  return x;
}

// Starší engine (před 7.9.0) poslal při druhém načtení stránky celou první návštěvu znovu:
// stejný řádek má stejné zařízení, čas z prohlížeče (ts) i událost, takže se dá poznat a vynechat.
const videno = new Set();
const radky = (await nacti()).map(normalizuj).filter(r => {
  if (!r.classCode || !/^[a-z0-9-]{4,16}$/.test(r.classCode) || BEZ.has(r.classCode) || (JEN && r.classCode !== JEN)) return false;
  if ((r.book && r.book !== KNIHA) || !(r.cas >= OD && r.cas < DO)) return false;
  if (r.ts) {
    const klic = [r.userId, r.ts, r.type, r.event, r.itemId, r.missionId, r.teamId, r.blockId].join('|');
    if (videno.has(klic)) return false;
    videno.add(klic);
  }
  return true;
});

// ---------- souhrn po třídách ----------
const median = a => { if (!a.length) return null; const s = [...a].sort((x, y) => x - y), m = s.length >> 1; return s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2; };
const den = t => new Date(t).toISOString().slice(0, 10);
const tridy = new Map();
const trida = k => {
  if (!tridy.has(k)) tridy.set(k, { kod: k, zar: new Map(), ucitele: new Set(), dotazniky: [], palce: { up: 0, down: 0 }, volani: 0, sezeni: 0 });
  return tridy.get(k);
};
const zarizeni = (T, u) => {
  if (!T.zar.has(u)) T.zar.set(u, { dny: new Set(), cteno: new Set(), overeno: new Set(), obhajeno: new Set(), udrzeno: new Set(),
    posledni: new Map(), boss: [], mise: new Set(), tymy: new Set() });
  return T.zar.get(u);
};

for (const r of radky.sort((a, b) => a.cas - b.cas)) {
  const T = trida(r.classCode);
  if (r.type === 'teacher_survey') { T.dotazniky.push(r); T.ucitele.add(r.userId); continue; }
  if (r.type === 'contact') continue;
  const Z = zarizeni(T, r.userId || 'neznámé');
  if (r.cas) Z.dny.add(den(r.cas));
  const ev = r.type === 'event' ? r.event : r.type;
  switch (ev) {
    case 'session_start': T.sezeni++; break;
    case 'detailview': { const j = jadroBloku(r.itemId); if (j) Z.cteno.add(j); break; }
    case 'recall_score': {
      const j = (JADRA.has(r.concept) && r.concept) || jadroBloku(r.blockId);
      if (!j) break;
      const pred = Z.posledni.get(j);
      if (r.quality >= 1) { Z.overeno.add(j); if (pred && r.cas - pred >= 2 * 864e5) Z.udrzeno.add(j); }
      Z.posledni.set(j, r.cas);
      break;
    }
    case 'boss_graded':
      T.volani++;
      Z.boss.push({ mise: r.missionId, verdikt: r.verdict, kolo: r.round || 1 });
      if (r.verdict === 'pass') for (const j of MISE.get(r.missionId) || []) if (JADRA.has(j)) Z.obhajeno.add(j);
      break;
    case 'team_graded': case 'team_ai': case 'remix_served': T.volani++; break;
    case 'generate_served': if (!r.cached) T.volani++; break;
    case 'mission_complete': Z.mise.add(r.missionId); break;
    case 'team_done': Z.tymy.add(r.teamId); break;
    case 'boss_fair': T.palce[r.fair ? 'up' : 'down']++; break;
  }
}

const ODPOVED = { yes: 'ano', 'rather-yes': 'spíš ano', 'rather-no': 'spíš ne', no: 'ne' };
const JAK = { class: 'celá třída', groups: 'skupiny', home: 'doma', other: 'jinak' };
const souhrn = [...tridy.values()].map(T => {
  for (const u of T.ucitele) T.zar.delete(u);
  const Z = [...T.zar.values()];
  const n = Z.length;
  const prumer = f => n ? Z.reduce((s, z) => s + f(z), 0) / n : 0;
  const prosli = Z.filter(z => z.boss.some(b => b.verdikt === 'pass')).length;
  const kola = Z.flatMap(z => z.boss.filter(b => b.verdikt === 'pass').map(b => b.kolo));
  const dot = T.dotazniky.at(-1) || null;
  return {
    kod: T.kod, zarizeni: n, sezeni: T.sezeni,
    vraceji: Z.filter(z => z.dny.size >= 2).length, dnyMedian: median(Z.map(z => z.dny.size)),
    cteno: prumer(z => z.cteno.size), overeno: prumer(z => z.overeno.size), obhajeno: prumer(z => z.obhajeno.size), udrzeno: prumer(z => z.udrzeno.size),
    bossPodil: n ? prosli / n : 0, koladoPruchodu: median(kola), bossKol: Z.reduce((s, z) => s + z.boss.length, 0),
    mise: Z.reduce((s, z) => s + z.mise.size, 0), tymy: Z.reduce((s, z) => s + z.tymy.size, 0),
    palce: T.palce, volani: T.volani, dotazniku: T.dotazniky.length, dotaznik: dot,
  };
}).sort((a, b) => b.zarizeni - a.zarizeni);

const pocitane = souhrn.filter(t => t.zarizeni >= MIN);
const vsechnyDot = souhrn.flatMap(t => tridy.get(t.kod).dotazniky);
const posledniDot = souhrn.map(t => t.dotaznik).filter(Boolean);
const skoly = new Set(vsechnyDot.map(d => String(d.school || '').trim().toLowerCase().replace(/\s+/g, ' ')).filter(Boolean));
const palce = souhrn.reduce((s, t) => ({ up: s.up + t.palce.up, down: s.down + t.palce.down }), { up: 0, down: 0 });
const zarizeniCelkem = pocitane.reduce((s, t) => s + t.zarizeni, 0);
const volaniCelkem = pocitane.reduce((s, t) => s + t.volani, 0);
const znovu = posledniDot.filter(d => d.again).length;
const znovuAno = posledniDot.filter(d => d.again === 'yes' || d.again === 'rather-yes').length;

const pct = x => x == null || Number.isNaN(x) ? '–' : Math.round(x * 100) + ' %';
const num = (x, d = 1) => x == null ? '–' : Number(x).toFixed(d).replace(/\.0+$/, '');
const ok = b => b ? '✅' : '❌';
const kriteria = [
  [`Knihu použije aspoň 10 tříd (≥ ${MIN} zařízení)`, `tříd: ${pocitane.length}`, pocitane.length >= 10],
  ['… z aspoň 5 škol (podle dotazníků)', `uvedených škol: ${skoly.size}`, skoly.size >= 5],
  ['V polovině tříd projde ≥ 60 % zařízení aspoň jedním bossem',
    `tříd: ${pocitane.filter(t => t.bossPodil >= 0.6).length} z ${pocitane.length}`, pocitane.length > 0 && pocitane.filter(t => t.bossPodil >= 0.6).length * 2 >= pocitane.length],
  ['Aspoň 80 % palců u hodnocení bosse nahoru', `${palce.up} 👍 · ${palce.down} 👎 (${pct(palce.up / ((palce.up + palce.down) || NaN))})`,
    palce.up + palce.down > 0 && palce.up / (palce.up + palce.down) >= 0.8],
  ['Aspoň 70 % učitelů odpoví „ano“ nebo „spíš ano“', `${znovuAno} z ${znovu} (${pct(znovuAno / (znovu || NaN))})`, znovu > 0 && znovuAno / znovu >= 0.7],
];

// ---------- Markdown ----------
const L = [];
const rozsah = `${Number.isFinite(OD) ? arg('od') : 'začátek'} až ${Number.isFinite(DO) ? arg('do') : 'dnes'}`;
L.push(`# Pilot ve školách: zpráva`, '', `Kniha \`${KNIHA}\` · období ${rozsah} · vytvořeno ${new Date().toISOString().slice(0, 10)} skriptem \`scripts/pilot-report.mjs\``, '',
  '> Interní podklad: obsahuje volné odpovědi učitelů. Citovat jen podle sloupce „souhlas“ (otázka 6).', '');
L.push('## Kritéria úspěchu', '', '| Kritérium | Výsledek | Splněno |', '|---|---|---|', ...kriteria.map(([k, v, b]) => `| ${k} | ${v} | ${ok(b)} |`), '');
L.push('## Celkem', '',
  `- Tříd s kódem: ${souhrn.length}, z toho počítaných (≥ ${MIN} zařízení): ${pocitane.length}`,
  `- Zařízení žáků v počítaných třídách: ${zarizeniCelkem}`,
  `- Dotazníky: ${vsechnyDot.length} (tříd: ${posledniDot.length})`,
  `- Volání modelu: ${volaniCelkem}, na zařízení ${num(volaniCelkem / (zarizeniCelkem || NaN), 1)}`
    + (CENA != null ? `; náklad ${num(volaniCelkem * CENA, 2)} Kč, na zařízení ${num(volaniCelkem * CENA / (zarizeniCelkem || NaN), 2)} Kč (při ${CENA} Kč za volání)` : ' (náklad: doplňte --cena v Kč za volání)'),
  '');
L.push('## Po třídách', '',
  'Průměry jader jsou na jedno zařízení (z 24). „Boss“ = podíl zařízení, která prošla aspoň jedním bossem.', '',
  '| Kód | Zařízení | Vrací se | Dny (medián) | Přečteno | Ověřeno | Obhájeno | Udrženo | Boss | Kola do průchodu | Mise | Skup. úkoly | 👍/👎 | Volání | Dotazník |',
  '|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|',
  ...souhrn.map(t => `| ${t.kod}${t.zarizeni < MIN ? ' *' : ''} | ${t.zarizeni} | ${t.vraceji} | ${num(t.dnyMedian)} | ${num(t.cteno)} | ${num(t.overeno)} | ${num(t.obhajeno)} | ${num(t.udrzeno)} | ${pct(t.bossPodil)} | ${num(t.koladoPruchodu)} | ${t.mise} | ${t.tymy} | ${t.palce.up}/${t.palce.down} | ${t.volani} | ${t.dotazniku || '–'} |`),
  '', `\\* méně než ${MIN} zařízení, do kritérií se nepočítá`, '');
L.push('## Dotazníky učitelů', '', 'Poslední odpověď za každou třídu.', '',
  '| Kód | Jak | Hodin | Snadnost | Férovost | Znovu | Souhlas | Škola |', '|---|---|---|---|---|---|---|---|',
  ...souhrn.filter(t => t.dotaznik).map(({ kod, dotaznik: d }) => `| ${kod} | ${(d.how || []).map(h => JAK[h] || h).join(', ')}${d.howOther ? ` (${d.howOther})` : ''} | ${d.lessons ?? '–'} | ${d.ease ?? '–'} | ${d.fair ?? '–'} | ${ODPOVED[d.again] || '–'} | ${{ no: 'ne', anon: 'anonymně', school: 'se školou' }[d.quote] || 'ne'} | ${d.school || '–'} |`),
  '');
const cit = vsechnyDot.filter(d => d.liked || d.unfairExample);
if (cit.length) {
  L.push('### Co žáky bavilo a co nefungovalo', '');
  for (const d of cit) {
    const kdo = d.quote === 'school' && d.school ? d.school : d.quote === 'anon' ? 'anonymně' : 'necitovat';
    if (d.liked) L.push(`- **${d.classCode}** (${kdo}): ${String(d.liked).replace(/\s+/g, ' ')}`);
    if (d.unfairExample) L.push(`- **${d.classCode}**, nefér hodnocení (${kdo}): ${String(d.unfairExample).replace(/\s+/g, ' ')}`);
  }
  L.push('');
}
process.stdout.write(L.join('\n'));
if (arg('json')) fs.writeFileSync(arg('json'), JSON.stringify({ rozsah, kriteria, tridy: souhrn.map(({ dotaznik, ...t }) => t), palce, skoly: skoly.size, volaniCelkem, zarizeniCelkem }, null, 2));
