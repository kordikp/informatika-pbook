---
id: svet-roboti-kodovani-en
translationOf: svet-roboti-kodovani
lang: en
type: spine
title: "A heart made of 25 numbers"
readingTime: 2
standalone: true
teaser: "The little heart on the micro:bit display looks like a picture. To the board it is 25 numbers."
voice: universal
parent: null
diagram: null
core: false
recallQ: "Why does a photo with a higher resolution make a bigger file?"
recallA: "It is made of more pixels, and every pixel is encoded as numbers. More pixels mean more numbers, which means more bytes."
lens: roboti
visuality: visual-first
depth: intro
formalism: none
lengthBand: standard
genre: explainer
status: accepted
concept: kodovani
state: edited
highlights:
  - "Encoding = agreed rules for converting (pixel → number, letter → number)"
  - "Data size: bit, byte, MB, GB; resolution and quality make a file bigger"
  - "The file type (extension) says how to read the numbers; compression saves space"
carriers: prose|image|code
---

The little heart on the micro:bit display looks like a picture. To the board it is 25 numbers.

The micro:bit display has 5 × 5 **LEDs**. Each one is a single number: **0** off, **9** fully on, with brightness levels in between. To keep it simple, we write an LED that is on as 1 and one that is off as 0. The heart is then five rows of five numbers:

![A 5 × 5 LED display with a heart and its numbers](images/svet-roboti-led.en.svg)

```
0 1 0 1 0
1 1 1 1 1
1 1 1 1 1
0 1 1 1 0
0 0 1 0 0
```

The rule “0 = off, 1 = on” is **encoding**: an agreed conversion rule. Anyone who knows it can rebuild the same picture from the numbers.

How much space does it take? With zero and one, one **bit** per LED is enough; the whole heart is 25 bits, which is just over 3 **bytes**. With brightness 0–9 you need 4 bits per LED. More detail means more numbers, and so more data. A photo on your phone has millions of pixels with three numbers each, and that’s why it takes several **MB**.

Text is numbers too: the letter **A** is number 65 in a computer, and the micro:bit knows which LEDs to light for it. You send a program to the board as a **.hex** file: the extension says that it contains instructions for the processor, not a picture or text. And a picture where a whole row is lit can be stored more compactly: “5× one” instead of five ones. That is called **compression**.

**Try it!** Draw your own icon on a 5 × 5 grid and write it down as 25 numbers. Send the numbers to a friend. Can they rebuild the same picture from them?

**Next in the world of robots:** → [Radio between micro:bits](#svet-roboti-cesta-dat-en)
