---
id: dekompozice-hu
translationOf: dekompozice
lang: hu
type: spine
title: "Bontsd részekre a problémát"
readingTime: 1
standalone: true
teaser: "Egy hét múlva dolgozatot írsz három fejezetből. Vasárnap este egyszerre megtanulni mindent nem működik. Hogyan osztod be?"
voice: universal
parent: null
diagram: dekompozice-hu
core: true
recallQ: "Hogyan bontod részekre azt a feladatot, hogy „szervezd meg az osztálykirándulást”, és miért számít a részek sorrendje?"
recallA: "Kisebb feladatokra: cél és költségvetés, helyszín, utazás, program, jelentkezés. Némelyik másoktól függ: a buszt csak akkor rendeled meg, ha már megvan a helyszín és a létszám."
lens: generic
visuality: balanced
depth: intro
formalism: none
lengthBand: standard
genre: worked-example
status: accepted
concept: dekompozice
conceptTitle: "Bontsd részekre a problémát"
objective: "Egy hét múlva dolgozatot írsz három fejezetből. Vasárnap este egyszerre megtanulni mindent nem működik. Hogyan osztod be?"
mustCover:
  - "A feladat: kiinduló állapot, cél, korlátok"
  - "Részfeladatok és függőségeik (mi legyen kész előbb)"
  - "Egy elnevezett részfeladat a kódban alprogram"
state: core
highlights:
  - "A feladat: kiinduló állapot, cél, korlátok"
  - "Részfeladatok és függőségeik (mi legyen kész előbb)"
  - "Egy elnevezett részfeladat a kódban alprogram"
carriers: prose|diagram
---

Egy hét múlva dolgozatot írsz három fejezetből. Vasárnap este egyszerre megtanulni mindent nem működik. Hogyan osztod be?

Egy nagy problémát szinte senki sem old meg egyszerre. **Kisebb részekre bontod**, amelyeket egyenként meg tudsz oldani, aztán összerakod őket. Ezt hívják **dekompozíciónak**.

Először tisztázd a **feladatot**: mi van, mit akarsz, és mik a korlátok. Aztán bontsd részekre. Néhány rész **függ** a többitől: előbb más részeknek kell elkészülniük.

Az osztályotok videót forgat az iskoláról. Van 3 hetetek, 4 emberetek és egy állványos telefonotok, és csak szünetekben forgathattok. A felbontás: **Forgatókönyv** (témát választani → megírni a forgatókönyvet), **Forgatás** (kölcsönkérni az állványos telefont → felvenni a jeleneteket) és **Vágás** (megvágni a felvételeket → feliratot és zenét adni hozzá → levetíteni az osztálynak). A nyíl azt jelenti: „csak utána”.

A felbontás két dolgot mutat meg. A részek **nem egyforma méretűek**, és **egymásra épülnek**: forgatókönyv nélkül nem tudsz felvételeket készíteni. Az egymástól független feladatokon többen is dolgozhatnak egyszerre.

A programozásban a megoldás elnevezett részét **alprogramnak** hívják. A Kígyó játék a kígyó mozgása, az étel, az ütközések és a pontszám. Minden részt külön írsz meg és próbálsz ki.

**Próbáld ki!** Vegyél egy feladatot, amelyet most görgetsz magad előtt (kiselőadás, edzés, szobarendrakás), és írd fel a lehető legkisebb lépésekben, olyan kicsikben, hogy egyik se tartson 15 percnél tovább. Aztán csak az elsőt csináld meg. Gyanúsan jól működik.

> **Vigyázz, gyakori tévedés:** „Egy feladatot részekre bontani annyi, mint egyforma darabokra vágni.” A részek általában különböző méretűek, és egymásra épülnek: amíg nincs forgatókönyved, nincs mit forgatnod.

**Tovább:** Mielőtt részekre bontasz egy problémát, kiválasztod, mi a lényeges benne. A többit kihagyod. Ezt hívják modellnek, és ez a következő szakasz. → [Modell: hasznos egyszerűsítés](#c/abstrakce-a-model)
