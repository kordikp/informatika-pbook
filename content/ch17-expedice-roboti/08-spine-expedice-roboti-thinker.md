---
id: expedice-roboti-thinker
type: spine
title: "Plynulá jízda místo cukání"
readingTime: 1
standalone: false
teaser: "Tvoje vozítko se rozhoduje jen mezi 0 a 1, a proto cuká zleva doprava."
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
concept: expedice-roboti-thinker
conceptTitle: "Plynulá jízda místo cukání"
state: edited
carriers: prose|code
---

**🔬 Odbočka** · [Vozítko, které nespadne ze stolu](#expedice-roboti)

Tvoje vozítko se rozhoduje jen mezi 0 a 1, a proto cuká zleva doprava. Soutěžní roboty čtou senzor jako číslo, třeba 0 (bílá) až 1023 (černá), blokem *čti analogovou hodnotu z pinu*.

Spočítej **chybu**: `chyba = levý − pravý`. Když je čára přesně uprostřed, chyba je 0. Čím víc čára uhne doleva, tím je chyba větší. Pak nastav motory:

```
ML = základ − k × chyba
MP = základ + k × chyba
```

`základ` je rychlost na rovince a `k` říká, jak prudce vozítko zatáčí. Tomu se říká **proporcionální řízení** (P-regulátor).

**Pokus:** začni s malým `k`. Vozítko jede klidně, ale v zatáčce vyjede. Zvětšuj `k`. V jednu chvíli začne na rovince kličkovat jako had. Najdi hodnotu mezi tím a zapiš ji do deníku. Skutečné roboty přidávají ještě dvě složky a celému říkají PID.

**Zpátky na expedici:** [Vozítko, které nespadne ze stolu](#mission-expedice-roboti)
