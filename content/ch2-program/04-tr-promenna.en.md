---
id: promenna-en
translationOf: promenna
lang: en
type: spine
title: "Variable: a program's memory"
readingTime: 2
standalone: true
teaser: "The chat icon shows 3 unread messages. A fourth arrives and the number changes. Where does your phone keep that number?"
voice: universal
parent: null
diagram: promenne-krabicky-en
core: true
recallQ: "The score is 5. The program runs “set score to 3” and then “change score by 2”. What is the score?"
recallA: "5. Setting overwrites the value with 3, changing by 2 raises it to 5. A variable remembers only its latest value."
lens: generic
visuality: balanced
depth: intro
formalism: none
lengthBand: standard
genre: worked-example
status: accepted
concept: promenna
conceptTitle: "Variable: a program's memory"
objective: "The chat icon shows 3 unread messages. A fourth arrives and the number changes. Where does your phone keep that number?"
state: core
highlights:
  - "A name and a current value (exactly one)"
  - "Set vs. change by; assignment overwrites the old value"
  - "A variable as the state of a program (score, lives, mode)"
carriers: prose|diagram
---

The chat icon shows 3 unread messages. A fourth arrives and the number changes. Where does your phone keep that number?

A **variable** is a named box in a program's memory. At any moment it holds **exactly one value**: a score, lives, a name. The program can read it and change it.

Watch out for two different commands. **Set to** overwrites the value. **Change by** adds to the value or takes away from it.

Play through a bit of a game. At the start the **score** is 0 and **lives** are 3. You pick up a coin: *change score by 1*, the score is 1. Another coin: 2. A hit from an enemy: *change lives by −1*, lives are 2. A bonus chest: *set score to 10*. Now the score is 10 and the 2 is gone. A coin: 11. Another hit: lives are 1.

The box holds **only the latest value**. When you use **set to**, the old value disappears. That is why programmers hunting for bugs write a **trace table**: after every step they note what is in the boxes.

The values of all the variables at one moment are called the **state of the program**. A score of 11 and one life: that is the state of your game right now.

In programs you will see **score = score + 1**. It is not an equation from maths. It means: take what is in the box, add 1 and put the result back in the box.

**Try it!** Work out which variables a simple “guess the number” game would need. What does the program have to remember? (At least the secret number, the player's last guess and the number of tries.) Which one changes most often during the game, and which one never changes?

> **Watch out, a common mistake:** “x = x + 1 is nonsense, because it isn't true as an equation.” In a program it isn't an equation but a command: take the value from box x, add 1 and put the result back in the box. The box remembers only the latest value, not all the earlier ones.

**Next:** A variable holds one value. A table holds thousands of them, arranged in rows and columns. → [Table: data in order](#c/tabulka-a-evidence)
