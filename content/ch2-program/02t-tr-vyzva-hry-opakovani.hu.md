---
id: vyzva-hry-opakovani-hu
translationOf: vyzva-hry-opakovani
lang: hu
type: challenge
title: "A játék, amely gyors monitoron felgyorsul"
level: 3
minutes: 25
readingTime: 2
standalone: true
teaser: "Az almás játékod otthon szépen fut."
voice: universal
parent: svet-hry-opakovani-hu
diagram: null
core: false
status: accepted
concept: opakovani
state: edited
lens: hry
visuality: text-first
depth: standard
formalism: none
lengthBand: standard
carriers: prose
---

Az almás játékod otthon szépen fut. Ema elindítja egy 144 Hz-es gamer monitoron, és az almák úgy hullanak, mint a jégeső. A kód ugyanaz. Mi változott?

<!-- task -->

A játékciklus minden képkockában 5 pixellel lejjebb tolja az almát: `y = y + 5`.

1. Milyen gyorsan esik az alma pixel per másodpercben 60 képkocka/másodpercnél (FPS), és milyen gyorsan 144-nél?
2. Írd át a mozgatást úgy, hogy az alma **minden számítógépen 300 px/s** sebességgel essen. Használhatod a `dt` változót: ez az előző képkocka óta eltelt idő másodpercben. 60 FPS-nél ez kb. 0,0167 s.
3. A számítógép egy pillanatra megakad, és egy képkocka 0,5 s-ig tart. Hány pixelt mozdul el az alma ebben a képkockában az új kódod szerint? Az alma alatt egy 20 px magas kosár van. Mi történik?
4. Találj ki egy szabályt, amely megvédi a játékot a 3. pontban leírt helyzettől.

**Sikerkritérium:** helyes számok az 1. és 3. pontban, a 2. pontban olyan képlet, amely 60 és 144 FPS-nél is ugyanazt a másodpercenkénti sebességet adja, és olyan védelem, amelynél meg tudod mondani, legfeljebb hány pixelt tesz meg az alma egy lépésben.

<!-- hint -->

Sebesség másodpercenként = elmozdulás képkockánként × képkockák száma másodpercenként.

<!-- hint -->

Másodpercenként 300 px-t szeretnél, és egy képkocka `dt` másodpercig tart. Hány pixel jut egy képkockára?

<!-- hint -->

A 4. pontban semmit sem kell gyorsítanod. Elég nem engedni, hogy a `dt` túl nagy legyen, vagy a nagy lépést kisebbekre bontani.

<!-- solution -->

1. 5 × 60 = **300 px/s**, 5 × 144 = **720 px/s**. A gyors monitoron a játék 2,4-szer gyorsabb.
2. `y = y + 300 * dt`. 60 FPS-nél az elmozdulás 300 × 0,0167 ≈ 5 px képkockánként, 144 FPS-nél kb. 2,1 px. Másodpercenként mindkét esetben 300 px.
3. 300 × 0,5 = **150 px** egyszerre. Az alma átugorja a 20 px-es kosarat, és egyetlen képkocka sem látja a kosárban. Ez ugyanaz a hiba, mint amikor a labda átrepült az ütőn.
4. Például korlátozd a `dt`-t: `dt = min(dt, 0.05)`. Az alma így egy lépésben legfeljebb 300 × 0,05 = 15 px-t tesz meg, és nem ugorja át a kosarat. Megakadáskor a játék egy pillanatra lelassul, de nem romlik el. A profi megoldás a **fix fizikai lépés**: az eltelt időt egy tárolóba gyűjtöd, és a fizikát annyiszor számolod újra 1/60 s-mal, ahányszor ez belefér a tárolóba. A rajzolás külön fut.

<!-- more -->

Olvasd el a [Game Loop](https://gameprogrammingpatterns.com/game-loop.html) fejezetet a Game Programming Patterns című könyvből (angolul, ingyen online). A Godotban mindkettőt megtalálod: `_process(delta)` a rajzoláshoz és `_physics_process(delta)` fix lépéssel a fizikához. A Scratchben mérd meg a `dt`-t stopperrel, és építs egy almát, amely ugyanolyan gyorsan esik akkor is, ha hozzáadsz száz klónt, és a játék lelassul.
