---
id: vyzva-ai-doporucovac-en
translationOf: vyzva-ai-doporucovac
lang: en
type: challenge
title: "Recommend like a social network and find the video nobody will see"
level: 3
minutes: 35
readingTime: 3
standalone: true
teaser: "The feed in the book recommends things based on what you watch."
voice: universal
parent: null
diagram: null
core: false
status: accepted
concept: doporucovac
state: edited
lens: generic
visuality: text-first
depth: standard
formalism: none
lengthBand: deep
carriers: prose|table
---

The feed in the book recommends things based on what you watch. Big networks also look at people who are similar to you. You’ll work it out by hand, step by step, and run into a video this algorithm will never show to anyone.

<!-- task -->

Who watched what to the end (✓):

| | V1 Minecraft build | V2 Football tricks | V3 Guitar for beginners | V4 Rocket experiment | V5 Speedrun | V6 New video (an hour old) |
|---|---|---|---|---|---|---|
| **you** | ✓ | | | ✓ | ✓ | |
| A | ✓ | ✓ | | | ✓ | |
| B | | | ✓ | ✓ | | |
| C | ✓ | | ✓ | ✓ | ✓ | |
| D | | ✓ | ✓ | | | |

The **similar users** rule: your similarity with someone = the number of videos you both watched to the end. The score of a video you haven’t watched yet is the sum of the similarities of everyone who watched it to the end.

1. Work out your similarity with A, B, C and D.
2. Work out the scores of V2, V3 and V6. Which two videos will the network recommend to you, and in what order?
3. V6 was uploaded an hour ago by a classmate. Why will this rule never recommend it to anyone, even if it’s brilliant? Suggest a change. **Criterion:** the change must give a chance even to a video with zero views, and most of the feed stays based on similarity.

<!-- hint -->

You share the videos V1, V4 and V5 with user C, so the similarity is 3.

<!-- hint -->

B, C and D all watched V3 to the end. Add up their similarities with you.

<!-- hint -->

How many people watched V6 to the end? And how could anyone watch it to the end if it isn’t shown to anyone?

<!-- solution -->

**1.** A: 2 (V1, V5). B: 1 (V4). C: 3 (V1, V4, V5). D: 0.

**2.** V3: B 1 + C 3 + D 0 = **4**. V2: A 2 + D 0 = **2**. V6: **0**. Recommendations: first V3 (guitar), then V2 (football). Notice: none of your searches was ever about guitar. The network offers it to you only because people with similar taste like it.

**3.** Nobody has watched V6 to the end, so it has a score of 0 for every user. If it isn’t shown to anyone, nobody watches it to the end and the score stays 0 for ever. That’s the **cold start** problem, and a feedback loop at the same time. A good change meets the criterion, for example: “Every 5th place in the feed gets a random video less than a day old.” Or: “A new video starts with the score of an average video until it collects its first 50 views.” Both work with zero views, and 4 out of 5 places stay based on similarity.

<!-- more -->

User C watches almost everything to the end, so they come out similar to everyone. Try a fairer measure: the number of shared videos divided by the number of videos at least one of you watched to the end. Does the order change? The dilemma “show a sure thing, or try something new” has a name in computer science: **explore vs. exploit**. Decide what percentage of the feed goes to exploring in your design, and defend it. Why does it make money for the network, and why is it good for you?
