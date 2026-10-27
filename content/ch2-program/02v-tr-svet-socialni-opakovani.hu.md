---
id: svet-socialni-opakovani-hu
translationOf: svet-socialni-opakovani
lang: hu
type: spine
title: "Végtelen görgetés: ciklus, amelynek nincs vége"
readingTime: 1
standalone: true
teaser: "A könyvnek van utolsó oldala. A sorozatnak van utolsó része. A hírfolyamnak nincs vége. Ez nem véletlen. Ez egy ciklus, amelynek nem is kell véget érnie."
voice: universal
parent: null
diagram: null
core: false
recallQ: "Mikor használod azt, hogy „ismételd 10×”, és mikor azt, hogy „ismételd, amíg…”?"
recallA: "Rögzített számot, ha előre tudod, hányszor. „Amíg”-ot, ha attól függ, mi történik, például amíg a robot neki nem megy a falnak."
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
  - "A ciklusmag és az ismétlések száma"
  - "Ismételd n× vs. ismételd, amíg (a leállás feltétele)"
  - "Végesség: a ciklusnak véget kell érnie, különben a program végtelen ciklusba kerül"
carriers: prose|code
---

A könyvnek van utolsó oldala. A sorozatnak van utolsó része. A hírfolyamnak nincs vége. Ez nem véletlen. Ez egy ciklus, amelynek nem is kell véget érnie.

A hírfolyam egy **ciklus**. A **törzse** három lépésből áll: *mutass egy videót*, *mérd meg, mennyi ideig nézik*, *válaszd ki a következőt*. És újra. Blokkokban így nézne ki:

```
ismételd, amíg a felhasználó be nem zárja az appot
  mutasd a következő videót
  mérd meg a nézési időt
  ez alapján válaszd ki a következőt
```

A programozó választhat. **Ismételd n-szer**, ha előre tudja, hányszor: *mutass 10 új bejegyzést a barátoktól, aztán írd ki, hogy „Mindent láttál”*. Az oldalak régebben így csinálták, és így csinálják ma is azok a hírfolyamok, amelyeknek van vége. **Ismételd, amíg…**, ha a vége attól függ, mi történik. A hírfolyamnál egyetlen **befejezési feltétel** van: te zárod be az appot.

Egy ciklusnak egyszer **véget kell érnie**, különben a program **végtelen ciklusba kerül**. Egy közönséges programban ez hiba: az app lefagy. A hírfolyamnál ez **szándékos**. A vég, amely sosem jön el, arra szolgál, hogy a lehető legtovább lekösse a figyelmedet. Ugyanez a trükk az **automatikus lejátszás**: a videó végén magától elindul a következő, így még döntened sem kell semmiről. A döntést, hogy abbahagyod, magadnak kell meghoznod, egy olyan ciklussal szemben, amelyet arra terveztek, hogy tovább fusson.

Ezért segítenek a kívülről érkező fékek. Az app időkorlátja tulajdonképpen egy befejezési feltétel, amelyet te magad teszel bele a ciklusba: *ismételd, amíg el nem telik 30 perc*.

**Próbáld ki!** Keresd meg a mobilodon az időkorlát beállítását ahhoz az apphoz, amelyet a legtöbbet használsz. Milyen befejezési feltételt adnál neki?

**Tovább a közösségi média világában:** → [Töltsd le, mit tud rólad az oldal](#svet-socialni-tabulka-a-evidence-hu)
