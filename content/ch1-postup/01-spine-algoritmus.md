---
id: algoritmus
type: spine
title: "Algoritmus: přesný návod"
readingTime: 1
standalone: true
teaser: "Navigace tě vede k babičce. Na objížďce ti během vteřiny vymyslí jiný přesný postup. Proč se nikdy nezeptá „a jak to myslíš?“"
voice: universal
parent: null
diagram: null
core: true
recallQ: "Proč návod „namaž chleba“ robotovi nestačí a co musí splňovat každý krok algoritmu?"
recallA: "Robot nic nedomýšlí. Každý krok musí být jednoznačný a proveditelný pro vykonavatele, postup musí po konečném počtu kroků skončit a fungovat pro všechny přípustné vstupy."
lang: cs
lens: generic
visuality: balanced
depth: intro
formalism: none
lengthBand: standard
genre: story
status: accepted
concept: algoritmus
conceptTitle: "Algoritmus: přesný návod"
state: core
highlights:
  - "Kroky v přesném pořadí; vykonavatel neví, co autor myslel (elementárnost kroku)"
  - "Jednoznačnost, konečnost, obecnost a správnost jako test, zda je postup algoritmem"
  - "Stejný problém lze řešit různými algoritmy"
carriers: prose|image
---

Navigace tě vede k babičce. Na objížďce ti během vteřiny vymyslí jiný přesný postup. Proč se nikdy nezeptá „a jak to myslíš?“

**Algoritmus** je návod tak přesný, že ho vykonavatel provede bez domýšlení. Člověk si nejasný pokyn domyslí. Robot ne: udělá **přesně to, co stojí v návodu**, a nic víc.

Zkus to na krajíci s máslem. Pokyn „namaž chleba“ robot neprovede: který chleba, čím a kolik másla? Funguje až tohle: *vezmi krajíc z talíře, vezmi nůž za rukojeť, naber nožem lžičku másla, rozetři máslo po celé horní straně krajíce, polož nůž.* Každý krok jde pochopit jen jedním způsobem a robot ho umí udělat.

![Algoritmus: přesný návod](images/comic-doslovny-robot.svg)

Dobrý algoritmus splňuje čtyři věci:

1. **Jednoznačný:** každý krok jde pochopit jen jedním způsobem.
2. **Proveditelný:** vykonavatel každý krok umí udělat.
3. **Konečný:** po konečném počtu kroků skončí.
4. **Správný a obecný:** dá správný výsledek pro všechny přípustné vstupy, třeba pro každý chleba, ne jen pro jeden.

Stejný problém jde vyřešit různými algoritmy. Někdo maže od kraje, jiný od středu. Správné můžou být oba.

**Zkus to!** Nadiktuj kamarádovi, jak namazat chleba, a on ať dělá PŘESNĚ to, co říkáš, nic si nedomýšlí. („Vezmi nůž.“ Kterým koncem?) Uvidíš, kolik kroků ti chybí. Pak návod oprav, až bude fungovat napoprvé. Právě jsi napsal algoritmus a odladil ho.

> **Pozor, častý omyl:** „Algoritmus je něco složitého, co patří jen do počítače.“ Algoritmus je každý dost přesný návod, třeba recept. Počítač jen potřebuje, aby byl přesný úplně.

**Dál:** Program je algoritmus zapsaný jazykem, kterému rozumí počítač. A počítač je ten nejdoslovnější robot. → [Program: vstup → kroky → výstup](#c/program)
