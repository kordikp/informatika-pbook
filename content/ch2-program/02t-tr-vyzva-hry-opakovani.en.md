---
id: vyzva-hry-opakovani-en
translationOf: vyzva-hry-opakovani
lang: en
type: challenge
title: "A game that speeds up on a fast monitor"
level: 3
minutes: 25
readingTime: 3
standalone: true
teaser: "Your falling-apples game runs beautifully at home."
voice: universal
parent: svet-hry-opakovani-en
diagram: null
core: false
status: accepted
concept: opakovani
state: edited
lens: hry
visuality: text-first
depth: standard
formalism: none
lengthBand: deep
carriers: prose
---

Your falling-apples game runs beautifully at home. Ema plays it on a 144 Hz gaming monitor and the apples fall like hailstones. The code is the same. What has changed?

<!-- task -->

In every frame, the game loop moves the apple 5 pixels down: `y = y + 5`.

1. How fast does the apple fall in pixels per second at 60 frames per second (FPS), and how fast at 144?
2. Rewrite the movement so that the apple falls at **300 px/s on every computer**. You may use the variable `dt`: the time in seconds that has passed since the last frame. At 60 FPS it is about 0.0167 s.
3. The computer freezes for a moment and one frame takes 0.5 s. How many pixels does the apple move in that frame with your new code? Below the apple is a basket 20 px tall. What happens?
4. Suggest one rule that protects the game from point 3.

**Success criterion:** correct numbers in points 1 and 3, a formula in point 2 that gives the same speed per second at both 60 and 144 FPS, and a protection for which you can say the most pixels the apple can travel in one step.

<!-- hint -->

Speed per second = movement per frame × frames per second.

<!-- hint -->

You want 300 px per second and a frame lasts `dt` seconds. How many pixels belong to one frame?

<!-- hint -->

In point 4 you don’t need to speed anything up. It is enough not to let `dt` get too big, or to split a big step into smaller ones.

<!-- solution -->

1. 5 × 60 = **300 px/s**, 5 × 144 = **720 px/s**. On the fast monitor the game is 2.4× faster.
2. `y = y + 300 * dt`. At 60 FPS the movement is 300 × 0.0167 ≈ 5 px per frame, at 144 FPS about 2.1 px. Per second it is 300 px in both cases.
3. 300 × 0.5 = **150 px** in one go. The apple jumps over the 20 px basket and no frame ever sees it inside the basket. It is the same bug as the ball that flew through the paddle.
4. For example, limit `dt`: `dt = min(dt, 0.05)`. The apple then travels at most 300 × 0.05 = 15 px in one step and does not jump over the basket. When the game freezes it slows down for a moment, but it does not break. The professional solution is a **fixed physics step**: the time that has passed is added to a store, and the physics is recalculated in steps of 1/60 s as many times as fit into the store. Drawing runs separately.

<!-- more -->

Read the [Game Loop](https://gameprogrammingpatterns.com/game-loop.html) chapter of the book Game Programming Patterns (in English, free online). In Godot you will find both: `_process(delta)` for drawing and `_physics_process(delta)` with a fixed step for physics. In Scratch, measure `dt` with the timer and build an apple that falls at the same speed even when you add a hundred clones and the game slows down.
