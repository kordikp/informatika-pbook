---
id: rozhodovani
type: spine
title: "Rozhodování (podmínka)"
readingTime: 1
standalone: true
teaser: "Některé zprávy ti mobil sám přesune do spamu. Jak se rozhodne, kterou?"
voice: universal
parent: null
diagram: rizeni-toku
core: true
recallQ: "Co se stane s větví „jinak“, když podmínka platí?"
recallA: "Nevykoná se. Z větví když / jinak proběhne vždy právě jedna."
lang: cs
lens: generic
visuality: balanced
depth: intro
formalism: none
lengthBand: tldr
genre: worked-example
status: accepted
concept: rozhodovani
conceptTitle: "Rozhodování (podmínka)"
state: core
highlights:
  - "Podmínka má hodnotu pravda, nebo nepravda"
  - "Když–jinak: provede se právě jedna větev"
  - "Skládání podmínek (a, nebo, ne)"
carriers: prose|diagram
---

Některé zprávy ti mobil sám přesune do spamu. Jak se rozhodne, kterou?

Program se umí **rozhodnout**. Když platí **podmínka**, udělá jedno, **jinak** druhé. Podmínka je otázka, na kterou je odpověď jen **ano**, nebo **ne**: je věk menší než 15?

Pokladna v bazénu třídí lidi na slevu a plné vstupné. Slevu mají děti **mladší 15** a lidé **od 65 let**. Jedna podmínka nestačí, potřebuješ dvě: *když věk < 15 **nebo** věk ≥ 65, pak sleva, jinak plné vstupné.* Roztřiď frontu v minihře pod textem. Pozor na Tomáše (15) a Karla (65).

Z větví **když** a **jinak** proběhne **vždycky právě jedna**. Podmínka nemůže platit „trochu“: buď je pravdivá, nebo ne.

Podmínky jde **skládat**: **a** (musí platit obě), **nebo** (stačí jedna), **ne** (obrátí pravdu). Sleva potřebovala „nebo“: mladší 15 **nebo** aspoň 65.

Všimni si okrajů 15 a 65. Přesně tam se nejčastěji chybuje, a proto je při testování zkoušej vždycky.

**Zkus to!** Zapiš jako „když…, tak…, jinak…“, jak se rozhoduješ ráno: když je den zkoušení, opakuj si cestou; jinak když prší, vezmi bundu; jinak pohoda. Pak zkus totéž pro jedno pravidlo své oblíbené hry.

> **Pozor, častý omyl:** „Program projde obě větve.“ Projde vždycky jen jednu. Podmínka buď platí, nebo neplatí. „Trochu“ platit nemůže.

**Dál:** Filtr v tabulce je podmínka položená každému řádku: je výpůjčka po termínu? Ano, nebo ne. → [Tabulka: data s řádem](#c/tabulka-a-evidence)
