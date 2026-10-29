---
id: vyzva-program-opakovani-en
translationOf: vyzva-program-opakovani
lang: en
type: challenge
title: "Will this loop end?"
level: 3
minutes: 30
readingTime: 2
standalone: true
teaser: "A loop has to end at some point."
voice: universal
parent: null
diagram: null
core: false
status: accepted
concept: opakovani
state: edited
lens: generic
visuality: text-first
depth: standard
formalism: none
lengthBand: standard
carriers: prose|code
---

A loop has to end at some point. But telling in advance is often hard. For one six-line loop, even the best mathematicians in the world still don’t know.

<!-- task -->

Three loops in Python. `while` means “as long as”: the indented lines (the body) repeat as long as the condition is true. The condition is checked **at the start of every round**. `!=` means “is not equal to”.

**A**
```
x = 0
while x < 10:
    x = x + 3
```
**B**
```
x = 10
while x != 0:
    x = x - 3
```
**C** (`n % 2 == 0` means “n is even”)
```
n = 7
steps = 0
while n != 1:
    if n % 2 == 0:
        n = n // 2
    else:
        n = 3 * n + 1
    steps = steps + 1
```

**Task 1.** For A, work out how many times the body runs and what will be in `x` at the end.

**Task 2.** One of the loops A, B never ends. Which one and why? Fix it by changing **a single condition**, and work out how many rounds then run and what will be in `x`.

**Task 3.** For C, work out what will be in `steps` when the loop ends. Keep a trace table.

**You’re done when:** you have three correct numbers and a fix that makes the loop end.

<!-- hint -->

For A, write down `x` after every round: 0, 3, … Careful, it doesn’t have to be 10 at the end.

<!-- hint -->

For B, watch whether `x` ever hits exactly zero: 10, 7, 4, 1, and then?

<!-- hint -->

For C, the sequence starts 7, 22, 11, 34… Each arrow is one step. Count the arrows, not the numbers.

<!-- solution -->

**A:** x goes 0 → 3 → 6 → 9 → 12. The body runs **4 times** and at the end `x = 12`. At x = 9 the condition was still true, so another round ran.

**B** never ends: x goes 10, 7, 4, 1, −2, −5… and skips over zero. The condition `x != 0` is true forever. Fix: `while x > 0:`. Then **4 rounds** run and at the end `x = −2`.

**C:** 7 → 22 → 11 → 34 → 17 → 52 → 26 → 13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1. That’s **16 steps**.

Lesson: the condition “as long as it’s not equal to” is dangerous when the value can jump over the target. “As long as it’s greater than” is safer.

<!-- more -->

Loop C is the famous **Collatz conjecture**. Nobody has yet proved that it ends for **every** positive whole number. Computers have checked it for all numbers up past 10²⁰, but there is no proof. Count the steps for n = 27: there are over a hundred, so write a program and run it in [Python Tutor](https://pythontutor.com/) or in [Thonny](https://thonny.org/). Then find the number up to 100 that needs the most steps.
