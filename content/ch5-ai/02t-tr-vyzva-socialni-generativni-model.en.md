---
id: vyzva-socialni-generativni-model-en
translationOf: vyzva-socialni-generativni-model
lang: en
type: challenge
title: "The detector that gets it wrong more often than you think"
level: 3
minutes: 25
readingTime: 2
standalone: true
teaser: "A new app promises: “Spots 95 % of deepfakes!” Sounds great."
voice: universal
parent: svet-socialni-generativni-model-en
diagram: null
core: false
status: accepted
concept: generativni-model
state: edited
lens: socialni
visuality: text-first
depth: standard
formalism: none
lengthBand: standard
carriers: prose
---

A new app promises: “Spots 95 % of deepfakes!” Sounds great. But if it marks a video as fake, it is almost certainly a mistake. How is that possible? Work it out.

<!-- task -->

There are **10,000 videos** in the feed and **100** of them are deepfakes. The detector:

- correctly flags **95 %** of the deepfakes;
- by mistake also flags **5 %** of the real videos.

1. How many videos does the detector flag in total? What is the chance that a flagged video really is a deepfake?
2. To what percentage must the mistakes on real videos drop for a flagged video to be a deepfake with a probability of more than 50 %? (It still catches 95 deepfakes.)
3. You check the flagged videos once more with another method, for example by searching for the earliest appearance. It is just as good (95 % and 5 %) and independent of the first detector. What is the chance now that a video that fails the second check as well is a deepfake?

<!-- hint -->

Split the 10,000 videos into two groups: 100 deepfakes and 9,900 real ones. Work out each one separately.

<!-- hint -->

There are 95 flagged deepfakes. There must be fewer than 95 flagged real videos. What percentage of 9,900 is that?

<!-- hint -->

The second check only gets the flagged videos. Of the 95 deepfakes it catches 95 %, and of the real videos flagged by mistake it lets through 5 % as suspicious.

<!-- solution -->

**1.** Deepfakes: 95 % of 100 = 95. Real videos: 5 % of 9,900 = 495. Flagged in total: **590**. Only 95 of the 590 are really fake, so about **16 %**. There are so many real videos that even a small percentage of mistakes outweighs all the deepfakes caught. This is called the **base rate fallacy**.

**2.** You need fewer than 95 mistakes out of 9,900, so fewer than **about 0.96 %**, roughly under 1 %. A detector five times more accurate than the advert promises.

**3.** Deepfakes: 95 % of 95 ≈ 90. Real videos: 5 % of 495 ≈ 25. The chance is 90 out of 115, about **78 %**. Two independent checks work much better than one famous one. That is why fact-checkers don’t rely on one tool but put evidence together: origin, earliest appearance, place, time.

<!-- more -->

Try the real method fact-checkers use: the InVID-WeVerify plugin chops a video into keyframes and runs them through reverse image search. That is exactly the “second independent check”. Then go on the expedition “The fact-checking team”, where you will use it on a viral video. And think: if 1 in 10 videos in the feed were deepfakes instead of 1 in 100, how would the result of task 1 change?
