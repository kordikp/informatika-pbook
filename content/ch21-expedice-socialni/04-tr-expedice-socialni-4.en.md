---
id: expedice-socialni-4-en
translationOf: expedice-socialni-4
lang: en
type: spine
title: "Under the bonnet of a real feed"
readingTime: 1
standalone: false
teaser: "According to the blog that came with the code back then, the feed has three floors: 1."
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
concept: expedice-socialni-4
conceptTitle: "Under the bonnet of a real feed"
objective: "According to the blog that came with the code back then, the feed has three floors: 1."
state: edited
carriers: prose
---

**🔍 Analysis** · step 4 of 5 · [The fact-checking team](#expedice-socialni-en)

According to the blog that came with the code back then, the feed has **three floors**:

1. **Candidates.** From a giant pile of posts it picks about 1,500 candidates. Roughly half are from accounts you follow, half from others.
2. **Ranking.** For each candidate, a neural network estimates how likely you are to like it, reply, share it, but also report it or tap “not interested”. Each probability is multiplied by a weight and everything is added up. According to the published weights, a reply had roughly 27 times more weight than a like, and a report had a huge negative weight.
3. **Filters.** They throw out blocked and muted accounts and make sure there aren’t ten posts in a row from one author.

Then open the complete opposite: the starter kit **bluesky-social/feed-generator** on GitHub (you can read it without an account). In the *src/algos* folder there is an example feed, *whats-alf*, which picks posts about the alien ALF. The whole thing fits on one screen.

**Analysis, answer:**

- Why does a **reply** have more weight than a like? What happens to arguments in the feed?
- Which of your signals from the challenge “Build a feed from numbers” matches which floor?
- What **can’t you tell** from the published code? (Hint: the network learned from data that wasn’t published.)
- In what way is the ALF feed more honest, and in what way worse?

**Criterion:** a sentence with a reason for each question. Careful, the code is from 2023 and today’s X may work differently.

**Next step:** [A fair feed](#expedice-socialni-5-en)
