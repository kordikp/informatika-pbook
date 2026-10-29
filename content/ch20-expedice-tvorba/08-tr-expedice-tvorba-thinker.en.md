---
id: expedice-tvorba-thinker-en
translationOf: expedice-tvorba-thinker
lang: en
type: spine
title: "Movement from code"
readingTime: 1
standalone: false
teaser: "Make the still background move so that the jingle can loop without a jerk."
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
concept: expedice-tvorba-thinker
conceptTitle: "Movement from code"
objective: "Make the still background move so that the jingle can loop without a jerk."
state: edited
carriers: prose
---

**🔬 Side trip** · [A jingle for film night](#expedice-tvorba-en)

Make the still background move so that the jingle can loop without a jerk. At 30 frames per second, 20 seconds has **600 frames**.

In `setup()` delete `noLoop()` and add `frameRate(30)`. In `draw()` work out `let t = (frameCount % 600) / 600;`, a number from 0 to 1 that goes back to the start every 20 seconds. Move the circles by `200 * sin(TWO_PI * t)`. Because the sine has the same value after a full turn (TWO_PI) as at the start, the loop is **perfectly seamless**.

**Task:** 1) Why would `sin(t)` instead of `sin(TWO_PI * t)` jerk at the end? 2) Make one circle go round the centre exactly three times in 20 seconds. 3) Make each circle float with a different phase: add a random number from `setup()` to `TWO_PI * t`. Criterion: frame 600 looks the same as frame 0.

**Back to the expedition:** [A jingle for film night](#mission-expedice-tvorba)
