// Service Worker for p-book — full offline support
// Pre-caches the entire book on first visit
const CACHE_NAME = 'pbook-informatika-v10';

const PRECACHE = [
  '/',
  '/index.html',
  '/favicon.svg',
  // JS
  '/js/app.js',
  '/js/config.js',
  '/js/recombee.js',
  '/js/markdown.js',
  '/js/diagrams.js',
  '/js/tutor.js',
  // CSS
  '/css/style.css',
  // Book index
  '/content/book.json',
  '/content/concepts.json',
  '/content/concept-map.json',
  '/content/concept-proposals.json',
  '/jak-funguje-ziva-kniha.md',
  // Games
  '/games/ai-nebo-ne.json',
  '/games/algoritmus-caj.json',
  '/games/bublina.json',
  '/games/data-tridicka.json',
  '/games/fakt-manipulace.json',
  '/games/graf-triky.json',
  '/games/hardware-software.json',
  '/games/herni-smycka-poradi.json',
  '/games/kod-stavebnice.json',
  '/games/phishing-lovec.json',
  '/games/prompt-sila.json',
  '/games/web-vrstvy.json',
  // Images
  '/images/anim-generativni-model.svg',
  '/images/anim-herni-smycka.svg',
  '/images/anim-request-response.svg',
  '/images/anim-rizeni-toku.svg',
  '/images/anim-sila-hesla.svg',
  '/images/comic-brouk.svg',
  '/images/comic-bublina.svg',
  '/images/comic-ch1-api.svg',
  '/images/comic-ch11-herni-design.svg',
  '/images/comic-ch12-micro-bit.svg',
  '/images/comic-ch4-datova-gramotnost.svg',
  '/images/comic-ch5-doporucovaci-systemy.svg',
  '/images/comic-ch6-bezpecne-chovani-na-sitich.svg',
  '/images/comic-cloud.svg',
  '/images/comic-doslovny-robot.svg',
  '/images/comic-halucinace.svg',
  '/images/comic-iluze.svg',
  '/images/comic-phishing.svg',
  '/images/diagram-api-cisnik.svg',
  '/images/diagram-cloud-cesta.svg',
  '/images/diagram-datovy-cyklus.svg',
  '/images/diagram-dekompozice.svg',
  '/images/diagram-doporucovaci-smycka.svg',
  '/images/diagram-dva-zamky-2fa.svg',
  '/images/diagram-ekonomika-pozornosti.svg',
  '/images/diagram-frontend-backend.svg',
  '/images/diagram-klient-server.svg',
  '/images/diagram-phishing-anatomie.svg',
  '/images/diagram-promenne-krabicky.svg',
  '/images/diagram-relacni-model.svg',
  '/images/diagram-rizeni-toku.svg',
  '/images/diagram-senzory-aktuatory.svg',
  '/images/diagram-tri-vrstvy-webu.svg',
  '/images/diagram-uceni-z-dat.svg',
  '/images/diagram-vstup-zpracovani-vystup.svg',
  '/images/diagram-zavadejici-graf.svg',
  '/images/hero-digital.svg',
  '/images/og-cover.svg',
  // All content markdown files
  '/content/ch1-digitalni-zaklady/01-spine-hardware-a-software.md',
  '/content/ch1-digitalni-zaklady/01a-game-hardware-software.md',
  '/content/ch1-digitalni-zaklady/01t-tldr-hardware.md',
  '/content/ch1-digitalni-zaklady/02-spine-data-a-informace.md',
  '/content/ch1-digitalni-zaklady/03-spine-internet-a-sit.md',
  '/content/ch1-digitalni-zaklady/04-spine-cloud-a-server.md',
  '/content/ch1-digitalni-zaklady/04b-sidebar-comic-cloud.md',
  '/content/ch1-digitalni-zaklady/04s-story-cloud.md',
  '/content/ch1-digitalni-zaklady/05-spine-api.md',
  '/content/ch1-digitalni-zaklady/05x-sidebar-comic-ch1-api.md',
  '/content/ch1-digitalni-zaklady/05t-tldr-api.md',
  '/content/ch2-informaticke-mysleni/01-spine-dekompozice.md',
  '/content/ch2-informaticke-mysleni/01w-worked-dekompozice.md',
  '/content/ch2-informaticke-mysleni/02-spine-abstrakce.md',
  '/content/ch2-informaticke-mysleni/03-spine-rozpoznavani-vzoru.md',
  '/content/ch2-informaticke-mysleni/04-spine-algoritmus.md',
  '/content/ch2-informaticke-mysleni/04a-game-algoritmus-caj.md',
  '/content/ch2-informaticke-mysleni/04s-story-algoritmus.md',
  '/content/ch2-informaticke-mysleni/04x-sidebar-comic-algoritmus.md',
  '/content/ch2-informaticke-mysleni/05-spine-rizeni-toku.md',
  '/content/ch2-informaticke-mysleni/05a-anim-rizeni-toku.md',
  '/content/ch3-programovani/01-spine-promenne-a-datove-typy.md',
  '/content/ch3-programovani/01w-worked-promenne.md',
  '/content/ch3-programovani/02-spine-podminky-v-kodu.md',
  '/content/ch3-programovani/02c-code-podminky.md',
  '/content/ch3-programovani/03-spine-cykly-v-kodu.md',
  '/content/ch3-programovani/03a-game-kod-stavebnice.md',
  '/content/ch3-programovani/03c-code-cykly.md',
  '/content/ch3-programovani/04-spine-funkce-a-procedury.md',
  '/content/ch3-programovani/05-spine-ladeni-a-testovani.md',
  '/content/ch3-programovani/05q-question-projekt.md',
  '/content/ch3-programovani/05x-sidebar-comic-ladeni.md',
  '/content/ch4-data-databaze/01-spine-datova-gramotnost.md',
  '/content/ch4-data-databaze/01x-sidebar-comic-ch4-datova-gramotnost.md',
  '/content/ch4-data-databaze/01s-story-datova-gramotnost.md',
  '/content/ch4-data-databaze/02-spine-datovy-cyklus.md',
  '/content/ch4-data-databaze/02t-tldr-datovy-cyklus.md',
  '/content/ch4-data-databaze/03-spine-strukturovana-vs-nestrukturovana-data.md',
  '/content/ch4-data-databaze/03a-game-data-tridicka.md',
  '/content/ch4-data-databaze/04-spine-tabulky-a-relacni-model.md',
  '/content/ch4-data-databaze/04w-worked-tabulky.md',
  '/content/ch4-data-databaze/05-spine-vizualizace-a-volba-grafu.md',
  '/content/ch4-data-databaze/05g-game-graf-triky.md',
  '/content/ch4-data-databaze/05w-worked-graf.md',
  '/content/ch5-umela-inteligence/01-spine-co-je-a-co-neni-ai.md',
  '/content/ch5-umela-inteligence/01a-game-ai-nebo-ne.md',
  '/content/ch5-umela-inteligence/01t-tldr-co-je-ai.md',
  '/content/ch5-umela-inteligence/02-spine-ai-se-uci-z-dat.md',
  '/content/ch5-umela-inteligence/02s-story-uceni-z-dat.md',
  '/content/ch5-umela-inteligence/03-spine-jak-funguje-generativni-model.md',
  '/content/ch5-umela-inteligence/03b-sidebar-comic-halucinace.md',
  '/content/ch5-umela-inteligence/04-spine-doporucovaci-systemy.md',
  '/content/ch5-umela-inteligence/04x-sidebar-comic-ch5-doporucovaci-systemy.md',
  '/content/ch5-umela-inteligence/05-spine-prompt-a-promptova-gramotnost.md',
  '/content/ch5-umela-inteligence/05g-game-prompt-sila.md',
  '/content/ch5-umela-inteligence/05w-worked-prompt.md',
  '/content/ch5-umela-inteligence/06-spine-overovani-vystupu.md',
  '/content/ch5-umela-inteligence/06t-tldr-overovani.md',
  '/content/ch5-umela-inteligence/07-spine-vlastni-agency.md',
  '/content/ch5-umela-inteligence/08-spine-kdy-ai-ne-pouzit-a-disclosure.md',
  '/content/ch5-umela-inteligence/08q-question-ai-postoj.md',
  '/content/ch5-umela-inteligence/09-spine-bias-a-ferovost.md',
  '/content/ch5-umela-inteligence/10-spine-soukromi-pri-praci-s-ai.md',
  '/content/ch6-kyberbezpecnost/01-spine-hesla-a-2fa.md',
  '/content/ch6-kyberbezpecnost/01a-anim-sila-hesla.md',
  '/content/ch6-kyberbezpecnost/01t-tldr-hesla.md',
  '/content/ch6-kyberbezpecnost/02-spine-phishing-a-socialni-inzenyrstvi.md',
  '/content/ch6-kyberbezpecnost/02a-game-phishing-lovec.md',
  '/content/ch6-kyberbezpecnost/02b-sidebar-comic-phishing.md',
  '/content/ch6-kyberbezpecnost/02s-story-phishing.md',
  '/content/ch6-kyberbezpecnost/03-spine-soukromi-a-digitalni-stopa.md',
  '/content/ch6-kyberbezpecnost/04-spine-bezpecne-chovani-na-sitich.md',
  '/content/ch6-kyberbezpecnost/04x-sidebar-comic-ch6-bezpecne-chovani-na-sitich.md',
  '/content/ch6-kyberbezpecnost/05-spine-zakladni-hygiena.md',
  '/content/ch7-digitalni-obcanstvi/01-spine-kriticke-mysleni-online.md',
  '/content/ch7-digitalni-obcanstvi/02-spine-jak-funguji-algoritmy-siti.md',
  '/content/ch7-digitalni-obcanstvi/02a-game-bublina.md',
  '/content/ch7-digitalni-obcanstvi/02x-sidebar-comic-bublina.md',
  '/content/ch7-digitalni-obcanstvi/03-spine-dezinformace-a-manipulace.md',
  '/content/ch7-digitalni-obcanstvi/03g-game-fakt-manipulace.md',
  '/content/ch7-digitalni-obcanstvi/04-spine-digitalni-stopa-a-soukromi.md',
  '/content/ch7-digitalni-obcanstvi/05-spine-digitalni-wellbeing.md',
  '/content/ch7-digitalni-obcanstvi/05q-question-wellbeing.md',
  '/content/ch7-digitalni-obcanstvi/05s-story-wellbeing.md',
  '/content/ch8-tvorba-webu/01-spine-jak-funguje-web.md',
  '/content/ch8-tvorba-webu/02-spine-html.md',
  '/content/ch8-tvorba-webu/02g-game-web-vrstvy.md',
  '/content/ch8-tvorba-webu/02t-tldr-html.md',
  '/content/ch8-tvorba-webu/03-spine-css.md',
  '/content/ch8-tvorba-webu/04-spine-domena-a-hosting.md',
  '/content/ch8-tvorba-webu/05-spine-interaktivita-javascript.md',
  '/content/ch8-tvorba-webu/05c-code-javascript.md',
  '/content/ch9-tvorba-aplikaci/01-spine-co-je-aplikace.md',
  '/content/ch9-tvorba-aplikaci/02-spine-no-code-low-code.md',
  '/content/ch9-tvorba-aplikaci/03-spine-logika-aplikace.md',
  '/content/ch9-tvorba-aplikaci/03w-worked-logika.md',
  '/content/ch9-tvorba-aplikaci/04-spine-vibecoding.md',
  '/content/ch9-tvorba-aplikaci/04x-sidebar-comic-vibecoding.md',
  '/content/ch9-tvorba-aplikaci/05-spine-ai-nastroje-pro-tvorbu.md',
  '/content/ch10-tvorba-obsahu/01-spine-vizualni-jazyk.md',
  '/content/ch10-tvorba-obsahu/02-spine-prompt-pro-media.md',
  '/content/ch10-tvorba-obsahu/03-spine-generativni-obraz.md',
  '/content/ch10-tvorba-obsahu/04-spine-etika-autorstvi-a-oznacovani.md',
  '/content/ch11-herni-vyvoj/01-spine-herni-smycka-scena-a-objekty.md',
  '/content/ch11-herni-vyvoj/01a-game-herni-smycka.md',
  '/content/ch11-herni-vyvoj/02-spine-vstup-hrace-stavy-a-skore.md',
  '/content/ch11-herni-vyvoj/02c-code-vstup-hrace.md',
  '/content/ch11-herni-vyvoj/03-spine-kolize-a-jednoducha-fyzika.md',
  '/content/ch11-herni-vyvoj/04-spine-herni-design.md',
  '/content/ch11-herni-vyvoj/04x-sidebar-comic-ch11-herni-design.md',
  '/content/ch11-herni-vyvoj/05-spine-scratch-jako-vstup.md',
  '/content/ch12-fyzicky-computing/01-spine-vstup-zpracovani-vystup-na-zarizeni.md',
  '/content/ch12-fyzicky-computing/02-spine-senzory-a-aktuatory.md',
  '/content/ch12-fyzicky-computing/02t-tldr-senzory.md',
  '/content/ch12-fyzicky-computing/03-spine-micro-bit.md',
  '/content/ch12-fyzicky-computing/03x-sidebar-comic-ch12-micro-bit.md',
  '/content/ch12-fyzicky-computing/04-spine-udalosti-a-rizeni-vystupu.md',
];

// Install: pre-cache with resilience (skip individual failures)
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(async cache => {
      await Promise.allSettled(PRECACHE.map(url =>
        cache.add(url).catch(() => console.warn('SW: skip', url))
      ));
    })
  );
  self.skipWaiting();
});

// Activate: clean old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
    ))
  );
  self.clients.claim();
});

// Fetch: API = network only; everything else = cache first, update in background
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  if (url.pathname.startsWith('/.netlify/') || url.pathname.startsWith('/api/')) {
    event.respondWith(fetch(event.request).catch(() =>
      new Response('{"error":"offline"}', { status: 503, headers: { 'Content-Type': 'application/json' } })
    ));
    return;
  }
  // Only same-scheme GETs are cacheable — browser extensions (chrome-extension://)
  // and other schemes throw on cache.put and just pollute the console.
  const _p = new URL(event.request.url).pathname;
  if (_p.startsWith('/api/') || _p.startsWith('/community/')) return;   // vždy ze sítě (čerstvá komunita)
  if (event.request.method !== 'GET' || !event.request.url.startsWith('http')) {
    return;
  }
  // Book content changes with every deploy — network-first with forced
  // revalidation (bypasses stale HTTP caches); the cache is only the
  // offline fallback. Cache-first here once served an hour-old book.json
  // and "the comics are nowhere" (2026-07-08).
  const _u = new URL(event.request.url);
  if (_u.origin === location.origin && _u.pathname.startsWith('/content/')) {
    event.respondWith(
      fetch(event.request, { cache: 'no-cache' }).then(r => {
        if (r.ok) { const c = r.clone(); caches.open(CACHE_NAME).then(cache => cache.put(event.request, c)); }
        return r;
      }).catch(() => caches.match(event.request))
    );
    return;
  }
  event.respondWith(
    caches.match(event.request).then(cached => {
      const net = fetch(event.request).then(r => {
        if (r.ok && r.type === 'basic') { const c = r.clone(); caches.open(CACHE_NAME).then(cache => cache.put(event.request, c)); }
        return r;
      }).catch(() => cached);
      return cached || net;
    })
  );
});
