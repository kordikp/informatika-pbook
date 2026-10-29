---
id: vyzva-data-tabulka-a-evidence-hu
translationOf: vyzva-data-tabulka-a-evidence
lang: hu
type: challenge
title: "Két Ema és egy kulcs"
level: 3
minutes: 40
readingTime: 3
standalone: true
teaser: "A könyvtárba új tanuló jött a 7.A-ból."
voice: universal
parent: null
diagram: null
core: false
status: accepted
concept: tabulka-a-evidence
state: edited
lens: generic
visuality: text-first
depth: standard
formalism: none
lengthBand: deep
carriers: prose|table
---

A könyvtárba új tanuló jött a 7.A-ból. Őt is Emának hívják. Azóta a `=COUNTIF(…; "Ema")` hülyeségeket számol, és senki sem tudja, kinél van A hobbit. A táblázat rendes, és mégis hazudik.

<!-- task -->

A könyvtárnak egyetlen kölcsönzési táblázata van ezekkel az oszlopokkal: **Név, Osztály, E-mail, Könyv, Visszahozva**. Minden kölcsönzés újra leírja a nevet, az osztályt és az e-mailt is.

1. Keress **két különböző problémát** ebben a táblázatban, amelyek akkor jönnek elő, ha (a) az iskolában két Ema van, (b) Ema Nováková e-mailt cserél.
2. Tervezz helyette **három táblázatot** úgy, hogy **minden tény csak egyszer legyen leírva**. Mindegyiknél írd le az oszlopokat, és jelöld meg a **kulcsot**: azt az oszlopot, amely alapján egy sort egyértelműen meg lehet találni.
3. A táblázataidban ezek az adatok vannak:

| id | név | osztály |
|---|---|---|
| 1 | Ema Nováková | 7.B |
| 2 | Ema Dvořáková | 7.A |
| 3 | Tomáš | 7.B |
| 4 | Ondra | 7.B |

Kölcsönzések (tanuló id, könyv, visszahozva): (1, A hobbit, igen), (1, Harry Potter, nem), (2, A kis herceg, nem), (3, Oroszlánszívű testvérek, nem), (4, A hobbit, nem), (2, Oroszlánszívű testvérek, igen).

Hány könyv van **éppen most** kikölcsönözve a **7.B** tanulóinál? És mennyit adna vissza az eredeti táblázatban a `COUNTIF` az „Ema” névre (tegyük fel, hogy ott csak keresztnevek vannak)?

**Siker feltétele:** a te tervedben az e-mail cseréje egyetlen cella módosítása, és a 3. feladat mindkét válasza stimmel.

<!-- hint -->

(b) probléma: hány sorban szerepel Ema Nováková e-mailje? Mi történik, ha háromból csak kettőben írod át?

<!-- hint -->

A név nem jó kulcs, mert ismétlődik. Találj ki egy számot, ami sosem ismétlődik, ahogy minden tanulónak saját száma van a naplóban.

<!-- hint -->

A 3. feladatban csináld úgy, mint a számítógép: minden „visszahozva = nem” kölcsönzésnél keresd meg a tanuló id-je alapján az osztályát.

<!-- solution -->

**1.** (a) A két Emát nem lehet megkülönböztetni: a `COUNTIF` mindkettőjük kölcsönzéseit összeadja, és az „Ema” szűrő egy idegen ember könyveit is mutatja. (b) Az e-mail minden kölcsönzésnél le van írva. Ha csak néhány helyen írod át, a táblázat ellentmond önmagának (ez az **inkonzisztencia**).

**2.** **Tanulók** (tanuló id = kulcs, név, osztály, e-mail), **Könyvek** (könyv id = kulcs, cím, szerző), **Kölcsönzések** (kölcsönzés id = kulcs, tanuló id, könyv id, mettől, meddig, visszahozva). A kölcsönzés csak **hivatkozik** a tanulóra és a könyvre az id-jükkel. Az e-mail a Tanulók táblázat egyetlen cellájában van.

**3.** Vissza nem hozott: (1, Harry Potter), (2, A kis herceg), (3, Oroszlánszívű testvérek), (4, A hobbit). Az 1., 3. és 4. tanuló a 7.B-be jár, a 2. a 7.A-ba. Válasz: **3 könyv**. A `COUNTIF` az „Ema” névre **4**-et adna, mert összeadja Ema Nováková 2 és Ema Dvořáková 2 kölcsönzését.

Az SQL adatbázisnyelvben a lekérdezés így nézne ki:
`SELECT COUNT(*) FROM Kolcsonzesek JOIN Tanulok ON Kolcsonzesek.tanulo_id = Tanulok.id WHERE Tanulok.osztaly = '7.B' AND visszahozva = 'nem'`
A **JOIN** szó pontosan az a kulcson keresztüli összekapcsolás, amit a feladatban kézzel csinálsz. Így működik a világon szinte minden adatbázis: a webshop, az iskolai rendszer és a ranglista a játékban is.

<!-- more -->

Játszd végig a [SQL Murder Mystery](https://mystery.knightlab.com/) játékot: az SQL City-beli gyilkosságot csak olyan lekérdezésekkel oldhatod meg, amelyek kulcsokon keresztül kapcsolják össze a táblázatokat (angolul). Vagy próbáld ki a táblázatkezelőben az `XLOOKUP` vagy az `FKERES` függvényt: egy sorra ugyanazt csinálja, mint a JOIN.
