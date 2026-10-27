---
id: vylet-smycka-ctyri-svety-sk
translationOf: vylet-smycka-ctyri-svety
lang: sk
type: spine
title: "Výlet: Jedna slučka, štyri svety"
readingTime: 1
standalone: true
teaser: "Jeden cyklus, štyri svety. Hra, micro:bit, robot aj feed stoja na rovnakej myšlienke. Štyri kroky a potom späť k jadru knihy."
voice: universal
parent: null
diagram: null
core: false
recallQ: "Robot má program „opakuj, kým nie je pred stenou: choď 1, choď 1“. Kedy kontroluje, či je pred stenou?"
recallA: "Na začiatku každého kola, teda raz za dva kroky. Áno. Preto môže medzi dvoma krokmi naraziť."
lens: generic
visuality: text-first
depth: standard
formalism: none
lengthBand: standard
genre: explainer
status: accepted
concept: vylet-smycka-ctyri-svety
conceptTitle: "Jedna slučka, štyri svety"
objective: "Jeden cyklus, štyri svety. Hra, micro:bit, robot aj feed stoja na rovnakej myšlienke. Štyri kroky a potom späť k jadru knihy."
state: edited
highlights:
  - "Toto je „opakuj stále“ a telo slučky má tri kroky."
  - "Rovnaká slučka, len vstup je senzor."
  - "Slučka musí mať koniec, rovnako ako každý algoritmus."
  - "Koniec tejto slučky si musíš nastaviť ty."
carriers: prose
---

Jeden cyklus, štyri svety. Hra, micro:bit, robot aj feed stoja na rovnakej myšlienke. Štyri kroky a potom späť k jadru knihy.

### Herná slučka

Každá hra beží v **hernej slučke**. Desiatky ráz za sekundu urobí tri veci: **prečíta vstup** (klávesy, ovládač), **posunie svet** (postavy, loptičky) a **vykreslí obrázok**. Prejdi slučku po krokoch a potom ju pusti naplno. Šípkami meníš vstup.

> **Späť k jadru:** Toto je „opakuj stále“ a telo slučky má tri kroky.

### micro:bit „stále“

micro:bit má blok **stále**. Čo je v ňom, opakuje sa, kým micro:bit beží. Tento program každú sekundu zmeria teplotu a ukáže ju. Zapni ho a meň teplotu v miestnosti.

> **Späť k jadru:** Rovnaká slučka, len vstup je senzor.

### Opakuj, kým…

Tri programy pre robota v chodbe: *opakuj, kým nie je pred stenou: choď 1* dôjde k stene. *Opakuj, kým nie je pred stenou: choď 1, choď 1* v chodbe s nepárnou dĺžkou narazí, pretože podmienka sa kontroluje len na začiatku kola, nie medzi dvoma krokmi. A *opakuj, kým nie je pred stenou: zapípaj* sa zacyklí. Robot sa nepohne, takže stena pred ním nikdy nebude.

> **Späť k jadru:** Slučka musí mať koniec, rovnako ako každý [algoritmus](#c/algoritmus).

### Slučka bez konca

Nekonečný feed a automatické prehrávanie sú slučky **navrhnuté tak, aby neskončili**. V programe má slučka podmienku konca. Tu žiadna nie je. Koniec si musíš nastaviť ty.

> **Späť k jadru:** Koniec tejto slučky si musíš nastaviť ty.

**Späť do knihy:** výlet patrí k sekcii [Opakovanie (cyklus)](#c/opakovani). Ďalej pokračuj sekciou [Rozhodovanie (podmienka)](#c/rozhodovani).
