---
id: expedice-weby-2-en
translationOf: expedice-weby-2
lang: en
type: spine
title: "A 100-kilobyte budget"
readingTime: 1
standalone: false
teaser: "Ema’s design: | file | size | |---|---| | index.html | 8 kB | | styl.css | 6 kB | | a font from the internet, 2 weights | 2 × 25 kB | | a photo from a phone | …"
voice: universal
parent: null
diagram: null
core: false
lens: generic
visuality: text-first
depth: standard
formalism: none
lengthBand: standard
genre: explainer
status: accepted
concept: expedice-weby-2
conceptTitle: "A 100-kilobyte budget"
objective: "Ema’s design: | file | size | |---|---| | index.html | 8 kB | | styl.css | 6 kB | | a font from the internet, 2 weights | 2 × 25 kB | | a photo from a phone | …"
state: edited
carriers: prose|table
---

**🧩 Challenge** · step 2 of 5 · [A hundred kilobytes](#expedice-weby-en)

**Ema’s design:**

| file | size |
|---|---|
| index.html | 8 kB |
| styl.css | 6 kB |
| a font from the internet, 2 weights | 2 × 25 kB |
| a photo from a phone | 3.2 MB |
| the jQuery library for one button | 87 kB |

**Task:**
1. How many kB is that in total (count 1 MB as 1000 kB)? How many times over budget?
2. Suggest changes so the website fits into 100 kB and looks almost the same. For each one, write how much it saves.
3. Measure your website: F12 → Network → reload the page. At the bottom you’ll see how much was transferred and how many requests there were.

**Success criterion:** the total is up to 100 kB and no content has disappeared.

**Check:** 3351 kB in total, so roughly 33.5 times over budget. One possible way:
- replace the font with the system one, `font-family: system-ui`: 0 kB instead of 50 kB;
- shrink the photo to 800 pixels wide and save it as WebP or JPG at about 75 quality: about 60 kB instead of 3200 kB;
- replace jQuery with five lines of your own JavaScript: about 0.3 kB instead of 87 kB.

The result is about 74 kB. The biggest saving is almost always the photo. Photos right at the bottom of the page get `loading="lazy"` and download only when the visitor scrolls down to them.

**Next step:** [Analyse a website that has worked for twenty years](#expedice-weby-3-en)
