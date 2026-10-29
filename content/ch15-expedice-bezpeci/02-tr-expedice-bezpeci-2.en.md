---
id: expedice-bezpeci-2-en
translationOf: expedice-bezpeci-2
lang: en
type: spine
title: "The CyberChef kitchen"
readingTime: 1
standalone: false
teaser: "CyberChef is a free tool from the British intelligence agency GCHQ."
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
concept: expedice-bezpeci-2
conceptTitle: "The CyberChef kitchen"
objective: "CyberChef is a free tool from the British intelligence agency GCHQ."
state: edited
carriers: prose
---

**🛠 Workshop** · step 2 of 5 · [Operation Flag](#expedice-bezpeci-en)

**CyberChef** is a free tool from the British intelligence agency GCHQ. It runs entirely in the browser, nothing gets installed and you don’t need an account. It’s handy for everything you can do with text: conversions, encodings, ciphers, hashes. It’s in English, but you control it by dragging with the mouse.

**The first 30 minutes:**

1. Open [CyberChef](https://gchq.github.io/CyberChef/). On the left are the **operations** (Operations), in the middle the **recipe** (Recipe), on the right the **input** (Input) and **output** (Output).
2. Paste the hex message from step 1 into the input.
3. Type `hex` into the operations search and drag **From Hex** into the recipe. The output changes immediately.
4. Add **ROT13**. It’s a Caesar with an adjustable shift (Amount). Set the shift so that the flag comes out. Hint: a shift of 3 back is the same as a shift of 23 forward.
5. Try the **Magic** operation with the magic wand. It guesses by itself which encoding the text went through.
6. Build a recipe the other way round: write your own flag, add ROT13, **To Base64** and **To Hex**. Send the result to Ondra and time how long it takes him to crack it.

**Safety rule:** CyberChef doesn’t send data anywhere. Even so, never paste your real passwords into it, or into any other website. Make up practice ones for trying things out.

**You’re done** when you can save a recipe and open it again and when your three-layer flag can be cracked.

**Next step:** [The password nobody sees](#expedice-bezpeci-3-en)
