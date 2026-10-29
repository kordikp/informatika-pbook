---
id: expedice-hry-thinker
type: spine
title: "Pevný krok fyziky"
readingTime: 1
standalone: false
teaser: "Omezené dt hru ochrání, ale fyzika pořád počítá s různými kroky."
voice: universal
parent: null
diagram: null
core: false
lang: cs
lens: generic
visuality: text-first
depth: standard
formalism: none
lengthBand: standard
genre: explainer
status: accepted
concept: expedice-hry-thinker
conceptTitle: "Pevný krok fyziky"
state: edited
carriers: prose
---

**🔬 Odbočka** · [Víkend, kdy vznikla hra](#expedice-hry)

Omezené `dt` hru ochrání, ale fyzika pořád počítá s různými kroky. S krokem 0,017 s dopadne skok o kousek jinak než s krokem 0,007 s. Pro závodní hru, záznam a přehrávání jízdy nebo hru dvou hráčů přes síť to nestačí.

Řešení se jmenuje **pevný krok**. Uplynulý čas přičítáš do zásobníku. Dokud je v zásobníku aspoň jeden krok, třeba 0,02 s, přepočítáš fyziku přesně o 0,02 s a tolik ze zásobníku odebereš. Kreslení běží zvlášť, tak rychle, jak monitor stíhá.

**Úloha:** krok je 0,02 s a snímky trvají postupně 0,010; 0,015; 0,030; 0,005 a 0,050 s. Kolikrát se po každém snímku přepočítá fyzika a kolik zůstane v zásobníku? Co se stane, když jeden snímek trvá celou sekundu? Proč enginy počet kroků za snímek omezují?

Celý postup najdeš v kapitole [Game Loop](https://gameprogrammingpatterns.com/game-loop.html) (anglicky, zdarma). V Godotu ho používá `_physics_process`.

**Zpátky na expedici:** [Víkend, kdy vznikla hra](#mission-expedice-hry)
