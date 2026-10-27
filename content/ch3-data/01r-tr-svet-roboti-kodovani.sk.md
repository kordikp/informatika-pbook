---
id: svet-roboti-kodovani-sk
translationOf: svet-roboti-kodovani
lang: sk
type: spine
title: "Srdce z 25 čísel"
readingTime: 1
standalone: true
teaser: "Srdiečko na displeji micro:bitu vyzerá ako obrázok. Pre doštičku je to 25 čísel."
voice: universal
parent: null
diagram: null
core: false
recallQ: "Prečo má fotka s väčším rozlíšením väčší súbor?"
recallA: "Skladá sa z viacerých pixelov a každý pixel je zakódovaný číslami. Viac pixelov znamená viac čísel, teda viac bajtov."
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
  - "Kódovanie = dohodnuté pravidlá prevodu (pixel → číslo, písmeno → číslo)"
  - "Veľkosť dát: bit, bajt, MB, GB; rozlíšenie a kvalita zväčšujú súbor"
  - "Typ súboru (prípona) hovorí, ako čísla čítať; kompresia šetrí miesto"
carriers: prose|image|code
---

Srdiečko na displeji micro:bitu vyzerá ako obrázok. Pre doštičku je to 25 čísel.

Displej micro:bitu má 5 × 5 **LED**. Každá je jedno číslo: **0** nesvieti, **9** svieti naplno, medzi tým je jas. Pre jednoduchosť tu svietiacu LED píšeme ako 1 a zhasnutú ako 0. Srdce je potom päť riadkov po päť čísel:

![LED displej 5 × 5 so srdcom a jeho číslami](images/svet-roboti-led.sk.svg)

```
0 1 0 1 0
1 1 1 1 1
1 1 1 1 1
0 1 1 1 0
0 0 1 0 0
```

Pravidlo „0 = zhasnuté, 1 = svieti“ je **kódovanie**: dohodnuté pravidlo prevodu. Kto ho pozná, poskladá z čísel späť rovnaký obrázok.

Koľko miesta to zaberie? S nulou a jednotkou stačí na LED jeden **bit**, celé srdce má 25 bitov, teda niečo cez 3 **bajty**. S jasom 0–9 už potrebuješ na LED 4 bity. Viac detailov znamená viac čísel, teda viac dát. Fotka v mobile má milióny pixelov po troch číslach, a preto má niekoľko **MB**.

Aj text sú čísla: písmeno **A** má v počítači číslo 65 a micro:bit vie, ktoré LED preň rozsvietiť. Program do doštičky posielaš ako súbor **.hex**: prípona hovorí, že sú v ňom inštrukcie pre procesor, nie obrázok ani text. A obrázok, kde svieti celý riadok, sa dá uložiť úspornejšie: „5× jednotka“ namiesto piatich jednotiek. Tomu sa hovorí **kompresia**.

**Vyskúšaj to!** Nakresli na mriežku 5 × 5 vlastnú ikonu a zapíš ju 25 číslami. Pošli čísla kamarátovi. Poskladá z nich rovnaký obrázok?

**Ďalej vo svete robotov:** → [Rádio medzi micro:bitmi](#svet-roboti-cesta-dat-sk)
