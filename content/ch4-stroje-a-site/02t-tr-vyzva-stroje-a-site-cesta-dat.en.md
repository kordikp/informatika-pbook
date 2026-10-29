---
id: vyzva-stroje-a-site-cesta-dat-en
translationOf: vyzva-stroje-a-site-cesta-dat
lang: en
type: challenge
title: "The ping that can’t exist"
level: 2
minutes: 25
readingTime: 2
standalone: true
teaser: "A player from Australia brags on a forum: “I get a 50 ms ping to a Prague server.” Nobody has seen him play, and yet you know it isn’t true."
voice: universal
parent: null
diagram: null
core: false
status: accepted
concept: cesta-dat
state: edited
lens: generic
visuality: text-first
depth: standard
formalism: none
lengthBand: deep
carriers: prose
---

A player from Australia brags on a forum: “I get a 50 ms ping to a Prague server.” Nobody has seen him play, and yet you know it isn’t true. Delay on the internet has a lower limit, and physics sets it.

<!-- task -->

The facts: Prague and Sydney are about 16,000 km apart as the crow flies. Light travels at 300,000 km/s in a vacuum and about 200,000 km/s in a glass optical fibre. **Ping** is the time it takes a packet to reach the server and the answer to come back.

1. Work out the smallest possible ping if an optical cable ran straight along the Earth’s surface.
2. Prove that 50 ms is impossible, even if the signal travelled at the speed of light in a vacuum.
3. The real ping from Prague to Sydney is usually around 300 ms. Where does the difference go? Give at least two reasons.
4. A games company wants players in Sydney to have a ping under 30 ms. What does it have to do?

**Success criterion:** the calculation in point 2 comes out above 50 ms, point 3 has two physically correct reasons, and point 4 has a solution that doesn’t get around physics.

<!-- hint -->

Time = distance ÷ speed. Ping is there and back, so the distance is doubled.

<!-- hint -->

For the proof, plug in the fastest speed there is. If it still comes out above 50 ms, you’re done.

<!-- hint -->

Look at a map of how cables run from Europe to Australia: around Africa, or through Suez, India and Singapore. And every router on the way has to receive the packet, read the address and send it on.

<!-- solution -->

1. Distance 2 × 16,000 = 32,000 km. 32,000 ÷ 200,000 = 0.16 s, so **160 ms**.
2. Even in a vacuum: 32,000 ÷ 300,000 ≈ 0.107 s = **107 ms**, and that’s more than 50 ms. The claim is impossible. (Bonus: even a straight tunnel through the Earth, about 12,100 km, gives 81 ms there and back.)
3. The cable doesn’t run straight. It goes around continents along the seabed, so it is much longer. Every router holds the packet in a queue for a moment before sending it on. And the server needs a moment to work out the answer.
4. Build a server **in Australia**, close to the players. You can’t buy faster light. That’s why online games have servers by region, and big websites have copies all over the world.

<!-- more -->

Measure the route with your own computer: in Windows type tracert and a website address into the command prompt, on a Mac or in Linux use traceroute. You’ll see every router and the time to it. Can you find the hop where the packet crossed an ocean? Then try the extra game “Where the ping gets lost” and the levels of “Network routes” with undersea cables.
