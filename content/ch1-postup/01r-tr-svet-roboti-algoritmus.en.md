---
id: svet-roboti-algoritmus-en
translationOf: svet-roboti-algoritmus
lang: en
type: spine
title: "The robot doesn’t know what you mean"
readingTime: 1
standalone: true
teaser: "You tell the robot “go to the charger”. It doesn’t move. It doesn’t know where it is, which way to go, or what “go to” means."
voice: universal
parent: null
diagram: null
core: false
recallQ: "Why are the instructions “butter the bread” not enough for a robot, and what must every step of an algorithm meet?"
recallA: "A robot fills in nothing by itself. Every step must be unambiguous and doable for whoever carries it out, the process must end after a finite number of steps and work for every allowed input."
lens: roboti
visuality: visual-first
depth: intro
formalism: none
lengthBand: standard
genre: worked-example
status: accepted
concept: algoritmus
state: edited
highlights:
  - "Steps in an exact order; the one carrying them out does not know what the author meant (each step is elementary)"
  - "Unambiguous, finite, general and correct as the test of whether a process is an algorithm"
  - "The same problem can be solved by different algorithms"
carriers: prose|image
---

You tell the robot “go to the charger”. It doesn’t move. It doesn’t know where it is, which way to go, or what “go to” means.

A robot can do only a few **elementary steps**: *move forward 1 square*, *turn left 90°*, *stop*. You have to spell out everything else for it. And it carries it out **literally**; it fills in nothing.

![A robot on a grid and two paths to the charger](images/svet-roboti-mrizka.en.svg)

A process for a robot is an **algorithm** when it passes four tests:

- **Unambiguous**: *turn* is not enough. Which way? How far? *Turn right 90°* is.
- **Finite**: *drive until you bump into something* only ends if a wall really does come. On open ground the robot would drive forever.
- **General**: a process for a square works for any length of side, not just one: *repeat 4 times: move d squares, turn left 90°*.
- **Correct**: the robot really ends up on the charger, not one square next to it.

More than one path leads to the charger, and so do several **different algorithms**. One goes up first and then right, the other the other way round. Both are correct. When one path is blocked, you see why it pays to know both.

**Try it!** Write a friend an algorithm for getting from the classroom door to your desk, using only the steps *forward N steps* and *turn left/right 90°*. Then let them walk exactly by it. Where did they get stuck?

**Next in the world of robots:** → [A buggy that follows a line](#svet-roboti-dekompozice-en)
