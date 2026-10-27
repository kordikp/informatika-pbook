---
id: svet-roboti-promenna-hu
translationOf: svet-roboti-promenna
lang: hu
type: spine
title: "Lépésszámláló micro:bitből"
readingTime: 1
standalone: true
teaser: "A micro:bitet a cipődre erősíted, és számolja a lépéseidet. Hol tárolja ezt a számot két lépés között?"
voice: universal
parent: null
diagram: null
core: false
recallQ: "A pontszám 5. A program végrehajtja: „állítsd a pontszámot 3-ra”, aztán „változtasd meg a pontszámot 2-vel”. Mennyi a pontszám?"
recallA: "5. A beállítás felülírja az értéket 3-ra, a 2-vel változtatás 5-re emeli. A változó csak az utolsó értékét jegyzi meg."
lens: roboti
visuality: balanced
depth: intro
formalism: none
lengthBand: standard
genre: worked-example
status: accepted
concept: promenna
state: edited
highlights:
  - "Név és aktuális érték (pontosan egy)"
  - "Állítsd be vs. változtasd meg; az értékadás felülírja a régi értéket"
  - "A változó mint a program állapota (pontszám, életek, mód)"
carriers: prose|image|code
---

A micro:bitet a cipődre erősíted, és számolja a lépéseidet. Hol tárolja ezt a számot két lépés között?

Egy **változóban**. Van **neve** (*lépések*), és egy adott pillanatban **pontosan egy értéke**: most 248, a következő lépés után 249.

```
indításkor:
  állítsd [lépések] értékét 0-ra
rázáskor:
  változtasd [lépések] értékét 1-gyel
  szám kijelzése [lépések]
a B gomb lenyomásakor:
  állítsd [lépések] értékét 0-ra
```

![A lépésszámláló a lépések változó értékét mutatja](images/svet-roboti-krokomer.hu.svg)

Két blokk, két különböző dolog:

- Az **állítsd …-ra** felülírja az értéket. Az *állítsd a lépéseket 0-ra* kitörli, ami benne volt: indításkor és a B gombos nullázáskor.
- A **változtasd …-val** hozzáad ahhoz, ami már benne van. Minden rázás: +1.

Ha véletlenül a rázáshoz *állítsd a lépéseket 1-re* kerülne, a lépésszámláló mindig 1-et mutatna. Minden lépés felülírná az előzőt.

A változó az eszköz **állapotát** is tárolja. A *mód* nevű változó lehet *számolok* vagy *szünet*. Az A gomb váltogatja, a rázás pedig csak *számolok* módban ad hozzá. Ugyanaz a rázás, más viselkedés, attól függően, mi van a változóban.

**Próbáld ki!** Építsd meg a lépésszámlálót a MakeCode szimulátorában. Aztán adj hozzá egy A gombot, amely megmutatja, hány lépés van még hátra ezerig. Kell hozzá új változó?

**Tovább a robotok világában:** → [Szív 25 számból](#svet-roboti-kodovani-hu)
