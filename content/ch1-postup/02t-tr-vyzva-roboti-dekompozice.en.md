---
id: vyzva-roboti-dekompozice-en
translationOf: vyzva-roboti-dekompozice
lang: en
type: challenge
title: "The rover with two eyes"
level: 3
minutes: 40
readingTime: 3
standalone: true
teaser: "The rover follows the line beautifully until a sharp bend comes."
voice: universal
parent: svet-roboti-dekompozice-en
diagram: null
core: false
status: accepted
concept: dekompozice
state: edited
lens: roboti
visuality: text-first
depth: standard
formalism: none
lengthBand: deep
carriers: prose|table|code
---

The rover follows the line beautifully until a sharp bend comes. Then the line disappears from both sensors and the rover happily drives straight on, off the table.

<!-- task -->

The rover has two line sensors at the front, **L** (left) and **P** (right). Each one reports 1 when it sees the black line and 0 when it sees white paper. The line is so wide that on a straight both of them see it. The rover has two motors, **ML** (left) and **MP** (right). When only the right motor runs, the rover turns left.

1. Fill in the table for the combinations of L and P: which motor runs (1) and which stands still (0)? Leave the row L = 0, P = 0 empty for now.
2. Find a rule in the table that can be written **without a single if**: ML is always the same as one sensor and MP the same as the other.
3. Now the row 0 and 0: the line has disappeared. Suggest what the rover should remember and how it decides based on that, so that it gets back to the line in a sharp bend. Write it as rules *if… then…*.

**Success:** the table, the rule from point 2 and rules for the lost line that pass two tests: a sharp bend to the left and a sharp bend to the right.

<!-- hint -->

When only the left sensor sees the line, the line is running away to the left. Which way does the rover have to turn, and which motor has to stop for that?

<!-- hint -->

Look at the columns of the table: in every row, ML has the same value as one of the sensors. The sensors and motors are “crossed”.

<!-- hint -->

When the line disappears, the sensors don’t know anything any more. Only the past knows: which sensor saw the line last? One variable is enough for that.

<!-- solution -->

| L | P | ML | MP | what it does |
|---|---|---|---|---|
| 1 | 1 | 1 | 1 | goes straight |
| 1 | 0 | 0 | 1 | turns left |
| 0 | 1 | 1 | 0 | turns right |
| 0 | 0 | ? | ? | the line has disappeared |

The rule without *if*: **ML = P and MP = L**. The right sensor controls the left motor and the other way round. This kind of wiring is called a Braitenberg vehicle, and it also works as two crossed wires.

The lost line: the variable `last` remembers which sensor was the last one to see the line on its own.

```
if L == 1 and P == 0: last = left
if L == 0 and P == 1: last = right
if L == 0 and P == 0:
    if last == left: ML = 0, MP = 1
    else: ML = 1, MP = 0
```

In a sharp bend to the left, the left sensor is the last to see the line, so the rover turns left until it finds it again. To the right, the other way round. One big task has broken down into three smaller ones: **see, decide, remember**.

<!-- more -->

Build the table out of logic gates in the extra game “A rover brain made of gates”. Competition robots don’t read just 0 and 1, but a shade of grey, and they turn more the further the line is from the centre. This is called proportional control. If you want to compete with a line robot, you and a crew of friends can enter [Robosoutěž ČVUT](https://robosoutez.fel.cvut.cz) for lower secondary pupils; the organisers lend you the kit.
