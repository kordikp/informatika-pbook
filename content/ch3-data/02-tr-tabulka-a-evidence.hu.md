---
id: tabulka-a-evidence-hu
translationOf: tabulka-a-evidence
lang: hu
type: spine
title: "Táblázat: rendezett adatok"
readingTime: 2
standalone: true
teaser: "Beírod a névjegyek keresőjébe, hogy „Ja”, és a telefon rögtön megtalálja Janát és Jakubot is. Hogyan csinálja ilyen gyorsan?"
voice: universal
parent: null
diagram: relacni-model-hu
core: true
recallQ: "Mi egy nyilvántartási táblázatban a sor és mi az oszlop, és miért kellenek beírási szabályok?"
recallA: "A sor egy rekord (egy kölcsönzés), az oszlop egy tulajdonság (könyv, tanuló, dátum). Egységes szabályok nélkül az adatokat nem lehet megbízhatóan szűrni és számolni."
lens: generic
visuality: balanced
depth: intro
formalism: none
lengthBand: standard
genre: worked-example
status: accepted
concept: tabulka-a-evidence
conceptTitle: "Táblázat: rendezett adatok"
objective: "Beírod a névjegyek keresőjébe, hogy „Ja”, és a telefon rögtön megtalálja Janát és Jakubot is. Hogyan csinálja ilyen gyorsan?"
state: core
highlights:
  - "Rekord (sor) és tulajdonság (oszlop); strukturált vs. strukturálatlan adatok"
  - "Szabályok a rekordokhoz: egységes formátum, nincs ismétlődés, kötelező adatok"
  - "A rendezés, a szűrő és a függvények (összeg, darabszám) válaszolnak a kérdésekre"
carriers: prose|table|diagram
---

Beírod a névjegyek keresőjébe, hogy „Ja”, és a telefon rögtön megtalálja Janát és Jakubot is. Hogyan csinálja ilyen gyorsan?

A **nyilvántartás** **táblázatban** tárolja az adatokat. Minden **sor** egy **rekord** (egy kölcsönzés), és minden **oszlop** egy **tulajdonság** (ki, mit, meddig). Hogy a táblázattal dolgozni lehessen, **beírási szabályok** érvényesek.

Az osztálykönyvtár füzetben vezeti a kölcsönzéseket, és nagy benne a káosz: „Petrnél van a Harry, pénteken, 24-én hozza vissza”, „Ondra okt. 1-jén vitte el A hobbitot, három hétre”, „Tomáš Robinson 10/30”, és Ema kétszer is szerepel. Ma október 28. van. Kinél van lejárt határidejű könyv? A jegyzetekből csak találgatni lehet. A rendbe tett táblázatban egy sor egy kölcsönzés, a dátum pedig mindig hónap és nap:

| Tanuló | Könyv | Vissza |
|---|---|---|
| Petr | Harry Potter | okt. 24. |
| Ema | A kis herceg | okt. 20. |
| Ondra | A hobbit | okt. 22. |
| Lucie | Egy ropi naplója | nov. 4. |
| Tomáš | Robinson Crusoe | okt. 30. |

Az „okt. 28. előtt kell visszahozni” szűrő rögtön hármat talál: Petrt, Emát és Ondrát.

A jegyzetekből csak találgatni lehetett a választ. A rendbe tett táblázatban a **szűrő** azonnal megtalálta. A szűrő egy feltétel, amelyet minden sornak felteszünk: korábbi a visszahozás dátuma, mint a mai nap?

A táblázat **rendezni** és **számolni** is tud: hány könyv van Emánál, hány kölcsönzés járt le. Ez azonban csak akkor működik, ha mindenki ugyanazok szerint a szabályok szerint ír: ugyanaz a formátum, nincs ismétlődés, semmi sem hiányzik.

Több oszlop nem jelent jobb nyilvántartást. Egy oszlopnak akkor van értelme, ha kérdezni fogsz róla.

**Próbáld ki!** Tervezz kölcsönzési táblázatot az iskolai könyvtárnak: milyen oszlopai lesznek, és milyen két beírási szabályt vezetsz be (például a dátum formátumát és a kötelező oszlopokat)? Írj bele három kölcsönzést, és keresd meg azt, amelyik lejárt.

> **Vigyázz, gyakori tévedés:** „A táblázat csak szépen igazított szöveg.” A táblázatnak szabályai vannak: minden sor egy rekord, minden oszlop egyfajta adat. Csak ezeknek köszönhetően lehet keresni, rendezni és szűrni. És több oszlop nem jelent jobb nyilvántartást.

**Tovább:** Egy rendbe tett táblázatból diagramot lehet rajzolni. Csakhogy még a becsületes adatokat is le lehet rajzolni becstelenül. → [Adatokból információ](#c/z-dat-informace)
