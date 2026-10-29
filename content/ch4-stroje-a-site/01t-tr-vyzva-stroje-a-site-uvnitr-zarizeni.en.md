---
id: vyzva-stroje-a-site-uvnitr-zarizeni-en
translationOf: vyzva-stroje-a-site-uvnitr-zarizeni
lang: en
type: challenge
title: "The cook waits for the pantry"
level: 2
minutes: 30
readingTime: 3
standalone: true
teaser: "A game wants 8 GB of working memory and you have a fast SSD."
voice: universal
parent: null
diagram: null
core: false
status: accepted
concept: uvnitr-zarizeni
state: edited
lens: generic
visuality: text-first
depth: standard
formalism: none
lengthBand: deep
carriers: prose|table
---

A game wants 8 GB of working memory and you have a fast SSD. Why doesn’t the game just take its data straight from the pantry? The answer isn’t “because that’s how it is”. You can work it out.

<!-- task -->

Every grab for data takes a different amount of time (ns is a nanosecond, a billionth of a second):

| Where the data is | Time for one access |
|---|---|
| working memory (RAM) | 100 ns |
| SSD | 100 µs = 100,000 ns |
| classic hard disk (HDD) | 10 ms = 10,000,000 ns |
| server on the internet | 50 ms |

1. **Human scale.** Stretch time so that 1 ns lasts 1 second. How long would each grab take? Convert it to minutes, hours, days or years.
2. **A game frame.** A game draws 60 frames per second, so it has about 16.7 ms for one frame. For each frame it needs to read 10,000 small pieces of data. Work out how long that takes from RAM and how long from the SSD. How many frames per second would the game get if it read only from the SSD?
3. **Lag.** You open so many apps that they don’t fit into RAM. But the operating system doesn’t close them. What does it do with them, and why does the computer then lag?

**Success criterion:** correct numbers in points 1 and 2, and an explanation in point 3 that contains the word “disk”.

<!-- hint -->

Human scale: 100 ns turns into 100 s. A day has 86,400 s and a year about 31.5 million s.

<!-- hint -->

Total time = number of accesses × time for one access. Watch the units: 1 ms = 1,000 µs = 1,000,000 ns.

<!-- hint -->

When nothing more fits on the worktop, the shift manager carries some things off to the pantry. How long does it take to bring them back?

<!-- solution -->

1. RAM: 100 s, just under 2 minutes. SSD: 100,000 s, about 28 hours. HDD: 10 million s, about 116 days. Server: 50 million s, about 1.6 years.
2. From RAM: 10,000 × 100 ns = 1 ms. That fits into a frame sixteen times. From the SSD: 10,000 × 100 µs = 1 s for a single frame, so **1 frame per second**. The game would be unplayable. That’s why a game has a **loading screen**: it carries the level from the pantry to the worktop once, and after that it takes data only from RAM.
3. The operating system **moves** part of what is in RAM out to the disk (a swap file). When an app needs that data again, it has to wait for the disk, which is roughly a thousand times slower. That’s why a computer with full RAM lags. Closing apps or adding RAM helps. Deleting photos only helps when the storage is full.

Note: a real SSD reads data in big blocks, many at once, so in practice it is faster than in this model. But the ratio stays: the worktop is many times faster than the pantry.

<!-- more -->

The cook has an even smaller and faster apron pocket, the **processor cache**: an access takes about 1 ns. Add it to the table. Then open Task Manager in Windows (Ctrl+Shift+Esc, Performance tab) and watch the memory while you open tabs. Or run Linux in your browser at copy.sh/v86 and type the command free. You can build how a processor calculates out of gates in the extra game “How the cook calculates” or at nandgame.com.
