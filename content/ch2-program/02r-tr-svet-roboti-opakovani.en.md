---
id: svet-roboti-opakovani-en
translationOf: svet-roboti-opakovani
lang: en
type: spine
title: "The “forever” block"
readingTime: 1
standalone: true
teaser: "A micro:bit watches the temperature in a room all day. Nobody has to write “measure the temperature” a hundred times. Once is enough."
voice: universal
parent: null
diagram: null
core: false
recallQ: "When do you use “repeat 10×” and when “repeat until…”?"
recallA: "A fixed count when you know in advance how many times. “Until” when it depends on what happens, for example until the robot hits a wall."
lens: roboti
visuality: text-first
depth: intro
formalism: none
lengthBand: standard
genre: worked-example
status: accepted
concept: opakovani
state: edited
highlights:
  - "The body of the loop and the number of repeats"
  - "Repeat n× vs. repeat until (the stopping condition)"
  - "Finiteness: a loop must end, otherwise the program gets stuck in an endless loop"
carriers: prose|code
---

A micro:bit watches the temperature in a room all day. Nobody has to write “measure the temperature” a hundred times. Once is enough.

MakeCode has the block **forever**. Whatever you put into it is the **body of the loop**, and it repeats as long as the board is switched on:

```
forever:
  show number (temperature)
  pause 1000 ms
```

So the thermometer shows a new value every second. Here an endless loop is **intentional**: the device is meant to run until you switch it off.

At other times you know in advance **how many times**. *Repeat 3 times: light the heart, pause, switch off* and the heart flashes exactly three times. And sometimes it depends on **what happens**: *repeat until button A is pressed: play a tune*. The tune plays until you press A.

The “until” condition is checked **at the start of each round**. When you press A in the middle of the tune, the round plays to the end and only then does the loop finish.

Make sure an “until” loop **ends** at some point. *Repeat until the temperature is 100 °C* never ends in a room. The temperature there never reaches a hundred, the program gets **stuck in an endless loop** and the code after the loop never runs.

**Try it!** Build a flashing heart in the MakeCode simulator (makecode.microbit.org): once three times, then forever. What happens to the block *show string “end”* after each of those loops?

**Next in the world of robots:** → [When it’s dark, switch on](#svet-roboti-rozhodovani-en)
