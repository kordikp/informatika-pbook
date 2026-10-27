---
id: svet-aplikace-dekompozice-hu
translationOf: svet-aplikace-dekompozice
lang: hu
type: spine
title: "App papíron"
readingTime: 1
standalone: true
teaser: "Appot szeretnél az osztálynak: hetesi beosztás, szavazás a kirándulásról, pénzbeszedés, chat és órarend. Ha mindent egyszerre kezdesz el, semmit sem fejezel be."
voice: universal
parent: null
diagram: null
core: false
recallQ: "Hogyan bontod részekre azt a feladatot, hogy „szervezd meg az osztálykirándulást”, és miért számít a részek sorrendje?"
recallA: "Kisebb feladatokra: cél és költségvetés, helyszín, utazás, program, jelentkezés. Némelyik másoktól függ: a buszt csak akkor rendeled meg, ha már megvan a helyszín és a létszám."
lens: aplikace
visuality: visual-first
depth: intro
formalism: none
lengthBand: standard
genre: worked-example
status: accepted
concept: dekompozice
state: edited
highlights:
  - "A feladat: kiinduló állapot, cél, korlátok"
  - "Részfeladatok és függőségeik (mi legyen kész előbb)"
  - "Egy elnevezett részfeladat a kódban alprogram"
carriers: prose|image
---

Appot szeretnél az osztálynak: hetesi beosztás, szavazás a kirándulásról, pénzbeszedés, chat és órarend. Ha mindent egyszerre kezdesz el, semmit sem fejezel be.

Előbb a **feladat**. **Kiinduló állapot:** a heteseket krétával írják fel a táblára, és minden héten valaki elfelejti. **Cél:** mindenki reggel látja a mobilján, mi a dolga. **Korlátok:** ingyenes, egyhetes munka, és az osztályban minden mobilon működnie kell.

Aztán az appot **részekre bontod**, amelyeket külön-külön meg tudsz oldani. Appoknál ezek általában a **képernyők** és az, ami rajtuk történik: bejelentkezés, a beosztás áttekintése, csere, beállítások. Mindegyik egy **részfeladat**.

![A beosztó app képernyőkre bontva és a köztük lévő függőségek](images/svet-aplikace-obrazovky.hu.svg)

A **függőségek** határozzák meg a sorrendet. A beosztás áttekintését nem lehet megmutatni, amíg az app nem tudja, ki vagy (bejelentkezés), és kinek mikor van dolga (lista). A cseréhez kell az áttekintés. Ezért először **a legkisebb olyan változatot** építik meg, **amely már jó valamire**: a listát, a bejelentkezést és az áttekintést. A szavazás és a chat várhat. Ezt az első változatot MVP-nek, minimális életképes terméknek hívják.

Ami ismétlődik, annak **nevet adsz**, és többször használod. A *név · feladat · nap* kártyát az áttekintés és a csere is mutatja. Egyszer írod meg, a kódban **alprogramként** *mutasdKartyat(tanulo)*, és mindkét képernyő csak meghívja. Ha megváltoztatod a kártyát, mindenhol megváltozik.

**Próbáld ki!** Találj ki egy appot, amely jól jönne neked. Bontsd képernyőkre, és karikázd be azokat, amelyek nélkül nincs értelme. Ez az első változatod.

**Tovább az alkalmazások világában:** → [Közlekedési lámpa rejtett hibával](#svet-aplikace-over-a-oprav-hu)
