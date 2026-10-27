---
id: svet-roboti-opakovani-sk
translationOf: svet-roboti-opakovani
lang: sk
type: spine
title: "Blok „stále“"
readingTime: 1
standalone: true
teaser: "micro:bit stráži teplotu v izbe celý deň. Nikto mu nemusí stokrát napísať „zmeraj teplotu“. Stačí raz."
voice: universal
parent: null
diagram: null
core: false
recallQ: "Kedy použiješ „opakuj 10×“ a kedy „opakuj, kým…“?"
recallA: "Pevný počet, keď vopred vieš koľkokrát. „Kým“, keď to závisí od toho, čo sa stane, napríklad kým robot nenarazí na stenu."
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
  - "Telo cyklu a počet opakovaní"
  - "Opakuj n× vs. opakuj, kým (podmienka ukončenia)"
  - "Konečnosť: cyklus musí skončiť, inak sa program zacyklí"
carriers: prose|code
---

micro:bit stráži teplotu v izbe celý deň. Nikto mu nemusí stokrát napísať „zmeraj teplotu“. Stačí raz.

V MakeCode je blok **stále** (*forever*). Čo doň vložíš, je **telo cyklu**, a to sa opakuje, kým je doštička zapnutá:

```
stále:
  zobraz číslo (teplota)
  pauza 1000 ms
```

Teplomer tak ukáže novú hodnotu každú sekundu. Nekonečná slučka je tu **zámer**: zariadenie má bežať, kým ho nevypneš.

Inokedy vopred vieš, **koľkokrát**. *Opakuj 3×: rozsvieť srdce, pauza, zhasni* a srdce blikne presne trikrát. A niekedy to závisí od toho, **čo sa stane**: *opakuj, kým nie je stlačené tlačidlo A: hraj melódiu*. Melódia hrá, kým nestlačíš A.

Podmienka „kým“ sa kontroluje **na začiatku každého kola**. Keď stlačíš A uprostred melódie, kolo dohrá do konca a až potom slučka skončí.

Pozor, nech slučka „kým“ raz **skončí**. *Opakuj, kým teplota nie je 100 °C* v izbe neskončí nikdy. Teplota tam stovku nedosiahne, program sa **zacyklí** a kód za slučkou sa nikdy nespustí.

**Vyskúšaj to!** Postav v simulátore MakeCode (makecode.microbit.org) blikanie srdca: raz trikrát, druhýkrát stále. Čo sa stane s blokom *zobraz text „koniec“* za každou z tých slučiek?

**Ďalej vo svete robotov:** → [Keď je tma, rozsvieť](#svet-roboti-rozhodovani-sk)
