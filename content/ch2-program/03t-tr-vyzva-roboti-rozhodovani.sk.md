---
id: vyzva-roboti-rozhodovani-sk
translationOf: vyzva-roboti-rozhodovani
lang: sk
type: challenge
title: "Lampička, ktorá za súmraku bliká"
level: 2
minutes: 30
readingTime: 2
standalone: true
teaser: "Tvoja nočná lampička z micro:bitu funguje."
voice: universal
parent: svet-roboti-rozhodovani-sk
diagram: null
core: false
status: accepted
concept: rozhodovani
state: edited
lens: roboti
visuality: text-first
depth: standard
formalism: none
lengthBand: standard
carriers: prose|code
---

Tvoja nočná lampička z micro:bitu funguje. Potom príde súmrak, vonku prejde auto a lampa začne blikať: svieti, nesvieti, svieti. Nikto ju nepokazil. Program robí presne to, čo má napísané.

<!-- task -->

Lampa má jediné pravidlo: *keď svetlo < 40, svieti, inak nesvieti*. Senzor svetla dáva čísla 0 až 255. Za súmraku jazdia autá a ťahajú mraky, takže čísla poskakujú.

Večer senzor postupne nameria: **70, 58, 45, 38, 44, 36, 41, 30**. Lampa na začiatku nesvieti.
Ráno nameria: **30, 42, 37, 45, 55, 62, 58, 70**. Lampa na začiatku svieti.

1. Koľkokrát sa lampa s jediným prahom 40 prepne večer a koľkokrát ráno?
2. Navrhni pravidlá, s ktorými sa lampa večer prepne **presne raz** a ráno tiež **presne raz**. Smieš použiť dva prahy a to, či lampa práve svieti.
3. Zdôvodni všeobecne: aké veľké poskakovanie tvoje pravidlá vydržia, aby sa lampa nikdy neprepla dvakrát za sebou? A prečo sa prahy nedajú roztiahnuť napríklad na 5 a 250?

**Úspech:** pravidlá, počet prepnutí pre obe rady s jedným prahom aj s tvojimi pravidlami a jedna veta so všeobecným zdôvodnením.

<!-- hint -->

Začni jediným prahom. Prejdi čísla jedno po druhom a pri každom si zapíš, či lampa svieti. Každá zmena je jedno prepnutie.

<!-- hint -->

Skús dve čísla: pod jedným sa lampa rozsvieti, nad druhým zhasne. Čo má lampa robiť, keď je svetlo medzi nimi?

<!-- hint -->

Medzi prahmi nerozhoduje senzor, ale pamäť: lampa zostane, ako je. Aby sa prepla späť, musí svetlo prejsť celé pásmo.

<!-- solution -->

S jediným prahom 40 sa lampa večer prepne **5×** (38 zapne, 44 vypne, 36 zapne, 41 vypne, 30 zapne) a ráno **3×** (42 vypne, 37 zapne, 45 vypne).

Pravidlá s **hysterézou**, teda s pásmom, v ktorom si zariadenie pamätá predchádzajúci stav:

```
keď svetlo < 40: lampa = svieti
inak keď svetlo > 60: lampa = nesvieti
inak: nechaj lampu, ako je
```

Večer: 38 rozsvieti, čísla 44, 36, 41 a 30 nič nezmenia. Spolu **1×**. Ráno: 30 až 58 nič nezmení, zhasne až 62. Spolu **1×**. Fungujú aj iné prahy, napríklad 35 a 50, ak obe rady dajú jednotku.

Všeobecne: aby sa lampa prepla späť, musí svetlo prejsť **celé pásmo** od 40 do 60. Keď je poskakovanie menšie než šírka pásma (tu 20), nikdy sa to nestane, a lampa sa preto neprepne dvakrát za sebou. Pásmo 5 až 250 by síce neblikalo, ale lampa by sa rozsvietila až v úplnej tme a zhasla až na priamom slnku. V izbe by nezhasla nikdy.

<!-- more -->

Rovnaký trik používa termostat v radiátore (kúri pod 20 °C, vypne nad 21,5 °C) a v elektronike súčiastka s názvom Schmittov klopný obvod. Postav obe verzie lampy v [MakeCode](https://makecode.microbit.org) a posuvníkom svetla v simulátore ich porovnaj. Potom pridaj hysterézu do gadgetu, ktorý stráži hluk: ako dlho má byť ticho, kým varovanie zhasne? Hra navyše „Lampa a krokomer s pamäťou“ ťa preverí.
