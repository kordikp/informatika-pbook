---
id: svet-tvorba-ai-se-uci-z-dat-en
translationOf: svet-tvorba-ai-se-uci-z-dat
lang: en
type: spine
title: "Why a scientist is always an old man in a lab coat"
readingTime: 2
standalone: true
teaser: "You ask a generator for “a scientist in a laboratory”. Four pictures, and four times an older man in a white coat with glasses. Nobody programmed it to do that."
voice: universal
parent: null
diagram: null
core: false
recallQ: "A face recognition model trained mostly on light skin makes mistakes with dark skin. Why?"
recallA: "It learned patterns from the data it was given. It hardly ever saw dark skin there, so it recognises it worse. The mistake is in the data."
lens: tvorba
visuality: visual-first
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
carriers: prose|image
---

You ask a generator for “a scientist in a laboratory”. Four pictures, and four times an older man in a white coat with glasses. Nobody programmed it to do that.

Nobody taught the image generator rules like “a scientist wears a lab coat”. It is **software that learns from examples**. It got hundreds of millions of pictures with captions from the internet and found **patterns** in them: what shapes and colours go with the words *dog*, *sunset*, *scientist*. This kind of learning is called **training**.

What is in the data, the model learns. And on the internet, the word *scientist* comes mostly with one kind of photo: an older man, a lab coat, test tubes. Women scientists, young scientists or scientists at a computer are rarer in the captions. So the model doesn’t show the world as it is, but as it was described in pictures. This is called **bias**: **one-sided data** leads to one-sided results. With pictures it turns into a cliché. With AI that sorts applications or recognises faces, it often turns into **unfairness**: whoever is missing from the examples in the data, the model understands worse.

![Four scientists from a generator and what was missing in the data](images/svet-tvorba-vedec.en.svg)

How do you know a model has learned well? By **testing on new data**, on examples it didn’t see during training. If it only manages what it has already seen, it has learned by heart. If it works on new pictures too, it has found real patterns.

For you as a creator this leads to one habit: notice what the generator chose **for you without asking**. Gender, age, skin colour, setting. When you want something other than the internet average, say it in the prompt: *a young woman scientist at a microscope*.

**Try it!** Give an image generator three jobs: “teacher”, “programmer”, “nurse”. What do the results have in common? What did the model assume without you asking?

**Next in the world of creating with AI:** → [Six fingers and lettering from another planet](#svet-tvorba-generativni-model-en)
