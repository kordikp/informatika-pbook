---
id: svet-hry-kodovani-en
translationOf: svet-hry-kodovani
lang: en
type: spine
title: "A sprite is a grid of numbers"
readingTime: 1
standalone: true
teaser: "To a computer, a character in a pixel game is a table of numbers. Literally."
voice: universal
parent: null
diagram: null
core: false
recallQ: "Why does a photo with a higher resolution make a bigger file?"
recallA: "It is made of more pixels, and every pixel is encoded as numbers. More pixels mean more numbers, which means more bytes."
lens: hry
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
carriers: prose|image
---

To a computer, a character in a pixel game is a table of numbers. Literally.

A small game character, a **sprite**, is a grid of pixels. Each pixel is a **number** that, according to an agreed **palette**, means a colour: 0 transparent, 1 black, 2 skin, 3 blue. The agreed conversion rule is **encoding**. Anyone who knows the palette can rebuild the same picture from the numbers.

![An 8 × 8 sprite and its numbers](images/svet-hry-sprite.en.svg)

An 8 × 8 sprite has 64 numbers. For four colours, 2 **bits** per pixel are enough, so the whole picture fits into 16 **bytes**. Old consoles had little memory, which is why their characters had so few colours and pixels.

Today’s games have textures of 4096 × 4096 pixels, and every pixel has three colours of 8 bits each. One texture is over 48 **MB**, and a game has thousands of them. That’s why you download games that are tens of **GB**. More detail means more numbers, and so a bigger file.

The file type (extension) says how to read the numbers: **.png** is a picture, **.wav** a sound, **.json** text with data. So that games aren’t huge, the numbers are **compressed**: instead of “blue, blue, blue… 200 times” the file stores “200× blue”.

**Try it!** Draw your own 8 × 8 sprite on squared paper and write it down in numbers using the palette 0–3. Can a friend rebuild the same picture from the numbers?

**Next in the world of games:** → [Why an online game lags](#svet-hry-cesta-dat-en)
