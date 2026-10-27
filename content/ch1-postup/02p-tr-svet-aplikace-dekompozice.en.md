---
id: svet-aplikace-dekompozice-en
translationOf: svet-aplikace-dekompozice
lang: en
type: spine
title: "An app on paper"
readingTime: 1
standalone: true
teaser: "You want an app for your class: duties, a vote on the school trip, collecting money, a chat and the timetable. If you start everything at once, you finish nothing."
voice: universal
parent: null
diagram: null
core: false
recallQ: "How would you break down the task “organise a class trip”, and why does the order of the parts matter?"
recallA: "Into smaller tasks: goal and budget, place, transport, programme, sign-ups. Some depend on others: you book transport only after you have chosen the place and know how many people are coming."
lens: aplikace
visuality: visual-first
depth: intro
formalism: none
lengthBand: standard
genre: worked-example
status: accepted
concept: dekompozice
state: edited
highlights:
  - "The task: starting point, goal, limits"
  - "Smaller tasks and how they depend on each other (what has to be done first)"
  - "A named smaller task is a subprogram (function) in code"
carriers: prose|image
---

You want an app for your class: duties, a vote on the school trip, collecting money, a chat and the timetable. If you start everything at once, you finish nothing.

First the **brief**. **Starting point:** duties are written in chalk on the board, and every week somebody forgets theirs. **Goal:** every morning everyone sees on their phone which duty they have. **Constraints:** free, one week of work, and it has to work on every phone in the class.

Then you **break** the app **down** into parts you can handle one at a time. With apps these are usually **screens** and what happens on them: login, an overview of duties, swapping a duty, settings. Each one is a **subtask**.

![The duties app broken down into screens and their dependencies](images/svet-aplikace-obrazovky.en.svg)

**Dependencies** set the order. The overview of duties can’t be shown until the app knows who you are (login) and who has which duty when (the list). Swapping a duty needs the overview. That is why you first build **the smallest version that is good for something**: the list, the login and the overview. The vote and the chat can wait. That first version is called an MVP, a minimum viable product.

What repeats, you **give a name** and use more than once. The card *name · duty · day* is shown both by the overview and by the duty swap. You write it once, in code as a **subroutine** *showCard(pupil)*, and both screens just call it. When you change the card, it changes everywhere.

**Try it!** Think of an app that would be useful to you. Break it down into screens and circle the ones without which it makes no sense. That is your first version.

**Next in the world of apps:** → [A traffic light with a hidden bug](#svet-aplikace-over-a-oprav-en)
