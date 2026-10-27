---
id: svet-roboti-sk
translationOf: svet-roboti
lang: sk
type: spine
title: "Svet robotov a micro:bitu"
readingTime: 1
standalone: true
teaser: "Tu kód opúšťa obrazovku. Čo naprogramuješ, to sa v skutočnom svete rozsvieti, pípne alebo rozbehne."
voice: universal
parent: null
diagram: null
core: false
recallQ: "Z ktorých troch častí sa skladá každé chytré zariadenie a čo medzi nimi robí program?"
recallA: "Zo vstupu (senzor niečo zmeria), spracovania (program hodnotu vyhodnotí) a výstupu (aktuátor niečo urobí). Program medzi nimi rozhoduje, pamätá si v premenných a opakuje to stále dookola."
lens: generic
visuality: balanced
depth: intro
formalism: none
lengthBand: standard
genre: explainer
status: accepted
concept: svet-roboti
conceptTitle: "Svet robotov a micro:bitu"
objective: "Tu kód opúšťa obrazovku. Čo naprogramuješ, to sa v skutočnom svete rozsvieti, pípne alebo rozbehne."
state: edited
carriers: prose|image
---

Tu kód opúšťa obrazovku. Čo naprogramuješ, to sa v skutočnom svete rozsvieti, pípne alebo rozbehne.

Jedenásť jadier knihy vyrozprávaných vo svete robotov a micro:bitu. Zoradené sú tak, ako by si staval vlastné zariadenie:

1. [Robot nevie, čo myslíš](#svet-roboti-algoritmus-sk) · jadro *Algoritmus: presný návod*
2. [Vozidlo, ktoré sleduje čiaru](#svet-roboti-dekompozice-sk) · jadro *Rozlož problém*
3. [Svet očami robota](#svet-roboti-abstrakce-a-model-sk) · jadro *Model: užitočné zjednodušenie*
4. [Robot uviaznutý v rohu](#svet-roboti-over-a-oprav-sk) · jadro *Over a oprav*
5. [Senzor → program → svetlo](#svet-roboti-program-sk) · jadro *Program: vstup → kroky → výstup*
6. [Blok „stále“](#svet-roboti-opakovani-sk) · jadro *Opakovanie (cyklus)*
7. [Keď je tma, rozsvieť](#svet-roboti-rozhodovani-sk) · jadro *Rozhodovanie (podmienka)*
8. [Krokomer z micro:bitu](#svet-roboti-promenna-sk) · jadro *Premenná: pamäť programu*
9. [Srdce z 25 čísel](#svet-roboti-kodovani-sk) · jadro *Všetko sú čísla*
10. [Rádio medzi micro:bitmi](#svet-roboti-cesta-dat-sk) · jadro *Ako dáta cestujú*
11. [Natrénuj micro:bit na svoje pohyby](#svet-roboti-ai-se-uci-z-dat-sk) · jadro *AI sa učí z príkladov*

**micro:bit** je školská doštička menšia ako krabička žuvačiek. Má displej 5 × 5 LED, dve tlačidlá, akcelerometer (spozná pohyb a zatrasenie), kompas, teplomer a senzor svetla. Novšie verzie majú aj mikrofón a reproduktor. A rádio, ktorým si micro:bity posielajú správy. Programuje sa v [MakeCode](https://makecode.microbit.org) z blokov ako v Scratchi, alebo v Pythone. Nemáš doštičku? MakeCode má priamo v prehliadači **simulátor**: virtuálny micro:bit, ktorý stlačí tlačidlá aj zatrasie sám sebou.

![Malá doštička, veľké prvé kroky](images/comic-ch12-micro-bit.sk.svg)

**Misia sveta:** [Postav gadget](#mission-svet-roboti). Prejdeš podania tohto sveta a navrhneš vlastné zariadenie: senzor, rozhodnutie, výstup a model natrénovaný na gestá. Misia sa počíta do certifikátu Riešiteľ.
