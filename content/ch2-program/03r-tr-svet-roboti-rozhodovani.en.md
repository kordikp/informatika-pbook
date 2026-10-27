---
id: svet-roboti-rozhodovani-en
translationOf: svet-roboti-rozhodovani
lang: en
type: spine
title: "When it’s dark, switch on"
readingTime: 1
standalone: true
teaser: "A micro:bit night light switches on when it gets dark and off when it is light. Behind that is a single question: is it dark?"
voice: universal
parent: null
diagram: null
core: false
recallQ: "What happens to the “else” branch when the condition is true?"
recallA: "It doesn't run. Of the if / else branches, exactly one always runs."
lens: roboti
visuality: balanced
depth: intro
formalism: none
lengthBand: standard
genre: worked-example
status: accepted
concept: rozhodovani
state: edited
highlights:
  - "A condition is either true or false"
  - "If–else: exactly one branch runs"
  - "Combining conditions (and, or, not)"
carriers: prose|image|code
---

A micro:bit night light switches on when it gets dark and off when it is light. Behind that is a single question: is it dark?

A **condition** is a question with the answer **true** or **false**. *Is the light level less than 50?* The sensor reports 20 → true. It reports 180 → false.

![Night light: when it’s dark, switch on, otherwise switch off](images/svet-roboti-lampicka.en.svg)

```
forever:
  if light level < 50:
    light up all LEDs
  else:
    clear screen
```

Of the branches **if** and **else**, **always exactly one** runs. The lamp is never on and off at the same time.

Conditions can be **combined**:

- **and**: switch on when it is dark **and** someone is moving. Both must be true; otherwise the lamp saves its battery.
- **or**: beep when it is too hot **or** too cold.
- **not**: show a heart when the button is **not** pressed.

Many programs wait for an **event**: *on button A pressed → show a smiley*, *on shake → roll a die*. An event is a prompt from outside; a condition is a question the program asks itself. A smart home is a collection of rules like these: *when a window opens → turn off the heating*.

**Try it!** Design three *if… then…, else…* rules for your room. For each one, write which sensor finds out the answer to the question.

**Next in the world of robots:** → [A micro:bit step counter](#svet-roboti-promenna-en)
