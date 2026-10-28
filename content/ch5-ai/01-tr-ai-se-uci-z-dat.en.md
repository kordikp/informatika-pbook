---
id: ai-se-uci-z-dat-en
translationOf: ai-se-uci-z-dat
lang: en
type: spine
title: "AI learns from examples"
readingTime: 2
standalone: true
teaser: "Your phone recognises your face. Yet nobody wrote it a rule about what you look like. So how does it do it?"
voice: universal
parent: null
diagram: uceni-z-dat-en
core: true
recallQ: "A face recognition model trained mostly on light skin makes mistakes with dark skin. Why?"
recallA: "It learned patterns from the data it was given. It hardly ever saw dark skin there, so it recognises it worse. The mistake is in the data."
lens: generic
visuality: balanced
depth: intro
formalism: none
lengthBand: standard
genre: worked-example
status: accepted
concept: ai-se-uci-z-dat
conceptTitle: "AI learns from examples"
objective: "Your phone recognises your face. Yet nobody wrote it a rule about what you look like. So how does it do it?"
mustCover:
  - "AI = software that learns from examples, not from hand-written rules"
  - "Training, and testing on new data"
  - "Bias: missing or one-sided data leads to wrong or unfair results"
state: core
highlights:
  - "AI = software that learns from examples, not from hand-written rules"
  - "Training, and testing on new data"
  - "Bias: missing or one-sided data leads to wrong or unfair results"
carriers: prose|diagram
---

Your phone recognises your face. Yet nobody wrote it a rule about what you look like. So how does it do it?

If you wanted to program apple recognition with rules, you'd have to describe every apple in the world. Today's AI works differently: **you show it lots of examples and it finds the patterns in them by itself**. This is called **training**. Then you **test** it on examples it has never seen.

A fruit recogniser was trained on two kinds: **red apples** and **yellow-green pears**. It looks only at the colour. Then it gets a **new green apple**, unlike anything in the data. By colour it is most similar to the pears, so it says “pear”. When you add green apples to the training data too, it recognises it correctly.

The model wasn't evil or stupid. It learned exactly what was in the data: apples are red. **Whatever is missing from the data, the model can't do.** When the data leaves someone or something out, that is exactly where the model makes mistakes. This is called **bias**.

**Try it!** Train your own model, free and with nothing to install, for example in Teachable Machine. Teach the webcam to tell apart two of your gestures: collect a few dozen pictures of each, start the training, try it out. Then show the gesture in different light or in different clothes. Where does the model fail, and what does that say about its training data?

> **Watch out, a common mistake:** “AI is objective because it's a machine.” AI learns from data and takes on its mistakes too. If green apples are missing from the data, the model won't recognise them.

**Next:** A trained model is a simplification too. Out of many examples it keeps only a few patterns. Whatever is missing from the data won't be in the patterns. → [Model: a useful simplification](#c/abstrakce-a-model)
