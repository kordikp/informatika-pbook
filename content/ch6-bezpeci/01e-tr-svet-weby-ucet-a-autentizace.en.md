---
id: svet-weby-ucet-a-autentizace-en
translationOf: svet-weby-ucet-a-autentizace
lang: en
type: spine
title: "A leak from one forum"
readingTime: 2
standalone: true
teaser: "Someone hacked a Minecraft forum you used to visit two years ago. The passwords of all its users are on the internet. Why should you care if you don’t go there any more?"
voice: universal
parent: null
diagram: null
core: false
recallQ: "Why is it dangerous to have the same password for a game and for your e-mail?"
recallA: "When the game gets hacked and the password leaks, the attacker tries it on your e-mail too. Through the e-mail they can then reset the passwords to everything else."
lens: weby
visuality: text-first
depth: intro
formalism: none
lengthBand: standard
genre: story
status: accepted
concept: ucet-a-autentizace
state: edited
highlights:
  - "Account = your identity in a service; authentication = checking that it's really you"
  - "Password length and uniqueness; a leak from one service puts the others at risk"
  - "A password manager and 2FA (something you know + something you have)"
carriers: prose
---

Someone hacked a Minecraft forum you used to visit two years ago. The passwords of all its users are on the internet. Why should you care if you don’t go there any more?

Because an **account** is your **identity** in a service, and the service recognises you by your password. Checking that it really is you is called **authentication**. Whoever knows your name and password is you, as far as the service is concerned.

Attackers don’t throw leaked lists away. They automatically try the e-mail and password pairs on hundreds of other websites: e-mail, Instagram, Discord, Steam. If you have the **same password** everywhere, **a leak from one service** opens the others too. And through your e-mail you can reset the password to almost anything.

A decent website does not store passwords the way you typed them. It only stores their **fingerprint**, from which the password cannot be calculated back. But an attacker can guess a short, common password: they calculate the fingerprints of a billion common passwords and compare them. *password123* falls in a second. **Length** is what counts. A sentence of several words, like *the cat drinks blue tea*, is easy to remember and hard to guess.

The defence that works on every website:

1. **A different password for every service.** You don’t have to remember them, a **password manager** stores them.
2. **Two-factor authentication (2FA).** To the password you **know**, you add a code from the phone you **have**. A leaked password alone is then not enough.
3. **Check for leaks.** On haveibeenpwned.com you can find out whether your e-mail was in a leak. If it was, change the password everywhere it was the same.

**Try it!** Count how many different passwords you really use. Are there fewer than services? Then pick your most important account, your e-mail, and give it a unique long password and 2FA.

**Next in the world of websites:** → [Cookies: who follows you around the web](#svet-weby-digitalni-stopa-en)
