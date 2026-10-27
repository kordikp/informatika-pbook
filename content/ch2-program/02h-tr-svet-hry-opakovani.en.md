---
id: svet-hry-opakovani-en
translationOf: svet-hry-opakovani
lang: en
type: spine
title: "The game loop: a loop that never sleeps"
readingTime: 1
standalone: true
teaser: "Nothing in a game actually moves. The picture is just drawn sixty times a second, a little further along each time."
voice: universal
parent: null
diagram: anim-herni-smycka-en
core: false
recallQ: "When do you use “repeat 10×” and when “repeat until…”?"
recallA: "A fixed count when you know in advance how many times. “Until” when it depends on what happens, for example until the robot hits a wall."
lens: hry
visuality: balanced
depth: intro
formalism: none
lengthBand: standard
genre: worked-example
status: accepted
concept: opakovani
state: edited
highlights:
  - "The body of the loop and the number of repeats"
  - "Repeat n× vs. repeat until (the stopping condition)"
  - "Finiteness: a loop must end, otherwise the program gets stuck in an endless loop"
carriers: prose|animation|code
---

Nothing in a game actually moves. The picture is just drawn sixty times a second, a little further along each time.

At the heart of every game is a **game loop**: a loop with three steps in its **body**. *Read input* (is the player holding an arrow key?), *update the world* (move the character, move the enemies, check for touches) and *draw the picture*. And again. At 60 frames per second the body of the loop runs sixty times a second. When a game “lags”, the loop can’t keep up.

In Scratch the loop of Catch the Apples looks like this:

```
when green flag clicked
  repeat until <(lives) = 0>
    if <key [right arrow] pressed?>: change x by 5
    change apple y by -5
    …
  say “GAME OVER”
```

Why **“repeat until…”** and not **“repeat 100”**? You don’t know in advance how long the player will play. The end depends on what happens: the lives run out. A **fixed count** fits elsewhere, when you know exactly how many times: *repeat 3: flash*, when something hits the character.

The condition is checked **at the start of each round**. When the last life disappears in the middle of a round, the round still finishes and then the loop ends. A loop has to **end** at some point. If lives never ran out, the game would get **stuck in an endless loop** and you could neither win nor lose. The *forever* block, on the other hand, is intentional: the background music plays round and round until you close the game.

**Try it!** Play any game and try to guess what is in the body of its loop: what it reads, what it updates, what it draws. And when does the loop end?

**Next in the world of games:** → [When it touches a coin](#svet-hry-rozhodovani-en)
