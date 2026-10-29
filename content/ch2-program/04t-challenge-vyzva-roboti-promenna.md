---
id: vyzva-roboti-promenna
type: challenge
title: "Krokoměr, který podvádí"
level: 2
minutes: 35
readingTime: 1
standalone: true
teaser: "Uděláš dva kroky a krokoměr ukáže šest."
voice: universal
parent: svet-roboti-promenna
diagram: null
core: false
lang: cs
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

Uděláš dva kroky a krokoměr ukáže šest. Kamarádka je nadšená, ty už méně. Destička nelže. Jen počítá něco jiného, než si myslíš.

<!-- task -->

Akcelerometr měří sílu otřesu. V klidu ukazuje kolem 1000. Při dvou krocích naměří micro:bit tuhle řadu:

**1000, 1250, 1550, 1450, 1600, 1200, 1000, 1100, 1650, 1700, 1520, 1480, 1550, 1000**

Projdi tři verze programu a u každé spočítej kroky:

1. **Naivní:** *když síla > 1500, přičti krok*. Pravidlo se kontroluje u každého měření zvlášť.
2. **Hrana:** přičti krok, jen když je síla > 1500 a **předchozí** měření bylo nejvýš 1500. Potřebuješ proměnnou `předchozí`.
3. **Vlastní:** navrhni verzi, která pro tuhle řadu napočítá **přesně 2**. Smíš použít jednu proměnnou navíc kromě `kroky`.

**Úspěch:** tři počty kroků a pravidla tvé verze, která touto řadou projdou s výsledkem 2.

**Bonus:** vymysli řadu pro dva skutečné kroky, kterou tvoje verze spojí v jeden. Proč se to při chůzi stává jen vzácně?

<!-- hint -->

Naivní verze počítá každé měření nad 1500 zvlášť. Jeden krok ale trvá několik měření.

<!-- hint -->

Hrana pomůže jen napůl. Podívej se na 1450 mezi 1550 a 1600: noha se trochu zachvěje a hrana to vezme jako nový krok.

<!-- hint -->

Pamatuj si, jestli je noha „nahoře“. Krok přičti při skoku nad 1500, ale „dolů“ nohu vrať až při hodně nízkém čísle, třeba pod 1100.

<!-- solution -->

**Naivní: 6** (1550, 1600, 1650, 1700, 1520, 1550).
**Hrana: 4** (1550, pak 1600 po 1450, 1650 po 1100 a 1550 po 1480).

**Vlastní verze** s proměnnou `nahoře`:

```
když síla > 1500 a nahoře == ne:
    kroky = kroky + 1
    nahoře = ano
když síla < 1100:
    nahoře = ne
```

1550 přičte první krok. Čísla 1450, 1600 a 1200 nic nezmění, protože žádné není pod 1100. Až 1000 vrátí `nahoře = ne`. 1650 přičte druhý krok a zbytek až po poslední 1000 nic nepřidá. Výsledek **2**.

Klíč je stejný jako u lampy: dva prahy a mezi nimi paměť. Proměnná `nahoře` nepočítá, ale **pamatuje si stav**.

**Bonus:** například 1000, 1600, 1300, 1650, 1000. Mezi dvěma vrcholy síla neklesne pod 1100, takže se spojí v jeden krok. Při chůzi noha mezi kroky vždycky dosedne a síla spadne ke klidové hodnotě, proto je to vzácné.

<!-- more -->

V [MakeCode](https://makecode.microbit.org) je blok *síla zrychlení (mg)*. Vypisuj hodnoty při chůzi blokem *sériová linka: zapiš hodnotu* a prohlédni si je v grafu. Prahy pak nastav podle skutečných čísel, ne odhadem. Kdo chce víc: čísla se dají vyhladit průměrem posledních tří měření. Co to udělá se zpožděním a s rychlou chůzí?
