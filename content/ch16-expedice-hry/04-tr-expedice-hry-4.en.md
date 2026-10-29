---
id: expedice-hry-4-en
translationOf: expedice-hry-4
lang: en
type: spine
title: "🔍 Analysis: how Celeste jumps"
readingTime: 1
standalone: false
teaser: "Celeste is a famous platformer."
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
concept: expedice-hry-4
conceptTitle: "🔍 Analysis: how Celeste jumps"
objective: "Celeste is a famous platformer."
state: edited
carriers: prose
---

**🔍 Analysis** · step 4 of 5 · [The weekend a game was made](#expedice-hry-en)

**Celeste** is a famous platformer. Its original version was made on the PICO-8 fantasy console, and the authors later published the code of the main character: [Player.cs](https://raw.githubusercontent.com/NoelFB/Celeste/master/Source/Player/Player.cs) (in English, language C#, it has thousands of lines). You can read it without an account. GitHub has an age limit of 13 for accounts, but you don’t need an account to read.

You don’t have to understand everything. Use the Ctrl+F shortcut to search for these clues:

1. **`JumpGraceTime = 0.1f`.** That is coyote time: you can still jump 0.1 s after running off an edge. The same number as in the challenge “The forgiving jump”.
2. **`VarJumpTime = .2f`.** Variable jump height: as long as you hold the button, for at most 0.2 s, the character keeps rising. A short press gives a small jump. Find where `varJumpTimer` is set.
3. **`StNormal`, `StClimb`, `StDash`.** The character’s states. How many are there? Notice the line `StateMachine = new StateMachine(23)`. The character has 23 states, not four like in the extra game.
4. **`ConsumeBuffer()`.** The jump buffer. The press is “used up” so that it doesn’t cause two jumps.

**Analysis task:** draw a state machine for just three states: running (normal), climbing (climb) and dashing (dash). By each arrow, write which event triggers it. Paper is enough. Then answer: why does the character have so many little tricks that the player never notices?

**What you take away:** good controls aren’t textbook physics. They are small acts of forgiveness that make the game fair to human fingers.

**Next step:** [🎮 A game by Sunday evening](#expedice-hry-5-en)
