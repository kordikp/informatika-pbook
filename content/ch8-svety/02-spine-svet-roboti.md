---
id: svet-roboti
type: spine
title: "Svět robotů a micro:bitu"
readingTime: 1
standalone: true
teaser: "Tady kód opouští obrazovku. Co naprogramuješ, to se ve skutečném světě rozsvítí, pípne nebo rozjede."
voice: universal
parent: null
diagram: null
core: false
recallQ: "Ze kterých tří částí se skládá každé chytré zařízení a co mezi nimi dělá program?"
recallA: "Ze vstupu (senzor něco změří), zpracování (program hodnotu vyhodnotí) a výstupu (aktuátor něco udělá). Program mezi nimi rozhoduje, pamatuje si v proměnných a opakuje to pořád dokola."
lang: cs
lens: generic
visuality: balanced
depth: intro
formalism: none
lengthBand: standard
genre: explainer
status: accepted
concept: svet-roboti
conceptTitle: "Svět robotů a micro:bitu"
state: edited
carriers: prose|image
---

Tady kód opouští obrazovku. Co naprogramuješ, to se ve skutečném světě rozsvítí, pípne nebo rozjede.

Jedenáct jader knihy vyprávěných ve světě robotů a micro:bitu. Seřazené jsou tak, jak bys stavěl vlastní zařízení:

1. [Robot neví, co myslíš](#svet-roboti-algoritmus) · jádro *Algoritmus: přesný návod*
2. [Vozítko, které sleduje čáru](#svet-roboti-dekompozice) · jádro *Rozlož problém*
3. [Svět očima robota](#svet-roboti-abstrakce-a-model) · jádro *Model: užitečné zjednodušení*
4. [Robot uvízlý v rohu](#svet-roboti-over-a-oprav) · jádro *Ověř a oprav*
5. [Senzor → program → světlo](#svet-roboti-program) · jádro *Program: vstup → kroky → výstup*
6. [Blok „pořád“](#svet-roboti-opakovani) · jádro *Opakování (cyklus)*
7. [Když je tma, rozsviť](#svet-roboti-rozhodovani) · jádro *Rozhodování (podmínka)*
8. [Krokoměr z micro:bitu](#svet-roboti-promenna) · jádro *Proměnná: paměť programu*
9. [Srdce z 25 čísel](#svet-roboti-kodovani) · jádro *Všechno jsou čísla*
10. [Rádio mezi micro:bity](#svet-roboti-cesta-dat) · jádro *Jak data cestují*
11. [Natrénuj micro:bit na svoje pohyby](#svet-roboti-ai-se-uci-z-dat) · jádro *AI se učí z příkladů*

**micro:bit** je školní destička menší než krabička žvýkaček. Má displej 5 × 5 LED, dvě tlačítka, akcelerometr (pozná pohyb a zatřesení), kompas, teploměr a senzor světla. Novější verze mají i mikrofon a reproduktor. A rádio, kterým si micro:bity posílají zprávy. Programuje se v [MakeCode](https://makecode.microbit.org) z bloků jako ve Scratchi, nebo v Pythonu. Nemáš destičku? MakeCode má přímo v prohlížeči **simulátor**: virtuální micro:bit, který zmáčkne tlačítka i zatřese sám sebou.

![Malá destička, velké první kroky](images/comic-ch12-micro-bit.svg)

**Mise světa:** [Postav gadget](#mission-svet-roboti). Projdeš podání tohoto světa a navrhneš vlastní zařízení: senzor, rozhodnutí, výstup a model natrénovaný na gesta. Mise se počítá do certifikátu Řešitel.
