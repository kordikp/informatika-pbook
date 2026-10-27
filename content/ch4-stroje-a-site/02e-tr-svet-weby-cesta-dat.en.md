---
id: svet-weby-cesta-dat-en
translationOf: svet-weby-cesta-dat
lang: en
type: spine
title: "What happens when you press Enter"
readingTime: 2
standalone: true
teaser: "You type our-club.org and half a second later you see the page. In the meantime your computer asked for directions, sent dozens of requests and received hundreds of packets."
voice: universal
parent: null
diagram: null
core: false
recallQ: "What happens to the packets of your video if one router on the way goes down?"
recallA: "The other routers send them another way. The internet has no single centre, so part of it going down doesn't stop it."
lens: weby
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

You type our-club.org and half a second later you see the page. In the meantime your computer asked for directions, sent dozens of requests and received hundreds of packets.

What happens during that half second:

1. **DNS.** The computer only knows the name *our-club.org*, but data needs an **IP address**, a number like 185.21.4.12. It asks a DNS server, the phone book of the internet, and gets the number.
2. **Request.** The browser, the **client**, sends the **server** a **request**: *send me the home page*. The language of that agreement is HTTP.
3. **Packets.** The request and the response travel split into small **packets**. Each one carries the address of its destination, and **routers** pass it on, each one a bit closer.
4. **Response.** The server sends back HTML. In it the browser finds links to CSS, scripts and pictures and sends another request for each file. One news page can easily mean a hundred requests to ten different servers.
5. **Rendering.** Only your browser puts the page together from the material that has arrived.

![From Enter to the page: DNS, request, response](images/svet-weby-enter.en.svg)

Every click on a link is another request and another **response**. The packets of one page do not have to take the same route. When a router on the way fails, the others send them on a **detour**. The internet has no single centre, and that is why the web works even when part of the network is down.

So a slow page can have three different culprits: a slow server, a slow network, or a weak device that takes a long time to put the page together.

**Try it!** Open any page on a computer, press F12, choose the Network tab and reload the page. How many requests did the browser send? Which file was the biggest?

**Next in the world of websites:** → [Where your website lives](#svet-weby-cloud-a-server-en)
