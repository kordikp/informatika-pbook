---
id: svet-aplikace-algoritmus-en
translationOf: svet-aplikace-algoritmus
lang: en
type: spine
title: "Who owes whom how much"
readingTime: 2
standalone: true
teaser: "Five friends in a pizzeria, one bill, and only three of them paid. A bill-splitting app works it out in a second. But only because someone taught it an exact method."
voice: universal
parent: null
diagram: null
core: false
recallQ: "Why are the instructions “butter the bread” not enough for a robot, and what must every step of an algorithm meet?"
recallA: "A robot fills in nothing by itself. Every step must be unambiguous and doable for whoever carries it out, the process must end after a finite number of steps and work for every allowed input."
lens: aplikace
visuality: text-first
depth: intro
formalism: none
lengthBand: standard
genre: worked-example
status: accepted
concept: algoritmus
state: edited
highlights:
  - "Steps in an exact order; the one carrying them out does not know what the author meant (each step is elementary)"
  - "Unambiguous, finite, general and correct as the test of whether a process is an algorithm"
  - "The same problem can be solved by different algorithms"
carriers: prose
---

Five friends in a pizzeria, one bill, and only three of them paid. A bill-splitting app works it out in a second. But only because someone taught it an exact method.

An app doesn’t guess anything. The instruction “split it fairly” is not enough for it. It needs **steps in an exact order**, and it has to be able to carry out each of them:

1. Add up how much everyone paid.
2. Divide the total by the number of people. That is the fair share.
3. For each person, work out the difference: *paid − share*. Positive means they are owed money, negative means they owe.
4. The person who owes the most sends the person who is owed the most the smaller of the two amounts. If there is a tie, the order in the list decides.
5. Repeat step 4 until all the differences are zero.

Try it: Anna paid €50, Ben €30, Cyril €10, Dana and Eva nothing. Total 90, share 18. Differences: Anna +32, Ben +12, Cyril −8, Dana −18, Eva −18. Dana sends Anna 18, Eva sends Anna 14 and Ben 4, Cyril sends Ben 8. Four transfers and everyone is square.

Is it really an **algorithm**? Run the test:

- **Unambiguous:** each step can be done in only one way. That is why it says “the smaller of the two amounts” and not “as much as possible”, and why there is a rule for a tie: Dana and Eva both owe 18. And what if €10 is split between three? The method has to say where the extra cent goes.
- **Finite:** every transfer brings at least one difference down to zero, so the method ends at some point.
- **General:** it works for two people and for thirty, for a pizza and for a school trip.
- **Correct:** at the end, everyone has paid exactly their share.

**The same problem can be solved by different algorithms.** A simpler method: everyone who owes sends the money to one treasurer, who sends it on. That works too, there are just more transfers. Apps choose the method that needs as few of them as possible.

**Try it!** Jana paid €24, Peter €6 and Ola nothing. Go through the algorithm step by step. How many transfers are needed, and who sends whom how much?

**Next in the world of apps:** → [An app on paper](#svet-aplikace-dekompozice-en)
