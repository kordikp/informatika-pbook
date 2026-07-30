// p-book — Jak funguje digitální svět (core obsah Mapy informatických konceptů Glitch)

export const CONFIG = {
  book: {
    title: 'Jak funguje digitální svět',
    author: 'Pavel Kordík & tým AI dětem',
    contentDir: 'content',
    bookIndex: 'content/book.json'
  },

  recombee: {
    enabled: false,             // pro tuto knihu zatím není databáze — app degraduje na lokální doporučování
    database: '',
    scenarios: {
      homepagePersonal: 'homepage-personal',  // Home „Vybrané pro tebe“
      homepageVoice: 'homepage-voice',        // Home výběr podle stylu
      nextRead: 'next-read',                  // Nekonečné čtení — další blok
      contextRelated: 'context-related',      // Související bloky (item-to-item)
      search: 'search',                       // Výsledky hledání
    }
  },

  features: {
    socialPreview: false,
    diagrams: true,
    keyboardNav: true,
    progressTracking: true,
    recommendations: true,
    gamification: true,       // XP, úrovně, odznaky, certifikát — lze vypnout
    personalization: true,    // doporučování a osobní výběry — bez Recombee lokálně
    spaceRepetition: true,    // kvízy s rozloženým opakováním
    missions: true,           // příběhové mise
    games: true,              // minihry (zatím žádné herní bloky)
    highlights: true,         // klíčové body vedle sekce
    steering: true,           // per-blok ovladače (jednodušeji/hlouběji, panel podání)
    generation: true,         // generování na vyžádání — bez klíče na serveru se tlačítko samo skryje (probe)
    community: true,          // sdílené čtenářské varianty — git-backed (/api/community)
  },

  tutor: {
    mode: 'mock',              // 'mock' nebo 'llm' (budoucnost)
    escalationThreshold: 0.3,  // nižší jistota → nabídnout autora
    authorName: 'Pavel'
  },

  // LEGACY: hlasy už nejsou uživatelská volba (nahradily je fazety + preference formátu).
  // Zůstávají JEN jako popisky větví misí a starých `voice:` tagů. Nerozšiřovat.
  voices: {
    explorer: { label: 'Průzkumník', icon: '\u{1F50D}', description: 'Jak to funguje? Ukaž mi!' },
    creator: { label: 'Tvůrce', icon: '\u{1F3A8}', description: 'Chci si něco postavit!' },
    thinker: { label: 'Myslitel', icon: '\u{1F9E0}', description: 'Proč to tak funguje?' }
  },

  // Fazetový systém (Tier 1) — viz _design-collective-pbook.md §3
  // Fazeta popisuje, JAK je koncept vyprávěn — nikdy CO se učí.
  facets: {
    lens:      { label: 'Svět příkladů', values: ['generic', 'ecommerce', 'media', 'social-feeds', 'education', 'jobs'],
                 icons: { generic: '\u{1F310}', ecommerce: '\u{1F6D2}', media: '\u{1F3B5}', 'social-feeds': '\u{1F4F1}', education: '\u{1F393}', jobs: '\u{1F4BC}' } },
    visuality: { label: 'Vizuální styl', values: ['text-first', 'balanced', 'visual-first'], ordered: true },
    depth:     { label: 'Hloubka', values: ['intro', 'standard', 'technical', 'research'], ordered: true },
    formalism: { label: 'Vzorce', values: ['none', 'light', 'full'], ordered: true },
    lengthBand:{ label: 'Délka', values: ['tldr', 'standard', 'deep'], ordered: true },
    genre:     { label: 'Žánr', values: ['explainer', 'story', 'worked-example', 'code-walkthrough', 'comic', 'animation'] },
    lang:      { label: 'Jazyk', values: ['cs', 'en'], icons: { en: 'EN', cs: 'CZ' } },
    carriers:  { label: 'Stavební prvky', values: ['prose', 'table', 'diagram', 'image', 'animation', 'formula', 'code'], derived: true,
                 icons: { prose: '\u{1F4DD}', table: '\u{1F4CA}', diagram: '\u{1F4D0}', image: '\u{1F5BC}', animation: '\u{1F39E}', formula: '\u{2211}', code: '\u{1F4BB}' } },
  },

  // Steering & generování (P1) + ekonomika komunitního katalogu (P2) — vypnuto, ponechány výchozí hodnoty
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
