---
id: vyzva-weby-cesta-dat-en
translationOf: vyzva-weby-cesta-dat
lang: en
type: challenge
title: "Half-second waterfall"
level: 3
minutes: 25
readingTime: 3
standalone: true
teaser: "The club’s website is only a few kilobytes, and still it takes almost a second to load on a phone."
voice: universal
parent: svet-weby-cesta-dat-en
diagram: null
core: false
status: accepted
concept: cesta-dat
state: edited
lens: weby
visuality: text-first
depth: standard
formalism: none
lengthBand: deep
carriers: prose
---

The club’s website is only a few kilobytes, and still it takes almost a second to load on a phone. Big files aren’t slowing it down. Waiting is. Count how many times in a row the browser has to wait, and find one line that cuts the waiting.

<!-- task -->

**Model rules:**
- One trip to the server and back (RTT, round-trip time) takes **100 ms**. The server is in the USA.
- Each of these steps costs one trip: finding the IP address (DNS), opening the connection (TCP), agreeing on encryption (TLS, the s in https) and downloading each file.
- The files are small, so ignore the download time.
- Once the connection is open, the browser can ask for several files at once, but only for the ones it already knows about.

**The page:** `index.html` links to `styl.css`, `hra.js` and `foto.jpg`. In `styl.css` there is a link to the font `pismo.woff2`. When the script `hra.js` runs, it downloads `data.json`.

1. After how many ms does index.html arrive?
2. When does the font arrive, so when does the text appear in the right font?
3. When does data.json arrive?
4. The server moves to Prague and the RTT drops to 10 ms. When does the font arrive now?
5. The server is back in the USA. You add `<link rel="preload" href="pismo.woff2" as="font">` to index.html, which tells the browser about the font in advance. When does the font arrive now?

**Success:** five correct numbers and one sentence on what slows this website down the most.

<!-- hint -->

Before the first byte of HTML arrives, four trips happen one after another: DNS, TCP, TLS and the HTML itself.

<!-- hint -->

The browser asks for the CSS, JS and photo all at once, because it knows about them from the HTML. But it only learns about the font after it reads the CSS. Draw it as stairs: each step is one trip.

<!-- hint -->

Count the steps on the longest staircase and multiply them by the RTT.

<!-- solution -->

1. DNS + TCP + TLS + HTML = 4 × 100 = **400 ms**.
2. The CSS arrives at 500 ms, and only then does the browser learn about the font: **600 ms**.
3. hra.js arrives at 500 ms, data.json at **600 ms**. The photo is already there at 500 ms.
4. Still 6 steps, but 10 ms each: **60 ms**. Ten times closer means ten times faster.
5. The font now downloads together with the CSS: **500 ms**. One line saved 100 ms, a sixth of the whole time.

Conclusion: a small website isn’t slowed down by its size, but by the **number of waits in a row** and the **distance to the server**. That’s why big websites shorten the chains (preload, CSS put straight into the HTML) and put copies of their files on servers close to people (CDN).

<!-- more -->

Open F12, the Network tab, reload your favourite website and look at the Waterfall column. Find the longest chain of files where one waits for another. Then run the Lighthouse tool in F12 and compare its advice with your model. Where is the model wrong because the files aren’t small?
