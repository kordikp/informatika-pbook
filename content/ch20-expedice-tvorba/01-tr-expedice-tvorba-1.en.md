---
id: expedice-tvorba-1-en
translationOf: expedice-tvorba-1
lang: en
type: spine
title: "The star that closes"
readingTime: 2
standalone: false
teaser: "In the book, the turtle draws a star with the command repeat n [forward 100 right angle]."
voice: universal
parent: null
diagram: null
core: false
lens: generic
visuality: text-first
depth: standard
formalism: none
lengthBand: standard
genre: explainer
status: accepted
concept: expedice-tvorba-1
conceptTitle: "The star that closes"
objective: "In the book, the turtle draws a star with the command repeat n [forward 100 right angle]."
state: edited
carriers: prose
---

**🧩 Challenge** · step 1 of 5 · [A jingle for film night](#expedice-tvorba-en)

In the book, the turtle draws a star with the command `repeat n [forward 100 right angle]`. A star with **n** points, where the turtle circles the centre **k** times, has the angle **360 · k : n**. A five-pointed star: n = 5, k = 2, angle 144°. When k = 1, you get an ordinary polygon.

**Tasks:**
1. For n = 7, try all k from 1 to 6. How many **different** shapes do you get? Why not six?
2. For n = 6 and k = 2, something strange happens. What exactly does the turtle draw, and why?
3. Find the rule: when does the turtle draw all n points in one stroke, and when does it get back to the start too early?
4. Design a logo with 12 points in one stroke, as sharp as possible. Write the program.

**Success criterion:** the correct number of shapes for n = 7 with a reason, an explanation of the n = 6 case, a general rule that works for any n and k, and a working program for 12 points.

:::reveal 💡 Hint for task 3
Try writing the cases that go wrong into a table (n, k, how many points really appeared). What do the numbers in those rows have in common? The game “The turtle paints: stars, flowers and rosettes” will help you too.
:::

:::reveal 🔑 Solution
1. For n = 7, k = 1 to 6 give only **three** different shapes: a heptagon (k = 1 or 6), a flat star (k = 2 or 5) and a sharp star (k = 3 or 4). The pair k and n − k is the same shape, just drawn in the opposite direction.
2. For n = 6, k = 2 the angle is 120°: the turtle draws a triangle, gets back after three steps and traces it a second time. Six points do not appear.
3. All n points appear in one stroke exactly when **n and k have no common divisor other than 1**.
4. For 12 points, k = 5 works (angle 150°); `repeat 12 [forward 100 right 150]` draws a sharp star. Your logo for the evening is done.
:::

**Next step:** [A background from code in 30 minutes](#expedice-tvorba-2-en)
