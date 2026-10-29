---
id: vyzva-postup-abstrakce-a-model-en
translationOf: vyzva-postup-abstrakce-a-model
lang: en
type: challenge
title: "The robot that goes down every corridor once"
level: 3
minutes: 30
readingTime: 2
standalone: true
teaser: "A cleaning robot has just enough battery to go down every corridor of the school exactly once."
voice: universal
parent: null
diagram: null
core: false
status: accepted
concept: abstrakce-a-model
state: edited
lens: generic
visuality: text-first
depth: standard
formalism: none
lengthBand: deep
carriers: prose
---

A cleaning robot has just enough battery to go down every corridor of the school exactly once. Which way should it go? And is it even possible?

<!-- task -->

The model of the school is a graph. Rooms are nodes, corridors are edges:

**E**ntrance, **C**loakroom, **D**ining hall, **G**ym, **L**ibrary, **S**tudy room.
Corridors: E–C, E–D, C–D, C–G, C–L, D–L, G–L, G–S, L–S.

1. Can the robot set off from the Entrance, go down **every corridor exactly once** and come back to the Entrance? **Prove** your answer; “tried it, it works” is not enough.
2. Where must the robot start and where will it finish to go down every corridor exactly once? Write the whole route.
3. You may build **one** new corridor. Which one, so that the robot can set off from the Entrance and return to it?
4. The model left out the lengths of the corridors, stairs and doors. Why doesn’t that matter for this question? For which question would it matter?

**Success criterion:** a rule that decides without trying, and a route of 9 edges.

<!-- hint -->

For each room, count how many corridors lead out of it.

<!-- hint -->

When the robot just passes through a room, it uses one corridor in and one out. What does that mean for the number of corridors at a room where it neither starts nor finishes?

<!-- hint -->

Only two rooms have an odd number of corridors. They are the key to all three answers.

<!-- solution -->

**Numbers of corridors:** E 2, C 4, D 3, G 3, L 4, S 2.

1. **It can’t be done.** Every time the robot passes through a room, it uses up two corridors. If it started and finished at the Entrance, every room would need an even number of corridors. The Dining hall and the Gym have 3.
2. It starts in the **Dining hall** and finishes in the **Gym** (or the other way round). Route: D → E → C → D → L → C → G → L → S → G. That is all 9 corridors.
3. Corridor **D–G**. Then every room has an even number and a loop from the Entrance works.
4. The question is only “can it be done?”, and that depends only on what is next to what. Lengths would matter for the question “how long will it take?” or “is the battery enough?”.

Leonhard Euler discovered this rule in 1736 with the seven bridges of Königsberg. A graph is the simplest model in which the answer can be proved.

<!-- more -->

Draw a graph of your flat, your school or your housing estate and decide whether you can go round it in one stroke. Then, in the extra game with the turtle, draw the “house in one stroke”: it is the same problem.
