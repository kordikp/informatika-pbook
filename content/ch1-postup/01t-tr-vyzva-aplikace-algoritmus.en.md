---
id: vyzva-aplikace-algoritmus-en
translationOf: vyzva-aplikace-algoritmus
lang: en
type: challenge
title: "Fewest transfers"
level: 3
minutes: 30
readingTime: 3
standalone: true
teaser: "A bill-splitting app suggests four transfers."
voice: universal
parent: svet-aplikace-algoritmus-en
diagram: null
core: false
status: accepted
concept: algoritmus
state: edited
lens: aplikace
visuality: text-first
depth: standard
formalism: none
lengthBand: deep
carriers: prose|table
---

A bill-splitting app suggests four transfers. Can it be done in three? And how do you know two is definitely not enough?

<!-- task -->

After a trip to the water park, these balances came out. A positive number means the others owe you; a negative one means you owe.

| Who | Balance |
|---|---|
| Ema | +600 CZK |
| Tomáš | +500 CZK |
| Ondra | −500 CZK |
| Jana | −400 CZK |
| Petr | −200 CZK |

The app uses a **greedy method**: it takes the person who owes the most, and they send as much as they can to the person who is owed the most. It recalculates the balances and repeats until everyone is at zero.

1. Go through the greedy method step by step. How many transfers do you get?
2. Find a solution with fewer transfers.
3. Prove that two transfers are not enough.
4. Find the rule: n people can be split into at most k groups, each with a balance total of zero. What is the smallest number of transfers needed?

**Success:** you have a solution with three transfers, you can explain why fewer is impossible, and you have the formula from point 4.

<!-- hint -->

Greedy: Ondra (−500) sends to Ema (+600). Ema then has +100 left. Carry on with Jana and Tomáš and keep track of who has what left.

<!-- hint -->

Look for a pair or a trio of people whose balances add up to exactly zero. A group like that can settle up among themselves and doesn’t need anything to do with the others.

<!-- hint -->

Draw people as dots and transfers as lines. What is the smallest number of lines you need to connect m dots? And what balance total must each connected part have?

<!-- solution -->

**Greedy gives 4 transfers:** Ondra → Ema 500 CZK (Ema has +100 left), Jana → Tomáš 400 CZK (Tomáš has +100 left), Petr → Ema 100 CZK and Petr → Tomáš 100 CZK.

**3 are enough:** Ondra → Tomáš 500 CZK, Jana → Ema 400 CZK, Petr → Ema 200 CZK. Tomáš and Ondra form a group with a total of zero (+500 − 500), and so does everyone else (+600 − 400 − 200).

**Why not 2:** the transfers form a network. Every connected part of the network must have a balance total of zero, or someone in it would stay in the minus. A part with m people needs at least m − 1 transfers. Two transfers between five people leave at least three separate parts. One of them would have to be a single person, and that person would need a balance of zero. Nobody here has that.

**The rule:** fewest transfers = n − k. But finding the largest k is hard: for 30 people there are over 8 × 10²³ ways to split them into groups. That’s why apps use the greedy method and only promise there won’t be more than n − 1 transfers.

<!-- more -->

Make up balances for six people where the greedy method loses. By how much can it lose at most? Then write a program in App Inventor or Python that tries every way to split a small number of people into groups and finds the best one. Compare it with how the open-source app [Spliit](https://github.com/spliit-app/spliit) suggests settling up.
