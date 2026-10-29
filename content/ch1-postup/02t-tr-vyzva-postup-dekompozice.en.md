---
id: vyzva-postup-dekompozice-en
translationOf: vyzva-postup-dekompozice
lang: en
type: challenge
title: "Game jam: how many more people will help?"
level: 3
minutes: 35
readingTime: 3
standalone: true
teaser: "At a weekend game jam your team has to build a game."
voice: universal
parent: null
diagram: null
core: false
status: accepted
concept: dekompozice
state: edited
lens: generic
visuality: text-first
depth: standard
formalism: none
lengthBand: deep
carriers: prose|table
---

At a weekend game jam your team has to build a game. Tomáš says: “The more of us there are, the sooner it’ll be done.” Is that true? And from how many people does it stop being true?

<!-- task -->

The game is made of seven tasks. Each task is done **by one person from start to finish**; it can’t be split.

| Task | Hours | Must be done first |
|---|---|---|
| I Idea | 1 | nothing |
| S Script | 3 | I |
| G Graphics | 4 | I |
| C Code for movement | 2 | I |
| L Levels | 3 | S, C |
| A Audio (sounds) | 2 | S |
| T Testing | 2 | G, L, A |

1. How many hours does it take **one person**?
2. What is the fastest **three people** can do it? Write a schedule: who does what, from when to when.
3. What is the fastest **two people** can do it? Write a schedule and **prove** that it can’t be done faster.
4. Why doesn’t a **fourth person** speed anything up?

**Success criterion:** four numbers, two schedules that respect the dependencies, and reasons for points 3 and 4.

<!-- hint -->

Draw the tasks as a graph: an arrow starts at the task that must be done first. Find the longest chain of arrows and add up its hours.

<!-- hint -->

Testing has to come at the very end and takes 2 hours. Everything else must be done before it.

<!-- hint -->

With two people: only one works on the Idea, the other waits. How many hours of work are left before Testing, and how much is that per person? Then check whether the work can be split with no waiting at all.

<!-- solution -->

1. **17 hours**, a simple sum.
2. **9 hours.** Schedule: 0–1 I. Person 1: S 1–4, L 4–7. Person 2: C 1–3, A 4–6. Person 3: G 1–5. T 7–9. It can’t be faster, because the chain **I → S → L → T** takes 1 + 3 + 3 + 2 = 9 hours. That is the **critical path**.
3. **11 hours.** Schedule: Person 1: I 0–1, S 1–4, L 4–7, A 7–9. Person 2: C 1–3, G 3–7. T 9–11. **Proof:** before T there are 15 hours of work. In the first hour only one person works, so the other 14 hours would have to be split 7 + 7 with no waiting at all, and T would start at 8. Splitting 14 into 7 + 7 works in only two ways: {S, G} and {C, L, A}, or {G, L} and {S, C, A}. In the first, the second person waits for the Script before starting Levels or Audio. In the second, Levels can’t start before 6, because the other person does both S and C. Either way, T starts at 9 at the earliest.
4. The critical path takes 9 hours and three people already manage it. A fourth person would just wait.

<!-- more -->

Builders and film-makers plan like this too: the critical path method. Add a task “Game menu” to the table (2 hours, depends on G) and find out whether the critical path changes. Then plan a real weekend project with friends and compare the plan with what really happened.
