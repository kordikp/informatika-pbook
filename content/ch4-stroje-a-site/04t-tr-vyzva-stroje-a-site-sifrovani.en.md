---
id: vyzva-stroje-a-site-sifrovani-en
translationOf: vyzva-stroje-a-site-sifrovani
lang: en
type: challenge
title: "A key agreed out loud"
level: 3
minutes: 40
readingTime: 3
standalone: true
teaser: "Caesar has a catch: both sides have to know the same key."
voice: universal
parent: null
diagram: null
core: false
status: accepted
concept: sifrovani
state: edited
lens: generic
visuality: text-first
depth: standard
formalism: none
lengthBand: deep
carriers: prose
---

Caesar has a catch: both sides have to know the same key. So how does your browser agree on a secret key with a server it has never met, when every router on the way reads what you say? In 1976 two mathematicians figured it out. And now you’ll work it out on paper.

<!-- task -->

You’ll need the **remainder after division**: 17 mod 5 = 2, because 17 = 3 × 5 + 2. It works like the hand on a clock.

In public, that is out loud, you and Ema agree on the numbers **p = 23** and **g = 5**. Then each of you secretly picks your own number: you **a = 6**, Ema **b = 15**.

1. Work out A = 5^6 mod 23 and send it out loud.
2. Ema sends B = 5^15 mod 23 out loud. Check that it comes out as 19.
3. Work out the key K = B^6 mod 23. Ema works out A^15 mod 23. Check that you both get the same number.
4. Tomáš was listening the whole time and knows the numbers 23, 5, A and 19. Find a method he could use to get the key. Then explain why he has no chance in real https, where p has about 600 digits.

**Success criterion:** A = 8, K comes out the same for both of you, and the attack in point 4 is described along with the reason why it fails for a large p.

<!-- hint -->

Don’t work out the whole power. Multiply step by step and after each multiplication keep only the remainder after dividing by 23. For example, 5^2 = 25, which mod 23 is 2, and 5^3 = 2 × 5 = 10.

<!-- hint -->

Why it comes out the same: B^a = (5^b)^a and A^b = (5^a)^b. Both are 5 to the power of (a × b).

<!-- hint -->

Tomáš knows 5 and A. Let him try powers of 5 one by one until he gets A. How many tries does that take for the number 23, and how many for a number with 600 digits?

<!-- solution -->

1. Powers of 5 mod 23: 5, 2, 10, 4, 20, 8. So **A = 8**.
2. 5^4 = 4 and 5^8 = 16. Then 5^15 = 5^8 × 5^4 × 5^2 × 5 = 16 × 4 × 2 × 5 = 640, and 640 mod 23 = **19**.
3. You: 19^2 = 361, mod 23 that’s 16. 19^3 = 16 × 19 = 304, mod 23 that’s 5. 19^6 = 5^2 = 25, mod 23 that’s **2**. Ema: 8^2 mod 23 = 18, 8^4 = 2, 8^8 = 4, 8^15 = 4 × 2 × 18 × 8 = 1,152, mod 23 that’s **2**. The key is **K = 2**.
4. Tomáš tries 5^1, 5^2, … and in the sixth step he already gets 8, so he finds out a = 6 and works out the key. But with a p of 600 digits there are about 10^600 possibilities. Not even a billion computers, each trying a billion possibilities a second, could try more than about 10^36 possibilities in the whole age of the universe. Real attacks are cleverer than trying everything, but even they can’t cope with numbers that big.

Watch out: agreeing on a key doesn’t yet tell you **who** you’re talking to. The server’s certificate checks that. It guarantees that you’re talking to the server of that domain. But it doesn’t say whether the website is honest.

<!-- more -->

Explain the trick to a friend without numbers, like mixing paint: a shared yellow, each of you mixes in your secret colour, you swap the mixtures, and each of you adds your secret colour once more. The result is the same, but the secret colours can’t be separated out of the mixtures. Then try your own p and g. Not every g works well: find out why g = 1 is a bad choice for p = 23.
