---
id: expedice-postup-3-en
translationOf: expedice-postup-3
lang: en
type: spine
title: "Analysis: two sorting algorithms in VisuAlgo"
readingTime: 1
standalone: false
teaser: "VisuAlgo is a website from the National University of Singapore that animates algorithms step by step."
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
conceptTitle: "Analysis: two sorting algorithms in VisuAlgo"
objective: "VisuAlgo is a website from the National University of Singapore that animates algorithms step by step."
state: edited
carriers: prose|table
---

**🔍 Analysis** · step 3 of 5 · [Twelve December puzzles](#expedice-postup-en)

**VisuAlgo** is a website from the National University of Singapore that animates algorithms step by step. It is free, needs no account, and is in English.

1. Open visualgo.net and choose **Sorting**.
2. Enter your own **8 numbers**, for example 5, 2, 8, 1, 9, 3, 7, 4.
3. Run **Bubble Sort**. Watch how the big numbers “bubble up” to the right. Write down how many comparisons the algorithm made.
4. Run the same numbers through **Merge Sort**. It splits the list in half, sorts each half and then merges them together. Write down the comparisons again.
5. Repeat with **16 numbers**.

Fill in the table:

| Number of numbers | Bubble | Merge |
|---|---|---|
| 8 | ? | ? |
| 16 | ? | ? |

**Analysis:** By how many times did the number of comparisons grow for each algorithm when the numbers doubled? Bubble sort compares roughly every number with every other, so with twice as many numbers it does about **four times** as much work. Merge sort does only a bit more than **twice** as much work when the numbers double. Estimate how many comparisons each algorithm would need for 1000 numbers.

**Success criterion:** a filled-in table and one sentence on why merge sort grows more slowly. Hint: merge sort is decomposition. It halves, just like searching by halving.

**Next step:** [Crew: Advent of Code with the whole club](#expedice-postup-4-en)
