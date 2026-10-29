---
id: vyzva-bezpeci-digitalni-stopa-en
translationOf: vyzva-bezpeci-digitalni-stopa
lang: en
type: challenge
title: "Three innocent traces, one person"
level: 3
minutes: 25
readingTime: 3
standalone: true
teaser: "A nickname, a photo and a birthday post."
voice: universal
parent: null
diagram: null
core: false
status: accepted
concept: digitalni-stopa
state: edited
lens: generic
visuality: text-first
depth: standard
formalism: none
lengthBand: deep
carriers: prose
---

A nickname, a photo and a birthday post. None of them gives anything away on its own. Together, maybe they do. Work it out.

<!-- task -->

**50,000 people** live in a town. To keep it simple, assume birth years are spread evenly over 80 years, the town has 10 primary schools of the same size, and birthdays fall equally often on each of the 365 days.

Someone publishes three traces, each in a different place:

1. the nickname **kocour_2013** in a game (gives away the year of birth),
2. a photo in a hoodie with the school’s name,
3. a post saying “It’s my birthday today!” with the date.

The **anonymity set** is the number of people who match everything you know about someone. The smaller it is, the easier it is to find the person. When it drops below 5, the person can practically be tracked down.

- **a)** Work out the size of the anonymity set after each trace, in the order 1, 2, 3.
- **b)** You may delete **one** trace. Which one, so that the set stays as large as possible? Work out all three options and explain the result.
- **c)** The model is simplified. Find one thing that makes the set even smaller in reality.

**Success criterion:** the right numbers in a) and b) and one concrete reason in c).

<!-- hint -->

Each trace divides the set: the year of birth by eighty, the school by ten, the birthday by three hundred and sixty-five.

<!-- hint -->

In b) the order of the traces doesn’t matter. Work out what’s left when one of the divisions is missing.

<!-- hint -->

In c) think about what else a photo shows, and how many children of the same year go to one school.

<!-- solution -->

**a)** After trace 1: 50,000 ÷ 80 = **625** people. After trace 2: 625 ÷ 10 ≈ **62**, that’s about two or three classes. After trace 3: 62.5 ÷ 365 ≈ **0.17**. A number smaller than 1 means that such a person is **most likely the only one** in town.

**b)** Without the birthday: 50,000 ÷ 80 ÷ 10 ≈ **62**. Without the year: 50,000 ÷ 10 ÷ 365 ≈ **14**. Without the school: 50,000 ÷ 80 ÷ 365 ≈ **1.7**. The best is to remove the **birthday date**: it divides the most, because it has the most possible values. The most innocent trace of all is the most treacherous. And remember: deleted doesn’t mean gone, so the best thing is never to publish it at all.

**c)** For example: the photo shows a face, friends and a place; only a few classes from the same year go to the school, so it’s enough to ask; a nickname is often the same in several games. Researchers showed that most Americans are uniquely identified by just three facts: ZIP code, date of birth and sex.

<!-- more -->

Do the same calculation for yourself: what do your nicknames, profiles and photos give away? Only work it out on paper and don’t publish it anywhere. Find out what **k-anonymity** is: it’s how data in health statistics, for example, are protected. And in your phone’s camera settings, find out whether your photos save your location.
