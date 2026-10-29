#!/usr/bin/env node
// Data pro stránku Pro učitele (ucitel.html): kapitoly s jádry a misemi, světy a projekt,
// ve všech jazycích knihy. Skládá se z vygenerovaného obsahu, stejně jako balíček
// (vercel.json buildCommand po build-bundle.mjs). Výstup content/ucitel.json se necommituje.
//
//   node scripts/build-ucitel.mjs

import fs from 'fs';
import path from 'path';
import { pathToFileURL } from 'url';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const { CONFIG } = await import(pathToFileURL(path.join(ROOT, 'js/config.js')).href);
const LANGS = CONFIG.book.languages || [CONFIG.book.lang || 'cs'];
const ORIG = CONFIG.book.lang || 'cs';
const C = path.join(ROOT, CONFIG.book.contentDir || 'content');
const json = f => JSON.parse(fs.readFileSync(path.join(C, f), 'utf8'));

// jednoduchý frontmatter: jen skalární pole, která stránka potřebuje
function meta(text) {
  const fm = (text.match(/^---\r?\n([\s\S]*?)\r?\n---/) || [])[1] || '';
  const m = {};
  for (const line of fm.split(/\r?\n/)) {
    const kv = line.match(/^(\w+):\s*(.*)$/);
    if (kv) m[kv[1]] = kv[2].replace(/^"(.*)"$/, '$1').replace(/\\"/g, '"');
  }
  return m;
}

const book = json('book.json');
const bloky = {};          // id originálu → { lang → meta }
const poradi = [];         // id originálů v pořadí knihy
for (const ch of book.chapters) for (const f of ch.files) {
  const p = path.join(C, ch.directory, f);
  if (!fs.existsSync(p)) continue;
  const m = meta(fs.readFileSync(p, 'utf8'));
  const id = m.translationOf || m.id;
  if (!bloky[id]) { bloky[id] = {}; poradi.push(id); }
  bloky[id][m.translationOf ? m.lang : ORIG] = { ...m, chapter: ch.directory };
}
// pole bloku ve všech jazycích; chybějící překlad = text originálu (edice ho stejně neukáže)
const vsude = (id, k, fn = x => x) => Object.fromEntries(LANGS.map(l => [l, fn((bloky[id]?.[l] || bloky[id]?.[ORIG] || {})[k] || '')]));
const minuty = id => vsude(id, 'readingTime', x => Number(x) || 0);

const mise = json('missions.json').missions;
const kratce = m => ({ id: m.id, icon: m.icon, difficulty: m.difficulty, title: m.title, story: m.story, goal: m.goal,
  reward: m.reward?.title || '', steps: (m.core || []).length, boss: m.boss?.q || '' });

const koncepty = json('concepts.json').concepts.filter(c => bloky[c.anchor]?.[ORIG]?.core === 'true');
const kapitoly = [];
for (const ch of book.chapters) {
  const jadra = koncepty.filter(c => c.chapter === ch.directory)
    .sort((a, b) => poradi.indexOf(a.anchor) - poradi.indexOf(b.anchor));
  if (!jadra.length) continue;
  const m = mise.find(x => jadra.every(c => (x.core || []).includes(c.anchor)));
  kapitoly.push({
    id: ch.directory, n: ch.number, title: ch.title, subtitle: ch.subtitle || '',
    mission: m ? kratce(m) : null,
    cores: jadra.map(c => {
      const hra = poradi.find(id => { const o = bloky[id][ORIG]; return o.type === 'game' && o.concept === c.id && (o.lens || 'generic') === 'generic'; });
      const svety = [...new Set(poradi.map(id => bloky[id][ORIG]).filter(o => o.concept === c.id && o.lens && o.lens !== 'generic' && o.type !== 'game').map(o => o.lens))];
      return { id: c.id, block: c.anchor, title: vsude(c.anchor, 'title'), teaser: vsude(c.anchor, 'teaser'), min: minuty(c.anchor),
        game: hra ? { title: vsude(hra, 'title'), min: minuty(hra) } : null, worlds: svety };
    }),
  });
}

// světy: mise svet-<id> a jejich rozcestník (název světa = titulek rozcestníku před dvojtečkou)
const svety = mise.filter(m => m.id.startsWith('svet-')).map(m => ({
  id: m.id.slice(5), block: bloky[m.id] ? m.id : null,
  name: vsude(m.id, 'title', t => t.split(': ')[0].trim()), mission: kratce(m),
}));
const projekt = mise.find(m => m.group === 'project') || mise.find(m => m.difficulty === 'Advanced' && m.group !== 'expedition');

// pro nadané: expedice (mise skupiny expedition, směr = kapitola nebo svět), jejich základna a rozcestník
// v knize, stránka o bezpečí v komunitách a kolik je u jader výzev a her navíc
const blok = id => (bloky[id] ? id : null);
const expedice = mise.filter(m => m.group === 'expedition').map(m => {
  const d = m.id.replace(/^expedice-/, '');
  const kap = kapitoly.find(k => k.id.replace(/^ch\d+-/, '') === d), svet = svety.find(w => w.id === d);
  return { ...kratce(m), dir: kap ? kap.title : svet ? svet.name : '', world: !!svet,
    block: blok(m.id), guide: blok(`${m.id}-rozcestnik`), branches: Object.values(m.branches || {}).map(b => b.label) };
});
const kolik = f => poradi.filter(id => f(bloky[id][ORIG], id)).length;
const nadani = expedice.length ? { expeditions: expedice, safety: blok('bezpecne-v-komunitach'), hub: blok('expedice'),
  challenges: kolik(o => o.type === 'challenge'), games: kolik((o, id) => o.type === 'game' && id.includes('expert-')) } : null;

const out = { langs: LANGS, chapters: kapitoly, worlds: svety, project: projekt ? kratce(projekt) : null, gifted: nadani };
fs.writeFileSync(path.join(C, 'ucitel.json'), JSON.stringify(out));
console.log(`→ content/ucitel.json  ${kapitoly.length} kapitol, ${kapitoly.reduce((s, k) => s + k.cores.length, 0)} jader, ${svety.length} světů${projekt ? ', projekt ' + projekt.id : ''}${nadani ? `, ${expedice.length} expedic, ${nadani.challenges} výzev a ${nadani.games} her navíc` : ''}, ${(fs.statSync(path.join(C, 'ucitel.json')).size / 1024).toFixed(0)} kB`);
