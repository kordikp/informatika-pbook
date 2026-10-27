---
id: svet-roboti-program-en
translationOf: svet-roboti-program
lang: en
type: spine
title: "Sensor → program → light"
readingTime: 1
standalone: true
teaser: "You walk down a corridor and the light switches on by itself. Inside runs a program with three parts. The same as every program in the world."
voice: universal
parent: null
diagram: vstup-zpracovani-vystup-en
core: false
recallQ: "What does a computer do if you swap two commands in a program, and why?"
recallA: "It carries them out in the new order, even if that makes no sense, because it fills in nothing. So the result can change."
lens: roboti
visuality: balanced
depth: intro
formalism: none
lengthBand: standard
genre: explainer
status: accepted
concept: program
state: edited
highlights:
  - "Code is an algorithm written in a programming language (with blocks or with text)"
  - "Sequence: commands are carried out in the order they are written"
  - "Input → processing → output; the user interface is where you meet them"
carriers: prose|diagram|code
---

You walk down a corridor and the light switches on by itself. Inside runs a program with three parts. The same as every program in the world.

Every program **takes input, processes it and produces output**. With robots and the micro:bit you can put your hands on all three parts:

- **input**: a **sensor** measures something (light, movement, temperature, a button press),
- **processing**: the program evaluates the value (*is it dark?*),
- **output**: an **actuator** does something (lights an LED, spins a motor, beeps).

You put a micro:bit program together from blocks in MakeCode, or you write it as text. Both are **code**: an algorithm written in a programming language.

```
forever:
  if light level < 50:
    show icon ☀
  else:
    clear screen
```

The micro:bit carries out the commands **exactly in the order they are written**. Swap two blocks and the result changes. *Show icon* and then *pause 1 s* shows the icon for a second. *Pause 1 s* and then *show icon* leaves the display empty for a second. The computer doesn’t guess what you meant.

**Sensors** are a device’s senses, **actuators** its muscles. A sensor without an actuator just measures quietly; an actuator without a sensor is blind force. Only the program between them turns numbers into actions. The micro:bit’s buttons and display are its **user interface**: the place where you meet the input and the output.

**Try it!** Find three devices at home that follow the pattern input → processing → output. For each one, name the sensor and the actuator. What does a kettle measure, and what does it do then?

**Next in the world of robots:** → [The “forever” block](#svet-roboti-opakovani-en)
