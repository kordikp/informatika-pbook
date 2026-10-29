---
id: expedice-bezpeci-thinker-en
translationOf: expedice-bezpeci-thinker
lang: en
type: spine
title: "The maths of ciphers: RSA in miniature and CryptoHack"
readingTime: 1
standalone: false
teaser: "How can two people who have never met and don’t share a key send each other a secret message?"
voice: universal
parent: null
diagram: null
core: false
lens: generic
visuality: text-first
depth: standard
formalism: light
lengthBand: standard
genre: explainer
status: accepted
concept: expedice-bezpeci-thinker
conceptTitle: "The maths of ciphers: RSA in miniature and CryptoHack"
objective: "How can two people who have never met and don’t share a key send each other a secret message?"
state: edited
carriers: prose|formula
---

**🔬 Side trip** · [Operation Flag](#expedice-bezpeci-en)

How can two people who have never met and don’t share a key send each other a secret message? The answer is **public-key encryption**, and the most famous of them is RSA. Try it in miniature, on paper.

Take two prime numbers p = 3 and q = 11. Their product n = 33 and the public key e = 3 may be known by everyone. Only you know the private key d = 7.

- **Encrypting** a message m: work out the remainder of $$m^3$$ divided by 33. For m = 4 you get 64 and the remainder is **31**.
- **Decrypting**: the remainder of $$31^7$$ divided by 33. You get **4** again.

**Your challenge:** encrypt m = 2 and then decrypt the result. Check that you get back to 2. Then try to figure out why an attacker could easily work out d if they knew p and q, and why real prime numbers are hundreds of digits long.

(Solution: 2³ = 8, remainder 8; 8⁷ = 2,097,152, the remainder after dividing by 33 is 2.)

The next step is [Introduction to CryptoHack](https://cryptohack.org/courses/intro/): cryptography tasks in Python, free, in English. Account and community Discord only with a parent.

**Back to the expedition:** [Operation Flag](#mission-expedice-bezpeci)
