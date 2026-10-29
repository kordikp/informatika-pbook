---
id: vyzva-socialni-sifrovani-en
translationOf: vyzva-socialni-sifrovani
lang: en
type: challenge
title: "The key nobody heard"
level: 3
minutes: 35
readingTime: 3
standalone: true
teaser: "Ema wants to write to Tomáš in secret, but every word they send goes through a server."
voice: universal
parent: svet-socialni-sifrovani-en
diagram: null
core: false
status: accepted
concept: sifrovani
state: edited
lens: socialni
visuality: text-first
depth: standard
formalism: light
lengthBand: deep
carriers: prose|formula
---

Ema wants to write to Tomáš in secret, but every word they send goes through a server. How do they agree on a key when the whole world can hear them? Your chat app solves this every time you start a new chat. And now you will work it out on a calculator.

<!-- task -->

The recipe is called the **Diffie–Hellman key exchange**. Here it is shrunk down to small numbers. Writing “mod 23” means “the remainder after dividing by 23”.

- In public (the server sees it) they agree on the numbers **23** and **5**.
- Ema secretly picks **a = 4** in her head, Tomáš picks a secret **b = 3**.
- Ema sends $A = 5^a \bmod 23$, Tomáš sends $B = 5^b \bmod 23$.
- Ema works out $B^a \bmod 23$, Tomáš $A^b \bmod 23$. That is their shared key.

1. Work out A, B and both keys. Do they come out the same? Why?
2. Now you are the server. You only see 23, 5, A and B. Find Ema’s secret number and the shared key. How many tries do you need? And why would it be impossible if the numbers had hundreds of digits?
3. The server is evil. It picks a secret **m = 2** and, instead of A to Tomáš and instead of B to Ema, it sends its own number $M = 5^2 \bmod 23$. Which key does Ema work out, which one does Tomáš, and does the server know them? How can Ema and Tomáš uncover the trick?

<!-- hint -->

$5^4 = 625$ and $625 = 27 \cdot 23 + 4$, so A = 4. Work out B the same way from $5^3 = 125$.

<!-- hint -->

The server tries $5^1, 5^2, 5^3, \dots$ (mod 23) until it gets A. You get each next power from the one before: multiply by 5 and take the remainder after dividing by 23.

<!-- hint -->

In task 3, Ema works out $M^a$ and Tomáš $M^b$. With Ema, the server works out $A^m$, and with Tomáš $B^m$.

<!-- solution -->

**1.** A = 4, B = 125 mod 23 = **10**. Ema: $10^4 = 10\,000$, the remainder after dividing by 23 is **18**. Tomáš: $4^3 = 64$, remainder **18**. The same, because in fact both worked out $5^{a \cdot b} = 5^{12} \bmod 23$, just each in a different order.

**2.** Powers of 5 mod 23: 5, 2, 10, **4**. After 4 tries you know that a = 4, and you can work out the key 18. With numbers hundreds of digits long there would be more tries than there are atoms in the universe. Raising to a power is fast, but going back is practically impossible. A function like that is called **one-way**.

**3.** M = 25 mod 23 = 2. Ema works out $2^4 = 16$, Tomáš $2^3 = 8$. The server knows both: $4^2 = 16$ and $10^2 = 100$ mod 23 = 8. It unlocks every message, reads it and locks it again with the key for the other person. That is a **man-in-the-middle** attack. The only way to uncover it is to compare the **safety code** (the key’s fingerprint) another way, for example face to face: Ema’s code comes from key 16, Tomáš’s from key 8, and they don’t match.

<!-- more -->

In your chat app, find “safety number” or “verify encryption” on a contact and compare it with a friend in person. Now you know what that code protects against. Then play the extra game “What end-to-end encryption hides”: even a perfect key exchange doesn’t hide metadata or an unencrypted backup. If you want to go further, look up how the Signal protocol works: it extends the same idea with a new key for every message.
