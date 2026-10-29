---
id: kodovani-en
translationOf: kodovani
lang: en
type: spine
title: "Everything is numbers"
readingTime: 2
standalone: true
teaser: "Your phone says “Storage full”. An hour of 4K video takes up more space than a thousand photos. Why is video so big?"
voice: universal
parent: null
diagram: null
core: true
recallQ: "Why does a photo with a higher resolution make a bigger file?"
recallA: "It is made of more pixels, and every pixel is encoded as numbers. More pixels mean more numbers, which means more bytes."
lens: generic
visuality: balanced
depth: intro
formalism: none
lengthBand: standard
genre: worked-example
status: accepted
concept: kodovani
conceptTitle: "Everything is numbers"
objective: "Your phone says “Storage full”. An hour of 4K video takes up more space than a thousand photos. Why is video so big?"
mustCover:
  - "Encoding = agreed rules for converting (pixel → number, letter → number)"
  - "Data size: bit, byte, MB, GB; resolution and quality make a file bigger"
  - "The file type (extension) says how to read the numbers; compression saves space"
state: core
highlights:
  - "Encoding = agreed rules for converting (pixel → number, letter → number)"
  - "Data size: bit, byte, MB, GB; resolution and quality make a file bigger"
  - "The file type (extension) says how to read the numbers; compression saves space"
carriers: prose|formula
---

Your phone says “Storage full”. An hour of 4K video takes up more space than a thousand photos. Why is video so big?

A computer can store and send **only numbers**, in the end zeros and ones. For numbers to mean a picture, text or sound, you need **encoding**: an agreed rule for turning things into numbers.

For a computer, an 8 × 8 pixel heart is a table of zeros and ones. Each row of pixels is one row of numbers:

⟦obr: images/proklik-kodovani.en.svg⟧

Double the resolution is 16 × 16 = 256 pixels instead of 64. Twice as many across and twice as many down gives four times as many numbers, and so a file four times as big. That's why 4K video is so big.

A colour pixel needs more numbers, usually three: how much red, green and blue it has. Even a letter has a number: **A** is 65. Data size is measured in **bits** and **bytes** (1 byte = 8 bits), and bigger data in **kB, MB and GB**.

Each of the three colour numbers takes up one byte. So working out the size of an uncompressed photo is easy:

$$\text{size} = \text{width} \times \text{height} \times 3\ \text{B}$$

A phone photo has 4000 × 3000 pixels: 4000 × 3000 × 3 B = 36,000,000 B, so about **36 MB**. JPG compression shrinks it to roughly a tenth.

The **file extension** (.png, .mp3, .txt) tells a program which rule to use to read the numbers. **Compression** saves space: instead of “00000000” it writes “8×0”. JPG and MP3 also throw away details you can hardly see or hear.

Encoding is not encryption. The rule of an encoding is **public**, so that every program can read the data.

**Try it!** Take a photo with your phone and look at the photo's details: how many pixels wide and high is it? Then shrink it to half the width and half the height. How many times fewer pixels does it have now? And did the file shrink by the same amount?

> **Watch out, a common mistake:** “Inside a computer, a picture is stored as a picture.” Inside there are only numbers: for each pixel a few numbers that give its colour. And encoding is not encryption. A code is an agreement everyone knows, a cipher is a secret.

**Next:** Encoding is a public rule. Encryption adds a secret key, without which you can't read the message. You'll see it in chapter 4. → [Encryption: an envelope instead of a postcard](#c/sifrovani)
