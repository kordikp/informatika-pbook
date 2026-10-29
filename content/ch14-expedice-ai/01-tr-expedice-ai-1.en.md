---
id: expedice-ai-1-en
translationOf: expedice-ai-1
lang: en
type: spine
title: "The model scores 83%. For whom?"
readingTime: 1
standalone: false
teaser: "Overall accuracy can hide where a model fails."
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
concept: expedice-ai-1
conceptTitle: "The model scores 83%. For whom?"
objective: "Overall accuracy can hide where a model fails."
state: edited
carriers: prose|table
---

**🧩 Challenge** · step 1 of 5 · [The bird feeder model](#expedice-ai-en)

Overall accuracy can hide where a model fails. That’s why results are written into a **confusion matrix**. The rows say who was really in the photo. The columns say what the model guessed.

| reality ↓ / model → | tit | sparrow | blackbird |
|---|---|---|---|
| tit (10 photos) | 9 | 1 | 0 |
| sparrow (10 photos) | 4 | 6 | 0 |
| blackbird (10 photos) | 0 | 0 | 10 |

Tasks:
1. Check that the overall accuracy really is about 83%. The numbers the model got right lie on the diagonal.
2. Work out the accuracy for each kind of bird separately.
3. Which bird does worst, and what does the model confuse it with?
4. Ema admits she only photographed the sparrows in summer, from the side, and there were 15 of them against 60 photos of tits. Suggest **two** changes to the training data that will most likely reduce the error. For each one, write why.

**Success criterion:** you have all three accuracies, you know where the error comes from, and both changes target a specific gap in the data, not “more photos in general”.

Real models are checked like this all the time. For a model that makes decisions about people, a gap of 90% against 60% between two groups is a big problem, even if the whole looks great.

:::reveal 🔑 Solution
25/30 ≈ 83%. Tit 9/10 = 90%, sparrow 6/10 = 60%, blackbird 10/10 = 100%. The sparrow gets confused with the tit (4×). A good fix: more photos of sparrows from different sides and in winter, the same number of photos for each kind, and test photos from a different day than the training ones.
:::

**Next step:** [Workshop: your first model in 30 minutes](#expedice-ai-2-en)
