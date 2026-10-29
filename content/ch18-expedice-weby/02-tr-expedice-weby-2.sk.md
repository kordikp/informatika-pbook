---
id: expedice-weby-2-sk
translationOf: expedice-weby-2
lang: sk
type: spine
title: "Rozpočet 100 kilobajtov"
readingTime: 1
standalone: false
teaser: "Emin návrh: | súbor | veľkosť | |---|---| | index.html | 8 kB | | styl.css | 6 kB | | písmo z internetu, 2 rezy | 2 × 25 kB | | fotka z mobilu | 3,2 MB | | kni…"
voice: universal
parent: null
diagram: null
core: false
lens: generic
visuality: text-first
depth: standard
formalism: none
lengthBand: standard
genre: explainer
status: accepted
concept: expedice-weby-2
conceptTitle: "Rozpočet 100 kilobajtov"
objective: "Emin návrh: | súbor | veľkosť | |---|---| | index.html | 8 kB | | styl.css | 6 kB | | písmo z internetu, 2 rezy | 2 × 25 kB | | fotka z mobilu | 3,2 MB | | kni…"
state: edited
carriers: prose|table
---

**🧩 Výzva** · krok 2 z 5 · [Sto kilobajtov](#expedice-weby-sk)

**Emin návrh:**

| súbor | veľkosť |
|---|---|
| index.html | 8 kB |
| styl.css | 6 kB |
| písmo z internetu, 2 rezy | 2 × 25 kB |
| fotka z mobilu | 3,2 MB |
| knižnica jQuery kvôli jednému tlačidlu | 87 kB |

**Úloha:**
1. Koľko kB je to spolu (1 MB počítaj ako 1000 kB)? Koľkokrát nad rozpočet?
2. Navrhni úpravy tak, aby sa web zmestil do 100 kB a vyzeral skoro rovnako. Ku každej napíš, koľko ušetrí.
3. Zmeraj svoj web: F12 → Sieť (Network) → obnov stránku. Dole nájdeš, koľko sa prenieslo a koľko bolo požiadaviek.

**Kritérium úspechu:** súčet do 100 kB a žiadny obsah nezmizol.

**Kontrola:** spolu 3351 kB, teda zhruba 33,5-krát nad rozpočet. Jedna z možných ciest:
- písmo nahradí systémové `font-family: system-ui`: 0 kB namiesto 50 kB;
- fotka zmenšená na šírku 800 pixelov a uložená ako WebP alebo JPG s kvalitou okolo 75: asi 60 kB namiesto 3200 kB;
- jQuery nahradí päť riadkov vlastného JavaScriptu: asi 0,3 kB namiesto 87 kB.

Výsledok je okolo 74 kB. Najväčšia úspora je skoro vždy fotka. Fotky, ktoré sú až dole na stránke, dostanú `loading="lazy"` a stiahnu sa, až keď k nim návštevník doroluje.

**Ďalší krok:** [Rozober web, ktorý funguje dvadsať rokov](#expedice-weby-3-sk)
