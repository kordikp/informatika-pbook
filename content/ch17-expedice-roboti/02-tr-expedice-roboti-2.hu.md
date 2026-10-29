---
id: expedice-roboti-2-hu
translationOf: expedice-roboti-2
lang: hu
type: spine
title: "Éles kanyar és memória"
readingTime: 1
standalone: false
teaser: "A vonal mindkét érzékelő elől eltűnt."
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
concept: expedice-roboti-2
conceptTitle: "Éles kanyar és memória"
objective: "A vonal mindkét érzékelő elől eltűnt."
state: edited
carriers: prose
---

**🧩 Kihívás** · 2. lépés / 5 · [A kisautó, amely nem esik le az asztalról](#expedice-roboti-hu)

A vonal mindkét érzékelő elől eltűnt. Az érzékelők most semmit sem tudnak, de a kisautó tudhatja, **hol volt utoljára a vonal**.

**1. feladat: memória.** Vegyél fel egy `utoljára` változót. Ha csak a bal érzékelő látja a vonalat, tárold el: *balra*. Ha csak a jobb, tárold el: *jobbra*. Ha egyik sem lát semmit, a kisautó a memóriában tárolt irányba fordul. Aki az egész táblázatot le akarja vezetni, megtalálja a „Kétszemű kisautó” kihívásban a dekompozíciónál.

**2. feladat: tesztek előre.** Írj öt tesztet *bemenet → elvárt viselkedés* formában, még mielőtt lefuttatod őket:
- egyenes;
- enyhe kanyar balra;
- éles kanyar balra;
- éles kanyar jobbra;
- kereszteződés (mindkét érzékelő látja a vonalat, aztán megint csak az egyik).

Mindegyiknél írd fel, milyen nyilat vársz lépésről lépésre. Aztán kattintsd végig a pineket a szimulátorban pontosan a teszt szerint.

**3. feladat: milyen gyorsan mehetsz?** A micro:bit nagyjából 50× olvassa ki az érzékelőket másodpercenként. A vonal 15 mm széles, és a kisautó merőlegesen halad át rajta. Mekkora a legnagyobb sebesség, amellyel még biztosan elkapja a vonalat legalább egy mérés? És mi történik, ha a ciklusba beteszel egy *szünet 100 ms* blokkot?

**Siker:** mind az öt teszt stimmel, és a sebességszámítás mértékegységekkel együtt megvan. Ez ugyanaz a csapda, mint a labda, amely átrepül az ütőn: ami két mérés között történik, azt a robot nem látja.

:::reveal 🔑 Megoldás
Két mérés között legfeljebb a vonal szélességét teheti meg, vagyis 15 mm × 50 = 750 mm másodpercenként, nagyjából 75 cm/s. A 100 ms-os szünettel legfeljebb 10× mér másodpercenként, így már csak 15 cm/s.
:::

**Következő lépés:** [Hogyan gondolkodik a robotporszívó](#expedice-roboti-3-hu)
