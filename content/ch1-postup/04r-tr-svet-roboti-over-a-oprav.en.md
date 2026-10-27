---
id: svet-roboti-over-a-oprav-en
translationOf: svet-roboti-over-a-oprav
lang: en
type: spine
title: "The robot stuck in a corner"
readingTime: 1
standalone: true
teaser: "The buggy is supposed to avoid walls. Along a straight wall it works brilliantly. Then it reaches a corner and spins there until its battery runs out."
voice: universal
parent: null
diagram: null
core: false
recallQ: "Why is it not enough to try a program on one example that works?"
recallA: "A bug often shows up only for some inputs, such as zero or an empty list. Tests should cover different cases, including edge cases."
lens: roboti
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
carriers: prose|table
---

The buggy is supposed to avoid walls. Along a straight wall it works brilliantly. Then it reaches a corner and spins there until its battery runs out.

The program sounds sensible: *when a wall is closer than 10 cm, turn right*. Along a straight wall that’s enough. In a corner, though, the robot turns right, sees another wall, turns right… and heads back into the corner. Nobody tried it in a corner.

A test for a robot is **input and expected output**, written **in advance**:

| Situation (input) | What the robot should do |
|---|---|
| a straight wall ahead | turn and drive on |
| a corner | get out of the corner |
| a narrow corridor | drive through without getting stuck |
| the sensor reports 0 cm | stop, don’t reverse forever |
| the sensor reports nothing | stop and report an error |

The bottom three rows are **edge cases**: a corner, zero, nothing. That’s where bugs live most often.

**Debugging** has four steps. *Where*: the turning rule. *Cause*: in a corner it always turns the same way by the same angle. *Fix*: after two turns in a row, reverse and turn by a different angle. *Test again*: run all the tests again, the straight wall too. And **efficiency**: a robot that gets out of a corner in 2 seconds is better than one that takes 20.

**Try it!** Think up three tests for a lamp that lights up when it’s dark. Make at least one of them tricky. What about dusk, or a hand placed over the sensor?

**Next in the world of robots:** → [Sensor → program → light](#svet-roboti-program-en)
