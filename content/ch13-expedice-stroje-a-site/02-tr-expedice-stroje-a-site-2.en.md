---
id: expedice-stroje-a-site-2-en
translationOf: expedice-stroje-a-site-2
lang: en
type: spine
title: "Workshop: your first network in Filius"
readingTime: 1
standalone: false
teaser: "Filius is a network simulator for schools."
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
concept: expedice-stroje-a-site-2
conceptTitle: "Workshop: your first network in Filius"
objective: "Filius is a network simulator for schools."
state: edited
carriers: prose
---

**🛠 Workshop** · step 2 of 5 · [Internet at the cabin](#expedice-stroje-a-site-en)

**Filius** is a network simulator for schools. It’s free and needs no account. Filius II runs in the browser at filius-ii.net (it’s still in beta), and you can download Filius Classic from lernsoftware-filius.de for Windows, Mac and Linux. The interface is in German or English, but the icons are enough. These steps are for Classic; in Filius II the controls are similar.

**The first 30 minutes:**

1. In design mode (the hammer icon), drag two computers and one **switch** onto the workspace.
2. With the cable tool, connect both computers to the switch.
3. Double-click to open the first computer and set the address 192.168.0.10 and the mask 255.255.255.0 (that’s /24). Give the second one the address 192.168.0.11.
4. Switch to simulation (the green triangle).
5. On the first computer, open software installation and add the **command line** (Befehlszeile or Command line).
6. Type ping 192.168.0.11. The cables start flashing and you’ll see the replies, with times.
7. Experiment: go back to design and change the second computer’s address to 192.168.1.11. Now the ping fails. Explain why; step 1 of the expedition will help you.
8. Bonus: open the switch’s table (double-click in simulation). The switch remembers which computer is on which cable.

**Success criterion:** the ping in point 6 gets through, and in point 7 you can explain why it failed.

**Next step:** [Analysis: how a packet crosses the ocean](#expedice-stroje-a-site-3-en)
