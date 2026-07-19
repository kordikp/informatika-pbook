---
id: ch9-co-je-aplikace
type: spine
title: "Co je aplikace: frontend a backend"
readingTime: 2
standalone: true
teaser: "Appka je divadlo: jeviště vidíš, ale představení drží zákulisí, do kterého nevidíš."
voice: universal
parent: null
diagram: frontend-backend
core: true
recallQ: "Z jakých dvou částí se skládá aplikace a co která dělá?"
recallA: "Frontend je část, kterou vidíš a ovládáš (obrazovky, tlačítka). Backend běží na pozadí — obvykle na serveru — a stará se o data, účty a logiku. Frontend se ptá, backend odpovídá."
highlights:
  - "Aplikace je program pro konkrétní účel"
  - "Frontend je to, co vidíš a ovládáš"
  - "Backend je to, co pracuje na pozadí"
lang: cs
lens: generic
visuality: text-first
depth: intro
formalism: none
lengthBand: standard
genre: explainer
status: accepted
concept: ch9-co-je-aplikace
state: core
carriers: prose|diagram
---

Otevřeš Spotify, klepneš na písničku, hraje. Jednoduché? Na obrazovce ano. Ale mezi klepnutím a první notou se rozjede mašinérie, kterou nevidíš — a právě rozdíl mezi „vidím" a „nevidím" je první věc, kterou musí znát každý, kdo chce appky stavět.

**Aplikace je program pro konkrétní účel** — běží v telefonu, v prohlížeči nebo na počítači. A skoro každá se skládá ze dvou částí:

**Frontend je to, co vidíš a ovládáš:** obrazovky, tlačítka, seznamy, animace, formuláře. Bydlí na tvém zařízení a jeho úkol je mluvit s tebou — u webových aplikací je to přesně to HTML + CSS + JavaScript z minulé kapitoly.

**Backend je to, co pracuje na pozadí:** obvykle na serveru (kapitola 1 — cloud!). Drží data v databázi (kapitola 4 — tabulky!), ověřuje tvoje přihlášení, počítá, rozhoduje, hlídá pravidla. Nemá žádnou tvář; jeho zákazníkem není člověk, ale frontend.

Jak spolu mluví? Přesně tak, jak už víš: **frontend posílá požadavky, backend odpovídá** — přes API. Klepneš na „přehrát" (frontend) → letí požadavek „pošli písničku X" (API) → backend ověří, že máš účet, najde soubor, započítá přehrání → pošle data zpátky → frontend hraje. Celá první kapitola knihy právě zapadla do jednoho obrázku.

Zkus si rozklad na známé appce — Bakaláři: *frontend:* rozvrh na obrazovce, tlačítka, barvičky známek. *backend:* databáze známek celé školy, ověření, že vidíš jen ty svoje, zápis nové známky učitelem. Proto známky vidíš stejné z mobilu i z počítače — nebydlí v zařízení, ale na serveru.

**Zamysli se!** Co z toho, co dělá tvoje oblíbená appka, by fungovalo v letadle bez internetu? To, co ano, zvládá frontend sám; to, co ne, potřebuje backend. (Právě jsi zopakoval test z kapitoly o cloudu — a rozumíš mu teď hlouběji.)

> **Věděl/a jsi?** Slova frontend a backend se používají i mimo IT — v restauraci je frontend číšník a jídelna, backend kuchyň a sklad. Hosté vidí jen první část, ale bez druhé nefunguje nic.

Teď, když víš, z čeho se appka skládá, pojď si jednu postavit — a začneme cestou, která nevyžaduje ani řádek kódu.
