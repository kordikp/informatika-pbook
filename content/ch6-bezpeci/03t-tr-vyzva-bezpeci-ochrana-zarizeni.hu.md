---
id: vyzva-bezpeci-ochrana-zarizeni-hu
translationOf: vyzva-bezpeci-ochrana-zarizeni
lang: hu
type: challenge
title: "Mennyit ér valójában a biztonsági mentés"
level: 3
minutes: 35
readingTime: 2
standalone: true
teaser: "A „Van mentésem” megnyugtatóan hangzik."
voice: universal
parent: null
diagram: null
core: false
status: accepted
concept: ochrana-zarizeni
state: edited
lens: generic
visuality: text-first
depth: standard
formalism: none
lengthBand: standard
carriers: prose
---

A „Van mentésem” megnyugtatóan hangzik. Számold ki, mennyi védelmet jelent valójában ez a mondat.

<!-- task -->

Van egy laptopod az összes projekteddel. Egy év alatt megtörténhet:

- **lemezhiba**: 5 %, minden eszköznél külön;
- **zsarolóvírus (ransomware)**: 10 %, mindent titkosít, ami abban a pillanatban a számítógéphez csatlakozik;
- **tűz vagy betörés otthon**: 1 %, mindent tönkretesz, ami otthon van.

Az események függetlenek egymástól. Hasonlíts össze három stratégiát:

- **A**: csak a laptop, semmilyen mentés;
- **B**: laptop + mentőlemez, amely kábellel **állandóan csatlakozik**;
- **C**: laptop + lemez, amelyet mentés után **lecsatlakoztatsz** és elteszel, + egy másolat a felhőben **verzióelőzményekkel**.

1. Számold ki A-ra és B-re annak a valószínűségét, hogy egy év alatt az adatok teljesen elvesznek. B-nél számolj azzal, hogy két lemez nem romlik el egyszerre (az egyik hibáját a másikból helyre lehet hozni).
2. Miért majdnem nulla C? Mi minden kellene ahhoz, hogy az adatok elvesszenek?
3. Csapda: a felhő csak **szinkronizál**, verzióelőzmények nélkül. Mit tesz a zsarolóvírus a felhővel? Számold ki, hogyan változik a kockázat C-nél.
4. Még a C stratégiánál is elveszítesz valamit. Mit, és mivel befolyásolod?

**Sikerkritérium:** helyes százalékok A-nál, B-nél és a szinkronizálós C-nél, plusz egy mondat minden kérdéshez.

<!-- hint -->

Könnyebb azt kiszámolni, hogy **semmi** sem történik. A független, be nem következő események valószínűségeit össze kell szorozni. Az eredményt aztán vond ki 1-ből.

<!-- hint -->

B-nél minden eseménynél tedd fel a kérdést: mindkét példányt tönkreteszi, vagy csak az egyiket?

<!-- hint -->

A szinkronizálás minden változást átmásol. A rosszat is.

<!-- solution -->

1. **A**: semmi sem történik 0,95 · 0,90 · 0,99 ≈ 0,846 valószínűséggel. Az adatvesztés tehát **kb. 15,4 %**, nagyjából 6–7 évente egyszer. **B**: a lemezhiba már nem számít, de a zsarolóvírus és a tűz is mindkét példányt tönkreteszi: 1 − 0,90 · 0,99 = 0,109, vagyis **kb. 10,9 %**. A csatlakoztatott mentés alig segített.

2. C-nél a zsarolóvírus nem éri el a lecsatlakoztatott lemezt, a tűz pedig nem teszi tönkre a felhőt. Az adatok csak akkor vesznek el, ha mindhárom hely független okokból elromlik: például tűz van otthon, és ráadásul valaki ellopja a felhőfiókot, és törli a verziókat. Ezért kell a felhőnek erős jelszó és 2FA.

3. A titkosított fájlok feltöltődnek a felhőbe, és felülírják a jó verziókat. A felhő úgy viselkedik, mint egy csatlakoztatott lemez. Mindent elveszítesz, ha ugyanabban az évben jön zsarolóvírus és tűz is: 0,10 · 0,01 = **0,1 %**. Még mindig kevés, de százszor több a szükségesnél. A verzióelőzmények ezt a rést bezárják.

4. Elveszíted mindazt, ami **az utolsó mentés óta** készült. Amilyen gyakran mentesz, legfeljebb annyit veszítesz.

<!-- more -->

A **3-2-1** szabály: 3 másolat, 2 különböző fajta adathordozón, 1 az otthonon kívül. Tervezz mentést az egész családnak (figyelj a mobilokon lévő fotókra), és számold ki ugyanezzel a modellel. Aztán adj hozzá egy saját kockázatot, például hogy elveszíted a mobilodat az iskolában, és becsüld meg a valószínűségét.
