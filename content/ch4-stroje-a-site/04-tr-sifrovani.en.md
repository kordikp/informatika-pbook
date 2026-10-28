---
id: sifrovani-en
translationOf: sifrovani
lang: en
type: spine
title: "Encryption: an envelope instead of a postcard"
readingTime: 2
standalone: true
teaser: "Your chat says “Messages are end-to-end encrypted”. What does that mean, and who can't read them, then?"
voice: universal
parent: null
diagram: null
core: true
recallQ: "A website has a padlock and https. Does that mean it can be trusted?"
recallA: "No. The padlock only says that the route between you and the website is encrypted. A scam website can have https too."
lens: generic
visuality: text-first
depth: intro
formalism: none
lengthBand: standard
genre: worked-example
status: accepted
concept: sifrovani
conceptTitle: "Encryption: an envelope instead of a postcard"
objective: "Your chat says “Messages are end-to-end encrypted”. What does that mean, and who can't read them, then?"
mustCover:
  - "Plain text, key, encrypted text"
  - "Encoding is a public rule, encryption needs a secret key"
  - "https and the padlock = an encrypted route, not proof of honesty; public Wi-Fi"
state: core
highlights:
  - "Plain text, key, encrypted text"
  - "Encoding is a public rule, encryption needs a secret key"
  - "https and the padlock = an encrypted route, not proof of honesty; public Wi-Fi"
carriers: prose
---

Your chat says “Messages are end-to-end encrypted”. What does that mean, and who can't read them, then?

Every router on the way holds the packet in its hands. An unencrypted message is like a **postcard**: anyone who carries it can read it. **Encryption** locks it with a **key**. Without the key it is an unreadable jumble.

A Caesar cipher with key 3 shifts each letter three places: A → D, B → E, H → K. The message HELLO turns into KHOOR. Whoever knows the key shifts the letters back. And whoever doesn't? You intercept the message TLLA HA AOL WHYR HA MPCL and try the keys one by one. With key 7 you get MEET AT THE PARK AT FIVE. Caesar has only 25 keys, so it can be cracked by trying. The ciphers in your phone have so many keys that no computer could try them all.

**Plain text** and a **key** give **encrypted text**. Whoever has the key can unlock the message. Whoever doesn't sees only a jumble.

**The padlock and https** in your browser mean that the **route** between you and the website is encrypted. They don't say the website is **honest**. A scam website can have a padlock too.

Encryption is not encoding. The rule of an encoding is public, the key of a cipher is secret.

**Try it!** Encrypt a message for a friend by shifting the letters. Agree on a key (for example a shift of 3, so A becomes D) and send it to them. Let a third classmate without the key try to crack the message. How long does it take them? The padlock in your browser does the same, just with a key so long that it can't be guessed.

> **Watch out, a common mistake:** “The padlock in the browser means the website is safe.” The padlock only means the connection is encrypted and nobody on the way can read it. A scam website can have a padlock too.

**Next:** A cipher can't be broken, so scammers attack the person instead. Even a phishing website can have a padlock. You'll see it in chapter 6. → [Scams target people](#c/podvod-cili-na-cloveka)
