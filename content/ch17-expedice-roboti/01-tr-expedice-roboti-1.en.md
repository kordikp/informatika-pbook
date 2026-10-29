---
id: expedice-roboti-1-en
translationOf: expedice-roboti-1
lang: en
type: spine
title: "A rover in 30 minutes in MakeCode"
readingTime: 1
standalone: false
teaser: "Open MakeCode, click New Project and call it “vozitko”."
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
concept: expedice-roboti-1
conceptTitle: "A rover in 30 minutes in MakeCode"
objective: "Open MakeCode, click New Project and call it “vozitko”."
state: edited
carriers: prose
---

**🛠 Workshop** · step 1 of 5 · [The rover that doesn’t fall off the table](#expedice-roboti-en)

Open [MakeCode](https://makecode.microbit.org), click *New Project* and call it “vozitko”. You don’t need an account; the project is saved in the browser.

1. **Sensors (5 minutes).** Line sensors are connected to pins. Take the block *digital read pin* and set P1 for the left sensor and P2 for the right one. In the simulator you switch a pin on by clicking, so your mouse “sees” the line.
2. **Loop (5 minutes).** Put everything in the *forever* block. The rover decides over and over, dozens of times a second.
3. **Decision (10 minutes).** Four *if… then…* conditions for the combinations of the left and right sensor. Instead of motors, show an arrow on the display for now: up means straight, an arrow left or right means a turn, and a cross means stop.
4. **Tests (10 minutes).** Click through all four pin combinations and write down whether the arrow matches what you expect.

Now you have the whole brain of the rover without a single motor. When the motors arrive, you’ll replace the arrows with motor blocks. Blocks for kits, such as the Kitronik :MOVE mini, are added through *Extensions*. If you’d rather type text, you’ll find the same simulator in the [Python editor](https://microbit.org/code/).

Tip: put the decision-making in a function of its own called *decide*. When you improve the rover later, you’ll only change that.

**Next step:** [The sharp bend and memory](#expedice-roboti-2-en)
