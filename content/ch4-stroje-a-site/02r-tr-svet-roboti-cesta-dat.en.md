---
id: svet-roboti-cesta-dat-en
translationOf: svet-roboti-cesta-dat
lang: en
type: spine
title: "Radio between micro:bits"
readingTime: 1
standalone: true
teaser: "Two micro:bits at opposite ends of the classroom. You press A on one, and a heart lights up on the other. No cable, no Wi-Fi, no internet."
voice: universal
parent: null
diagram: null
core: false
recallQ: "What happens to the packets of your video if one router on the way goes down?"
recallA: "The other routers send them another way. The internet has no single centre, so part of it going down doesn't stop it."
lens: roboti
visuality: balanced
depth: intro
formalism: none
lengthBand: standard
genre: worked-example
status: accepted
concept: cesta-dat
state: edited
highlights:
  - "Client and server: request and response (web, e-mail, streaming)"
  - "Packets, IP address, DNS turns names into addresses"
  - "The internet has no single centre: detours when something goes down"
carriers: prose|image|code
---

Two micro:bits at opposite ends of the classroom. You press A on one, and a heart lights up on the other. No cable, no Wi-Fi, no internet.

micro:bits have a **radio**. One sends a message (a number or a short text), the others receive it:

```
on start: radio set group 7
on button A pressed: radio send number 1
on radio received number: show icon ♥
```

![Three micro:bits in group 7 and one in group 3](images/svet-roboti-radio.en.svg)

A **group** is something like an address. Only micro:bits in the same group get the message; the others ignore it. Every message is a small **packet**: the content, the group and who sent it.

On the internet it’s similar, only on a big scale. Your phone (the **client**) sends a **request** and the **server** sends a **response**. Packets carry an **IP address**, and **DNS** translates names like *microbit.org* into numbers. On the way, **routers** pass the packets along.

The micro:bits’ radio has no centre: everyone in range and in the group hears the message. The internet has no single centre either. When one router goes down, the packets take a **detour** through others. And a micro:bit that is too far away? It doesn’t get the message. The radio only reaches a few dozen metres, and no router carries the message on for it.

**Try it!** Agree on a secret group (a number 0–255) with a classmate and send each other a message. Can someone who doesn’t know the group pick it up? And how far apart does it still work?

**Next in the world of robots:** → [Train a micro:bit on your own movements](#svet-roboti-ai-se-uci-z-dat-en)
