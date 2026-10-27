---
id: svet-aplikace-informacni-system-en
translationOf: svet-aplikace-informacni-system
lang: en
type: spine
title: "Who may do what in the class app"
readingTime: 2
standalone: true
teaser: "In the class app for the school trip, can everyone see how much each person paid? Can anyone delete the list? Or only the teacher? That is decided by the design, not by chance."
voice: universal
parent: null
diagram: null
core: false
recallQ: "Why can't you see your classmates' marks in the school system, while your teacher can?"
recallA: "The system gives rights according to roles. The teacher needs the class's marks for their work, a pupil only needs their own. Each role gets only what it needs."
lens: aplikace
visuality: text-first
depth: intro
formalism: none
lengthBand: standard
genre: explainer
status: accepted
concept: informacni-system
state: edited
highlights:
  - "The purpose of the system: what need it serves and what data it keeps"
  - "Roles and access rights (viewer, commenter, editor, administrator)"
  - "The principle of least privilege; an “anyone with the link” link is a risk"
carriers: prose|table
---

In the class app for the school trip, can everyone see how much each person paid? Can anyone delete the list? Or only the teacher? That is decided by the design, not by chance.

An app for a school trip is a small **information system**. It keeps records of data, who is going, who has paid and who has an allergy, and it serves one **purpose**: organising the trip. Before you build it, think through the **roles** and their **access rights**:

| Role | What they may do |
|---|---|
| pupil | sees the programme and their own payment, signs up for the trip |
| parent | sees the payment and allergies of their own child |
| class treasurer | enters payments, sees who hasn’t paid yet |
| teacher (admin) | changes the programme, assigns roles |

The **principle of least privilege** applies: each role gets only what it needs for its job. The treasurer needs the payments, not the allergies. A pupil doesn’t need to see who hasn’t paid. When someone has unnecessary extra rights, each of their mistakes, or a stolen account, does more damage.

The most common hole in small apps is **a link for everyone**: a shared spreadsheet set to “anyone with the link can edit”. Someone forwards the link to another class or posts it in a group on a social network, and suddenly anyone can read and change the list with the allergies. Share with the names of specific people, not with a link.

And a second question: what data to **keep records of** at all. The trip leader needs the allergies, nobody needs a national ID number. What the app doesn’t collect can’t leak.

**Try it!** Pick an app or a shared document your class uses. Who has which role in it? Does anyone have more rights than they need?

**Next in the world of apps:** → [The app says you walk less](#svet-aplikace-z-dat-informace-en)
