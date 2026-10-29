---
id: expedice-program-1-hu
translationOf: expedice-program-1
lang: hu
type: spine
title: "Műhely: első program 30 perc alatt"
readingTime: 1
standalone: false
teaser: "A Thonny kezdőknek szóló Python-szerkesztő, ingyenes Windowsra, macOS-re és Linuxra is."
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
concept: expedice-program-1
conceptTitle: "Műhely: első program 30 perc alatt"
objective: "A Thonny kezdőknek szóló Python-szerkesztő, ingyenes Windowsra, macOS-re és Linuxra is."
state: edited
carriers: prose|code
---

**🛠 Műhely** · 1. lépés / 5 · [Tizenkét csillag](#expedice-program-hu)

A **Thonny** kezdőknek szóló Python-szerkesztő, ingyenes Windowsra, macOS-re és Linuxra is. A [thonny.org](https://thonny.org/) oldalról töltheted le, a telepítést a szülőd hagyja jóvá. Ha semmit sem telepíthetsz, használd a böngészőben a [Python Tutort](https://pythontutor.com/), fiók nélkül.

1. **(5 perc)** Indítsd el a Thonnyt. Fent van a szerkesztő, lent a konzol. Írd be a konzolba: `2 + 3`, és nyomj Entert. A Python azt feleli: 5.
2. **(10 perc)** Írd be a szerkesztőbe:
```
nev = input("Hogy hívnak? ")
napok = int(input("Hány nap van még karácsonyig? "))
print("Szia,", nev)
print("Ez", napok * 24, "óra.")
```
Mentsd `advent.py` néven, és futtasd az F5 billentyűvel. Látod a bemenetet, a feldolgozást és a kimenetet is.
3. **(5 perc)** Kapcsold be a **View → Variables** menüt, és futtasd újra a programot. Figyeld, hogyan telnek meg a dobozok.
4. **(10 perc)** Indítsd el a hibakeresést: **Ctrl+F5**, aztán nyomogasd az **F7**-et. A Thonny minden apró lépést megmutat, azt is, hogyan számolja ki a `napok * 24` értékét. Most szándékosan töröld ki az `int(` részt és az egyik `)` zárójelet, és adj meg 3-at. A program nem áll le, hanem azt írja ki: „333333…”. A `napok` dobozban most szöveg van, és a szöveg 24-szer véve huszonnégyszer ismétlődik. Az ilyen hibát **logikai** hibának hívják: a program fut, csak mást csinál, mint amit szeretnél.

Akkor vagy kész, ha a program működik, és lépésenként tudod futtatni.

**Következő lépés:** [Kihívás: hőmérő a nyaralóban](#expedice-program-2-hu)
