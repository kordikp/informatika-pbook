---
id: vyzva-program-program-en
translationOf: vyzva-program-program
lang: en
type: challenge
title: "Which lines can you swap?"
level: 3
minutes: 25
readingTime: 3
standalone: true
teaser: "In the core, swapping two blocks was enough to send the robot somewhere else."
voice: universal
parent: null
diagram: null
core: false
status: accepted
concept: program
state: edited
lens: generic
visuality: text-first
depth: standard
formalism: none
lengthBand: deep
carriers: prose|code
---

In the core, swapping two blocks was enough to send the robot somewhere else. But not every swap breaks something. Some lines can be shuffled with no harm at all. Which ones, and how can you tell?

<!-- task -->

Here is a short program in Python. The `=` sign means “set to”: the value on the right is stored in the box on the left. `print` shows the result.

```
1  price = 150
2  discount = 30
3  items = 2
4  price = price - discount
5  total = price * items
6  print(total)
```

**Task 1.** What does the program print?

**Task 2.** Go through the five pairs of neighbouring lines: 1–2, 2–3, 3–4, 4–5, 5–6. For each one, decide: if you swap those two lines, does the program still print the same thing?

**Task 3.** Find the rule. When can you swap two commands and when can’t you? The rule must work for any program, not just this one.

**Task 4.** Change line 2 to `discount = price // 5` (a fifth of the price; `//` is division without a remainder). Which pairs can be swapped now? Does your rule fit them?

**You’re done when:** you have the correct output, every pair decided correctly in both versions, and a rule that works for both.

<!-- hint -->

For each line, write down two things: which boxes it **reads** (to the right of `=` or in brackets) and which one it **writes** to (to the left of `=`).

<!-- hint -->

Line 5 reads `price` and line 4 writes it. Does it matter, then, which of them runs first?

<!-- hint -->

A swap is safe when neither line writes to a box that the other one reads or writes.

<!-- solution -->

**Output:** 240. The price is 150 − 30 = 120 and 120 × 2 = 240.

**Original version:**
- 1–2 yes: they don’t share any box.
- 2–3 yes.
- 3–4 yes: line 4 doesn’t use the box `items`.
- 4–5 no: line 5 would multiply the old price 150 and you’d get 300.
- 5–6 no: `print` would try to show `total`, which doesn’t exist yet, and the program crashes.

**Rule:** you can swap two commands when **neither of them writes to a box that the other one reads or writes**. Otherwise there is a **dependency** between them and the order is fixed.

**Version with `discount = price // 5`:** 1–2 no longer works, because line 2 now reads `price`, which wouldn’t exist yet. 2–3 and 3–4 work, 4–5 and 5–6 don’t. The output is still 240, because a fifth of 150 is 30.

<!-- more -->

This is exactly the rule the **processor** in your phone uses. To be faster, it shuffles commands that don’t depend on each other by itself, and does some of them at the same time. While doing that, it watches the same “reads and writes” as you do.

Try drawing a **dependency graph**: each line is a circle, and an arrow goes from the line that writes a box to the line that reads it. How many different orders of all six lines give the same result? (To check: 8.) Test it in [Python Tutor](https://pythontutor.com/).
