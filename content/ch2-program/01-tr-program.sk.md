---
id: program-sk
translationOf: program
lang: sk
type: spine
title: "Program: vstup → kroky → výstup"
readingTime: 1
standalone: true
teaser: "Ťukneš na „Odoslať“ a správa odletí. Medzi ťuknutím a odletom prebehli tisíce príkazov. Kto ich napísal a v akom poradí?"
voice: universal
parent: null
diagram: vstup-zpracovani-vystup-sk
core: true
recallQ: "Čo urobí počítač, keď v programe prehodíš dva príkazy, a prečo?"
recallA: "Vykoná ich v novom poradí, aj keď to nedáva zmysel, pretože nič nedomýšľa. Výsledok sa preto môže zmeniť."
lens: generic
visuality: balanced
depth: intro
formalism: none
lengthBand: standard
genre: worked-example
status: accepted
concept: program
conceptTitle: "Program: vstup → kroky → výstup"
objective: "Ťukneš na „Odoslať“ a správa odletí. Medzi ťuknutím a odletom prebehli tisíce príkazov. Kto ich napísal a v akom poradí?"
mustCover:
  - "Kód je zápis algoritmu v programovacom jazyku (blokovom aj textovom)"
  - "Sekvencia: príkazy sa vykonávajú v poradí, v akom sú zapísané"
  - "Vstup → spracovanie → výstup; používateľské rozhranie je miesto, kde ich stretneš"
state: core
highlights:
  - "Kód je zápis algoritmu v programovacom jazyku (blokovom aj textovom)"
  - "Sekvencia: príkazy sa vykonávajú v poradí, v akom sú zapísané"
  - "Vstup → spracovanie → výstup; používateľské rozhranie je miesto, kde ich stretneš"
carriers: prose|diagram
---

Ťukneš na „Odoslať“ a správa odletí. Medzi ťuknutím a odletom prebehli tisíce príkazov. Kto ich napísal a v akom poradí?

**Program** je algoritmus zapísaný jazykom, ktorému rozumie počítač. Môže to byť text, alebo bloky ako v Scratchi a MakeCode. Počítač program **vykoná doslova a v zapísanom poradí**. Nič si nedomýšľa.

Každý program robí tri veci: prijme **vstup** (klik, senzor, text), **spracuje** ho a vydá **výstup** (obrázok, zvuk, svetlo).

Robot má dôjsť k hviezde a v cieli rozsvietiť svetlo. Program začína **vstupom**: *po stlačení tlačidla A*. Potom nasleduje **spracovanie**, teda bloky v poradí: *choď dopredu 3, otoč sa doľava, choď dopredu 2*. Na konci je **výstup**: *rozsvieť svetlo*. Keď prehodíš *choď dopredu 3* a *choď dopredu 2*, robot zatočí priskoro, narazí do steny a k hviezde nedôjde.

Stačilo prehodiť dva bloky a robot išiel inam. **Poradie príkazov je súčasť programu.** Počítač nevie, čo si myslel. Vie len, čo si napísal.

Program však nie je len pre počítač. Čítajú ho aj ľudia, ktorí ho budú opravovať. Preto sa do kódu píšu **komentáre**: poznámky pre ľudí, ktoré počítač preskočí.

**Vyskúšaj to!** Nájdi v mobile tri programy a pri každom urči vstup, spracovanie a výstup. Budík: vstup je čas, ktorý nastavíš, spracovanie je stráženie hodín, výstup je zvonenie. Potom nadiktuj kamarátovi program „od lavice k tabuli“ a nechaj ho ho vykonať. Čo sa stane, keď prehodíš dva kroky?

> **Pozor, častý omyl:** „Počítač spozná, čo tým autor myslel.“ Nespozná. Vykoná presne to, čo je napísané. A program nečíta len počítač: čítajú ho aj ľudia, ktorí ho budú opravovať. Preto sa doň píšu komentáre.

**Ďalej:** Keď program beží, žije v operačnej pamäti a procesor vykonáva jeho príkazy jeden po druhom. → [Vnútri zariadenia](#c/uvnitr-zarizeni)
