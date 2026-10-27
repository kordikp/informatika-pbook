---
id: svet-weby-sifrovani-en
translationOf: svet-weby-sifrovani
lang: en
type: spine
title: "The padlock in the address bar"
readingTime: 2
standalone: true
teaser: "On the school Wi-Fi you type a password into a form. Who can read it on its way to the server? It depends on a single letter: s."
voice: universal
parent: null
diagram: null
core: false
recallQ: "A website has a padlock and https. Does that mean it can be trusted?"
recallA: "No. The padlock only says that the route between you and the website is encrypted. A scam website can have https too."
lens: weby
visuality: balanced
depth: intro
formalism: none
lengthBand: standard
genre: explainer
status: accepted
concept: sifrovani
state: edited
highlights:
  - "Plain text, key, encrypted text"
  - "Encoding is a public rule, encryption needs a secret key"
  - "https and the padlock = an encrypted route, not proof of honesty; public Wi-Fi"
carriers: prose|image
---

On the school Wi-Fi you type a password into a form. Who can read it on its way to the server? It depends on a single letter: s.

Without encryption a form travels through the network like a **postcard**: every router on the way can read it, and so can anyone sitting on the same **public Wi-Fi**. **http** is a postcard. **https** is an **envelope**: at the start the browser and the server agree on a **key**, and everything they send each other is encrypted with it. **Plain text** like *password123* becomes **ciphertext** like *x9Qf…*, an unreadable jumble for anyone who does not have the key.

![The same form sent over http and over https](images/svet-weby-zamek.en.svg)

Encryption is not **encoding**. Encoding, such as UTF-8, is a **public rule**: anyone who knows it can read the text. **Encryption** needs a **secret key**. That is why an “encoded password” is not a hidden password.

And above all: the **padlock** does not say that the website is **honest**. It only says that the **route** between you and the website in the address bar is encrypted. The scam site *school-login.net* has https too; anyone can get an encryption certificate for free today. The padlock guarantees that nobody reads your password on the way. It does not tell you whether you are sending it to a scammer right now.

For your website this gives a simple rule. GitHub Pages and Netlify turn https on by themselves, for free. Leave it on, even if the website has no form: browsers mark pages without https as not secure.

**Try it!** In your browser, click the padlock next to the address of your favourite page and look at the certificate. Which domain was it issued for? How would you recognise a scam site that has a padlock too?

**Next in the world of websites:** → [A leak from one forum](#svet-weby-ucet-a-autentizace-en)
