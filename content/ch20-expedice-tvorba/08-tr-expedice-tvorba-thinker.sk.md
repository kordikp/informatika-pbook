---
id: expedice-tvorba-thinker-sk
translationOf: expedice-tvorba-thinker
lang: sk
type: spine
title: "Pohyb z kódu"
readingTime: 1
standalone: false
teaser: "Statické pozadie rozpohybuj tak, aby sa znelka dala púšťať dookola bez šklbnutia."
voice: universal
parent: null
diagram: null
core: false
lens: generic
visuality: text-first
depth: standard
formalism: none
lengthBand: tldr
genre: explainer
status: accepted
concept: expedice-tvorba-thinker
conceptTitle: "Pohyb z kódu"
objective: "Statické pozadie rozpohybuj tak, aby sa znelka dala púšťať dookola bez šklbnutia."
state: edited
carriers: prose
---

**🔬 Odbočka** · [Znelka pre filmový večer](#expedice-tvorba-sk)

Statické pozadie rozpohybuj tak, aby sa znelka dala púšťať dookola bez šklbnutia. Pri 30 snímkach za sekundu má 20 sekúnd **600 snímok**.

V `setup()` zmaž `noLoop()` a pridaj `frameRate(30)`. V `draw()` si vypočítaj `let t = (frameCount % 600) / 600;`, číslo od 0 do 1, ktoré sa každých 20 sekúnd vráti na začiatok. Kruhy posúvaj o `200 * sin(TWO_PI * t)`. Keďže sínus má po celej otočke (TWO_PI) rovnakú hodnotu ako na začiatku, slučka **dokonale nadväzuje**.

**Úloha:** 1) Prečo by `sin(t)` namiesto `sin(TWO_PI * t)` na konci šklblo? 2) Nech sa jeden kruh za 20 sekúnd otočí okolo stredu presne trikrát. 3) Nech každý kruh pláva s inou fázou: k `TWO_PI * t` pripočítaj náhodné číslo zo `setup()`. Kritérium: snímka 600 vyzerá rovnako ako snímka 0.

**Späť na expedíciu:** [Znelka pre filmový večer](#mission-expedice-tvorba)
