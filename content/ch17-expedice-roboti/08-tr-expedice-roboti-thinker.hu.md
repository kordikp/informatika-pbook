---
id: expedice-roboti-thinker-hu
translationOf: expedice-roboti-thinker
lang: hu
type: spine
title: "Sima menet rángatás helyett"
readingTime: 1
standalone: false
teaser: "A kisautód csak 0 és 1 között dönt, ezért rángatózik balra-jobbra."
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
concept: expedice-roboti-thinker
conceptTitle: "Sima menet rángatás helyett"
objective: "A kisautód csak 0 és 1 között dönt, ezért rángatózik balra-jobbra."
state: edited
carriers: prose|code
---

**🔬 Kitérő** · [A kisautó, amely nem esik le az asztalról](#expedice-roboti-hu)

A kisautód csak 0 és 1 között dönt, ezért rángatózik balra-jobbra. A versenyrobotok számként olvassák az érzékelőt, például 0-tól (fehér) 1023-ig (fekete), az *analóg érték olvasása a pinről* blokkal.

Számold ki a **hibát**: `hiba = bal − jobb`. Ha a vonal pontosan középen van, a hiba 0. Minél jobban kitér a vonal balra, annál nagyobb a hiba. Aztán állítsd be a motorokat:

```
ML = alap − k × hiba
MP = alap + k × hiba
```

Az `alap` a sebesség egyenesen, a `k` pedig azt mondja meg, milyen élesen kanyarodik a kisautó. Ezt **arányos szabályozásnak** hívják (P-szabályozó).

**Kísérlet:** kezdd kis `k`-val. A kisautó nyugodtan megy, de a kanyarban kifut. Növeld a `k`-t. Egy ponton az egyenesen elkezd kígyóként cikázni. Keress egy értéket a kettő között, és írd be a naplóba. A valódi robotok még két összetevőt adnak hozzá, és az egészet PID-nek hívják.

**Vissza az expedícióra:** [A kisautó, amely nem esik le az asztalról](#mission-expedice-roboti)
