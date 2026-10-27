---
id: svet-hry-dekompozice-en
translationOf: svet-hry-dekompozice
lang: en
type: spine
title: "A game broken into pieces"
readingTime: 1
standalone: true
teaser: "You want to make a game where a basket catches falling apples. The empty screen says nothing. Where do you even start?"
voice: universal
parent: null
diagram: null
core: false
recallQ: "How would you break down the task “organise a class trip”, and why does the order of the parts matter?"
recallA: "Into smaller tasks: goal and budget, place, transport, programme, sign-ups. Some depend on others: you book transport only after you have chosen the place and know how many people are coming."
lens: hry
visuality: visual-first
depth: intro
formalism: none
lengthBand: standard
genre: worked-example
status: accepted
concept: dekompozice
state: edited
highlights:
  - "The task: starting point, goal, limits"
  - "Smaller tasks and how they depend on each other (what has to be done first)"
  - "A named smaller task is a subprogram (function) in code"
carriers: prose|image
---

You want to make a game where a basket catches falling apples. The empty screen says nothing. Where do you even start?

First the **task**: what you have, what you want and what you mustn’t do. You have Scratch and one afternoon (the **starting point**). You want a game where a basket catches apples, each catch is worth a point and it ends after three misses (the **goal**). And the **limits**: one screen, controlled with the arrow keys.

Then you **break the game into parts** that you can manage one at a time: moving the basket, the falling apple, catching, score and lives, game over.

![The Catch the Apples game broken into parts](images/svet-hry-rozklad.en.svg)

The **order** matters. You can’t test catching until the basket moves and the apple falls. The score has nothing to count until catching works. That’s why you build from the bottom up: first movement, then falling, then catching, and finally score and game over.

You can **name** each part and wrap it in a block of its own. In Scratch: *My Blocks → Make a Block → “move basket”*. A named piece of code is a **subprogram**. The main program then reads almost like a book’s table of contents: *move basket, drop apple, check catch*.

**Try it!** Break the game Snake into parts. What does it have to be able to do, and which of those things must work before the others?

**Next in the world of games:** → [Hitbox: the knight is a rectangle](#svet-hry-abstrakce-a-model-en)
