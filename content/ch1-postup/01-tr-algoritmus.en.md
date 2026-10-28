---
id: algoritmus-en
translationOf: algoritmus
lang: en
type: spine
title: "Algorithm: exact instructions"
readingTime: 2
standalone: true
teaser: "Your sat nav is taking you to your gran's. At a diversion it works out a new exact route in a second. Why does it never ask “what do you mean?”"
voice: universal
parent: null
diagram: null
core: true
recallQ: "Why are the instructions “butter the bread” not enough for a robot, and what must every step of an algorithm meet?"
recallA: "A robot fills in nothing by itself. Every step must be unambiguous and doable for whoever carries it out, the process must end after a finite number of steps and work for every allowed input."
lens: generic
visuality: balanced
depth: intro
formalism: none
lengthBand: standard
genre: story
status: accepted
concept: algoritmus
conceptTitle: "Algorithm: exact instructions"
objective: "Your sat nav is taking you to your gran's. At a diversion it works out a new exact route in a second. Why does it never ask “what do you mean?”"
mustCover:
  - "Steps in an exact order; the one carrying them out does not know what the author meant (each step is elementary)"
  - "Unambiguous, finite, general and correct as the test of whether a process is an algorithm"
  - "The same problem can be solved by different algorithms"
state: core
highlights:
  - "Steps in an exact order; the one carrying them out does not know what the author meant (each step is elementary)"
  - "Unambiguous, finite, general and correct as the test of whether a process is an algorithm"
  - "The same problem can be solved by different algorithms"
carriers: prose|image
---

Your sat nav is taking you to your gran's. At a diversion it works out a new exact route in a second. Why does it never ask “what do you mean?”

An **algorithm** is a set of instructions so exact that whoever carries it out never has to guess. A person fills in an unclear instruction. A robot doesn't: it does **exactly what the instructions say**, and nothing more.

Try it with a slice of bread and butter. The robot can't carry out the instruction “butter the bread”: which bread, with what, and how much butter? Only this works: *take the slice off the plate, pick up the knife by the handle, scoop a teaspoon of butter with the knife, spread the butter over the whole top of the slice, put the knife down.* Each step can be understood in only one way and the robot can do it.

![Algorithm: exact instructions](images/comic-doslovny-robot.en.svg)

A good algorithm meets four things:

1. **Unambiguous:** each step can be understood in only one way.
2. **Doable:** whoever carries it out can actually do every step.
3. **Finite:** it ends after a finite number of steps.
4. **Correct and general:** it gives the right result for every allowed input, for example for any bread, not just one loaf.

The same problem can be solved with different algorithms. One person spreads from the edge, another from the middle. Both can be correct.

**Try it!** Talk a friend through buttering a slice of bread, and they must do EXACTLY what you say, without filling in anything. (“Pick up the knife.” Which end?) You'll see how many steps you're missing. Then fix the instructions until they work first time. You have just written an algorithm and debugged it.

> **Watch out, a common mistake:** “An algorithm is something complicated that only belongs in a computer.” An algorithm is any set of instructions that is exact enough, such as a recipe. A computer just needs it to be completely exact.

**Next:** A program is an algorithm written in a language a computer understands. And a computer is the most literal robot of all. → [Program: input → steps → output](#c/program)
