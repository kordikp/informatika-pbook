---
id: expedice-hry-thinker-sk
translationOf: expedice-hry-thinker
lang: sk
type: spine
title: "Pevný krok fyziky"
readingTime: 1
standalone: false
teaser: "Obmedzené dt hru ochráni, ale fyzika stále počíta s rôznymi krokmi."
voice: universal
parent: null
diagram: null
core: false
lens: generic
visuality: text-first
depth: standard
formalism: none
lengthBand: standard
genre: explainer
status: accepted
concept: expedice-hry-thinker
conceptTitle: "Pevný krok fyziky"
objective: "Obmedzené dt hru ochráni, ale fyzika stále počíta s rôznymi krokmi."
state: edited
carriers: prose
---

**🔬 Odbočka** · [Víkend, keď vznikla hra](#expedice-hry-sk)

Obmedzené `dt` hru ochráni, ale fyzika stále počíta s rôznymi krokmi. S krokom 0,017 s dopadne skok o kúsok inak ako s krokom 0,007 s. Pre pretekársku hru, záznam a prehrávanie jazdy alebo hru dvoch hráčov cez sieť to nestačí.

Riešenie sa volá **pevný krok**. Uplynutý čas pripočítavaš do zásobníka. Kým je v zásobníku aspoň jeden krok, napríklad 0,02 s, prepočítaš fyziku presne o 0,02 s a toľko zo zásobníka odoberieš. Kreslenie beží zvlášť, tak rýchlo, ako monitor stíha.

**Úloha:** krok je 0,02 s a snímky trvajú postupne 0,010; 0,015; 0,030; 0,005 a 0,050 s. Koľkokrát sa po každom snímku prepočíta fyzika a koľko zostane v zásobníku? Čo sa stane, keď jeden snímok trvá celú sekundu? Prečo enginy počet krokov za snímok obmedzujú?

Celý postup nájdeš v kapitole [Game Loop](https://gameprogrammingpatterns.com/game-loop.html) (po anglicky, zadarmo). V Godote ho používa `_physics_process`.

**Späť na expedíciu:** [Víkend, keď vznikla hra](#mission-expedice-hry)
