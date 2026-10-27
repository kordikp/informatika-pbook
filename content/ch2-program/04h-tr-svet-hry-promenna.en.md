---
id: svet-hry-promenna-en
translationOf: svet-hry-promenna
lang: en
type: spine
title: "Score, lives, level"
readingTime: 1
standalone: true
teaser: "The game remembers how many points you have, even when you aren’t thinking about them. Where does it keep them?"
voice: universal
parent: null
diagram: null
core: false
recallQ: "The score is 5. The program runs “set score to 3” and then “change score by 2”. What is the score?"
recallA: "5. Setting overwrites the value with 3, changing by 2 raises it to 5. A variable remembers only its latest value."
lens: hry
visuality: balanced
depth: intro
formalism: none
lengthBand: standard
genre: explainer
status: accepted
concept: promenna
state: edited
highlights:
  - "A name and a current value (exactly one)"
  - "Set vs. change by; assignment overwrites the old value"
  - "A variable as the state of a program (score, lives, mode)"
carriers: prose|image
---

The game remembers how many points you have, even when you aren’t thinking about them. Where does it keep them?

In **variables**. Each one has a **name** and, at any one time, **exactly one value**: *score = 12, lives = 2, level = 3*. When the value changes, the old one disappears.

![The game screen: score, lives and level are variables](images/svet-hry-hud.en.svg)

Watch out for two different blocks:

- **set** score **to** 0 overwrites the value, whatever was there. It belongs at the start of the game.
- **change** score **by** 1 adds to what is already there. It belongs to catching a coin.

A common mistake of beginner makers: the coin has *set score to 1*. The player picks up ten coins and the score still shows 1. Each set overwrote the one before.

Variables also hold the **state of the game**. The variable *mode* can have the value *menu*, *playing* or *over*, and the game behaves differently depending on it: the same space bar starts the game in the menu, jumps during play and starts again at the end. And when you save the game? You save the values of the variables. Loading writes them back.

**Try it!** Think up three variables for your game. For each one, write when it is set and when it changes.

**Next in the world of games:** → [A sprite is a grid of numbers](#svet-hry-kodovani-en)
