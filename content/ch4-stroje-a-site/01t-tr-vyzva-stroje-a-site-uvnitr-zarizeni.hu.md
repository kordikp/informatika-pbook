---
id: vyzva-stroje-a-site-uvnitr-zarizeni-hu
translationOf: vyzva-stroje-a-site-uvnitr-zarizeni
lang: hu
type: challenge
title: "A szakács a kamrára vár"
level: 2
minutes: 30
readingTime: 3
standalone: true
teaser: "A játéknak 8 GB memória kell, és neked gyors SSD-d van."
voice: universal
parent: null
diagram: null
core: false
status: accepted
concept: uvnitr-zarizeni
state: edited
lens: generic
visuality: text-first
depth: standard
formalism: none
lengthBand: deep
carriers: prose|table
---

A játéknak 8 GB memória kell, és neked gyors SSD-d van. Miért nem veszi a játék az adatokat egyenesen a kamrából? A válasz nem az, hogy „mert csak”. Ki lehet számolni.

<!-- task -->

Minden adatért nyúlás más ideig tart (az ns nanoszekundum, a másodperc milliárdod része):

| Hol vannak az adatok | Egy elérés ideje |
|---|---|
| memória (RAM) | 100 ns |
| SSD | 100 µs = 100 000 ns |
| hagyományos merevlemez (HDD) | 10 ms = 10 000 000 ns |
| szerver az interneten | 50 ms |

1. **Emberi lépték.** Nagyítsd fel az időt úgy, hogy 1 ns 1 másodpercig tartson. Meddig tartana így egy-egy elérés? Váltsd át percre, órára, napra vagy évre.
2. **Képkocka.** A játék másodpercenként 60 képkockát rajzol, egy képkockára tehát kb. 16,7 ms jut. Minden képkockához 10 000 apró adatdarabot kell beolvasnia. Számold ki, mennyi ideig tart ez a RAM-ból és mennyi ideig az SSD-ről. Hány képkocka lenne másodpercenként, ha a játék csak az SSD-ről olvasna?
3. **Akadozás.** Annyi appot nyitsz meg, hogy nem férnek el a RAM-ban. Az operációs rendszer mégsem zárja be őket. Mit csinál velük, és miért akad meg utána a gép?

**A siker feltétele:** helyes számok az 1. és 2. pontban, és a 3. pontban olyan magyarázat, amelyben szerepel a „lemez” szó.

<!-- hint -->

Emberi lépték: a 100 ns-ből 100 s lesz. Egy nap 86 400 s, egy év kb. 31,5 millió s.

<!-- hint -->

Teljes idő = elérések száma × egy elérés ideje. Figyelj a mértékegységekre: 1 ms = 1 000 µs = 1 000 000 ns.

<!-- hint -->

Ha a munkapultra már semmi sem fér, a műszakvezető a dolgok egy részét átviszi a kamrába. Mennyi ideig tart aztán visszahozni őket?

<!-- solution -->

1. RAM: 100 s, nem egészen 2 perc. SSD: 100 000 s, kb. 28 óra. HDD: 10 millió s, kb. 116 nap. Szerver: 50 millió s, kb. 1,6 év.
2. RAM-ból: 10 000 × 100 ns = 1 ms. Ez tizenhatszor is belefér egy képkockába. SSD-ről: 10 000 × 100 µs = 1 s egyetlen képkockára, vagyis **1 képkocka másodpercenként**. A játék játszhatatlan lenne. Ezért van a játéknak **betöltőképernyője**: egyszer áthozza a pályát a kamrából a munkapultra, aztán már csak a RAM-ból veszi az adatokat.
3. Az operációs rendszer a RAM tartalmának egy részét **kiteszi** a lemezre (lapozófájl). Amikor az appnak újra kellenek ezek az adatok, várnia kell a lemezre, ami nagyjából ezerszer lassabb. Ezért akad a gép, ha tele van a RAM. Segít, ha bezársz appokat, vagy több RAM-ot teszel bele. A fotók törlése csak akkor segít, ha a tárhely telt meg.

Megjegyzés: a valódi SSD nagy blokkokban és egyszerre olvas, ezért a gyakorlatban gyorsabb, mint ebben a modellben. Az arány viszont marad: a munkapult nagyságrendekkel gyorsabb, mint a kamra.

<!-- more -->

A szakácsnak van egy még kisebb és gyorsabb zsebe is a kötényén, a **processzor gyorsítótára** (cache): itt egy elérés kb. 1 ns. Számold hozzá a táblázathoz. Aztán nyisd meg Windowson a Feladatkezelőt (Ctrl+Shift+Esc, Teljesítmény fül), és figyeld a memóriát, miközben lapokat nyitsz. Vagy indíts Linuxot a böngészőben a copy.sh/v86 oldalon, és írd be a free parancsot. Hogy hogyan számol a processzor, azt kapukból megépítheted a „Hogyan számol a szakács” extra játékban vagy a nandgame.com oldalon.
