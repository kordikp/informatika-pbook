---
id: expedice-postup-1-sk
translationOf: expedice-postup-1
lang: sk
type: spine
title: "Večer prvý: Hanojské veže"
readingTime: 1
standalone: false
teaser: "Pravidlá: vežu presťahuješ z ľavého kolíka na pravý."
voice: universal
parent: null
diagram: null
core: false
lens: generic
visuality: text-first
depth: standard
formalism: light
lengthBand: standard
genre: explainer
status: accepted
concept: expedice-postup-1
conceptTitle: "Večer prvý: Hanojské veže"
objective: "Pravidlá: vežu presťahuješ z ľavého kolíka na pravý."
state: edited
carriers: prose|formula
---

**🧩 Výzva** · krok 1 z 5 · [Dvanásť decembrových hádaniek](#expedice-postup-sk)

**Pravidlá:** vežu presťahuješ z ľavého kolíka na pravý. Smieš brať vždy len jeden kotúč a **nikdy nepoložíš väčší na menší**. Prostredný kolík slúži ako odkladisko.

Vyrob si vežu z mincí rôznych veľkostí alebo z papierových koliesok.

1. Koľko najmenej ťahov potrebuješ pre **1, 2 a 3** kotúče? Zapíš si ťahy, napríklad „1 → 3“.
2. Koľko pre **4**? Neskúšaj naslepo. Pozri sa, ako sa sťahovali tri kotúče, a použi to ako hotový kus.
3. Nájdi pravidlo pre **n** kotúčov a **zdôvodni**, prečo to rýchlejšie nejde.

**Kritérium úspechu:** čísla pre 1 až 4 kotúče, vzorec a zdôvodnenie v jednej alebo dvoch vetách.

:::reveal 💡 Nápoveda
Aby sa dalo pohnúť najväčším kotúčom, musia byť všetky menšie inde, a to na jedinom voľnom kolíku. Koľko ťahov stojí dostať ich tam? A koľko dostať ich späť na najväčší?
:::

Toto je **rekurzia**: úloha sa rieši pomocou rovnakej, len menšej úlohy. Je to dekompozícia dotiahnutá do konca. Veľký problém sa rozloží na dva menšie problémy rovnakého druhu a jeden jednoduchý krok.

:::reveal 🔑 Riešenie
1, 3, 7, 15 ťahov. Platí T(n) = 2 · T(n − 1) + 1, teda $$T(n) = 2^n - 1.$$ Rýchlejšie to nejde, pretože najväčší kotúč sa musí pohnúť aspoň raz a predtým aj potom musí celá menšia veža stáť inde.
:::

**Ďalší krok:** [Víkend: bludisko v Blockly Games](#expedice-postup-2-sk)
