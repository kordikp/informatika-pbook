---
id: over-a-oprav-hu
translationOf: over-a-oprav
lang: hu
type: spine
title: "Ellenőrizd és javítsd"
readingTime: 1
standalone: true
teaser: "A telefonod frissítést ajánl, amely „hibákat javít”. Hogy lehet, hogy a készítők nem találták meg őket korábban?"
voice: universal
parent: null
diagram: null
core: true
recallQ: "Miért nem elég egy programot egyetlen működő példán kipróbálni?"
recallA: "A hiba gyakran csak bizonyos bemeneteknél jön elő, például nullánál vagy üres listánál. A teszteknek különféle eseteket kell lefedniük, a szélső eseteket is."
lens: generic
visuality: balanced
depth: intro
formalism: none
lengthBand: standard
genre: worked-example
status: accepted
concept: over-a-oprav
conceptTitle: "Ellenőrizd és javítsd"
objective: "A telefonod frissítést ajánl, amely „hibákat javít”. Hogy lehet, hogy a készítők nem találták meg őket korábban?"
state: core
highlights:
  - "Teszt = bemenet + elvárt kimenet, előre elkészítve"
  - "Szélső esetek (0, üres bemenet, maximum)"
  - "Hibakeresés: hely → ok → javítás → újbóli ellenőrzés; a hatékonyság mint további mérce"
carriers: prose|image|code
---

A telefonod frissítést ajánl, amely „hibákat javít”. Hogy lehet, hogy a készítők nem találták meg őket korábban?

Hogy egy megoldás működik-e, **addig nem tudod, amíg ki nem próbálod**. És egyetlen kipróbált példa nem elég. A hibák gyakran a **trükkös bemenetekben** bujkálnak: nulla, üres, maximum.

Egy jó **tesztnek** két része van: a **bemenet** és az **eredmény, amit vársz**. Ezt előre elkészíted.

Az iskolai automata 300 forintért árul mozijegyet. A teszteket előre elkészíted: 1 ember → 1 jegy és 300 Ft, 2 ember → 600 Ft, 3 ember → 900 Ft, 5 ember → 1500 Ft. Mind átmegy. Aztán kipróbálsz egy trükkös bemenetet: **0 ember**. Azt várod, hogy az automata semmit sem nyomtat. De kinyomtat egy 0 forintos jegyet. A program ugyanis előbb nyomtat, és csak utána kérdezi meg, folytassa-e:

```
nyomtatott = 0
ismételd:
    nyomtass jegyet
    nyomtatott = nyomtatott + 1
amíg nyomtatott < emberek száma
```

A javítás: a feltételt **az elején** ellenőrizd (*ismételd, amíg nyomtatott < emberek száma*). Nulla embernél a ciklus egyszer sem fut le.

![Ellenőrizd és javítsd](images/comic-brouk.hu.svg)

Az automata működött 1, 2, 3 és 5 emberre is. A hiba csak **nullánál** jött elő: kinyomtatott egy ingyenes jegyet. Aki csak egy példát próbált volna ki, sosem jött volna rá.

A hibakeresésnek négy lépése van: **keresd meg, hol romlik el → értsd meg az okát → javítsd ki → ellenőrizd újra az összes teszttel**. Az utolsó lépés fontos. Az a javítás, amely más teszteket elront, nem javítás.

Ha két megoldás is működik, a **hatékonyságukat** is összevetheted: melyiknek kell kevesebb lépés vagy kevesebb memória.

**Próbáld ki!** Vegyél egy utasítást, amit te írtál (például a kenyereset), és próbáld meg elrontani. Mi van, ha a kenyér már fel van szeletelve? Mi van, ha elfogyott a vaj? Minden bemenet, amelyen az utasítás elbukik, egy hiba, amelyet előbb találtál meg, mint aki használni fogja. Javítsd az utasítást, hogy ezt is kezelje.

> **Vigyázz, gyakori tévedés:** „Ha egyszer lefutott, akkor helyes.” Csak arra az egy bemenetre futott le. A hibák a szélső esetekben bujkálnak, például nullánál. És minden programozó hibázik. Az a jó, aki meg is találja a hibákat.

**Tovább:** Az MI válaszát ugyanúgy teszteled, mint egy programot. Trükkös kérdéseken, nem csak egyetlen olyanon, amelyik épp bejött. → [Ellenőrizz, és te dönts](#c/rozhodujes-ty)
