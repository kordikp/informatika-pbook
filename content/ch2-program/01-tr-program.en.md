---
id: program-en
translationOf: program
lang: en
type: spine
title: "Program: input → steps → output"
readingTime: 2
standalone: true
teaser: "You tap “Send” and the message flies off. Between the tap and the take-off, thousands of commands ran. Who wrote them, and in what order?"
voice: universal
parent: null
diagram: vstup-zpracovani-vystup-en
core: true
recallQ: "What does a computer do if you swap two commands in a program, and why?"
recallA: "It carries them out in the new order, even if that makes no sense, because it fills in nothing. So the result can change."
lens: generic
visuality: balanced
depth: intro
formalism: none
lengthBand: standard
genre: worked-example
status: accepted
concept: program
conceptTitle: "Program: input → steps → output"
objective: "You tap “Send” and the message flies off. Between the tap and the take-off, thousands of commands ran. Who wrote them, and in what order?"
mustCover:
  - "Code is an algorithm written in a programming language (with blocks or with text)"
  - "Sequence: commands are carried out in the order they are written"
  - "Input → processing → output; the user interface is where you meet them"
state: core
highlights:
  - "Code is an algorithm written in a programming language (with blocks or with text)"
  - "Sequence: commands are carried out in the order they are written"
  - "Input → processing → output; the user interface is where you meet them"
carriers: prose|diagram
---

You tap “Send” and the message flies off. Between the tap and the take-off, thousands of commands ran. Who wrote them, and in what order?

A **program** is an algorithm written in a language a computer understands. It can be text, or blocks like in Scratch and MakeCode. The computer carries out a program **word for word and in the written order**. It fills in nothing.

Every program does three things: it takes an **input** (a click, a sensor, text), **processes** it and produces an **output** (a picture, a sound, a light).

The robot has to drive to the star and switch on a light at the finish. The program starts with an **input**: *when button A is pressed*. Then comes the **processing**, the blocks in order: *move forward 3, turn left, move forward 2*. At the end is the **output**: *switch on the light*. If you swap *move forward 3* and *move forward 2*, the robot turns too early, hits the wall and never reaches the star.

Swapping two blocks was enough to send the robot somewhere else. **The order of the commands is part of the program.** The computer doesn't know what you meant. It only knows what you wrote.

But a program is not just for the computer. People who will fix it read it too. That is why code contains **comments**: notes for people that the computer skips.

**Try it!** Find three programs on your phone and name the input, processing and output of each. An alarm clock: the input is the time you set, the processing is watching the clock, the output is the ringing. Then dictate a program “from your desk to the board” to a friend and let them carry it out. What happens if you swap two steps?

> **Watch out, a common mistake:** “The computer can tell what the author meant.” It can't. It carries out exactly what is written. And it's not only the computer that reads a program: people who will fix it read it too. That is why programs contain comments.

**Next:** While a program runs, it lives in the main memory, and the processor carries out its commands one after another. → [Inside a device](#c/uvnitr-zarizeni)
