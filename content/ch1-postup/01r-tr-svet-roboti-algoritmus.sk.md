---
id: svet-roboti-algoritmus-sk
translationOf: svet-roboti-algoritmus
lang: sk
type: spine
title: "Robot nevie, čo myslíš"
readingTime: 1
standalone: true
teaser: "Povieš robotovi „dojdi k nabíjačke“. Nepohne sa. Nevie, kde je, kadiaľ ísť, ani čo znamená „dojdi“."
voice: universal
parent: null
diagram: null
core: false
recallQ: "Prečo návod „natri chlieb“ robotovi nestačí a čo musí spĺňať každý krok algoritmu?"
recallA: "Robot nič nedomýšľa. Každý krok musí byť jednoznačný a vykonateľný pre vykonávateľa, postup musí po konečnom počte krokov skončiť a fungovať pre všetky prípustné vstupy."
lens: roboti
visuality: visual-first
depth: intro
formalism: none
lengthBand: standard
genre: worked-example
status: accepted
concept: algoritmus
state: edited
highlights:
  - "Kroky v presnom poradí; vykonávateľ nevie, čo autor myslel (elementárnosť kroku)"
  - "Jednoznačnosť, konečnosť, všeobecnosť a správnosť ako test, či je postup algoritmom"
  - "Ten istý problém sa dá riešiť rôznymi algoritmami"
carriers: prose|image
---

Povieš robotovi „dojdi k nabíjačke“. Nepohne sa. Nevie, kde je, kadiaľ ísť, ani čo znamená „dojdi“.

Robot vie len pár **elementárnych krokov**: *choď dopredu o 1 políčko*, *otoč sa vľavo o 90°*, *zastav*. Všetko ostatné mu musíš rozpísať. A on to vykoná **doslova**, nič nedomýšľa.

![Robot na mriežke a dve cesty k nabíjačke](images/svet-roboti-mrizka.sk.svg)

Postup pre robota je **algoritmus**, keď prejde štyrmi skúškami:

- **Jednoznačnosť**: *otoč sa* nestačí. Kam? O koľko? *Otoč sa vpravo o 90°* áno.
- **Konečnosť**: *choď, kým nenarazíš* skončí, len keď nejaká stena naozaj príde. Na otvorenej ploche by robot išiel naveky.
- **Všeobecnosť**: postup pre štvorec funguje pre akúkoľvek dĺžku strany, nielen pre jednu: *opakuj 4×: choď o d políčok, otoč sa vľavo o 90°*.
- **Správnosť**: robot naozaj skončí na nabíjačke, nie o políčko vedľa.

K nabíjačke vedie viac ciest, a teda viac **rôznych algoritmov**. Jeden ide najprv hore a potom doprava, druhý naopak. Oba sú správne. Keď je jedna cesta zatarasená, spoznáš, prečo sa oplatí poznať oba.

**Vyskúšaj to!** Napíš kamarátovi algoritmus, ako dôjsť od dverí triedy k tvojej lavici, len z krokov *dopredu o N krokov* a *otoč sa vľavo/vpravo o 90°*. Potom ho nechaj ísť presne podľa neho. Kde sa zasekol?

**Ďalej vo svete robotov:** → [Vozidlo, ktoré sleduje čiaru](#svet-roboti-dekompozice-sk)
