---
id: svet-roboti-kodovani-hu
translationOf: svet-roboti-kodovani
lang: hu
type: spine
title: "Szív 25 számból"
readingTime: 1
standalone: true
teaser: "A micro:bit kijelzőjén a kis szív képnek tűnik. A panel számára 25 szám."
voice: universal
parent: null
diagram: null
core: false
recallQ: "Miért nagyobb a nagyobb felbontású fotó fájlja?"
recallA: "Több pixelből áll, és minden pixel számokkal van kódolva. Több pixel több számot jelent, vagyis több bájtot."
lens: roboti
visuality: visual-first
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
carriers: prose|image|code
---

A micro:bit kijelzőjén a kis szív képnek tűnik. A panel számára 25 szám.

A micro:bit kijelzőjén 5 × 5 **LED** van. Mindegyik egyetlen szám: a **0** nem világít, a **9** teljes fénnyel világít, a kettő között a fényerő. Az egyszerűség kedvéért itt a világító LED-et 1-gyel, a kialudtat 0-val írjuk. A szív így öt sor, soronként öt számmal:

![5 × 5-ös LED-kijelző egy szívvel és a számaival](images/svet-roboti-led.hu.svg)

```
0 1 0 1 0
1 1 1 1 1
1 1 1 1 1
0 1 1 1 0
0 0 1 0 0
```

A „0 = nem világít, 1 = világít” szabály a **kódolás**: megbeszélt átalakítási szabály. Aki ismeri, a számokból visszarakja ugyanazt a képet.

Mennyi helyet foglal? Nullával és eggyel LED-enként egy **bit** elég, az egész szív 25 bit, vagyis valamivel több mint 3 **bájt**. 0–9 fényerővel már LED-enként 4 bit kell. Több részlet több számot jelent, vagyis több adatot. A telefonodon egy fotó több millió képpontból áll, képpontonként három számmal, ezért több **MB**.

A szöveg is szám: az **A** betű a számítógépben a 65-ös szám, és a micro:bit tudja, melyik LED-eket kell kigyújtania hozzá. A programot **.hex** fájlként küldöd a panelre: a kiterjesztés jelzi, hogy a processzornak szóló utasítások vannak benne, nem kép és nem szöveg. Azt a képet pedig, amelyen egy egész sor világít, tömörebben is el lehet tárolni: „5× egyes” öt egyes helyett. Ezt hívják **tömörítésnek**.

**Próbáld ki!** Rajzolj egy 5 × 5-ös rácsra saját ikont, és írd le 25 számmal. Küldd el a számokat egy barátodnak. Ugyanazt a képet rakja ki belőlük?

**Tovább a robotok világában:** → [Rádió a micro:bitek között](#svet-roboti-cesta-dat-hu)
