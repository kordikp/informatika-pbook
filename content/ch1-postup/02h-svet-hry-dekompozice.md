---
id: svet-hry-dekompozice
type: spine
title: "Hra rozložená na kousky"
readingTime: 1
standalone: true
teaser: "Chceš udělat hru, kde košík chytá padající jablka. Prázdná obrazovka mlčí. Kde vůbec začít?"
voice: universal
parent: null
diagram: null
core: false
recallQ: "Jak rozložíš úkol „uspořádat třídní výlet“ a proč záleží na pořadí částí?"
recallA: "Na menší úlohy: cíl a rozpočet, místo, doprava, program, přihlášky. Některé závisí na jiných: dopravu objednáš až po výběru místa a počtu lidí."
lang: cs
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
  - "Zadání: výchozí stav, cíl, omezení"
  - "Dílčí úlohy a jejich závislosti (co musí být hotové dřív)"
  - "Pojmenovaná dílčí úloha je v kódu podprogram"
carriers: prose|image
---

Chceš udělat hru, kde košík chytá padající jablka. Prázdná obrazovka mlčí. Kde vůbec začít?

Nejdřív **zadání**: co máš, co chceš a co nesmíš. Máš Scratch a jedno odpoledne (**výchozí stav**). Chceš hru, kde košík chytá jablka, za chycení je bod a po třech minutích konec (**cíl**). A **omezení**: jedna obrazovka, ovládání šipkami.

Pak hru **rozložíš na části**, které zvládneš každou zvlášť: pohyb košíku, padání jablka, chycení, skóre a životy, konec hry.

![Hra Chytání jablek rozložená na části](images/svet-hry-rozklad.svg)

Na **pořadí** záleží. Chycení nevyzkoušíš, dokud se košík nehýbe a jablko nepadá. Skóre nemá co počítat, dokud nefunguje chycení. Proto stavíš odspodu: nejdřív pohyb, pak padání, pak chycení, nakonec skóre a konec hry.

Každou část si můžeš **pojmenovat** a zabalit do vlastního bloku. Ve Scratchi: *Moje bloky → Vytvořit blok → „pohyb košíku“*. Pojmenovaný kousek kódu je **podprogram**. Hlavní program se pak čte skoro jako obsah knihy: *pohyb košíku, padání jablka, kontrola chycení*.

**Zkus to!** Rozlož na části hru Had. Co všechno musí umět a co z toho musí fungovat dřív než ostatní?

**Dál ve světě her:** → [Hitbox: rytíř je obdélník](#svet-hry-abstrakce-a-model)
