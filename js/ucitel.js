// Stránka Pro učitele (ucitel.html): hodina z kapitoly, mikromise, projekt ve světě, tvůrčí úkol
// s kódem třídy a certifikát. Všechno jsou odkazy do knihy, které engine už umí (#mission-…,
// #mise-…, #autor-…, #trida-…); žádné účty, postup zůstává v zařízení žáka. Stránka mluví jazykem
// knihy (?lang=, jinak poslední volba čtenáře) a v tom jazyce se kniha žákům i otevře.
// Data skládá scripts/build-ucitel.mjs do content/ucitel.json.
import { CONFIG } from './config.js';
import { LANG, LANGS, setLang } from './i18n.js';
import { qrSvg } from './qr.js';

const L = LANGS.includes(LANG) ? LANG : LANGS[0];   // ?lang=qps (pseudo-jazyk enginu) tu nic nepřekládá

const S = {
  h1: { cs: 'Pro učitele', en: 'For teachers', sk: 'Pre učiteľov', hu: 'Tanároknak' },
  back: { cs: '← Do knihy', en: '← Back to the book', sk: '← Do knihy', hu: '← Vissza a könyvhöz' },
  langs: { cs: 'Jazyk', en: 'Language', sk: 'Jazyk', hu: 'Nyelv' },
  desc: {
    cs: 'Jak učit s knihou {0}: plán hodiny z kapitoly, mikromise, projekty ve světech, tvůrčí úkol s kódem třídy a certifikát.',
    en: 'How to teach with the book {0}: a lesson plan per chapter, micro-missions, projects in worlds, a creative task with a class code, and the certificate.',
    sk: 'Ako učiť s knihou {0}: plán hodiny z kapitoly, mikromisie, projekty vo svetoch, tvorivá úloha s kódom triedy a certifikát.',
    hu: 'Hogyan tanítson a „{0}” című könyvvel:óravázlat fejezetenként, miniküldetések, projektek a világokban, alkotó feladat osztálykóddal és tanúsítvány.',
  },
  lede: {
    cs: 'Šest kapitol po čtyřech jádrech, šest světů s projekty a certifikát, který vydává AI dětem. Žádné účty ani administrace: každý odkaz na této stránce otevře žákům knihu rovnou na správném místě a v jazyce, ve kterém je tato stránka. Postup zůstává v zařízení žáka.',
    en: 'Six chapters of four core concepts each, six worlds with projects, and a certificate issued by AI dětem. No accounts, no admin: every link on this page opens the book for your pupils at the right place, in the language of this page. Progress stays on each pupil’s device.',
    sk: 'Šesť kapitol po štyroch jadrách, šesť svetov s projektmi a certifikát, ktorý vydáva AI dětem. Žiadne účty ani administrácia: každý odkaz na tejto stránke otvorí žiakom knihu rovno na správnom mieste a v jazyku, v ktorom je táto stránka. Postup zostáva v zariadení žiaka.',
    hu: 'Hat fejezet, mindegyikben négy alapfogalom, hat világ projektekkel és az AI dětem által kiadott tanúsítvány. Nincs fiók és nincs adminisztráció: az oldal minden linkje a megfelelő helyen és ennek az oldalnak a nyelvén nyitja meg a könyvet a diákoknak. A haladás a diák eszközén marad.',
  },
  navKap: { cs: 'Hodina z kapitoly', en: 'A lesson from a chapter', sk: 'Hodina z kapitoly', hu: 'Óra egy fejezetből' },
  navMini: { cs: 'Mikromise', en: 'Micro-mission', sk: 'Mikromisia', hu: 'Miniküldetés' },
  navSvet: { cs: 'Projekt ve světě', en: 'A project in a world', sk: 'Projekt vo svete', hu: 'Projekt egy világban' },
  navTvorba: { cs: 'Tvůrčí úkol', en: 'Creative task', sk: 'Tvorivá úloha', hu: 'Alkotó feladat' },
  navCert: { cs: 'Certifikát', en: 'Certificate', sk: 'Certifikát', hu: 'Tanúsítvány' },

  kapIntro: {
    cs: 'Jedna kapitola se vejde do jedné vyučovací hodiny. Vyberte kapitolu, promítněte QR kód nebo pošlete odkaz: žákům se otevře mise kapitoly se čtyřmi jádry a bossem na konci.',
    en: 'One chapter fits into one lesson. Pick a chapter, put the QR code on the projector or send the link: your pupils get the chapter’s mission with four core concepts and a boss at the end.',
    sk: 'Jedna kapitola sa zmestí do jednej vyučovacej hodiny. Vyberte kapitolu, premietnite QR kód alebo pošlite odkaz: žiakom sa otvorí misia kapitoly so štyrmi jadrami a bossom na konci.',
    hu: 'Egy fejezet belefér egy tanórába. Válasszon fejezetet, vetítse ki a QR-kódot vagy küldje el a linket: a diákoknak megnyílik a fejezet küldetése négy alapfogalommal és a végén egy főellenséggel.',
  },
  chapterN: { cs: '{0}. kapitola', en: 'Chapter {0}', sk: '{0}. kapitola', hu: '{0}. fejezet' },
  pIntro: { cs: 'Úvod', en: 'Opening', sk: 'Úvod', hu: 'Bevezetés' },
  pIntroT: {
    cs: 'Položte třídě otázku kapitoly a nechte žáky tipovat: „{0}“',
    en: 'Ask the class the chapter’s question and let pupils guess: “{0}”',
    sk: 'Položte triede otázku kapitoly a nechajte žiakov tipovať: „{0}“',
    hu: 'Tegye fel az osztálynak a fejezet kérdését, és hagyja, hogy a diákok tippeljenek: „{0}”',
  },
  pCores: { cs: 'Čtyři jádra', en: 'Four core concepts', sk: 'Štyri jadrá', hu: 'Négy alapfogalom' },
  pCoresT: {
    cs: 'Žáci projdou misi krok po kroku. Každé jádro má krátký výklad, úkol „Zkus to!“, častý omyl a kontrolní otázku, většina i minihru. Po každém jádru se zastavte u jedné otázky ze třídy.',
    en: 'Pupils go through the mission step by step. Each core concept has a short explanation, a “Try it!” task, a common mistake and a check question, and most have a mini-game. After each one, stop for one question from the class.',
    sk: 'Žiaci prejdú misiu krok za krokom. Každé jadro má krátky výklad, úlohu „Vyskúšaj to!“, častý omyl a kontrolnú otázku, väčšina aj minihru. Po každom jadre sa zastavte pri jednej otázke z triedy.',
    hu: 'A diákok lépésről lépésre haladnak a küldetésben. Minden alapfogalomhoz tartozik rövid magyarázat, „Próbáld ki!” feladat, gyakori tévedés és ellenőrző kérdés, a legtöbbhöz minijáték is. Mindegyik után álljanak meg egy kérdésnél az osztályból.',
  },
  read: { cs: 'čtení {0} min', en: '{0} min read', sk: 'čítanie {0} min', hu: '{0} perc olvasás' },
  pBoss: { cs: 'Boss', en: 'Boss', sk: 'Boss', hu: 'Főellenség' },
  pBossT: {
    cs: 'Žáci odpoví vlastními slovy na otázku bosse. Kniha odpověď vyhodnotí a napoví, co chybí. Pár dobrých odpovědí nechte přečíst nahlas:',
    en: 'Pupils answer the boss question in their own words. The book assesses the answer and hints at what is missing. Have a few good answers read aloud:',
    sk: 'Žiaci odpovedia vlastnými slovami na otázku bossa. Kniha odpoveď vyhodnotí a napovie, čo chýba. Pár dobrých odpovedí nechajte prečítať nahlas:',
    hu: 'A diákok saját szavaikkal válaszolnak a főellenség kérdésére. A könyv értékeli a választ, és súg, mi hiányzik belőle. Néhány jó választ olvassanak fel hangosan:',
  },
  pEnd: { cs: 'Závěr', en: 'Wrap-up', sk: 'Záver', hu: 'Lezárás' },
  pEndT: {
    cs: 'Odměna: „{0}“. Kdo chce víc, pokračuje doma ve světě, který ho baví: stejná jádra najde ve hrách, na webech, u robotů i na sociálních sítích.',
    en: 'Reward: “{0}”. Pupils who want more carry on at home in a world they enjoy: the same core concepts in games, websites, robots and social media.',
    sk: 'Odmena: „{0}“. Kto chce viac, pokračuje doma vo svete, ktorý ho baví: rovnaké jadrá nájde v hrách, na weboch, pri robotoch aj na sociálnych sieťach.',
    hu: 'Jutalom: „{0}”. Aki többet szeretne, otthon folytatja egy őt érdeklő világban: ugyanazok az alapfogalmak a játékokban, a weboldalakon, a robotoknál és a közösségi médiában.',
  },

  linkFor: { cs: 'Odkaz pro žáky', en: 'Link for pupils', sk: 'Odkaz pre žiakov', hu: 'Link a diákoknak' },
  copy: { cs: 'Kopírovat', en: 'Copy', sk: 'Kopírovať', hu: 'Másolás' },
  copied: { cs: 'Zkopírováno ✓', en: 'Copied ✓', sk: 'Skopírované ✓', hu: 'Kimásolva ✓' },
  qr: { cs: 'QR na projektor', en: 'QR for the projector', sk: 'QR na projektor', hu: 'QR a kivetítőre' },
  open: { cs: 'Otevřít', en: 'Open', sk: 'Otvoriť', hu: 'Megnyitás' },
  close: { cs: 'Zavřít', en: 'Close', sk: 'Zavrieť', hu: 'Bezárás' },
  scan: { cs: 'Naskenuj telefonem nebo tabletem', en: 'Scan with a phone or tablet', sk: 'Naskenuj telefónom alebo tabletom', hu: 'Olvasd be telefonnal vagy táblagéppel' },
  qrLong: {
    cs: 'Odkaz je na QR kód moc dlouhý. Pošlete ho žákům, kam jim posíláte úkoly, nebo vyberte méně jader.',
    en: 'This link is too long for a QR code. Send it to your pupils wherever you send them homework, or pick fewer core concepts.',
    sk: 'Odkaz je na QR kód pridlhý. Pošlite ho žiakom tam, kam im posielate úlohy, alebo vyberte menej jadier.',
    hu: 'Ez a link túl hosszú egy QR-kódhoz. Küldje el a diákoknak oda, ahová a feladatokat szokta, vagy válasszon kevesebb alapfogalmat.',
  },

  miniH: { cs: 'Mikromise na opakování', en: 'A micro-mission for revision', sk: 'Mikromisia na opakovanie', hu: 'Miniküldetés ismétléshez' },
  miniIntro: {
    cs: 'Zaškrtněte 1 až 12 jader z libovolných kapitol. Žáci je projdou v podání, které jim sedne, a na konci bossovi vysvětlí, jak spolu souvisí. Hodí se na opakování před testem.',
    en: 'Tick 1 to 12 core concepts from any chapters. Pupils work through them in whichever telling suits them and, at the end, explain to the boss how they fit together. Good for revision before a test.',
    sk: 'Zaškrtnite 1 až 12 jadier z ľubovoľných kapitol. Žiaci ich prejdú v podaní, ktoré im sedí, a na konci bossovi vysvetlia, ako spolu súvisia. Hodí sa na opakovanie pred testom.',
    hu: 'Jelöljön ki 1–12 alapfogalmat bármelyik fejezetből. A diákok a nekik megfelelő változatban haladnak végig rajtuk, a végén pedig elmagyarázzák a főellenségnek, hogyan függenek össze. Dolgozat előtti ismétléshez jó.',
  },
  miniName: { cs: 'Název mise (nepovinné)', en: 'Mission name (optional)', sk: 'Názov misie (nepovinné)', hu: 'A küldetés neve (nem kötelező)' },
  miniPh: { cs: 'Opakování před testem', en: 'Revision before the test', sk: 'Opakovanie pred testom', hu: 'Ismétlés dolgozat előtt' },
  miniCount: { cs: 'Vybráno {0} z 12', en: '{0} of 12 selected', sk: 'Vybraté {0} z 12', hu: '{0} / 12 kiválasztva' },
  miniEmpty: {
    cs: 'Vyberte aspoň jedno jádro a odkaz se objeví tady.', en: 'Pick at least one core concept and the link appears here.',
    sk: 'Vyberte aspoň jedno jadro a odkaz sa objaví tu.', hu: 'Válasszon legalább egy alapfogalmat, és itt megjelenik a link.',
  },

  svetIntro: {
    cs: 'Každý svět projde jádra na tématu, které děti znají ze života, a skončí projektovým úkolem: žák popíše, co postaví a jak. Mise světa se počítá do certifikátu {0}. Hodí se na projektový den nebo jako domácí práce na několik dní.',
    en: 'Each world goes through the core concepts on a topic children know from everyday life and ends with a project task: the pupil describes what they will build and how. A world mission counts towards the {0} certificate. Good for a project day or as homework over a few days.',
    sk: 'Každý svet prejde jadrá na téme, ktorú deti poznajú zo života, a skončí projektovou úlohou: žiak opíše, čo postaví a ako. Misia sveta sa počíta do certifikátu {0}. Hodí sa na projektový deň alebo ako domáca práca na niekoľko dní.',
    hu: 'Minden világ egy, a gyerekek által a mindennapokból ismert témán megy végig az alapfogalmakon, és projektfeladattal zárul: a diák leírja, mit és hogyan fog megépíteni. A világ küldetése beszámít a {0} tanúsítványba. Projektnapra vagy néhány napos házi feladatnak is jó.',
  },
  steps: { cs: '{0} kroků', en: '{0} steps', sk: '{0} krokov', hu: '{0} lépés' },
  advanced: { cs: 'pokročilé', en: 'advanced', sk: 'pokročilé', hu: 'haladó' },
  task: { cs: 'Projektový úkol na konci:', en: 'Project task at the end:', sk: 'Projektová úloha na konci:', hu: 'Projektfeladat a végén:' },
  worldPage: { cs: 'Rozcestník světa', en: 'The world’s start page', sk: 'Rozcestník sveta', hu: 'A világ nyitóoldala' },
  tvurceNote: {
    cs: 'Pokročilý projekt napříč světy. Jeho boss je podmínkou certifikátu {0}.',
    en: 'An advanced project across several worlds. Beating its boss is required for the {0} certificate.',
    sk: 'Pokročilý projekt naprieč svetmi. Jeho boss je podmienkou certifikátu {0}.',
    hu: 'Haladó projekt több világon át. A főellenségének legyőzése a {0} tanúsítvány feltétele.',
  },

  tvH: { cs: 'Tvůrčí úkol s kódem třídy', en: 'A creative task with a class code', sk: 'Tvorivá úloha s kódom triedy', hu: 'Alkotó feladat osztálykóddal' },
  tvIntro: {
    cs: 'Žáci napíšou vlastní podání jádra: vysvětlení, příběh, komiks… Studio jim ukáže, co musí podání pokrýt, a AI kouč jim pomůže ho vylepšit.',
    en: 'Pupils write their own telling of a core concept: an explanation, a story, a comic… The studio shows what the telling has to cover, and an AI coach helps them improve it.',
    sk: 'Žiaci napíšu vlastné podanie jadra: vysvetlenie, príbeh, komiks… Štúdio im ukáže, čo musí podanie pokryť, a AI kouč im ho pomôže vylepšiť.',
    hu: 'A diákok megírják egy alapfogalom saját változatát: magyarázatot, történetet, képregényt… A stúdió megmutatja, mit kell lefednie a változatnak, egy MI-coach pedig segít jobbá tenni.',
  },
  core: { cs: 'Jádro', en: 'Core concept', sk: 'Jadro', hu: 'Alapfogalom' },
  code: { cs: 'Kód třídy', en: 'Class code', sk: 'Kód triedy', hu: 'Osztálykód' },
  codeHint: {
    cs: '4–16 znaků: malá písmena bez diakritiky, číslice a pomlčka, třeba 8b-2026', en: '4–16 characters: lowercase letters, digits and dashes, e.g. 8b-2026',
    sk: '4–16 znakov: malé písmená bez diakritiky, číslice a pomlčka, napríklad 8b-2026', hu: '4–16 karakter: ékezet nélküli kisbetűk, számjegyek és kötőjel, például 8b-2026',
  },
  codeBad: {
    cs: 'Kód musí mít 4–16 znaků a jen malá písmena bez diakritiky, číslice a pomlčky.', en: 'The code needs 4–16 characters: only lowercase letters, digits and dashes.',
    sk: 'Kód musí mať 4–16 znakov a iba malé písmená bez diakritiky, číslice a pomlčky.', hu: 'A kód 4–16 karakterből állhat: csak ékezet nélküli kisbetű, számjegy és kötőjel.',
  },
  codeFirst: {
    cs: 'Zadejte kód třídy a odkaz na galerii se objeví tady.', en: 'Enter a class code and the gallery link appears here.',
    sk: 'Zadajte kód triedy a odkaz na galériu sa objaví tu.', hu: 'Adja meg az osztálykódot, és itt megjelenik a galéria linkje.',
  },
  tvPupils: { cs: 'Odkaz pro žáky: napsat vlastní podání', en: 'Link for pupils: write your own telling', sk: 'Odkaz pre žiakov: napísať vlastné podanie', hu: 'Link a diákoknak: saját változat írása' },
  tvGallery: { cs: 'Galerie třídy: pro vás, na projektor', en: 'Class gallery: for you, on the projector', sk: 'Galéria triedy: pre vás, na projektor', hu: 'Osztálygaléria: Önnek, a kivetítőre' },
  tvNote: {
    cs: 'Kód třídy zadají žáci při sdílení podání a kniha si ho zapamatuje. Podání sdílená s kódem vidí jen vaše třída. V galerii je promítnete tlačítkem ▶ Prezentovat, třída hlasuje ❤️ a vy nejlepší doporučíte ⭐ redakci do společné knihy.',
    en: 'Pupils enter the class code when they share their telling, and the book remembers it. Tellings shared with the code are visible to your class only. In the gallery you show them with ▶ Present, the class votes ❤️, and you recommend the best one ⭐ to the editors for the shared book.',
    sk: 'Kód triedy zadajú žiaci pri zdieľaní podania a kniha si ho zapamätá. Podania zdieľané s kódom vidí iba vaša trieda. V galérii ich premietnete tlačidlom ▶ Prezentovať, trieda hlasuje ❤️ a vy najlepšie odporučíte ⭐ redakcii do spoločnej knihy.',
    hu: 'Az osztálykódot a diákok a változat megosztásakor adják meg, és a könyv megjegyzi. A kóddal megosztott változatokat csak az Ön osztálya látja. A galériában a ▶ Bemutatás gombbal vetíti ki őket, az osztály ❤️-tel szavaz, Ön pedig a legjobbat ⭐-gal ajánlja a szerkesztőknek a közös könyvbe.',
  },

  certIntro: {
    cs: 'Certifikát vydává AI dětem. Žák ho najde v záložce Ty, kde také vidí, co mu ke kterému stupni chybí, a může si ho vytisknout. Kniha nikoho nehoní, nemá série ani odpočty: pod jádry jen ukazuje, co k dalšímu stupni chybí, a po čtyřech jádrech za jedno sezení nabídne dobré místo na pauzu.',
    en: 'The certificate is issued by AI dětem. Pupils find it in the You tab, where they also see what is still missing for each level, and they can print it. The book doesn’t push anyone, with no streaks or countdowns: under the core concepts it just shows what the next level still needs, and after four core concepts in one sitting it suggests a good place to stop.',
    sk: 'Certifikát vydáva AI dětem. Žiak ho nájde v záložke Ty, kde tiež vidí, čo mu ku ktorému stupňu chýba, a môže si ho vytlačiť. Kniha nikoho nenaháňa, nemá série ani odpočty: pod jadrami len ukazuje, čo k ďalšiemu stupňu chýba, a po štyroch jadrách za jedno sedenie ponúkne dobré miesto na prestávku.',
    hu: 'A tanúsítványt az AI dětem adja ki. A diák a Te fülön találja meg, ott azt is látja, mi hiányzik még az egyes szintekhez, és ki is nyomtathatja. A könyv senkit sem hajt, nincsenek sorozatok vagy visszaszámlálások: az alapfogalmak alatt csak azt mutatja, mi kell még a következő szinthez, és egy ülésben négy alapfogalom után jó pontot ajánl a szünetre.',
  },
  tierF: {
    cs: 'Všech 24 jader prošlých (přečtených, nebo ověřených tlačítkem „Už to znám“) a 6 misí kapitol s poraženým bossem.',
    en: 'All 24 core concepts done (read, or checked with the “I know this” button) and the 6 chapter missions with the boss beaten.',
    sk: 'Všetkých 24 jadier prejdených (prečítaných alebo overených tlačidlom „Už to poznám“) a 6 misií kapitol s porazeným bossom.',
    hu: 'Mind a 24 alapfogalom kész (elolvasva, vagy az „Ezt már tudom” gombbal ellenőrizve) és a 6 fejezetküldetés legyőzött főellenséggel.',
  },
  tierP: {
    cs: 'Navíc porozumění všem jádrům ověřené rychlou kontrolou, opakováním nebo hrou a jeden projekt ve světě s poraženým bossem.',
    en: 'Plus understanding of every core concept checked by a quick check, a recall or a game, and one world project with the boss beaten.',
    sk: 'Navyše porozumenie všetkým jadrám overené rýchlou kontrolou, opakovaním alebo hrou a jeden projekt vo svete s porazeným bossom.',
    hu: 'Ezen felül minden alapfogalom megértése igazolva gyors ellenőrzéssel, ismétléssel vagy játékkal, és egy világprojekt legyőzött főellenséggel.',
  },
  tierG: {
    cs: 'Navíc poražený boss závěrečného projektu „{0}“ a všechna jádra udržená: kartička k opakování zodpovězená správně i s odstupem aspoň dvou dnů.',
    en: 'Plus the boss of the final project “{0}” beaten and every core concept kept: its recall card answered correctly again after a gap of at least two days.',
    sk: 'Navyše porazený boss záverečného projektu „{0}“ a všetky jadrá udržané: kartička na opakovanie zodpovedaná správne aj s odstupom aspoň dvoch dní.',
    hu: 'Ezen felül legyőzött főellenség a „{0}” záróprojektben, és minden alapfogalom megtartva: az ismétlőkártyára legalább kétnapos szünet után is helyes a válasz.',
  },
  credits: { cs: 'Knihu i certifikát vydává <a href="https://aidetem.cz" target="_blank" rel="noopener">AI dětem</a>.' },
  loadErr: {
    cs: 'Data pro učitele se nepodařilo načíst. Zkuste stránku obnovit.', en: 'Could not load the teacher data. Try reloading the page.',
    sk: 'Údaje pre učiteľov sa nepodarilo načítať. Skúste stránku obnoviť.', hu: 'Nem sikerült betölteni a tanári adatokat. Próbálja újratölteni az oldalt.',
  },
};

const t = (k, ...a) => a.reduce((s, x, i) => s.replaceAll(`{${i}}`, x), S[k]?.[L] ?? S[k]?.cs ?? k);
const loc = v => (v && typeof v === 'object' ? v[L] ?? v[CONFIG.book.lang] ?? Object.values(v)[0] : v || '');
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const odkaz = hash => `${location.origin}/?lang=${L}#${hash}`;
// stejné kódování, jaké čte engine v loadCustomMission (base64url z UTF-8)
const b64u = s => btoa(unescape(encodeURIComponent(s))).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
const vejdeSeDoQR = url => { try { qrSvg(url); return true; } catch (e) { return false; } };
const bezHry = s => s.replace(/^[^:]+:\s*/, '');   // „Hra: Algoritmus: uvař čaj“ → „Algoritmus: uvař čaj“
const KOD = /^[a-z0-9-]{4,16}$/;

// co si učitel vybral (kapitola, svět, kód třídy…): jen pohodlí v tomto prohlížeči
let stav = {};
try { stav = JSON.parse(localStorage.getItem('pbook-ucitel') || '{}') || {}; } catch (e) {}
const uloz = () => { try { localStorage.setItem('pbook-ucitel', JSON.stringify(stav)); } catch (e) {} };

function odkazBox(url, nazev, popisek = t('linkFor')) {
  const qr = vejdeSeDoQR(url);
  return `<div class="uc-link">
    <label class="uc-label">${esc(popisek)}<input class="uc-url" readonly value="${esc(url)}"></label>
    <div class="uc-btns">
      <button class="uc-btn" type="button" data-copy="${esc(url)}">${t('copy')}</button>
      ${qr ? `<button class="uc-btn sec" type="button" data-qr="${esc(url)}" data-title="${esc(nazev)}">${t('qr')}</button>` : ''}
      <a class="uc-btn sec" href="${esc(url)}" target="_blank" rel="noopener">${t('open')} ↗</a>
    </div>
    ${qr ? '' : `<p class="uc-muted">${t('qrLong')}</p>`}
  </div>`;
}

function ukazQR(url, nazev) {
  const d = document.createElement('div');
  d.className = 'uc-qr-full';
  d.setAttribute('role', 'dialog');
  d.setAttribute('aria-modal', 'true');
  d.setAttribute('aria-label', nazev);
  d.innerHTML = `<div class="uc-qr-card">
    <button class="uc-x" type="button" aria-label="${t('close')}">✕</button>
    <h2>${esc(nazev)}</h2>
    <div class="uc-qr-img">${qrSvg(url, 10, 4)}</div>
    <p class="uc-qr-scan">${t('scan')}</p>
    <p class="uc-qr-url">${esc(url.replace(/^https?:\/\//, ''))}</p>
  </div>`;
  const zavri = () => { d.remove(); document.removeEventListener('keydown', klavesa); };
  const klavesa = e => { if (e.key === 'Escape') zavri(); };
  d.addEventListener('click', e => { if (e.target === d || e.target.closest('.uc-x')) zavri(); });
  document.addEventListener('keydown', klavesa);
  document.body.appendChild(d);
  d.querySelector('.uc-x').focus();
}

// ---------- hodina z kapitoly ----------
function planKapitoly(k) {
  const m = k.mission;
  if (!m) return '';
  return `<div class="uc-card">
    <div class="uc-head"><span class="uc-ico" aria-hidden="true">${m.icon}</span><div>
      <div class="uc-kicker">${t('chapterN', k.n)} · ${esc(loc(k.title))}</div>
      <h3>${esc(loc(m.title))}</h3>
      <p>${esc(loc(m.story))}</p>
    </div></div>
    <ol class="uc-plan">
      <li><span class="uc-min">5 min</span><div><b>${t('pIntro')}</b> ${t('pIntroT', esc(loc(k.subtitle) || loc(m.goal)))}</div></li>
      <li><span class="uc-min">4 × 7 min</span><div><b>${t('pCores')}</b> ${t('pCoresT')}
        <ul class="uc-cores">${k.cores.map(c => `<li><b>${esc(loc(c.title))}</b> <span>${esc(loc(c.teaser))}</span>
          <small>${t('read', loc(c.min))}${c.game ? ` · 🎮 ${esc(bezHry(loc(c.game.title)))}` : ''}</small></li>`).join('')}</ul></div></li>
      <li><span class="uc-min">8 min</span><div><b>${t('pBoss')}</b> ${t('pBossT')}<blockquote>${esc(loc(m.boss))}</blockquote></div></li>
      <li><span class="uc-min">4 min</span><div><b>${t('pEnd')}</b> ${t('pEndT', esc(loc(m.reward)))}</div></li>
    </ol>
    ${odkazBox(odkaz('mission-' + m.id), loc(m.title))}
  </div>`;
}

function kapitoly(D) {
  const el = document.getElementById('ucKap');
  const vyber = D.chapters.find(k => k.id === stav.kapitola) || D.chapters[0];
  el.innerHTML = `<div class="uc-chips" role="group" aria-label="${t('navKap')}">${D.chapters.map(k =>
      `<button type="button" class="uc-chip" data-kap="${esc(k.id)}" aria-pressed="${k === vyber}">${k.n}. ${esc(loc(k.title))}</button>`).join('')}</div>
    ${planKapitoly(vyber)}`;
  el.querySelectorAll('[data-kap]').forEach(b => b.onclick = () => { stav.kapitola = b.dataset.kap; uloz(); kapitoly(D); });
}

// ---------- mikromise ----------
function mikromise(D) {
  const el = document.getElementById('ucMini');
  const vybrane = new Set((stav.mise || []).filter(id => D.chapters.some(k => k.cores.some(c => c.id === id))));
  el.innerHTML = `<label class="uc-label">${t('miniName')}<input class="uc-input" id="ucMiniName" maxlength="60" placeholder="${esc(t('miniPh'))}" value="${esc(stav.miseNazev || '')}"></label>
    <div class="uc-groups">${D.chapters.map(k => `<fieldset class="uc-group"><legend>${k.n}. ${esc(loc(k.title))}</legend>
      ${k.cores.map(c => `<label class="uc-check"><input type="checkbox" value="${esc(c.id)}"${vybrane.has(c.id) ? ' checked' : ''}> ${esc(loc(c.title))}</label>`).join('')}
    </fieldset>`).join('')}</div>
    <p class="uc-muted" id="ucMiniCount" aria-live="polite"></p>
    <div id="ucMiniOut"></div>`;
  const obnov = () => {
    const ids = [...el.querySelectorAll('input[type=checkbox]:checked')].map(x => x.value);
    el.querySelectorAll('input[type=checkbox]').forEach(x => { x.disabled = !x.checked && ids.length >= 12; });
    const nazev = el.querySelector('#ucMiniName').value.trim();
    stav.mise = ids; stav.miseNazev = nazev; uloz();
    el.querySelector('#ucMiniCount').textContent = t('miniCount', ids.length);
    const payload = nazev ? { t: nazev, c: ids } : { c: ids };
    el.querySelector('#ucMiniOut').innerHTML = ids.length
      ? odkazBox(odkaz('mise-' + b64u(JSON.stringify(payload))), nazev || t('navMini'))
      : `<p class="uc-muted">${t('miniEmpty')}</p>`;
  };
  el.addEventListener('change', obnov);
  el.querySelector('#ucMiniName').addEventListener('input', obnov);
  obnov();
}

// ---------- projekt ve světě ----------
function svety(D) {
  const el = document.getElementById('ucSvet');
  const karty = [...D.worlds.map(w => ({ id: w.id, name: loc(w.name), block: w.block, m: w.mission })),
    ...(D.project ? [{ id: D.project.id, name: loc(D.project.title), m: D.project, projekt: true }] : [])];
  const vyber = karty.find(k => k.id === stav.svet) || karty[0];
  const mistr = loc(CONFIG.certificate?.tiers?.guru?.title) || 'Mistr';
  el.innerHTML = `<div class="uc-worlds" role="group" aria-label="${t('navSvet')}">${karty.map(k =>
      `<button type="button" class="uc-world" data-svet="${esc(k.id)}" aria-pressed="${k === vyber}">
        <span class="uc-ico" aria-hidden="true">${k.m.icon}</span>
        <span class="uc-world-name">${esc(k.projekt ? loc(k.m.title) : k.name)}</span>
        <small>${k.projekt ? t('advanced') + ' · ' : esc(loc(k.m.title)) + ' · '}${t('steps', k.m.steps)}</small>
      </button>`).join('')}</div>
    <div class="uc-card">
      <div class="uc-head"><span class="uc-ico" aria-hidden="true">${vyber.m.icon}</span><div>
        <div class="uc-kicker">${esc(vyber.projekt ? t('advanced') : vyber.name)} · ${t('steps', vyber.m.steps)}</div>
        <h3>${esc(loc(vyber.m.title))}</h3>
        <p>${esc(loc(vyber.m.story))}</p>
        ${vyber.projekt ? `<p class="uc-note">${t('tvurceNote', esc(mistr))}</p>` : ''}
      </div></div>
      <p><b>${t('task')}</b></p><blockquote>${esc(loc(vyber.m.boss))}</blockquote>
      ${odkazBox(odkaz('mission-' + vyber.m.id), loc(vyber.m.title))}
      ${vyber.block ? `<p class="uc-muted"><a href="${esc(odkaz(vyber.block))}" target="_blank" rel="noopener">${t('worldPage')} ↗</a></p>` : ''}
    </div>`;
  el.querySelectorAll('[data-svet]').forEach(b => b.onclick = () => { stav.svet = b.dataset.svet; uloz(); svety(D); });
}

// ---------- tvůrčí úkol s kódem třídy ----------
function tvorba(D) {
  const el = document.getElementById('ucTvorba');
  const jadra = D.chapters.flatMap(k => k.cores);
  const jadro = jadra.find(c => c.id === stav.tvorbaJadro) || jadra[0];
  el.innerHTML = `<div class="uc-row">
      <label class="uc-label">${t('core')}<select class="uc-input" id="ucTvJadro">${D.chapters.map(k => `<optgroup label="${k.n}. ${esc(loc(k.title))}">
        ${k.cores.map(c => `<option value="${esc(c.id)}"${c === jadro ? ' selected' : ''}>${esc(loc(c.title))}</option>`).join('')}</optgroup>`).join('')}</select></label>
      <label class="uc-label">${t('code')}<input class="uc-input" id="ucTvKod" maxlength="16" autocomplete="off" spellcheck="false" placeholder="8b-2026" value="${esc(stav.kod || '')}" aria-describedby="ucTvKodHint">
        <small class="uc-muted" id="ucTvKodHint">${t('codeHint')}</small></label>
    </div>
    <div id="ucTvOut"></div>
    <p class="uc-note">${t('tvNote')}</p>`;
  const obnov = () => {
    const id = el.querySelector('#ucTvJadro').value;
    const kod = el.querySelector('#ucTvKod').value.trim().toLowerCase();
    stav.tvorbaJadro = id; stav.kod = kod; uloz();
    const c = jadra.find(x => x.id === id);
    el.querySelector('#ucTvOut').innerHTML = odkazBox(odkaz('autor-' + id), loc(c.title), t('tvPupils'))
      + (KOD.test(kod) ? odkazBox(odkaz('trida-' + kod), `${t('code')}: ${kod}`, t('tvGallery'))
        : `<p class="uc-muted">${kod ? t('codeBad') : t('codeFirst')}</p>`);
  };
  el.querySelector('#ucTvJadro').addEventListener('change', obnov);
  el.querySelector('#ucTvKod').addEventListener('input', obnov);
  obnov();
}

// ---------- certifikát ----------
function certifikat(D) {
  const tier = id => loc(CONFIG.certificate?.tiers?.[id]?.title) || id;
  document.getElementById('ucCert').innerHTML = `<ul class="uc-tiers">
    <li><span aria-hidden="true">🥉</span><div><b>${esc(tier('foundations'))}</b> ${t('tierF')}</div></li>
    <li><span aria-hidden="true">🥈</span><div><b>${esc(tier('practitioner'))}</b> ${t('tierP')}</div></li>
    <li><span aria-hidden="true">🥇</span><div><b>${esc(tier('guru'))}</b> ${t('tierG', esc(loc(D.project?.title)))}</div></li>
  </ul>`;
}

// ---------- stránka ----------
async function start() {
  const kniha = loc(CONFIG.book.title);
  document.documentElement.lang = L;
  document.title = `${t('h1')} · ${kniha}`;
  document.querySelector('meta[name=description]')?.setAttribute('content', t('desc', kniha));
  const brand = document.getElementById('ucBrand');
  brand.textContent = kniha;
  brand.href = `./?lang=${L}`;
  const langs = document.getElementById('ucLangs');
  langs.setAttribute('aria-label', t('langs'));
  langs.innerHTML = LANGS.map(l => `<button type="button" class="uc-lang" data-lang="${l}" aria-pressed="${l === L}">${l.toUpperCase()}</button>`).join('');
  langs.querySelectorAll('[data-lang]').forEach(b => b.onclick = () => { if (b.dataset.lang !== L) setLang(b.dataset.lang); });
  document.getElementById('ucFoot').innerHTML = `<p>${(L === 'cs' ? S.credits.cs : CONFIG.strings?.[L]?.['credits-made']) || S.credits.cs}</p>
    <p><a href="./?lang=${L}">${t('back')}</a></p>`;

  const main = document.getElementById('uc');
  let D;
  try { D = await (await fetch('content/ucitel.json', { cache: 'no-cache' })).json(); }
  catch (e) { main.innerHTML = `<p class="uc-muted">${t('loadErr')}</p>`; return; }
  const resitel = loc(CONFIG.certificate?.tiers?.practitioner?.title) || 'Řešitel';
  main.innerHTML = `<h1>${t('h1')}</h1>
    <p class="uc-lede">${t('lede')}</p>
    <nav class="uc-nav"><a href="#kapitola">${t('navKap')}</a><a href="#mikromise">${t('navMini')}</a><a href="#svety">${t('navSvet')}</a><a href="#tvorba">${t('navTvorba')}</a><a href="#certifikat">${t('navCert')}</a></nav>
    <section id="kapitola"><h2>${t('navKap')}</h2><p>${t('kapIntro')}</p><div id="ucKap"></div></section>
    <section id="mikromise"><h2>${t('miniH')}</h2><p>${t('miniIntro')}</p><div id="ucMini"></div></section>
    <section id="svety"><h2>${t('navSvet')}</h2><p>${t('svetIntro', esc(resitel))}</p><div id="ucSvet"></div></section>
    <section id="tvorba"><h2>${t('tvH')}</h2><p>${t('tvIntro')}</p><div id="ucTvorba"></div></section>
    <section id="certifikat"><h2>${t('navCert')}</h2><p>${t('certIntro')}</p><div id="ucCert"></div></section>`;
  kapitoly(D); mikromise(D); svety(D); tvorba(D); certifikat(D);

  // kopírování a QR pro všechny odkazy na stránce
  main.addEventListener('click', async e => {
    const c = e.target.closest('[data-copy]');
    if (c) {
      try { await navigator.clipboard.writeText(c.dataset.copy); }
      catch (err) { const i = c.closest('.uc-link')?.querySelector('input'); i?.select(); document.execCommand?.('copy'); }
      const puvodni = c.textContent; c.textContent = t('copied'); setTimeout(() => { c.textContent = puvodni; }, 1600);
      return;
    }
    const q = e.target.closest('[data-qr]');
    if (q) ukazQR(q.dataset.qr, q.dataset.title);
  });
  main.addEventListener('focusin', e => { if (e.target.classList?.contains('uc-url')) e.target.select(); });
  if (location.hash) document.getElementById(location.hash.slice(1))?.scrollIntoView();
}

start();
