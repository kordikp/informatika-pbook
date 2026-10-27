---
id: svet-aplikace-over-a-oprav-en
translationOf: svet-aplikace-over-a-oprav
lang: en
type: spine
title: "A traffic light with a hidden bug"
readingTime: 2
standalone: true
teaser: "You design an app that controls a pedestrian traffic light. On paper it looks finished. Then you go through it with your finger and find out that it never returns to red."
voice: universal
parent: null
diagram: null
core: false
recallQ: "Why is it not enough to try a program on one example that works?"
recallA: "A bug often shows up only for some inputs, such as zero or an empty list. Tests should cover different cases, including edge cases."
lens: aplikace
visuality: balanced
depth: intro
formalism: none
lengthBand: standard
genre: worked-example
status: accepted
concept: over-a-oprav
state: edited
highlights:
  - "Test = input + expected output, prepared in advance"
  - "Edge cases (0, empty input, maximum)"
  - "Debugging: spot → cause → fix → test again; efficiency as another measure"
carriers: prose|table|image
---

You design an app that controls a pedestrian traffic light. On paper it looks finished. Then you go through it with your finger and find out that it never returns to red.

The traffic light has three states: *Red*, *Green* and *Flashing*. The transitions between them are triggered by two inputs: a pedestrian **presses the button**, or **time runs out**. You write the design into a table:

| State | Input | New state |
|---|---|---|
| Red | button press | Red, the countdown starts |
| Red | time runs out | Green |
| Green | button press | Green, nothing happens |
| Green | time runs out | Flashing |
| Flashing | time runs out | Green |

Before you start building, prepare **tests**: **an input and the expected output**, written down **in advance**. *A pedestrian presses the button → within a minute the light turns green and then red again.* Now a **dry run**: go through the table with your finger. Red → press → Green → Flashing → **Green?!** The traffic light goes round between green and flashing, and the cars wait forever. The test failed.

![The states of the traffic light: the wrong arrow and the fix](images/svet-aplikace-semafor.en.svg)

**Debugging** follows the trail. **Where:** the last row of the table. **Cause:** the arrow from flashing leads to the wrong state. **Fix:** *Flashing + time runs out → Red*. **Check again:** run all the tests once more, including the ones that passed before.

Then try the **edge cases**. A pedestrian presses the button ten times in a row: do ten countdowns start? They press it exactly at the moment of switching? Or never press it at all: does the light stay red? And finally **efficiency**: a traffic light that turns green only after three minutes works correctly, but in the meantime pedestrians cross on red.

**Try it!** Write three tests for the “Add to basket” button in an online shop: an input and the expected output. Make at least one of them an edge case. Hint: what if the item is no longer in stock?

**Next in the world of apps:** → [The same button, three reactions](#svet-aplikace-promenna-en)
