---
id: svet-roboti-ai-se-uci-z-dat-en
translationOf: svet-roboti-ai-se-uci-z-dat
lang: en
type: spine
title: "Train a micro:bit on your own movements"
readingTime: 1
standalone: true
teaser: "Nobody wrote the micro:bit a rule saying “this is waving”. It learns it by itself, from your examples."
voice: universal
parent: null
diagram: uceni-z-dat-en
core: false
recallQ: "A face recognition model trained mostly on light skin makes mistakes with dark skin. Why?"
recallA: "It learned patterns from the data it was given. It hardly ever saw dark skin there, so it recognises it worse. The mistake is in the data."
lens: roboti
visuality: balanced
depth: intro
formalism: none
lengthBand: standard
genre: explainer
status: accepted
concept: ai-se-uci-z-dat
state: edited
highlights:
  - "AI = software that learns from examples, not from hand-written rules"
  - "Training, and testing on new data"
  - "Bias: missing or one-sided data leads to wrong or unfair results"
carriers: prose|diagram
---

Nobody wrote the micro:bit a rule saying “this is waving”. It learns it by itself, from your examples.

In the **CreateAI** tool (createai.microbit.org) you record examples of movements for the micro:bit: ten waves, ten claps, ten moments when you just stand still. For each one the accelerometer measures how the board moved. From the examples a **model** then finds **patterns**: waving has a back-and-forth rhythm, a clap one sharp jolt.

This is artificial intelligence: **software that learns from examples**, not from rules written by hand. Writing a rule for waving would be almost impossible. Showing ten examples is easy.

Then comes **testing on new data**. Try the model that saw you wave on a friend. They wave differently, faster or with the left hand, and the model gets confused. It never saw waving like that in its training data.

That is **bias**: what is missing from the data, the model can’t do. Train it only on yourself, with the micro:bit in your right hand, and it works worse for everyone else. The fix is in the data: add examples from more people, from both hands, fast ones and slow ones. Big AI systems fail the same way. A model that saw mostly one type of face recognises the others worse.

**Try it!** Train two gestures in CreateAI (a micro:bit and a computer are enough). Then let three classmates try it. Who does it get most confused with, and why?

**You have been through the whole world of robots. Now the mission:** → [Build a gadget](#mission-svet-roboti)
