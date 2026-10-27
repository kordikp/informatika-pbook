---
id: svet-roboti-abstrakce-a-model-en
translationOf: svet-roboti-abstrakce-a-model
lang: en
type: spine
title: "The world through a robot’s eyes"
readingTime: 1
standalone: true
teaser: "You see a cat, a carpet and a sofa. A robot vacuum sees three numbers."
voice: universal
parent: null
diagram: null
core: false
recallQ: "Why does an underground map not show streets, and what would it look like as a graph?"
recallA: "To change lines you only need the stations and the connections; streets would just get in the way. The stations are nodes, the connections between them are edges."
lens: roboti
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

You see a cat, a carpet and a sofa. A robot vacuum sees three numbers.

A robot doesn’t perceive the world the way you do. From its **sensors** it gets only numbers: light **37** (out of 255), distance ahead **12 cm**, bump **no**. From these it builds a **model** of the world. It leaves out everything it doesn’t need for its **purpose**: the colour of the carpet, the cat on the sofa, the picture on the wall.

![What you see and what the robot sees](images/svet-roboti-cisla.en.svg)

What matters depends on the purpose. A vacuum only needs to know where it’s free and where there’s an obstacle. A robot that sorts socks, on the other hand, would need colour.

The vacuum remembers the flat as a **graph**: rooms are **nodes**, the doors between them **edges**. It plans its route from the graph and doesn’t need to know what the furniture looks like.

No model is complete; it is always a **choice**. A vacuum that measures only the distance ahead won’t notice a step down until you add a sensor underneath. And its model doesn’t know about a sock on the floor at all, which is why it happily swallows it.

**Try it!** Pick a robot or smart device (a vacuum, a lawnmower, automatic doors). What numbers does it get from its sensors, and what from your world is missing from its model?

**Next in the world of robots:** → [The robot stuck in a corner](#svet-roboti-over-a-oprav-en)
