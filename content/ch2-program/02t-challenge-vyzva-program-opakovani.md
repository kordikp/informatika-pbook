---
id: vyzva-program-opakovani
type: challenge
title: "Skončí ten cyklus?"
level: 3
minutes: 30
readingTime: 1
standalone: true
teaser: "Cyklus musí jednou skončit."
voice: universal
parent: null
diagram: null
core: false
lang: cs
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

Cyklus musí jednou skončit. Poznat to předem ale bývá těžké. U jednoho šestiřádkového cyklu to dodnes nevědí ani nejlepší matematici světa.

<!-- task -->

Tři cykly v Pythonu. `while` znamená „dokud“: odsazené řádky (tělo) se opakují, dokud podmínka platí. Podmínka se kontroluje **na začátku každého kola**. `!=` znamená „není rovno“.

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
**C** (`n % 2 == 0` znamená „n je sudé“)
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

**Úkol 1.** U A zjisti, kolikrát proběhne tělo a co bude v `x` na konci.

**Úkol 2.** Jeden z cyklů A, B neskončí nikdy. Který a proč? Oprav ho změnou **jediné podmínky** a urči, kolik kol pak proběhne a co bude v `x`.

**Úkol 3.** U C zjisti, kolik bude v `kroky`, až cyklus skončí. Piš si trasovací tabulku.

**Kdy máš hotovo:** tři správná čísla a oprava, se kterou cyklus skončí.

<!-- hint -->

U A si piš `x` po každém kole: 0, 3, … Pozor, na konci nemusí být 10.

<!-- hint -->

U B sleduj, jestli `x` někdy trefí přesně nulu: 10, 7, 4, 1, a dál?

<!-- hint -->

U C začíná řada 7, 22, 11, 34… Každá šipka je jeden krok. Počítej šipky, ne čísla.

<!-- solution -->

**A:** x jde 0 → 3 → 6 → 9 → 12. Tělo proběhne **4×** a na konci je `x = 12`. Při x = 9 podmínka ještě platila, takže proběhlo další kolo.

**B** neskončí: x jde 10, 7, 4, 1, −2, −5… a nulu přeskočí. Podmínka `x != 0` platí navždy. Oprava: `while x > 0:`. Pak proběhnou **4 kola** a na konci je `x = −2`.

**C:** 7 → 22 → 11 → 34 → 17 → 52 → 26 → 13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1. To je **16 kroků**.

Poučení: podmínka „dokud není rovno“ je nebezpečná, když hodnota může cíl přeskočit. Bezpečnější je „dokud je větší než“.

<!-- more -->

Cyklus C je slavná **Collatzova hypotéza**. Nikdo zatím nedokázal, že skončí pro **každé** kladné celé číslo. Počítače ji ověřily pro všechna čísla až za hranici 10²⁰, ale důkaz chybí. Spočítej kroky pro n = 27: je jich přes sto, takže si napiš program a pusť ho v [Python Tutoru](https://pythontutor.com/) nebo v [Thonny](https://thonny.org/). Pak najdi číslo do 100, které potřebuje kroků nejvíc.
