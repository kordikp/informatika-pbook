---
id: svet-aplikace-dekompozice
type: spine
title: "Appka na papíře"
readingTime: 1
standalone: true
teaser: "Chceš appku pro třídu: služby, hlasování o výletu, vybírání peněz, chat a rozvrh. Když začneš všechno naráz, nedokončíš nic."
voice: universal
parent: null
diagram: null
core: false
recallQ: "Jak rozložíš úkol „uspořádat třídní výlet“ a proč záleží na pořadí částí?"
recallA: "Na menší úlohy: cíl a rozpočet, místo, doprava, program, přihlášky. Některé závisí na jiných: dopravu objednáš až po výběru místa a počtu lidí."
lang: cs
lens: aplikace
visuality: visual-first
depth: intro
formalism: none
lengthBand: standard
genre: worked-example
status: accepted
concept: dekompozice
state: edited
highlights:
  - "Zadání: výchozí stav, cíl, omezení"
  - "Dílčí úlohy a jejich závislosti (co musí být hotové dřív)"
  - "Pojmenovaná dílčí úloha je v kódu podprogram"
carriers: prose|image
---

Chceš appku pro třídu: služby, hlasování o výletu, vybírání peněz, chat a rozvrh. Když začneš všechno naráz, nedokončíš nic.

Nejdřív **zadání**. **Výchozí stav:** služby se píšou křídou na tabuli a každý týden na ně někdo zapomene. **Cíl:** každý ráno v mobilu vidí, jakou má službu. **Omezení:** zdarma, jeden týden práce a musí to fungovat na všech mobilech ve třídě.

Pak appku **rozložíš** na části, které zvládneš každou zvlášť. U appek to jsou obvykle **obrazovky** a co se na nich děje: přihlášení, přehled služeb, výměna služby, nastavení. Každá je **dílčí úloha**.

![Appka na služby rozložená na obrazovky a jejich závislosti](images/svet-aplikace-obrazovky.svg)

**Závislosti** určí pořadí. Přehled služeb nejde ukázat, dokud appka neví, kdo jsi (přihlášení) a kdo má kdy službu (seznam). Výměna služby potřebuje přehled. Proto se staví nejdřív **nejmenší verze, která k něčemu je**: seznam, přihlášení a přehled. Hlasování a chat počkají. Té první verzi se říká MVP, nejmenší užitečný produkt.

Co se opakuje, si **pojmenuješ** a použiješ víckrát. Kartičku *jméno · služba · den* ukazuje přehled i výměna služby. Napíšeš ji jednou, v kódu jako **podprogram** *ukazKarticku(zak)*, a obě obrazovky ji jen zavolají. Když kartičku změníš, změní se všude.

**Zkus to!** Vymysli appku, která by se ti hodila. Rozlož ji na obrazovky a zakroužkuj ty, bez kterých nemá smysl. To je tvoje první verze.

**Dál ve světě aplikací:** → [Semafor se schovanou chybou](#svet-aplikace-over-a-oprav)
