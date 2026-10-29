---
id: expedice-weby-creator-en
translationOf: expedice-weby-creator
lang: en
type: spine
title: "Layout and dark mode"
readingTime: 1
standalone: false
teaser: "Play the whole Flexbox Froggy game and then Grid Garden, both with instructions in Czech."
voice: universal
parent: null
diagram: null
core: false
lens: generic
visuality: text-first
depth: standard
formalism: none
lengthBand: tldr
genre: explainer
status: accepted
concept: expedice-weby-creator
conceptTitle: "Layout and dark mode"
objective: "Play the whole Flexbox Froggy game and then Grid Garden, both with instructions in Czech."
state: edited
carriers: prose
---

**🛠️ Side trip** · [A hundred kilobytes](#expedice-weby-en)

Play the whole Flexbox Froggy game and then Grid Garden, both with instructions in Czech. Then rebuild your website: a header at the top, below it project cards in a grid that has one column on a phone and three on a computer. You can do it with a single rule, `grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr))`, without a single media query.

Finally, add dark mode. Put the colours into CSS variables and redefine them under `@media (prefers-color-scheme: dark)`. The website will switch by itself according to the phone’s settings. Check the contrast in dark mode too.

**Back to the expedition:** [A hundred kilobytes](#mission-expedice-weby)
