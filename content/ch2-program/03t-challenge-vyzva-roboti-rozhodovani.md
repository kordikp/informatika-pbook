---
id: vyzva-roboti-rozhodovani
type: challenge
title: "Lampička, která za soumraku bliká"
level: 2
minutes: 30
readingTime: 2
standalone: true
teaser: "Tvoje noční lampička z micro:bitu funguje."
voice: universal
parent: svet-roboti-rozhodovani
diagram: null
core: false
lang: cs
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

Tvoje noční lampička z micro:bitu funguje. Pak přijde soumrak, venku projede auto a lampa začne blikat: svítí, nesvítí, svítí. Nikdo ji nerozbil. Program dělá přesně to, co má napsané.

<!-- task -->

Lampa má jediné pravidlo: *když světlo < 40, svítí, jinak nesvítí*. Senzor světla dává čísla 0 až 255. Za soumraku jezdí auta a táhnou mraky, takže čísla poskakují.

Večer senzor postupně naměří: **70, 58, 45, 38, 44, 36, 41, 30**. Lampa na začátku nesvítí.
Ráno naměří: **30, 42, 37, 45, 55, 62, 58, 70**. Lampa na začátku svítí.

1. Kolikrát se lampa s jediným prahem 40 přepne večer a kolikrát ráno?
2. Navrhni pravidla, se kterými se lampa večer přepne **přesně jednou** a ráno taky **přesně jednou**. Smíš použít dva prahy a to, jestli lampa právě svítí.
3. Zdůvodni obecně: jak velké poskakování tvoje pravidla vydrží, aby se lampa nikdy nepřepnula dvakrát za sebou? A proč nejde prahy roztáhnout třeba na 5 a 250?

**Úspěch:** pravidla, počet přepnutí pro obě řady s jedním prahem i s tvými pravidly a jedna věta s obecným zdůvodněním.

<!-- hint -->

Začni jediným prahem. Projdi čísla jedno po druhém a u každého si zapiš, jestli lampa svítí. Každá změna je jedno přepnutí.

<!-- hint -->

Zkus dvě čísla: pod jedním se lampa rozsvítí, nad druhým zhasne. Co má lampa dělat, když je světlo mezi nimi?

<!-- hint -->

Mezi prahy nerozhoduje senzor, ale paměť: lampa zůstane, jak je. Aby se přepnula zpátky, musí světlo přejít celé pásmo.

<!-- solution -->

S jediným prahem 40 se lampa večer přepne **5×** (38 zapne, 44 vypne, 36 zapne, 41 vypne, 30 zapne) a ráno **3×** (42 vypne, 37 zapne, 45 vypne).

Pravidla s **hysterezí**, tedy s pásmem, ve kterém si zařízení pamatuje předchozí stav:

```
když světlo < 40: lampa = svítí
jinak když světlo > 60: lampa = nesvítí
jinak: nech lampu, jak je
```

Večer: 38 rozsvítí, čísla 44, 36, 41 a 30 nic nezmění. Celkem **1×**. Ráno: 30 až 58 nic nezmění, zhasne až 62. Celkem **1×**. Fungují i jiné prahy, třeba 35 a 50, pokud obě řady dají jedničku.

Obecně: aby se lampa přepnula zpátky, musí světlo přejít **celé pásmo** od 40 do 60. Když je poskakování menší než šířka pásma (tady 20), nikdy se to nestane, a lampa se proto nepřepne dvakrát za sebou. Pásmo 5 až 250 by sice neblikalo, ale lampa by se rozsvítila až v úplné tmě a zhasla až na přímém slunci. V pokoji by nezhasla nikdy.

<!-- more -->

Stejný trik používá termostat v radiátoru (topí pod 20 °C, vypne nad 21,5 °C) a v elektronice součástka jménem Schmittův klopný obvod. Postav obě verze lampy v [MakeCode](https://makecode.microbit.org) a posuvníkem světla v simulátoru je porovnej. Pak hysterezi přidej do gadgetu, který hlídá hluk: jak dlouho má být ticho, než varování zhasne? Hra navíc „Lampa a krokoměr s pamětí“ tě prověří.
