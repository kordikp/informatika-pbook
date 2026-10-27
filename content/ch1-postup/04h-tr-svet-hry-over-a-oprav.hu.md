---
id: svet-hry-over-a-oprav-hu
translationOf: svet-hry-over-a-oprav
lang: hu
type: spine
title: "A labda, amely átrepült az ütőn"
readingTime: 1
standalone: true
teaser: "A Pong játékod működik. Aztán felgyorsítod a labdát, és az hirtelen átrepül az ütőn, mintha ott sem lenne. Hiba? Igen. És el lehet kapni."
voice: universal
parent: null
diagram: null
core: false
recallQ: "Miért nem elég egy programot egyetlen működő példán kipróbálni?"
recallA: "A hiba gyakran csak bizonyos bemeneteknél jön elő, például nullánál vagy üres listánál. A teszteknek különféle eseteket kell lefedniük, a szélső eseteket is."
lens: hry
visuality: balanced
depth: intro
formalism: none
lengthBand: standard
genre: worked-example
status: accepted
concept: over-a-oprav
state: edited
highlights:
  - "Teszt = bemenet + elvárt kimenet, előre elkészítve"
  - "Szélső esetek (0, üres bemenet, maximum)"
  - "Hibakeresés: hely → ok → javítás → újbóli ellenőrzés; a hatékonyság mint további mérce"
carriers: prose|image
---

A Pong játékod működik. Aztán felgyorsítod a labdát, és az hirtelen átrepül az ütőn, mintha ott sem lenne. Hiba? Igen. És el lehet kapni.

A játék képkockánként egyszer ellenőrzi az ütközést. A lassú labda 3 képpontot mozdul, így legalább egy képkocka elkapja az ütőben. A gyors 40 képpontot mozdul, és a 10 képpont széles ütőt **két képkocka között átugorja**. Egyik képkocka sem látta az ütőben, így semmi sem pattan vissza.

![A lassú labda visszapattan, a gyors átugorja az ütőt](images/svet-hry-tunel.hu.svg)

Csak lassú labdával próbáltad ki, és „kész” volt. Ezért írják a teszteket **előre**, **bemenetként és elvárt kimenetként**: *sebesség 3 → visszapattan. Sebesség 40 → visszapattan.* A második teszt elbukik, és a hibát te találod meg, nem a játékosok.

A legtöbb hiba a **szélső esetekben** lakik: **0** sebesség (beragad a játék?), **legnagyobb** sebesség (átrepül?), a labda pontosan **a sarokban**, az utolsó élet, **üres** ranglista. Ilyen bemeneteket szándékosan próbálj ki.

Aztán jön a **hibakeresés**: *hely* (az ütközés ellenőrzése), *ok* (a képkockánkénti elmozdulás nagyobb az ütőnél), *javítás* (korlátozd a legnagyobb sebességet, vagy ellenőrizd a képkockák közötti utat is), *újbóli ellenőrzés* (futtasd le újra az összes tesztet, a régieket is). És a **hatékonyság**: az út minden képpontját ellenőrizni lelassítaná a játékot, a sebesség korlátozása olcsóbb.

**Próbáld ki!** Egy felvett érméért jár egy pont. Tervezz három tesztet (bemenet és elvárt kimenet), amelyek közül legalább egy trükkös. Tipp: mi van, ha a játékos egyszerre két érmét vesz fel?

**Tovább a játékok világában:** → [A játékciklus: egy ciklus, amely sosem alszik](#svet-hry-opakovani-hu)
