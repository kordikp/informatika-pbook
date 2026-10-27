---
id: svet-hry-promenna-hu
translationOf: svet-hry-promenna
lang: hu
type: spine
title: "Pontszám, életek, szint"
readingTime: 1
standalone: true
teaser: "A játék emlékszik, hány pontod van, akkor is, amikor éppen nem gondolsz rájuk. Hol tárolja őket?"
voice: universal
parent: null
diagram: null
core: false
recallQ: "A pontszám 5. A program végrehajtja: „állítsd a pontszámot 3-ra”, aztán „változtasd meg a pontszámot 2-vel”. Mennyi a pontszám?"
recallA: "5. A beállítás felülírja az értéket 3-ra, a 2-vel változtatás 5-re emeli. A változó csak az utolsó értékét jegyzi meg."
lens: hry
visuality: balanced
depth: intro
formalism: none
lengthBand: standard
genre: explainer
status: accepted
concept: promenna
state: edited
highlights:
  - "Név és aktuális érték (pontosan egy)"
  - "Állítsd be vs. változtasd meg; az értékadás felülírja a régi értéket"
  - "A változó mint a program állapota (pontszám, életek, mód)"
carriers: prose|image
---

A játék emlékszik, hány pontod van, akkor is, amikor éppen nem gondolsz rájuk. Hol tárolja őket?

**Változókban**. Mindegyiknek van **neve**, és egy adott pillanatban **pontosan egy értéke**: *pontszám = 12, életek = 2, szint = 3*. Amikor az érték megváltozik, a régi eltűnik.

![A játék képernyője: a pontszám, az életek és a szint változók](images/svet-hry-hud.hu.svg)

Vigyázz, két különböző blokk van:

- **állítsd** a pontszámot 0-**ra**: felülírja az értéket, bármi volt is benne. A játék elejére való.
- **változtasd** a pontszámot 1-**gyel**: hozzáadja ahhoz, ami már benne van. Az érme elkapásához való.

A kezdő készítők gyakori hibája: az érménél ez áll: *állítsd a pontszámot 1-re*. A játékos felvesz tíz érmét, és a pontszám még mindig 1. Minden beállítás felülírta az előzőt.

A változók a **játék állapotát** is tárolják. A *mód* nevű változó értéke lehet *menü*, *játék* vagy *vége*, és a játék ennek megfelelően másképp viselkedik: ugyanaz a szóköz a menüben elindítja a játékot, játék közben ugrik, a végén pedig újrakezd. És ha elmented a játékot? A változók értékeit mented el. A betöltés visszaírja őket.

**Próbáld ki!** Találj ki három változót a játékodhoz. Mindegyikhez írd le, mikor állítod be, és mikor változik.

**Tovább a játékok világában:** → [A sprite egy számrács](#svet-hry-kodovani-hu)
