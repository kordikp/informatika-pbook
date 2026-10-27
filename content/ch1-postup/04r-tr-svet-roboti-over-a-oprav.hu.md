---
id: svet-roboti-over-a-oprav-hu
translationOf: svet-roboti-over-a-oprav
lang: hu
type: spine
title: "A sarokba szorult robot"
readingTime: 1
standalone: true
teaser: "A kisautónak ki kell kerülnie a falakat. Egyenes fal mellett remekül működik. Aztán beér egy sarokba, és ott forog körbe-körbe, amíg le nem merül az elem."
voice: universal
parent: null
diagram: null
core: false
recallQ: "Miért nem elég egy programot egyetlen működő példán kipróbálni?"
recallA: "A hiba gyakran csak bizonyos bemeneteknél jön elő, például nullánál vagy üres listánál. A teszteknek különféle eseteket kell lefedniük, a szélső eseteket is."
lens: roboti
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
carriers: prose|table
---

A kisautónak ki kell kerülnie a falakat. Egyenes fal mellett remekül működik. Aztán beér egy sarokba, és ott forog körbe-körbe, amíg le nem merül az elem.

A program értelmesen hangzik: *ha a fal 10 cm-nél közelebb van, fordulj jobbra*. Egyenes falnál ez elég. A sarokban viszont a robot jobbra fordul, újabb falat lát, jobbra fordul… és visszafelé tart a sarokba. Senki sem próbálta ki sarokban.

A robot tesztje **bemenet és elvárt kimenet**, amelyet **előre** írnak meg:

| Helyzet (bemenet) | Mit kell tennie a robotnak |
|---|---|
| egyenes fal előtte | fordulni és továbbmenni |
| sarok | kijönni a sarokból |
| keskeny folyosó | átmenni, nem beragadni |
| az érzékelő 0 cm-t jelez | megállni, nem tolatni a végtelenségig |
| az érzékelő semmit sem jelez | megállni és hibát jelezni |

Az alsó három sor **szélső eset**: sarok, nulla, semmi. Itt lakik a legtöbb hiba.

A **hibakeresés** négy lépés. *Hely*: a fordulás szabálya. *Ok*: a sarokban mindig ugyanabba az irányba fordul ugyanakkora szöggel. *Javítás*: két egymás utáni fordulás után tolass, és fordulj más szöggel. *Újbóli ellenőrzés*: futtasd újra az összes tesztet, az egyenes falat is. És a **hatékonyság**: az a robot, amely 2 másodperc alatt kijön a sarokból, jobb annál, amelyiknek 20 kell hozzá.

**Próbáld ki!** Találj ki három tesztet egy lámpához, amely sötétben világít. Legalább egy legyen trükkös. Mi a helyzet például a szürkülettel, vagy az érzékelőre tett kézzel?

**Tovább a robotok világában:** → [Érzékelő → program → fény](#svet-roboti-program-hu)
