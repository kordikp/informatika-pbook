---
id: expedice-hry-thinker-en
translationOf: expedice-hry-thinker
lang: en
type: spine
title: "Fixed physics step"
readingTime: 1
standalone: false
teaser: "A limited dt protects the game, but the physics still calculates with different steps."
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
concept: expedice-hry-thinker
conceptTitle: "Fixed physics step"
objective: "A limited dt protects the game, but the physics still calculates with different steps."
state: edited
carriers: prose
---

**🔬 Side trip** · [The weekend a game was made](#expedice-hry-en)

A limited `dt` protects the game, but the physics still calculates with different steps. With a step of 0.017 s a jump turns out slightly differently than with a step of 0.007 s. For a racing game, recording and replaying a run, or a two-player game over the network, that’s not enough.

The solution is called a **fixed step**. You add the time that has passed to a store. As long as there is at least one step in the store, say 0.02 s, you recalculate the physics by exactly 0.02 s and take that much out of the store. Drawing runs separately, as fast as the monitor can manage.

**Task:** the step is 0.02 s and the frames last 0.010; 0.015; 0.030; 0.005 and 0.050 s in turn. How many times is the physics recalculated after each frame, and how much is left in the store? What happens if one frame lasts a whole second? Why do engines limit the number of steps per frame?

You will find the whole method in the [Game Loop](https://gameprogrammingpatterns.com/game-loop.html) chapter (in English, free). In Godot it is used by `_physics_process`.

**Back to the expedition:** [The weekend a game was made](#mission-expedice-hry)
