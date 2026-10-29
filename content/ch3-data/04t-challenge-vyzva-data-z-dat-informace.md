---
id: vyzva-data-z-dat-informace
type: challenge
title: "Lepší na každé mapě, horší celkově"
level: 3
minutes: 35
readingTime: 2
standalone: true
teaser: "Žebříček ukazuje, že hráč A vyhrává 67 % zápasů a hráč B jen 35 %."
voice: universal
parent: null
diagram: null
core: false
lang: cs
status: accepted
concept: z-dat-informace
state: edited
lens: generic
visuality: text-first
depth: standard
formalism: none
lengthBand: standard
carriers: prose|table
---

Žebříček ukazuje, že hráč A vyhrává 67 % zápasů a hráč B jen 35 %. Jasná věc. Jenže když se podíváš na jednotlivé mapy, B je lepší na **obou**. Jak je to možné?

<!-- task -->

Hra má dvě mapy: lehkou a těžkou. Statistiky:

| | lehká mapa | těžká mapa |
|---|---|---|
| hráč A | 90 výher ze 100 | 10 výher z 50 |
| hráč B | 19 výher z 20 | 30 výher ze 120 |

1. Spočítej úspěšnost obou hráčů na každé mapě zvlášť a celkem.
2. Vysvětli jednou dvěma větami, jak může být B lepší na obou mapách, a přesto horší celkem. Co je ta **skrytá třetí věc**?
3. Navrhni **férové srovnání** a spočítej ho.
4. Vymysli **vlastní** data (třeba dvě třídy, které píšou lehký a těžký test), kde nastane stejný obrat. **Kritérium:** jedna skupina je lepší v obou kategoriích a horší celkem.

<!-- hint -->

Úspěšnost = výhry / zápasy. Celkovou počítej ze součtů, ne jako průměr dvou procent.

<!-- hint -->

Podívej se, kolik zápasů na které mapě kdo odehrál. Kdo hraje hlavně těžkou mapu?

<!-- hint -->

Férové je srovnat oba hráče při stejném poměru map, třeba půl na půl.

<!-- solution -->

**1.** A: lehká 90 %, těžká 20 %, celkem 100/150 = **66,7 %**. B: lehká 95 %, těžká 25 %, celkem 49/140 = **35 %**.

**2.** B hraje hlavně **těžkou mapu** (120 ze 140 zápasů), A hlavně lehkou. Celkové procento tak neměří dovednost, ale hlavně to, **jakou mapu kdo hraje**. Tomu se říká **Simpsonův paradox**: skrytá třetí věc (mapa) obrátí výsledek, když skupiny sečteš.

**3.** Při stejném poměru 50 : 50: A = (90 + 20) / 2 = **55 %**, B = (95 + 25) / 2 = **60 %**. B je lepší hráč.

**4.** Příklad: třída X píše lehký test 9 z 10 dětí úspěšně (90 %) a těžký 6 z 20 (30 %), celkem 15/30 = 50 %. Třída Y lehký 16 z 20 (80 %) a těžký 2 z 10 (20 %), celkem 18/30 = 60 %. X je lepší v obou testech, Y celkem. Každá data, která splní kritérium, jsou správně.

Stejný obrat se skutečně stal v medicíně (léčba ledvinových kamenů) i u přijímaček na univerzity.

<!-- more -->

Otevři [CODAP](https://codap.concord.org/), zadej svá data a vytvoř graf úspěšnosti rozdělený podle mapy. Pak zkus graf bez rozdělení. Který z nich obstojí v poctivém žebříčku? A podívej se na [Spurious Correlations](https://www.tylervigen.com/spurious-correlations): najdi dvojici, kde je za souvislostí nejspíš třetí věc, ne náhoda.
