# Changelog

## Engine 7.13.0, SW v96 — 2026-11-01

- **Recombee zapnuté jako A/B test.** Kniha má vlastní databázi `aidetem-informatika-pbook`. Polovina zařízení dostává doporučení a hledání z Recombee, druhá polovina lokální doporučování beze změny (kontrolní skupina). Interakce posílají obě. Skupina zůstává se zařízením, `?rc=1` / `?rc=0` ji připne.
- **Nové police na Domů** (jen skupina Recombee): „Další pro tebe“ řazené podle Recombee (pojmy, po kterých jdou čtenáři s podobnou cestou), „Téma pro tebe: kapitola“ a „Zkus to ve světě …“ s odkazem na misi světa. V Hledat karta „💡 Pojem · kapitola N“ nad výsledky.
- **Lepší signály:** jak velkou část sekce dítě vidělo, úspěch (zopakovaný koncept, vyřešená výzva, vyhraná hra), přiřazení kliku k polici, ze které byl.
- **🔎 Insights v `/admin`** (klíč editora, 30 dní): srovnání skupin A/B, doporučovací místa (zobrazeno → kliknuto → dočteno), hledání (dotazy aspoň ze 2 zařízení, bez výsledku, bez kliknutí → návrh nebo synonymum), otázky bez odpovědi, synonyma, kapitoly a světy po týdnech, kde děti odpadají, která podání se dočítají. Třídy až od 5 zařízení. Veřejný výpis dotazy skrývá.
- **Sync katalogu** po každém produkčním deployi (GitHub Actions `deployment_status`) a skládá plné texty ze všech jazykových balíků (překlady dřív přišly bez typu a názvu).
- **Domů:** police z Recombee berou karty v pořadí stránky a vyhýbají se jen policím nad sebou.

## Engine 7.12.0, SW v95 — 2026-11-01

- **Nový `/admin`** pro editory a učitele pilotu, přepsaný podle toho, co kniha dnes umí. Vstupuje se klíčem editora (bez něj jen veřejné počty).
  - 📊 Přehled: čtenáři po týdnech, posledních 7 dní, co je potřeba zkontrolovat, stav knihy (verze, AI, Recombee, Tiny), nejčtenější sekce.
  - 📚 Obsah: koncepty po kapitolách s počtem podání, čtenářů, 👍 a hlášení; nahoře „Potřebuje pozornost“; pokrytí podání podle faset; náhled, předání do autorského studia, stažení `.md`. Čte jeden balík `content/bundle.cs.json` místo 1554 souborů.
  - 🌱 Přání a návrhy: přání, cíle a „nenašel se text“ seskupené; návrhy konceptů jako krátký seřaditelný seznam (téma, hlasy, AI návrhy, rozbor mapy).
  - 🤝 Příspěvky čtenářů, 🏫 Třídy (pilot podle kódu třídy: zařízení, vracející se, boss, mise, týmy, dotazníky), ✉️ Zprávy, ⚡ AI a kredity (vydělané a utracené ⚡, dárky, zkoušky, sítě na stropu).
  - 🗂 Data: export profilů pro Tiny, export logu, Recombee, pozvánka pro editora, odkazy (/ucitel).
  - Funguje na telefonu a v tmavém režimu.
- **`/api/log`**: data z jiných knih ve sdílené tabulce se do adminu nepletou (`?book=`); nové dotazy `?check`, `?classes`, `?wallet`, `?profiles` jen s klíčem editora.
- **`scripts/pilot-report.mjs`** přeskočí řádky s `classCode: false` (náhledové nasazení).
- Service worker zůstává v95: admin není součástí aplikace pro čtenáře.

## Engine 7.11.0, SW v95 — 2026-10-31

- **Světlý/tmavý režim** je ikona v horní liště. Přístupnost (kontrast, větší ovládání, čitelné písmo, barvoslepost) zůstala v nastavení, bez nápisu „pro všechny, zdarma“.
- **Řekni to jinak** je kompaktní: řádek „Jak to číst“ s podáními, rychlé volby (jednodušeji, hlouběji, víc obrázků, můj svět) a přesné zadání až na požádání. Na telefonu má panel 232 px místo 859 px.
- **Autorské studio:** odstavec se upravuje přímo v textu (tučně, kurzíva, nadpis, seznamy, odkaz, posun, smazání; Enter rozdělí odstavec). V hlavičce je vidět, kolik ⚡ už studio vydělalo, a další milník.
- **Darování ⚡:** dárek 5–50 ⚡ kamarádovi kódem nebo odkazem `?dar=KÓD`. Lze ho zrušit, dokud není vyzvednutý. Platí denní stropy na darování i na přijímání.
- **Profil pro Tiny** (`js/tiny-profile.js`, REQUIREMENTS AC7–AC8): pevné schéma bez volného textu. Je v Profilu, ve „Stáhnout všechna data“ a na serveru (řádek `profile_summary`, data účtu). Mise si pamatují datum splnění a nejlepší skóre bosse. Přihlášení na druhém zařízení slučuje mise, výsledky i karty.
- **Bezpečnost** (engine `SECURITY.md`):
  - `/api/log` už nepřijme záznamy peněženky, galerií, návrhů ani přihlášení. Dřív si přes něj šlo připsat neomezeně ⚡.
  - Veřejný výpis neukazuje kódy dárků, texty dětí ani profily.
  - `/api/generate` nevěří podvrženému `sourceHost`.
  - Anonymní zkoušky AI mají strop i na síť.
  - Přihlášení se zabrzdí po 10 špatných heslech.
  - Návrhy, přepočet statistik a synchronizace Recombee chtějí klíč editora.
  - Chybové hlášky neprozrazují detaily.
- **Dokumentace:** `docs/DEPLOY.md` §4–§8 (Supabase se service_role klíčem a bez politik, proměnné, bezpečnost, data čtenářů a export profilu). Nový soubor `setup-interactions-table.sql`.

## 0.5.0 — 2026-07-30

- **Diverzita podání**: 33 konceptů má 2+ podání různých žánrů — 6 příběhů, 6 řešených příkladů, 4 kódové průchody (Python/JS/Scratch, ověřeno spuštěním), 8 tl;dr, 4 nové komiksy, 2 animovaná podání (SMIL), 3 otázkové bloky, 4 nové minihry. Kniha: 111 bloků, 12 her, 32 SVG.
- **Rozpracování 🌱 konceptů na přání čtenáře**: ghost kontrakty (mustCover z cílů mapy znalostí) v concepts.json; „✨ Rozpracovat hned“ na kartách, v mapě, v Konceptech i read-next → AI napíše první podání podle kontraktu, otevře v čtečce, uloží jako ⚡ soukromé podání a zaloguje poptávku (aktivní po nastavení ANTHROPIC_API_KEY na Vercelu; bez klíče zůstává hlasování).
- **Zájem ve všech plochách**: 🌱 karty i v nekonečném feedu a v panelu „co číst dál“ (preferuje související nenapsaný koncept).
- **Editace**: recepty jedním klepnutím ve formuláři ✏️ Vylepšit (jednodušeji, příklad, zkrátit, odrážky, humor, příběh).

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
