---
id: vyzva-postup-algoritmus-hu
translationOf: vyzva-postup-algoritmus
lang: hu
type: challenge
title: "Hamis érme két méréssel"
level: 3
minutes: 30
readingTime: 2
standalone: true
teaser: "Ondrának van egy dobozban 9 egyforma kinézetű érméje."
voice: universal
parent: null
diagram: null
core: false
status: accepted
concept: algoritmus
state: edited
lens: generic
visuality: text-first
depth: standard
formalism: light
lengthBand: standard
carriers: prose|formula
---

Ondrának van egy dobozban 9 egyforma kinézetű érméje. Az egyik hamis, és egy kicsit könnyebb. Van egy kétkarú mérleged súlyok nélkül, és csak kétszer mérhetsz. Megoldható? És miért nem megy egyetlen méréssel?

<!-- task -->

Írj algoritmust egy robotnak, amely csak három dolgot tud: **a kiválasztott érméket a bal és a jobb serpenyőbe tenni**, **leolvasni az eredményt** (bal nehezebb, jobb nehezebb, egyensúly) és **rámutatni egy érmére**.

1. Az algoritmusnak a 9 lehetőség **mindegyikénél** meg kell találnia a hamis érmét, nem csak annál, amelyikre éppen gondolsz. Írd le **döntési faként**: minden mérés egy háromágú elágazás, minden ág végén egy érme van.
2. Bizonyítsd be, hogy **egy mérés nem elég**, akárhogy osztod is szét az érméket.
3. Legfeljebb hány érmét tudsz megkülönböztetni **három** méréssel? Indokold meg.

**A siker feltétele:** a fának 9 vége van, mindegyiken más érme, és a fában egyetlen út sem tartalmaz kettőnél több mérést. A 2. és 3. pont bizonyítása számoláson alapul, nem próbálgatáson.

<!-- hint -->

A mérlegnek nem két, hanem három eredménye van. Az egyensúly is információ.

<!-- hint -->

Ne a felét mérd a fele ellen. Oszd az érméket három kupacra.

<!-- hint -->

Minden mérés három csoportra osztja a maradék lehetőségeket. Hány különböző vége lehet egy kétszintes fának?

<!-- solution -->

**Algoritmus:** oszd az érméket kupacokra: A = {1, 2, 3}, B = {4, 5, 6}, C = {7, 8, 9}. Tedd A-t balra, B-t jobbra.
- Bal könnyebb: a hamis A-ban van. Jobb könnyebb: B-ben van. Egyensúly: C-ben van.
- A kiválasztott hármasból az első érmét tedd balra, a másodikat jobbra. A könnyebb oldal mutatja a hamis érmét. Egyensúlynál a harmadik a hamis.

**Miért nem elég egy mérés:** egy mérésnek csak 3 lehetséges eredménye van, de 9 lehetőség van. Három eredmény nem mutathat kilenc különböző érmére.

**Három mérés:** egy háromszintes fának legfeljebb 3 × 3 × 3 = **27** vége van, tehát 27 érmét tudsz kezelni (9-es kupacok, aztán 3-asok, aztán 1-esek). Általában $$k \text{ mérés} \Rightarrow 3^k \text{ érme}.$$ Ugyanaz a gondolatmenet, mint a felezéses keresésnél, csak harmadokra osztunk.

<!-- more -->

Nehezebb változat: 12 érme, egy hamis, de **nem tudod, hogy könnyebb vagy nehezebb**. Három mérés elég. Mielőtt belekezdesz, számold meg a lehetőségeket: 12 érme × 2 változat = 24 eset, a fának pedig 27 vége van. Belefér, de szorosan, ezért az első mérésnek okosnak kell lennie. Próbáld 4 a 4 ellen.
