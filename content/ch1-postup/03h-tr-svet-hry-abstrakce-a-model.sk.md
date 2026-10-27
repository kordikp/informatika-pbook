---
id: svet-hry-abstrakce-a-model-sk
translationOf: svet-hry-abstrakce-a-model
lang: sk
type: spine
title: "Hitbox: rytier je obdĺžnik"
readingTime: 1
standalone: true
teaser: "Rytier v hre má plášť, meč a viate vlasy. Pre kolízie je to však obyčajný obdĺžnik. A je to tak dobre."
voice: universal
parent: null
diagram: null
core: false
recallQ: "Prečo mapa metra nekreslí ulice a ako by vyzerala ako graf?"
recallA: "Na prestupovanie stačia stanice a spojenia, ulice by len rušili. Stanice sú uzly, spojenia medzi nimi hrany."
lens: hry
visuality: visual-first
depth: intro
formalism: none
lengthBand: standard
genre: explainer
status: accepted
concept: abstrakce-a-model
state: edited
highlights:
  - "Abstrakcia: čo je podstatné, závisí od účelu"
  - "Graf ako model: uzly a hrany (metro, kamaráti v triede, nadväznosť kapitol)"
  - "Žiadny model nie je úplný, vždy je to voľba"
carriers: prose|image
---

Rytier v hre má plášť, meč a viate vlasy. Pre kolízie je to však obyčajný obdĺžnik. A je to tak dobre.

Hra potrebuje mnohokrát za sekundu zistiť, či sa niečo niečoho dotýka. Kontrolovať každý pixel plášťa by bolo pomalé. Preto si okolo postavy myslí neviditeľný **hitbox**, jednoduchý obdĺžnik. Kolízia je potom len otázka: *prekrývajú sa dva obdĺžniky?*

![Rytier a jeho hitbox, mapa dungeonu ako graf](images/svet-hry-hitbox.sk.svg)

To je **abstrakcia**: vynecháš, čo pre daný **účel** nepotrebuješ. Pre kolízie je dôležitý tvar a poloha, nie farba plášťa. Pre vykreslenie je to naopak, tam sa plášť kreslí do posledného pixelu. Rovnaká postava, dva účely, dva rôzne modely.

Model môže byť aj **graf**. Mapa dungeonu je sieť miestností (**uzly**) a dverí medzi nimi (**hrany**). Hra podľa nej vie, kam sa z miestnosti dostaneš, a nepotrebuje na to poznať koberce ani fakle na stenách.

Žiadny model nie je úplný, vždy je to **voľba**. Hitbox príliš veľký? Hráč zomrie, aj keď sa ho ostne „nedotkli“. Príliš malý? Prejde nepriateľom. Vývojári ladia hitboxy dlho, pretože práve tu hráč cíti, či je hra férová.

**Vyskúšaj to!** Vyber si hru, ktorú hráš. Aký veľký je asi hitbox tvojej postavy? Väčší, alebo menší ako obrázok? Podľa čoho to pri hraní spoznáš?

**Ďalej vo svete hier:** → [Loptička, ktorá preletela pálkou](#svet-hry-over-a-oprav-sk)
