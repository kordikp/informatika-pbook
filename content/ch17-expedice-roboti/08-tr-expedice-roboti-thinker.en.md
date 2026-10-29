---
id: expedice-roboti-thinker-en
translationOf: expedice-roboti-thinker
lang: en
type: spine
title: "Smooth driving instead of jerking"
readingTime: 1
standalone: false
teaser: "Your rover only decides between 0 and 1, which is why it jerks from left to right."
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
concept: expedice-roboti-thinker
conceptTitle: "Smooth driving instead of jerking"
objective: "Your rover only decides between 0 and 1, which is why it jerks from left to right."
state: edited
carriers: prose|code
---

**🔬 Side trip** · [The rover that doesn’t fall off the table](#expedice-roboti-en)

Your rover only decides between 0 and 1, which is why it jerks from left to right. Competition robots read the sensor as a number, say 0 (white) to 1023 (black), with the block *analog read pin*.

Calculate the **error**: `error = left − right`. When the line is exactly in the middle, the error is 0. The further the line moves to the left, the bigger the error. Then set the motors:

```
ML = base − k × error
MP = base + k × error
```

`base` is the speed on a straight and `k` says how sharply the rover turns. This is called **proportional control** (a P controller).

**Experiment:** start with a small `k`. The rover drives calmly, but in a bend it goes off the line. Make `k` bigger. At some point it starts weaving like a snake on the straight. Find a value in between and write it in the log. Real robots add two more parts and call the whole thing PID.

**Back to the expedition:** [The rover that doesn’t fall off the table](#mission-expedice-roboti)
