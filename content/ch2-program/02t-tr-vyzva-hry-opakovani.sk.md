---
id: vyzva-hry-opakovani-sk
translationOf: vyzva-hry-opakovani
lang: sk
type: challenge
title: "Hra, ktorá na rýchlom monitore zrýchli"
level: 3
minutes: 25
readingTime: 2
standalone: true
teaser: "Tvoja hra s padajúcimi jablkami beží doma krásne."
voice: universal
parent: svet-hry-opakovani-sk
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

Tvoja hra s padajúcimi jablkami beží doma krásne. Ema si ju pustí na hernom monitore so 144 Hz a jablká padajú ako krupobitie. Kód je rovnaký. Čo sa zmenilo?

<!-- task -->

Herná slučka v každom snímku posunie jablko o 5 pixelov nadol: `y = y + 5`.

1. Ako rýchlo padá jablko v pixeloch za sekundu pri 60 snímkach za sekundu (FPS) a ako pri 144?
2. Prepíš posun tak, aby jablko padalo **300 px/s na každom počítači**. Môžeš použiť premennú `dt`: čas v sekundách, ktorý uplynul od minulého snímku. Pri 60 FPS je to asi 0,0167 s.
3. Počítač sa na chvíľu zasekne a jeden snímok trvá 0,5 s. O koľko pixelov sa jablko v tom snímku posunie podľa tvojho nového kódu? Pod jablkom je košík vysoký 20 px. Čo sa stane?
4. Navrhni jedno pravidlo, ktoré hru ochráni pred bodom 3.

**Kritérium úspechu:** správne čísla v bodoch 1 a 3, vzorec v bode 2, ktorý dá pri 60 aj 144 FPS rovnakú rýchlosť za sekundu, a ochrana, pri ktorej vieš povedať, koľko pixelov najviac jablko v jednom kroku prejde.

<!-- hint -->

Rýchlosť za sekundu = posun za snímok × počet snímok za sekundu.

<!-- hint -->

Chceš 300 px za sekundu a snímok trvá `dt` sekúnd. Koľko pixelov pripadá na jeden snímok?

<!-- hint -->

V bode 4 nemusíš nič zrýchľovať. Stačí nedovoliť, aby `dt` bolo príliš veľké, alebo veľký krok rozdeliť na menšie.

<!-- solution -->

1. 5 × 60 = **300 px/s**, 5 × 144 = **720 px/s**. Na rýchlom monitore je hra 2,4× rýchlejšia.
2. `y = y + 300 * dt`. Pri 60 FPS je posun 300 × 0,0167 ≈ 5 px za snímok, pri 144 FPS asi 2,1 px. Za sekundu je to v oboch prípadoch 300 px.
3. 300 × 0,5 = **150 px** naraz. Jablko preskočí 20px košík a žiadny snímok ho v košíku neuvidí. Je to rovnaká chyba ako loptička, ktorá preletela pálkou.
4. Napríklad obmedz `dt`: `dt = min(dt, 0.05)`. Jablko potom v jednom kroku prejde najviac 300 × 0,05 = 15 px a košík nepreskočí. Hra sa pri zaseknutí na chvíľu spomalí, ale nerozbije sa. Profesionálne riešenie je **pevný krok fyziky**: uplynutý čas sa sčítava do zásobníka a fyzika sa prepočíta toľkokrát po 1/60 s, koľkokrát sa do zásobníka zmestí. Kreslenie beží zvlášť.

<!-- more -->

Prečítaj si kapitolu [Game Loop](https://gameprogrammingpatterns.com/game-loop.html) z knihy Game Programming Patterns (po anglicky, zadarmo online). V Godote nájdeš oboje: `_process(delta)` na kreslenie a `_physics_process(delta)` s pevným krokom na fyziku. V Scratchi zmeraj `dt` pomocou stopiek a postav jablko, ktoré padá rovnako rýchlo, aj keď pridáš sto klonov a hra sa spomalí.
