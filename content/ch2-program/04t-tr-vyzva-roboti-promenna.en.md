---
id: vyzva-roboti-promenna-en
translationOf: vyzva-roboti-promenna
lang: en
type: challenge
title: "The step counter that cheats"
level: 2
minutes: 35
readingTime: 2
standalone: true
teaser: "You take two steps and the step counter shows six."
voice: universal
parent: svet-roboti-promenna-en
diagram: null
core: false
status: accepted
concept: promenna
state: edited
lens: roboti
visuality: text-first
depth: standard
formalism: none
lengthBand: standard
carriers: prose|code
---

You take two steps and the step counter shows six. Your friend is thrilled, you less so. The board isn’t lying. It’s just counting something different from what you think.

<!-- task -->

The accelerometer measures how strong a shake is. At rest it shows about 1000. During two steps, the micro:bit measures this series:

**1000, 1250, 1550, 1450, 1600, 1200, 1000, 1100, 1650, 1700, 1520, 1480, 1550, 1000**

Go through three versions of the program and count the steps for each:

1. **Naive:** *if force > 1500, add a step*. The rule is checked for each measurement separately.
2. **Edge:** add a step only if force > 1500 and the **previous** measurement was at most 1500. You need a variable `previous`.
3. **Your own:** design a version that counts **exactly 2** for this series. You may use one extra variable besides `steps`.

**Success:** three step counts and the rules of your version, which get through this series with the result 2.

**Bonus:** make up a series for two real steps that your version merges into one. Why does this only rarely happen when walking?

<!-- hint -->

The naive version counts every measurement above 1500 separately. But one step lasts several measurements.

<!-- hint -->

The edge only helps halfway. Look at 1450 between 1550 and 1600: the foot wobbles a little and the edge takes it as a new step.

<!-- hint -->

Remember whether the foot is “up”. Add a step on a jump above 1500, but put the foot back “down” only at a really low number, say below 1100.

<!-- solution -->

**Naive: 6** (1550, 1600, 1650, 1700, 1520, 1550).
**Edge: 4** (1550, then 1600 after 1450, 1650 after 1100 and 1550 after 1480).

**Your own version** with the variable `up`:

```
if force > 1500 and up == no:
    steps = steps + 1
    up = yes
if force < 1100:
    up = no
```

1550 adds the first step. The numbers 1450, 1600 and 1200 change nothing, because none of them is below 1100. Only 1000 sets `up = no` again. 1650 adds the second step and the rest, up to the last 1000, adds nothing. Result **2**.

The key is the same as with the lamp: two thresholds and memory between them. The variable `up` doesn’t count, it **remembers a state**.

**Bonus:** for example 1000, 1600, 1300, 1650, 1000. Between the two peaks the force doesn’t drop below 1100, so they merge into one step. When you walk, your foot always lands between steps and the force falls to the resting value, which is why it’s rare.

<!-- more -->

In [MakeCode](https://makecode.microbit.org) there is a block *acceleration (mg)*. Print the values while walking with the block *serial write value* and look at them in the graph. Then set the thresholds from the real numbers, not by guessing. Want more? You can smooth the numbers with the average of the last three measurements. What does that do to the delay and to fast walking?
