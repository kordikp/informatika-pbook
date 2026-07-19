# Changelog

## 0.3.0 — 2026-07-19

- **Vizuální vrstva**: 18 statických diagramů + 3 SMIL animace (klient–server, herní smyčka, generativní model) v design systemu enginu, napojené přes `diagram:` frontmatter a registr v `js/diagrams.js`.
- **3 komiksy** podle zamčené šablony (Cloud, Halucinace AI, Phishing) jako samostatné bloky s `genre: comic`.
- **8 miniher** (`games/`): Hardware vs. software, Uvař čaj jako robot, Poznej stavební kámen, Datová třídička, AI nebo ne?, Phishing lovec, Praskni bublinu, Postav herní smyčku.
- **5 srovnávacích tabulek** doplněno do sekcí (data, AI disclosure, kyberhygiena, doména/hosting, AI nástroje).
- Kniha nyní: 74 bloků / 63 konceptů; fazety a kontrakty přemigrované, carriers odvozeny (prose|diagram|table|image|code).
- **Sol pipeline**: `scripts/sol-run.sh` — po doplnění OPENAI_API_KEY do `.env` vygeneruje komiks ke každému konceptu (`comics`) a přeleští všechna SVG (`polish`) modelem gpt-5.6-sol; zadání skriptů počeštěna.

## 0.2.0 — 2026-07-19

- **Přestavba na nejnovější engine** z `recsys-pbook` (commity do 15. 7. 2026): fazetový systém (lens/depth/formalism/visuality/lengthBand/genre/lang), kontrakty konceptů (`content/concepts.json`), steering, historie čtení, O(1) index bloků, opravy pádů profilu, oprava chrome-extension chyby v service workeru.
- Frontmatter všech 63 sekcí rozšířen o fazety (`lang: cs`, highlights → mustCover) a zmigrován skriptem `scripts/migrate-facets.js` (63 konceptů, 0 mezer v kontraktech).
- Kompletní počeštění UI enginu (~450 řetězců v app.js, tutor.js, recombee.js, index.html) vč. tutoru, misí, kvízů, certifikátů a onboardingu.
- Nové hero a OG ilustrace v design systemu enginu (světlé pozadí, fialová/zelená/jantarová, karty s flow).
- Steering/generation/community vypnuty v configu (vyžadují backend s API klíči); zapnutí je připravené.
- Oprava detekce pokročilé mise pro české názvy obtížností.

## 0.1.0 — 2026-07-19

- Fork platformy p-book (z recsys4kids-pbook-cs) pro učebnici „Jak funguje digitální svět“.
- Kompletní core obsah Mapy informatických konceptů Glitch: 63 sekcí ve 12 kapitolách (česky, cílovka 8. třída ZŠ).
- Pořadí kapitol podle metodiky mapy (páteř → bezpečnostní rámec → tvořivá vlna).
- 5 nových misí (Rozlušti digitální svět, Mysli jako informatik, Prokoukni AI, Ubraň svůj digitální život, Postav a sdílej).
- Nová banka rychlých kvízů a pojmů profilu (knowledge cloud) pro informatiku.
- recallQ/recallA u všech sekcí pro rozložené opakování.
- Nové hero/OG ilustrace v paletě Glitch (žlutá/bílá/černá).
- Recombee personalizace vypnuta (bez databáze pro tuto knihu); aplikace degraduje na lokální doporučování.
- Přegenerován service worker, sitemap, robots.txt, llms.txt a manifesty.
