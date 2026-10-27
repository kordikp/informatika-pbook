---
id: svet-aplikace-tabulka-a-evidence-hu
translationOf: svet-aplikace-tabulka-a-evidence
lang: hu
type: spine
title: "App egy táblázatból"
readingTime: 1
standalone: true
teaser: "Rengeteg app belül egy egyszerű táblázat. Egy olyan eszköz, mint a Glide, egy délután alatt keresővel, szűrővel és gombokkal ellátott appot csinál belőle."
voice: universal
parent: null
diagram: null
core: false
recallQ: "Mi egy nyilvántartási táblázatban a sor és mi az oszlop, és miért kellenek beírási szabályok?"
recallA: "A sor egy rekord (egy kölcsönzés), az oszlop egy tulajdonság (könyv, tanuló, dátum). Egységes szabályok nélkül az adatokat nem lehet megbízhatóan szűrni és számolni."
lens: aplikace
visuality: balanced
depth: intro
formalism: none
lengthBand: standard
genre: worked-example
status: accepted
concept: tabulka-a-evidence
state: edited
highlights:
  - "Rekord (sor) és tulajdonság (oszlop); strukturált vs. strukturálatlan adatok"
  - "Szabályok a rekordokhoz: egységes formátum, nincs ismétlődés, kötelező adatok"
  - "A rendezés, a szűrő és a függvények (összeg, darabszám) válaszolnak a kérdésekre"
carriers: prose|image
---

Rengeteg app belül egy egyszerű táblázat. Egy olyan eszköz, mint a Glide, egy délután alatt keresővel, szűrővel és gombokkal ellátott appot csinál belőle.

Az osztálykönyvtár: ki melyik könyvet kölcsönözte ki, és mikor hozza vissza. A táblázatban **minden sor egy rekord**, egy kölcsönzés, és **minden oszlop egy tulajdonság**: könyv, tanuló, a kölcsönzés dátuma, visszahozva. Az ilyen adatokat **strukturáltnak** hívják, minden adatnak megvan a helye. Az app aztán a sorokból kártyákat, az oszlopokból űrlapmezőket csinál.

![A kölcsönzések táblázata és a belőle készült app](images/svet-aplikace-tabulka.hu.svg)

Az app viszont csak akkor működik, ha a táblázat betartja a **beírás szabályait**:

- **Egységes formátum:** a dátum mindig így: 2026. 11. 03., nem egyszer „11.3.”, máskor „hétfőn”. Különben az app nem tudja, ki késik a visszahozással.
- **Nincsenek ismétlődések:** ha Bence egyszer *Bence*, máskor *Kovács Bence*, az app két embert csinál belőle.
- **Kötelező adatok:** a tanuló neve nélküli kölcsönzés egy eltűnt könyv.

Ezért vannak az appok űrlapjain legördülő listák és naptárak szabad szöveg helyett: a szabályokra helyetted vigyáznak.

Csak ezután jön a hasznos rész. A **szűrő** csak a vissza nem hozott könyveket mutatja, a dátum szerinti **rendezés** a legrégebben kölcsönzötteket teszi felülre, a **függvények** pedig kiszámolják a válaszokat: a havi kölcsönzések *számát*, egy tanulónál lévő könyvek *összegét*. A „kinél vannak lejárt könyvek?” kérdésre a táblázat egy másodperc alatt válaszol. Szabad jegyzetek halmában, vagyis **strukturálatlan** adatokban fél óráig keresnéd.

**Próbáld ki!** Tervezz táblázatot egy appnak, amellyel labdákat lehet kölcsönözni a tornateremben. Milyen oszlopai lesznek, melyek kötelezőek, és milyen formátumú legyen a dátum?

**Tovább az alkalmazások világában:** → [Ki mit csinálhat az osztály appjában](#svet-aplikace-informacni-system-hu)
