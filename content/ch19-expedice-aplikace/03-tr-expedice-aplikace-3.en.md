---
id: expedice-aplikace-3-en
translationOf: expedice-aplikace-3
lang: en
type: spine
title: "How many people are enough for a test"
readingTime: 2
standalone: false
teaser: "A usability test means that someone who doesn’t know the app gets a task (for example, “record an expense of 150 CZK for the bus”) and you just watch silently …"
voice: universal
parent: null
diagram: null
core: false
lens: generic
visuality: text-first
depth: standard
formalism: light
lengthBand: standard
genre: explainer
status: accepted
concept: expedice-aplikace-3
conceptTitle: "How many people are enough for a test"
objective: "A usability test means that someone who doesn’t know the app gets a task (for example, “record an expense of 150 CZK for the bus”) and you just watch silently …"
state: edited
carriers: prose|formula
---

**🧩 Challenge** · step 3 of 5 · [An appathon in one weekend](#expedice-aplikace-en)

A **usability test** means that someone who doesn’t know the app gets a task (for example, “record an expense of 150 CZK for the bus”) and you just watch silently to see where they hesitate. You don’t give advice, you don’t point, you just take notes.

The researcher Jakob Nielsen compared dozens of these tests. He found that one tester on average runs into 31 % of an app’s problems. Further testers then mostly run into the same problems as the first ones, and only now and then into a new one. The share of problems found after n testers is roughly

$$P(n) = 1 - (1 - 0.31)^n$$

1. Work out P(1), P(3), P(5), P(10) and P(15). The calculator on your phone is enough.
2. How many percent more problems does the tenth tester find than the ninth? Why so few?
3. You have 15 testers. Is one big test with fifteen people better, or three rounds of five, where you fix the bugs between rounds? Back it up with numbers and with common sense.
4. When does the formula stop working? Find at least two situations. Hint: who are your testers, and are they similar to each other?

**Success:** you have a table of five values, a decision for point 3 and two real limits of the formula. Then run the first round of the test with three people from the club and note down every hesitation.

:::reveal 🔑 Solution
P(1) = 31 %, P(3) ≈ 67 %, P(5) ≈ 84 %, P(10) ≈ 98 %, P(15) ≈ 99.6 %. The tenth tester adds only about 1 %, because the testers before them saw most of the problems. Three rounds of five win: after fixing, you test a new version and also find bugs the fix added, and ones that were hidden behind the first ones. The formula doesn’t fit when the testers are too similar (all friends from the club) or when different groups use the app (leaders and kids). Then test five people from each group. Ema is right, but only half right.
:::

**Next step:** [Find your appathon](#expedice-aplikace-4-en)
