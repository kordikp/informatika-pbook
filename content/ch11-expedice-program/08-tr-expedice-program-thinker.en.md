---
id: expedice-program-thinker-en
translationOf: expedice-program-thinker
lang: en
type: spine
title: "Debugging as a detective story"
readingTime: 1
standalone: false
teaser: "When a program does something strange, don’t guess."
voice: universal
parent: null
diagram: null
core: false
lens: generic
visuality: text-first
depth: standard
formalism: none
lengthBand: tldr
genre: explainer
status: accepted
concept: expedice-program-thinker
conceptTitle: "Debugging as a detective story"
objective: "When a program does something strange, don’t guess."
state: edited
carriers: prose
---

**🔬 Side trip** · [Twelve stars](#expedice-program-en)

When a program does something strange, don’t guess. Work like a detective. **Rubber duck:** explain the code out loud, line by line, to anyone, even a cuddly toy. You often find the bug in the middle of a sentence. **Check prints:** put `print("round", t, record)` into the loop and watch where the numbers first stop matching what you expect. **Halving:** put a print in the middle of the program. Is everything still correct there? Then the bug is after it. No? Then it’s before it. With every print you halve the place where the bug is hiding, just like when guessing a number from 1 to 100. **Debugger:** in Thonny, click a line number, a breakpoint appears, and start debugging. The program stops exactly there. Try finding a bug this way that Tomáš hides in your thermometer on purpose.

**Back to the expedition:** [Twelve stars](#mission-expedice-program)
