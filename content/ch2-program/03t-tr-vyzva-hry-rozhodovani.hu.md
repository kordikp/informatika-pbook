---
id: vyzva-hry-rozhodovani-hu
translationOf: vyzva-hry-rozhodovani
lang: hu
type: challenge
title: "Megbocsátó ugrás"
level: 3
minutes: 30
readingTime: 2
standalone: true
teaser: "A játékos a platform széléig fut, megnyomja az ugrást, és a figura lezuhan a szakadékba."
voice: universal
parent: svet-hry-rozhodovani-hu
diagram: null
core: false
status: accepted
concept: rozhodovani
state: edited
lens: hry
visuality: text-first
depth: standard
formalism: none
lengthBand: standard
carriers: prose
---

A játékos a platform széléig fut, megnyomja az ugrást, és a figura lezuhan a szakadékba. A kód szerint minden rendben van: a levegőben nem lehet ugrani. A játékos mégis azt kiabálja, hogy a játék csal. És igaza van.

<!-- task -->

Az emberek egy kicsit későn vagy egy kicsit korán nyomják meg a gombokat. A jó platformjátékoknak ezért két trükkjük van:
- **prérifarkas-idő**: a szélről lecsúszás után még 0,1 s-ig lehet ugrani (mint a rajzfilmes prérifarkas, aki egy darabig a levegőben fut tovább);
- **gombnyomás-memória**: ha 0,1 s-mal a földet érés előtt nyomod meg az ugrást, a figura azonnal felugrik, amint földet ér.

A változóid: `foldota` (hány másodperce állt a figura utoljára a földön; a földön 0), `nyomasota` (hány másodperce nyomták meg utoljára az ugrást) és `ugrott` (igen/nem).

1. Írj egyetlen feltételt az **és** és a **nem** szavakkal arra, mikor ugrik a figura.
2. Írd le, mi történik a változókkal közvetlenül az ugrás után és földet éréskor.
3. Ellenőrizd a feltételt öt helyzetben:
   a) a figura a földön áll, az ugrást most nyomják meg;
   b) a figura 0,05 s-mal ezelőtt csúszott le a szélről (ugrás nélkül), az ugrást most nyomják meg;
   c) a figura 0,3 s-mal ezelőtt csúszott le a szélről, az ugrást most nyomják meg;
   d) a figura esik, az ugrást 0,06 s-mal földet érés előtt nyomják meg, aztán földet ér;
   e) a figura felugrik a földről, és 0,04 s múlva a levegőben újra megnyomják az ugrást.

**Sikerkritérium:** az a, b, d helyzetben a figura ugrik, a c és e helyzetben nem. Ha az e helyzetben másodszor is ugrik, lyuk van a szabályodban.

<!-- hint -->

A két ablak ugyanaz a kérdés: „kevesebb ez 0,1 s-nál?”

<!-- hint -->

Az e helyzet csapda. Ugrás után a `foldota` még mindig kicsi, mert a figura csak az imént hagyta el a földet.

<!-- hint -->

Az a gombnyomás, amely már egyszer ugrást okozott, nem használható fel másodszor. Hogyan „használod el”?

<!-- solution -->

1. **Ugorj, ha** `nyomasota < 0,1` **és** `foldota < 0,1` **és nem** `ugrott`.
2. Ugrás után: `ugrott = igen` és `nyomasota = 99`, így a gombnyomás el van használva. Földet éréskor: `ugrott = nem` és `foldota = 0`.
3. a) 0 < 0,1, 0 < 0,1, `ugrott` = nem → **ugrik**. b) 0 < 0,1, 0,05 < 0,1, `ugrott` = nem → **ugrik**, ez a prérifarkas-idő. c) `foldota` = 0,3 → **nem ugrik**. d) Földet éréskor `foldota` = 0 és `nyomasota` = 0,06 → **ugrik** rögtön földet érés után, ez a gombnyomás-memória. e) `foldota` = 0,04, de `ugrott` = igen → **nem ugrik**. A „nem `ugrott`” rész nélkül itt dupla ugrás jönne létre, amit senki sem kért.

<!-- more -->

A prérifarkas-időt és a gombnyomás-memóriát olyan híres platformjátékok használják, mint a Celeste. Építs a Scratchben ugyanannak a pályának két változatát, trükkökkel és nélkülük, és add oda három barátodnak. Ne áruld el, melyik melyik...
