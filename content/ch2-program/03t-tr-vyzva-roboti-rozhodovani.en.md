---
id: vyzva-roboti-rozhodovani-en
translationOf: vyzva-roboti-rozhodovani
lang: en
type: challenge
title: "The lamp that flickers at dusk"
level: 2
minutes: 30
readingTime: 2
standalone: true
teaser: "Your micro:bit night lamp works."
voice: universal
parent: svet-roboti-rozhodovani-en
diagram: null
core: false
status: accepted
concept: rozhodovani
state: edited
lens: roboti
visuality: text-first
depth: standard
formalism: none
lengthBand: standard
carriers: prose|code
---

Your micro:bit night lamp works. Then dusk comes, a car drives past outside and the lamp starts flickering: on, off, on. Nobody broke it. The program does exactly what it says.

<!-- task -->

The lamp has a single rule: *if light < 40, it’s on, otherwise it’s off*. The light sensor gives numbers from 0 to 255. At dusk, cars drive past and clouds drift by, so the numbers jump around.

In the evening the sensor measures, one after another: **70, 58, 45, 38, 44, 36, 41, 30**. At the start the lamp is off.
In the morning it measures: **30, 42, 37, 45, 55, 62, 58, 70**. At the start the lamp is on.

1. With the single threshold 40, how many times does the lamp switch in the evening, and how many times in the morning?
2. Design rules that make the lamp switch **exactly once** in the evening and also **exactly once** in the morning. You may use two thresholds and whether the lamp is on right now.
3. Explain in general: how big a jump can your rules handle so that the lamp never switches twice in a row? And why can’t you stretch the thresholds to, say, 5 and 250?

**Success:** the rules, the number of switches for both series with one threshold and with your rules, and one sentence with the general explanation.

<!-- hint -->

Start with a single threshold. Go through the numbers one by one and for each one write down whether the lamp is on. Every change is one switch.

<!-- hint -->

Try two numbers: below one the lamp turns on, above the other it turns off. What should the lamp do when the light is between them?

<!-- hint -->

Between the thresholds it’s not the sensor that decides, but memory: the lamp stays as it is. To switch back, the light has to cross the whole band.

<!-- solution -->

With the single threshold 40, the lamp switches **5×** in the evening (38 on, 44 off, 36 on, 41 off, 30 on) and **3×** in the morning (42 off, 37 on, 45 off).

Rules with **hysteresis**, that is with a band in which the device remembers its previous state:

```
if light < 40: lamp = on
else if light > 60: lamp = off
else: leave the lamp as it is
```

Evening: 38 turns it on, the numbers 44, 36, 41 and 30 change nothing. In total **1×**. Morning: 30 to 58 change nothing, it only turns off at 62. In total **1×**. Other thresholds work too, say 35 and 50, as long as both series give one.

In general: for the lamp to switch back, the light has to cross **the whole band** from 40 to 60. If the jumps are smaller than the width of the band (here 20), that never happens, so the lamp never switches twice in a row. A band from 5 to 250 wouldn’t flicker, but the lamp would only turn on in total darkness and only turn off in direct sunlight. In a room it would never turn off.

<!-- more -->

A radiator thermostat uses the same trick (it heats below 20 °C and switches off above 21.5 °C), and so does an electronic part called a Schmitt trigger. Build both versions of the lamp in [MakeCode](https://makecode.microbit.org) and compare them with the light slider in the simulator. Then add hysteresis to the gadget that watches for noise: how long should it be quiet before the warning goes off? The extra game “The lamp and the step counter with memory” will test you.
