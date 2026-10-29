---
id: expedice-stroje-a-site-3-en
translationOf: expedice-stroje-a-site-3
lang: en
type: spine
title: "Analysis: how a packet crosses the ocean"
readingTime: 1
standalone: false
teaser: "This is what a route listing from Prague to a server in Washington could look like (simplified): | Hop | Time | Router | |---|---|---| | 1 | 1 ms | 192.168.1.1…"
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
concept: expedice-stroje-a-site-3
conceptTitle: "Analysis: how a packet crosses the ocean"
objective: "This is what a route listing from Prague to a server in Washington could look like (simplified): | Hop | Time | Router | |---|---|---| | 1 | 1 ms | 192.168.1.1…"
state: edited
carriers: prose|table
---

**🔍 Analysis** · step 3 of 5 · [Internet at the cabin](#expedice-stroje-a-site-en)

This is what a route listing from Prague to a server in Washington could look like (simplified):

| Hop | Time | Router |
|---|---|---|
| 1 | 1 ms | 192.168.1.1 (home router) |
| 2 | 8 ms | provider’s router |
| 3 | 9 ms | Prague node |
| 4 | 17 ms | Frankfurt |
| 5 | * * * | (no reply) |
| 6 | 24 ms | London |
| 7 | 98 ms | New York |
| 8 | 96 ms | Washington |
| 9 | 99 ms | destination server |

The times are the whole ping: there and back.

**Analyse the listing:**

1. Between which hops did the packet cross the Atlantic? How many kilometres of fibre match that jump in time, if 1 ms of ping is about 100 km of cable?
2. Hop 5 returned nothing. Is the route broken? How can you tell from the next lines?
3. Hop 8 is faster than hop 7, even though it’s further away. How is that possible?
4. Why does the first line have an address starting with 192.168? Will anyone on the internet see it?

:::reveal 🔑 Solution
1. Between 6 and 7: 74 ms, so about 7,400 km of fibre. As the crow flies, London to New York is about 5,600 km; the cable is longer.
2. It isn’t; the next hops reply. That router just doesn’t answer this kind of request.
3. Each router answers traceroute when it has time. What gets measured is the router’s reply, not the route itself.
4. It’s a private address of the home network. The home router hides it on the internet behind its own public address.
:::

**Next step:** [Crew: your code on the space station](#expedice-stroje-a-site-4-en)
