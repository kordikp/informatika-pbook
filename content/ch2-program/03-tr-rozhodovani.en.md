---
id: rozhodovani-en
translationOf: rozhodovani
lang: en
type: spine
title: "Decisions (conditions)"
readingTime: 1
standalone: true
teaser: "Your phone moves some messages to spam all by itself. How does it decide which ones?"
voice: universal
parent: null
diagram: rizeni-toku-en
core: true
recallQ: "What happens to the “else” branch when the condition is true?"
recallA: "It doesn't run. Of the if / else branches, exactly one always runs."
lens: generic
visuality: balanced
depth: intro
formalism: none
lengthBand: tldr
genre: worked-example
status: accepted
concept: rozhodovani
conceptTitle: "Decisions (conditions)"
objective: "Your phone moves some messages to spam all by itself. How does it decide which ones?"
state: core
highlights:
  - "A condition is either true or false"
  - "If–else: exactly one branch runs"
  - "Combining conditions (and, or, not)"
carriers: prose|diagram
---

Your phone moves some messages to spam all by itself. How does it decide which ones?

A program can **make decisions**. If a **condition** is true, it does one thing, **otherwise** another. A condition is a question whose answer can only be **yes** or **no**: is the age less than 15?

The swimming pool till sorts people into discounted and full price. Children **under 15** and people **aged 65 and over** get a discount. One condition isn't enough, you need two: *if age < 15 **or** age ≥ 65, then discount, otherwise full price.* Sort the queue in the mini-game below the text. Watch out for Tomáš (15) and Karel (65).

Of the **if** and **else** branches, **exactly one always runs**. A condition can't be “a bit” true: it is either true or not.

Conditions can be **combined**: **and** (both must be true), **or** (one is enough), **not** (turns true into false and back). The discount needed “or”: under 15 **or** 65 and over.

Notice the edges, 15 and 65. That is exactly where mistakes are made most often, so always try them when testing.

**Try it!** Write the way you decide things in the morning as “if…, then…, otherwise…”: if there's a test today, revise on the way; otherwise if it's raining, take a jacket; otherwise relax. Then try the same for one rule of your favourite game.

> **Watch out, a common mistake:** “The program goes through both branches.” It always goes through just one. A condition is either true or false. It can't be “a bit” true.

**Next:** A filter in a table is a condition asked of every row: is the loan overdue? Yes or no. → [Table: data in order](#c/tabulka-a-evidence)
