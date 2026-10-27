---
id: svet-roboti-dekompozice
type: spine
title: "Vozítko, které sleduje čáru"
readingTime: 1
standalone: true
teaser: "Robotické vozítko jede po černé čáře na podlaze, i v zatáčkách. Vypadá to jako jeden chytrý trik. Ve skutečnosti jsou to tři malé úlohy."
voice: universal
parent: null
diagram: null
core: false
recallQ: "Jak rozložíš úkol „uspořádat třídní výlet“ a proč záleží na pořadí částí?"
recallA: "Na menší úlohy: cíl a rozpočet, místo, doprava, program, přihlášky. Některé závisí na jiných: dopravu objednáš až po výběru místa a počtu lidí."
lang: cs
lens: roboti
visuality: visual-first
depth: intro
formalism: none
lengthBand: standard
genre: explainer
status: accepted
concept: dekompozice
state: edited
highlights:
  - "Zadání: výchozí stav, cíl, omezení"
  - "Dílčí úlohy a jejich závislosti (co musí být hotové dřív)"
  - "Pojmenovaná dílčí úloha je v kódu podprogram"
carriers: prose|image
---

Robotické vozítko jede po černé čáře na podlaze, i v zatáčkách. Vypadá to jako jeden chytrý trik. Ve skutečnosti jsou to tři malé úlohy.

Nejdřív **zadání**. **Výchozí stav**: vozítko stojí na čáře. **Cíl**: dojet po čáře až na konec a nesjet z ní. **Omezení**: má jen dva světelné senzory pod sebou a dva motory, nic víc.

![Vozítko se dvěma senzory nad černou čárou](images/svet-roboti-cara.svg)

Pak problém rozložíš:

1. **Čti senzory**: vidí levý černou? A pravý?
2. **Rozhodni**: oba vidí bílou → jeď rovně. Levý vidí černou → čára uhýbá doleva, zatoč vlevo. Pravý vidí černou → zatoč vpravo.
3. **Ovládni motory**: zatočit vlevo znamená zpomalit levé kolo a pravé nechat jet.

A celé to opakuj pořád dokola, mnohokrát za sekundu.

Části na sobě **závisí**. Rozhodovat nejde, dokud nevíš, co senzor hlásí nad černou a co nad bílou. Proto je úplně první úloha **kalibrace**: změř senzor nad čárou a vedle ní.

Každou část pojmenuješ jako **podprogram**. V MakeCode je to *funkce*: `zatoč vlevo`, `zatoč vpravo`, `jeď rovně`. Hlavní smyčka je pak krátká a čitelná. A když vozítko zatáčí moc prudce, opravuješ jen jednu funkci.

**Zkus to!** Rozlož robotický vysavač na dílčí úlohy. Které z nich musí fungovat dřív než ostatní?

**Dál ve světě robotů:** → [Svět očima robota](#svet-roboti-abstrakce-a-model)
