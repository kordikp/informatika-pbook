---
id: svet-roboti-hu
translationOf: svet-roboti
lang: hu
type: spine
title: "A robotok és a micro:bit világa"
readingTime: 1
standalone: true
teaser: "Itt a kód kilép a képernyőről. Amit beprogramozol, az a valódi világban kigyullad, sípol vagy elindul."
voice: universal
parent: null
diagram: null
core: false
recallQ: "Milyen három részből áll minden okoseszköz, és mit csinál köztük a program?"
recallA: "Bemenetből (egy érzékelő megmér valamit), feldolgozásból (a program kiértékeli az értéket) és kimenetből (egy aktuátor csinál valamit). A program köztük dönt, változókban emlékezik, és ezt újra meg újra megismétli."
lens: generic
visuality: balanced
depth: intro
formalism: none
lengthBand: standard
genre: explainer
status: accepted
concept: svet-roboti
conceptTitle: "A robotok és a micro:bit világa"
objective: "Itt a kód kilép a képernyőről. Amit beprogramozol, az a valódi világban kigyullad, sípol vagy elindul."
state: edited
carriers: prose|image
---

Itt a kód kilép a képernyőről. Amit beprogramozol, az a valódi világban kigyullad, sípol vagy elindul.

A könyv tizenegy alapfogalma a robotok és a micro:bit világában elmesélve. Abban a sorrendben követik egymást, ahogyan a saját eszközödet építenéd:

1. [A robot nem tudja, mire gondolsz](#svet-roboti-algoritmus-hu) · alapfogalom *Algoritmus: pontos utasítás*
2. [Vonalkövető kisautó](#svet-roboti-dekompozice-hu) · alapfogalom *Bontsd részekre a problémát*
3. [A világ a robot szemével](#svet-roboti-abstrakce-a-model-hu) · alapfogalom *Modell: hasznos egyszerűsítés*
4. [A sarokba szorult robot](#svet-roboti-over-a-oprav-hu) · alapfogalom *Ellenőrizd és javítsd*
5. [Érzékelő → program → fény](#svet-roboti-program-hu) · alapfogalom *Program: bemenet → lépések → kimenet*
6. [A „mindig” blokk](#svet-roboti-opakovani-hu) · alapfogalom *Ismétlés (ciklus)*
7. [Ha sötét van, kapcsolj fel](#svet-roboti-rozhodovani-hu) · alapfogalom *Döntés (feltétel)*
8. [Lépésszámláló micro:bitből](#svet-roboti-promenna-hu) · alapfogalom *Változó: a program memóriája*
9. [Szív 25 számból](#svet-roboti-kodovani-hu) · alapfogalom *Minden szám*
10. [Rádió a micro:bitek között](#svet-roboti-cesta-dat-hu) · alapfogalom *Hogyan utaznak az adatok*
11. [Tanítsd be a micro:bitet a saját mozdulataidra](#svet-roboti-ai-se-uci-z-dat-hu) · alapfogalom *Az MI példákból tanul*

A **micro:bit** egy iskolai panel, kisebb egy doboz rágóguminál. Van rajta 5 × 5-ös LED-kijelző, két gomb, gyorsulásmérő (érzékeli a mozgást és a rázást), iránytű, hőmérő és fényérzékelő. Az újabb változatokon mikrofon és hangszóró is van. És rádió, amellyel a micro:bitek üzeneteket küldenek egymásnak. A [MakeCode](https://makecode.microbit.org) felületén programozható blokkokból, mint a Scratchben, vagy Pythonban. Nincs paneled? A MakeCode-ban közvetlenül a böngészőben van **szimulátor**: egy virtuális micro:bit, amely magától megnyomja a gombokat, és még meg is rázza magát.

![Kis panel, nagy első lépések](images/comic-ch12-micro-bit.hu.svg)

**A világ küldetése:** [Építs kütyüt](#mission-svet-roboti). Végigmész ennek a világnak a változatain, és megtervezed a saját eszközödet: érzékelőt, döntést, kimenetet és egy mozdulatokra betanított modellt. A küldetés beleszámít a Megoldó tanúsítványba.
