---
id: expert-hry-automat-hra-en
translationOf: expert-hry-automat-hra
lang: en
type: game
game: expert-hry-automat.en
title: "Extra game: Character state machine"
readingTime: 1
standalone: true
teaser: "The character is always in one state: standing, running, jumping or falling. Every frame, the code reads the lines from the top and carries out only the first “if” that is true. “Jump pressed” is true only in the one single frame when you press the button. Physics runs separately: in the air it adds gravity to speedY (a positive speedY means moving down) and keeps a character on the ground at speedY = 0. Find where this state machine cheats the player."
voice: universal
parent: svet-hry-rozhodovani-en
diagram: null
core: false
status: accepted
concept: rozhodovani
state: edited
lens: hry
visuality: text-first
depth: standard
formalism: none
lengthBand: tldr
carriers: prose
---

A harder extra game for those who want more. Each level adds a new idea. Try to get as far as you can.
