# Jak funguje digitální svět — p-book

Bezplatná **interaktivní učebnice informatiky a umělé inteligence** pro 2. stupeň ZŠ (primárně 8. třída). Česky, s kvízy, misemi a personalizovaným čtením ve stylu Netflixu.

**Obsahová páteř:** core vrstva [Mapy informatických konceptů Glitch](https://knowledge-map-glitch.vercel.app/) organizace [AI dětem](https://aidetem.cz) — **63 konceptů ve 12 tématech**, navázaných na revidované RVP Informatika (2024) a mezinárodní rámce (CSTA K-12, UNESCO AI Competency Framework, AI4K12, DigComp 2.2).

Fork **nejnovějšího p-book enginu** (`recsys-pbook`, stav k 15. 7. 2026) s fazetovou personalizací, kontrakty konceptů a živou knihou. UI kompletně počeštěno.

## Kapitoly

| # | Téma | Sekce |
|---|------|-------|
| 1 | Digitální základy | 5 |
| 2 | Informatické myšlení a algoritmizace | 5 |
| 3 | Programování | 5 |
| 4 | Data, databáze a datová gramotnost | 5 |
| 5 | Umělá inteligence | 10 |
| 6 | Kyberbezpečnost a digitální bezpečí | 5 |
| 7 | Digitální občanství, média a wellbeing | 5 |
| 8 | Tvorba webů | 5 |
| 9 | Tvorba aplikací a vibecoding | 5 |
| 10 | Tvorba digitálního obsahu s AI | 4 |
| 11 | Herní vývoj | 5 |
| 12 | Fyzický computing, robotika a IoT | 4 |

Pořadí kapitol sleduje metodiku mapy: nejdřív páteř (základy → myšlení → programování → data → AI) s bezpečnostním rámcem (kyberbezpečnost, občanství), pak tvořivá vlna (weby → aplikace → obsah → hry → robotika).

## Didaktika

- Každá sekce = jeden koncept mapy: hook ze života žáka, jádro s tučnými klíčovými větami, příklady z appek, aktivita „Zkus to!“ / „Zamysli se!“, zajímavost a most na související koncepty.
- Frontmatter `recallQ`/`recallA` pohání kvízy s rozloženým opakováním.
- Řídící princip: **„ověřuj, ale využívej“** — všude, kde se AI používá jako nástroj, je reflexní mikro-krok (ověř výstup, hledej bias, přiznej použití AI).
- Texty píšou lidé + AI (Claude); vše podléhá lidské redakci. Stav: první kompletní draft core obsahu.

## Spuštění lokálně

```bash
node serve-local.js
# otevři http://localhost:8000
```

Statický web bez build kroku — nasadíš přetažením na Netlify/Vercel/GitHub Pages. Po nasazení:

1. doplň finální URL do `sitemap.xml` (placeholder `REPLACE-WITH-YOUR-DOMAIN`), `robots.txt` a OG metadat v `index.html`,
2. případně zapni Recombee personalizaci v `js/config.js` (`recombee.enabled`) a doplň token do `.env`.

## Struktura obsahu

```
content/book.json           # index kapitol
content/chN-*/NN-spine-*.md # sekce (Markdown + YAML frontmatter)
games/                      # minihry (JSON) — zatím prázdné
images/                     # SVG ilustrace
```

Jak přispívat: viz [CONTRIBUTING.md](CONTRIBUTING.md). Validace obsahu: `node .github/scripts/validate-content.js`. Po úpravě obsahu přegeneruj koncepty: `node scripts/migrate-facets.js`. Pravidla pro fazety a AI spolupráci: `AGENTS.md`.

## Licence

Obsah: [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/) · Kód platformy: MIT
