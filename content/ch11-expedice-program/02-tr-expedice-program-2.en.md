---
id: expedice-program-2-en
translationOf: expedice-program-2
lang: en
type: spine
title: "Challenge: the thermometer at the cabin"
readingTime: 1
standalone: false
teaser: "A thermometer hangs at the cabin and records the temperature every hour: temps = [-3, -1, 2, 5, 4, 0, -2, -6] Square brackets make a list: a row of values in o…"
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
concept: expedice-program-2
conceptTitle: "Challenge: the thermometer at the cabin"
objective: "A thermometer hangs at the cabin and records the temperature every hour: temps = [-3, -1, 2, 5, 4, 0, -2, -6] Square brackets make a list: a row of values in o…"
state: edited
carriers: prose|code
---

**🧩 Challenge** · step 2 of 5 · [Twelve stars](#expedice-program-en)

A thermometer hangs at the cabin and records the temperature every hour:
```
temps = [-3, -1, 2, 5, 4, 0, -2, -6]
```
Square brackets make a **list**: a row of values in one box. The loop `for t in temps:` goes through the values one by one and stores each one in `t` for a moment.

**Part 1.** How many hours were **below zero**? Zero is not below zero. Write a program that counts it. A box `count = 0` and a condition inside the loop will help.

**Part 2.** What was the **biggest rise in temperature** between two hours in a row? The program has to remember the **previous** temperature. Create a box `previous` and set it to the first temperature. In each round, work out the difference `t - previous`, compare it with the record so far, and at the end of the round set `previous = t`.

**Check:** part 1 should give **4**, part 2 **3**.

Once it works, try the program on your own list. What if the temperature only falls all day? Is the biggest rise then negative, or zero? It depends on what you set the record to at the start. Decide what is correct and adjust the program.

If you get stuck, paste the code into Python Tutor and step through it. You’ll see exactly when each box changes.

**Next step:** [Analysis: the history of a real project](#expedice-program-3-en)
