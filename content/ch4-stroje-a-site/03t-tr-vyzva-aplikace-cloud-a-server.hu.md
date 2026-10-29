---
id: vyzva-aplikace-cloud-a-server-hu
translationOf: vyzva-aplikace-cloud-a-server
lang: hu
type: challenge
title: "Offline a buszon"
level: 3
minutes: 35
readingTime: 2
standalone: true
teaser: "Ema térerő nélkül, a buszon ír be egy befizetést, Tomáš ugyanabban a pillanatban egy másikat wifin."
voice: universal
parent: svet-aplikace-cloud-a-server-hu
diagram: null
core: false
status: accepted
concept: cloud-a-server
state: edited
lens: aplikace
visuality: text-first
depth: standard
formalism: none
lengthBand: standard
carriers: prose
---

Ema térerő nélkül, a buszon ír be egy befizetést, Tomáš ugyanabban a pillanatban egy másikat wifin. Este 300 Kč hiányzik a kasszából, pedig senki nem törölt semmit.

<!-- task -->

Az osztály appja egyetlen számot tárol a szerveren: **a kassza állását**. Reggel 1 000 Kč.

- **8:00** Ema térerő nélkül ül a buszon. Ondra ad neki 200 Kč-t. A mobilja kiszámolja: 1 000 + 200, és elment egy „állás = 1 200” üzenetet, amelyet később küld el.
- **8:05** Tomáš online van. Jana ad neki 300 Kč-t. A mobilja elküldi a szervernek: „állás = 1 300”.
- **8:30** Emának lesz térereje, és a mobil elküldi: „állás = 1 200”. A jel megszakad, a mobil nem biztos benne, hogy az üzenet megérkezett, ezért még egyszer elküldi.

1. Milyen állást mutat este a szerver? Mennyi pénz van valójában a kasszában?
2. Találd ki, mit küldjön a mobil és mit tároljon a szerver az állás helyett, hogy az üzenetek **bármilyen sorrendjében** helyes összeg jöjjön ki.
3. A tervednek azt is ki kell bírnia, hogy ugyanaz az üzenet kétszer érkezik meg.

**Siker:** a terved 1 500 Kč-t ad a három üzenet (Ema, Tomáš, Ema újra) mind a hat sorrendjére, és el tudod magyarázni, miért.

<!-- hint -->

A szerver egyszerűen felülírja a számot azzal, ami utoljára érkezett. Ezt hívják úgy, hogy „az utolsó írás nyer”. Ki írt utoljára?

<!-- hint -->

Mi lenne, ha a mobil nem az eredményt küldené, hanem azt, ami történt? Az összeadásnak van egy remek tulajdonsága: nem számít a sorrend.

<!-- hint -->

Honnan tudja a szerver, hogy az „Ondra +200” üzenet másodszor érkezett meg, és nem Ondra fizetett újra? Adj minden üzenetnek valamit, ami soha nem ismétlődik.

<!-- solution -->

**1.** A szerver **1 200 Kč**-t mutat, a kasszában 1 500 Kč van. Ema késői bejegyzése felülírta Tomášét, és Jana 300 Kč-ja eltűnt az appból.

**2.** A mobil **eseményeket** küld, nem állást: „Ondra +200”, „Jana +300”. A szerver listába menti őket, és az állást mindig így számolja: 1 000 + az események összege. Az összeadás nem függ a sorrendtől: 1 000 + 200 + 300 = 1 000 + 300 + 200 = 1 500.

**3.** Minden esemény egyedi **azonosítót** (ID-t) kap, például „ema-mobil-0017”. Az azonos ID-jű eseményt a szerver csak egyszer menti el. ID nélkül a kétszeri küldés 1 700 Kč-t adna. Ha ugyanannak az üzenetnek az ismétlése semmit nem változtat, azt **idempotenciának** hívják.

Így működnek a valódi költségmegosztó appok is: az egyes kiadásokat tárolják, és ezekből számolják az egyenlegeket. Az összeg csak eredmény, nem adat.

<!-- more -->

Mi van, ha Ema **törli** a befizetést, Tomáš pedig ugyanabban a pillanatban 250 Kč-ra **javítja**? Az összeadás itt már nem segít. Találj ki egy szabályt, amely dönt, és keress olyan helyzetet, amikor rossz eredményt ad. Az ilyen vitákra CRDT nevű adatszerkezetek léteznek, ezekre épülnek a közös dokumentumszerkesztők és az offline is működő appok (keresőszó: „local-first”, angolul).
