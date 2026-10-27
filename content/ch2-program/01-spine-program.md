---
id: program
type: spine
title: "Program: vstup → kroky → výstup"
readingTime: 1
standalone: true
teaser: "Ťukneš na „Odeslat“ a zpráva odletí. Mezi ťuknutím a odletem proběhly tisíce příkazů. Kdo je napsal a v jakém pořadí?"
voice: universal
parent: null
diagram: vstup-zpracovani-vystup
core: true
recallQ: "Co udělá počítač, když v programu prohodíš dva příkazy, a proč?"
recallA: "Vykoná je v novém pořadí, i když to nedává smysl, protože nic nedomýšlí. Výsledek se proto může změnit."
lang: cs
lens: generic
visuality: balanced
depth: intro
formalism: none
lengthBand: standard
genre: worked-example
status: accepted
concept: program
conceptTitle: "Program: vstup → kroky → výstup"
state: core
highlights:
  - "Kód je zápis algoritmu v programovacím jazyce (blokovém i textovém)"
  - "Sekvence: příkazy se vykonávají v pořadí, v jakém jsou zapsané"
  - "Vstup → zpracování → výstup; uživatelské rozhraní je místo, kde je potkáš"
carriers: prose|diagram
---

Ťukneš na „Odeslat“ a zpráva odletí. Mezi ťuknutím a odletem proběhly tisíce příkazů. Kdo je napsal a v jakém pořadí?

**Program** je algoritmus zapsaný jazykem, kterému rozumí počítač. Může to být text, nebo bloky jako ve Scratchi a MakeCode. Počítač program **vykoná doslova a v zapsaném pořadí**. Nic si nedomýšlí.

Každý program dělá tři věci: přijme **vstup** (klik, senzor, text), **zpracuje** ho a vydá **výstup** (obrázek, zvuk, světlo).

Robot má dojet ke hvězdě a v cíli rozsvítit světlo. Program začíná **vstupem**: *po stisku tlačítka A*. Pak následuje **zpracování**, tedy bloky v pořadí: *jdi dopředu 3, otoč se vlevo, jdi dopředu 2*. Na konci je **výstup**: *rozsviť světlo*. Když prohodíš *jdi dopředu 3* a *jdi dopředu 2*, robot zatočí moc brzy, narazí do zdi a ke hvězdě nedojede.

Stačilo prohodit dva bloky a robot jel jinam. **Pořadí příkazů je součást programu.** Počítač neví, co jsi myslel. Ví jen, co jsi napsal.

Program ale není jen pro počítač. Čtou ho i lidé, kteří ho budou opravovat. Proto se do kódu píšou **komentáře**: poznámky pro lidi, které počítač přeskočí.

**Zkus to!** Najdi v mobilu tři programy a u každého urči vstup, zpracování a výstup. Budík: vstup je čas, který nastavíš, zpracování je hlídání hodin, výstup je zvonění. Pak nadiktuj kamarádovi program „od lavice k tabuli“ a nech ho ho vykonat. Co se stane, když prohodíš dva kroky?

> **Pozor, častý omyl:** „Počítač pozná, co tím autor myslel.“ Nepozná. Vykoná přesně to, co je napsané. A program nečte jen počítač: čtou ho i lidé, kteří ho budou opravovat. Proto se do něj píšou komentáře.

**Dál:** Když program běží, žije v operační paměti a procesor vykonává jeho příkazy jeden po druhém. → [Uvnitř zařízení](#c/uvnitr-zarizeni)
