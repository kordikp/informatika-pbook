---
id: expedice-bezpeci-3-en
translationOf: expedice-bezpeci-3
lang: en
type: spine
title: "The password nobody sees"
readingTime: 2
standalone: false
teaser: "The Have I Been Pwned service collects passwords from public leaks, hundreds of millions of passwords."
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
concept: expedice-bezpeci-3
conceptTitle: "The password nobody sees"
objective: "The Have I Been Pwned service collects passwords from public leaks, hundreds of millions of passwords."
state: edited
carriers: prose
---

**🔍 Analysis** · step 3 of 5 · [Operation Flag](#expedice-bezpeci-en)

The **Have I Been Pwned** service collects passwords from public leaks, hundreds of millions of passwords. It can tell you whether your password is among them. And yet it never gets it. How?

The service’s author himself, Troy Hunt, wrote an analysis: [Understanding Have I Been Pwned's Use of SHA-1 and k-Anonymity](https://www.troyhunt.com/understanding-have-i-been-pwneds-use-of-sha-1-and-k-anonymity/) (in English, a translator will help).

**The method in a nutshell:**

1. Your computer calculates a SHA-1 **hash** from the password: 40 characters from 0–9 and A–F. The practice password `P@ssw0rd` gives a hash that starts with `21BD1`.
2. It sends **only the first 5 characters** of the hash to the server.
3. The server returns all the hashes from leaks that start like that. There are hundreds of them.
4. Your computer compares the rest by itself, on your side.

**Questions for the analysis:**

- **a)** How many different 5-character starts can there be? Each character has 16 options.
- **b)** The server only knows `21BD1`. Why isn’t that enough for it to figure out your password?
- **c)** What would go wrong if the whole hash were sent?
- **d)** Why doesn’t the result “not found” mean the password is good? Remember `Tr4mvaj2013`.

**Check it:** in CyberChef, use the **SHA1** operation on `P@ssw0rd` and check that the hash really starts with 21BD1.

:::reveal 🔑 Solution
- **a)** 16⁵ = 1,048,576 starts.
- **b)** Each start has hundreds of leaked hashes, plus countless passwords that have never leaked. The server can’t tell which of them is yours.
- **c)** With the whole hash, the server, or anyone eavesdropping on the connection, would know exactly your password, if it had ever leaked.
- **d)** The list only contains passwords that have already leaked. A weak password that hasn’t leaked yet will still be guessed by an attacker in a fraction of a second. This trick is called **k-anonymity**: your query hides among hundreds of others. The same idea also protects data in your digital footprint.
:::

**Next step:** [Find your competition](#expedice-bezpeci-4-en)
