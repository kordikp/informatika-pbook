---
id: svet-roboti-abstrakce-a-model-hu
translationOf: svet-roboti-abstrakce-a-model
lang: hu
type: spine
title: "A világ a robot szemével"
readingTime: 1
standalone: true
teaser: "Te egy macskát, egy szőnyeget és egy kanapét látsz. A robotporszívó három számot lát."
voice: universal
parent: null
diagram: null
core: false
recallQ: "Miért nem rajzol utcákat a metrótérkép, és hogyan nézne ki gráfként?"
recallA: "Az átszálláshoz elég az állomások és a kapcsolatok ismerete, az utcák csak zavarnának. Az állomások a csúcsok, a köztük lévő kapcsolatok az élek."
lens: roboti
visuality: visual-first
depth: intro
formalism: none
lengthBand: standard
genre: explainer
status: accepted
concept: abstrakce-a-model
state: edited
highlights:
  - "Absztrakció: hogy mi a lényeges, az a céltól függ"
  - "A gráf mint modell: csúcsok és élek (metró, barátságok az osztályban, a fejezetek egymásra épülése)"
  - "Egyik modell sem teljes, mindig választás kérdése"
carriers: prose|image
---

Te egy macskát, egy szőnyeget és egy kanapét látsz. A robotporszívó három számot lát.

A robot nem úgy érzékeli a világot, mint te. Az **érzékelőitől** csak számokat kap: fény **37** (a 255-ből), távolság maga előtt **12 cm**, ütközés **nincs**. Ebből rakja össze a világ **modelljét**. Mindent kihagy, amire a **céljához** nincs szüksége: a szőnyeg színét, a macskát a kanapén, a képet a falon.

![Amit te látsz, és amit a robot lát](images/svet-roboti-cisla.hu.svg)

Hogy mi a lényeges, az a céltól függ. A porszívónak elég tudnia, hol szabad az út és hol van akadály. Egy zoknikat válogató robotnak viszont kellene a szín.

A porszívó a lakást **gráfként** jegyzi meg: a szobák a **csúcsok**, a köztük lévő ajtók az **élek**. A gráf alapján tervezi meg, merre menjen, és ehhez nem kell tudnia, hogyan néznek ki a bútorok.

Egyetlen modell sem teljes, mindig **választás** kérdése. Az a porszívó, amely csak a maga előtti távolságot méri, nem veszi észre a lefelé vezető lépcsőt, amíg nem adsz neki egy alulra néző érzékelőt. A padlón heverő zoknit pedig a modellje egyáltalán nem ismeri, ezért nyugodtan elnyeli.

**Próbáld ki!** Válassz egy robotot vagy okoseszközt (porszívót, fűnyírót, automata ajtót). Milyen számokat kap az érzékelőitől, és mi hiányzik a modelljéből a te világodból?

**Tovább a robotok világában:** → [A sarokba szorult robot](#svet-roboti-over-a-oprav-hu)
