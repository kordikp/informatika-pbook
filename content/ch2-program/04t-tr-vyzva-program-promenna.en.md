---
id: vyzva-program-promenna-en
translationOf: vyzva-program-promenna
lang: en
type: challenge
title: "Swap two boxes"
level: 3
minutes: 25
readingTime: 2
standalone: true
teaser: "Box a holds 5, box b holds 8."
voice: universal
parent: null
diagram: null
core: false
status: accepted
concept: promenna
state: edited
lens: generic
visuality: text-first
depth: standard
formalism: none
lengthBand: standard
carriers: prose|code
---

Box `a` holds 5, box `b` holds 8. You want to swap them. Sounds like child’s play. But the first try trips up almost everyone.

<!-- task -->

A friend wrote:

```
a = 5
b = 8
a = b
b = a
```

**Task 1.** Write a trace table: the values of `a` and `b` after each line. What is in the boxes at the end, and why did the swap fail?

**Task 2.** Fix it. You may use a third box `t`. What is the smallest number of commands you need (the first two lines don’t count)?

**Task 3.** Now without a third box. You may only add and subtract. Three commands are enough. Find them.

**Task 4.** Three boxes: `a = 1`, `b = 2`, `c = 3`. Rotate them: `a` gets the value from `b`, `b` gets it from `c`, and `c` from `a`. The result should be `a = 2`, `b = 3`, `c = 1`. What is the smallest number of commands you need with one helper box?

**You’re done when:** the tables are right and every fix works for **any** numbers, not just 5 and 8. Check it with another pair too, for example −3 and 10.

<!-- hint -->

After the line `a = b`, the five is gone; a box only holds its latest value. Where will you hide it before you overwrite it?

<!-- hint -->

Without a third box: store the sum `a + b` in `a`. The sum carries both numbers inside it. How do you get the original `a` back out of it?

<!-- hint -->

For the rotation, you only need to hide one value: the one you overwrite first.

<!-- solution -->

**Task 1:** after `a = b`, a = 8, b = 8. After `b = a`, it stays a = 8, b = 8. The five vanished with the very first assignment, because **set to** overwrites the old value.

**Task 2:** three commands: `t = a`, `a = b`, `b = t`.

**Task 3:** `a = a + b` (a = 13), `b = a - b` (b = 13 − 8 = 5), `a = a - b` (a = 13 − 5 = 8). It works because the sum remembers both numbers: when you subtract one of them from it, the other is left.

**Task 4:** four commands: `t = a`, `a = b`, `b = c`, `c = t`.

<!-- more -->

In Python, a swap can be written in one line: `a, b = b, a`. Python first makes a pair of values (8, 5) and only then splits it into the boxes, so nothing vanishes. Think about it: why doesn’t the adding trick work for text, for example `a = "dog"`? And what about the multiply-and-divide trick (`a = a * b`, `b = a / b`, `a = a / b`)? Find a number for which it fails, and explain why.
