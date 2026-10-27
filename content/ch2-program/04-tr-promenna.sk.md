---
id: promenna-sk
translationOf: promenna
lang: sk
type: spine
title: "Premenná: pamäť programu"
readingTime: 1
standalone: true
teaser: "Na ikone chatu svietia 3 neprečítané správy. Príde štvrtá a číslo sa zmení. Kde si mobil to číslo pamätá?"
voice: universal
parent: null
diagram: promenne-krabicky-sk
core: true
recallQ: "Skóre je 5. Program vykoná „nastav skóre na 3“ a potom „zmeň skóre o 2“. Koľko je skóre?"
recallA: "5. Nastavenie prepíše hodnotu na 3, zmena o 2 ju zvýši na 5. Premenná si pamätá len poslednú hodnotu."
lens: generic
visuality: balanced
depth: intro
formalism: none
lengthBand: standard
genre: worked-example
status: accepted
concept: promenna
conceptTitle: "Premenná: pamäť programu"
objective: "Na ikone chatu svietia 3 neprečítané správy. Príde štvrtá a číslo sa zmení. Kde si mobil to číslo pamätá?"
state: core
highlights:
  - "Názov a aktuálna hodnota (práve jedna)"
  - "Nastav vs. zmeň o; priradenie prepíše starú hodnotu"
  - "Premenná ako stav programu (skóre, životy, režim)"
carriers: prose|diagram
---

Na ikone chatu svietia 3 neprečítané správy. Príde štvrtá a číslo sa zmení. Kde si mobil to číslo pamätá?

**Premenná** je pomenovaná škatuľka v pamäti programu. V jednej chvíli drží **práve jednu hodnotu**: skóre, životy, meno. Program ju vie prečítať aj zmeniť.

Pozor na dva rôzne príkazy. **Nastav na** hodnotu prepíše. **Zmeň o** k hodnote pripočíta, alebo odpočíta.

Prejdi kúsok hry. Na začiatku je **skóre** 0 a **životy** 3. Zoberieš mincu: *zmeň skóre o 1*, skóre je 1. Ďalšia minca: 2. Zásah od nepriateľa: *zmeň životy o −1*, životy sú 2. Bonusová truhlica: *nastav skóre na 10*. Teraz je skóre 10 a dvojka zmizla. Minca: 11. Ďalší zásah: životy sú 1.

Škatuľka drží **len poslednú hodnotu**. Keď použiješ **nastav na**, stará hodnota zmizne. Preto si programátori pri hľadaní chýb píšu **trasovaciu tabuľku**: po každom kroku zapíšu, čo je v škatuľkách.

Hodnotám všetkých premenných v jednej chvíli sa hovorí **stav programu**. Skóre 11 a jeden život: to je stav tvojej hry teraz.

V programoch uvidíš zápis **skóre = skóre + 1**. Nie je to rovnica z matiky. Znamená: vezmi, čo je v škatuľke, pripočítaj 1 a výsledok do škatuľky znova ulož.

**Vyskúšaj to!** Vymysli, aké premenné by potrebovala jednoduchá hra „hádaj číslo“. Čo si musí program pamätať? (Aspoň tajné číslo, posledný tip hráča a počet pokusov.) Ktorá z nich sa počas hry mení najčastejšie a ktorá sa nezmení vôbec?

> **Pozor, častý omyl:** „x = x + 1 je nezmysel, pretože to neplatí ako rovnica.“ V programe to nie je rovnica, ale príkaz: vezmi hodnotu zo škatuľky x, pripočítaj 1 a výsledok do škatuľky vráť. Škatuľka si pritom pamätá len poslednú hodnotu, nie všetky predchádzajúce.

**Ďalej:** Premenná drží jednu hodnotu. Tabuľka ich drží tisíce, usporiadané do riadkov a stĺpcov. → [Tabuľka: dáta s poriadkom](#c/tabulka-a-evidence)
