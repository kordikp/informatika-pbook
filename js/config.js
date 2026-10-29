// p-book — Jak funguje digitální svět: informatika a AI pro 2. stupeň ZŠ (24 jader v 6 kapitolách)
// Obsah píše generátor z koncepty-pbook (scripts/do-pbooku.py); engine je jádro recsys-pbook (scripts/core-sync.sh).
// Kniha je česká a mluví i anglicky, slovensky a maďarsky: rozhraní z js/i18n/<lang>.js,
// vlastní texty knihy (česky v index.html) přeložené v `strings` níže, obsah v blocích s translationOf.

const AUTHOR = 'AI dětem';

export const CONFIG = {
  book: {
    title: { cs: 'Jak funguje digitální svět', en: 'How the Digital World Works', sk: 'Ako funguje digitálny svet', hu: 'Hogyan működik a digitális világ' },
    author: AUTHOR,
    slug: 'informatika',
    lang: 'cs',                              // jazyk, ve kterém je kniha napsaná (originály bloků)
    languages: ['cs', 'en', 'sk', 'hu'],     // přepínač na úvodní obrazovce a v Nastavení; ?lang=en otevře knihu anglicky
    untranslatedTellings: 'hide',            // česká podání ze staré knihy (-podani-) se v jiných jazycích nezobrazí
    languageFilter: 'strict',                // en/sk/hu jen ve svém jazyce: nepřeložený blok se v jejich edici neukáže
    signature: 'AI dětem',
    signatureRole: { cs: 'vydavatel certifikátu', en: 'issuer of the certificate', sk: 'vydavateľ certifikátu', hu: 'a tanúsítvány kiadója' },
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
    visualMap: false,         // kniha nemá content/visual-map-data.json: mapa se na ni ani neptá
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

  // Fazety: JAK je koncept vyprávěný, nikdy CO se učí. Jádra jsou pro všechny (lens generic);
  // světy (svety/*.yaml v koncepty-pbook) vyprávějí stejná jádra znovu, s příklady ze svého světa.
  facets: {
    lens:      { label: 'Example world', values: ['generic', 'hry', 'weby', 'aplikace', 'roboti', 'tvorba', 'socialni'],
                 icons: { generic: '\u{1F310}', hry: '\u{1F579}\u{FE0F}', weby: '\u{1F5A5}\u{FE0F}', aplikace: '\u{1F4F1}', roboti: '\u{1F916}', tvorba: '\u{1F3A8}', socialni: '\u{1F3AC}' },
                 genericHint: { cs: 'Příklady ze školy, z mobilu i z her', en: 'Examples from school, phones and games', sk: 'Príklady zo školy, z mobilu aj z hier', hu: 'Példák az iskolából, a telefonról és a játékokból' },
                 // štítek podání v pruhu „další podání“ a mise každého světa (mapa konceptů ji nabídne)
                 worldLabels: { hry: { cs: '🕹️ ve světě her', en: '🕹️ in the world of games', sk: '🕹️ vo svete hier', hu: '🕹️ a játékok világában' },
                                weby: { cs: '🖥️ ve světě webů', en: '🖥️ in the world of websites', sk: '🖥️ vo svete webov', hu: '🖥️ a weboldalak világában' },
                                aplikace: { cs: '📱 ve světě aplikací', en: '📱 in the world of apps', sk: '📱 vo svete aplikácií', hu: '📱 az alkalmazások világában' },
                                roboti: { cs: '🤖 ve světě robotů', en: '🤖 in the world of robots', sk: '🤖 vo svete robotov', hu: '🤖 a robotok világában' },
                                tvorba: { cs: '🎨 ve světě tvorby s AI', en: '🎨 in the world of creating with AI', sk: '🎨 vo svete tvorby s AI', hu: '🎨 az MI-vel való alkotás világában' },
                                socialni: { cs: '🎬 ve světě sociálních sítí', en: '🎬 in the world of social media', sk: '🎬 vo svete sociálnych sietí', hu: '🎬 a közösségi média világában' } },
                 missions: { hry: 'svet-hry', weby: 'svet-weby', aplikace: 'svet-aplikace', roboti: 'svet-roboti', tvorba: 'svet-tvorba', socialni: 'svet-socialni' } },
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
    lens:       { generic: 'examples from everywhere',
                  hry: { cs: 'příklady ze světa her', en: 'examples from games', sk: 'príklady zo sveta hier', hu: 'példák a játékok világából' },
                  weby: { cs: 'příklady ze světa webů', en: 'examples from websites', sk: 'príklady zo sveta webov', hu: 'példák a weboldalak világából' },
                  aplikace: { cs: 'příklady z mobilních aplikací', en: 'examples from mobile apps', sk: 'príklady z mobilných aplikácií', hu: 'példák a mobilalkalmazások világából' },
                  roboti: { cs: 'příklady z robotů a micro:bitu', en: 'examples from robots and the micro:bit', sk: 'príklady z robotov a micro:bitu', hu: 'példák a robotok és a micro:bit világából' },
                  tvorba: { cs: 'příklady z tvorby s AI', en: 'examples from creating with AI', sk: 'príklady z tvorby s AI', hu: 'példák az MI-vel való alkotásból' },
                  socialni: { cs: 'příklady ze sociálních sítí a videí', en: 'examples from social media and video', sk: 'príklady zo sociálnych sietí a videí', hu: 'példák a közösségi médiából és a videókból' } },
    lensShort:  { generic: 'Everywhere',
                  hry: { cs: 'Hry', en: 'Games', sk: 'Hry', hu: 'Játékok' },
                  weby: { cs: 'Weby', en: 'Websites', sk: 'Weby', hu: 'Weboldalak' },
                  aplikace: { cs: 'Aplikace', en: 'Apps', sk: 'Aplikácie', hu: 'Alkalmazások' },
                  roboti: { cs: 'Roboti a micro:bit', en: 'Robots and micro:bit', sk: 'Roboty a micro:bit', hu: 'Robotok és micro:bit' },
                  tvorba: { cs: 'Tvorba s AI', en: 'Creating with AI', sk: 'Tvorba s AI', hu: 'Alkotás MI-vel' },
                  socialni: { cs: 'Sociální sítě a videa', en: 'Social media and video', sk: 'Sociálne siete a videá', hu: 'Közösségi média és videók' } },
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
    create: { mission: 'program', missions: { hry: 'svet-hry', weby: 'svet-weby', aplikace: 'svet-aplikace', roboti: 'svet-roboti', tvorba: 'svet-tvorba' },   // se světem jeho mise
              label: { cs: 'Něco vytvořit', en: 'Make something', sk: 'Niečo vytvoriť', hu: 'Valamit alkotni' },
              hint: { cs: 'mise Program: od prvního příkazu k vlastní hře', en: 'the Program mission: from a first command to your own game', sk: 'misia Program: od prvého príkazu k vlastnej hre', hu: 'a Program küldetés: az első utasítástól a saját játékig' } },
    ai: { mission: 'ai', missions: { tvorba: 'svet-tvorba' }, label: { cs: 'Rozumět AI', en: 'Understand AI', sk: 'Rozumieť AI', hu: 'Érteni az MI-t' },
          hint: { cs: 'mise AI: jak se stroj učí a kdy mu nevěřit', en: 'the AI mission: how a machine learns and when not to trust it', sk: 'misia AI: ako sa stroj učí a kedy mu neveriť', hu: 'az AI küldetés: hogyan tanul a gép, és mikor ne higgy neki' } },
    protect: { mission: 'bezpeci', missions: { socialni: 'svet-socialni' }, label: { cs: 'Chránit se na netu', en: 'Stay safe online', sk: 'Chrániť sa na nete', hu: 'Biztonságban a neten' },
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

  // Nadpisy skupin v seznamu misí (group z content/missions.json; generátor drží skupiny pohromadě).
  missionGroups: {
    chapter: { title: { cs: 'Mise kapitol', en: 'Chapter missions', sk: 'Misie kapitol', hu: 'Fejezetküldetések' },
               note: { cs: 'Každá kapitola knihy jako jedna cesta s bossem na konci.', en: 'Each chapter of the book as one path with a boss at the end.', sk: 'Každá kapitola knihy ako jedna cesta s bossom na konci.', hu: 'A könyv minden fejezete egy út, a végén főellenséggel.' } },
    world: { title: { cs: 'Mise světů', en: 'World missions', sk: 'Misie svetov', hu: 'Világküldetések' },
             note: { cs: 'Jádra s příklady z jednoho světa a na konci vlastní projekt.', en: 'The cores with examples from one world, and a project of your own at the end.', sk: 'Jadrá s príkladmi z jedného sveta a na konci vlastný projekt.', hu: 'Az alapfogalmak egyetlen világ példáival, a végén saját projekttel.' } },
    project: { title: { cs: 'Závěrečná mise', en: 'The final mission', sk: 'Záverečná misia', hu: 'A záróküldetés' },
               note: { cs: 'Vlastní věc postavená ze všeho, co kniha ukázala.', en: 'Something of your own, built from everything the book showed.', sk: 'Vlastná vec postavená zo všetkého, čo kniha ukázala.', hu: 'Valami saját, mindabból építve, amit a könyv megmutatott.' } },
    expedition: { title: { cs: '🎒 Expedice', en: '🎒 Expeditions', sk: '🎒 Expedície', hu: '🎒 Expedíciók' },
                  note: { cs: 'Pro ty, kdo chtějí víc: těžší výpravy ke skutečným nástrojům, soutěžím a komunitám. Do certifikátu se nepočítají.', en: 'For those who want more: harder journeys to real tools, contests and communities. They do not count toward the certificate.', sk: 'Pre tých, ktorí chcú viac: ťažšie výpravy k skutočným nástrojom, súťažiam a komunitám. Do certifikátu sa nepočítajú.', hu: 'Azoknak, akik többet akarnak: nehezebb utak valódi eszközökhöz, versenyekhez és közösségekhez. A tanúsítványba nem számítanak bele.' } },
  },

  // Mechaniky na dokončení (js/completion.js): nic nezamykají, jen ukazují cíl a nabízejí kontrolu.
  completion: {
    goalLine: true,      // pod jádrem a na Procházet: kolik zbývá k dalšímu stupni certifikátu
    knowIt: true,        // „Už to znám → kontrola“ u nepřečteného jádra
    bridges: true,       // pod jádrem mini otázka na dřívější jádro, na které staví
    doneForToday: 4,     // po 4 nových jádrech v jednom sezení karta „Na dnes dobré místo na pauzu“
  },

  // Certifikát vydává AI dětem. Co který stupeň chce, říká requirements (engine to počítá a ukazuje).
  certificate: {
    tiers: {
      foundations: { title: { cs: 'Průzkumník', en: 'Explorer', sk: 'Prieskumník', hu: 'Felfedező' },
                     subtitle: { cs: 'Všech 24 jader informatiky a 6 kapitol s poraženým bossem', en: 'All 24 core concepts of computing and 6 chapter bosses beaten', sk: 'Všetkých 24 jadier informatiky a 6 kapitol s porazeným bossom', hu: 'Az informatika mind a 24 alapfogalma és 6 legyőzött fejezet-főellenség' } },
      practitioner: { title: { cs: 'Řešitel', en: 'Solver', sk: 'Riešiteľ', hu: 'Megoldó' },
                      subtitle: { cs: 'Porozumění jádrům ověřené a projekt ve světě hotový', en: 'Understanding of the cores checked and a project in a world finished', sk: 'Porozumenie jadrám overené a projekt vo svete hotový', hu: 'Igazolt tudás az alapfogalmakból és egy kész projekt egy világban' } },
      guru: { title: { cs: 'Mistr', en: 'Master', sk: 'Majster', hu: 'Mester' },
              subtitle: { cs: 'Závěrečný projekt hotový a jádra udržená opakováním', en: 'The final project finished and the cores kept by recall', sk: 'Záverečný projekt hotový a jadrá udržané opakovaním', hu: 'Kész záróprojekt és ismétléssel megtartott alapfogalmak' } },
    },
    requirements: {
      foundations: [
        { cores: 'read', label: { cs: 'prošlá jádra ({0}/{1})', en: 'core concepts read ({0}/{1})', sk: 'prejdené jadrá ({0}/{1})', hu: 'elolvasott alapfogalmak ({0}/{1})' } },
        { missions: { group: 'chapter' }, label: { cs: 'mise kapitol s poraženým bossem ({0}/{1})', en: 'chapter missions with the boss beaten ({0}/{1})', sk: 'misie kapitol s porazeným bossom ({0}/{1})', hu: 'fejezetküldetés legyőzött főellenséggel ({0}/{1})' } },
      ],
      practitioner: [
        { cores: 'understood', label: { cs: 'jádra ověřená kontrolou nebo hrou ({0}/{1})', en: 'core concepts checked by a quiz or a game ({0}/{1})', sk: 'jadrá overené kontrolou alebo hrou ({0}/{1})', hu: 'ellenőrzéssel vagy játékkal igazolt alapfogalmak ({0}/{1})' } },
        { missions: { group: 'world', count: 1 }, label: { cs: 'projekt ve světě ({0}/{1})', en: 'a project in a world ({0}/{1})', sk: 'projekt vo svete ({0}/{1})', hu: 'projekt egy világban ({0}/{1})' } },
      ],
      guru: [
        { missions: { group: 'project' }, label: { cs: 'závěrečná mise Postav a sdílej ({0}/{1})', en: 'the final mission Build and share ({0}/{1})', sk: 'záverečná misia Postav a zdieľaj ({0}/{1})', hu: 'az Építsd meg és oszd meg záróküldetés ({0}/{1})' } },
        { cores: 'kept', label: { cs: 'jádra udržená opakováním po pár dnech ({0}/{1})', en: 'core concepts kept by recall days later ({0}/{1})', sk: 'jadrá udržané opakovaním po pár dňoch ({0}/{1})', hu: 'napokkal később is felidézett alapfogalmak ({0}/{1})' } },
      ],
    },
    completed: { cs: 'má za sebou jádro informatiky: od algoritmu po umělou inteligenci a bezpečí na síti', en: 'went through the core of computing: from algorithms to AI and online safety', sk: 'má za sebou jadro informatiky: od algoritmu po umelú inteligenciu a bezpečie na sieti', hu: 'végigment az informatika magján: az algoritmustól a mesterséges intelligenciáig és a netes biztonságig' },
    topic: { cs: 'Informatika a AI', en: 'Computing and AI', sk: 'Informatika a AI', hu: 'Informatika és AI' },
  },

  // Vlastní texty knihy v ostatních jazycích. Klíč = český text z index.html (bez okrajových mezer),
  // nebo jméno z data-i18n="…" u vět s odkazy. Rozhraní enginu sem nepatří (to je v js/i18n/).
  strings: {
    cs: {
      '<b>{0}</b> where the book has them ({1} section{2} today — any other section can be retold for you)': { one: '<b>{0}</b>, kde je kniha má: dnes {1} jádro', few: '<b>{0}</b>, kde je kniha má: dnes {1} jádra', other: '<b>{0}</b>, kde je kniha má: dnes {1} jader' },
    },
    en: {
      'Jak funguje digitální svět — informatika pro 2. stupeň': 'How the Digital World Works — computing for ages 11–15',
      'Jak funguje digitální svět': 'How the Digital World Works',
      'Základy informatiky a umělé inteligence pro 2. stupeň: 24 klíčových konceptů v 6 kapitolách.': 'Computing and AI basics for ages 11–15: 24 key concepts in 6 chapters.',
      'Pochopit, jak to funguje': 'Understand how it works',
      'Něco vytvořit': 'Make something',
      'Rozumět AI': 'Understand AI',
      'Chránit se na netu': 'Stay safe online',
      'Příklady ze školy, z mobilu i z her · nejdřív srozumitelné vysvětlení.': 'Examples from school, phones and games · clear explanations first.',
      'credits-map': 'Content backbone: the <a href="https://knowledge-map-glitch.vercel.app/" target="_blank" rel="noopener">Glitch map of computing concepts</a>, reworked into 24 cores. The p-book platform comes from <a href="https://kam.fit.cvut.cz" target="_blank" rel="noopener">FIT CTU</a> and <a href="https://recombee.com" target="_blank" rel="noopener">Recombee</a>.',
      'credits-made': 'Published by <a href="https://aidetem.cz" target="_blank" rel="noopener">AI dětem</a>, who also issue the certificate at the end of the book.',
      'chat-intro': 'Ask in your own words, for example <i>“what is an algorithm?”</i>. I find the concept that answers it, give you the book’s short answer and the section to read. If the book does not cover it, I say so, and you can send the question to the authors with the ✉ button above.',
      'Algoritmy': 'Algorithms', 'Programování': 'Programming', 'Data a kódování': 'Data and encoding',
      'Sítě a internet': 'Networks and the internet', 'Umělá inteligence': 'Artificial intelligence', 'Bezpečí': 'Safety',
      'Mistr informatiky': 'Computing master',
      'Svět příkladů': 'Example world', 'nepovinné': 'optional', 'Odevšad': 'Everywhere', 'Hry': 'Games', 'Roboti a micro:bit': 'Robots and micro:bit',
      'Weby': 'Websites', 'Aplikace': 'Apps', 'Tvorba s AI': 'Creating with AI', 'Sociální sítě a videa': 'Social media and video',
      'Učíte? Plán hodiny a odkazy pro třídu →': 'Teaching? Lesson plans and links for your class →', 'Pro učitele': 'For teachers',
      '<b>{0}</b> where the book has them ({1} section{2} today — any other section can be retold for you)': { one: '<b>{0}</b> where the book has them: {1} core concept today', other: '<b>{0}</b> where the book has them: {1} core concepts today' },
    },
    sk: {
      'Jak funguje digitální svět — informatika pro 2. stupeň': 'Ako funguje digitálny svet — informatika pre 2. stupeň ZŠ',
      'Jak funguje digitální svět': 'Ako funguje digitálny svet',
      'Základy informatiky a umělé inteligence pro 2. stupeň: 24 klíčových konceptů v 6 kapitolách.': 'Základy informatiky a umelej inteligencie pre 2. stupeň: 24 kľúčových konceptov v 6 kapitolách.',
      'Pochopit, jak to funguje': 'Pochopiť, ako to funguje',
      'Něco vytvořit': 'Niečo vytvoriť',
      'Rozumět AI': 'Rozumieť AI',
      'Chránit se na netu': 'Chrániť sa na nete',
      'Příklady ze školy, z mobilu i z her · nejdřív srozumitelné vysvětlení.': 'Príklady zo školy, z mobilu aj z hier · najprv zrozumiteľné vysvetlenie.',
      'credits-map': 'Obsahová chrbtica: <a href="https://knowledge-map-glitch.vercel.app/" target="_blank" rel="noopener">Mapa informatických konceptov Glitch</a>, upravená na 24 jadier. Platforma p-book z <a href="https://kam.fit.cvut.cz" target="_blank" rel="noopener">FIT ČVUT</a> a <a href="https://recombee.com" target="_blank" rel="noopener">Recombee</a>.',
      'credits-made': 'Knihu aj certifikát vydáva <a href="https://aidetem.cz" target="_blank" rel="noopener">AI dětem</a>.',
      'chat-intro': 'Opýtaj sa vlastnými slovami, napríklad <i>„čo je algoritmus?“</i>. Nájdem koncept, ktorý na to odpovedá, dám ti krátku odpoveď z knihy a sekciu na čítanie. Keď to kniha nepokrýva, poviem to a otázku môžeš poslať autorom tlačidlom ✉ hore.',
      'Algoritmy': 'Algoritmy', 'Programování': 'Programovanie', 'Data a kódování': 'Dáta a kódovanie',
      'Sítě a internet': 'Siete a internet', 'Umělá inteligence': 'Umelá inteligencia', 'Bezpečí': 'Bezpečie',
      'Mistr informatiky': 'Majster informatiky',
      'Svět příkladů': 'Svet príkladov', 'nepovinné': 'nepovinné', 'Odevšad': 'Odvšadiaľ', 'Hry': 'Hry', 'Roboti a micro:bit': 'Roboty a micro:bit',
      'Weby': 'Weby', 'Aplikace': 'Aplikácie', 'Tvorba s AI': 'Tvorba s AI', 'Sociální sítě a videa': 'Sociálne siete a videá',
      'Učíte? Plán hodiny a odkazy pro třídu →': 'Učíte? Plán hodiny a odkazy pre triedu →', 'Pro učitele': 'Pre učiteľov',
      '<b>{0}</b> where the book has them ({1} section{2} today — any other section can be retold for you)': { one: '<b>{0}</b> tam, kde ich kniha má: dnes {1} jadro', few: '<b>{0}</b> tam, kde ich kniha má: dnes {1} jadrá', other: '<b>{0}</b> tam, kde ich kniha má: dnes {1} jadier' },
    },
    hu: {
      'Jak funguje digitální svět — informatika pro 2. stupeň': 'Hogyan működik a digitális világ — informatika felső tagozatosoknak',
      'Jak funguje digitální svět': 'Hogyan működik a digitális világ',
      'Základy informatiky a umělé inteligence pro 2. stupeň: 24 klíčových konceptů v 6 kapitolách.': 'Az informatika és a mesterséges intelligencia alapjai felső tagozatosoknak: 24 kulcsfogalom 6 fejezetben.',
      'Pochopit, jak to funguje': 'Megérteni, hogyan működik',
      'Něco vytvořit': 'Valamit alkotni',
      'Rozumět AI': 'Érteni az MI-t',
      'Chránit se na netu': 'Biztonságban a neten',
      'Příklady ze školy, z mobilu i z her · nejdřív srozumitelné vysvětlení.': 'Példák az iskolából, a telefonról és a játékokból · előbb érthető magyarázat.',
      'credits-map': 'A tartalom gerince: a <a href="https://knowledge-map-glitch.vercel.app/" target="_blank" rel="noopener">Glitch informatikai fogalomtérkép</a>, 24 alapfogalomra átdolgozva. A p-book platformot a <a href="https://kam.fit.cvut.cz" target="_blank" rel="noopener">FIT ČVUT</a> és a <a href="https://recombee.com" target="_blank" rel="noopener">Recombee</a> készítette.',
      'credits-made': 'A könyvet és a tanúsítványt az <a href="https://aidetem.cz" target="_blank" rel="noopener">AI dětem</a> adja ki.',
      'chat-intro': 'Kérdezz a saját szavaiddal, például: <i>„mi az az algoritmus?”</i> Megkeresem a választ adó fogalmat, megadom a könyv rövid válaszát és az elolvasandó szakaszt. Ha a könyv nem foglalkozik vele, megmondom, és a kérdést a fenti ✉ gombbal elküldheted a szerzőknek.',
      'Algoritmy': 'Algoritmusok', 'Programování': 'Programozás', 'Data a kódování': 'Adatok és kódolás',
      'Sítě a internet': 'Hálózatok és internet', 'Umělá inteligence': 'Mesterséges intelligencia', 'Bezpečí': 'Biztonság',
      'Mistr informatiky': 'Az informatika mestere',
      'Svět příkladů': 'A példák világa', 'nepovinné': 'nem kötelező', 'Odevšad': 'Bárhonnan', 'Hry': 'Játékok', 'Roboti a micro:bit': 'Robotok és micro:bit',
      'Weby': 'Weboldalak', 'Aplikace': 'Alkalmazások', 'Tvorba s AI': 'Alkotás MI-vel', 'Sociální sítě a videa': 'Közösségi média és videók',
      'Učíte? Plán hodiny a odkazy pro třídu →': 'Tanít? Óravázlat és linkek az osztálynak →', 'Pro učitele': 'Tanároknak',
      '<b>{0}</b> where the book has them ({1} section{2} today — any other section can be retold for you)': '<b>{0}</b> ott, ahol a könyvben van ilyen: ma {1} alapfogalom',
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
