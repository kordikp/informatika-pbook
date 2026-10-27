---
id: opakovani-en
translationOf: opakovani
lang: en
type: spine
title: "Repetition (loop)"
readingTime: 2
standalone: true
teaser: "A social media feed never ends. Another video, and another, and another… How do you write that kind of “over and over” into a program?"
voice: universal
parent: null
diagram: anim-rizeni-toku-en
core: true
recallQ: "When do you use “repeat 10×” and when “repeat until…”?"
recallA: "A fixed count when you know in advance how many times. “Until” when it depends on what happens, for example until the robot hits a wall."
lens: generic
visuality: balanced
depth: intro
formalism: none
lengthBand: standard
genre: worked-example
status: accepted
concept: opakovani
conceptTitle: "Repetition (loop)"
objective: "A social media feed never ends. Another video, and another, and another… How do you write that kind of “over and over” into a program?"
state: core
highlights:
  - "The body of the loop and the number of repeats"
  - "Repeat n× vs. repeat until (the stopping condition)"
  - "Finiteness: a loop must end, otherwise the program gets stuck in an endless loop"
carriers: prose|animation
---

A social media feed never ends. Another video, and another, and another… How do you write that kind of “over and over” into a program?

When something happens again and again, you don't write it a hundred times. You write it **once** and say **how many times** it should repeat, or **until** when. This is called a **loop**. The commands repeated inside it are called the **body of the loop**.

The robot has to drive round a pillar and come back to the start. The long program has 8 blocks: *move 3, turn right*, and all of that four times. The same pair repeats, so **repeat 4×: move 3, turn right** is enough. Three blocks instead of eight. And what if the robot has to drive to the wall of a corridor whose length it doesn't know? *Repeat 5×: move 1* crashes in a short corridor and stops too early in a long one. What works is **repeat until in front of the wall: move 1**.

You use a loop with a **fixed count** when you **know in advance how many times**: the four sides of a square. A loop **with a condition** when it depends on what happens: drive until you reach the wall.

Watch out for two things. The condition is checked **at the start of every round**, not in the middle of the body. And a loop has to **end** at some point. If the condition never stops being true, the program gets **stuck in an endless loop**. Sometimes that's a bug, sometimes it's on purpose: a game loop or an endless feed keeps running deliberately.

**Try it!** Find three repetitions in your day and decide for each one whether it is “repeat 10×” or “repeat until…”. Brushing your teeth (two minutes, or until they're clean?), laps at training, scrolling a feed. What is the stopping condition for the feed? Does it even have one?

> **Watch out, a common mistake:** “A loop watches its condition all the time, even in the middle of a round.” It only checks it at the start of each round. If the condition is met in the middle, the round still runs to the end.

**Next:** An endless feed is a loop that deliberately has no end. You will see why social networks do this in chapter 5. → [The recommender and your feed](#c/doporucovac)
