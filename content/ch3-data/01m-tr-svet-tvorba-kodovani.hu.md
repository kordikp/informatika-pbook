---
id: svet-tvorba-kodovani-hu
translationOf: svet-tvorba-kodovani
lang: hu
type: spine
title: "Miért foglal egy perc videó több száz megabájtot"
readingTime: 2
standalone: true
teaser: "Felveszel a mobiloddal egy perc 4K videót, és több száz megabájtot foglal. Ugyanezt a percet elküldöd chaten, és pár másodperc alatt megérkezik. Hová lettek a számok?"
voice: universal
parent: null
diagram: null
core: false
recallQ: "Miért nagyobb a nagyobb felbontású fotó fájlja?"
recallA: "Több pixelből áll, és minden pixel számokkal van kódolva. Több pixel több számot jelent, vagyis több bájtot."
lens: tvorba
visuality: balanced
depth: intro
formalism: none
lengthBand: standard
genre: explainer
status: accepted
concept: kodovani
state: edited
highlights:
  - "Kódolás = megállapodott átalakítási szabályok (pixel → szám, betű → szám)"
  - "Adatméret: bit, bájt, MB, GB; a felbontás és a minőség növeli a fájlt"
  - "A fájltípus (kiterjesztés) megmondja, hogyan kell olvasni a számokat; a tömörítés helyet takarít meg"
carriers: prose|image
---

Felveszel a mobiloddal egy perc 4K videót, és több száz megabájtot foglal. Ugyanezt a percet elküldöd chaten, és pár másodperc alatt megérkezik. Hová lettek a számok?

A videó képek, **képkockák** sora, általában másodpercenként 30. Minden képkocka pixelekből álló rács, és minden pixel három szám: mennyi benne a vörös, a zöld és a kék. Ez a **kódolás**, megállapodott szabályok arról, hogyan lesz a képből szám. Egy színszám 8 **bitet**, vagyis egy **bájtot** foglal. Egy 4K képkocka 3840 × 2160, több mint 8 millió pixel, vagyis körülbelül 25 **MB** szám. Másodpercenként harminc képkocka, hatvan másodperc: egy tömörítetlen perc több mint 40 **GB** lenne.

![Egy perc videó: képkockák, pixelek és tömörítés](images/svet-tvorba-video.hu.svg)

Hogy csak néhány száz MB, az a **tömörítés** érdeme. A videó nem tárol el minden képkockát teljesen. Egyet teljesen eltárol, a következőknél pedig csak azt, ami megváltozott: ha egy jelenetben csak egy kéz mozdul, a kép többi része nem tárolódik el újra. És kihagyja azokat a részleteket, amelyeket a szem úgysem vesz észre. Ezért tömöríthető rosszul a konfettis vagy esős videó: szinte minden változik benne.

Amikor chaten küldesz videót, az app újrakódolja: csökkenti a **felbontást**, és jobban tömöríti. Ezért érkezik meg gyorsan, és ezért néz ki rosszabbul. Több részlet több számot jelent, vagyis nagyobb fájlt.

Amikor a szerkesztőből exportálod a videót, éppen ezeket választod ki: a felbontást (az 1080p elég a mobilra és az osztályterem projektorára is), a másodpercenkénti képkockák számát és a minőséget. A **fájltípus** mondja meg, hogyan kell olvasni a számokat: az **.mp4** videó, az **.mp3** hang, a **.png** kép. A hang is szám, másodpercenként 44 100 minta. Az .mp3 formátum úgy tömöríti, hogy kihagyja azokat a hangokat, amelyeket a fül amúgy sem hall.

**Próbáld ki!** Vegyél fel a mobiloddal kétszer tíz másodperc videót: egyszer a legnagyobb, egyszer a legkisebb felbontásban. Hasonlítsd össze a fájlok méretét. Hányszor nagyobb az egyik, és megfelel ez a pixelek számának?

**Tovább az MI-vel való alkotás világában:** → [Miért tart sokáig a generálás](#svet-tvorba-uvnitr-zarizeni-hu)
