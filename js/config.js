// p-book — Jak funguje digitální svět: informatika a AI pro 2. stupeň ZŠ (24 jader v 6 kapitolách)
// Obsah píše generátor z koncepty-pbook (scripts/do-pbooku.py); engine je jádro recsys-pbook (scripts/core-sync.sh).
// Kniha je česká a mluví i anglicky, slovensky a maďarsky: rozhraní z js/i18n/<lang>.js,
// vlastní texty knihy (česky v index.html) přeložené v `strings` níže, obsah v blocích s translationOf.

const AUTHOR = { cs: 'Pavel Kordík a tým AI dětem', en: 'Pavel Kordík and the AI dětem team', sk: 'Pavel Kordík a tím AI dětem', hu: 'Pavel Kordík és az AI dětem csapata' };

export const CONFIG = {
  book: {
    title: { cs: 'Jak funguje digitální svět', en: 'How the Digital World Works', sk: 'Ako funguje digitálny svet', hu: 'Hogyan működik a digitális világ' },
    author: AUTHOR,
    slug: 'informatika',
    lang: 'cs',                              // jazyk, ve kterém je kniha napsaná (originály bloků)
    languages: ['cs', 'en', 'sk', 'hu'],     // přepínač na úvodní obrazovce a v Nastavení; ?lang=en otevře knihu anglicky
    untranslatedTellings: 'hide',            // česká podání ze staré knihy (-podani-) se v jiných jazycích nezobrazí
    signature: 'Pavel Kordík',
    signatureRole: { cs: 'za AI dětem, vydavatele certifikátu', en: 'for AI dětem, issuer of the certificate', sk: 'za AI dětem, vydavateľa certifikátu', hu: 'az AI dětem, a tanúsítvány kiadója nevében' },
    contactName: AUTHOR,
    inviteText: { cs: 'Čtu živou knihu o tom, jak funguje digitální svět — přidej se:', en: 'I’m reading a living book about how the digital world works — join me:', sk: 'Čítam živú knihu o tom, ako funguje digitálny svet — pridaj sa:', hu: 'Egy élő könyvet olvasok arról, hogyan működik a digitális világ — csatlakozz:' },
    issuesUrl: 'https://github.com/kordikp/informatika-pbook/issues',
    contentDir: 'content',
    bookIndex: 'content/book.json'
  },

  recombee: {
    enabled: false,             // pro tuto knihu není databáze: doporučování běží lokálně
    database: '',
    scenarios: {
      homepagePersonal: 'homepage-personal',
      homepageVoice: 'homepage-voice',
      nextRead: 'next-read',
      contextRelated: 'context-related',
      search: 'search',
    }
  },

  features: {
    socialPreview: false,
    diagrams: true,
    keyboardNav: true,
    progressTracking: true,
    recommendations: true,
    gamification: true,       // XP, úrovně, odznaky, certifikát
    personalization: true,    // lokální doporučování (bez Recombee)
    spaceRepetition: true,    // kartičky s rozloženým opakováním
    missions: true,           // mise kapitol s bossem
    games: true,              // minihry
    highlights: true,         // klíčové body vedle sekce
    steering: true,           // jednodušeji / hlouběji, panel podání
    generation: true,         // generování na vyžádání (bez klíče se tlačítko skryje)
    community: true,          // sdílená čtenářská podání (otevřený režim)
  },

  tutor: {
    mode: 'mock',
    escalationThreshold: 0.3,
    authorName: 'Pavel'
  },

  // LEGACY: jen popisky klíčů větví misí (explorer/creator/thinker). Nerozšiřovat.
  voices: {
    explorer: { label: 'Explorer', icon: '\u{1F50D}', description: 'How does it work? Show me!' },
    creator: { label: 'Creator', icon: '\u{1F3A8}', description: 'I want to build something!' },
    thinker: { label: 'Thinker', icon: '\u{1F9E0}', description: 'Why does it work that way?' }
  },

  // Fazety: JAK je koncept vyprávěný, nikdy CO se učí. Jádra jsou pro všechny (lens generic).
  facets: {
    lens:      { label: 'Example world', values: ['generic'], icons: { generic: '\u{1F310}' },
                 genericHint: { cs: 'Příklady ze školy, z mobilu i z her', en: 'Examples from school, phones and games', sk: 'Príklady zo školy, z mobilu aj z hier', hu: 'Példák az iskolából, a telefonról és a játékokból' } },
    visuality: { label: 'Visual style', values: ['text-first', 'balanced', 'visual-first'], ordered: true },
    depth:     { label: 'Depth', values: ['intro', 'standard', 'technical', 'research'], ordered: true },
    formalism: { label: 'Formulas', values: ['none', 'light', 'full'], ordered: true },
    lengthBand:{ label: 'Length', values: ['tldr', 'standard', 'deep'], ordered: true },
    genre:     { label: 'Genre', values: ['explainer', 'story', 'worked-example', 'code-walkthrough', 'comic', 'animation'] },
    lang:      { label: 'Language', values: ['cs', 'en', 'sk', 'hu'], icons: { cs: 'CS', en: 'EN', sk: 'SK', hu: 'HU' } },
    carriers:  { label: 'Building blocks', values: ['prose', 'table', 'diagram', 'image', 'animation', 'formula', 'code'], derived: true,
                 icons: { prose: '\u{1F4DD}', table: '\u{1F4CA}', diagram: '\u{1F4D0}', image: '\u{1F5BC}', animation: '\u{1F39E}', formula: '\u{2211}', code: '\u{1F4BB}' } },
  },

  // Čtenářská slova pro fazety (anglicky; rozhraní je překládá přes js/i18n/<lang>.js). Jazyky jmenuje Intl.
  facetWords: {
    lens:       { generic: 'examples from everywhere' },
    lensShort:  { generic: 'Everywhere' },
    depth:      { intro: 'gentle introduction', standard: 'standard depth', technical: 'technical depth', research: 'research depth' },
    visuality:  { 'text-first': 'mostly text', balanced: 'text and pictures', 'visual-first': 'mostly visual' },
    formalism:  { none: 'no formulas', light: 'a few formulas', full: 'full math' },
    lengthBand: { tldr: 'short', standard: 'medium length', deep: 'long read' },
    genre:      { explainer: 'explainer', story: 'story', 'worked-example': 'worked example', 'code-walkthrough': 'code walkthrough', comic: 'comic', animation: 'animation' },
    lang:       { cs: 'Czech', en: 'English', sk: 'Slovak', hu: 'Hungarian' },
    carriers:   { prose: 'text', table: 'tables', diagram: 'diagrams', image: 'images', animation: 'animations', formula: 'formulas', code: 'code' },
  },
  defaultAffinity: { depth: { intro: 3 } },

  // Cíle na úvodní obrazovce → mise, kterou kniha nabídne jako první (štítky jsou česky v index.html).
  goals: {
    understand: { mission: 'postup', label: { cs: 'Pochopit, jak to funguje', en: 'Understand how it works', sk: 'Pochopiť, ako to funguje', hu: 'Megérteni, hogyan működik' },
                  hint: { cs: 'nejdřív srozumitelné vysvětlení', en: 'clear explanations first', sk: 'najprv zrozumiteľné vysvetlenie', hu: 'előbb érthető magyarázat' } },
    create: { mission: 'program', label: { cs: 'Něco vytvořit', en: 'Make something', sk: 'Niečo vytvoriť', hu: 'Valamit alkotni' },
              hint: { cs: 'mise Program: od prvního příkazu k vlastní hře', en: 'the Program mission: from a first command to your own game', sk: 'misia Program: od prvého príkazu k vlastnej hre', hu: 'a Program küldetés: az első utasítástól a saját játékig' } },
    ai: { mission: 'ai', label: { cs: 'Rozumět AI', en: 'Understand AI', sk: 'Rozumieť AI', hu: 'Érteni az AI-t' },
          hint: { cs: 'mise AI: jak se stroj učí a kdy mu nevěřit', en: 'the AI mission: how a machine learns and when not to trust it', sk: 'misia AI: ako sa stroj učí a kedy mu neveriť', hu: 'az AI küldetés: hogyan tanul a gép, és mikor ne higgy neki' } },
    protect: { mission: 'bezpeci', label: { cs: 'Chránit se na netu', en: 'Stay safe online', sk: 'Chrániť sa na nete', hu: 'Biztonságban a neten' },
               hint: { cs: 'mise Bezpečí: hesla, podvody a tvoje stopa', en: 'the Safety mission: passwords, scams and your trail', sk: 'misia Bezpečie: heslá, podvody a tvoja stopa', hu: 'a Biztonság küldetés: jelszavak, csalások és a nyomod' } },
  },

  // Témata pro štítky sekcí a mrak znalostí v profilu: název → začátky slov ve všech čtyřech jazycích.
  topics: {
    'Algoritmy': ['algoritm', 'algorithm', 'postup', 'dekompozi', 'decompos', 'lépés'],
    'Programování': ['program', 'cykl', 'smyčk', 'slučk', 'loop', 'podmínk', 'podmienk', 'condition', 'feltétel', 'proměnn', 'premenn', 'variable', 'változó', 'ciklus'],
    'Data a kódování': ['dat', 'adat', 'tabul', 'táblázat', 'kódov', 'kodov', 'encod', 'kódol', 'binár', 'binary', 'bináris', 'bit'],
    'Sítě a internet': ['internet', 'síť', 'sieť', 'network', 'hálózat', 'server', 'cloud', 'paket', 'packet', 'csomag'],
    'Umělá inteligence': ['umělá inteligen', 'umelá inteligen', 'artificial intelligen', 'mesterséges intelligen', 'ai ', 'chatbot', 'neuron', 'model'],
    'Bezpečí': ['bezpeč', 'secur', 'safe', 'biztonság', 'heslo', 'heslá', 'password', 'jelsz', 'phishing', 'podvod', 'scam', 'csal'],
  },
  levelTitles: [null, null, null, 'Mistr informatiky'],

  // Certifikát vydává AI dětem. Úrovně počítá engine (pokrytí jader, mise, opakování); kniha je jen pojmenuje.
  certificate: {
    tiers: {
      foundations: { title: { cs: 'Průzkumník', en: 'Explorer', sk: 'Prieskumník', hu: 'Felfedező' },
                     subtitle: { cs: 'Rozumí 24 jádrům informatiky', en: 'Understands the 24 core concepts of computing', sk: 'Rozumie 24 jadrám informatiky', hu: 'Érti az informatika 24 alapfogalmát' } },
      practitioner: { title: { cs: 'Řešitel', en: 'Solver', sk: 'Riešiteľ', hu: 'Megoldó' },
                      subtitle: { cs: 'Porazil bosse ve dvou misích', en: 'Beat the boss in two missions', sk: 'Porazil bossa v dvoch misiách', hu: 'Két küldetésben legyőzte a főellenséget' } },
      guru: { title: { cs: 'Mistr', en: 'Master', sk: 'Majster', hu: 'Mester' },
              subtitle: { cs: 'Dotáhl vlastní projekt a opakováním si jádra drží', en: 'Finished an own project and keeps the cores by recall', sk: 'Dotiahol vlastný projekt a opakovaním si jadrá drží', hu: 'Befejezte a saját projektjét, és ismétléssel megtartja a tudást' } },
    },
    completed: { cs: 'prošel jádrem informatiky: od algoritmu po umělou inteligenci a bezpečí na síti', en: 'went through the core of computing: from algorithms to AI and online safety', sk: 'prešiel jadrom informatiky: od algoritmu po umelú inteligenciu a bezpečie na sieti', hu: 'végigment az informatika magján: az algoritmustól a mesterséges intelligenciáig és a netes biztonságig' },
    topic: { cs: 'Informatika a AI', en: 'Computing and AI', sk: 'Informatika a AI', hu: 'Informatika és AI' },
  },

  // Vlastní texty knihy v ostatních jazycích. Klíč = český text z index.html (bez okrajových mezer),
  // nebo jméno z data-i18n="…" u vět s odkazy. Rozhraní enginu sem nepatří (to je v js/i18n/).
  strings: {
    en: {
      'Jak funguje digitální svět — informatika pro 2. stupeň': 'How the Digital World Works — computing for ages 11–15',
      'Jak funguje digitální svět': 'How the Digital World Works',
      'Základy informatiky a umělé inteligence pro 2. stupeň: 24 klíčových konceptů v 6 kapitolách.': 'Computing and AI basics for ages 11–15: 24 key concepts in 6 chapters.',
      'author-line': '<a href="https://kordikp.github.io/" target="_blank" rel="noopener">Pavel Kordík</a> and the <a href="https://aidetem.cz" target="_blank" rel="noopener">AI dětem</a> team',
      'Pochopit, jak to funguje': 'Understand how it works',
      'Něco vytvořit': 'Make something',
      'Rozumět AI': 'Understand AI',
      'Chránit se na netu': 'Stay safe online',
      'Příklady ze školy, z mobilu i z her · nejdřív srozumitelné vysvětlení.': 'Examples from school, phones and games · clear explanations first.',
      'credits-map': 'Content backbone: the <a href="https://knowledge-map-glitch.vercel.app/" target="_blank" rel="noopener">Glitch map of computing concepts</a>, reworked into 24 cores. The p-book platform comes from <a href="https://kam.fit.cvut.cz" target="_blank" rel="noopener">FIT CTU</a> and <a href="https://recombee.com" target="_blank" rel="noopener">Recombee</a>.',
      'credits-made': 'Published by <a href="https://aidetem.cz" target="_blank" rel="noopener">AI dětem</a>, who also issue the certificate at the end of the book.',
      'chat-intro': 'Ask in your own words, for example <i>“what is an algorithm?”</i>. I find the concept that answers it, give you the book’s short answer and the section to read. If the book does not cover it, I say so, and you can send the question to the authors with the ✉ button above.',
      'about-line': '<a href="https://kordikp.github.io/" target="_blank" rel="noopener">Pavel Kordík</a> and the <a href="https://aidetem.cz" target="_blank" rel="noopener">AI dětem</a> team',
      'Algoritmy': 'Algorithms', 'Programování': 'Programming', 'Data a kódování': 'Data and encoding',
      'Sítě a internet': 'Networks and the internet', 'Umělá inteligence': 'Artificial intelligence', 'Bezpečí': 'Safety',
      'Mistr informatiky': 'Computing master',
    },
    sk: {
      'Jak funguje digitální svět — informatika pro 2. stupeň': 'Ako funguje digitálny svet — informatika pre 2. stupeň ZŠ',
      'Jak funguje digitální svět': 'Ako funguje digitálny svet',
      'Základy informatiky a umělé inteligence pro 2. stupeň: 24 klíčových konceptů v 6 kapitolách.': 'Základy informatiky a umelej inteligencie pre 2. stupeň: 24 kľúčových konceptov v 6 kapitolách.',
      'author-line': '<a href="https://kordikp.github.io/" target="_blank" rel="noopener">Pavel Kordík</a> a tím <a href="https://aidetem.cz" target="_blank" rel="noopener">AI dětem</a>',
      'Pochopit, jak to funguje': 'Pochopiť, ako to funguje',
      'Něco vytvořit': 'Niečo vytvoriť',
      'Rozumět AI': 'Rozumieť AI',
      'Chránit se na netu': 'Chrániť sa na nete',
      'Příklady ze školy, z mobilu i z her · nejdřív srozumitelné vysvětlení.': 'Príklady zo školy, z mobilu aj z hier · najprv zrozumiteľné vysvetlenie.',
      'credits-map': 'Obsahová chrbtica: <a href="https://knowledge-map-glitch.vercel.app/" target="_blank" rel="noopener">Mapa informatických konceptov Glitch</a>, upravená na 24 jadier. Platforma p-book z <a href="https://kam.fit.cvut.cz" target="_blank" rel="noopener">FIT ČVUT</a> a <a href="https://recombee.com" target="_blank" rel="noopener">Recombee</a>.',
      'credits-made': 'Knihu aj certifikát vydáva <a href="https://aidetem.cz" target="_blank" rel="noopener">AI dětem</a>.',
      'chat-intro': 'Opýtaj sa vlastnými slovami, napríklad <i>„čo je algoritmus?“</i>. Nájdem koncept, ktorý na to odpovedá, dám ti krátku odpoveď z knihy a sekciu na čítanie. Keď to kniha nepokrýva, poviem to a otázku môžeš poslať autorom tlačidlom ✉ hore.',
      'about-line': '<a href="https://kordikp.github.io/" target="_blank" rel="noopener">Pavel Kordík</a> a tím <a href="https://aidetem.cz" target="_blank" rel="noopener">AI dětem</a>',
      'Algoritmy': 'Algoritmy', 'Programování': 'Programovanie', 'Data a kódování': 'Dáta a kódovanie',
      'Sítě a internet': 'Siete a internet', 'Umělá inteligence': 'Umelá inteligencia', 'Bezpečí': 'Bezpečie',
      'Mistr informatiky': 'Majster informatiky',
    },
    hu: {
      'Jak funguje digitální svět — informatika pro 2. stupeň': 'Hogyan működik a digitális világ — informatika felső tagozatosoknak',
      'Jak funguje digitální svět': 'Hogyan működik a digitális világ',
      'Základy informatiky a umělé inteligence pro 2. stupeň: 24 klíčových konceptů v 6 kapitolách.': 'Az informatika és a mesterséges intelligencia alapjai felső tagozatosoknak: 24 kulcsfogalom 6 fejezetben.',
      'author-line': '<a href="https://kordikp.github.io/" target="_blank" rel="noopener">Pavel Kordík</a> és az <a href="https://aidetem.cz" target="_blank" rel="noopener">AI dětem</a> csapata',
      'Pochopit, jak to funguje': 'Megérteni, hogyan működik',
      'Něco vytvořit': 'Valamit alkotni',
      'Rozumět AI': 'Érteni az AI-t',
      'Chránit se na netu': 'Biztonságban a neten',
      'Příklady ze školy, z mobilu i z her · nejdřív srozumitelné vysvětlení.': 'Példák az iskolából, a telefonról és a játékokból · előbb érthető magyarázat.',
      'credits-map': 'A tartalom gerince: a <a href="https://knowledge-map-glitch.vercel.app/" target="_blank" rel="noopener">Glitch informatikai fogalomtérkép</a>, 24 alapfogalomra átdolgozva. A p-book platformot a <a href="https://kam.fit.cvut.cz" target="_blank" rel="noopener">FIT ČVUT</a> és a <a href="https://recombee.com" target="_blank" rel="noopener">Recombee</a> készítette.',
      'credits-made': 'A könyvet és a tanúsítványt az <a href="https://aidetem.cz" target="_blank" rel="noopener">AI dětem</a> adja ki.',
      'chat-intro': 'Kérdezz a saját szavaiddal, például: <i>„mi az az algoritmus?”</i> Megkeresem a választ adó fogalmat, megadom a könyv rövid válaszát és az elolvasandó szakaszt. Ha a könyv nem foglalkozik vele, megmondom, és a kérdést a fenti ✉ gombbal elküldheted a szerzőknek.',
      'about-line': '<a href="https://kordikp.github.io/" target="_blank" rel="noopener">Pavel Kordík</a> és az <a href="https://aidetem.cz" target="_blank" rel="noopener">AI dětem</a> csapata',
      'Algoritmy': 'Algoritmusok', 'Programování': 'Programozás', 'Data a kódování': 'Adatok és kódolás',
      'Sítě a internet': 'Hálózatok és internet', 'Umělá inteligence': 'Mesterséges intelligencia', 'Bezpečí': 'Biztonság',
      'Mistr informatiky': 'Az informatika mestere',
    },
  },

  aiEconomy: {
    enabled: true,
    freeTrials: 3,
    prices: { basic: 10, advanced: 30 },
    earnManualEdit: 8,
    earnStudioChars: 250,
    earnStudioMax: 4,
  },

  steering: {
    serveThreshold: 0.75,
    offerThreshold: 0.45,
    generateEndpoint: '/api/generate',
  },
  community: {
    adoptionK: 5,
    explorationBudget: 50,
    maxPerConceptLens: 2,
    attribution: 'anonymous',
  }
};
