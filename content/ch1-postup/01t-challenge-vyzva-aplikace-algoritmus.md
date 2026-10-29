---
id: vyzva-aplikace-algoritmus
type: challenge
title: "Nejméně převodů"
level: 3
minutes: 30
readingTime: 2
standalone: true
teaser: "Appka na dělení útraty ti navrhne čtyři převody."
voice: universal
parent: svet-aplikace-algoritmus
diagram: null
core: false
lang: cs
status: accepted
concept: algoritmus
state: edited
lens: aplikace
visuality: text-first
depth: standard
formalism: none
lengthBand: standard
carriers: prose|table
---

Appka na dělení útraty ti navrhne čtyři převody. Jde to na tři? A jak poznáš, že na dva už určitě ne?

<!-- task -->

Po výletu do aquaparku vyšla tahle salda. Kladné číslo znamená, že ostatní dluží tobě, záporné, že dlužíš ty.

| Kdo | Saldo |
|---|---|
| Ema | +600 Kč |
| Tomáš | +500 Kč |
| Ondra | −500 Kč |
| Jana | −400 Kč |
| Petr | −200 Kč |

Appka používá **hladový postup**: vezme toho, kdo dluží nejvíc, a ten pošle co nejvíc tomu, komu se dluží nejvíc. Salda přepočítá a opakuje, dokud nejsou všichni na nule.

1. Projdi hladový postup krok za krokem. Kolik převodů vyjde?
2. Najdi řešení s menším počtem převodů.
3. Dokaž, že dva převody nestačí.
4. Najdi pravidlo: n lidí se dá rozdělit nejvýš na k skupinek, z nichž každá má součet salda nula. Kolik převodů je potřeba nejméně?

**Úspěch:** máš řešení se třemi převody, umíš vysvětlit, proč méně nejde, a máš vzorec z bodu 4.

<!-- hint -->

Hladově: Ondra (−500) pošle Emě (+600). Emě pak zbývá +100. Pokračuj s Janou a Tomášem a sleduj, komu co zbude.

<!-- hint -->

Hledej dvojici nebo trojici lidí, jejichž salda dají dohromady přesně nulu. Taková skupinka se vyrovná sama mezi sebou a s ostatními nemusí mít nic společného.

<!-- hint -->

Nakresli lidi jako body a převody jako čáry. Kolik nejméně čar potřebuješ, aby m bodů bylo propojených? A jaký součet salda musí mít každá propojená část?

<!-- solution -->

**Hladově vyjdou 4 převody:** Ondra → Ema 500 Kč (Emě zbývá +100), Jana → Tomáš 400 Kč (Tomášovi zbývá +100), Petr → Ema 100 Kč a Petr → Tomáš 100 Kč.

**Stačí 3:** Ondra → Tomáš 500 Kč, Jana → Ema 400 Kč, Petr → Ema 200 Kč. Tomáš s Ondrou tvoří skupinku se součtem nula (+500 − 500) a zbytek taky (+600 − 400 − 200).

**Proč ne 2:** převody tvoří síť. Každá propojená část sítě musí mít součet salda nula, jinak by v ní někdo zůstal v mínusu. Část s m lidmi potřebuje aspoň m − 1 převodů. Dva převody mezi pěti lidmi nechají aspoň tři oddělené části. Jedna z nich by musela být jediný člověk, a ten by musel mít saldo nula. Nikdo takový tu není.

**Pravidlo:** nejméně převodů = n − k. Najít největší k je ale těžké: pro 30 lidí existuje přes 8 × 10²³ způsobů, jak je rozdělit do skupinek. Proto appky počítají hladově a zaručí jen, že převodů nebude víc než n − 1.

<!-- more -->

Vymysli salda pro šest lidí, u kterých hladový postup prohraje. O kolik nejvíc může prohrát? Pak napiš v App Inventoru nebo Pythonu program, který pro malý počet lidí zkusí všechna rozdělení do skupinek a najde optimum. Porovnej ho s tím, jak vyrovnání navrhuje open-source appka [Spliit](https://github.com/spliit-app/spliit).
