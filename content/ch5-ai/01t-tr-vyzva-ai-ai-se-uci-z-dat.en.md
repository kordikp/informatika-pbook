---
id: vyzva-ai-ai-se-uci-z-dat-en
translationOf: vyzva-ai-ai-se-uci-z-dat
lang: en
type: challenge
title: "Be the nearest neighbour"
level: 3
minutes: 35
readingTime: 3
standalone: true
teaser: "The fruit recogniser in the book only looks at colour."
voice: universal
parent: null
diagram: null
core: false
status: accepted
concept: ai-se-uci-z-dat
state: edited
lens: generic
visuality: text-first
depth: standard
formalism: light
lengthBand: deep
carriers: prose|table|formula
---

The fruit recogniser in the book only looks at colour. Real models track several features at once. Now you’ll work out one such model with a pencil, find where it fails and fix it with a single example.

<!-- task -->

Each fruit is described by two numbers: **redness** (0 = green, 10 = deep red) and **diameter** in cm.

| training example | kind | redness | diameter |
|---|---|---|---|
| A1 | apple | 9 | 7 |
| A2 | apple | 8 | 8 |
| A3 | apple | 9 | 6 |
| H1 | pear | 3 | 9 |
| H2 | pear | 4 | 10 |
| T1 | cherry | 10 | 2 |
| T2 | cherry | 9 | 2 |

The **nearest neighbour** model gives a new fruit the kind of the example closest to it. Work out the distance without the square root:

$$d = (\Delta\,\text{redness})^2 + (\Delta\,\text{diameter})^2$$

Test fruits (the model has never seen them): **X1** green apple (2, 7), **X2** small apple (8, 5), **X3** cherry (10, 3), **X4** pear (5, 9).

1. Work out what the model says for X1–X4, and calculate the accuracy.
2. A friend suggests: “I’ll test it on the training data instead, it’ll come out better there.” What accuracy will they measure, and why is it cheating?
3. Add **one** example to the training data so that all four tests come out right. Check by calculation that you didn’t break anything else.

<!-- hint -->

For X1, work out d to all seven examples. For example, for H1: (2 − 3)² + (7 − 9)² = 1 + 4 = 5. The smallest number wins.

<!-- hint -->

How far is a training example from itself? What does that mean for a test on the training data?

<!-- hint -->

The model gets X1 wrong because it has never seen a green apple. Where in the table should the new example fall so that it is closer to X1 than H1 (d = 5) and further from the pear X4 than H2 (d = 2)?

<!-- solution -->

**1.** X1: nearest is H1 (d = 5), A1 has 49, A3 has 50 → the model says **pear**, wrong. X2: nearest is A3 (d = 1 + 1 = 2) → apple, right. X3: T1 (d = 0 + 1 = 1) → cherry, right. X4: H2 (d = 1 + 1 = 2), H1 has 4 → pear, right. Accuracy **3 out of 4 = 75%**.

**2.** Always **100%**. Every example is nearest to itself, with d = 0, so the model is only “remembering”. It tells you nothing about new fruit. That’s why you test on data the model didn’t see during training.

**3.** For example, a green apple **(2, 6)** is enough. X1 has d = 0 + 1 = 1 < 5 to it → apple. X4: d = 9 + 9 = 18, H2 stays closer (2). X2: d = 36 + 1 = 37, A3 stays (2). X3 doesn’t change. Any apple works if its d to X1 is less than 5, it is further than 2 from X4 and further than 2 from X2. Result: 4 out of 4. The model wasn’t stupid, it was missing data.

<!-- more -->

Measure the diameter in **millimetres** instead of centimetres and work out X1 again (without the added example). Suddenly it comes out as an apple. Not because the model got wiser: the distance is now almost all size, and colour gets lost. That’s why data is **normalised** before learning, converted to the same scale. Then try the **3 nearest neighbours** rule (voting) and find a fruit where 1 and 3 neighbours give a different result. You can try the same thing on your own photos in [Teachable Machine](https://teachablemachine.withgoogle.com/): train a model that is missing something on purpose, and measure where it fails.
