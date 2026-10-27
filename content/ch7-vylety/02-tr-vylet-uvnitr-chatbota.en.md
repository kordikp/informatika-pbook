---
id: vylet-uvnitr-chatbota-en
translationOf: vylet-uvnitr-chatbota
lang: en
type: spine
title: "Trip: Inside a chatbot"
readingTime: 2
standalone: true
teaser: "You'll see how a chatbot works on the inside. Four steps and then back to the core of the book."
voice: universal
parent: null
diagram: null
core: false
recallQ: "A chatbot has its temperature set to zero. Does that mean it tells the truth?"
recallA: "No, it just always picks the most likely word. Yes. Temperature changes how much it takes risks, not how true it is."
lens: generic
visuality: text-first
depth: standard
formalism: none
lengthBand: standard
genre: explainer
status: accepted
concept: vylet-uvnitr-chatbota
conceptTitle: "Inside a chatbot"
objective: "You'll see how a chatbot works on the inside. Four steps and then back to the core of the book."
state: edited
highlights:
  - "Words are numbers too, just as in encoding."
  - "Still just a prediction. The temperature says how much it takes risks."
  - "An answer with a source can be checked. Whether you do it is up to you: you decide."
  - "Seeing isn't believing. Scams bet on exactly this."
carriers: prose
---

You'll see how a chatbot works on the inside. Four steps and then back to the core of the book.

### Tokens

The model doesn't read letters. First the text is chopped into pieces called **tokens**. They are usually whole words or parts of words. The sentence “The chatbot doesn't read letters.” might fall apart into *The · chat · bot · doesn · 't · read · letters · .* and each piece has its own number. The model only calculates with numbers.

> **Back to the core:** Words are numbers too, just as in [encoding](#c/kodovani).

### Temperature

For each next word the model knows the probabilities. The **temperature** decides how much it takes risks. At zero it always picks the most likely word, so with Karel Vrba it's *Shadows* every time. The higher the temperature, the more often it also reaches for a less likely one: *House*, *Willow*, *Silence*. The answers are more varied, but also more often off the mark.

> **Back to the core:** Still just a prediction. The temperature says how much it takes risks.

### A library and sources

Some chatbots can **search documents** or the web before answering and attach a source. The technical name for this is RAG. Without a library the chatbot answers: “Karel Vrba from Kolín wrote the novel Shadows over the Elbe (1987).” With a library it searches the catalogue first: “I couldn't find an author called Karel Vrba from Kolín in the catalogue. Do you mean a different name?” An answer with a source can be checked. Careful: even a chatbot like that can summarise the source badly.

> **Back to the core:** An answer with a source can be checked. Whether you do it is up to you: [you decide](#c/rozhodujes-ty).

### Pictures out of noise

An image generator starts from random noise and, step by step, guesses what a cleaner picture should look like. After a few steps a shape emerges from the noise, after more steps the details. Fake voices and videos, **deepfakes**, are made by the same kind of prediction.

> **Back to the core:** Seeing isn't believing. [Scams](#c/podvod-cili-na-cloveka) bet on exactly this.

**Back to the book:** this trip belongs to the section [Generative AI predicts](#c/generativni-model). Carry on with the section [The recommender and your feed](#c/doporucovac).
