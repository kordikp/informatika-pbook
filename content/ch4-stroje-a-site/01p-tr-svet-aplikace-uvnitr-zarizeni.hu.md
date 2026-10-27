---
id: svet-aplikace-uvnitr-zarizeni-hu
translationOf: svet-aplikace-uvnitr-zarizeni
lang: hu
type: spine
title: "Az app összeomlott, és magával vitte a szöveget"
readingTime: 1
standalone: true
teaser: "Hosszú beszámolót írsz egy appban, egy pillanatra átugrasz egy játékba, és mire visszatérsz, az app üres. A mobil bezárta. Hová lett a szöveged?"
voice: universal
parent: null
diagram: null
core: false
recallQ: "Miért tűnik el a nem mentett dokumentum, ha elmegy az áram, a mentett pedig nem?"
recallA: "A nem mentett csak a memóriában létezik, amely áram nélkül felejt. A mentett a tárhelyen van, amely tartósan megőrzi."
lens: aplikace
visuality: balanced
depth: intro
formalism: none
lengthBand: standard
genre: story
status: accepted
concept: uvnitr-zarizeni
state: edited
highlights:
  - "Processzor, memória, tárhely, perifériák; hardver vs. szoftver"
  - "A memória ideiglenes: a nem mentett munka eltűnik, a megtelt memória lassít"
  - "Az operációs rendszer irányítja az alkalmazásokat és a hardverhez való hozzáférést; eszköz kiválasztása a tulajdonságai alapján"
carriers: prose|image
---

Hosszú beszámolót írsz egy appban, egy pillanatra átugrasz egy játékba, és mire visszatérsz, az app üres. A mobil bezárta. Hová lett a szöveged?

Csak az **operatív memóriában** (RAM) volt. Ott tartják az appok mindazt, amin éppen dolgoznak: a félig megírt szöveget, a megnyitott fotót, a játék állását. Az operatív memória gyors, de **ideiglenes**. Ha az app bezáródik, vagy a mobil akkumulátora lemerül, elfelejt mindent. Tartósan a **tárhely** emlékszik. Ami nincs elmentve, az csak az operatív memóriában létezik.

![Félig megírt szöveg az operatív memóriában és mentett fájl a tárhelyen](images/svet-aplikace-pamet.hu.svg)

Miért zárta be a mobil az appot? Kevés a memóriája, mondjuk 6 GB, a játék pedig sokat akart belőle. Az **operációs rendszer** (Android, iOS) dönti el, ki mit kap. Ha fogy a memória, bezárja a háttérben futó appokat, hogy a képernyőn lévő akadás nélkül fusson. A **tele memória** egyébként mindent **lelassít**: a mobil ide-oda pakolja az adatokat, az appok pedig akadoznak.

Ezért a jó appok maguktól és folyamatosan mentenek, néhány másodpercenként. Ha a sajátodat építed, ez az első szabály: ne számíts arra, hogy az app mindig futni fog.

A mobil ugyanolyan számítógép, mint bármelyik másik. A **processzor** számol, az operatív memória tartja a folyamatban lévő munkát, a tárhely emlékszik, a **perifériák** (kijelző, kamera, mikrofon, hangszóró) pedig a ki- és bejárat. Mindez **hardver**. Az appok és a rendszer **szoftver**. A rendszer arra is vigyáz, mely perifériákhoz férhet hozzá egy app: a kamerát nem kapja meg, amíg meg nem engeded.

A **mobil kiválasztásánál** így tudod, mit kérdezz. Több operatív memória több egyszerre futó appot jelent bezárás nélkül, nagyobb tárhely több fotót, gyorsabb processzor pedig gördülékenyebb játékokat.

**Próbáld ki!** Nézd meg a mobilod beállításaiban, mennyi operatív memóriája és mennyi tárhelye van, és mennyi tárhely szabad. Melyik szám nagyobb, és vajon miért?

**Tovább az alkalmazások világában:** → [Frontend és backend](#svet-aplikace-cloud-a-server-hu)
