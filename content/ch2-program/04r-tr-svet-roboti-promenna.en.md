---
id: svet-roboti-promenna-en
translationOf: svet-roboti-promenna
lang: en
type: spine
title: "A micro:bit step counter"
readingTime: 1
standalone: true
teaser: "You strap a micro:bit to your shoe and it counts your steps. Where does it keep that number between two steps?"
voice: universal
parent: null
diagram: null
core: false
recallQ: "The score is 5. The program runs “set score to 3” and then “change score by 2”. What is the score?"
recallA: "5. Setting overwrites the value with 3, changing by 2 raises it to 5. A variable remembers only its latest value."
lens: roboti
visuality: balanced
depth: intro
formalism: none
lengthBand: standard
genre: worked-example
status: accepted
concept: promenna
state: edited
highlights:
  - "A name and a current value (exactly one)"
  - "Set vs. change by; assignment overwrites the old value"
  - "A variable as the state of a program (score, lives, mode)"
carriers: prose|image|code
---

You strap a micro:bit to your shoe and it counts your steps. Where does it keep that number between two steps?

In a **variable**. It has a **name** (*steps*) and, at any one time, **exactly one value**: 248 now, 249 after the next step.

```
on start:
  set [steps] to 0
on shake:
  change [steps] by 1
  show number [steps]
on button B pressed:
  set [steps] to 0
```

![The step counter shows the value of the variable steps](images/svet-roboti-krokomer.en.svg)

Two blocks, two different things:

- **set to** overwrites the value. *Set steps to 0* wipes out what was there: on start and when you reset with button B.
- **change by** adds to what is already there. Every shake: +1.

If you accidentally put *set steps to 1* into the shake block, the step counter would always show 1. Every step would overwrite the one before.

A variable also holds the **state** of the device. The variable *mode* can be *counting* or *paused*. Button A switches it, and a shake adds only in *counting* mode. The same shake, different behaviour, depending on what is in the variable.

**Try it!** Build the step counter in the MakeCode simulator. Then add button A to show how many steps are left until a thousand. Do you need a new variable for that?

**Next in the world of robots:** → [A heart made of 25 numbers](#svet-roboti-kodovani-en)
