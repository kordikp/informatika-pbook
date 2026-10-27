---
id: svet-hry-cesta-dat-en
translationOf: svet-hry-cesta-dat
lang: en
type: spine
title: "Why an online game lags"
readingTime: 1
standalone: true
teaser: "You fire first, but you’re the one who goes down. The game didn’t cheat you. Your data was simply still on its way."
voice: universal
parent: null
diagram: null
core: false
recallQ: "What happens to the packets of your video if one router on the way goes down?"
recallA: "The other routers send them another way. The internet has no single centre, so part of it going down doesn't stop it."
lens: hry
visuality: balanced
depth: intro
formalism: none
lengthBand: standard
genre: explainer
status: accepted
concept: cesta-dat
state: edited
highlights:
  - "Client and server: request and response (web, e-mail, streaming)"
  - "Packets, IP address, DNS turns names into addresses"
  - "The internet has no single centre: detours when something goes down"
carriers: prose|image
---

You fire first, but you’re the one who goes down. The game didn’t cheat you. Your data was simply still on its way.

An online game is a **client and a server**. Your phone or console (the client) sends a **request**: *I pressed fire, I’m standing here*. The game server works it out and sends a **response** to all players: who hit whom.

![The packets’ trip from your phone to the game server and back](images/svet-hry-ping.en.svg)

Data doesn’t travel in one piece. It is split into small **packets**, and each one carries the **IP address** of its destination. The server might be called *eu.hra.cz*, but the packets need a number. **DNS**, the phone book of the internet, translates the name into an address. Then the packets travel from **router** to router until they reach the server.

The time there and back is the **ping**, in milliseconds. 20 ms is great; 200 ms means you see the world a fifth of a second late. That’s why you play on a server that is close: in Europe, not in Australia.

When a router on the way goes down, the packets take a **detour**. The internet has no single centre, so the game carries on; the ping just jumps for a moment. And when a few packets get lost completely, the other players’ characters “teleport”: for a moment the game didn’t know where they were.

**Try it!** Find where your favourite online game shows the ping (often in the settings or in a corner of the screen). What is it at home on Wi-Fi, and what on mobile data?

**Next in the world of games:** → [Free skins](#svet-hry-podvod-cili-na-cloveka-en)
