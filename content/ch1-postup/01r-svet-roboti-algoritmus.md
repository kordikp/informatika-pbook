---
id: svet-roboti-algoritmus
type: spine
title: "Robot neví, co myslíš"
readingTime: 1
standalone: true
teaser: "Řekneš robotovi „dojeď k nabíječce“. Nepohne se. Neví, kde je, kudy jet, ani co znamená „dojeď“."
voice: universal
parent: null
diagram: null
core: false
recallQ: "Proč návod „namaž chleba“ robotovi nestačí a co musí splňovat každý krok algoritmu?"
recallA: "Robot nic nedomýšlí. Každý krok musí být jednoznačný a proveditelný pro vykonavatele, postup musí po konečném počtu kroků skončit a fungovat pro všechny přípustné vstupy."
lang: cs
lens: roboti
visuality: visual-first
depth: intro
formalism: none
lengthBand: standard
genre: worked-example
status: accepted
concept: algoritmus
state: edited
highlights:
  - "Kroky v přesném pořadí; vykonavatel neví, co autor myslel (elementárnost kroku)"
  - "Jednoznačnost, konečnost, obecnost a správnost jako test, zda je postup algoritmem"
  - "Stejný problém lze řešit různými algoritmy"
carriers: prose|image
---

Řekneš robotovi „dojeď k nabíječce“. Nepohne se. Neví, kde je, kudy jet, ani co znamená „dojeď“.

Robot umí jen pár **elementárních kroků**: *jeď dopředu o 1 políčko*, *otoč se vlevo o 90°*, *zastav*. Všechno ostatní mu musíš rozepsat. A on to vykoná **doslova**, nic nedomýšlí.

![Robot na mřížce a dvě cesty k nabíječce](images/svet-roboti-mrizka.svg)

Postup pro robota je **algoritmus**, když projde čtyřmi zkouškami:

- **Jednoznačnost**: *otoč se* nestačí. Kam? O kolik? *Otoč se vpravo o 90°* ano.
- **Konečnost**: *jeď, dokud nenarazíš* skončí, jen když nějaká zeď opravdu přijde. Na otevřené ploše by robot jel navždy.
- **Obecnost**: postup pro čtverec funguje pro jakoukoli délku strany, ne jen pro jednu: *opakuj 4×: jeď o d políček, otoč se vlevo o 90°*.
- **Správnost**: robot opravdu skončí na nabíječce, ne o políčko vedle.

K nabíječce vede víc cest, a tedy víc **různých algoritmů**. Jeden jede nejdřív nahoru a pak doprava, druhý obráceně. Oba jsou správné. Když je jedna cesta zatarasená, poznáš, proč se vyplatí znát oba.

**Zkus to!** Napiš kamarádovi algoritmus, jak dojít ode dveří třídy k tvé lavici, jen z kroků *dopředu o N kroků* a *otoč se vlevo/vpravo o 90°*. Pak ho nech jít přesně podle něj. Kde se zasekl?

**Dál ve světě robotů:** → [Vozítko, které sleduje čáru](#svet-roboti-dekompozice)
