---
id: kodovani-hu
translationOf: kodovani
lang: hu
type: spine
title: "Minden szám"
readingTime: 2
standalone: true
teaser: "A telefonod azt írja: „Megtelt a tárhely”. Egy óra 4K videó több helyet foglal, mint ezer fotó. Miért ilyen nagy a videó?"
voice: universal
parent: null
diagram: null
core: true
recallQ: "Miért nagyobb a nagyobb felbontású fotó fájlja?"
recallA: "Több pixelből áll, és minden pixel számokkal van kódolva. Több pixel több számot jelent, vagyis több bájtot."
lens: generic
visuality: text-first
depth: intro
formalism: none
lengthBand: standard
genre: worked-example
status: accepted
concept: kodovani
conceptTitle: "Minden szám"
objective: "A telefonod azt írja: „Megtelt a tárhely”. Egy óra 4K videó több helyet foglal, mint ezer fotó. Miért ilyen nagy a videó?"
mustCover:
  - "Kódolás = megállapodott átalakítási szabályok (pixel → szám, betű → szám)"
  - "Adatméret: bit, bájt, MB, GB; a felbontás és a minőség növeli a fájlt"
  - "A fájltípus (kiterjesztés) megmondja, hogyan kell olvasni a számokat; a tömörítés helyet takarít meg"
state: core
highlights:
  - "Kódolás = megállapodott átalakítási szabályok (pixel → szám, betű → szám)"
  - "Adatméret: bit, bájt, MB, GB; a felbontás és a minőség növeli a fájlt"
  - "A fájltípus (kiterjesztés) megmondja, hogyan kell olvasni a számokat; a tömörítés helyet takarít meg"
carriers: prose|code
---

A telefonod azt írja: „Megtelt a tárhely”. Egy óra 4K videó több helyet foglal, mint ezer fotó. Miért ilyen nagy a videó?

A számítógép **csak számokat** tud tárolni és küldeni, végső soron nullákat és egyeseket. Ahhoz, hogy a számok képet, szöveget vagy hangot jelentsenek, **kódolás** kell: megállapodott szabály arról, mit hogyan alakítunk számokká.

A számítógép számára egy 8 × 8 pixeles szív nullák és egyesek táblázata. Minden sor a pixelek egy sora:

```
0 1 1 0 0 1 1 0
1 1 1 1 1 1 1 1
1 1 1 1 1 1 1 1
1 1 1 1 1 1 1 1
0 1 1 1 1 1 1 0
0 0 1 1 1 1 0 0
0 0 0 1 1 0 0 0
0 0 0 0 0 0 0 0
```

A kétszeres felbontás 16 × 16 = 256 pixel 64 helyett. Kétszer annyi szélességben és magasságban is négyszer annyi számot ad, vagyis négyszer nagyobb fájlt. Ezért olyan nagy a 4K videó.

Egy színes pixelhez több szám kell, általában három: mennyi benne a vörös, a zöld és a kék. Még a betűknek is van számuk: az **A** a 65. Az adatok méretét **bitekben** és **bájtokban** mérjük (1 bájt = 8 bit), a nagyobb adatokat **kB-ban, MB-ban és GB-ban**.

A **fájl kiterjesztése** (.png, .mp3, .txt) megmondja a programnak, milyen szabály szerint olvassa a számokat. A **tömörítés** helyet takarít meg: a „00000000” helyett azt írja, hogy „8×0”. A JPG és az MP3 ráadásul eldobja azokat a részleteket, amelyeket alig látsz vagy hallasz.

A kódolás nem titkosítás. A kódolás szabálya **nyilvános**, hogy minden program el tudja olvasni az adatokat.

**Próbáld ki!** Fotózz le valamit a telefonoddal, és nézd meg a fotó részleteit: hány pixel széles és magas? Aztán kicsinyítsd le a szélesség és a magasság felére. Hányszor kevesebb pixelből áll most? És a fájl is ugyanennyivel lett kisebb?

> **Vigyázz, gyakori tévedés:** „A számítógépben a kép képként van tárolva.” Belül csak számok vannak: minden pixelhez néhány szám, amely megadja a színét. És a kódolás nem titkosítás. A kód olyan megállapodás, amelyet mindenki ismer, a titkosírás titok.

**Tovább:** A kódolás nyilvános szabály. A titkosítás titkos kulcsot ad hozzá, amely nélkül nem olvashatod el az üzenetet. A 4. fejezetben látod majd. → [Titkosítás: boríték képeslap helyett](#c/sifrovani)
