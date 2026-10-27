---
id: svet-hry-dekompozice-sk
translationOf: svet-hry-dekompozice
lang: sk
type: spine
title: "Hra rozložená na kúsky"
readingTime: 1
standalone: true
teaser: "Chceš urobiť hru, kde košík chytá padajúce jablká. Prázdna obrazovka mlčí. Kde vôbec začať?"
voice: universal
parent: null
diagram: null
core: false
recallQ: "Ako rozložíš úlohu „zorganizovať triedny výlet“ a prečo záleží na poradí častí?"
recallA: "Na menšie úlohy: cieľ a rozpočet, miesto, doprava, program, prihlášky. Niektoré závisia od iných: dopravu objednáš až po výbere miesta a počtu ľudí."
lens: hry
visuality: visual-first
depth: intro
formalism: none
lengthBand: standard
genre: worked-example
status: accepted
concept: dekompozice
state: edited
highlights:
  - "Zadanie: východiskový stav, cieľ, obmedzenia"
  - "Čiastkové úlohy a ich závislosti (čo musí byť hotové skôr)"
  - "Pomenovaná čiastková úloha je v kóde podprogram"
carriers: prose|image
---

Chceš urobiť hru, kde košík chytá padajúce jablká. Prázdna obrazovka mlčí. Kde vôbec začať?

Najprv **zadanie**: čo máš, čo chceš a čo nesmieš. Máš Scratch a jedno popoludnie (**východiskový stav**). Chceš hru, kde košík chytá jablká, za chytenie je bod a po troch minutiach koniec (**cieľ**). A **obmedzenia**: jedna obrazovka, ovládanie šípkami.

Potom hru **rozložíš na časti**, ktoré zvládneš každú zvlášť: pohyb košíka, padanie jablka, chytenie, skóre a životy, koniec hry.

![Hra Chytanie jabĺk rozložená na časti](images/svet-hry-rozklad.sk.svg)

Na **poradí** záleží. Chytenie nevyskúšaš, kým sa košík nehýbe a jablko nepadá. Skóre nemá čo počítať, kým nefunguje chytenie. Preto staviaš odspodu: najprv pohyb, potom padanie, potom chytenie a nakoniec skóre a koniec hry.

Každú časť si môžeš **pomenovať** a zabaliť do vlastného bloku. V Scratchi: *Moje bloky → Vytvoriť blok → „pohyb košíka“*. Pomenovaný kúsok kódu je **podprogram**. Hlavný program sa potom číta skoro ako obsah knihy: *pohyb košíka, padanie jablka, kontrola chytenia*.

**Vyskúšaj to!** Rozlož na časti hru Had. Čo všetko musí vedieť a čo z toho musí fungovať skôr než ostatné?

**Ďalej vo svete hier:** → [Hitbox: rytier je obdĺžnik](#svet-hry-abstrakce-a-model-sk)
