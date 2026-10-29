---
id: vyzva-hry-rozhodovani-en
translationOf: vyzva-hry-rozhodovani
lang: en
type: challenge
title: "The forgiving jump"
level: 3
minutes: 30
readingTime: 2
standalone: true
teaser: "The player runs to the edge of a platform, presses jump and the character falls into the abyss."
voice: universal
parent: svet-hry-rozhodovani-en
diagram: null
core: false
status: accepted
concept: rozhodovani
state: edited
lens: hry
visuality: text-first
depth: standard
formalism: none
lengthBand: standard
carriers: prose
---

The player runs to the edge of a platform, presses jump and the character falls into the abyss. According to the code everything is right: you can’t jump in mid-air. Still, the player shouts that the game is cheating. And they are right.

<!-- task -->

People press buttons a little late or a little early. That is why good platformers have two tricks:
- **coyote time**: you can still jump 0.1 s after running off an edge (like the coyote in cartoons that keeps running in mid-air for a moment);
- **jump buffer**: if you press jump 0.1 s before landing, the character jumps as soon as it touches the ground.

You have the variables `sinceGround` (seconds since the character last stood on the ground; on the ground it is 0), `sincePress` (seconds since jump was last pressed) and `jumped` (yes/no).

1. Write one condition using **and** and **not** for when the character jumps.
2. Write what happens to the variables right after a jump and on landing.
3. Check the condition in five situations:
   a) the character is standing on the ground, jump is pressed now;
   b) the character ran off an edge 0.05 s ago (without jumping), jump is pressed now;
   c) the character ran off an edge 0.3 s ago, jump is pressed now;
   d) the character is falling, jump is pressed 0.06 s before landing, then it lands;
   e) the character jumps off the ground and after 0.04 s in the air jump is pressed again.

**Success criterion:** in situations a, b, d the character jumps, in c and e it doesn’t. If it jumps a second time in e, your rule has a hole.

<!-- hint -->

Both windows are the same question: “is it less than 0.1 s?”

<!-- hint -->

Situation e is a trap. After a jump, `sinceGround` is still small, because the character left the ground only a moment ago.

<!-- hint -->

A press that has already caused a jump must not be used a second time. How do you “use it up”?

<!-- solution -->

1. **Jump when** `sincePress < 0.1` **and** `sinceGround < 0.1` **and not** `jumped`.
2. After a jump: `jumped = yes` and `sincePress = 99`, so the press is used up. On landing: `jumped = no` and `sinceGround = 0`.
3. a) 0 < 0.1, 0 < 0.1, `jumped` = no → **jumps**. b) 0 < 0.1, 0.05 < 0.1, `jumped` = no → **jumps**, that is coyote time. c) `sinceGround` = 0.3 → **doesn’t jump**. d) On landing `sinceGround` = 0 and `sincePress` = 0.06 → **jumps** right after landing, that is the jump buffer. e) `sinceGround` = 0.04, but `jumped` = yes → **doesn’t jump**. Without the “not `jumped`” part, you would get a double jump here that nobody asked for.

<!-- more -->

Coyote time and the jump buffer are used by famous platformers like Celeste. Build two versions of the same level in Scratch, with and without the tricks, and give them to three friends. Don’t tell them which is which...
