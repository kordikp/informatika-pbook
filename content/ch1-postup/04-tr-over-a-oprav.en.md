---
id: over-a-oprav-en
translationOf: over-a-oprav
lang: en
type: spine
title: "Test and fix"
readingTime: 1
standalone: true
teaser: "Your phone offers you an update that “fixes bugs”. How come the makers didn't find them earlier?"
voice: universal
parent: null
diagram: null
core: true
recallQ: "Why is it not enough to try a program on one example that works?"
recallA: "A bug often shows up only for some inputs, such as zero or an empty list. Tests should cover different cases, including edge cases."
lens: generic
visuality: balanced
depth: intro
formalism: none
lengthBand: standard
genre: worked-example
status: accepted
concept: over-a-oprav
conceptTitle: "Test and fix"
objective: "Your phone offers you an update that “fixes bugs”. How come the makers didn't find them earlier?"
mustCover:
  - "Test = input + expected output, prepared in advance"
  - "Edge cases (0, empty input, maximum)"
  - "Debugging: spot → cause → fix → test again; efficiency as another measure"
state: core
highlights:
  - "Test = input + expected output, prepared in advance"
  - "Edge cases (0, empty input, maximum)"
  - "Debugging: spot → cause → fix → test again; efficiency as another measure"
carriers: prose|image|code
---

Your phone offers you an update that “fixes bugs”. How come the makers didn't find them earlier?

**You don't know** a solution works **until you try it**. And one tried example isn't enough. Bugs often hide in **tricky inputs**: zero, empty, maximum.

A good **test** has two parts: the **input** and the **result you expect**. You prepare it in advance.

The school machine sells cinema tickets for €3 each. You prepare the tests in advance: 1 person → 1 ticket and €3, 2 people → €6, 3 people → €9, 5 people → €15. They all pass. Then you try a tricky input, **0 people**. You expect the machine to print nothing. But it prints a ticket for €0. The program prints first and only then asks whether to carry on:

```
printed = 0
repeat:
    print a ticket
    printed = printed + 1
while printed < number of people
```

The fix: check the condition **at the start** (*repeat while printed < number of people*). For zero people the loop doesn't run even once.

![Test and fix](images/comic-brouk.en.svg)

The machine worked for 1, 2, 3 and 5 people. The bug only showed up with **zero**: it printed a free ticket. Anyone who tried just one example would never have found it.

Debugging has four steps: **find the spot where it goes wrong → understand the cause → fix it → test again with all the tests**. The last step matters. A fix that breaks other tests is not a fix.

When two solutions work, you can also compare their **efficiency**: which one needs fewer steps or less memory.

**Try it!** Take instructions you have written (like the bread ones) and try to break them. What if the bread is already sliced? What if the butter has run out? Every input the instructions fail on is a bug you found before the person who uses them. Fix the instructions so they cope with this too.

> **Watch out, a common mistake:** “If it ran once, it's correct.” It only ran for that one input. Bugs hide in edge cases, such as zero. And every programmer makes mistakes. A good programmer is one who can find them.

**Next:** You test an AI's answer just like a program. On tricky questions, not just on one that happened to work. → [Check it, and you decide](#c/rozhodujes-ty)
