---
id: svet-hry-rozhodovani-en
translationOf: svet-hry-rozhodovani
lang: en
type: spine
title: "When it touches a coin"
readingTime: 1
standalone: true
teaser: "The character only jumps when it is standing on the ground. In the air the space bar does nothing. Behind that is a single question with the answer yes or no."
voice: universal
parent: null
diagram: null
core: false
recallQ: "What happens to the “else” branch when the condition is true?"
recallA: "It doesn't run. Of the if / else branches, exactly one always runs."
lens: hry
visuality: text-first
depth: intro
formalism: none
lengthBand: standard
genre: worked-example
status: accepted
concept: rozhodovani
state: edited
highlights:
  - "A condition is either true or false"
  - "If–else: exactly one branch runs"
  - "Combining conditions (and, or, not)"
carriers: prose|code
---

The character only jumps when it is standing on the ground. In the air the space bar does nothing. Behind that is a single question with the answer yes or no.

Every rule of a game is a **condition**: a question whose answer is **true** or **false**. *Is the player touching the coin?* True → add a point and hide the coin. False → nothing.

```
if <touching [coin]?> then
  change [score] by 1
  hide coin
```

**If–else** has two branches and **always exactly one** of them runs: *if the score is higher than the record → save the new record, else → show “Try again”.* The player never sees both.

Games love **combining** conditions:

- **and**: jump when the space bar is pressed **and** the character is standing on the ground. Both parts must be true. Without the second one, the character would jump through the air into the sky.
- **or**: lose a life when you touch a spike **or** lava. One is enough.
- **not**: the door opens when the player does **not** have the key? Read the rule out loud and you will hear straight away that it’s backwards.

A collision is a condition too. In every round of the loop the game asks *do they overlap?* and picks a branch according to the answer.

**Try it!** Write a rule for a door that opens only when the player has the key and is standing right next to it. Which connective will you use: and, or, not?

**Next in the world of games:** → [Score, lives, level](#svet-hry-promenna-en)
