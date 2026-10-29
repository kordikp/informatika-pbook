---
id: vyzva-bezpeci-ochrana-zarizeni-en
translationOf: vyzva-bezpeci-ochrana-zarizeni
lang: en
type: challenge
title: "How much a backup really gives you"
level: 3
minutes: 35
readingTime: 3
standalone: true
teaser: "“I’ve got a backup” sounds reassuring."
voice: universal
parent: null
diagram: null
core: false
status: accepted
concept: ochrana-zarizeni
state: edited
lens: generic
visuality: text-first
depth: standard
formalism: none
lengthBand: deep
carriers: prose
---

“I’ve got a backup” sounds reassuring. Work out how much protection that sentence really means.

<!-- task -->

You have a laptop with all your projects. In one year, this can happen:

- **disk failure**: 5 %, for each device separately;
- **ransomware**: 10 %, encrypts everything connected to the computer at that moment;
- **fire or burglary at home**: 1 %, destroys everything at home.

The events are independent of each other. Compare three strategies:

- **A**: just the laptop, no backup;
- **B**: laptop + a backup disk that is **permanently connected** by a cable;
- **C**: laptop + a disk that you **unplug** and put away after backing up, + a copy in the cloud with **version history**.

1. For A and B, work out the probability that the data disappear completely within a year. For B, assume two disks don’t die at once (if one fails, it’s restored from the other).
2. Why is C almost zero? What would all have to happen for the data to disappear?
3. Trap: the cloud only **syncs**, with no version history. What does ransomware do to the cloud? Work out how the risk for C changes.
4. Even with strategy C you lose something. What, and how can you influence it?

**Success criterion:** the right percentages for A, B and for C with syncing, plus one sentence for each question.

<!-- hint -->

It’s easier to work out that **nothing** happens. The probabilities of independent events not happening are multiplied. Then subtract the result from 1.

<!-- hint -->

For B, ask yourself for each event: does it destroy both copies, or only one?

<!-- hint -->

Syncing copies every change. Even the bad one.

<!-- solution -->

1. **A**: nothing happens with a probability of 0.95 · 0.90 · 0.99 ≈ 0.846. So the loss is **about 15.4 %**, roughly once every 6–7 years. **B**: disk failure no longer matters, but ransomware and fire both destroy both copies: 1 − 0.90 · 0.99 = 0.109, so **about 10.9 %**. The connected backup hardly helped.

2. With C, ransomware can’t reach the unplugged disk and a fire doesn’t destroy the cloud. The data only disappear if all three places fail in independent ways: for example a fire at home and on top of that someone steals the cloud account and deletes the versions. That’s why the cloud has a strong password and 2FA.

3. The encrypted files are uploaded to the cloud and overwrite the good versions. The cloud behaves like a connected disk. You lose everything if ransomware and a fire both come in the same year: 0.10 · 0.01 = **0.1 %**. Still small, but a hundred times more than necessary. Version history closes this hole.

4. You lose everything created **since the last backup**. How often you back up is the most you can lose.

<!-- more -->

The **3-2-1** rule: 3 copies, on 2 different kinds of media, 1 away from home. Design a backup for the whole family (watch out for the photos on phones) and work it out with the same model. Then add a risk of your own, for example losing your phone at school, and estimate its probability.
