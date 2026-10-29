---
id: vyzva-hry-over-a-oprav-en
translationOf: vyzva-hry-over-a-oprav
lang: en
type: challenge
title: "How many substeps does a fast ball need"
level: 3
minutes: 25
readingTime: 3
standalone: true
teaser: "You know why a fast ball flies through the paddle."
voice: universal
parent: svet-hry-over-a-oprav-en
diagram: null
core: false
status: accepted
concept: over-a-oprav
state: edited
lens: hry
visuality: text-first
depth: standard
formalism: none
lengthBand: deep
carriers: prose
---

You know why a fast ball flies through the paddle. Now you’ll calculate it exactly: at what speed the game fails, and how little work is enough so that it never fails again.

<!-- task -->

The ball is a square 8 px wide and flies horizontally. The paddle is 10 px wide. Once per frame, the game moves the ball by `v` pixels and then checks whether the ball overlaps the paddle. **Touching at the edge counts as a hit.**

1. What is the highest speed `v` (px per frame) at which the ball **never** flies through the paddle, wherever it starts?
2. The ball flies 40 px per frame. The game can split the movement into `k` equal substeps and check after each of them. What is the smallest `k` that is enough?
3. Write a test (input and expected output) that fails with one check per frame and passes with substeps. The paddle takes up x from 20 to 30, the left edge of the ball starts at x = 0 and the ball flies 40 px per frame.

**Success criterion:** the number in point 1 with a reason, the smallest `k`, and a test in which you list the ball’s positions after each check.

<!-- hint -->

The ball overlaps the paddle when its left edge x lies between 20 − 8 = 12 and 30. How long is this stretch?

<!-- hint -->

If the step is longer than that stretch, the ball can jump over it. If it is shorter or the same length, at least one position lands in it.

<!-- hint -->

For point 2: each substep may be at most as long as the result from point 1.

<!-- solution -->

1. They overlap when the left edge of the ball lies between 12 and 30 inclusive. That is a stretch **18 px** long (paddle width + ball width). A step of up to 18 px cannot jump over it, so the safe speed is **v ≤ 18 px per frame**.
2. 40 / 18 ≈ 2.2, so **k = 3**. A substep is 40 / 3 ≈ 13.3 px, which is less than 18. Two substeps of 20 px are not enough, because 20 > 18.
3. Without substeps: x = 0, then x = 40. Neither position lies in the stretch 12 to 30, **the ball flies through**. With substeps: x = 0; 13.3; 26.7; 40. Position 13.3 lies in the stretch, **the ball bounces**. Test: *start 0, speed 40, paddle 20 to 30 → I expect a bounce.*

But substeps cost performance. A bullet flying 2000 px per frame would need over a hundred of them. That is why projectiles use a **ray**: the game calculates whether the line segment between the old and the new position crosses the target’s rectangle.

<!-- more -->

A physics body in Godot (RigidBody2D) has a *Continuous CD* option, continuous collision detection, which does exactly this. Build a fast projectile, switch the option on and off and compare. Going further: work out at what fraction of a step the ball enters the band between x = 12 and x = 30. From that you can calculate exactly where the bounce happens, not just that it happened.
