---
id: svet-roboti-kodovani
type: spine
title: "Srdce z 25 čísel"
readingTime: 1
standalone: true
teaser: "Srdíčko na displeji micro:bitu vypadá jako obrázek. Pro destičku je to 25 čísel."
voice: universal
parent: null
diagram: null
core: false
recallQ: "Proč má fotka s větším rozlišením větší soubor?"
recallA: "Skládá se z více pixelů a každý pixel je zakódovaný čísly. Víc pixelů znamená víc čísel, tedy víc bytů."
lang: cs
lens: roboti
visuality: visual-first
depth: intro
formalism: none
lengthBand: standard
genre: explainer
status: accepted
concept: kodovani
state: edited
highlights:
  - "Kódování = domluvená pravidla převodu (pixel → číslo, písmeno → číslo)"
  - "Velikost dat: bit, byte, MB, GB; rozlišení a kvalita zvětšují soubor"
  - "Typ souboru (přípona) říká, jak čísla číst; komprese šetří místo"
carriers: prose|image|code
---

Srdíčko na displeji micro:bitu vypadá jako obrázek. Pro destičku je to 25 čísel.

Displej micro:bitu má 5 × 5 **LED**. Každá je jedno číslo: **0** nesvítí, **9** svítí naplno, mezi tím je jas. Pro jednoduchost tu svítící LED píšeme jako 1 a zhasnutou jako 0. Srdce je pak pět řádků po pěti číslech:

![LED displej 5 × 5 se srdcem a jeho čísly](images/svet-roboti-led.svg)

```
0 1 0 1 0
1 1 1 1 1
1 1 1 1 1
0 1 1 1 0
0 0 1 0 0
```

Pravidlo „0 = zhasnuto, 1 = svítí“ je **kódování**: domluvené pravidlo převodu. Kdo ho zná, složí z čísel zpátky stejný obrázek.

Kolik místa to zabere? S nulou a jedničkou stačí na LED jeden **bit**, celé srdce má 25 bitů, tedy něco přes 3 **byty**. S jasem 0–9 už potřebuješ na LED 4 bity. Víc detailů znamená víc čísel, tedy víc dat. Fotka v mobilu má miliony pixelů po třech číslech, a proto má několik **MB**.

I text jsou čísla: písmeno **A** má v počítači číslo 65 a micro:bit ví, které LED pro něj rozsvítit. Program do destičky posíláš jako soubor **.hex**: přípona říká, že jsou v něm instrukce pro procesor, ne obrázek ani text. A obrázek, kde svítí celý řádek, jde uložit úsporněji: „5× jednička“ místo pěti jedniček. Tomu se říká **komprese**.

**Zkus to!** Nakresli na mřížku 5 × 5 vlastní ikonu a zapiš ji 25 čísly. Pošli čísla kamarádovi. Složí z nich stejný obrázek?

**Dál ve světě robotů:** → [Rádio mezi micro:bity](#svet-roboti-cesta-dat)
