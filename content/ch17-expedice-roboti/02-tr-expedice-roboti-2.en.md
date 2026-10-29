---
id: expedice-roboti-2-en
translationOf: expedice-roboti-2
lang: en
type: spine
title: "The sharp bend and memory"
readingTime: 2
standalone: false
teaser: "The line has disappeared from both sensors."
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
concept: expedice-roboti-2
conceptTitle: "The sharp bend and memory"
objective: "The line has disappeared from both sensors."
state: edited
carriers: prose
---

**🧩 Challenge** · step 2 of 5 · [The rover that doesn’t fall off the table](#expedice-roboti-en)

The line has disappeared from both sensors. The sensors now know nothing, but the rover can know **where the line was last**.

**Task 1: memory.** Add a variable `last`. When only the left sensor sees the line, store *left*. When only the right one does, store *right*. When neither sees anything, the rover turns towards the side in its memory. If you want to work out the whole table, you’ll find it in the challenge “The rover with two eyes” under decomposition.

**Task 2: tests first.** Write five tests as *input → expected behaviour*, before you run them:
- a straight;
- a gentle bend to the left;
- a sharp bend to the left;
- a sharp bend to the right;
- a crossroads (both sensors see the line, then just one again).

For each one, write down which arrow you expect, step by step. Then click through the pins in the simulator exactly as the test says.

**Task 3: how fast can you go?** The micro:bit reads the sensors about 50× a second. The line is 15 mm wide and the rover crosses it at a right angle. What is the highest speed it can go so that at least one measurement is sure to catch the line? And what happens if you add a *pause 100 ms* block to the loop?

**Success:** all five tests match, and you have the speed calculation, units included. It’s the same trap as a ball that flies straight through a bat: whatever happens between two measurements, the robot doesn’t see.

:::reveal 🔑 Solution
Between two measurements it may travel at most the width of the line, so 15 mm × 50 = 750 mm per second, about 75 cm/s. With a 100 ms pause it measures at most 10× a second, so only 15 cm/s.
:::

**Next step:** [How a robot vacuum thinks](#expedice-roboti-3-en)
