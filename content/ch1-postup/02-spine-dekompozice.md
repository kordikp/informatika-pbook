---
id: dekompozice
type: spine
title: "Rozlož problém"
readingTime: 1
standalone: true
teaser: "Za týden píšeš test ze tří kapitol. Učit se všechno najednou v neděli večer nefunguje. Jak to rozdělit?"
voice: universal
parent: null
diagram: dekompozice
core: true
recallQ: "Jak rozložíš úkol „uspořádat třídní výlet“ a proč záleží na pořadí částí?"
recallA: "Na menší úlohy: cíl a rozpočet, místo, doprava, program, přihlášky. Některé závisí na jiných: dopravu objednáš až po výběru místa a počtu lidí."
lang: cs
lens: generic
visuality: balanced
depth: intro
formalism: none
lengthBand: standard
genre: worked-example
status: accepted
concept: dekompozice
conceptTitle: "Rozlož problém"
state: core
highlights:
  - "Zadání: výchozí stav, cíl, omezení"
  - "Dílčí úlohy a jejich závislosti (co musí být hotové dřív)"
  - "Pojmenovaná dílčí úloha je v kódu podprogram"
carriers: prose|diagram
---

Za týden píšeš test ze tří kapitol. Učit se všechno najednou v neděli večer nefunguje. Jak to rozdělit?

Velký problém málokdo vyřeší najednou. **Rozložíš ho na menší části**, které umíš vyřešit každou zvlášť, a pak je poskládáš. Tomu se říká **dekompozice**.

Nejdřív si ujasni **zadání**: co máš, co chceš a jaká jsou omezení. Pak úkol rozlož. Některé části na sobě **závisí**: nejdřív musí být hotové jiné.

Vaše třída točí video o škole. Máte 3 týdny, 4 lidi a mobil se stativem a natáčet smíte jen o přestávkách. Rozklad: **Scénář** (vybrat téma → napsat scénář), **Natáčení** (půjčit mobil se stativem → natočit záběry) a **Střih** (sestříhat záběry → přidat titulky a hudbu → pustit video třídě). Šipka znamená „až potom“.

Rozklad ukazuje dvě věci. Části **nejsou stejně velké** a **navazují na sebe**: záběry nenatočíš bez scénáře. Úkoly, které na sobě nezávisí, může dělat víc lidí najednou.

V programování se pojmenovaná část řešení jmenuje **podprogram**. Hra Had je pohyb hada, jídlo, srážky a skóre. Každou část napíšeš a vyzkoušíš zvlášť.

**Zkus to!** Vezmi si úkol, který teď před sebou tlačíš (referát, trénink, úklid pokoje), a rozepiš ho na nejmenší možné kroky, tak malé, že žádný netrvá víc než 15 minut. Pak udělej jen ten první. Funguje to podezřele dobře.

> **Pozor, častý omyl:** „Rozložit úkol znamená rozkrájet ho na stejné kousky.“ Části bývají různě velké a navazují na sebe: dokud nemáš scénář, nemáš co natáčet.

**Dál:** Než problém rozložíš, vybereš, co je v něm podstatné. Zbytek vynecháš. Tomu se říká model a je to další sekce. → [Model: užitečné zjednodušení](#c/abstrakce-a-model)
