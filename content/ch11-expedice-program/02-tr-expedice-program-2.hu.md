---
id: expedice-program-2-hu
translationOf: expedice-program-2
lang: hu
type: spine
title: "Kihívás: hőmérő a nyaralóban"
readingTime: 1
standalone: false
teaser: "A nyaralóban egy hőmérő lóg, és óránként feljegyzi a hőmérsékletet: fokok = [-3, -1, 2, 5, 4, 0, -2, -6] A szögletes zárójel lista: értékek sora egyetlen doboz…"
voice: universal
parent: null
diagram: null
core: false
lens: generic
visuality: text-first
depth: standard
formalism: none
lengthBand: standard
genre: explainer
status: accepted
concept: expedice-program-2
conceptTitle: "Kihívás: hőmérő a nyaralóban"
objective: "A nyaralóban egy hőmérő lóg, és óránként feljegyzi a hőmérsékletet: fokok = [-3, -1, 2, 5, 4, 0, -2, -6] A szögletes zárójel lista: értékek sora egyetlen doboz…"
state: edited
carriers: prose|code
---

**🧩 Kihívás** · 2. lépés / 5 · [Tizenkét csillag](#expedice-program-hu)

A nyaralóban egy hőmérő lóg, és óránként feljegyzi a hőmérsékletet:
```
fokok = [-3, -1, 2, 5, 4, 0, -2, -6]
```
A szögletes zárójel **lista**: értékek sora egyetlen dobozban. A `for t in fokok:` ciklus egyenként végigmegy az értékeken, és mindegyiket egy időre a `t`-be teszi.

**1. rész.** Hány órán át volt **fagypont alatt**? A nulla nem fagypont alatti. Írj programot, amely ezt kiszámolja. Segít egy `szamlalo = 0` doboz és egy feltétel a cikluson belül.

**2. rész.** Mekkora volt a **legnagyobb melegedés** két egymást követő óra között? A programnak emlékeznie kell az **előző** hőmérsékletre. Hozz létre egy `elozo` dobozt, és állítsd az első hőmérsékletre. Minden körben számold ki a `t - elozo` különbséget, vesd össze az eddigi rekorddal, és a kör végén állítsd be: `elozo = t`.

**Ellenőrzés:** az 1. részben **4**, a 2. részben **3** jön ki.

Ha stimmel, próbáld ki a programot a saját listádon. Mi van, ha a hőmérséklet egész nap csak csökken? Akkor a legnagyobb melegedés negatív, vagy nulla? Ez attól függ, mire állítod a rekordot az elején. Döntsd el, mi a helyes, és igazítsd hozzá a programot.

Ha elakadsz, másold be a kódot a Python Tutorba, és lépkedj. Pontosan látni fogod, mikor melyik doboz változik.

**Következő lépés:** [Elemzés: egy valódi projekt története](#expedice-program-3-hu)
