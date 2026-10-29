---
id: expedice-tvorba-thinker
type: spine
title: "Pohyb z kódu"
readingTime: 1
standalone: false
teaser: "Statické pozadí rozpohybuj tak, aby se znělka dala pouštět dokola bez škubnutí."
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
concept: expedice-tvorba-thinker
conceptTitle: "Pohyb z kódu"
state: edited
carriers: prose
---

**🔬 Odbočka** · [Znělka pro filmový večer](#expedice-tvorba)

Statické pozadí rozpohybuj tak, aby se znělka dala pouštět dokola bez škubnutí. Při 30 snímcích za vteřinu má 20 vteřin **600 snímků**.

V `setup()` smaž `noLoop()` a přidej `frameRate(30)`. V `draw()` si spočítej `let t = (frameCount % 600) / 600;`, číslo od 0 do 1, které se každých 20 vteřin vrátí na začátek. Kruhy posouvej o `200 * sin(TWO_PI * t)`. Protože sinus má po celé otočce (TWO_PI) stejnou hodnotu jako na začátku, smyčka je **dokonale navazující**.

**Úkol:** 1) Proč by `sin(t)` místo `sin(TWO_PI * t)` na konci škublo? 2) Ať se jeden kruh za 20 vteřin otočí kolem středu přesně třikrát. 3) Ať každý kruh pluje jinou fází: k `TWO_PI * t` přičti náhodné číslo z `setup()`. Kritérium: snímek 600 vypadá stejně jako snímek 0.

**Zpátky na expedici:** [Znělka pro filmový večer](#mission-expedice-tvorba)
