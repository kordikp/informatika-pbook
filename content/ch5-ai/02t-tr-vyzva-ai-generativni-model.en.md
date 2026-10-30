---
id: vyzva-ai-generativni-model-en
translationOf: vyzva-ai-generativni-model
lang: en
type: challenge
title: "A language model from three sentences"
level: 3
minutes: 40
readingTime: 3
standalone: true
teaser: "You’ll build your own language model."
voice: universal
parent: null
diagram: null
core: false
status: accepted
concept: generativni-model
state: edited
lens: generic
visuality: text-first
depth: standard
formalism: none
lengthBand: deep
carriers: prose|table
---

You’ll build your own language model. It learns from just three true sentences, and yet it confidently writes something false. Then you’ll work out how likely that is, and find out what would save it.

<!-- task -->

Training text:

> Prague is the capital of Czechia. Vienna is the capital of Austria. Brno is the second largest city of Czechia.

Your model only ever sees **one previous word**. The probability of the next word is how many times it follows in the text, divided by how many times the previous word appeared.

1. Work out the probabilities of the words after “the” and after “of”.
2. The model starts with the word “Vienna” and keeps writing until it writes the name of a country. It always picks the most likely word. What sentence does it write? Is it true?
3. Now the model **draws at random** according to the probabilities. List all the sentences it can write and work out their probabilities. What is the chance it writes the truth about Vienna?
4. How many previous words would the model have to see so that, in the last step of the most likely sentence, it knows it’s about Vienna?

<!-- hint -->

The word “the” appears three times in the text. Twice it is followed by “capital”. After “capital” and after “city” always comes “of”.

<!-- hint -->

The probability of a whole sentence is the **product** of the probabilities of the individual steps. There are four possible sentences, and their probabilities add up to 1.

<!-- hint -->

When the model picks the last word, it only sees “of”. How many words back is “Vienna”?

<!-- solution -->

**1.** After “the”: capital 2/3, second 1/3. After “of”: Czechia 2/3, Austria 1/3.

**2.** “Vienna is the capital of **Czechia**.” False, even though every step was the most likely one. That’s a hallucination in miniature: smooth and confident, but nobody checked it.

**3.**
| sentence | calculation | probability |
|---|---|---|
| Vienna is the capital of Czechia | 2/3 · 2/3 | 4/9 |
| Vienna is the capital of Austria | 2/3 · 1/3 | 2/9 |
| Vienna is the second largest city of Czechia | 1/3 · 2/3 | 2/9 |
| Vienna is the second largest city of Austria | 1/3 · 1/3 | 1/9 |

Only the second sentence is true (Vienna is the largest, not the second largest). The chance of the truth is **2/9 ≈ 22%**.

**4.** **Five** words: “Vienna is the capital of”. That group of five appears in the text only once, and it is followed by “Austria”. So a longer context helps, but then the model mostly repeats sentences it has learnt and needs far more data.

<!-- more -->

Real models see thousands of previous tokens, and a mechanism called **attention** tells them which of those to look at. That’s why they remember “Vienna”. But hallucinations don’t disappear: when a fact is missing from the data or is rare, the likely continuation still doesn’t have to be true. Write this model as a program in Scratch or Python and feed it a longer text, such as a fairy tale. Then take a look inside the real GPT-2 in [Transformer Explainer](https://poloclub.github.io/transformer-explainer/) (in English) and find where it shows the probabilities of the next token.
