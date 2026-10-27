---
id: svet-hry-kodovani-hu
translationOf: svet-hry-kodovani
lang: hu
type: spine
title: "A sprite egy számrács"
readingTime: 1
standalone: true
teaser: "Egy pixeles játék figurája a számítógép számára egy számtáblázat. Szó szerint."
voice: universal
parent: null
diagram: null
core: false
recallQ: "Miért nagyobb a nagyobb felbontású fotó fájlja?"
recallA: "Több pixelből áll, és minden pixel számokkal van kódolva. Több pixel több számot jelent, vagyis több bájtot."
lens: hry
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
carriers: prose|image
---

Egy pixeles játék figurája a számítógép számára egy számtáblázat. Szó szerint.

Egy kis játékfigura, a **sprite**, képpontok rácsa. Minden képpont egy **szám**, amely egy megbeszélt **paletta** szerint egy színt jelent: 0 átlátszó, 1 fekete, 2 bőrszín, 3 kék. A megbeszélt átalakítási szabály a **kódolás**. Aki ismeri a palettát, a számokból ugyanazt a képet rakja össze.

![Egy 8 × 8-as sprite és a számai](images/svet-hry-sprite.hu.svg)

Egy 8 × 8-as sprite 64 számból áll. Négy színhez képpontonként 2 **bit** elég, így az egész kép elfér 16 **bájtban**. A régi konzoloknak kevés memóriájuk volt, ezért volt a figuráknak olyan kevés színük és képpontjuk.

A mai játékokban 4096 × 4096 képpontos textúrák vannak, és minden képpontnak három, egyenként 8 bites színe van. Egyetlen textúra több mint 48 **MB**, és egy játékban ezrével vannak. Ezért tölt le az ember több tíz **GB**-os játékokat. Több részlet több számot jelent, vagyis nagyobb fájlt.

A fájl típusa (kiterjesztése) megmondja, hogyan kell olvasni a számokat: a **.png** kép, a **.wav** hang, a **.json** adatokat tartalmazó szöveg. Hogy a játékok ne legyenek óriásiak, a számokat **tömörítik**: a „kék, kék, kék… 200-szor” helyett azt tárolják, hogy „200× kék”.

**Próbáld ki!** Rajzolj kockás papírra egy saját 8 × 8-as sprite-ot, és írd le számokkal a 0–3 paletta szerint. Egy barátod ugyanazt a képet rakja ki a számokból?

**Tovább a játékok világában:** → [Miért laggol az online játék](#svet-hry-cesta-dat-hu)
