---
id: svet-hry-promenna
type: spine
title: "Skóre, životy, level"
readingTime: 1
standalone: true
teaser: "Hra si pamatuje, kolik máš bodů, i když na ně zrovna nemyslíš. Kde je drží?"
voice: universal
parent: null
diagram: null
core: false
recallQ: "Skóre je 5. Program provede „nastav skóre na 3“ a pak „změň skóre o 2“. Kolik je skóre?"
recallA: "5. Nastavení přepíše hodnotu na 3, změna o 2 ji zvýší na 5. Proměnná si pamatuje jen poslední hodnotu."
lang: cs
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
  - "Název a aktuální hodnota (právě jedna)"
  - "Nastav vs. změň o; přiřazení přepíše starou hodnotu"
  - "Proměnná jako stav programu (skóre, životy, režim)"
carriers: prose|image
---

Hra si pamatuje, kolik máš bodů, i když na ně zrovna nemyslíš. Kde je drží?

V **proměnných**. Každá má **název** a v jednu chvíli **právě jednu hodnotu**: *skóre = 12, životy = 2, level = 3*. Když se hodnota změní, ta stará zmizí.

![Obrazovka hry: skóre, životy a level jsou proměnné](images/svet-hry-hud.svg)

Pozor na dva různé bloky:

- **nastav** skóre **na** 0 přepíše hodnotu, ať tam bylo cokoli. Patří na začátek hry.
- **změň** skóre **o** 1 přičte k tomu, co tam je. Patří k chycení mince.

Častá chyba začínajících tvůrců: u mince je *nastav skóre na 1*. Hráč sebere deset mincí a skóre ukazuje pořád 1. Každé nastavení přepsalo to předchozí.

Proměnné drží i **stav hry**. Proměnná *režim* může mít hodnotu *menu*, *hraje se* nebo *konec* a hra se podle ní chová jinak: stejný mezerník v menu hru spustí, ve hře skočí a na konci začne znovu. A když hru uložíš? Uložíš hodnoty proměnných. Načtení je zapíše zpátky.

**Zkus to!** Vymysli pro svou hru tři proměnné. Ke každé napiš, kdy se nastaví a kdy změní.

**Dál ve světě her:** → [Sprite je mřížka čísel](#svet-hry-kodovani)
