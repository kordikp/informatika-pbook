---
id: vyzva-tvorba-kodovani-en
translationOf: vyzva-tvorba-kodovani
lang: en
type: challenge
title: "Where did 44 gigabytes go?"
level: 3
minutes: 25
readingTime: 2
standalone: true
teaser: "A minute of 4K from a phone is about 350 MB."
voice: universal
parent: svet-tvorba-kodovani-en
diagram: null
core: false
status: accepted
concept: kodovani
state: edited
lens: tvorba
visuality: text-first
depth: standard
formalism: none
lengthBand: standard
carriers: prose
---

A minute of 4K from a phone is about 350 MB. If the phone stored every pixel of every frame, it would be tens of gigabytes. Where did the rest go? And why do some videos “swell up” more than others?

<!-- task -->

**Part 1.** Work out how big one minute of 4K video (3840 × 2160 pixels, 30 frames per second, 3 bytes per pixel) would be without compression. How many times more is that than 350 MB?

**Part 2.** A codec is a program that makes video smaller. It stores a whole frame only now and then. In between, it mostly stores the **differences** from the previous frame. Put these four ten-second shots in order of file size at the same quality, smallest first:
- A) Opening title: white text on black, nothing moves.
- B) A classmate talks to a camera on a tripod, with a white wall behind.
- C) The same, but the camera is handheld and shakes a little.
- D) A close-up of confetti falling in the wind.

**Part 3.** Explain in one sentence why a video with a bitrate of 8 Mb/s looks blurry for the confetti and sharp for the title.

**Success criterion:** a number within 5 %, the correct order and an explanation based on the differences between frames.

<!-- hint -->

One frame has 3840 × 2160 × 3 bytes. A minute has 60 × 30 frames.

<!-- hint -->

Imagine you are describing to a friend on the phone what has changed since the last frame. For which shot will you talk the longest?

<!-- hint -->

A shaking camera moves the whole picture at once. You can describe that in one sentence, “everything a bit to the left”. But each piece of confetti moves differently.

<!-- solution -->

**1.** 3840 × 2160 × 3 = 24,883,200 B per frame, about 24.9 MB. A minute has 1800 frames, so about 44,800 MB ≈ **45 GB**. That is roughly **128× more** than 350 MB.

**2.** **A < B < C < D.** The title does not change, so the differences are almost zero. On the tripod only the mouth and eyes change. A shaking camera shifts the whole picture, but the codec describes the shift with one “motion vector” and fills in only the edges. Confetti is thousands of tiny independent movements, so every frame is almost completely new.

**3.** The bitrate is a fixed budget of bits per second. The title needs little, the confetti would need much more, so the codec throws away detail and the picture breaks up into little squares. That is why videos with snow or confetti look worse on social media.

<!-- more -->

Film 10 seconds on your phone on a tripod and 10 seconds handheld, pointing at leaves in the wind. Compare the file sizes: is the order right? Then play the extra game “How much do picture and sound weigh?” and work out how the 4:2:0 trick saves half the data without anyone noticing.
