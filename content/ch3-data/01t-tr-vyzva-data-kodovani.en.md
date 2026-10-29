---
id: vyzva-data-kodovani-en
translationOf: vyzva-data-kodovani
lang: en
type: challenge
title: "Compression that sometimes inflates"
level: 3
minutes: 35
readingTime: 3
standalone: true
teaser: "The short code from the example saved space."
voice: universal
parent: null
diagram: null
core: false
status: accepted
concept: kodovani
state: edited
lens: generic
visuality: text-first
depth: standard
formalism: light
lengthBand: deep
carriers: prose|formula
---

The short code from the example saved space. But draw a striped T-shirt and suddenly the short code is longer than the plain zeros and ones. Can you invent a compression that makes every single picture smaller?

<!-- task -->

The picture is **8 × 8 pixels**, 0 = white, 1 = black. Without compression it takes **64 bits**.

**RLE** compression (run-length encoding) reads the pixels row by row as one long strip and writes down only the **lengths of runs** of the same colour. The rules:
- you always start with a **white** run (if the strip starts with black, the first number is 0);
- the colours take turns: white, black, white…;
- each number takes **4 bits**, so the biggest length is 15. You split a longer run: 18 white = 15, 0, 3.

**Picture A:** rows 1, 2, 7, 8 are `00000000`, rows 3 to 6 are `00111100` (a black square in the middle).

1. Write the RLE code of picture A and work out how many bits it takes.
2. Find an 8 × 8 picture for which RLE comes out **longest**. How many bits?
3. A friend claims: “I’ll invent a better compression that makes **every** 8 × 8 picture at least 1 bit smaller.” Prove that it can’t be done, however clever they are.

<!-- hint -->

In picture A, join the end of one row with the start of the next. Two whites at the end of row 3 and two at the start of row 4 make one run of length 4.

<!-- hint -->

The worst picture is one where the colour changes at every pixel, even across the end of a row. And it is one number worse still if the strip starts with black.

<!-- hint -->

Count how many different 8 × 8 pictures exist and how many codes shorter than 64 bits exist (lengths 0, 1, 2 … 63). Each picture must get a different code, otherwise it can’t be unpacked.

<!-- solution -->

**1.** Runs: white 18, black 4, white 4, black 4, white 4, black 4, white 4, black 4, white 18. With the limit of 15: `15, 0, 3, 4, 4, 4, 4, 4, 4, 4, 15, 0, 3` = **13 numbers × 4 bits = 52 bits**. A saving of 12 bits.

**2.** Vertical stripes, every row `10101010`. The end of a row (0) and the start of the next one (1) are different, so it is 64 runs of length 1. The strip starts with black, so a leading 0 is added: **65 numbers × 4 = 260 bits**, more than four times the original. (Rows `01010101` give 256 bits.)

**3.** There are $$2^{64}$$ pictures of 8 × 8. All codes shorter than 64 bits add up to $$2^0 + 2^1 + \dots + 2^{63} = 2^{64} - 1$$. That is one fewer. So at least two pictures would get the same code, and when unpacking you couldn’t tell which one it was. This is called the **pigeonhole principle**: 10 pigeons won’t fit into 9 holes one each. So every lossless compression makes some files smaller and leaves others the same size or bigger. It only works because real pictures have lots of repetition and rarely look like noise.

<!-- more -->

In Paint, save a one-colour picture and a picture of random noise as PNG (lossless compression) and compare the sizes. Then save a photo as JPG at quality 100 and 10. JPG and MP3 get round the pigeonhole principle by **throwing away** part of the information: that is lossy compression. Invent your own improvement of RLE for picture A that comes out under 52 bits, and check that it can be unpacked in only one way.
