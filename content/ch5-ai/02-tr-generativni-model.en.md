---
id: generativni-model-en
translationOf: generativni-model
lang: en
type: spine
title: "Generative AI predicts"
readingTime: 2
standalone: true
teaser: "Your phone keyboard suggests the next word before you type it. A chatbot does the same, only much better. And sometimes it makes things up along the way."
voice: universal
parent: null
diagram: anim-generativni-model-en
core: true
recallQ: "Why does a chatbot sometimes confidently write nonsense?"
recallA: "It predicts a likely continuation of the text and doesn't check the facts. A sentence that sounds likely doesn't have to be true."
lens: generic
visuality: balanced
depth: intro
formalism: none
lengthBand: standard
genre: worked-example
status: accepted
concept: generativni-model
conceptTitle: "Generative AI predicts"
objective: "Your phone keyboard suggests the next word before you type it. A chatbot does the same, only much better. And sometimes it makes things up along the way."
state: core
highlights:
  - "Predicting the next word (token) by probability"
  - "Fluent is not the same as true: hallucinations"
  - "The same with images, voice and video (generative images, deepfakes)"
carriers: prose|animation
---

Your phone keyboard suggests the next word before you type it. A chatbot does the same, only much better. And sometimes it makes things up along the way.

A language model, such as a chatbot, learned from a huge amount of text. It didn't learn facts from it like an encyclopedia. It learned **which words usually follow which**. When you write it a question, **it guesses word by word what most likely comes next**.

Play the model. The sentence starts “The best-known book by the writer Karel Vrba from Kolín is called…”. The model offers continuations by probability: *Shadows* (31%), *The Last* (24%), *House* (17%). You pick Shadows, then *over* (42%), then *the Elbe* (38%) and finally *and came out in 1987* (29%). The sentence reads: “…is called Shadows over the Elbe and came out in 1987.” It sounds believable. But Karel Vrba from Kolín is made up.

Every word was likely, which is why the sentence sounds believable. But nowhere was there a step “check whether it's true”. That's how **hallucinations** happen: fluent, confident answers that aren't true.

The model itself doesn't look anything up. Some chatbots can also search the web, which is what the trip **Inside a chatbot** is about. Image and voice generators predict in the same way, only they put together pixels and sounds instead of words.

**Try it!** Play the model: a friend says three words and each time you add the most likely next one. You get a fluent sentence, and yet you didn't “know” anything, you only guessed. That is exactly how every chatbot answer is made, the wrong ones too.

> **Watch out, a common mistake:** “A chatbot looks answers up in a database.” A chatbot predicts the next word according to what is likely. That's why it sounds sure even when it's making things up.

**Next:** The model doesn't read letters. The text is turned into numbers and the model calculates with numbers, just as it does with the pixels of an image. → [Everything is numbers](#c/kodovani)
