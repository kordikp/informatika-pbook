---
id: svet-hry-over-a-oprav-sk
translationOf: svet-hry-over-a-oprav
lang: sk
type: spine
title: "Loptička, ktorá preletela pálkou"
readingTime: 1
standalone: true
teaser: "Tvoj Pong funguje. Potom loptičku zrýchliš a ona zrazu preletí pálkou, akoby tam nebola. Chyba? Áno. A dá sa chytiť."
voice: universal
parent: null
diagram: null
core: false
recallQ: "Prečo nestačí vyskúšať program na jednom príklade, ktorý funguje?"
recallA: "Chyba sa často prejaví len pri niektorých vstupoch, napríklad pri nule alebo prázdnom zozname. Testy majú pokryť rôzne, aj okrajové prípady."
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
  - "Test = vstup + očakávaný výstup, pripravený vopred"
  - "Okrajové prípady (0, prázdny vstup, maximum)"
  - "Ladenie: miesto → príčina → oprava → nové overenie; efektivita ako ďalšie meradlo"
carriers: prose|image
---

Tvoj Pong funguje. Potom loptičku zrýchliš a ona zrazu preletí pálkou, akoby tam nebola. Chyba? Áno. A dá sa chytiť.

Hra kontroluje kolíziu raz za snímku. Pomalá loptička sa posunie o 3 pixely, takže aspoň jedna snímka ju zachytí v pálke. Rýchla sa posunie o 40 pixelov a pálku širokú 10 **preskočí medzi dvoma snímkami**. Žiadna snímka ju v pálke nevidela, a tak sa nič neodrazí.

![Pomalá loptička sa odrazí, rýchla pálku preskočí](images/svet-hry-tunel.sk.svg)

Vyskúšal si to len s pomalou loptičkou a bolo „hotovo“. Preto sa testy píšu **vopred**, ako **vstup a očakávaný výstup**: *rýchlosť 3 → odrazí sa. Rýchlosť 40 → odrazí sa.* Druhý test zlyhá a chybu nájdeš ty, nie hráči.

Najviac chýb býva v **okrajových prípadoch**: rýchlosť **0** (zasekne sa hra?), **maximálna** rýchlosť (preletí?), loptička presne **v rohu**, posledný život, **prázdny** rebríček. Takéto vstupy skúšaj schválne.

Potom **ladenie**: *miesto* (kontrola kolízie), *príčina* (posun za snímku je väčší ako pálka), *oprava* (obmedz najvyššiu rýchlosť, alebo kontroluj aj cestu medzi snímkami), *nové overenie* (pusti znova všetky testy, aj tie staré). A **efektivita**: kontrolovať každý pixel cesty by hru spomalilo, obmedziť rýchlosť je lacnejšie.

**Vyskúšaj to!** Za zobratú mincu pribudne bod. Navrhni tri testy (vstup a očakávaný výstup), z ktorých aspoň jeden je zákerný. Nápoveda: čo ak hráč zoberie dve mince naraz?

**Ďalej vo svete hier:** → [Herná slučka: cyklus, ktorý nespí](#svet-hry-opakovani-sk)
