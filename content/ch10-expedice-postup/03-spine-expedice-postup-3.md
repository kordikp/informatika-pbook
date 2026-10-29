---
id: expedice-postup-3
type: spine
title: "Rozbor: dva třídicí algoritmy ve VisuAlgo"
readingTime: 1
standalone: false
teaser: "VisuAlgo je web z National University of Singapore, který krok za krokem animuje algoritmy."
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
concept: expedice-postup-3
conceptTitle: "Rozbor: dva třídicí algoritmy ve VisuAlgo"
state: edited
carriers: prose|table
---

**🔍 Rozbor** · krok 3 z 5 · [Dvanáct prosincových hádanek](#expedice-postup)

**VisuAlgo** je web z National University of Singapore, který krok za krokem animuje algoritmy. Je zdarma a bez účtu, anglicky.

1. Otevři visualgo.net a vyber **Sorting**.
2. Zadej vlastních **8 čísel**, třeba 5, 2, 8, 1, 9, 3, 7, 4.
3. Pusť **Bubble Sort** (bublinkové třídění). Sleduj, jak se velká čísla „probublávají“ doprava. Zapiš si, kolik porovnání algoritmus udělal.
4. Stejná čísla pusť přes **Merge Sort** (třídění sléváním). Ten pole rozpůlí, každou půlku seřadí a pak je slije dohromady. Zase si zapiš porovnání.
5. Zopakuj s **16 čísly**.

Vyplň tabulku:

| Počet čísel | Bubble | Merge |
|---|---|---|
| 8 | ? | ? |
| 16 | ? | ? |

**Rozbor:** Kolikrát se zvětšil počet porovnání u každého algoritmu, když se čísel zdvojnásobilo? Bublinkové třídění porovnává zhruba každé číslo s každým, takže při dvakrát více číslech dělá asi **čtyřikrát** víc práce. Slévání dělá při dvojnásobku jen o něco víc než **dvakrát** víc práce. Odhadni, kolik porovnání by každý algoritmus potřeboval pro 1000 čísel.

**Kritérium úspěchu:** vyplněná tabulka a jedna věta, proč slévání roste pomaleji. Nápověda: slévání je dekompozice. Půlí stejně jako hledání půlením.

**Další krok:** [Parta: Advent of Code s celým kroužkem](#expedice-postup-4)
