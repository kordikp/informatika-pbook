---
id: expedice-stroje-a-site-1-en
translationOf: expedice-stroje-a-site-1
lang: en
type: spine
title: "How many addresses fit into the cabin"
readingTime: 2
standalone: false
teaser: "An IPv4 address is four numbers from 0 to 255, for example 192.168.1.10."
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
concept: expedice-stroje-a-site-1
conceptTitle: "How many addresses fit into the cabin"
objective: "An IPv4 address is four numbers from 0 to 255, for example 192.168.1.10."
state: edited
carriers: prose
---

**🧩 Challenge** · step 1 of 5 · [Internet at the cabin](#expedice-stroje-a-site-en)

An IPv4 address is four numbers from 0 to 255, for example 192.168.1.10. Part of the address gives the **network** (the street), the rest the **device** (the house number). How many numbers belong to the street is set by the **mask**. Writing /24 means the street is made up of the first three numbers. So the addresses 192.168.1.10 and 192.168.1.77 are neighbours in the same network, and the switch delivers a packet between them directly. The address 192.168.2.5 is somewhere else, and a packet has to go there through a **router**.

Ondra wants two networks in the cabin: one for the players and another for the “smart” things (the camera by the bird feeder and the thermometer). If he keeps them apart, the camera can’t see into the gaming laptops.

1. Which pairs are in the same /24 network?
   - 192.168.1.10 and 192.168.1.200
   - 192.168.1.10 and 192.168.2.10
   - 10.0.0.1 and 10.0.0.254
2. The mask /25 splits the last number into two halves: 0–127 and 128–255. Are 192.168.1.10 and 192.168.1.200 in the same /25 network?
3. How many devices fit into a /24 network and how many into a /25 network? Watch out: the first address in a network stands for the network itself, and the last one is the “loudspeaker” for everyone. No device can get them.

**Success criterion:** all three answers correct, including the number of devices.

:::reveal 🔑 Solution
1. Yes. No. Yes.
2. No: .10 belongs to the lower half (0–127), .200 to the upper half (128–255).
3. 254 and 126. When a device sees that the destination is outside its network, it sends the packet to the **default gateway**, that is, the router. Your phone makes this decision with every message.
:::

**Next step:** [Workshop: your first network in Filius](#expedice-stroje-a-site-2-en)
