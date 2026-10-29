---
id: vyzva-postup-algoritmus-en
translationOf: vyzva-postup-algoritmus
lang: en
type: challenge
title: "The fake coin in two weighings"
level: 3
minutes: 30
readingTime: 2
standalone: true
teaser: "Ondra has 9 coins in a box that all look the same."
voice: universal
parent: null
diagram: null
core: false
status: accepted
concept: algoritmus
state: edited
lens: generic
visuality: text-first
depth: standard
formalism: light
lengthBand: deep
carriers: prose|formula
---

Ondra has 9 coins in a box that all look the same. One is fake and a tiny bit lighter. You have a balance scale with no weights, and you may weigh only twice. Can it be done? And why can’t it be done in one weighing?

<!-- task -->

Write an algorithm for a robot that can do only three things: **put chosen coins on the left and right pans**, **read the result** (left heavier, right heavier, balance) and **point at one coin**.

1. The algorithm must find the fake coin **for every one** of the 9 possibilities, not just for the one you happen to imagine. Write it as a **decision tree**: each weighing is a fork with three branches, and at the end of each branch there is one coin.
2. Prove that **one weighing is not enough**, however you split the coins.
3. What is the largest number of coins you can tell apart with **three** weighings? Explain why.

**Success criterion:** the tree has 9 ends, each with a different coin, and no path through the tree has more than two weighings. The proofs in points 2 and 3 rely on counting, not on trying.

<!-- hint -->

The scale doesn’t have two results, it has three. Balance is information too.

<!-- hint -->

Don’t weigh half against half. Split the coins into three piles.

<!-- hint -->

Each weighing splits the remaining possibilities into three groups. How many different ends can a tree with two levels have?

<!-- solution -->

**Algorithm:** split the coins into piles A = {1, 2, 3}, B = {4, 5, 6}, C = {7, 8, 9}. Put A on the left and B on the right.
- Left lighter: the fake is in A. Right lighter: it is in B. Balance: it is in C.
- From the chosen three, put the first coin on the left and the second on the right. The lighter side shows the fake coin. If they balance, the fake is the third one.

**Why one weighing is not enough:** a weighing has only 3 possible results, but there are 9 possibilities. Three results cannot point to nine different coins.

**Three weighings:** a tree with three levels has at most 3 × 3 × 3 = **27** ends, so you can handle 27 coins (piles of 9, then of 3, then of 1). In general $$k \text{ weighings} \Rightarrow 3^k \text{ coins}.$$ It is the same idea as searching by halving, only you split into thirds.

<!-- more -->

Harder version: 12 coins, one fake, but **you don’t know whether it is lighter or heavier**. Three weighings are enough. Before you start, count the possibilities: 12 coins × 2 options = 24 cases and 27 tree ends. It fits, but only just, so the first weighing has to be clever. Try 4 against 4.
