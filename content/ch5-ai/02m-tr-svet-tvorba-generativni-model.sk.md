---
id: svet-tvorba-generativni-model-sk
translationOf: svet-tvorba-generativni-model
lang: sk
type: spine
title: "Šesť prstov a nápis z inej planéty"
readingTime: 1
standalone: true
teaser: "Kamarát zadá „pes“ a dostane obrázok ako z učebnice. Ty zadáš „šteňa retrívera skáče do mláky, západ slnka, záber zblízka“ a máš plagát. Rovnaký nástroj, rozdiel je len v slovách."
voice: universal
parent: null
diagram: null
core: false
recallQ: "Prečo chatbot niekedy sebaisto napíše nezmysel?"
recallA: "Predpovedá pravdepodobné pokračovanie textu a fakty neoveruje. Veta, ktorá znie pravdepodobne, nemusí byť pravdivá."
lens: tvorba
visuality: balanced
depth: intro
formalism: none
lengthBand: standard
genre: worked-example
status: accepted
concept: generativni-model
state: edited
highlights:
  - "Predpoveď ďalšieho slova (tokenu) podľa pravdepodobnosti"
  - "Plynulosť nie je pravdivosť: halucinácie"
  - "To isté pri obrázkoch, hlase a videu (generatívny obraz, deepfake)"
carriers: prose|table
---

Kamarát zadá „pes“ a dostane obrázok ako z učebnice. Ty zadáš „šteňa retrívera skáče do mláky, západ slnka, záber zblízka“ a máš plagát. Rovnaký nástroj, rozdiel je len v slovách.

Generátor ti nečíta myšlienky, číta len slová, ktoré mu dáš. A robí s nimi to, čo chatbot s textom: **predpovedá**. Chatbot odhaduje ďalšie slovo (**token**) podľa **pravdepodobnosti**. Generátor obrázkov tvorí obraz, ktorý k tvojmu opisu *najskôr* patrí. Mnoho generátorov začne od šumu a krok za krokom ho mení na obrázok. Nehľadajú hotový obrázok v databáze, tvoria nový.

Preto pomáha opísať viac. Čo do **promptu** patrí:

| Parameter | Príklady |
|---|---|
| štýl | fotka, akvarel, pixel art |
| nálada | veselá, tajomná, pokojná |
| svetlo | západ slnka, neón, mäkké denné |
| záber | zblízka, z výšky, široký |

Napoprvé to skoro nikdy nesadne. Trik: **meň len jednu vec**. Prepíšeš *západ slnka* na *neón* a uvidíš, čo to slovo ovláda.

Potom príde kontrola, pretože **plynulosť nie je pravdivosť**. Obrázok vyzerá skvele, a postava má šesť prstov, nápis na tričku je zmäť písmen, ktoré len vyzerajú ako písmo, a hodiny na stene majú trinásť čísel. Model vie, čo na obrázkoch *obvykle býva*, nie ako veci naozaj fungujú. Pri texte sa tomu hovorí **halucinácia**: sebaisto napísaný nezmysel. Pri obraze je to to isté.

Rovnaký princíp tvorí aj **hlas** a **video**. Pár minút nahrávky stačí, aby model hovoril hlasom tvojho učiteľa. Video, v ktorom známy človek hovorí, čo nikdy nepovedal, je **deepfake**. Vyzerá skutočne, pretože je pravdepodobné. Nie preto, že je pravdivé.

**Vyskúšaj to!** Vezmi nudný prompt „mačka“ a prepíš ho tak, aby mal aspoň tri parametre z tabuľky. Ak máš poruke generátor, zadaj obe verzie a nájdi tri rozdiely. Potom na obrázkoch nájdi jednu chybu, ktorú by človek neurobil.

**Ďalej vo svete tvorby s AI:** → [Kto uvidí tvoje video](#svet-tvorba-doporucovac-sk)
