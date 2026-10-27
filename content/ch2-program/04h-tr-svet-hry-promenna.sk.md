---
id: svet-hry-promenna-sk
translationOf: svet-hry-promenna
lang: sk
type: spine
title: "Skóre, životy, level"
readingTime: 1
standalone: true
teaser: "Hra si pamätá, koľko máš bodov, aj keď na ne práve nemyslíš. Kde ich drží?"
voice: universal
parent: null
diagram: null
core: false
recallQ: "Skóre je 5. Program vykoná „nastav skóre na 3“ a potom „zmeň skóre o 2“. Koľko je skóre?"
recallA: "5. Nastavenie prepíše hodnotu na 3, zmena o 2 ju zvýši na 5. Premenná si pamätá len poslednú hodnotu."
lens: hry
visuality: balanced
depth: intro
formalism: none
lengthBand: standard
genre: explainer
status: accepted
concept: promenna
state: edited
highlights:
  - "Názov a aktuálna hodnota (práve jedna)"
  - "Nastav vs. zmeň o; priradenie prepíše starú hodnotu"
  - "Premenná ako stav programu (skóre, životy, režim)"
carriers: prose|image
---

Hra si pamätá, koľko máš bodov, aj keď na ne práve nemyslíš. Kde ich drží?

V **premenných**. Každá má **názov** a v jednej chvíli **práve jednu hodnotu**: *skóre = 12, životy = 2, level = 3*. Keď sa hodnota zmení, tá stará zmizne.

![Obrazovka hry: skóre, životy a level sú premenné](images/svet-hry-hud.sk.svg)

Pozor na dva rôzne bloky:

- **nastav** skóre **na** 0 prepíše hodnotu, nech tam bolo čokoľvek. Patrí na začiatok hry.
- **zmeň** skóre **o** 1 pripočíta k tomu, čo tam je. Patrí k chyteniu mince.

Častá chyba začínajúcich tvorcov: pri minci je *nastav skóre na 1*. Hráč zoberie desať mincí a skóre ukazuje stále 1. Každé nastavenie prepísalo to predchádzajúce.

Premenné držia aj **stav hry**. Premenná *režim* môže mať hodnotu *menu*, *hrá sa* alebo *koniec* a hra sa podľa nej správa inak: ten istý medzerník v menu hru spustí, v hre skočí a na konci začne znova. A keď hru uložíš? Uložíš hodnoty premenných. Načítanie ich zapíše späť.

**Vyskúšaj to!** Vymysli pre svoju hru tri premenné. Ku každej napíš, kedy sa nastaví a kedy zmení.

**Ďalej vo svete hier:** → [Sprite je mriežka čísel](#svet-hry-kodovani-sk)
