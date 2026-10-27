---
id: svet-aplikace-promenna-en
translationOf: svet-aplikace-promenna
lang: en
type: spine
title: "The same button, three reactions"
readingTime: 2
standalone: true
teaser: "You tap ▶ in a music app. Once it starts playing, another time it stops, and another time it wants you to log in. The app isn’t broken. It remembers what state it is in."
voice: universal
parent: null
diagram: null
core: false
recallQ: "The score is 5. The program runs “set score to 3” and then “change score by 2”. What is the score?"
recallA: "5. Setting overwrites the value with 3, changing by 2 raises it to 5. A variable remembers only its latest value."
lens: aplikace
visuality: text-first
depth: intro
formalism: none
lengthBand: standard
genre: explainer
status: accepted
concept: promenna
state: edited
highlights:
  - "A name and a current value (exactly one)"
  - "Set vs. change by; assignment overwrites the old value"
  - "A variable as the state of a program (score, lives, mode)"
carriers: prose|code
---

You tap ▶ in a music app. Once it starts playing, another time it stops, and another time it wants you to log in. The app isn’t broken. It remembers what state it is in.

An app keeps its state in **variables**. Each one has a **name** and, at any moment, **exactly one value**: *loggedIn = no*, *mode = playing*, *song = 7*. The ▶ button looks at the variables and decides according to them:

```
if loggedIn = no → show the login
else if mode = “playing” → stop, set mode to “paused”
else → play, set mode to “playing”
```

The variable *mode* is the **state of the program**. The same input, a tap, and a different action depending on the state.

**Set** and **change by** are two different things. *Set volume to 5* overwrites the value, whatever was there. *Change volume by 1* adds to what is there. **Assignment overwrites the old value**, and the old one disappears. That is why this is tricky: there are two items in your basket in an online shop and you tap +. If the button does *set count to 1* instead of *change count by 1*, you are back to just one item in your basket.

The most common bugs in apps are state bugs. After you log out, the app still shows your name: the variable was not reset. After you come back from a call, two songs play at once: the mode was set twice. When you are looking for a bug, ask first: what values did the variables have at that moment?

**Try it!** Pick an app you use every day. Find at least three variables it has to remember, such as the mode, whether you are logged in, or the number of unread messages. When is each one set, and when is it changed?

**Next in the world of apps:** → [An app made from a spreadsheet](#svet-aplikace-tabulka-a-evidence-en)
