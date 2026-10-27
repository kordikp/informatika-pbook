---
id: over-a-oprav
type: spine
title: "Ověř a oprav"
readingTime: 1
standalone: true
teaser: "Mobil ti nabízí aktualizaci, která „opravuje chyby“. Jak to, že je autoři nenašli dřív?"
voice: universal
parent: null
diagram: null
core: true
recallQ: "Proč nestačí vyzkoušet program na jednom příkladu, který funguje?"
recallA: "Chyba se často projeví jen u některých vstupů, třeba u nuly nebo prázdného seznamu. Testy mají pokrýt různé, i okrajové případy."
lang: cs
lens: generic
visuality: balanced
depth: intro
formalism: none
lengthBand: standard
genre: worked-example
status: accepted
concept: over-a-oprav
conceptTitle: "Ověř a oprav"
state: core
highlights:
  - "Test = vstup + očekávaný výstup, připravený předem"
  - "Okrajové případy (0, prázdný vstup, maximum)"
  - "Ladění: místo → příčina → oprava → nové ověření; efektivita jako další měřítko"
carriers: prose|image|code
---

Mobil ti nabízí aktualizaci, která „opravuje chyby“. Jak to, že je autoři nenašli dřív?

Že řešení funguje, **nevíš, dokud ho nevyzkoušíš**. A jeden vyzkoušený příklad nestačí. Chyby se často schovávají v **záludných vstupech**: nula, prázdno, maximum.

Dobrý **test** má dvě části: **vstup** a **výsledek, který čekáš**. Ten si připravíš předem.

Školní automat prodává lístky do kina po 30 Kč. Testy si připravíš předem: 1 člověk → 1 lístek a 30 Kč, 2 lidé → 60 Kč, 3 lidé → 90 Kč, 5 lidí → 150 Kč. Všechny projdou. Pak zkusíš záludný vstup, **0 lidí**. Čekáš, že automat nic nevytiskne. Vytiskne ale lístek za 0 Kč. Program totiž nejdřív tiskne a teprve potom se ptá, jestli má pokračovat:

```
vytištěno = 0
opakuj:
    vytiskni lístek
    vytištěno = vytištěno + 1
dokud vytištěno < počet lidí
```

Oprava: zkontroluj podmínku **na začátku** (*opakuj, dokud vytištěno < počet lidí*). Pro nula lidí se cyklus neprovede ani jednou.

![Ověř a oprav](images/comic-brouk.svg)

Automat fungoval pro 1, 2, 3 i 5 lidí. Chyba se ukázala až u **nuly**: vytiskl lístek zdarma. Kdo by zkusil jen jeden příklad, nikdy by na ni nepřišel.

Ladění má čtyři kroky: **najdi místo, kde se to kazí → pochop příčinu → oprav → ověř znovu všemi testy**. Poslední krok je důležitý. Oprava, která rozbije jiné testy, není oprava.

Když fungují dvě řešení, můžeš porovnat i **efektivitu**: které potřebuje méně kroků nebo méně paměti.

**Zkus to!** Vezmi návod, který jsi napsal (třeba ten na chleba), a zkus ho rozbít. Co když je chleba už nakrájený? Co když došlo máslo? Každý vstup, na kterém návod selže, je chyba, kterou jsi našel dřív než ten, kdo ho použije. Oprav návod, ať zvládne i tohle.

> **Pozor, častý omyl:** „Když to jednou proběhlo, je to správně.“ Proběhlo to jen pro ten jeden vstup. Chyby se schovávají v okrajových případech, třeba u nuly. A chyby dělá každý programátor. Dobrý je ten, kdo je umí najít.

**Dál:** Odpověď AI testuješ stejně jako program. Na záludných otázkách, ne jen na jedné, která zrovna vyšla. → [Ověřuj a rozhoduj ty](#c/rozhodujes-ty)
