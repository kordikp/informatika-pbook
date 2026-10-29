---
id: vyzva-roboti-promenna-sk
translationOf: vyzva-roboti-promenna
lang: sk
type: challenge
title: "Krokomer, ktorý podvádza"
level: 2
minutes: 35
readingTime: 1
standalone: true
teaser: "Urobíš dva kroky a krokomer ukáže šesť."
voice: universal
parent: svet-roboti-promenna-sk
diagram: null
core: false
status: accepted
concept: promenna
state: edited
lens: roboti
visuality: text-first
depth: standard
formalism: none
lengthBand: standard
carriers: prose|code
---

Urobíš dva kroky a krokomer ukáže šesť. Kamarátka je nadšená, ty už menej. Doštička neklame. Len počíta niečo iné, než si myslíš.

<!-- task -->

Akcelerometer meria silu otrasu. V pokoji ukazuje okolo 1000. Pri dvoch krokoch nameria micro:bit takúto radu:

**1000, 1250, 1550, 1450, 1600, 1200, 1000, 1100, 1650, 1700, 1520, 1480, 1550, 1000**

Prejdi tri verzie programu a pri každej spočítaj kroky:

1. **Naivná:** *keď sila > 1500, pripočítaj krok*. Pravidlo sa kontroluje pri každom meraní zvlášť.
2. **Hrana:** pripočítaj krok, len keď je sila > 1500 a **predošlé** meranie bolo najviac 1500. Potrebuješ premennú `predošlé`.
3. **Vlastná:** navrhni verziu, ktorá pre túto radu napočíta **presne 2**. Smieš použiť jednu premennú navyše okrem `kroky`.

**Úspech:** tri počty krokov a pravidlá tvojej verzie, ktoré touto radou prejdú s výsledkom 2.

**Bonus:** vymysli radu pre dva skutočné kroky, ktorú tvoja verzia spojí do jedného. Prečo sa to pri chôdzi stáva len zriedka?

<!-- hint -->

Naivná verzia počíta každé meranie nad 1500 zvlášť. Jeden krok však trvá niekoľko meraní.

<!-- hint -->

Hrana pomôže len napoly. Pozri sa na 1450 medzi 1550 a 1600: noha sa trochu zachveje a hrana to vezme ako nový krok.

<!-- hint -->

Pamätaj si, či je noha „hore“. Krok pripočítaj pri skoku nad 1500, ale „dole“ nohu vráť až pri veľmi nízkom čísle, napríklad pod 1100.

<!-- solution -->

**Naivná: 6** (1550, 1600, 1650, 1700, 1520, 1550).
**Hrana: 4** (1550, potom 1600 po 1450, 1650 po 1100 a 1550 po 1480).

**Vlastná verzia** s premennou `hore`:

```
keď sila > 1500 a hore == nie:
    kroky = kroky + 1
    hore = áno
keď sila < 1100:
    hore = nie
```

1550 pripočíta prvý krok. Čísla 1450, 1600 a 1200 nič nezmenia, pretože žiadne nie je pod 1100. Až 1000 vráti `hore = nie`. 1650 pripočíta druhý krok a zvyšok až po poslednú 1000 nič nepridá. Výsledok **2**.

Kľúč je rovnaký ako pri lampe: dva prahy a medzi nimi pamäť. Premenná `hore` nepočíta, ale **pamätá si stav**.

**Bonus:** napríklad 1000, 1600, 1300, 1650, 1000. Medzi dvoma vrcholmi sila neklesne pod 1100, takže sa spoja do jedného kroku. Pri chôdzi noha medzi krokmi vždy dosadne a sila spadne ku kľudovej hodnote, preto je to zriedkavé.

<!-- more -->

V [MakeCode](https://makecode.microbit.org) je blok *sila zrýchlenia (mg)*. Vypisuj hodnoty pri chôdzi blokom *sériová linka: zapíš hodnotu* a prezri si ich v grafe. Prahy potom nastav podľa skutočných čísel, nie odhadom. Kto chce viac: čísla sa dajú vyhladiť priemerom posledných troch meraní. Čo to urobí s oneskorením a s rýchlou chôdzou?
