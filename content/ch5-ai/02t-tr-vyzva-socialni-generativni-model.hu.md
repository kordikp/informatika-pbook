---
id: vyzva-socialni-generativni-model-hu
translationOf: vyzva-socialni-generativni-model
lang: hu
type: challenge
title: "A detektor, amely gyakrabban téved, mint hinnéd"
level: 3
minutes: 25
readingTime: 2
standalone: true
teaser: "Egy új app azt ígéri: „A deepfake-ek 95 %-át felismeri!” Ez remekül hangzik."
voice: universal
parent: svet-socialni-generativni-model-hu
diagram: null
core: false
status: accepted
concept: generativni-model
state: edited
lens: socialni
visuality: text-first
depth: standard
formalism: none
lengthBand: standard
carriers: prose
---

Egy új app azt ígéri: „A deepfake-ek 95 %-át felismeri!” Ez remekül hangzik. Csakhogy ha egy videót hamisnak jelöl, az szinte biztosan tévedés. Hogyan lehetséges ez? Számold ki.

<!-- task -->

A hírfolyamban **10 000 videó** van, és ebből **100** deepfake. A detektor:

- a deepfake-ek **95 %-át** helyesen megjelöli;
- tévedésből a valódi videók **5 %-át** is megjelöli.

1. Hány videót jelöl meg a detektor összesen? Mekkora az esélye, hogy egy megjelölt videó tényleg deepfake?
2. Hány százalékra kell csökkennie a valódi videóknál a tévedéseknek, hogy egy megjelölt videó 50 %-nál nagyobb valószínűséggel legyen deepfake? (A kiszűrt deepfake-ek száma továbbra is 95.)
3. A megjelölt videókat még egyszer átvizsgálod egy másik módszerrel, például a legkorábbi előfordulás keresésével. Ez ugyanolyan jó (95 % és 5 %), és független az első detektortól. Most mekkora az esélye, hogy az a videó, amely a második ellenőrzésen sem megy át, deepfake?

<!-- hint -->

Oszd a 10 000 videót két csoportra: 100 deepfake és 9 900 valódi. Mindkettőt külön számold.

<!-- hint -->

A megjelölt deepfake-ek száma 95. A megjelölt valódi videóknak 95-nél kevesebbnek kell lenniük. Ez hány százaléka a 9 900-nak?

<!-- hint -->

A második ellenőrzés csak a megjelölt videókat kapja meg. A 95 deepfake-ből 95 %-ot kiszűr, a tévedésből megjelölt valódi videók 5 %-át pedig gyanúsként továbbengedi.

<!-- solution -->

**1.** Deepfake-ek: 100-nak a 95 %-a = 95. Valódi videók: 9 900-nak az 5 %-a = 495. Összesen **590** megjelölt. Ebből tényleg hamis 95 az 590-ből, vagyis kb. **16 %**. Annyi a valódi videó, hogy még a kis százalékú tévedés is több, mint az összes kiszűrt deepfake. Ezt **alapgyakoriság-hibának** hívják.

**2.** 9 900-ból kevesebb mint 95 tévedés kell, vagyis kevesebb mint **kb. 0,96 %**, nagyjából 1 % alatt. Ez ötször pontosabb detektor, mint amit a reklám ígér.

**3.** Deepfake-ek: 95-nek a 95 %-a ≈ 90. Valódi videók: 495-nek az 5 %-a ≈ 25. Az esély 90 a 115-ből, kb. **78 %**. Két független ellenőrzés sokkal jobban működik, mint egy híres. Ezért a tényellenőrök nem egyetlen eszközre hagyatkoznak, hanem bizonyítékokat raknak össze: eredet, legkorábbi előfordulás, hely, idő.

<!-- more -->

Próbáld ki a tényellenőrök igazi módszerét: az InVID-WeVerify bővítmény kulcsképkockákra bontja a videót, és fordított képkeresésbe küldi őket. Pontosan ez a „második, független ellenőrzés”. Aztán menj az „Ellenőrző csapat” expedícióra, ahol egy virális videón használod. És gondold végig: ha a hírfolyamban 100-ból 1 helyett 10-ből 1 videó lenne deepfake, hogyan változna az 1. feladat eredménye?
