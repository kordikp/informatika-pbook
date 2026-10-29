---
id: vyzva-program-opakovani-sk
translationOf: vyzva-program-opakovani
lang: sk
type: challenge
title: "Skončí ten cyklus?"
level: 3
minutes: 30
readingTime: 1
standalone: true
teaser: "Cyklus musí raz skončiť."
voice: universal
parent: null
diagram: null
core: false
status: accepted
concept: opakovani
state: edited
lens: generic
visuality: text-first
depth: standard
formalism: none
lengthBand: standard
carriers: prose|code
---

Cyklus musí raz skončiť. Spoznať to vopred však býva ťažké. Pri jednom šesťriadkovom cykle to dodnes nevedia ani najlepší matematici sveta.

<!-- task -->

Tri cykly v Pythone. `while` znamená „kým“: odsadené riadky (telo) sa opakujú, kým podmienka platí. Podmienka sa kontroluje **na začiatku každého kola**. `!=` znamená „nie je rovné“.

**A**
```
x = 0
while x < 10:
    x = x + 3
```
**B**
```
x = 10
while x != 0:
    x = x - 3
```
**C** (`n % 2 == 0` znamená „n je párne“)
```
n = 7
kroky = 0
while n != 1:
    if n % 2 == 0:
        n = n // 2
    else:
        n = 3 * n + 1
    kroky = kroky + 1
```

**Úloha 1.** Pri A zisti, koľkokrát prebehne telo a čo bude v `x` na konci.

**Úloha 2.** Jeden z cyklov A, B neskončí nikdy. Ktorý a prečo? Oprav ho zmenou **jedinej podmienky** a urč, koľko kôl potom prebehne a čo bude v `x`.

**Úloha 3.** Pri C zisti, koľko bude v `kroky`, keď cyklus skončí. Píš si trasovaciu tabuľku.

**Kedy máš hotovo:** tri správne čísla a oprava, s ktorou cyklus skončí.

<!-- hint -->

Pri A si píš `x` po každom kole: 0, 3, … Pozor, na konci nemusí byť 10.

<!-- hint -->

Pri B sleduj, či `x` niekedy trafí presne nulu: 10, 7, 4, 1, a ďalej?

<!-- hint -->

Pri C začína rad 7, 22, 11, 34… Každá šípka je jeden krok. Počítaj šípky, nie čísla.

<!-- solution -->

**A:** x ide 0 → 3 → 6 → 9 → 12. Telo prebehne **4×** a na konci je `x = 12`. Pri x = 9 podmienka ešte platila, takže prebehlo ďalšie kolo.

**B** neskončí: x ide 10, 7, 4, 1, −2, −5… a nulu preskočí. Podmienka `x != 0` platí navždy. Oprava: `while x > 0:`. Potom prebehnú **4 kolá** a na konci je `x = −2`.

**C:** 7 → 22 → 11 → 34 → 17 → 52 → 26 → 13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1. To je **16 krokov**.

Poučenie: podmienka „kým nie je rovné“ je nebezpečná, keď hodnota môže cieľ preskočiť. Bezpečnejšie je „kým je väčšie ako“.

<!-- more -->

Cyklus C je slávna **Collatzova hypotéza**. Nikto zatiaľ nedokázal, že skončí pre **každé** kladné celé číslo. Počítače ju overili pre všetky čísla až za hranicu 10²⁰, ale dôkaz chýba. Spočítaj kroky pre n = 27: je ich vyše sto, takže si napíš program a spusti ho v [Python Tutore](https://pythontutor.com/) alebo v [Thonny](https://thonny.org/). Potom nájdi číslo do 100, ktoré potrebuje najviac krokov.
