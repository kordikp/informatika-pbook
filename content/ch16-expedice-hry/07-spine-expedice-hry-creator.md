---
id: expedice-hry-creator
type: spine
title: "Nepřítel, který přemýšlí"
readingTime: 1
standalone: false
teaser: "Nepřítel, který jen chodí sem a tam, je nuda."
voice: universal
parent: null
diagram: null
core: false
lang: cs
lens: generic
visuality: text-first
depth: standard
formalism: none
lengthBand: standard
genre: explainer
status: accepted
concept: expedice-hry-creator
conceptTitle: "Nepřítel, který přemýšlí"
state: edited
carriers: prose
---

**🛠️ Odbočka** · [Víkend, kdy vznikla hra](#expedice-hry)

Nepřítel, který jen chodí sem a tam, je nuda. Nepřítel s **automatem** hraje s tebou. Navrhni strážce se třemi stavy: **hlídá** (chodí po trase), **pronásleduje** (hráč je blíž než 100 px) a **vrací se** (hráče ztratil a jde zpátky na trasu). Ke každé šipce napiš událost. Co když hráč zmizí za zdí? Co když se vrátí, zatímco se strážce vrací?

Pak dej strážci mapu. Mřížka 8 × 8 s několika zdmi, strážce v jednom rohu, hráč v jiném. Očísluj políčka: start má 0, jeho volní sousedé 1, jejich sousedé 2 a tak dál, jako když se šíří vlna. Až vlna dorazí k hráči, jdi od něj zpátky po klesajících číslech. To je **nejkratší cesta**. Tomuhle postupu se říká prohledávání do šířky a hry na něm stavějí chytřejší postupy jako A*. Kolik kroků vlna potřebuje na prázdné mřížce z rohu do rohu?

**Zpátky na expedici:** [Víkend, kdy vznikla hra](#mission-expedice-hry)
