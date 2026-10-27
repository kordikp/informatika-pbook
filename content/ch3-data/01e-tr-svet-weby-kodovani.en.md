---
id: svet-weby-kodovani-en
translationOf: svet-weby-kodovani
lang: en
type: spine
title: "Scrambled letters"
readingTime: 2
standalone: true
teaser: "You write “café” on your website and a visitor sees “cafÃ©”. The website is not broken. It just did not agree with the browser on how to read the numbers."
voice: universal
parent: null
diagram: null
core: false
recallQ: "Why does a photo with a higher resolution make a bigger file?"
recallA: "It is made of more pixels, and every pixel is encoded as numbers. More pixels mean more numbers, which means more bytes."
lens: weby
visuality: balanced
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

You write “café” on your website and a visitor sees “cafÃ©”. The website is not broken. It just did not agree with the browser on how to read the numbers.

On a disk and in the network, a page is only **numbers**. Which number means which letter is decided by the **encoding**, an agreed conversion table. Today the web uses **UTF-8**, which has a number for every letter in the world and for emoji too. The letter *a* takes 1 **byte**, *é* 2 bytes, the emoji 🙂 4 bytes. When the author saves the text in UTF-8 and the browser reads it with an old Western European table, every *é* falls apart into two meaningless characters. That is why every page has the line `<meta charset="utf-8">` in its header: it says which table to read it with.

Most of the numbers on the web, though, are carried by pictures. A photo from a phone has 12 million pixels and easily 4 **MB**. Yet on the page it shows in a window of 800 × 600, so most of the numbers travel through the network for nothing. And people close a website that takes ten seconds to load on a phone.

![The same photo in three sizes and formats](images/svet-weby-fotka.en.svg)

It helps to shrink the **resolution** to what is really shown and to choose the **file type** according to the content. The file extension tells the browser how to read the numbers in the file:

- **JPG** and **WebP** **compress** photos: they leave out details the eye does not notice.
- **PNG** leaves nothing out. It is good for screenshots and pictures with sharp text.
- **SVG** does not store pixels but a description of lines and shapes. An icon in SVG is sharp at any size.

**Try it!** Find a photo from a phone and check how many MB it has. Shrink it, for example in Paint, to a width of 1000 pixels and save it as JPG. How many times smaller is it?

**Next in the world of websites:** → [What happens when you press Enter](#svet-weby-cesta-dat-en)
