---
id: svet-roboti-opakovani-hu
translationOf: svet-roboti-opakovani
lang: hu
type: spine
title: "A „mindig” blokk"
readingTime: 1
standalone: true
teaser: "Egy micro:bit egész nap figyeli a szoba hőmérsékletét. Senkinek sem kell százszor leírnia neki, hogy „mérd meg a hőmérsékletet”. Elég egyszer."
voice: universal
parent: null
diagram: null
core: false
recallQ: "Mikor használod azt, hogy „ismételd 10×”, és mikor azt, hogy „ismételd, amíg…”?"
recallA: "Rögzített számot, ha előre tudod, hányszor. „Amíg”-ot, ha attól függ, mi történik, például amíg a robot neki nem megy a falnak."
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
  - "A ciklusmag és az ismétlések száma"
  - "Ismételd n× vs. ismételd, amíg (a leállás feltétele)"
  - "Végesség: a ciklusnak véget kell érnie, különben a program végtelen ciklusba kerül"
carriers: prose|code
---

Egy micro:bit egész nap figyeli a szoba hőmérsékletét. Senkinek sem kell százszor leírnia neki, hogy „mérd meg a hőmérsékletet”. Elég egyszer.

A MakeCode-ban van egy **mindig** (*forever*) blokk. Amit beleteszel, az a **ciklusmag**, és addig ismétlődik, amíg a panel be van kapcsolva:

```
mindig:
  szám kijelzése (hőmérséklet)
  szünet 1000 ms
```

Így a hőmérő másodpercenként új értéket mutat. A végtelen ciklus itt **szándékos**: az eszköznek addig kell futnia, amíg ki nem kapcsolod.

Máskor előre tudod, **hányszor**. *Ismételd 3-szor: gyújtsd ki a szívet, szünet, kapcsold le*, és a szív pontosan háromszor villan fel. Néha pedig attól függ, **mi történik**: *ismételd, amíg az A gomb nincs lenyomva: játssz dallamot*. A dallam addig szól, amíg meg nem nyomod az A-t.

Az „amíg” feltételét **minden kör elején** ellenőrzi. Ha a dallam közepén nyomod meg az A-t, a kör a végéig lejátszódik, és csak utána ér véget a ciklus.

Vigyázz, hogy az „amíg” ciklus egyszer **véget érjen**. Az *ismételd, amíg a hőmérséklet nem 100 °C* egy szobában soha nem ér véget. A hőmérséklet ott sosem éri el a százat, a program **végtelen ciklusba kerül**, és a ciklus utáni kód soha nem fut le.

**Próbáld ki!** Építs a MakeCode szimulátorában (makecode.microbit.org) villogó szívet: egyszer háromszor, másodszor mindig. Mi történik a *szöveg kijelzése „vége”* blokkal az egyes ciklusok után?

**Tovább a robotok világában:** → [Ha sötét van, kapcsolj fel](#svet-roboti-rozhodovani-hu)
