---
id: expedice-weby-3-en
translationOf: expedice-weby-3
lang: en
type: spine
title: "Analyse a website that has worked for twenty years"
readingTime: 1
standalone: false
teaser: "Choose three websites: the Czech guide Jak psát web, one article on Wikipedia and any big news website."
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
concept: expedice-weby-3
conceptTitle: "Analyse a website that has worked for twenty years"
objective: "Choose three websites: the Czech guide Jak psát web, one article on Wikipedia and any big news website."
state: edited
carriers: prose|table
---

**🔍 Analysis** · step 3 of 5 · [A hundred kilobytes](#expedice-weby-en)

Choose three websites: the Czech guide [Jak psát web](https://www.jakpsatweb.cz), one article on [Wikipedia](https://en.wikipedia.org/wiki/Hack_Club) and any big news website. Fill in the table for each:

| | Jak psát web | Wikipedia | news |
|---|---|---|---|
| transferred (kB) | | | |
| number of requests | | | |
| number of third-party domains | | | |
| number of h1 headings | | | |

**How to do it:**
- You’ll find the size and requests in F12 → Network, at the bottom of the bar.
- Third-party domains: in the Network tab, sort by the Domain column. Every domain that isn’t the website’s own domain is a third party. Often it’s advertising or visitor tracking.
- The Console will list the heading outline. Paste into it: `[...document.querySelectorAll('h1,h2,h3')].map(h => h.tagName + ' ' + h.textContent.trim()).join('\n')`

**Questions for the analysis:**
1. Which website is the heaviest and what makes up most of its kilobytes?
2. Wikipedia has huge content. How come it still loads fast?
3. How many third-party domains does the news website have and what do they probably do? Remember the “Cookies: who follows you around the web” telling.
4. Does every website have exactly one h1 and headings in order?
5. One thing you’ll take over into your website, and one you’ll avoid.

**Next step:** [Where others build](#expedice-weby-4-en)
