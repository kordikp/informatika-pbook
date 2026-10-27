---
id: svet-hry-abstrakce-a-model-en
translationOf: svet-hry-abstrakce-a-model
lang: en
type: spine
title: "Hitbox: the knight is a rectangle"
readingTime: 1
standalone: true
teaser: "The knight in the game has a cloak, a sword and flowing hair. For collisions, though, he is a plain rectangle. And that’s a good thing."
voice: universal
parent: null
diagram: null
core: false
recallQ: "Why does an underground map not show streets, and what would it look like as a graph?"
recallA: "To change lines you only need the stations and the connections; streets would just get in the way. The stations are nodes, the connections between them are edges."
lens: hry
visuality: visual-first
depth: intro
formalism: none
lengthBand: standard
genre: explainer
status: accepted
concept: abstrakce-a-model
state: edited
highlights:
  - "Abstraction: what matters depends on the purpose"
  - "A graph as a model: nodes and edges (the underground, friends in a class, how chapters follow each other)"
  - "No model is complete; it is always a choice"
carriers: prose|image
---

The knight in the game has a cloak, a sword and flowing hair. For collisions, though, he is a plain rectangle. And that’s a good thing.

Many times a second a game has to find out whether something is touching something else. Checking every pixel of the cloak would be slow. So it imagines an invisible **hitbox** around the character, a simple rectangle. A collision is then just one question: *do two rectangles overlap?*

![The knight and his hitbox, the dungeon map as a graph](images/svet-hry-hitbox.en.svg)

That is **abstraction**: you leave out what you don’t need for a given **purpose**. For collisions what matters is shape and position, not the colour of the cloak. For drawing it’s the other way round: the cloak is drawn down to the last pixel. The same character, two purposes, two different models.

A model can also be a **graph**. A dungeon map is a network of rooms (**nodes**) and the doors between them (**edges**). From it the game knows where you can get to from a room, and it doesn’t need to know about the carpets or the torches on the walls.

No model is complete; it is always a **choice**. Hitbox too big? The player dies even though the spikes “didn’t touch” him. Too small? He walks straight through an enemy. Developers spend a long time tuning hitboxes, because this is exactly where players feel whether a game is fair.

**Try it!** Pick a game you play. Roughly how big is your character’s hitbox? Bigger or smaller than the picture? How can you tell while playing?

**Next in the world of games:** → [The ball that flew through the paddle](#svet-hry-over-a-oprav-en)
