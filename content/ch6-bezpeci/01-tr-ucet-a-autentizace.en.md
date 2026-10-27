---
id: ucet-a-autentizace-en
translationOf: ucet-a-autentizace
lang: en
type: spine
title: "Account and password"
readingTime: 2
standalone: true
teaser: "You forget your password and your phone offers “Reset via e-mail”. So whoever gets into your e-mail gets into your phone too?"
voice: universal
parent: null
diagram: anim-sila-hesla-en
core: true
recallQ: "Why is it dangerous to have the same password for a game and for your e-mail?"
recallA: "When the game gets hacked and the password leaks, the attacker tries it on your e-mail too. Through the e-mail they can then reset the passwords to everything else."
lens: generic
visuality: balanced
depth: intro
formalism: none
lengthBand: standard
genre: worked-example
status: accepted
concept: ucet-a-autentizace
conceptTitle: "Account and password"
objective: "You forget your password and your phone offers “Reset via e-mail”. So whoever gets into your e-mail gets into your phone too?"
state: core
highlights:
  - "Account = your identity in a service; authentication = checking that it's really you"
  - "Password length and uniqueness; a leak from one service puts the others at risk"
  - "A password manager and 2FA (something you know + something you have)"
carriers: prose|animation
---

You forget your password and your phone offers “Reset via e-mail”. So whoever gets into your e-mail gets into your phone too?

An **account** is your identity in a service. When you log in, the service checks that it really is you. This is called **authentication**. Whoever knows your password is you, as far as the service is concerned.

An attacker who has stolen a database of passwords tries 10 billion passwords a second. First well-known passwords, then words and their variations, and finally every combination. **password123** is guessed instantly. **P@ss1** too. **Tr4ctor!** looks complicated, but falls in under a minute. The sentence **giraffe eats dumplings on the Moon** would take about a million years.

A strong password is above all **long**. A sentence of several words beats a short password with symbols. The attacker tries variations like P@ss or Tr4ctor among the very first.

**A different password for every service.** When a password leaks from a game, the attacker tries it on your e-mail straight away.

You don't have to remember them. A **password manager** is a safe that remembers them for you. And on top of that, **two-factor authentication (2FA)**: something you know (the password) and something you have (your phone).

**Try it!** Tonight: 1) work out how many services you use the same password for (honestly!), 2) switch on two-factor authentication for your e-mail, 3) check on haveibeenpwned.com whether your e-mail has appeared in a known data leak.

> **Watch out, a common mistake:** “A short password with symbols, like P@ss1, is strong.” An attacker tries it in no time. A long phrase made of words is stronger. And two-factor authentication protects you even if your password leaks.

**Next:** A password is more often tricked out of you by a scammer than guessed. → [Scams target people](#c/podvod-cili-na-cloveka)
