---
id: svet-roboti-dekompozice-en
translationOf: svet-roboti-dekompozice
lang: en
type: spine
title: "A buggy that follows a line"
readingTime: 1
standalone: true
teaser: "A robot buggy drives along a black line on the floor, even round the bends. It looks like one clever trick. In fact it’s three small tasks."
voice: universal
parent: null
diagram: null
core: false
recallQ: "How would you break down the task “organise a class trip”, and why does the order of the parts matter?"
recallA: "Into smaller tasks: goal and budget, place, transport, programme, sign-ups. Some depend on others: you book transport only after you have chosen the place and know how many people are coming."
lens: roboti
visuality: visual-first
depth: intro
formalism: none
lengthBand: standard
genre: explainer
status: accepted
concept: dekompozice
state: edited
highlights:
  - "The task: starting point, goal, limits"
  - "Smaller tasks and how they depend on each other (what has to be done first)"
  - "A named smaller task is a subprogram (function) in code"
carriers: prose|image
---

A robot buggy drives along a black line on the floor, even round the bends. It looks like one clever trick. In fact it’s three small tasks.

First the **task**. **Starting point**: the buggy is standing on the line. **Goal**: drive along the line all the way to the end without leaving it. **Limits**: it has only two light sensors underneath and two motors, nothing more.

![A buggy with two sensors above a black line](images/svet-roboti-cara.en.svg)

Then you break the problem down:

1. **Read the sensors**: does the left one see black? And the right one?
2. **Decide**: both see white → go straight. The left one sees black → the line bends left, turn left. The right one sees black → turn right.
3. **Drive the motors**: turning left means slowing down the left wheel and letting the right one keep going.

And repeat the whole thing over and over, many times a second.

The parts **depend** on each other. You can’t decide until you know what the sensor reports over black and over white. So the very first task is **calibration**: measure the sensor over the line and next to it.

You name each part as a **subprogram**. In MakeCode it is a *function*: `turn left`, `turn right`, `go straight`. The main loop is then short and readable. And when the buggy turns too sharply, you fix just one function.

**Try it!** Break a robot vacuum down into smaller tasks. Which of them must work before the others?

**Next in the world of robots:** → [The world through a robot’s eyes](#svet-roboti-abstrakce-a-model-en)
