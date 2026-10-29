---
id: expedice-program-2
type: spine
title: "Výzva: teploměr na chatě"
readingTime: 1
standalone: false
teaser: "Na chatě visí teploměr a každou hodinu zapíše teplotu: teploty = [-3, -1, 2, 5, 4, 0, -2, -6] Hranaté závorky jsou seznam: řada hodnot v jedné krabičce."
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
concept: expedice-program-2
conceptTitle: "Výzva: teploměr na chatě"
state: edited
carriers: prose|code
---

**🧩 Výzva** · krok 2 z 5 · [Dvanáct hvězd](#expedice-program)

Na chatě visí teploměr a každou hodinu zapíše teplotu:
```
teploty = [-3, -1, 2, 5, 4, 0, -2, -6]
```
Hranaté závorky jsou **seznam**: řada hodnot v jedné krabičce. Cyklus `for t in teploty:` projde hodnoty jednu po druhé a každou na chvíli uloží do `t`.

**Část 1.** Kolik hodin bylo **pod nulou**? Nula pod nulou není. Napiš program, který to spočítá. Pomůže ti krabička `pocet = 0` a podmínka uvnitř cyklu.

**Část 2.** Jaké bylo **největší oteplení** mezi dvěma po sobě jdoucími hodinami? Program si musí pamatovat **předchozí** teplotu. Založ krabičku `predchozi` a nastav ji na první teplotu. V každém kole spočítej rozdíl `t - predchozi`, porovnej ho s dosavadním rekordem a na konci kola nastav `predchozi = t`.

**Kontrola:** v části 1 má vyjít **4**, v části 2 **3**.

Až to sedí, zkus program na vlastním seznamu. Co když teplota celý den jen klesá? Je pak největší oteplení záporné, nebo nula? Záleží na tom, na co nastavíš rekord na začátku. Rozhodni, co je správně, a uprav program.

Když se zasekneš, vlož kód do Python Tutoru a krokuj. Uvidíš přesně, kdy se která krabička změní.

**Další krok:** [Rozbor: historie skutečného projektu](#expedice-program-3)
