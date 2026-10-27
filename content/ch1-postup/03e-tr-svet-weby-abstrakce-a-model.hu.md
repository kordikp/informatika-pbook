---
id: svet-weby-abstrakce-a-model-hu
translationOf: svet-weby-abstrakce-a-model
lang: hu
type: spine
title: "Vázlat és oldaltérkép"
readingTime: 1
standalone: true
teaser: "Mielőtt megírnák az első kódsort, a tervezők ceruzával rajzolják meg a weboldalt: szürke téglalapok, semmi szín, semmi fotó. Miért ilyen csúnyán?"
voice: universal
parent: null
diagram: null
core: false
recallQ: "Miért nem rajzol utcákat a metrótérkép, és hogyan nézne ki gráfként?"
recallA: "Az átszálláshoz elég az állomások és a kapcsolatok ismerete, az utcák csak zavarnának. Az állomások a csúcsok, a köztük lévő kapcsolatok az élek."
lens: weby
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

Mielőtt megírnák az első kódsort, a tervezők ceruzával rajzolják meg a weboldalt: szürke téglalapok, semmi szín, semmi fotó. Miért ilyen csúnyán?

Az ilyen vázlatot **drótváznak** (wireframe) hívják, ez az oldal drótmodellje. Az áthúzott téglalap azt jelenti, hogy „ide jön egy fotó”, a hullámvonalak szövegek, az ovális egy gomb. A drótváz szándékosan **kihagyja** a színeket, a betűtípust és a képeket, mert abban a pillanatban egyetlen kérdést oldasz meg: *mi lesz az oldalon, és hol*. Ez az **absztrakció**. Hogy mi a lényeges, az a **céltól** függ: az elrendezéshez a hely és a méret, a grafikusnak a színek.

![A kezdőoldal drótváza és az oldaltérkép gráfként](images/svet-weby-nacrt.hu.svg)

A második modell az **oldaltérkép**, és ez egy **gráf**. Az oldalak a **csúcsok**, a köztük lévő hivatkozások az **élek**. A kezdőoldalról élek vezetnek a *Rólunk*, a *Programok* és a *Kapcsolat* oldalra, minden programtól pedig vissza a programok listájára. A gráfon rögtön látod a problémát: arra az oldalra, ahová egyetlen él sem vezet, a látogató soha nem jut el. És ha a legfontosabb dologhoz öt kattintáson át vezet az út, az túl hosszú.

Egyik modell sem a teljes weboldal. A drótváz nem tudja, hogyan néz ki az oldal, a térkép nem tudja, mi van az oldalakon. Ez **választás**: minden modell egy kérdésre felel, és ezért lehet jól dönteni a segítségével. A böngésző is modellként tartja a betöltött oldalt, egy **DOM** nevű elemfaként: az oldal tartalmazza a törzset, a törzs a címsorokat és a bekezdéseket, a bekezdések a szöveget.

**Próbáld ki!** Rajzold meg az iskolád weboldalának kezdőoldalát drótvázként: csak téglalapok, vonalak és feliratok. Aztán rajzold meg az oldaltérképet. Minden oldalra vezet legalább egy él?

**Tovább a weboldalak világában:** → [Egy oldal három nyelve](#svet-weby-program-hu)
