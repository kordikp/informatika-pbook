---
id: vyzva-socialni-doporucovac-hu
translationOf: vyzva-socialni-doporucovac
lang: hu
type: challenge
title: "Építs hírfolyamot számokból"
level: 3
minutes: 30
readingTime: 3
standalone: true
teaser: "A hírfolyam nem olvas a gondolataidban."
voice: universal
parent: svet-socialni-doporucovac-hu
diagram: null
core: false
status: accepted
concept: doporucovac
state: edited
lens: socialni
visuality: text-first
depth: standard
formalism: light
lengthBand: deep
carriers: prose|table|formula
---

A hírfolyam nem olvas a gondolataidban. Számol. Minden témának van pontszáma, és a következő videót a legnagyobb számú téma kapja. Most egy kicsit te leszel az algoritmus.

<!-- task -->

A közösségi oldal ezt a táblázatot vezeti rólad egy napig:

| Téma | Megtekintés | Átlagosan végignézve | Lájk | Megosztás | „Nem érdekel” |
|---|---|---|---|---|---|
| Kutyusok | 3 | 90 % | 1 | 1 | 0 |
| Foci | 4 | 40 % | 2 | 0 | 0 |
| Minecraft | 2 | 100 % | 0 | 0 | 0 |
| Viccek | 5 | 30 % | 0 | 0 | 1 |
| Főzés | 1 | 80 % | 0 | 0 | 0 |

Egy téma pontszámát így számoljuk:

$$\text{pontszám} = 10 \cdot \text{megtekintés} \cdot \text{végignézve} + 3 \cdot \text{lájk} + 5 \cdot \text{megosztás} - 15 \cdot \text{„Nem érdekel”}$$

(A végignézést tizedes törtként írd, 90 % = 0,9.)

1. Számold ki mind az öt téma pontszámát, és állítsd őket sorrendbe.
2. Hány Minecraft-videót kell végig megnézned (mindegyik hozzáad egy megtekintést 100 %-kal), hogy a Minecraft megelőzze a kutyusokat? És hány koppintás a „Nem érdekel” gombra löki a focit a Minecraft alá?
3. Holnap a hírfolyamban 10 hely lesz, és az algoritmus mindet a győztesnek adja. Magyarázd el, miért nem változik ezután soha a többi téma pontszáma. Aztán javasolj olyan elosztást a 10 helyre, amely három szabályt teljesít: legalább 6 hely a két legjobb témáé, minden 0 feletti pontszámú téma kap legalább 1 helyet, és 1 hely egy teljesen új téma felfedezése.

<!-- hint -->

Kutyusok: 10 · 3 · 0,9 = 27, ehhez jön 3 a lájkért és 5 a megosztásért, összesen 35. A többinél ugyanígy járj el.

<!-- hint -->

Egy végignézett videó 10 pontot ad a Minecraftnak. Azt a legkisebb videószámot keresed, amely után a pontszám nagyobb, mint 35, nem csak egyenlő.

<!-- hint -->

A közösségi oldal csak azokból a videókból tanul, amelyeket megmutat neked. Mi lesz a fociról szóló adatokkal, ha egyáltalán nem kapsz focit?

<!-- solution -->

**1.** Kutyusok 35, Foci 16 + 6 = 22, Minecraft 20, Főzés 8, Viccek 15 − 15 = 0. Sorrend: Kutyusok, Foci, Minecraft, Főzés, Viccek.

**2.** A Minecraftnak **2 videó** kell: egy után 30 (még mindig kevesebb, mint 35), kettő után 40. A focinak elég **1 koppintás**: 22 − 15 = 7, ez kevesebb, mint 20. A negatív jelzés többet nyom a latban, mint a pozitív, ezért hat ilyen gyorsan a „Nem érdekel”.

**3.** Ha csak kutyusokat kapsz, a fociról és a Minecraftról nem keletkezik új sor a táblázatban. A pontszámuk befagy, a kutyusoké pedig tovább nő. Ez a **buborék**: egy ciklus, amelyben az algoritmus önmagát igazolja. Megfelelő elosztás például: Kutyusok 4, Foci 3, Minecraft 1, Főzés 1, felfedezés 1 (4 + 3 = 7 ≥ 6, a Viccek 0 pontosak és nem kapnak semmit, összesen 10). Több jó megoldás is van: a sajátodat ellenőrizd a három szabály alapján. Az igazi közösségi oldalak ezt **felfedezés kontra kiaknázás** néven ismerik (exploration és exploitation).

<!-- more -->

Építs igazi hírfolyamot. A Blueskyhoz készült SkyFeed vizuális építőkészletben (egy szülővel, az ő fiókján keresztül) összerakod a szűrőt és a rendezést, és meglátod, mit csinál. Aki kódot akar olvasni, nyissa meg a GitHubon a bluesky-social/feed-generator kezdőcsomagot: az egész mintahírfolyam az src/algos mappában van. Aztán hasonlítsd össze az X 2023-ban nyilvánosságra hozott algoritmusával, amely ugyanígy rendez, csak több ezer jelzéssel. A „Léptesd a hírfolyamot” extra játékban ezt a számítást lépésenként követheted a kódban.
