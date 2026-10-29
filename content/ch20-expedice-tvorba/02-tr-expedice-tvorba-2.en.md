---
id: expedice-tvorba-2-en
translationOf: expedice-tvorba-2
lang: en
type: spine
title: "A background from code in 30 minutes"
readingTime: 1
standalone: false
teaser: "1."
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
concept: expedice-tvorba-2
conceptTitle: "A background from code in 30 minutes"
objective: "1."
state: edited
carriers: prose|code
---

**🛠 Workshop** · step 2 of 5 · [A jingle for film night](#expedice-tvorba-en)

1. Open [editor.p5js.org](https://editor.p5js.org). You can start drawing right away without an account. Saving to the cloud needs an account: under 13 only with a parent; otherwise copy your code into a text file.
2. Delete the sample code and paste this:

```
let palette = ['#1d2b53', '#7e2553', '#ff004d', '#ffec27'];
function setup() {
  createCanvas(640, 360);
  randomSeed(7);
  noLoop();
}
function draw() {
  background('#000000');
  noStroke();
  for (let i = 0; i < 200; i++) {
    fill(random(palette));
    circle(random(width), random(height), random(5, 40));
  }
}
```

3. Click Play. You will see 200 circles in four colours on a canvas with a 16 : 9 ratio, the same as a video.
4. Change `randomSeed(7)` to `randomSeed(8)` and run it again. A completely different picture. Put 7 back: exactly the first one. That is the **seed**, the seed of chance. The same rule and the same seed always give the same result.
5. Play with the rules: 2000 circles instead of 200, size `random(1, 4)` like a starry sky, try `square` instead of `circle`. Each time, write down what changed.
6. Pick a palette from Lospec (8 colours at most) and rewrite the `palette` array. You will then use the same colours for the mascot.
7. Save the picture: add `saveCanvas('background', 'png');` at the end of `draw()`.

In 30 minutes you have three versions of the background and you know which number does what.

**Next step:** [A film you can take apart](#expedice-tvorba-3-en)
