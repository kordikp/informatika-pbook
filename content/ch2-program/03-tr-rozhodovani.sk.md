---
id: rozhodovani-sk
translationOf: rozhodovani
lang: sk
type: spine
title: "Rozhodovanie (podmienka)"
readingTime: 1
standalone: true
teaser: "Niektoré správy ti mobil sám presunie do spamu. Ako sa rozhodne, ktoré?"
voice: universal
parent: null
diagram: rizeni-toku-sk
core: true
recallQ: "Čo sa stane s vetvou „inak“, keď podmienka platí?"
recallA: "Nevykoná sa. Z vetiev ak / inak prebehne vždy práve jedna."
lens: generic
visuality: balanced
depth: intro
formalism: none
lengthBand: tldr
genre: worked-example
status: accepted
concept: rozhodovani
conceptTitle: "Rozhodovanie (podmienka)"
objective: "Niektoré správy ti mobil sám presunie do spamu. Ako sa rozhodne, ktoré?"
state: core
highlights:
  - "Podmienka má hodnotu pravda, alebo nepravda"
  - "Ak–inak: vykoná sa práve jedna vetva"
  - "Skladanie podmienok (a, alebo, nie)"
carriers: prose|diagram
---

Niektoré správy ti mobil sám presunie do spamu. Ako sa rozhodne, ktoré?

Program sa vie **rozhodnúť**. Keď platí **podmienka**, urobí jedno, **inak** druhé. Podmienka je otázka, na ktorú je odpoveď len **áno**, alebo **nie**: je vek menší ako 15?

Pokladňa na kúpalisku triedi ľudí na zľavu a plné vstupné. Zľavu majú deti **mladšie ako 15** a ľudia **od 65 rokov**. Jedna podmienka nestačí, potrebuješ dve: *ak vek < 15 **alebo** vek ≥ 65, potom zľava, inak plné vstupné.* Roztrieď rad v minihre pod textom. Pozor na Tomáša (15) a Karola (65).

Z vetiev **ak** a **inak** prebehne **vždy práve jedna**. Podmienka nemôže platiť „trochu“: buď je pravdivá, alebo nie.

Podmienky sa dajú **skladať**: **a** (musia platiť obe), **alebo** (stačí jedna), **nie** (obráti pravdu). Zľava potrebovala „alebo“: mladší ako 15 **alebo** aspoň 65.

Všimni si okraje 15 a 65. Práve tam sa najčastejšie chybuje, a preto ich pri testovaní skúšaj vždy.

**Vyskúšaj to!** Zapíš ako „ak…, tak…, inak…“, ako sa rozhoduješ ráno: ak je deň skúšania, opakuj si cestou; inak ak prší, vezmi bundu; inak pohoda. Potom skús to isté pre jedno pravidlo svojej obľúbenej hry.

> **Pozor, častý omyl:** „Program prejde obe vetvy.“ Prejde vždy len jednu. Podmienka buď platí, alebo neplatí. „Trochu“ platiť nemôže.

**Ďalej:** Filter v tabuľke je podmienka položená každému riadku: je výpožička po termíne? Áno, alebo nie. → [Tabuľka: dáta s poriadkom](#c/tabulka-a-evidence)
