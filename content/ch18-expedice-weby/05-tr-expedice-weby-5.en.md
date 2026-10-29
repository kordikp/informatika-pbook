---
id: expedice-weby-5-en
translationOf: expedice-weby-5
lang: en
type: spine
title: "Your website under 100 kB"
readingTime: 1
standalone: false
teaser: "What to build: anything you enjoy."
voice: universal
parent: null
diagram: null
core: false
lens: generic
visuality: text-first
depth: standard
formalism: none
lengthBand: standard
genre: explainer
status: accepted
concept: expedice-weby-5
conceptTitle: "Your website under 100 kB"
objective: "What to build: anything you enjoy."
state: edited
carriers: prose
---

**🚀 Project** · step 5 of 5 · [A hundred kilobytes](#expedice-weby-en)

**What to build:** anything you enjoy. A page about your projects, a mini encyclopaedia of your hobby, a quiz for your classmates or a gallery of your drawings.

**It’s done when all ten points are true:**
1. F12 → Network shows at most **100 kB** transferred.
2. At most **10 requests**.
3. **0 third-party domains**: no outside font, tracker or library. The website doesn’t track anyone.
4. The outline from the Console makes sense: one h1, h2 below it, then h3.
5. Every image has alt, decorations have `alt=""`.
6. The text has a contrast of at least 4.5 : 1.
7. You can go through the whole website with the keyboard only: Tab, Enter, space bar. You can always see where you are.
8. On a phone, the page can’t be scrolled sideways anywhere. `img { max-width: 100%; }` helps.
9. The head has `charset`, `lang` and `viewport`.
10. The address starts with https.

**Test with a person:** give the website to someone who doesn’t know it and give them a task, such as “find my newest project”. Don’t give any advice, just watch. Where they hesitate, the website has a bug, not the person.

**Bonus:** measure the website with Lighthouse in F12 too and write down the four scores.

**The expedition’s final test is still waiting:** [A hundred kilobytes](#mission-expedice-weby)
