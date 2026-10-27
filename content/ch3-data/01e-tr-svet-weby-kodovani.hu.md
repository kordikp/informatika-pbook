---
id: svet-weby-kodovani-hu
translationOf: svet-weby-kodovani
lang: hu
type: spine
title: "A szétesett körte"
readingTime: 1
standalone: true
teaser: "Kiírod a weboldalra, hogy „körte”, a látogató pedig azt látja, hogy „kĂ¶rte”. Az oldal nem romlott el. Csak nem egyezett meg a böngészővel abban, hogyan olvassa a számokat."
voice: universal
parent: null
diagram: null
core: false
recallQ: "Miért nagyobb a nagyobb felbontású fotó fájlja?"
recallA: "Több pixelből áll, és minden pixel számokkal van kódolva. Több pixel több számot jelent, vagyis több bájtot."
lens: weby
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

Kiírod a weboldalra, hogy „körte”, a látogató pedig azt látja, hogy „kĂ¶rte”. Az oldal nem romlott el. Csak nem egyezett meg a böngészővel abban, hogyan olvassa a számokat.

A lemezen és a hálózaton az oldal csak **számok** sora. Hogy melyik szám melyik betűt jelenti, azt a **kódolás** határozza meg, egy megegyezés szerinti átváltási táblázat. A weben ma az **UTF-8** használatos, amelyben a világ minden betűjének és az emojiknak is van száma. Az *a* betű 1 **bájtot** foglal, az *ö* 2 bájtot, a 🙂 emoji 4 bájtot. Ha a szerző UTF-8-ban menti a szöveget, a böngésző pedig egy régi közép-európai táblázat szerint olvassa, minden *ö* két értelmetlen jelre esik szét. Ezért van minden oldal fejlécében egy `<meta charset="utf-8">` sor: megmondja, melyik táblázattal kell olvasni.

A legtöbb számot a weben azonban a képek viszik. Egy mobilos fotónak 12 millió pixele és könnyen 4 **MB** mérete van. Az oldalon közben egy 800 × 600-as ablakban jelenik meg, így a számok többsége feleslegesen utazik a hálózaton. Azt a weboldalt pedig, amely mobilon tíz másodpercig töltődik, az emberek bezárják.

![Ugyanaz a fotó három méretben és formátumban](images/svet-weby-fotka.hu.svg)

Segít, ha a **felbontást** lecsökkented arra, ami valóban látszik, és a **fájltípust** a tartalom szerint választod. A kiterjesztés megmondja a böngészőnek, hogyan olvassa a fájlban lévő számokat:

- A **JPG** és a **WebP** **tömöríti** a fotókat: kihagyja azokat a részleteket, amelyeket a szem nem vesz észre.
- A **PNG** semmit sem hagy ki. Képernyőképekhez és éles szöveget tartalmazó képekhez való.
- Az **SVG** nem pixeleket tárol, hanem vonalak és alakzatok leírását. Egy SVG-ikon minden méretben éles.

**Próbáld ki!** Keress egy mobilos fotót, és nézd meg, hány MB. Kicsinyítsd le például a Paintben 1000 pixel szélesre, és mentsd el JPG-ként. Hányszor kisebb lett?

**Tovább a weboldalak világában:** → [Mi történik, amikor megnyomod az Entert](#svet-weby-cesta-dat-hu)
