---
id: vylet-smycka-ctyri-svety-en
translationOf: vylet-smycka-ctyri-svety
lang: en
type: spine
title: "Trip: One loop, four worlds"
readingTime: 2
standalone: true
teaser: "One loop, four worlds. A game, a micro:bit, a robot and a feed all rest on the same idea. Four steps and then back to the core of the book."
voice: universal
parent: null
diagram: null
core: false
recallQ: "A robot has the program “repeat until in front of the wall: move 1, move 1”. When does it check whether it is in front of the wall?"
recallA: "At the start of every round, so once every two steps. Yes. That's why it can crash between two steps."
lens: generic
visuality: text-first
depth: standard
formalism: none
lengthBand: standard
genre: explainer
status: accepted
concept: vylet-smycka-ctyri-svety
conceptTitle: "One loop, four worlds"
objective: "One loop, four worlds. A game, a micro:bit, a robot and a feed all rest on the same idea. Four steps and then back to the core of the book."
state: edited
highlights:
  - "This is “repeat forever”, and the body of the loop has three steps."
  - "The same loop, only the input is a sensor."
  - "A loop has to end, just like every algorithm."
  - "The end of this loop is something you have to set yourself."
carriers: prose
---

One loop, four worlds. A game, a micro:bit, a robot and a feed all rest on the same idea. Four steps and then back to the core of the book.

### The game loop

Every game runs in a **game loop**. Dozens of times a second it does three things: it **reads the input** (keys, a controller), **moves the world** (characters, balls) and **draws the picture**. Go through the loop step by step and then let it run at full speed. You change the input with the arrow keys.

> **Back to the core:** This is “repeat forever”, and the body of the loop has three steps.

### The micro:bit “forever”

The micro:bit has a **forever** block. Whatever is inside it repeats for as long as the micro:bit is running. This program measures the temperature every second and shows it. Switch it on and change the temperature in the room.

> **Back to the core:** The same loop, only the input is a sensor.

### Repeat until…

Three programs for a robot in a corridor: *repeat until in front of the wall: move 1* drives up to the wall. *Repeat until in front of the wall: move 1, move 1* crashes in a corridor of odd length, because the condition is only checked at the start of each round, not between the two steps. And *repeat until in front of the wall: beep* gets stuck in a loop. The robot doesn't move, so the wall will never be in front of it.

> **Back to the core:** A loop has to end, just like every [algorithm](#c/algoritmus).

### A loop without an end

An infinite feed and autoplay are loops **designed so that they never end**. In a program, a loop has a stopping condition. Here there isn't one. You have to set the end yourself.

> **Back to the core:** The end of this loop is something you have to set yourself.

**Back to the book:** this trip belongs to the section [Repetition (loop)](#c/opakovani). Carry on with the section [Decisions (conditions)](#c/rozhodovani).
