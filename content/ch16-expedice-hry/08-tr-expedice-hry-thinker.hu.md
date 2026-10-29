---
id: expedice-hry-thinker-hu
translationOf: expedice-hry-thinker
lang: hu
type: spine
title: "Fix fizikai lépés"
readingTime: 1
standalone: false
teaser: "A korlátozott dt megvédi a játékot, de a fizika még mindig különböző lépésekkel számol."
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
concept: expedice-hry-thinker
conceptTitle: "Fix fizikai lépés"
objective: "A korlátozott dt megvédi a játékot, de a fizika még mindig különböző lépésekkel számol."
state: edited
carriers: prose
---

**🔬 Kitérő** · [A hétvége, amikor megszületett egy játék](#expedice-hry-hu)

A korlátozott `dt` megvédi a játékot, de a fizika még mindig különböző lépésekkel számol. 0,017 s-os lépéssel egy ugrás kicsit másképp sikerül, mint 0,007 s-os lépéssel. Versenyjátékhoz, egy menet felvételéhez és visszajátszásához vagy kétjátékos hálózati játékhoz ez nem elég.

A megoldás neve **fix lépés**. Az eltelt időt hozzáadod egy tárolóhoz. Amíg a tárolóban van legalább egy lépésnyi idő, például 0,02 s, pontosan 0,02 s-mal számolod újra a fizikát, és ennyit veszel ki a tárolóból. A rajzolás külön fut, olyan gyorsan, ahogy a monitor bírja.

**Feladat:** a lépés 0,02 s, a képkockák sorban 0,010; 0,015; 0,030; 0,005 és 0,050 s-ig tartanak. Hányszor számolódik újra a fizika az egyes képkockák után, és mennyi marad a tárolóban? Mi történik, ha egy képkocka egy teljes másodpercig tart? Miért korlátozzák a motorok a képkockánkénti lépések számát?

A teljes eljárást a [Game Loop](https://gameprogrammingpatterns.com/game-loop.html) fejezetben találod (angolul, ingyen). A Godotban a `_physics_process` használja.

**Vissza az expedícióra:** [A hétvége, amikor megszületett egy játék](#mission-expedice-hry)
