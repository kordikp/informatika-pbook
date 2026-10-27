---
id: svet-socialni-opakovani-sk
translationOf: svet-socialni-opakovani
lang: sk
type: spine
title: "Nekonečný scroll: slučka bez konca"
readingTime: 1
standalone: true
teaser: "Kniha má poslednú stranu. Seriál má poslednú časť. Feed nemá koniec. To nie je náhoda. Je to cyklus, ktorý skončiť nemá."
voice: universal
parent: null
diagram: null
core: false
recallQ: "Kedy použiješ „opakuj 10×“ a kedy „opakuj, kým…“?"
recallA: "Pevný počet, keď vopred vieš koľkokrát. „Kým“, keď to závisí od toho, čo sa stane, napríklad kým robot nenarazí na stenu."
lens: socialni
visuality: text-first
depth: intro
formalism: none
lengthBand: standard
genre: explainer
status: accepted
concept: opakovani
state: edited
highlights:
  - "Telo cyklu a počet opakovaní"
  - "Opakuj n× vs. opakuj, kým (podmienka ukončenia)"
  - "Konečnosť: cyklus musí skončiť, inak sa program zacyklí"
carriers: prose|code
---

Kniha má poslednú stranu. Seriál má poslednú časť. Feed nemá koniec. To nie je náhoda. Je to cyklus, ktorý skončiť nemá.

Feed je **cyklus**. Jeho **telo** má tri kroky: *ukáž video*, *zmeraj, ako dlho pozeráš*, *vyber ďalšie*. A znova. V blokoch by to vyzeralo takto:

```
opakuj, kým používateľ nezatvorí appku
  ukáž ďalšie video
  zmeraj čas sledovania
  podľa neho vyber ďalšie
```

Programátor má na výber. **Opakuj n×**, keď vopred vie koľkokrát: *ukáž 10 nových príspevkov priateľov a potom napíš „To je všetko“*. Tak to siete kedysi robili a tak to dodnes robia feedy, ktoré majú koniec. **Opakuj, kým…**, keď koniec závisí od toho, čo sa stane. Pri feede je tá **podmienka ukončenia** jediná: zatvoríš appku ty.

Cyklus musí raz **skončiť**, inak sa program **zacyklí**. V bežnom programe je to chyba: appka zamrzne. Pri feede je to **zámer**. Koniec, ktorý nepríde, má udržať tvoju pozornosť čo najdlhšie. Rovnaký trik je **autoplay**: po konci videa sa samo spustí ďalšie, takže ani nemusíš nič rozhodnúť. Rozhodnutie prestať musíš urobiť sám, proti cyklu, ktorý je navrhnutý tak, aby bežal ďalej.

Preto pomáhajú zarážky zvonku. Časový limit appky je vlastne podmienka ukončenia, ktorú do cyklu doplníš sám: *opakuj, kým neuplynie 30 minút*.

**Vyskúšaj to!** Nájdi v mobile nastavenie časového limitu pre appku, ktorú používaš najviac. Akú podmienku ukončenia by si jej dal ty?

**Ďalej vo svete sociálnych sietí:** → [Stiahni si, čo o tebe sieť vie](#svet-socialni-tabulka-a-evidence-sk)
