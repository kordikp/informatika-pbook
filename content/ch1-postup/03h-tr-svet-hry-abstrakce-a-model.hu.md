---
id: svet-hry-abstrakce-a-model-hu
translationOf: svet-hry-abstrakce-a-model
lang: hu
type: spine
title: "Hitbox: a lovag egy téglalap"
readingTime: 1
standalone: true
teaser: "A játékban a lovagnak köpenye, kardja és lobogó haja van. Az ütközések szempontjából viszont egy egyszerű téglalap. És ez így van jól."
voice: universal
parent: null
diagram: null
core: false
recallQ: "Miért nem rajzol utcákat a metrótérkép, és hogyan nézne ki gráfként?"
recallA: "Az átszálláshoz elég az állomások és a kapcsolatok ismerete, az utcák csak zavarnának. Az állomások a csúcsok, a köztük lévő kapcsolatok az élek."
lens: hry
visuality: visual-first
depth: intro
formalism: none
lengthBand: standard
genre: explainer
status: accepted
concept: abstrakce-a-model
state: edited
highlights:
  - "Absztrakció: hogy mi a lényeges, az a céltól függ"
  - "A gráf mint modell: csúcsok és élek (metró, barátságok az osztályban, a fejezetek egymásra épülése)"
  - "Egyik modell sem teljes, mindig választás kérdése"
carriers: prose|image
---

A játékban a lovagnak köpenye, kardja és lobogó haja van. Az ütközések szempontjából viszont egy egyszerű téglalap. És ez így van jól.

A játéknak másodpercenként sokszor ki kell derítenie, hogy valami hozzáér-e valamihez. A köpeny minden képpontját ellenőrizni lassú lenne. Ezért a figura köré egy láthatatlan **hitboxot**, egyszerű téglalapot képzel. Az ütközés ezután csak egy kérdés: *átfedi egymást két téglalap?*

![A lovag és a hitboxa, a kazamata térképe gráfként](images/svet-hry-hitbox.hu.svg)

Ez az **absztrakció**: kihagyod, amire az adott **célhoz** nincs szükséged. Az ütközéshez az alak és a helyzet számít, nem a köpeny színe. A kirajzolásnál fordítva van: ott a köpenyt az utolsó képpontig megrajzolják. Ugyanaz a figura, két cél, két különböző modell.

A modell lehet **gráf** is. A kazamata térképe szobák (**csúcsok**) és a köztük lévő ajtók (**élek**) hálózata. A játék ebből tudja, hová juthatsz el egy szobából, és ehhez nem kell ismernie a szőnyegeket vagy a falakon lógó fáklyákat.

Egyetlen modell sem teljes, mindig **választás** kérdése. Túl nagy a hitbox? A játékos meghal, pedig a tüskék „hozzá sem értek”. Túl kicsi? Átsétál az ellenségen. A fejlesztők sokáig hangolják a hitboxokat, mert a játékos pont itt érzi meg, hogy igazságos-e a játék.

**Próbáld ki!** Válassz egy játékot, amellyel játszol. Nagyjából mekkora lehet a figurád hitboxa? Nagyobb vagy kisebb, mint a kép? Játék közben miből veszed észre?

**Tovább a játékok világában:** → [A labda, amely átrepült az ütőn](#svet-hry-over-a-oprav-hu)
