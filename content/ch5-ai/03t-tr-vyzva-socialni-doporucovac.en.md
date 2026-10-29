---
id: vyzva-socialni-doporucovac-en
translationOf: vyzva-socialni-doporucovac
lang: en
type: challenge
title: "Build a feed from numbers"
level: 3
minutes: 30
readingTime: 3
standalone: true
teaser: "A feed doesn’t read minds."
voice: universal
parent: svet-socialni-doporucovac-en
diagram: null
core: false
status: accepted
concept: doporucovac
state: edited
lens: socialni
visuality: text-first
depth: standard
formalism: light
lengthBand: deep
carriers: prose|table|formula
---

A feed doesn’t read minds. It counts. Every topic has a score, and the next video goes to the topic with the highest number. Now be the algorithm yourself for a while.

<!-- task -->

The network keeps this table about you for one day:

| Topic | Views | Average watched | Likes | Shares | “Not interested” |
|---|---|---|---|---|---|
| Dogs | 3 | 90 % | 1 | 1 | 0 |
| Football | 4 | 40 % | 2 | 0 | 0 |
| Minecraft | 2 | 100 % | 0 | 0 | 0 |
| Jokes | 5 | 30 % | 0 | 0 | 1 |
| Cooking | 1 | 80 % | 0 | 0 | 0 |

A topic’s score is worked out like this:

$$\text{score} = 10 \cdot \text{views} \cdot \text{watched} + 3 \cdot \text{likes} + 5 \cdot \text{shares} - 15 \cdot \text{“Not interested”}$$

(Write “watched” as a decimal number, 90 % = 0.9.)

1. Work out the score of all five topics and put them in order.
2. How many Minecraft videos do you have to watch all the way through (each one adds one view at 100 %) for Minecraft to overtake dogs? And how many taps on “Not interested” will push football below Minecraft?
3. Tomorrow the feed has 10 slots and the algorithm gives all of them to the winner. Explain why the scores of the other topics will then never change again. Then suggest a way to split the 10 slots that meets three rules: the two best topics get at least 6 slots, every topic with a score above 0 gets at least 1 slot, and 1 slot is for exploring a completely new topic.

<!-- hint -->

Dogs: 10 · 3 · 0.9 = 27, plus 3 for the like and 5 for the share, 35 in total. Do the same for the others.

<!-- hint -->

One full watch adds 10 points to Minecraft. You are looking for the smallest number of videos after which the score is bigger than 35, not just equal.

<!-- hint -->

The network only learns from the videos it shows you. What happens to the data about football if you never get any football?

<!-- solution -->

**1.** Dogs 35, Football 16 + 6 = 22, Minecraft 20, Cooking 8, Jokes 15 − 15 = 0. Order: Dogs, Football, Minecraft, Cooking, Jokes.

**2.** Minecraft needs **2 videos**: after one it has 30 (still less than 35), after two 40. Football needs just **1 tap**: 22 − 15 = 7, which is less than 20. A negative signal weighs more than a positive one, which is why “Not interested” works so fast.

**3.** If you only get dogs, no new rows about football or Minecraft appear in the table. Their scores freeze and dogs keep growing. That is a **bubble**: a loop in which the algorithm keeps proving itself right. One split that works: Dogs 4, Football 3, Minecraft 1, Cooking 1, exploring 1 (4 + 3 = 7 ≥ 6, Jokes have 0 and get nothing, total 10). There are more correct answers: check yours against the three rules. Real networks call this **exploration versus exploitation**.

<!-- more -->

Build a real feed. In SkyFeed, a visual builder for Bluesky (with a parent, through their account), you put together a filter and a sort order and see what it does. If you want to read code, open the starter kit bluesky-social/feed-generator on GitHub: the whole example feed is in the src/algos folder. Then compare it with the X algorithm published in 2023, which ranks things the same way, just with thousands of signals. The extra game “Step through the feed” lets you step through this calculation in code.
