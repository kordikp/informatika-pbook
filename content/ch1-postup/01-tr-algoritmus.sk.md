---
id: algoritmus-sk
translationOf: algoritmus
lang: sk
type: spine
title: "Algoritmus: presný návod"
readingTime: 1
standalone: true
teaser: "Navigácia ťa vedie k babke. Na obchádzke ti za sekundu vymyslí iný presný postup. Prečo sa nikdy nespýta „a ako to myslíš?“"
voice: universal
parent: null
diagram: null
core: true
recallQ: "Prečo návod „natri chlieb“ robotovi nestačí a čo musí spĺňať každý krok algoritmu?"
recallA: "Robot nič nedomýšľa. Každý krok musí byť jednoznačný a vykonateľný pre vykonávateľa, postup musí po konečnom počte krokov skončiť a fungovať pre všetky prípustné vstupy."
lens: generic
visuality: balanced
depth: intro
formalism: none
lengthBand: standard
genre: story
status: accepted
concept: algoritmus
conceptTitle: "Algoritmus: presný návod"
objective: "Navigácia ťa vedie k babke. Na obchádzke ti za sekundu vymyslí iný presný postup. Prečo sa nikdy nespýta „a ako to myslíš?“"
mustCover:
  - "Kroky v presnom poradí; vykonávateľ nevie, čo autor myslel (elementárnosť kroku)"
  - "Jednoznačnosť, konečnosť, všeobecnosť a správnosť ako test, či je postup algoritmom"
  - "Ten istý problém sa dá riešiť rôznymi algoritmami"
state: core
highlights:
  - "Kroky v presnom poradí; vykonávateľ nevie, čo autor myslel (elementárnosť kroku)"
  - "Jednoznačnosť, konečnosť, všeobecnosť a správnosť ako test, či je postup algoritmom"
  - "Ten istý problém sa dá riešiť rôznymi algoritmami"
carriers: prose|image
---

Navigácia ťa vedie k babke. Na obchádzke ti za sekundu vymyslí iný presný postup. Prečo sa nikdy nespýta „a ako to myslíš?“

**Algoritmus** je návod taký presný, že ho vykonávateľ vykoná bez domýšľania. Človek si nejasný pokyn domyslí. Robot nie: urobí **presne to, čo stojí v návode**, a nič viac.

Skús to na krajci s maslom. Pokyn „natri chlieb“ robot nevykoná: ktorý chlieb, čím a koľko masla? Funguje až toto: *vezmi krajec z taniera, vezmi nôž za rukoväť, naber nožom lyžičku masla, roztri maslo po celej hornej strane krajca, polož nôž.* Každý krok sa dá pochopiť len jedným spôsobom a robot ho vie urobiť.

![Algoritmus: presný návod](images/comic-doslovny-robot.sk.svg)

Dobrý algoritmus spĺňa štyri veci:

1. **Jednoznačný:** každý krok sa dá pochopiť len jedným spôsobom.
2. **Vykonateľný:** vykonávateľ každý krok vie urobiť.
3. **Konečný:** po konečnom počte krokov skončí.
4. **Správny a všeobecný:** dá správny výsledok pre všetky prípustné vstupy, napríklad pre každý chlieb, nielen pre jeden.

Ten istý problém sa dá vyriešiť rôznymi algoritmami. Niekto natiera od kraja, iný od stredu. Správne môžu byť obaja.

**Vyskúšaj to!** Nadiktuj kamarátovi, ako natrieť chlieb, a nech robí PRESNE to, čo hovoríš, nič si nedomýšľa. („Vezmi nôž.“ Ktorým koncom?) Uvidíš, koľko krokov ti chýba. Potom návod oprav, až kým nebude fungovať na prvý raz. Práve si napísal algoritmus a odladil ho.

> **Pozor, častý omyl:** „Algoritmus je niečo zložité, čo patrí len do počítača.“ Algoritmus je každý dosť presný návod, napríklad recept. Počítač len potrebuje, aby bol presný úplne.

**Ďalej:** Program je algoritmus zapísaný jazykom, ktorému rozumie počítač. A počítač je ten najdoslovnejší robot. → [Program: vstup → kroky → výstup](#c/program)
