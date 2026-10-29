---
id: over-a-oprav-hu
translationOf: over-a-oprav
lang: hu
type: spine
title: "Ellenőrizd és javítsd"
readingTime: 2
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
mustCover:
  - "Teszt = bemenet + elvárt kimenet, előre elkészítve"
  - "Szélső esetek (0, üres bemenet, maximum)"
  - "Hibakeresés: hely → ok → javítás → újbóli ellenőrzés; a hatékonyság mint további mérce"
state: core
highlights:
  - "Teszt = bemenet + elvárt kimenet, előre elkészítve"
  - "Szélső esetek (0, üres bemenet, maximum)"
  - "Hibakeresés: hely → ok → javítás → újbóli ellenőrzés; a hatékonyság mint további mérce"
carriers: prose|image
---

A telefonod frissítést ajánl, amely „hibákat javít”. Hogy lehet, hogy a készítők nem találták meg őket korábban?

Hogy egy megoldás működik-e, **addig nem tudod, amíg ki nem próbálod**. És egyetlen kipróbált példa nem elég. A hibák gyakran a **trükkös bemenetekben** bujkálnak: nulla, üres, maximum.

Egy jó **tesztnek** két része van: a **bemenet** és az **eredmény, amit vársz**. Ezt előre elkészíted.

Az iskolai automata 300 forintért árul mozijegyet. Az utasítása így szól: *nézd meg, hány ember jött → nyomtass egy jegyet → hiányzik még valakinek jegy? Ha igen, nyomtass még egyet → végül nyomtass nyugtát mindenkiről*. A teszteket előre elkészíted: 1 ember → 1 jegy és 300 Ft, 2 ember → 600 Ft, 3 ember → 900 Ft, 5 ember → 1500 Ft. Mind átmegy. Aztán kipróbálsz egy trükkös bemenetet: **0 ember**. Azt várod, hogy az automata semmit sem nyomtat. De kinyomtat egy 0 forintos jegyet. Az utasítás ugyanis előbb nyomtat, és csak utána kérdezi meg, hiányzik-e valakinek jegy.

A javítás: kérdezz **előbb** (*hiányzik valakinek jegy? Ha igen, nyomtasd ki, és kérdezz újra*). Nulla embernél semmi sem nyomtatódik ki. Utána pedig futtasd le újra az összes tesztet, az 1, 2, 3 és 5 emberre szólókat is.

![Ellenőrizd és javítsd](images/comic-brouk.hu.svg)

Az automata működött 1, 2, 3 és 5 emberre is. A hiba csak **nullánál** jött elő: kinyomtatott egy ingyenes jegyet. Aki csak egy példát próbált volna ki, sosem jött volna rá.

A hibakeresésnek négy lépése van: **keresd meg, hol romlik el → értsd meg az okát → javítsd ki → ellenőrizd újra az összes teszttel**. Az utolsó lépés fontos. Az a javítás, amely más teszteket elront, nem javítás.

Ha két megoldás is működik, a **hatékonyságukat** is összevetheted: melyiknek kell kevesebb lépés vagy kevesebb memória. A barátod gondol egy számra 1 és 100 között, és minden tippedre csak annyit mond: „több” vagy „kevesebb”. Ha sorban próbálkozol, 1, 2, 3 és így tovább, akár 100 tipp is kellhet. Ha mindig a maradék közepére tippelsz (50, aztán 25 vagy 75…), legfeljebb 7 elég. Mindkét megoldás megtalálja a számot. A második sokkal gyorsabb.

**Próbáld ki!** Vegyél egy utasítást, amit te írtál (például a kenyereset), és próbáld meg elrontani. Mi van, ha a kenyér már fel van szeletelve? Mi van, ha elfogyott a vaj? Minden bemenet, amelyen az utasítás elbukik, egy hiba, amelyet előbb találtál meg, mint aki használni fogja. Javítsd az utasítást, hogy ezt is kezelje.

> **Vigyázz, gyakori tévedés:** „Ha egyszer lefutott, akkor helyes.” Csak arra az egy bemenetre futott le. A hibák a szélső esetekben bujkálnak, például nullánál. És minden programozó hibázik. Az a jó, aki meg is találja a hibákat.

**Tovább:** Az MI válaszát ugyanúgy teszteled, mint egy programot. Trükkös kérdéseken, nem csak egyetlen olyanon, amelyik épp bejött. → [Ellenőrizz, és te dönts](#c/rozhodujes-ty)
