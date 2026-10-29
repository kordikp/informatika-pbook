---
id: vyzva-program-opakovani-hu
translationOf: vyzva-program-opakovani
lang: hu
type: challenge
title: "Véget ér ez a ciklus?"
level: 3
minutes: 30
readingTime: 1
standalone: true
teaser: "Egy ciklusnak egyszer véget kell érnie."
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

Egy ciklusnak egyszer véget kell érnie. Ezt előre megmondani viszont gyakran nehéz. Egy hatsoros ciklusról a világ legjobb matematikusai sem tudják máig.

<!-- task -->

Három ciklus Pythonban. A `while` azt jelenti: „amíg”. A beljebb kezdett sorok (a törzs) addig ismétlődnek, amíg a feltétel igaz. A feltételt **minden kör elején** ellenőrzi. A `!=` azt jelenti: „nem egyenlő”.

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
**C** (az `n % 2 == 0` azt jelenti: „n páros”)
```
n = 7
lepesek = 0
while n != 1:
    if n % 2 == 0:
        n = n // 2
    else:
        n = 3 * n + 1
    lepesek = lepesek + 1
```

**1. feladat.** Az A-nál derítsd ki, hányszor fut le a törzs, és mi lesz a végén az `x`-ben.

**2. feladat.** Az A és a B közül az egyik soha nem ér véget. Melyik és miért? Javítsd ki **egyetlen feltétel** megváltoztatásával, és add meg, hány kör fut le utána, és mi lesz az `x`-ben.

**3. feladat.** A C-nél derítsd ki, mennyi lesz a `lepesek` értéke, amikor a ciklus véget ér. Vezess nyomkövető táblázatot.

**Akkor vagy kész, ha** megvan a három helyes szám és egy javítás, amellyel a ciklus véget ér.

<!-- hint -->

Az A-nál írd fel az `x` értékét minden kör után: 0, 3, … Vigyázz, a végén nem feltétlenül 10 lesz.

<!-- hint -->

A B-nél figyeld, hogy az `x` eltalálja-e valaha pontosan a nullát: 10, 7, 4, 1, és aztán?

<!-- hint -->

A C-nél a sor így kezdődik 7, 22, 11, 34… Minden nyíl egy lépés. A nyilakat számold, ne a számokat.

<!-- solution -->

**A:** az x így változik: 0 → 3 → 6 → 9 → 12. A törzs **4-szer** fut le, és a végén `x = 12`. Amikor x = 9 volt, a feltétel még igaz volt, ezért lefutott még egy kör.

**B** nem ér véget: az x így megy: 10, 7, 4, 1, −2, −5…, és átugorja a nullát. Az `x != 0` feltétel örökké igaz. Javítás: `while x > 0:`. Ekkor **4 kör** fut le, és a végén `x = −2`.

**C:** 7 → 22 → 11 → 34 → 17 → 52 → 26 → 13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1. Ez **16 lépés**.

A tanulság: az „amíg nem egyenlő” feltétel veszélyes, ha az érték átugorhatja a célt. Biztonságosabb az „amíg nagyobb, mint”.

<!-- more -->

A C ciklus a híres **Collatz-sejtés**. Eddig senki sem bizonyította be, hogy **minden** pozitív egész számra véget ér. A számítógépek 10²⁰ fölött is minden számra ellenőrizték, de bizonyítás nincs. Számold ki a lépéseket n = 27-re: több mint száz van belőlük, úgyhogy írj rá programot, és futtasd a [Python Tutorban](https://pythontutor.com/) vagy a [Thonnyban](https://thonny.org/). Aztán keresd meg azt a 100 alatti számot, amelyiknek a legtöbb lépés kell.
