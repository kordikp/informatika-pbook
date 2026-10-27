---
id: svet-tvorba-kodovani-en
translationOf: svet-tvorba-kodovani
lang: en
type: spine
title: "Why a minute of video takes hundreds of megabytes"
readingTime: 2
standalone: true
teaser: "You film a minute of 4K video on your phone, and it takes up hundreds of megabytes. You send the same minute over chat, and it arrives in a few seconds. Where did all those numbers go?"
voice: universal
parent: null
diagram: null
core: false
recallQ: "Why does a photo with a higher resolution make a bigger file?"
recallA: "It is made of more pixels, and every pixel is encoded as numbers. More pixels mean more numbers, which means more bytes."
lens: tvorba
visuality: balanced
depth: intro
formalism: none
lengthBand: standard
genre: explainer
status: accepted
concept: kodovani
state: edited
highlights:
  - "Encoding = agreed rules for converting (pixel → number, letter → number)"
  - "Data size: bit, byte, MB, GB; resolution and quality make a file bigger"
  - "The file type (extension) says how to read the numbers; compression saves space"
carriers: prose|image
---

You film a minute of 4K video on your phone, and it takes up hundreds of megabytes. You send the same minute over chat, and it arrives in a few seconds. Where did all those numbers go?

A video is a series of pictures, **frames**, usually 30 per second. Each frame is a grid of pixels, and each pixel is three numbers: how much red, green and blue. This is **encoding**, agreed rules for turning a picture into numbers. One colour number takes 8 **bits**, which is one **byte**. A 4K frame is 3840 × 2160, over 8 million pixels, so about 25 **MB** of numbers. Thirty frames a second, sixty seconds: an uncompressed minute would be over 40 **GB**.

![A minute of video: frames, pixels and compression](images/svet-tvorba-video.en.svg)

That it is only a few hundred MB is the work of **compression**. A video doesn’t store every frame in full. It stores one in full, and for the next ones only what has changed: when only a hand moves in a scene, the rest of the picture isn’t stored again. And it leaves out details the eye won’t notice. That is why a video of confetti or rain compresses badly: almost everything in it changes.

When you send a video over chat, the app re-encodes it: it lowers the **resolution** and compresses it more. That is why it arrives fast and looks worse. More detail means more numbers, and so a bigger file.

When you export a video from an editor, these are exactly the things you choose: resolution (1080p is enough for a phone and for the projector in your classroom), frames per second and quality. The **file type** says how to read the numbers: **.mp4** is video, **.mp3** sound, **.png** a picture. Sound is numbers too, 44,100 samples per second. The .mp3 format compresses it by leaving out tones your ear can’t hear anyway.

**Try it!** Film ten seconds of video on your phone twice: once at the highest resolution, once at the lowest. Compare the file sizes. How many times bigger is one than the other, and does that match the number of pixels?

**Next in the world of creating with AI:** → [Why generating takes time](#svet-tvorba-uvnitr-zarizeni-en)
