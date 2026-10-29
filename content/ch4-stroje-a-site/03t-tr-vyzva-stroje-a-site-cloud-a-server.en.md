---
id: vyzva-stroje-a-site-cloud-a-server-en
translationOf: vyzva-stroje-a-site-cloud-a-server
lang: en
type: challenge
title: "How many years will your photos last?"
level: 3
minutes: 35
readingTime: 3
standalone: true
teaser: "You have photos on your phone and a copy on an external drive in a drawer."
voice: universal
parent: null
diagram: null
core: false
status: accepted
concept: cloud-a-server
state: edited
lens: generic
visuality: text-first
depth: standard
formalism: none
lengthBand: deep
carriers: prose
---

You have photos on your phone and a copy on an external drive in a drawer. Two copies, so that’s a backup, right? Work it out. The result might surprise you, because two copies in one place can be lost at the same time.

<!-- task -->

Estimated risks for one year:

- **M**: you lose or break your phone: 10%.
- **D**: the external drive at home fails: 2%.
- **C**: you lose your cloud account (forgotten password, account blocked, service error): 1%.
- **H**: your home burns down, floods or is burgled, and everything at home is destroyed, including the phone: 0.5%.

Four strategies: **A** phone only. **B** phone and drive at home. **C** phone and cloud. **D** phone, drive at home and cloud.

1. For each strategy, work out the probability that during the year you lose **all** copies.
2. Turn the results into “once every how many years” and put the strategies in order.
3. Explain why B comes out worse than it seems at first glance.

Treat risks M, D and C as independent. When two independent things have to happen together, you multiply the probabilities. Feel free to round small sums.

**Success criterion:** the order D, C, B, A, numbers of the right size, and in point 3 an explanation of why a fire destroys both copies at once.

<!-- hint -->

Strategy A: you lose the photos if M happens, or H. That’s about 10% + 0.5%.

<!-- hint -->

Strategy B: either H happens (it destroys both copies together), or M happens and D as well. You work out the second option as 0.1 × 0.02.

<!-- hint -->

The cloud is somewhere else, so a fire at home doesn’t touch it. In strategy D you lose everything only with (H and C), or with (M and D and C).

<!-- solution -->

1. **A:** about 10.5%. **B:** 0.5% + 0.1 × 0.02 = 0.5% + 0.2% ≈ **0.7%**. **C:** 0.105 × 0.01 ≈ **0.1%**. **D:** 0.005 × 0.01 + 0.1 × 0.02 × 0.01 = 0.005% + 0.002% ≈ **0.007%**.
2. A once every 10 years or so, B about every 140 years, C about every 1,000 years, D about every 14,000 years. Order from best: D, C, B, A.
3. In strategy B, most of the risk (0.5% of the 0.7%) comes from one single event, H, which destroys both copies **at once**. A second copy in the same place doesn’t help against it. This is called a **common failure**. That’s why there is the **3-2-1** rule: 3 copies, on 2 different kinds of media, 1 of them in another place.

<!-- more -->

Adjust the risks to fit you: how often do you really drop your phone? And what if the cloud company shuts the service down for everyone at once? That’s another common failure. Write your own backup plan in a table and work it out. Engineers calculate how tough data centres are like this: that’s why they keep servers in several buildings and cities.
