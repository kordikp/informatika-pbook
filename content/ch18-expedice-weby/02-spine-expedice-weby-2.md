---
id: expedice-weby-2
type: spine
title: "Rozpočet 100 kilobajtů"
readingTime: 1
standalone: false
teaser: "Emin návrh: | soubor | velikost | |---|---| | index.html | 8 kB | | styl.css | 6 kB | | písmo z internetu, 2 řezy | 2 × 25 kB | | fotka z mobilu | 3,2 MB | | k…"
voice: universal
parent: null
diagram: null
core: false
lang: cs
lens: generic
visuality: text-first
depth: standard
formalism: none
lengthBand: standard
genre: explainer
status: accepted
concept: expedice-weby-2
conceptTitle: "Rozpočet 100 kilobajtů"
state: edited
carriers: prose|table
---

**🧩 Výzva** · krok 2 z 5 · [Sto kilobajtů](#expedice-weby)

**Emin návrh:**

| soubor | velikost |
|---|---|
| index.html | 8 kB |
| styl.css | 6 kB |
| písmo z internetu, 2 řezy | 2 × 25 kB |
| fotka z mobilu | 3,2 MB |
| knihovna jQuery kvůli jednomu tlačítku | 87 kB |

**Úkol:**
1. Kolik kB to je dohromady (1 MB počítej jako 1000 kB)? Kolikrát přes rozpočet?
2. Navrhni úpravy tak, aby se web vešel do 100 kB a vypadal skoro stejně. Ke každé napiš, kolik ušetří.
3. Změř svůj web: F12 → Síť (Network) → obnov stránku. Dole najdeš, kolik se přeneslo a kolik bylo požadavků.

**Kritérium úspěchu:** součet do 100 kB a žádný obsah nezmizel.

**Kontrola:** dohromady 3351 kB, tedy zhruba 33,5krát přes rozpočet. Jedna z možných cest:
- písmo nahradí systémové `font-family: system-ui`: 0 kB místo 50 kB;
- fotka zmenšená na šířku 800 pixelů a uložená jako WebP nebo JPG s kvalitou kolem 75: asi 60 kB místo 3200 kB;
- jQuery nahradí pět řádků vlastního JavaScriptu: asi 0,3 kB místo 87 kB.

Výsledek je kolem 74 kB. Největší úspora je skoro vždycky fotka. Fotky, které jsou až dole na stránce, dostanou `loading="lazy"` a stáhnou se, až k nim návštěvník doroluje.

**Další krok:** [Rozeber web, který funguje dvacet let](#expedice-weby-3)
