---
id: svet-tvorba-generativni-model-en
translationOf: svet-tvorba-generativni-model
lang: en
type: spine
title: "Six fingers and lettering from another planet"
readingTime: 2
standalone: true
teaser: "A friend types “dog” and gets a picture like from a textbook. You type “retriever puppy jumping into a puddle, sunset, close-up” and you have a poster. The same tool; the only difference is the words."
voice: universal
parent: null
diagram: null
core: false
recallQ: "Why does a chatbot sometimes confidently write nonsense?"
recallA: "It predicts a likely continuation of the text and doesn't check the facts. A sentence that sounds likely doesn't have to be true."
lens: tvorba
visuality: balanced
depth: intro
formalism: none
lengthBand: standard
genre: worked-example
status: accepted
concept: generativni-model
state: edited
highlights:
  - "Predicting the next word (token) by probability"
  - "Fluent is not the same as true: hallucinations"
  - "The same with images, voice and video (generative images, deepfakes)"
carriers: prose|table
---

A friend types “dog” and gets a picture like from a textbook. You type “retriever puppy jumping into a puddle, sunset, close-up” and you have a poster. The same tool; the only difference is the words.

A generator doesn’t read your mind, it reads only the words you give it. And it does with them what a chatbot does with text: it **predicts**. A chatbot guesses the next word (**token**) by **probability**. An image generator creates the picture that *most likely* goes with your description. Many generators start from noise and turn it into a picture step by step. They don’t look up a finished picture in a database; they create a new one.

That is why describing more helps. What belongs in a **prompt**:

| Parameter | Examples |
|---|---|
| style | photo, watercolour, pixel art |
| mood | cheerful, mysterious, calm |
| light | sunset, neon, soft daylight |
| shot | close-up, from above, wide |

It almost never fits the first time. The trick: **change only one thing**. Rewrite *sunset* as *neon* and you will see what that word controls.

Then comes checking, because **fluency is not truth**. The picture looks great, and the figure has six fingers, the lettering on the T-shirt is a jumble of letters that only look like writing, and the clock on the wall has thirteen numbers. The model knows what *usually appears* in pictures, not how things really work. With text this is called a **hallucination**: confidently written nonsense. With pictures it is the same.

The same principle also creates **voice** and **video**. A few minutes of recording are enough for a model to speak in your teacher’s voice. A video in which a well-known person says something they never said is a **deepfake**. It looks real because it is probable. Not because it is true.

**Try it!** Take the boring prompt “cat” and rewrite it so it has at least three parameters from the table. If you have a generator to hand, enter both versions and find three differences. Then find one mistake in the pictures that a person wouldn’t make.

**Next in the world of creating with AI:** → [Who will see your video](#svet-tvorba-doporucovac-en)
