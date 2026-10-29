---
id: expedice-socialni-4-hu
translationOf: expedice-socialni-4
lang: hu
type: spine
title: "Egy igazi hírfolyam motorházteteje alatt"
readingTime: 1
standalone: false
teaser: "A kódot akkor kísérő blog szerint a hírfolyamnak három emelete van: 1."
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
concept: expedice-socialni-4
conceptTitle: "Egy igazi hírfolyam motorházteteje alatt"
objective: "A kódot akkor kísérő blog szerint a hírfolyamnak három emelete van: 1."
state: edited
carriers: prose
---

**🔍 Elemzés** · 4. lépés / 5 · [Ellenőrző csapat](#expedice-socialni-hu)

A kódot akkor kísérő blog szerint a hírfolyamnak **három emelete** van:

1. **Jelöltek.** A bejegyzések óriási tömegéből kiválaszt kb. 1 500 jelöltet. Nagyjából a felük olyan fiókoktól jön, amelyeket követsz, a felük másoktól.
2. **Rangsorolás.** Egy neurális háló minden jelöltnél megbecsüli, mekkora valószínűséggel lájkolod, válaszolsz rá, megosztod, de azt is, hogy jelented, vagy rákoppintasz, hogy „nem érdekel”. Minden valószínűséget megszoroz egy súllyal, és mindent összead. A nyilvánosságra hozott súlyok szerint a válasz nagyjából 27-szer nagyobb súlyt kapott, mint a lájk, a jelentés pedig óriási negatív súlyt.
3. **Szűrők.** Kidobja a letiltott és elnémított fiókokat, és figyel, hogy ne legyen egymás után tíz bejegyzés ugyanattól a szerzőtől.

Aztán nyisd meg a teljes ellentétét: a **bluesky-social/feed-generator** kezdőcsomagot a GitHubon (fiók nélkül is olvasható). Az *src/algos* mappában van a *whats-alf* mintahírfolyam, amely ALF-ról, a földönkívüliről szóló bejegyzéseket válogat. Az egész kifér egy képernyőre.

**Elemzés, válaszolj:**

- Miért kap a **válasz** nagyobb súlyt, mint a lájk? Mi történik a vitákkal a hírfolyamban?
- Az „Építs hírfolyamot számokból” kihívás jelzései közül melyik melyik emeletnek felel meg?
- Mit **nem tudhatsz meg** a nyilvánosságra hozott kódból? (Tipp: a háló olyan adatokból tanult, amelyeket nem hoztak nyilvánosságra.)
- Miben becsületesebb az ALF-hírfolyam, és miben rosszabb?

**Feltétel:** minden kérdésre egy indoklással ellátott mondat. Figyelem, a kód 2023-as, és a mai X másképp is működhet.

**Következő lépés:** [Igazságos hírfolyam](#expedice-socialni-5-hu)
