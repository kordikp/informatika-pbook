---
id: svet-roboti-dekompozice-hu
translationOf: svet-roboti-dekompozice
lang: hu
type: spine
title: "Vonalkövető kisautó"
readingTime: 1
standalone: true
teaser: "Egy robot kisautó végigmegy a padlón lévő fekete vonalon, a kanyarokban is. Egyetlen okos trükknek tűnik. Valójában három kis feladat."
voice: universal
parent: null
diagram: null
core: false
recallQ: "Hogyan bontod részekre azt a feladatot, hogy „szervezd meg az osztálykirándulást”, és miért számít a részek sorrendje?"
recallA: "Kisebb feladatokra: cél és költségvetés, helyszín, utazás, program, jelentkezés. Némelyik másoktól függ: a buszt csak akkor rendeled meg, ha már megvan a helyszín és a létszám."
lens: roboti
visuality: visual-first
depth: intro
formalism: none
lengthBand: standard
genre: explainer
status: accepted
concept: dekompozice
state: edited
highlights:
  - "A feladat: kiinduló állapot, cél, korlátok"
  - "Részfeladatok és függőségeik (mi legyen kész előbb)"
  - "Egy elnevezett részfeladat a kódban alprogram"
carriers: prose|image
---

Egy robot kisautó végigmegy a padlón lévő fekete vonalon, a kanyarokban is. Egyetlen okos trükknek tűnik. Valójában három kis feladat.

Először a **feladat**. **Kiinduló állapot**: a kisautó a vonalon áll. **Cél**: végigmenni a vonalon egészen a végéig, és nem letérni róla. **Korlátok**: csak két fényérzékelője van alul és két motorja, semmi más.

![Kisautó két érzékelővel egy fekete vonal fölött](images/svet-roboti-cara.hu.svg)

Aztán a problémát részekre bontod:

1. **Olvasd az érzékelőket**: a bal feketét lát? És a jobb?
2. **Dönts**: mindkettő fehéret lát → menj egyenesen. A bal feketét lát → a vonal balra kanyarodik, fordulj balra. A jobb feketét lát → fordulj jobbra.
3. **Vezéreld a motorokat**: balra fordulni azt jelenti, hogy lassítod a bal kereket, a jobbat pedig hagyod menni.

És az egészet ismételd újra meg újra, másodpercenként sokszor.

A részek **egymástól függnek**. Nem tudsz dönteni, amíg nem tudod, mit jelez az érzékelő fekete és mit fehér fölött. Ezért a legelső feladat a **kalibrálás**: mérd meg az érzékelőt a vonal fölött és mellette.

Minden részt **alprogramként** nevezel el. A MakeCode-ban ez a *függvény*: `fordulj balra`, `fordulj jobbra`, `menj egyenesen`. A fő ciklus így rövid és olvasható. Ha pedig a kisautó túl élesen kanyarodik, csak egy függvényt javítasz.

**Próbáld ki!** Bontsd részfeladatokra a robotporszívót. Melyiknek kell előbb működnie, mint a többinek?

**Tovább a robotok világában:** → [A világ a robot szemével](#svet-roboti-abstrakce-a-model-hu)
