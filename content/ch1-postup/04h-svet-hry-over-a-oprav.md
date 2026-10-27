---
id: svet-hry-over-a-oprav
type: spine
title: "Míček, který proletěl pálkou"
readingTime: 1
standalone: true
teaser: "Tvůj Pong funguje. Pak míček zrychlíš a on najednou proletí pálkou, jako by tam nebyla. Chyba? Ano. A dá se chytit."
voice: universal
parent: null
diagram: null
core: false
recallQ: "Proč nestačí vyzkoušet program na jednom příkladu, který funguje?"
recallA: "Chyba se často projeví jen u některých vstupů, třeba u nuly nebo prázdného seznamu. Testy mají pokrýt různé, i okrajové případy."
lang: cs
lens: hry
visuality: balanced
depth: intro
formalism: none
lengthBand: standard
genre: worked-example
status: accepted
concept: over-a-oprav
state: edited
highlights:
  - "Test = vstup + očekávaný výstup, připravený předem"
  - "Okrajové případy (0, prázdný vstup, maximum)"
  - "Ladění: místo → příčina → oprava → nové ověření; efektivita jako další měřítko"
carriers: prose|image
---

Tvůj Pong funguje. Pak míček zrychlíš a on najednou proletí pálkou, jako by tam nebyla. Chyba? Ano. A dá se chytit.

Hra kontroluje kolizi jednou za snímek. Pomalý míček se posune o 3 pixely, takže aspoň jeden snímek ho zachytí v pálce. Rychlý se posune o 40 pixelů a pálku širokou 10 **přeskočí mezi dvěma snímky**. Žádný snímek ho v pálce neviděl, a tak se nic neodrazí.

![Pomalý míček se odrazí, rychlý pálku přeskočí](images/svet-hry-tunel.svg)

Vyzkoušel jsi to jen s pomalým míčkem a bylo „hotovo“. Proto se testy píšou **předem**, jako **vstup a očekávaný výstup**: *rychlost 3 → odrazí se. Rychlost 40 → odrazí se.* Druhý test selže a chybu najdeš ty, ne hráči.

Nejvíc chyb bydlí v **okrajových případech**: rychlost **0** (zasekne se hra?), **maximální** rychlost (proletí?), míček přesně **v rohu**, poslední život, **prázdný** žebříček. Takové vstupy zkoušej schválně.

Pak **ladění**: *místo* (kontrola kolize), *příčina* (posun za snímek je větší než pálka), *oprava* (omez nejvyšší rychlost, nebo kontroluj i cestu mezi snímky), *nové ověření* (pusť znovu všechny testy, i ty staré). A **efektivita**: kontrolovat každý pixel cesty by hru zpomalilo, omezit rychlost je levnější.

**Zkus to!** Za sebranou minci přibude bod. Navrhni tři testy (vstup a očekávaný výstup), z nichž aspoň jeden je záludný. Nápověda: co když hráč sebere dvě mince naráz?

**Dál ve světě her:** → [Herní smyčka: cyklus, který nespí](#svet-hry-opakovani)
