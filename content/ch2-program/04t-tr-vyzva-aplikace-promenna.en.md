---
id: vyzva-aplikace-promenna-en
translationOf: vyzva-aplikace-promenna
lang: en
type: challenge
title: "Impossible states"
level: 3
minutes: 40
readingTime: 2
standalone: true
teaser: "You log out of a music app, and a second later a song starts playing."
voice: universal
parent: svet-aplikace-promenna-en
diagram: null
core: false
status: accepted
concept: promenna
state: edited
lens: aplikace
visuality: text-first
depth: standard
formalism: none
lengthBand: deep
carriers: prose
---

You log out of a music app, and a second later a song starts playing. Nobody tapped ▶. Where did it come from?

<!-- task -->

The player has three yes/no variables: `logged_in`, `loading`, `playing`. The rules: a logged-out user isn’t loading or listening to anything, and the app is never loading and playing at the same time.

The events are: a tap on ▶, “loaded” (the song’s data arrived), “network error” (loading failed), “log in” and “log out”.

1. How many combinations of values of the three variables are there? Which ones make sense? Give them names.
2. Draw a **state diagram**: states as circles, events as arrows. Only draw an arrow where the state changes.
3. A programmer wrote: on “log out” set `logged_in = no` and `playing = no`. On “loaded” set `loading = no` and `playing = yes`. Find a sequence of events after which music plays for a logged-out user.
4. Rewrite the player with a single variable `state` so the impossible combination can’t even be written down. Write a test (input and expected output) for every arrow.

**Success:** the number of meaningful states, the number of arrows, the same number of tests, and one sequence that reveals the bug.

<!-- hint -->

Three yes/no variables: how many options for the first, how many for the second, how many for the third? Then cross out combinations using the rules.

<!-- hint -->

The combinations that make sense are exactly the ones you can give a name a user would understand: “paused”, “loading”… How many can you find?

<!-- hint -->

Start in Paused. What if the user logs out exactly while the song is still downloading, and the data only arrives afterwards?

<!-- solution -->

**1.** There are 2 × 2 × 2 = 8 combinations. 4 make sense: **Logged out** (no, no, no), **Paused** (yes, no, no), **Loading** (yes, yes, no), **Playing** (yes, no, yes).

**2.** There are 8 arrows: Logged out → Paused (log in), Paused → Loading (▶), Paused → Logged out (log out), Loading → Playing (loaded), Loading → Paused (network error), Loading → Logged out (log out), Playing → Paused (▶), Playing → Logged out (log out).

**3.** From Paused: ▶, log out, loaded. After logging out, `loading = yes` stays, because the code forgot about it. The late “loaded” then sets `playing = yes`, and you get (no, no, yes).

**4.** `state` has one of four values. Every event asks what state the app is in: “loaded” switches to Playing only from the Loading state; otherwise it is thrown away. 8 arrows = 8 tests. Add a test for the bug: ▶, log out, loaded → expected state Logged out.

<!-- more -->

Add an “Advert” state that can’t be skipped, and a “No internet” state. How many arrows are added, and how many tests? Big apps use state machine libraries for this, for example XState for JavaScript (in English). Then try drawing a state diagram for the “Pay” button in the class app.
