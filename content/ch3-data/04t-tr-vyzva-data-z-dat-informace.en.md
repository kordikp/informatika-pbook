---
id: vyzva-data-z-dat-informace-en
translationOf: vyzva-data-z-dat-informace
lang: en
type: challenge
title: "Better on every map, worse overall"
level: 3
minutes: 35
readingTime: 2
standalone: true
teaser: "The leaderboard shows that player A wins 67% of matches and player B only 35%."
voice: universal
parent: null
diagram: null
core: false
status: accepted
concept: z-dat-informace
state: edited
lens: generic
visuality: text-first
depth: standard
formalism: none
lengthBand: standard
carriers: prose|table
---

The leaderboard shows that player A wins 67% of matches and player B only 35%. Obvious. But when you look at the maps one by one, B is better on **both**. How is that possible?

<!-- task -->

The game has two maps: an easy one and a hard one. The statistics:

| | easy map | hard map |
|---|---|---|
| player A | 90 wins out of 100 | 10 wins out of 50 |
| player B | 19 wins out of 20 | 30 wins out of 120 |

1. Work out the success rate of both players on each map separately and overall.
2. Explain in one or two sentences how B can be better on both maps and still worse overall. What is the **hidden third thing**?
3. Design a **fair comparison** and work it out.
4. Make up **your own** data (for example two classes taking an easy and a hard test) where the same flip happens. **Criterion:** one group is better in both categories and worse overall.

<!-- hint -->

Success rate = wins / matches. Work out the overall rate from the totals, not as the average of two percentages.

<!-- hint -->

Look at how many matches each player played on which map. Who mostly plays the hard map?

<!-- hint -->

It is fair to compare both players with the same mix of maps, for example half and half.

<!-- solution -->

**1.** A: easy 90%, hard 20%, overall 100/150 = **66.7%**. B: easy 95%, hard 25%, overall 49/140 = **35%**.

**2.** B mostly plays the **hard map** (120 of 140 matches), A mostly the easy one. So the overall percentage doesn’t measure skill, but mainly **which map each player plays**. This is called **Simpson’s paradox**: a hidden third thing (the map) flips the result when you add the groups together.

**3.** With the same 50 : 50 split: A = (90 + 20) / 2 = **55%**, B = (95 + 25) / 2 = **60%**. B is the better player.

**4.** An example: in class X, 9 of 10 children pass the easy test (90%) and 6 of 20 the hard one (30%), overall 15/30 = 50%. In class Y, 16 of 20 pass the easy one (80%) and 2 of 10 the hard one (20%), overall 18/30 = 60%. X is better in both tests, Y overall. Any data that meet the criterion are correct.

The same flip really happened in medicine (treating kidney stones) and in university admissions.

<!-- more -->

Open [CODAP](https://codap.concord.org/), enter your data and make a graph of success rates split by map. Then try the graph without the split. Which one would stand up in an honest leaderboard? And have a look at [Spurious Correlations](https://www.tylervigen.com/spurious-correlations): find a pair where the link is most likely down to a third thing, not chance.
