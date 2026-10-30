# Jak funguje digitální svět — p-book

**Živě: https://informatika-pbook.vercel.app** · vydává [AI dětem](https://aidetem.cz)

Bezplatná interaktivní učebnice informatiky a umělé inteligence pro 2. stupeň ZŠ (11–15 let), **česky, anglicky, slovensky a maďarsky**. Funguje v prohlížeči i bez sítě (PWA), bez registrace.

- **6 kapitol, 24 jader** (Postup, Program, Data, Stroje a sítě, Umělá inteligence, Bezpečí a ty). Každé jádro má několik podání (článek, hra, komiks, řešený příklad…) a kniha vybírá podle toho, co čtenáře baví.
- **Světy** (hry, roboti a micro:bit, weby, aplikace, tvorba s AI, sociální sítě) a **12 expedic** pro ty, kdo chtějí víc.
- **Mise se závěrečným bossem.** Odpověď vlastními slovy hodnotí AI zkoušející. Když ještě není úplná, položí jednu naváděcí otázku (sokratovsky) a nic neprozradí.
- **Autorské studio:** žáci píšou vlastní podání konceptů a sdílejí je se třídou.
- **Pro učitele:** plán hodiny, odkazy a QR kódy na mise ([/ucitel](https://informatika-pbook.vercel.app/ucitel)).

Obsahová páteř: [Mapa informatických konceptů Glitch](https://knowledge-map-glitch.vercel.app/) organizace AI dětem, navázaná na revidované RVP Informatika (2024), CSTA, AI4K12 a UNESCO AI Competency Framework. Platforma: p-book engine ([kordikp/recsys-pbook](https://github.com/kordikp/recsys-pbook)) z FIT ČVUT.

## Pro vývojáře

| Dokument | Co v něm je |
|---|---|
| [docs/DEPLOY.md](docs/DEPLOY.md) | Nasazení na Vercel, OpenAI token, účet Recombee, Supabase, aktualizace enginu |
| [docs/tiny-integration/REQUIREMENTS.md](docs/tiny-integration/REQUIREMENTS.md) | Požadavky na propojení s Tiny: přihlášení účtem Tiny, boss, profil (DRAFT) |
| [docs/TACR-A-PILOT.md](docs/TACR-A-PILOT.md) | Výstup TAČR (modul pro samovzdělávání) a plán pilotu ve školách |
| [AGENTS.md](AGENTS.md) · [CONTRIBUTING.md](CONTRIBUTING.md) | Pravidla pro obsah a pro AI asistenty |

Lokálně:

```bash
node serve-local.js 8094        # http://localhost:8094; klíče v .env (viz docs/DEPLOY.md)
```

Obsah je v `content/` (Markdown s YAML frontmatter, index `content/book.json`). Svazky `content/bundle.<jazyk>.json` a `content/ucitel.json` se generují při nasazení (`vercel.json` → `buildCommand`), do gitu nepatří.

## Licence

Obsah: [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/) · Kód platformy: MIT · Písmo Space Grotesk: SIL OFL 1.1 (`fonts/space-grotesk/OFL.txt`) · Ikony: [Lucide](https://lucide.dev/license) (ISC)
