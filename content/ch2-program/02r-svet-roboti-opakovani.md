---
id: svet-roboti-opakovani
type: spine
title: "Blok „pořád“"
readingTime: 1
standalone: true
teaser: "micro:bit hlídá teplotu v pokoji celý den. Nikdo mu nemusí stokrát napsat „změř teplotu“. Stačí jednou."
voice: universal
parent: null
diagram: null
core: false
recallQ: "Kdy použiješ „opakuj 10×“ a kdy „opakuj, dokud…“?"
recallA: "Pevný počet, když předem víš kolikrát. „Dokud“, když to záleží na tom, co se stane, třeba dokud robot nenarazí na zeď."
lang: cs
lens: roboti
visuality: text-first
depth: intro
formalism: none
lengthBand: standard
genre: worked-example
status: accepted
concept: opakovani
state: edited
highlights:
  - "Tělo cyklu a počet opakování"
  - "Opakuj n× vs. opakuj, dokud (podmínka ukončení)"
  - "Konečnost: cyklus musí skončit, jinak se program zacyklí"
carriers: prose|code
---

micro:bit hlídá teplotu v pokoji celý den. Nikdo mu nemusí stokrát napsat „změř teplotu“. Stačí jednou.

V MakeCode je blok **pořád** (*forever*). Co do něj vložíš, je **tělo cyklu**, a to se opakuje, dokud je destička zapnutá:

```
pořád:
  zobraz číslo (teplota)
  pauza 1000 ms
```

Teploměr tak ukáže novou hodnotu každou sekundu. Nekonečná smyčka je tady **záměr**: zařízení má běžet, dokud ho nevypneš.

Jindy předem víš, **kolikrát**. *Opakuj 3×: rozsviť srdce, pauza, zhasni* a srdce blikne přesně třikrát. A někdy to záleží na tom, **co se stane**: *opakuj, dokud není stisknuto tlačítko A: hraj melodii*. Melodie hraje, dokud nezmáčkneš A.

Podmínka „dokud“ se kontroluje **na začátku každého kola**. Když zmáčkneš A uprostřed melodie, kolo dohraje do konce a teprve pak smyčka skončí.

Pozor, ať smyčka „dokud“ jednou **skončí**. *Opakuj, dokud teplota není 100 °C* v pokoji neskončí nikdy. Teplota tam stovky nedosáhne, program se **zacyklí** a kód za smyčkou se nikdy nespustí.

**Zkus to!** Postav v simulátoru MakeCode (makecode.microbit.org) blikání srdce: jednou třikrát, podruhé pořád. Co se stane s blokem *zobraz text „konec“* za každou z těch smyček?

**Dál ve světě robotů:** → [Když je tma, rozsviť](#svet-roboti-rozhodovani)
