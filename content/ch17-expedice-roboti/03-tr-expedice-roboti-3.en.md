---
id: expedice-roboti-3-en
translationOf: expedice-roboti-3
lang: en
type: spine
title: "How a robot vacuum thinks"
readingTime: 1
standalone: false
teaser: "Observe."
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
concept: expedice-roboti-3
conceptTitle: "How a robot vacuum thinks"
objective: "Observe."
state: edited
carriers: prose
---

**🔍 Analysis** · step 3 of 5 · [The rover that doesn’t fall off the table](#expedice-roboti-en)

**Observe.** Watch a vacuum at home, at friends’ or in the maker’s video for at least 5 minutes. Write in a table with two columns: *what happened → what it did*. For example “bumped into a chair → backed up and turned”.

**Find the sensors.** Almost every vacuum has:
- a bumper at the front that works like a button on the micro:bit;
- stair sensors underneath that shine downwards and measure the reflection, exactly like your line sensors;
- wheel rotation counters, so it knows how far it has gone;
- a receiver for the signal from the charger.

More expensive models also have a laser or a camera and draw a map of the flat.

**Draw the states.** A state is what the vacuum is doing right now: *going straight*, *backing up*, *following the wall*, *looking for the charger*. Draw them as circles with arrows between them. Next to each arrow, write the event that triggers the switch: *bump*, *stair*, *low battery*. How many states do you have on paper?

**Questions for the analysis:**
1. The stair sensor suddenly “can’t see the floor”. Which situation with your rover is the same, and how does the vacuum deal with it?
2. In which state does the vacuum need memory, because the sensors alone aren’t enough?
3. A cheap vacuum without a map drives almost at random. Why does it end up cleaning almost everything, just more slowly?

Your state diagram is a plan for the program: each state is one *if* branch and each arrow is one condition.

**Next step:** [Off to a competition with your crew](#expedice-roboti-4-en)
