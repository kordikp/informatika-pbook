---
id: vyzva-hry-over-a-oprav-hu
translationOf: vyzva-hry-over-a-oprav
lang: hu
type: challenge
title: "Hány közbülső lépés kell a gyors labdának"
level: 3
minutes: 25
readingTime: 2
standalone: true
teaser: "Tudod, miért repül át a gyors labda az ütőn."
voice: universal
parent: svet-hry-over-a-oprav-hu
diagram: null
core: false
status: accepted
concept: over-a-oprav
state: edited
lens: hry
visuality: text-first
depth: standard
formalism: none
lengthBand: deep
carriers: prose
---

Tudod, miért repül át a gyors labda az ütőn. Most pontosan kiszámolod: milyen sebességtől hibázik a játék, és milyen kevés munka elég ahhoz, hogy soha többé ne hibázzon.

<!-- task -->

A labda egy 8 px széles négyzet, és vízszintesen repül. Az ütő 10 px széles. A játék képkockánként egyszer `v` pixellel elmozdítja a labdát, aztán ellenőrzi, hogy a labda átfedi-e az ütőt. **A széllel való érintés is találatnak számít.**

1. Mekkora az a legnagyobb `v` sebesség (px képkockánként), amelynél a labda **soha** nem repül át az ütőn, bárhonnan indul is?
2. A labda képkockánként 40 px-t repül. A játék fel tudja bontani a mozgást `k` egyenlő közbülső lépésre, és mindegyik után ellenőrizhet. Mekkora a legkisebb elég nagy `k`?
3. Írj egy tesztet (bemenet és várt kimenet), amely képkockánként egy ellenőrzéssel elbukik, közbülső lépésekkel pedig átmegy. Az ütő x = 20-tól 30-ig tart, a labda bal széle x = 0-ról indul, és a labda képkockánként 40 px-t repül.

**Sikerkritérium:** az 1. pont száma indoklással, a legkisebb `k` és egy teszt, amelyben minden ellenőrzés után kiírod a labda helyzetét.

<!-- hint -->

A labda akkor fedi át az ütőt, ha a bal széle, x, 20 − 8 = 12 és 30 között van. Milyen hosszú ez a szakasz?

<!-- hint -->

Ha a lépés hosszabb ennél a szakasznál, a labda átugorhatja. Ha rövidebb vagy ugyanolyan hosszú, legalább egy helyzet beleesik.

<!-- hint -->

A 2. ponthoz: minden közbülső lépés legfeljebb olyan hosszú lehet, mint az 1. pont eredménye.

<!-- solution -->

1. Átfedés akkor van, ha a labda bal széle 12 és 30 között van, a határokat is beleértve. Ez egy **18 px** hosszú szakasz (az ütő szélessége + a labda szélessége). Egy legfeljebb 18 px-es lépés nem tudja átugrani, ezért a biztonságos sebesség **v ≤ 18 px képkockánként**.
2. 40 / 18 ≈ 2,2, tehát **k = 3**. Egy közbülső lépés 40 / 3 ≈ 13,3 px, ami kevesebb 18-nál. Két 20 px-es közbülső lépés nem elég, mert 20 > 18.
3. Közbülső lépések nélkül: x = 0, aztán x = 40. Egyik helyzet sincs a 12–30 szakaszban, **a labda átrepül**. Közbülső lépésekkel: x = 0; 13,3; 26,7; 40. A 13,3 a szakaszba esik, **a labda visszapattan**. Teszt: *kezdet 0, sebesség 40, ütő 20-tól 30-ig → visszapattanást várok.*

A közbülső lépések viszont teljesítménybe kerülnek. Egy képkockánként 2000 px-t repülő golyónak több mint száz kellene. Ezért a lövedékeknél **sugarat** használnak: a játék kiszámolja, hogy a régi és az új helyzet közötti szakasz metszi-e a cél téglalapját.

<!-- more -->

A Godot fizikai testének (RigidBody2D) van egy *Continuous CD* beállítása, azaz folytonos ütközésérzékelése, amely pontosan ezt csinálja. Építs egy gyors lövedéket, kapcsold be és ki a beállítást, és hasonlítsd össze. Még tovább: vezesd le, a lépés hányad részénél lép be a labda az x = 12 és x = 30 közötti sávba. Ebből pontosan kiszámolod a visszapattanás helyét, nem csak azt, hogy megtörtént.
