---
id: abstrakce-a-model-hu
translationOf: abstrakce-a-model
lang: hu
type: spine
title: "Modell: hasznos egyszerűsítés"
readingTime: 1
standalone: true
teaser: "A telefonos térkép útközben csak utcákat és egy nyilat mutat. Fákat és a házak színét nem látod. Miért nem zavar ez?"
voice: universal
parent: null
diagram: null
core: true
recallQ: "Miért nem rajzol utcákat a metrótérkép, és hogyan nézne ki gráfként?"
recallA: "Az átszálláshoz elég az állomások és a kapcsolatok ismerete, az utcák csak zavarnának. Az állomások a csúcsok, a köztük lévő kapcsolatok az élek."
lens: generic
visuality: text-first
depth: intro
formalism: none
lengthBand: standard
genre: explainer
status: accepted
concept: abstrakce-a-model
conceptTitle: "Modell: hasznos egyszerűsítés"
objective: "A telefonos térkép útközben csak utcákat és egy nyilat mutat. Fákat és a házak színét nem látod. Miért nem zavar ez?"
state: core
highlights:
  - "Absztrakció: hogy mi a lényeges, az a céltól függ"
  - "A gráf mint modell: csúcsok és élek (metró, barátságok az osztályban, a fejezetek egymásra épülése)"
  - "Egyik modell sem teljes, mindig választás kérdése"
carriers: prose
---

A telefonos térkép útközben csak utcákat és egy nyilat mutat. Fákat és a házak színét nem látod. Miért nem zavar ez?

A **modell** a valóság egyszerűsítése egy bizonyos célra. Kihagy mindent, amire ahhoz a célhoz nincs szükséged. Hogy mi a lényeges, **a céltól függ**: egy turistának más térkép kell, mint egy autósnak.

Vegyél egy várost metróval. A légifelvételen házak, fák, a folyó és az utcák is látszanak: az átszálláshoz ez túl sok. Az utcatérkép kihagyja a házakat és a fákat, ez a gyalogosnak jó. A metrótérkép az utcákat és a valódi távolságokat is kihagyja. Megmaradnak az állomások és az összeköttetések, és rögtön látod, hol kell átszállni. Végül a **gráf**: csak az állomások és a köztük húzódó vonalak.

A metrótérkép **nem pontos**, és éppen ezért hasznos. Nincsenek rajta utcák és valódi távolságok, így könnyű vele átszállni.

Sok modell **gráf**: a dolgok a **csúcsok**, a köztük lévő kapcsolatok az **élek**. Állomások és összeköttetések. Osztálytársak és barátságok. Fejezetek és egymásra épülésük. Még ennek a könyvnek a térképe is gráf.

Egyik modell sem teljes. Mindig **választás**, hogy mit hagyunk ki.

**Próbáld ki!** Írd le egy barátodnak az utat az iskolától hozzátok haza. Figyeld meg, mi mindent hagysz ki gondolkodás nélkül (a homlokzatok színét, a lámpák számát, a járda melletti autókat), és mit tartasz meg (kanyarokat, tájékozódási pontokat). Épp most készítettél absztrakciót. Most pedig próbáld ki: mit tartanál meg, ha ugyanezt az utat egy autósnak írnád le? Más cél, más lényeges részletek.

> **Vigyázz, gyakori tévedés:** „Minél több részlet van egy modellben, annál jobb.” A jó modell épp ellenkezőleg: a céljához mérten a lehető legegyszerűbb. A metrótérkép nem mutat utcákat, és éppen ezért lehet vele olyan könnyen közlekedni.

**Tovább:** A betanított mesterséges intelligencia is modell. A világ olyan egyszerűsítése, amelyet a gép példákból vezetett le. → [Az MI példákból tanul](#c/ai-se-uci-z-dat)
