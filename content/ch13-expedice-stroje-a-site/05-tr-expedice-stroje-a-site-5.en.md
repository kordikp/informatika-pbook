---
id: expedice-stroje-a-site-5-en
translationOf: expedice-stroje-a-site-5
lang: en
type: spine
title: "Project: the cabin network"
readingTime: 1
standalone: false
teaser: "Task: in Filius, build the cabin network with these parts: - Gaming network 192.168.1.0/24: two laptops and a switch."
voice: universal
parent: null
diagram: null
core: false
lens: generic
visuality: text-first
depth: standard
formalism: none
lengthBand: standard
genre: explainer
status: accepted
concept: expedice-stroje-a-site-5
conceptTitle: "Project: the cabin network"
objective: "Task: in Filius, build the cabin network with these parts: - Gaming network 192.168.1.0/24: two laptops and a switch."
state: edited
carriers: prose
---

**🚀 Project** · step 5 of 5 · [Internet at the cabin](#expedice-stroje-a-site-en)

**Task:** in Filius, build the cabin network with these parts:

- **Gaming network** 192.168.1.0/24: two laptops and a switch.
- **Smart-things network** 192.168.2.0/24: a “camera” (a computer) and a switch.
- **Router** (in Filius “Vermittlungsrechner” or “Router”) with two network cards: 192.168.1.1 and 192.168.2.1. For each device, set the default gateway to the router’s address in its network.
- **Server** in the gaming network with a web server and a DNS server. Put a page called “Photos from the cabin” on the web server. In DNS, give the name www.chata.cz the server’s address.
- Set your server’s address as the DNS server on the laptops.

**Tests** (write down beforehand what should happen):

1. A ping from a laptop to the camera gets through via the router.
2. The browser on a laptop opens www.chata.cz by its name, not by its address.
3. When you turn off the DNS server, the page doesn’t open by name, but it does by address. Why?
4. Start a data transfer in the simulation and describe how many packets go through the router when the page loads once.

**Success criterion:** all four tests turn out as you predicted. Add five sentences about the route of one packet: from the laptop through the switch, router and DNS to the page.

**Extra:** what would happen to the photos if the server burned? Design a backup following the challenge “How many years will your photos last?”.

**The expedition’s final test is still waiting:** [Internet at the cabin](#mission-expedice-stroje-a-site)
