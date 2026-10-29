---
id: vyzva-data-kodovani-hu
translationOf: vyzva-data-kodovani
lang: hu
type: challenge
title: "Tömörítés, ami néha felfúj"
level: 3
minutes: 35
readingTime: 3
standalone: true
teaser: "A példában a rövidített leírás helyet spórolt."
voice: universal
parent: null
diagram: null
core: false
status: accepted
concept: kodovani
state: edited
lens: generic
visuality: text-first
depth: standard
formalism: light
lengthBand: deep
carriers: prose|formula
---

A példában a rövidített leírás helyet spórolt. De rajzolj egy csíkos pólót, és a rövidített leírás hirtelen hosszabb lesz, mint a puszta nullák és egyesek. Ki lehet találni olyan tömörítést, ami tényleg minden képet kisebbre nyom?

<!-- task -->

A kép **8 × 8 pixeles**, 0 = fehér, 1 = fekete. Tömörítés nélkül **64 bitet** foglal.

Az **RLE** tömörítés (futáshossz-kódolás) a pixeleket soronként, egyetlen hosszú szalagként olvassa, és csak az azonos színű **futások hosszát** írja le. A szabályok:
- mindig **fehér** futással kezdünk (ha a szalag feketével indul, az első szám 0);
- a színek váltakoznak: fehér, fekete, fehér…;
- minden szám **4 bitet** foglal, így a legnagyobb hossz 15. A hosszabb futást szétosztod: 18 fehér = 15, 0, 3.

**Az A kép:** az 1., 2., 7. és 8. sor `00000000`, a 3–6. sor `00111100` (fekete négyzet középen).

1. Írd fel az A kép RLE-kódját, és számold ki, hány bitet foglal.
2. Keress olyan 8 × 8-as képet, amelynél az RLE a **leghosszabb**. Hány bit?
3. Egy barátod azt állítja: „Kitalálok egy jobb tömörítést, ami **minden** 8 × 8-as képet legalább 1 bittel kisebbre nyom.” Bizonyítsd be, hogy ez nem megy, akármilyen okos is.

<!-- hint -->

Az A képnél kösd össze az egyik sor végét a következő elejével. A 3. sor végén lévő két fehér és a 4. sor elején lévő két fehér együtt egy 4 hosszú futás.

<!-- hint -->

A legrosszabb az a kép, ahol a szín minden pixelnél vált, a sor végén át is. És még egy számmal rosszabb, ha a szalag feketével kezdődik.

<!-- hint -->

Számold ki, hány különböző 8 × 8-as kép létezik, és hány 64 bitnél rövidebb leírás létezik összesen (0, 1, 2 … 63 hosszú). Minden képnek más leírást kell kapnia, különben nem lehet kicsomagolni.

<!-- solution -->

**1.** Futások: fehér 18, fekete 4, fehér 4, fekete 4, fehér 4, fekete 4, fehér 4, fekete 4, fehér 18. A 15-ös korláttal: `15, 0, 3, 4, 4, 4, 4, 4, 4, 4, 15, 0, 3` = **13 szám × 4 bit = 52 bit**. 12 bit megtakarítás.

**2.** Függőleges csíkok, minden sor `10101010`. A sor vége (0) és a következő sor eleje (1) különbözik, így ez 64 darab 1 hosszú futás. A szalag feketével indul, ezért jön még egy kezdő 0: **65 szám × 4 = 260 bit**, több mint az eredeti négyszerese. (A `01010101` sorok 256 bitet adnak.)

**3.** 8 × 8-as képből $$2^{64}$$ van. A 64 bitnél rövidebb leírásokból összesen $$2^0 + 2^1 + \dots + 2^{63} = 2^{64} - 1$$ van. Ez eggyel kevesebb. Legalább két kép tehát ugyanazt a leírást kapná, és kicsomagoláskor nem lehetne tudni, melyik volt az. Ezt hívják **skatulyaelvnek**: 10 galamb nem fér el egyesével 9 dúcban. Ezért minden veszteségmentes tömörítés néhány fájlt kisebbre nyom, másokat ugyanakkorán hagy vagy megnövel. Csak azért működik, mert a valódi képekben sok az ismétlődés, és ritkán néznek ki zajnak.

<!-- more -->

Ments el egy rajzprogramban egy egyszínű képet és egy véletlen zajos képet PNG-ként (veszteségmentes tömörítés), és hasonlítsd össze a méretüket. Aztán ments el egy fotót JPG-ként 100-as és 10-es minőségben. A JPG és az MP3 úgy kerüli meg a skatulyaelvet, hogy az információ egy részét **eldobja**: ez a veszteséges tömörítés. Találj ki saját RLE-javítást az A képhez, ami 52 bit alá megy, és ellenőrizd, hogy egyértelműen ki lehet csomagolni.
