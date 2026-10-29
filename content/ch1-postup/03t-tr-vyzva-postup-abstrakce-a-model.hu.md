---
id: vyzva-postup-abstrakce-a-model-hu
translationOf: vyzva-postup-abstrakce-a-model
lang: hu
type: challenge
title: "Robot, amely minden folyosón egyszer megy végig"
level: 3
minutes: 30
readingTime: 2
standalone: true
teaser: "A takarítórobot akkumulátora csak arra elég, hogy az iskola minden folyosóján pontosan egyszer menjen végig."
voice: universal
parent: null
diagram: null
core: false
status: accepted
concept: abstrakce-a-model
state: edited
lens: generic
visuality: text-first
depth: standard
formalism: none
lengthBand: standard
carriers: prose
---

A takarítórobot akkumulátora csak arra elég, hogy az iskola minden folyosóján pontosan egyszer menjen végig. Merre menjen? És egyáltalán lehetséges?

<!-- task -->

Az iskola modellje egy gráf. A termek a csúcsok, a folyosók az élek:

**B**ejárat, **Ö**ltöző, **E**bédlő, **T**ornaterem, **K**önyvtár, **O**sztályterem.
Folyosók: B–Ö, B–E, Ö–E, Ö–T, Ö–K, E–K, T–K, T–O, K–O.

1. Elindulhat-e a robot a Bejárattól úgy, hogy **minden folyosón pontosan egyszer** végigmegy, és visszatér a Bejárathoz? A válaszodat **bizonyítsd be**, nem elég, hogy „kipróbáltam, működik”.
2. Hol kell a robotnak kezdenie és hol fog végezni, hogy minden folyosón pontosan egyszer menjen végig? Írd le a teljes útvonalat.
3. Építhetsz **egy** új folyosót. Melyiket, hogy a robot a Bejárattól indulva vissza tudjon térni oda?
4. A modell kihagyta a folyosók hosszát, a lépcsőket és az ajtókat is. Miért nem baj ez ennél a kérdésnél? Melyik kérdésnél lenne baj?

**A siker feltétele:** egy szabály, amely próbálgatás nélkül dönt, és egy 9 élből álló útvonal.

<!-- hint -->

Számold meg minden teremnél, hány folyosó indul belőle.

<!-- hint -->

Ha a robot csak áthalad egy termen, egy folyosón bemegy, egy másikon kijön. Mit jelent ez azoknak a termeknek a folyosószámára, ahol se nem kezd, se nem végez?

<!-- hint -->

Csak két teremnek van páratlan számú folyosója. Ez a kulcs mindhárom válaszhoz.

<!-- solution -->

**A folyosók száma:** B 2, Ö 4, E 3, T 3, K 4, O 2.

1. **Nem megy.** Valahányszor a robot áthalad egy termen, két folyosót használ el. Ha a Bejáratnál kezdene és végezne, minden teremnek páros számú folyosója kellene legyen. Az Ebédlőnek és a Tornateremnek 3 van.
2. Az **Ebédlőben** kezd, és a **Tornateremben** végez (vagy fordítva). Útvonal: E → B → Ö → E → K → Ö → T → K → O → T. Ez mind a 9 folyosó.
3. Az **E–T** folyosó. Akkor minden teremnek páros számú folyosója lesz, és a Bejárattól induló kör megvalósítható.
4. A kérdés csak az, hogy „végig lehet-e menni?”, és ez csak attól függ, mi mivel szomszédos. A hosszak a „mennyi ideig tart” vagy az „elég-e az akkumulátor” kérdésnél számítanának.

Ezt a szabályt Leonhard Euler fedezte fel 1736-ban Königsberg hét hídjánál. A gráf a legegyszerűbb modell, amelyben a válasz bebizonyítható.

<!-- more -->

Rajzold le a lakásod, az iskolád vagy a lakótelepetek gráfját, és döntsd el, bejárható-e egy vonallal. Aztán a teknőcös extra játékban rajzold meg „a házikót egy vonallal”: ez ugyanaz a feladat.
