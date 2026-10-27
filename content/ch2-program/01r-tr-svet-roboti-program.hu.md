---
id: svet-roboti-program-hu
translationOf: svet-roboti-program
lang: hu
type: spine
title: "Érzékelő → program → fény"
readingTime: 1
standalone: true
teaser: "Végigmész a folyosón, és a lámpa magától felkapcsol. Belül egy háromrészes program fut. Ugyanolyan részekből, mint a világ bármely programja."
voice: universal
parent: null
diagram: vstup-zpracovani-vystup-hu
core: false
recallQ: "Mit csinál a számítógép, ha a programban felcserélsz két parancsot, és miért?"
recallA: "Az új sorrendben hajtja végre őket, akkor is, ha ennek nincs értelme, mert semmit sem gondol hozzá. Ezért az eredmény megváltozhat."
lens: roboti
visuality: balanced
depth: intro
formalism: none
lengthBand: standard
genre: explainer
status: accepted
concept: program
state: edited
highlights:
  - "A kód egy algoritmus leírása programozási nyelven (blokkos és szöveges is)"
  - "Szekvencia: a parancsok abban a sorrendben futnak le, ahogyan le vannak írva"
  - "Bemenet → feldolgozás → kimenet; a felhasználói felület az a hely, ahol találkozol velük"
carriers: prose|diagram|code
---

Végigmész a folyosón, és a lámpa magától felkapcsol. Belül egy háromrészes program fut. Ugyanolyan részekből, mint a világ bármely programja.

Minden program **bemenetet fogad, feldolgozza, és kimenetet ad**. A robotoknál és a micro:bitnél mindhárom részt meg is foghatod:

- **bemenet**: egy **érzékelő** megmér valamit (fényt, mozgást, hőmérsékletet, gombnyomást),
- **feldolgozás**: a program kiértékeli az értéket (*sötét van?*),
- **kimenet**: egy **aktuátor** csinál valamit (kigyújt egy LED-et, megforgat egy motort, sípol).

A micro:bit programját a MakeCode-ban blokkokból rakod össze, vagy szövegként írod meg. Mindkettő **kód**: programozási nyelven leírt algoritmus.

```
mindig:
  ha fényszint < 50:
    ikon megjelenítése ☀
  különben:
    képernyő törlése
```

A micro:bit a parancsokat **pontosan a leírt sorrendben** hajtja végre. Cserélj fel két blokkot, és megváltozik az eredmény. Az *ikon megjelenítése*, majd a *szünet 1 mp* egy másodpercre mutatja az ikont. A *szünet 1 mp*, majd az *ikon megjelenítése* egy másodpercig üresen hagyja a kijelzőt. A számítógép nem gondolja ki, mit akartál.

Az **érzékelők** az eszköz érzékszervei, az **aktuátorok** az izmai. Az érzékelő aktuátor nélkül csak csendben mér, az aktuátor érzékelő nélkül vak erő. Csak a köztük lévő program csinál a számokból tetteket. A micro:bit gombjai és kijelzője a **felhasználói felülete**: az a hely, ahol te találkozol a bemenettel és a kimenettel.

**Próbáld ki!** Keress otthon három eszközt, amely a bemenet → feldolgozás → kimenet séma szerint működik. Mindegyiknél nevezd meg az érzékelőt és az aktuátort. Mit mér a vízforraló, és mit csinál utána?

**Tovább a robotok világában:** → [A „mindig” blokk](#svet-roboti-opakovani-hu)
