---
id: svet-socialni-opakovani-en
translationOf: svet-socialni-opakovani
lang: en
type: spine
title: "Infinite scroll: a loop with no end"
readingTime: 2
standalone: true
teaser: "A book has a last page. A series has a last episode. A feed has no end. That is no accident. It is a loop that isn’t meant to finish."
voice: universal
parent: null
diagram: null
core: false
recallQ: "When do you use “repeat 10×” and when “repeat until…”?"
recallA: "A fixed count when you know in advance how many times. “Until” when it depends on what happens, for example until the robot hits a wall."
lens: socialni
visuality: text-first
depth: intro
formalism: none
lengthBand: standard
genre: explainer
status: accepted
concept: opakovani
state: edited
highlights:
  - "The body of the loop and the number of repeats"
  - "Repeat n× vs. repeat until (the stopping condition)"
  - "Finiteness: a loop must end, otherwise the program gets stuck in an endless loop"
carriers: prose|code
---

A book has a last page. A series has a last episode. A feed has no end. That is no accident. It is a loop that isn’t meant to finish.

A feed is a **loop**. Its **body** has three steps: *show a video*, *measure how long you watch*, *pick the next one*. And again. In blocks it would look like this:

```
repeat until the user closes the app
  show the next video
  measure the watch time
  use it to pick the next one
```

The programmer has a choice. **Repeat n times**, when they know in advance how many times: *show 10 new posts from friends and then write “You’re all caught up”*. That is how networks used to do it, and how feeds that have an end still do it. **Repeat until…**, when the end depends on what happens. For a feed there is only one **stopping condition**: you close the app.

A loop has to **end** at some point, otherwise the program gets **stuck in a loop**. In an ordinary program that is a bug: the app freezes. In a feed it is **on purpose**. An end that never comes is meant to hold your attention for as long as possible. **Autoplay** is the same trick: when a video ends, the next one starts by itself, so you don’t even have to decide anything. The decision to stop is one you have to make yourself, against a loop that is designed to keep running.

That is why stops from outside help. An app time limit is really a stopping condition that you add to the loop yourself: *repeat until 30 minutes have passed*.

**Try it!** Find the time-limit setting on your phone for the app you use most. What stopping condition would you give it?

**Next in the world of social media:** → [Download what the network knows about you](#svet-socialni-tabulka-a-evidence-en)
