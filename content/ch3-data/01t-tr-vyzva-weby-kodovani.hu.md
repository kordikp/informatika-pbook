---
id: vyzva-weby-kodovani-hu
translationOf: vyzva-weby-kodovani
lang: hu
type: challenge
title: "A szétesett körte visszafelé"
level: 3
minutes: 30
readingTime: 2
standalone: true
teaser: "Egy látogató küld neked egy képernyőképet."
voice: universal
parent: svet-weby-kodovani-hu
diagram: null
core: false
status: accepted
concept: kodovani
state: edited
lens: weby
visuality: text-first
depth: standard
formalism: none
lengthBand: standard
carriers: prose|table
---

Egy látogató küld neked egy képernyőképet. A „Přijď na kroužek” helyett ezt látja: „PĹ™ijÄŹ na krouĹľek”. Véletlen zagyvaságnak tűnik. Pedig nem véletlen: ha tudod, mi történt az egyes bájtokkal, számítógép nélkül is elolvasod.

<!-- task -->

Az UTF-8-ban a 128 és 2047 közötti kódú betűk **két bájtban** tárolódnak, a `110xxxxx 10yyyyyy` minta szerint. Az xxxxx és yyyyyy bitek adják a betű kódját (11 bit). A régebbi **Windows-1250** kódolás minden bájtot egyetlen karakternek olvas. Egy darab a táblázatából (tizenhatos számrendszerben):

| bájt | 8D | 8F | 99 | A1 | BE | C3 | C4 | C5 |
|---|---|---|---|---|---|---|---|---|
| karakter | Ť | Ź | ™ | ˇ | ľ | Ă | Ä | Ĺ |

1. A cseh **č** betű kódja 269 (tizenhatosan 10D). Bontsd fel két UTF-8 bájtra, és mutasd meg, miért lesz belőle „ÄŤ”.
2. A **ž** betű kódja 382 (17E). Mit csinál belőle a Windows-1250?
3. A látogató ezt látja: „Ĺˇkola”. Mi volt az eredeti szó? Számold ki visszafelé.
4. Miért maradtak változatlanok az ékezet nélküli betűk?

**Siker:** mind a négy válasz stimmel, és mindegyiket meg tudod indokolni a bájtokkal.

<!-- hint -->

Váltsd át a 269-et kettes számrendszerbe: 269 = 256 + 8 + 4 + 1, vagyis 1 0000 1101. Egészítsd ki balról nullákkal 11 bitre: 00100 001101.

<!-- hint -->

Az első 5 bit a 110 után jön, a maradék 6 a 10 után. Aztán minden nyolc bitet négyesével válts át tizenhatos számmá: 1100 = C, 0100 = 4.

<!-- hint -->

A 3. ponthoz: a Ĺ a C5 bájt, a ˇ az A1. A C5-ből vedd az utolsó 5 bitet, az A1-ből az utolsó 6-ot, tedd őket egymás után, és váltsd át számmá.

<!-- solution -->

1. 269 = 00100 001101. Az első bájt 110 + 00100 = 11000100 = **C4**, a második 10 + 001101 = 10001101 = **8D**. A Windows-1250 a C4-et Ä-nak, a 8D-t Ť-nek olvassa, ezért lesz „ÄŤ”.
2. 382 = 00101 111110, vagyis 11000101 = **C5** és 10111110 = **BE**. Ebből „Ĺľ” lesz, a „žirafa” (zsiráf) így „Ĺľirafa” lesz.
3. A C5 = 11000101 adja a 00101 biteket, az A1 = 10100001 a 100001 biteket. Együtt 00101100001 = 5 · 64 + 33 = **353**, tizenhatosan 161, és ez a **š**. A szó a „škola” (iskola).
4. A 128 alatti kódú karakterek (angol ábécé, számjegyek, szóköz) az UTF-8-ban egyetlen bájtot foglalnak, ugyanazt, mint a Windows-1250-ben. Ezeknél a két kódolás megegyezik, így csak az ékezetes betűk esnek szét.

A gyógymód: a `<meta charset="utf-8">` sor a fejlécben, és UTF-8-ként mentett fájl.

<!-- more -->

Az emojik az UTF-8-ban **négy** bájtot foglalnak, a `11110xxx` minta és három folytató bájt szerint. Hány bitnyi kód fér el bennük? A böngészőben nyomd meg az F12-t, nyisd meg a Konzolt, és írd be: `new TextEncoder().encode("🙂")`. Kiírja a bájtokat. Ellenőrizd, hogy illenek-e a mintára.
