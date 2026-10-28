---
id: cesta-dat-en
translationOf: cesta-dat
lang: en
type: spine
title: "How data travels"
readingTime: 2
standalone: true
teaser: "You send a message to a friend sitting next to you. Yet it may fly through another country. Why?"
voice: universal
parent: null
diagram: anim-request-response-en
core: true
recallQ: "What happens to the packets of your video if one router on the way goes down?"
recallA: "The other routers send them another way. The internet has no single centre, so part of it going down doesn't stop it."
lens: generic
visuality: balanced
depth: intro
formalism: none
lengthBand: standard
genre: worked-example
status: accepted
concept: cesta-dat
conceptTitle: "How data travels"
objective: "You send a message to a friend sitting next to you. Yet it may fly through another country. Why?"
mustCover:
  - "Client and server: request and response (web, e-mail, streaming)"
  - "Packets, IP address, DNS turns names into addresses"
  - "The internet has no single centre: detours when something goes down"
state: core
highlights:
  - "Client and server: request and response (web, e-mail, streaming)"
  - "Packets, IP address, DNS turns names into addresses"
  - "The internet has no single centre: detours when something goes down"
carriers: prose|animation
---

You send a message to a friend sitting next to you. Yet it may fly through another country. Why?

You send a photo to a chat. It doesn't fly straight to your friend's phone. It goes to the chat's **server**, through a network of **routers** on the way.

The photo is split into small **packets**. Each one carries the **IP address** of the destination, a number like 203.0.113.7. Routers pass the packets on, each perhaps a different way, and at the destination they are put back together.

First the phone asks **DNS**, the phone book of the internet: what is the address of chat.example? DNS answers 203.0.113.7, because routers only understand numbers. The photo then sets off in six packets. One goes through router A and C, another through B and D. If router A goes down, the packets go through B and D and the photo arrives anyway.

The internet is a **network of networks** and has no single centre. When a router goes down, the others send the packets on a **detour**. A lost packet is sent again, not the whole photo.

Your phone is a **client**: it sends a **request**. The server sends a **response**. That is how the web, e-mail and streaming work.

**Wi-Fi** is just the last bit of the journey: a wireless link between your phone and the router at home. The internet is everything beyond it.

**Try it!** Draw the journey of your last message to a friend: your phone, the Wi-Fi router or mobile mast, the internet, the app's server and back again all the way to them. How many stops does a message to someone sitting next to you have? And which way does it go if you switch Wi-Fi off?

> **Watch out, a common mistake:** “A message flies straight from phone to phone.” It flies through a router or mobile mast, the internet and the service's server. And Wi-Fi is not the internet. It is just the wireless bit of the way to the router.

**Next:** At the end of the journey is a server. It is someone else's computer, and that is exactly what we call the cloud. → [The cloud is someone else's computer](#c/cloud-a-server)
