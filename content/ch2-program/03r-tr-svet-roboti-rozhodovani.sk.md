---
id: svet-roboti-rozhodovani-sk
translationOf: svet-roboti-rozhodovani
lang: sk
type: spine
title: "Keď je tma, rozsvieť"
readingTime: 1
standalone: true
teaser: "Nočná lampička z micro:bitu sa rozsvieti, keď sa zotmie, a zhasne, keď je svetlo. Za tým je jediná otázka: je tma?"
voice: universal
parent: null
diagram: null
core: false
recallQ: "Čo sa stane s vetvou „inak“, keď podmienka platí?"
recallA: "Nevykoná sa. Z vetiev ak / inak prebehne vždy práve jedna."
lens: roboti
visuality: balanced
depth: intro
formalism: none
lengthBand: standard
genre: worked-example
status: accepted
concept: rozhodovani
state: edited
highlights:
  - "Podmienka má hodnotu pravda, alebo nepravda"
  - "Ak–inak: vykoná sa práve jedna vetva"
  - "Skladanie podmienok (a, alebo, nie)"
carriers: prose|image|code
---

Nočná lampička z micro:bitu sa rozsvieti, keď sa zotmie, a zhasne, keď je svetlo. Za tým je jediná otázka: je tma?

**Podmienka** je otázka s odpoveďou **pravda**, alebo **nepravda**. *Je úroveň svetla menšia ako 50?* Senzor hlási 20 → pravda. Hlási 180 → nepravda.

![Nočná lampička: keď je tma, rozsvieť, inak zhasni](images/svet-roboti-lampicka.sk.svg)

```
stále:
  ak úroveň svetla < 50:
    rozsvieť všetky LED
  inak:
    vymaž displej
```

Z vetiev **ak** a **inak** prebehne **vždy práve jedna**. Lampička nikdy nesvieti a nezhasína zároveň.

Podmienky sa dajú **skladať**:

- **a**: rozsvieť, keď je tma **a** niekto sa hýbe. Platiť musia obe, inak lampička šetrí batériu.
- **alebo**: pípni, keď je príliš teplo **alebo** príliš zima.
- **nie**: ukáž srdce, keď **nie** je stlačené tlačidlo.

Veľa programov čaká na **udalosť**: *pri stlačení tlačidla A → ukáž smajlíka*, *pri zatrasení → hoď kockou*. Udalosť je podnet zvonku, podmienka je otázka, ktorú si program položí. Chytrá domácnosť je zbierka takých pravidiel: *keď sa otvorí okno → vypni kúrenie*.

**Vyskúšaj to!** Navrhni pre svoju izbu tri pravidlá *ak… potom…, inak…*. Pri každom napíš, ktorý senzor zistí odpoveď na otázku.

**Ďalej vo svete robotov:** → [Krokomer z micro:bitu](#svet-roboti-promenna-sk)
