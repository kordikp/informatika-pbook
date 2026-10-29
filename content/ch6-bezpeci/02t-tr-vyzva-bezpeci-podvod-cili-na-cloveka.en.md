---
id: vyzva-bezpeci-podvod-cili-na-cloveka-en
translationOf: vyzva-bezpeci-podvod-cili-na-cloveka
lang: en
type: challenge
title: "Read an address like a browser"
level: 3
minutes: 25
readingTime: 2
standalone: true
teaser: "A scam page copies the logo, the colours and the texts."
voice: universal
parent: null
diagram: null
core: false
status: accepted
concept: podvod-cili-na-cloveka
state: edited
lens: generic
visuality: text-first
depth: standard
formalism: none
lengthBand: deep
carriers: prose
---

A scam page copies the logo, the colours and the texts. There’s one thing it can’t copy: the domain. But you have to know how to read it.

<!-- task -->

A browser reads an address by exact rules. Now you’ll work them out on your own. Ondra got six links in his messages:

1. `https://login.seznam.cz.overeni-uctu.top/prihlaseni`
2. `https://email.seznam.cz/posta`
3. `https://seznam.cz@prihlas-se.top/login`
4. `https://www.seznarn.info/`
5. `https://steamcommunity.com-darky.top/trade`
6. `https://steamcommunity.com/id/ondra`

**Task:**

- **a)** For each address, write down who the page really belongs to. You’re looking for the *registered domain*, the name that someone bought.
- **b)** Write down a **3-step method** that pulls the owner out of any address. It must work on all six addresses without exception. Test it like a program: step by step, no “but it’s obvious”.
- **c)** Ondra objects: “That page had a padlock, so it was safe.” Explain in two sentences what the padlock (HTTPS) proves and what it doesn’t.

**Success criterion:** all six owners right and a method that fails on no address.

<!-- hint -->

An address has the form `https://` + host + `/path`. The path after the first single slash doesn’t decide the owner.

<!-- hint -->

The @ sign is an old trick: the browser treats everything before it as a “username”, not as an address.

<!-- hint -->

Read the host **from the right**: the ending (.cz, .com, .top) and one part before it, that’s the owner. A hyphen joins, it doesn’t split. And read letter by letter.

<!-- solution -->

**a)** 1: **overeni-uctu.top** (scam). 2: **seznam.cz** (real, email is a subdomain). 3: **prihlas-se.top** (scam). 4: **seznarn.info** (scam, r and n imitate m). 5: **com-darky.top** (scam). 6: **steamcommunity.com** (real).

**b)** **1.** Cut off `https://` and everything from the first slash onwards. **2.** If there’s an @ sign in what’s left, throw away everything before it, and the @ too. **3.** From what’s left, take the ending from the right and one part before it (parts are separated by dots, not hyphens) and read it letter by letter. For endings like .co.uk you take three parts. The browser remembers such exceptions from a list.

**c)** The padlock means the connection is **encrypted** and that you’re talking to **the owner of that domain**. It doesn’t prove the owner is honest. A scammer can get a certificate for free in a few minutes.

<!-- more -->

Play the extra game “Who owns this address?”. Then make six tricky addresses of your own for your classmates (made up, don’t register them anywhere) and let them guess. If you want to go deeper, find out what **punycode** is: an address in which the Latin “a” is replaced by an identical-looking letter from the Cyrillic alphabet, and how browsers defend against it.
