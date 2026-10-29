---
id: expedice-postup-3-sk
translationOf: expedice-postup-3
lang: sk
type: spine
title: "Rozbor: dva triediace algoritmy vo VisuAlgo"
readingTime: 1
standalone: false
teaser: "VisuAlgo je web z National University of Singapore, ktorý krok za krokom animuje algoritmy."
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
concept: expedice-postup-3
conceptTitle: "Rozbor: dva triediace algoritmy vo VisuAlgo"
objective: "VisuAlgo je web z National University of Singapore, ktorý krok za krokom animuje algoritmy."
state: edited
carriers: prose|table
---

**🔍 Rozbor** · krok 3 z 5 · [Dvanásť decembrových hádaniek](#expedice-postup-sk)

**VisuAlgo** je web z National University of Singapore, ktorý krok za krokom animuje algoritmy. Je zadarmo a bez účtu, po anglicky.

1. Otvor visualgo.net a vyber **Sorting**.
2. Zadaj vlastných **8 čísel**, napríklad 5, 2, 8, 1, 9, 3, 7, 4.
3. Spusti **Bubble Sort** (bublinkové triedenie). Sleduj, ako veľké čísla „prebublávajú“ doprava. Zapíš si, koľko porovnaní algoritmus urobil.
4. Rovnaké čísla spusti cez **Merge Sort** (triedenie zlučovaním). Ten pole rozpolí, každú polovicu zoradí a potom ich zleje dokopy. Znova si zapíš porovnania.
5. Zopakuj so **16 číslami**.

Vyplň tabuľku:

| Počet čísel | Bubble | Merge |
|---|---|---|
| 8 | ? | ? |
| 16 | ? | ? |

**Rozbor:** Koľkokrát sa zväčšil počet porovnaní pri každom algoritme, keď sa čísel zdvojnásobilo? Bublinkové triedenie porovnáva zhruba každé číslo s každým, takže pri dvakrát viac číslach robí asi **štyrikrát** viac práce. Zlučovanie robí pri dvojnásobku len o niečo viac než **dvakrát** viac práce. Odhadni, koľko porovnaní by každý algoritmus potreboval pre 1000 čísel.

**Kritérium úspechu:** vyplnená tabuľka a jedna veta, prečo zlučovanie rastie pomalšie. Nápoveda: zlučovanie je dekompozícia. Polí rovnako ako hľadanie polením.

**Ďalší krok:** [Partia: Advent of Code s celým krúžkom](#expedice-postup-4-sk)
