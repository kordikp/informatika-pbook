---
id: vyzva-program-program-hu
translationOf: vyzva-program-program
lang: hu
type: challenge
title: "Mely sorokat cserélheted fel?"
level: 3
minutes: 25
readingTime: 2
standalone: true
teaser: "Az alapfogalomnál elég volt két blokkot felcserélni, és a robot máshová ment."
voice: universal
parent: null
diagram: null
core: false
status: accepted
concept: program
state: edited
lens: generic
visuality: text-first
depth: standard
formalism: none
lengthBand: deep
carriers: prose|code
---

Az alapfogalomnál elég volt két blokkot felcserélni, és a robot máshová ment. Csakhogy nem minden csere ront el valamit. Néhány sort büntetlenül összekeverhetsz. Melyeket, és miből ismered fel őket?

<!-- task -->

Itt egy rövid Python-program. Az `=` jel azt jelenti: „legyen”. A bal oldali dobozba a jobb oldali érték kerül. A `print` kiírja az eredményt.

```
1  ar = 150
2  kedvezmeny = 30
3  darab = 2
4  ar = ar - kedvezmeny
5  osszesen = ar * darab
6  print(osszesen)
```

**1. feladat.** Mit ír ki a program?

**2. feladat.** Nézd végig az öt szomszédos sorpárt: 1–2, 2–3, 3–4, 4–5, 5–6. Mindegyiknél döntsd el: ha felcseréled a két sort, ugyanazt írja ki a program?

**3. feladat.** Találd meg a szabályt. Mikor cserélhetsz fel két utasítást, és mikor nem? A szabálynak bármilyen programra működnie kell, nem csak erre.

**4. feladat.** Írd át a 2. sort így: `kedvezmeny = ar // 5` (az ár ötöde, a `//` maradék nélküli osztás). Most mely párok cserélhetők fel? Illik rájuk a szabályod?

**Akkor vagy kész, ha** jó a kimenet, mindkét változatban helyesen döntöttél minden párról, és a szabályod mindkettőre igaz.

<!-- hint -->

Minden sornál írj fel két dolgot: mely dobozokat **olvassa** (az `=` jobb oldalán vagy zárójelben), és melyikbe **ír** (az `=` bal oldalán).

<!-- hint -->

Az 5. sor olvassa az `ar` dobozt, a 4. sor pedig írja. Számít akkor, hogy melyik fut le előbb?

<!-- hint -->

A csere akkor biztonságos, ha egyik sor sem írja azt a dobozt, amelyet a másik olvas vagy ír.

<!-- solution -->

**Kimenet:** 240. Az ár 150 − 30 = 120, és 120 × 2 = 240.

**Eredeti változat:**
- 1–2 igen: nincs közös dobozuk.
- 2–3 igen.
- 3–4 igen: a 4. sor nem használja a `darab` dobozt.
- 4–5 nem: az 5. sor a régi, 150-es árat szorozná, és 300 jönne ki.
- 5–6 nem: a `print` az `osszesen` értékét akarná kiírni, ami még nem létezik, és a program leáll.

**Szabály:** két utasítást akkor cserélhetsz fel, ha **egyik sem írja azt a dobozt, amelyet a másik olvas vagy ír**. Különben **függés** van köztük, és a sorrend kötött.

**A `kedvezmeny = ar // 5` változat:** az 1–2 már nem megy, mert a 2. sor most olvassa az `ar` dobozt, ami még nem létezne. A 2–3 és a 3–4 mehet, a 4–5 és az 5–6 nem. A kimenet továbbra is 240, mert 150 ötöde 30.

<!-- more -->

Pontosan ezt a szabályt használja a mobilodban a **processzor**. Hogy gyorsabb legyen, magától átrendezi az egymástól független utasításokat, és néhányat egyszerre hajt végre. Közben ugyanazt az „olvas és ír” szabályt figyeli, mint te.

Próbáld megrajzolni a **függőségi gráfot**: minden sor egy karika, és a nyíl attól a sortól, amelyik a dobozt írja, ahhoz a sorhoz vezet, amelyik olvassa. Mind a hat sornak hány különböző sorrendje adja ugyanazt az eredményt? (Ellenőrzésképp: 8.) Nézd meg a [Python Tutorban](https://pythontutor.com/).
