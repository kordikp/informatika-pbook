---
id: dekompozice-sk
translationOf: dekompozice
lang: sk
type: spine
title: "Rozlož problém"
readingTime: 1
standalone: true
teaser: "O týždeň píšeš test z troch kapitol. Učiť sa všetko naraz v nedeľu večer nefunguje. Ako to rozdeliť?"
voice: universal
parent: null
diagram: dekompozice-sk
core: true
recallQ: "Ako rozložíš úlohu „zorganizovať triedny výlet“ a prečo záleží na poradí častí?"
recallA: "Na menšie úlohy: cieľ a rozpočet, miesto, doprava, program, prihlášky. Niektoré závisia od iných: dopravu objednáš až po výbere miesta a počtu ľudí."
lens: generic
visuality: balanced
depth: intro
formalism: none
lengthBand: standard
genre: worked-example
status: accepted
concept: dekompozice
conceptTitle: "Rozlož problém"
objective: "O týždeň píšeš test z troch kapitol. Učiť sa všetko naraz v nedeľu večer nefunguje. Ako to rozdeliť?"
mustCover:
  - "Zadanie: východiskový stav, cieľ, obmedzenia"
  - "Čiastkové úlohy a ich závislosti (čo musí byť hotové skôr)"
  - "Pomenovaná čiastková úloha je v kóde podprogram"
state: core
highlights:
  - "Zadanie: východiskový stav, cieľ, obmedzenia"
  - "Čiastkové úlohy a ich závislosti (čo musí byť hotové skôr)"
  - "Pomenovaná čiastková úloha je v kóde podprogram"
carriers: prose|diagram
---

O týždeň píšeš test z troch kapitol. Učiť sa všetko naraz v nedeľu večer nefunguje. Ako to rozdeliť?

Veľký problém málokto vyrieši naraz. **Rozložíš ho na menšie časti**, ktoré vieš vyriešiť každú zvlášť, a potom ich poskladáš. Tomu sa hovorí **dekompozícia**.

Najprv si ujasni **zadanie**: čo máš, čo chceš a aké sú obmedzenia. Potom úlohu rozlož. Niektoré časti od seba **závisia**: najprv musia byť hotové iné.

Vaša trieda natáča video o škole. Máte 3 týždne, 4 ľudí a mobil so statívom a natáčať smiete len cez prestávky. Rozklad: **Scenár** (vybrať tému → napísať scenár), **Natáčanie** (požičať mobil so statívom → natočiť zábery) a **Strih** (zostrihať zábery → pridať titulky a hudbu → pustiť video triede). Šípka znamená „až potom“.

Rozklad ukazuje dve veci. Časti **nie sú rovnako veľké** a **nadväzujú na seba**: zábery nenatočíš bez scenára. Úlohy, ktoré od seba nezávisia, môže robiť viac ľudí naraz.

V programovaní sa pomenovaná časť riešenia volá **podprogram**. Hra Had je pohyb hada, jedlo, zrážky a skóre. Každú časť napíšeš a vyskúšaš zvlášť.

**Vyskúšaj to!** Vezmi si úlohu, ktorú teraz pred sebou tlačíš (referát, tréning, upratovanie izby), a rozpíš ju na najmenšie možné kroky, také malé, že žiadny netrvá viac ako 15 minút. Potom urob len ten prvý. Funguje to podozrivo dobre.

> **Pozor, častý omyl:** „Rozložiť úlohu znamená rozkrájať ju na rovnaké kúsky.“ Časti bývajú rôzne veľké a nadväzujú na seba: kým nemáš scenár, nemáš čo natáčať.

**Ďalej:** Skôr než problém rozložíš, vyberieš, čo je v ňom podstatné. Zvyšok vynecháš. Tomu sa hovorí model a je to ďalšia sekcia. → [Model: užitočné zjednodušenie](#c/abstrakce-a-model)
