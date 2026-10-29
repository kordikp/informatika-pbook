---
id: expedice-data-1-en
translationOf: expedice-data-1
lang: en
type: spine
title: "Five days are not enough"
readingTime: 1
standalone: false
teaser: "Ema wrote down the bus delay in minutes and the weather: | day | delay | weather | |---|---|---| | 1 | 1 | dry | | 2 | 0 | dry | | 3 | 2 | rain | | 4 | 2 | dry…"
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
concept: expedice-data-1
conceptTitle: "Five days are not enough"
objective: "Ema wrote down the bus delay in minutes and the weather: | day | delay | weather | |---|---|---| | 1 | 1 | dry | | 2 | 0 | dry | | 3 | 2 | rain | | 4 | 2 | dry…"
state: edited
carriers: prose|table
---

**🧩 Challenge** · step 1 of 5 · [The case of the late bus](#expedice-data-en)

Ema wrote down the bus delay in minutes and the weather:

| day | delay | weather |
|---|---|---|
| 1 | 1 | dry |
| 2 | 0 | dry |
| 3 | 2 | rain |
| 4 | 2 | dry |
| 5 | 4 | rain |
| 6 | 1 | dry |
| 7 | 25 | rain |
| 8 | 3 | dry |
| 9 | 3 | rain |
| 10 | 0 | dry |

1. For the dry and the rainy days, work out the **mean** and the **median** (the middle value of the sorted numbers).
2. On day 7 there was an accident on the road. How does the rain mean change if you leave that day out? And the median?
3. Write in one sentence what you **can** say from the data and what you **can’t**.

:::reveal 🔑 Solution
Dry (0, 0, 1, 1, 2, 3): mean about 1.2 min, median 1. Rain (2, 3, 4, 25): mean 8.5 min, median 3.5. Without day 7, the rain mean is 3 and the median 3. So a single accident nearly tripled the mean, while the median hardly moved. **The median is resistant to outliers.** The difference of 1 vs. 3 minutes suggests that the delay is bigger in the rain, but 4 rainy days are too few. And watch out for a third thing: in the rain there are more cars and more people take the bus. The data say “the delay was bigger in the rain”, not “rain causes delays”.
:::

**Design a table for real measuring:** columns date, service, planned time, actual time, delay, weather (only the values dry, rain, snow). Rules: time always in the format 7:42, one row = one journey, no day twice.

**Next step:** [Workshop: CODAP in 30 minutes](#expedice-data-2-en)
