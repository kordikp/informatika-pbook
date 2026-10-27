---
id: svet-hry-over-a-oprav-en
translationOf: svet-hry-over-a-oprav
lang: en
type: spine
title: "The ball that flew through the paddle"
readingTime: 1
standalone: true
teaser: "Your Pong works. Then you speed up the ball and suddenly it flies through the paddle as if it weren’t there. A bug? Yes. And it can be caught."
voice: universal
parent: null
diagram: null
core: false
recallQ: "Why is it not enough to try a program on one example that works?"
recallA: "A bug often shows up only for some inputs, such as zero or an empty list. Tests should cover different cases, including edge cases."
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
  - "Test = input + expected output, prepared in advance"
  - "Edge cases (0, empty input, maximum)"
  - "Debugging: spot → cause → fix → test again; efficiency as another measure"
carriers: prose|image
---

Your Pong works. Then you speed up the ball and suddenly it flies through the paddle as if it weren’t there. A bug? Yes. And it can be caught.

The game checks for a collision once per frame. A slow ball moves 3 pixels, so at least one frame catches it in the paddle. A fast one moves 40 pixels and **skips over** a paddle 10 pixels wide **between two frames**. No frame saw it in the paddle, so nothing bounces.

![The slow ball bounces back, the fast one skips the paddle](images/svet-hry-tunel.en.svg)

You only tried it with a slow ball and it was “done”. That’s why tests are written **in advance**, as **input and expected output**: *speed 3 → bounces back. Speed 40 → bounces back.* The second test fails, and you find the bug, not the players.

Most bugs live in **edge cases**: speed **0** (does the game get stuck?), **maximum** speed (does it fly through?), the ball exactly **in the corner**, the last life, an **empty** leaderboard. Try inputs like these on purpose.

Then **debugging**: *where* (the collision check), *cause* (the movement per frame is bigger than the paddle), *fix* (limit the top speed, or check the path between frames too), *test again* (run all the tests again, the old ones too). And **efficiency**: checking every pixel of the path would slow the game down; limiting the speed is cheaper.

**Try it!** Picking up a coin adds a point. Design three tests (input and expected output), at least one of them tricky. Hint: what if the player picks up two coins at once?

**Next in the world of games:** → [The game loop: a loop that never sleeps](#svet-hry-opakovani-en)
