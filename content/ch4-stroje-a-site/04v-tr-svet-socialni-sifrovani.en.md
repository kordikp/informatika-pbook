---
id: svet-socialni-sifrovani-en
translationOf: svet-socialni-sifrovani
lang: en
type: spine
title: "Who reads your messages"
readingTime: 2
standalone: true
teaser: "You send a friend a message. Can anyone apart from her read it? It depends on where the message gets locked and who has the key."
voice: universal
parent: null
diagram: null
core: false
recallQ: "A website has a padlock and https. Does that mean it can be trusted?"
recallA: "No. The padlock only says that the route between you and the website is encrypted. A scam website can have https too."
lens: socialni
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

You send a friend a message. Can anyone apart from her read it? It depends on where the message gets locked and who has the key.

An unencrypted message on its way is like a **postcard**: anyone who carries it can read it. **Encryption** turns it into a sealed envelope. The **plaintext** *Friday at four outside the cinema* is turned by a **key** into **ciphertext**, an unreadable jumble. Only someone who has the key can read it.

What matters is **where** the envelope gets opened:

- **Encryption in transit** (https): the message is locked between your phone and the app’s server. On the server it is unlocked, and the company can read it, store it and hand it over if the authorities order it to.
- **End-to-end encryption**: your phone locks the message, and only your friend’s phone unlocks it. The server carries only the jumble and has no key. Signal and WhatsApp, for example, encrypt like this. For other apps, check the settings.

![A message encrypted in transit and a message encrypted end to end](images/svet-socialni-e2e.en.svg)

Encryption is not **encoding**. Emoji, text and photos are encoded into numbers on your phone by a **public rule** that everyone knows, and that hides nothing. Encryption needs a **secret key**.

And even the best lock doesn’t hide everything. Your friend can take a screenshot of an end-to-end encrypted message, forward it or show it to someone. Encryption protects the journey, not the person at the other end. On **public Wi-Fi** in a café, though, it pays off that apps encrypt at least in transit: without that, anyone on the same network could read your messages.

**Try it!** Look in the settings of the app you use to message your friends. Does it mention end-to-end encryption? Does it apply to all chats, or only to some?

**Next in the world of social media:** → [A video of something that never happened](#svet-socialni-generativni-model-en)
