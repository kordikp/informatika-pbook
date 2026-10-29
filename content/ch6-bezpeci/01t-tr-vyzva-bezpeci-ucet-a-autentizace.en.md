---
id: vyzva-bezpeci-ucet-a-autentizace-en
translationOf: vyzva-bezpeci-ucet-a-autentizace
lang: en
type: challenge
title: "Work out how long an attacker needs to guess"
level: 3
minutes: 30
readingTime: 3
standalone: true
teaser: "The game “How long until it’s guessed?” gave you the numbers."
voice: universal
parent: null
diagram: null
core: false
status: accepted
concept: ucet-a-autentizace
state: edited
lens: generic
visuality: text-first
depth: standard
formalism: light
lengthBand: deep
carriers: prose|formula
---

The game “How long until it’s guessed?” gave you the numbers. Now you’ll work them out without it, and you’ll run into one surprise.

<!-- task -->

An attacker has stolen a database of password hashes and is guessing on their own computer: **10 billion guesses per second**. Three passwords stand against them:

- **A**: 8 completely random characters from the 95 characters on a keyboard (lowercase and uppercase letters, digits, symbols), for example `k#9Qv!2m`.
- **B**: 4 random words from a list of 7,776 words. Each word is picked by rolling five dice: 6 · 6 · 6 · 6 · 6 = 7776. For example `hill-owl-lamp-tunnel`.
- **C**: `Tr4mvaj2013`.

You get the number of all possibilities as the *size of the alphabet* raised to the power of the *length*. For password A it is $$95^8$$.

1. How many days does the attacker need to try **all** the possibilities for A and for B?
2. How many words must a type B password have for the whole guessing to take **more than 50 years**?
3. How many characters must the shortest password made only of lowercase letters (26 characters) have to have more possibilities than A?
4. Why does password C fall not in years but in a fraction of a second? Estimate the number of guesses: the attacker takes 100,000 words, 100 variations of each (4 instead of a, @ instead of a…) and 100 years.

**Success criterion:** four numbers, each right to at least the order of magnitude, and one sentence about when the password-strength calculation applies at all.

<!-- hint -->

A calculator does powers with the xʸ button. A day has 86,400 seconds, a year about 31.6 million seconds.

<!-- hint -->

Compare $$95^8$$ and $$7776^4$$. You may be surprised how close they are.

<!-- hint -->

For question 3, try $$26^{11}$$ and $$26^{12}$$ in turn and compare them with $$95^8$$.

<!-- solution -->

1. **A**: $$95^8$$ is about 6.6 · 10¹⁵ possibilities. Divided by 10¹⁰ that gives about 663,000 seconds, so **about 7.7 days**. **B**: $$7776^4$$ is about 3.7 · 10¹⁵, so **about 4.2 days**. Four words are roughly as strong as 8 random characters, they’re just much easier to remember. (On average the attacker finds the password in half that time.)

2. **Five words**: $$7776^5$$ is about 2.8 · 10¹⁹, which is **about 90 years**. Each extra word multiplies the time by 7,776.

3. $$26^{11}$$ is about 3.7 · 10¹⁵, still less than A. $$26^{12}$$ is about 9.5 · 10¹⁶, and that is more. **12 lowercase letters** are enough. Length beats symbols.

4. 100,000 · 100 · 100 = 10⁹ guesses, which is **0.1 seconds**. The attacker doesn’t guess blindly but starts from the most likely passwords. **The strength calculation only applies to a password that is truly random**: picked by dice or a generator, not by your head.

<!-- more -->

Make yourself a dice password: five words, each picked by rolling five dice (the method is called diceware). Then read how the Have I Been Pwned service finds out whether your password has leaked without ever seeing it: [Troy Hunt’s article](https://www.troyhunt.com/understanding-have-i-been-pwneds-use-of-sha-1-and-k-anonymity/) (in English). And play the extra game “How a website checks a password it doesn’t know”.
