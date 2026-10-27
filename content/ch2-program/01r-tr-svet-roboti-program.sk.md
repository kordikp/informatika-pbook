---
id: svet-roboti-program-sk
translationOf: svet-roboti-program
lang: sk
type: spine
title: "Senzor → program → svetlo"
readingTime: 1
standalone: true
teaser: "Prejdeš chodbou a svetlo sa samo rozsvieti. Vnútri beží program z troch častí. Rovnakých ako pri každom programe na svete."
voice: universal
parent: null
diagram: vstup-zpracovani-vystup-sk
core: false
recallQ: "Čo urobí počítač, keď v programe prehodíš dva príkazy, a prečo?"
recallA: "Vykoná ich v novom poradí, aj keď to nedáva zmysel, pretože nič nedomýšľa. Výsledok sa preto môže zmeniť."
lens: roboti
visuality: balanced
depth: intro
formalism: none
lengthBand: standard
genre: explainer
status: accepted
concept: program
state: edited
highlights:
  - "Kód je zápis algoritmu v programovacom jazyku (blokovom aj textovom)"
  - "Sekvencia: príkazy sa vykonávajú v poradí, v akom sú zapísané"
  - "Vstup → spracovanie → výstup; používateľské rozhranie je miesto, kde ich stretneš"
carriers: prose|diagram|code
---

Prejdeš chodbou a svetlo sa samo rozsvieti. Vnútri beží program z troch častí. Rovnakých ako pri každom programe na svete.

Každý program **prijme vstup, spracuje ho a vydá výstup**. Pri robotoch a micro:bite si na všetky tri časti siahneš:

- **vstup**: **senzor** niečo zmeria (svetlo, pohyb, teplotu, stlačenie tlačidla),
- **spracovanie**: program hodnotu vyhodnotí (*je tma?*),
- **výstup**: **aktuátor** niečo urobí (rozsvieti LED, roztočí motor, pípne).

Program pre micro:bit poskladáš v MakeCode z blokov, alebo ho napíšeš textom. Oboje je **kód**: algoritmus zapísaný v programovacom jazyku.

```
stále:
  ak úroveň svetla < 50:
    zobraz ikonu ☀
  inak:
    vymaž displej
```

micro:bit vykoná príkazy **presne v zapísanom poradí**. Prehoď dva bloky a výsledok sa zmení. *Zobraz ikonu* a potom *pauza 1 s* ukáže ikonu na sekundu. *Pauza 1 s* a potom *zobraz ikonu* nechá displej sekundu prázdny. Počítač nedomýšľa, čo si chcel.

**Senzory** sú zmysly zariadenia, **aktuátory** jeho svaly. Senzor bez aktuátora len ticho meria, aktuátor bez senzora je slepá sila. Až program medzi nimi robí z čísel činy. Tlačidlá a displej micro:bitu sú jeho **používateľské rozhranie**: miesto, kde vstup a výstup stretneš ty.

**Vyskúšaj to!** Nájdi doma tri zariadenia, ktoré idú podľa schémy vstup → spracovanie → výstup. Pri každom urči senzor aj aktuátor. Čo meria rýchlovarná kanvica a čo potom urobí?

**Ďalej vo svete robotov:** → [Blok „stále“](#svet-roboti-opakovani-sk)
