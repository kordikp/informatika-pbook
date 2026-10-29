---
id: expedice-roboti-thinker-sk
translationOf: expedice-roboti-thinker
lang: sk
type: spine
title: "Plynulá jazda namiesto trhania"
readingTime: 1
standalone: false
teaser: "Tvoje vozidielko sa rozhoduje len medzi 0 a 1, a preto trhane zatáča zľava doprava."
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
concept: expedice-roboti-thinker
conceptTitle: "Plynulá jazda namiesto trhania"
objective: "Tvoje vozidielko sa rozhoduje len medzi 0 a 1, a preto trhane zatáča zľava doprava."
state: edited
carriers: prose|code
---

**🔬 Odbočka** · [Vozidielko, ktoré nespadne zo stola](#expedice-roboti-sk)

Tvoje vozidielko sa rozhoduje len medzi 0 a 1, a preto trhane zatáča zľava doprava. Súťažné roboty čítajú senzor ako číslo, napríklad 0 (biela) až 1023 (čierna), blokom *čítaj analógovú hodnotu z pinu*.

Spočítaj **chybu**: `chyba = ľavý − pravý`. Keď je čiara presne v strede, chyba je 0. Čím viac čiara uhne doľava, tým je chyba väčšia. Potom nastav motory:

```
ML = základ − k × chyba
MP = základ + k × chyba
```

`základ` je rýchlosť na rovinke a `k` hovorí, ako prudko vozidielko zatáča. Tomu sa hovorí **proporcionálne riadenie** (P-regulátor).

**Pokus:** začni s malým `k`. Vozidielko ide pokojne, ale v zákrute vyjde z čiary. Zväčšuj `k`. V istej chvíli začne na rovinke kľučkovať ako had. Nájdi hodnotu medzi tým a zapíš ju do denníka. Skutočné roboty pridávajú ešte dve zložky a celému hovoria PID.

**Späť na expedíciu:** [Vozidielko, ktoré nespadne zo stola](#mission-expedice-roboti)
