---
id: expedice-roboti-explorer
type: spine
title: "Arduino bez pájení ve Wokwi"
readingTime: 1
standalone: false
teaser: "micro:bit je pohodlný, ale spousta robotů na světě běží na deskách Arduino, ESP32 nebo Raspberry Pi Pico."
voice: universal
parent: null
diagram: null
core: false
lang: cs
lens: generic
visuality: text-first
depth: standard
formalism: none
lengthBand: tldr
genre: explainer
status: accepted
concept: expedice-roboti-explorer
conceptTitle: "Arduino bez pájení ve Wokwi"
state: edited
carriers: prose
---

**👀 Odbočka** · [Vozítko, které nespadne ze stolu](#expedice-roboti)

micro:bit je pohodlný, ale spousta robotů na světě běží na deskách Arduino, ESP32 nebo Raspberry Pi Pico. [Wokwi](https://wokwi.com) je simulátor elektroniky v prohlížeči: desku, LED, tlačítka i senzory pospojuješ myší a program spustíš bez jediné součástky. Programuje se v C++ (Arduino) nebo v MicroPythonu. Rozhraní je anglicky a pro ukládání projektů je potřeba účet, ten zakládej s rodičem.

**Úkol na první večer:**
1. Arduino Uno a LED na pinu 13: blikání. To je „Hello world“ elektroniky.
2. Přidej tlačítko a rozsviť LED jen při stisku.
3. Přidej senzor světla a postav lampičku s hysterezí z výzvy u rozhodování. Stejná logika, jiný jazyk.

Všimni si, že v Arduinu je místo bloku *pořád* funkce `loop()`. Smyčka robota je všude stejná: změř, rozhodni, proveď.

**Zpátky na expedici:** [Vozítko, které nespadne ze stolu](#mission-expedice-roboti)
