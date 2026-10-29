---
id: expedice-hry-1-en
translationOf: expedice-hry-1
lang: en
type: spine
title: "⭐ Randomness that plays fair"
readingTime: 1
standalone: false
teaser: "A computer has no dice."
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
concept: expedice-hry-1
conceptTitle: "⭐ Randomness that plays fair"
objective: "A computer has no dice."
state: edited
carriers: prose|formula
---

**🧩 Challenge** · step 1 of 5 · [The weekend a game was made](#expedice-hry-en)

A computer has no dice. It calculates “random” numbers with a formula from the previous number. The first number is called the **seed**. The same seed always gives the same sequence, and so the same level.

Your game uses the formula:

$$n_{next} = (5 \cdot n + 3) \bmod 16$$

“mod 16” means the remainder after dividing by sixteen. The gap between platforms is `40 + 5 × n` pixels and the character can jump at most 100 px.

1. Calculate the first five numbers for seed 7.
2. Keep going. After how many numbers does the sequence start repeating? Do all the numbers from 0 to 15 appear in it?
3. Which numbers make a gap that can’t be jumped? How many such gaps are there in one full round of the sequence?
4. Change the gap formula so that the gap is always from 40 to 100 px and every number gives a different gap.
5. Ema found an impassable gap. Why is a seed better than real randomness for finding the bug?

**Success criterion:** the whole sequence until it repeats, a list of bad numbers, a fixed formula for which you check the smallest and the largest gap, and one sentence for point 5.

**Check:** the first number is 6.

**Go even further:** Tetris doesn’t draw pieces one by one. It shuffles all seven shapes like a deck of cards and deals them, then shuffles again. Work out the longest you might have to wait for the same shape. With purely random drawing you could wait for it any length of time. Why is the deck fair?

**Next step:** [🛠️ Your first Godot game in 30 minutes](#expedice-hry-2-en)
