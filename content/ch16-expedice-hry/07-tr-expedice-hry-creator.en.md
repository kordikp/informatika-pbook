---
id: expedice-hry-creator-en
translationOf: expedice-hry-creator
lang: en
type: spine
title: "An enemy that thinks"
readingTime: 1
standalone: false
teaser: "An enemy that just walks back and forth is boring."
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
concept: expedice-hry-creator
conceptTitle: "An enemy that thinks"
objective: "An enemy that just walks back and forth is boring."
state: edited
carriers: prose
---

**🛠️ Side trip** · [The weekend a game was made](#expedice-hry-en)

An enemy that just walks back and forth is boring. An enemy with a **state machine** plays with you. Design a guard with three states: **patrolling** (walks along a route), **chasing** (the player is closer than 100 px) and **returning** (it lost the player and is going back to the route). By each arrow, write the event. What if the player disappears behind a wall? What if they come back while the guard is returning?

Then give the guard a map. An 8 × 8 grid with a few walls, the guard in one corner, the player in another. Number the squares: the start gets 0, its free neighbours 1, their neighbours 2 and so on, like a spreading wave. When the wave reaches the player, go back from them along the decreasing numbers. That is the **shortest path**. This method is called breadth-first search, and games build smarter methods like A* on it. How many steps does the wave need on an empty grid from corner to corner?

**Back to the expedition:** [The weekend a game was made](#mission-expedice-hry)
