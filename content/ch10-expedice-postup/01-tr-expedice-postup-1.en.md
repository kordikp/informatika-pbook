---
id: expedice-postup-1-en
translationOf: expedice-postup-1
lang: en
type: spine
title: "Evening one: the Towers of Hanoi"
readingTime: 1
standalone: false
teaser: "Rules: you move the tower from the left peg to the right one."
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
conceptTitle: "Evening one: the Towers of Hanoi"
objective: "Rules: you move the tower from the left peg to the right one."
state: edited
carriers: prose|formula
---

**🧩 Challenge** · step 1 of 5 · [Twelve December puzzles](#expedice-postup-en)

**Rules:** you move the tower from the left peg to the right one. You may take only one disc at a time and **never put a larger disc on a smaller one**. The middle peg is for parking.

Make a tower out of coins of different sizes, or out of paper circles.

1. What is the smallest number of moves you need for **1, 2 and 3** discs? Write down the moves, for example “1 → 3”.
2. How many for **4**? Don’t try blindly. Look at how the three discs moved and use that as a ready-made piece.
3. Find the rule for **n** discs and **explain** why it can’t be done faster.

**Success criterion:** the numbers for 1 to 4 discs, a formula and a reason in one or two sentences.

:::reveal 💡 Hint
To move the largest disc, all the smaller ones must be somewhere else, on the only free peg. How many moves does it cost to get them there? And how many to get them back onto the largest one?
:::

This is **recursion**: a problem is solved using the same problem, only smaller. It is decomposition taken all the way. A big problem breaks down into two smaller problems of the same kind and one simple step.

:::reveal 🔑 Solution
1, 3, 7, 15 moves. T(n) = 2 · T(n − 1) + 1, so $$T(n) = 2^n - 1.$$ It can’t be faster, because the largest disc has to move at least once, and before and after that the whole smaller tower has to stand somewhere else.
:::

**Next step:** [Weekend: the maze in Blockly Games](#expedice-postup-2-en)
