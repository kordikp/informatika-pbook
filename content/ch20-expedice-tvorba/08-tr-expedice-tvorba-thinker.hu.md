---
id: expedice-tvorba-thinker-hu
translationOf: expedice-tvorba-thinker
lang: hu
type: spine
title: "Mozgás kódból"
readingTime: 1
standalone: false
teaser: "Hozd mozgásba az álló hátteret úgy, hogy a főcímet körbe-körbe lehessen játszani rántás nélkül."
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
concept: expedice-tvorba-thinker
conceptTitle: "Mozgás kódból"
objective: "Hozd mozgásba az álló hátteret úgy, hogy a főcímet körbe-körbe lehessen játszani rántás nélkül."
state: edited
carriers: prose
---

**🔬 Kitérő** · [Főcím a filmestre](#expedice-tvorba-hu)

Hozd mozgásba az álló hátteret úgy, hogy a főcímet körbe-körbe lehessen játszani rántás nélkül. Másodpercenként 30 képkockánál 20 másodperc **600 képkocka**.

A `setup()`-ban töröld a `noLoop()` sort, és add hozzá a `frameRate(30)`-at. A `draw()`-ban számold ki a `let t = (frameCount % 600) / 600;` értéket, egy 0 és 1 közötti számot, amely 20 másodpercenként visszaugrik az elejére. A köröket told el `200 * sin(TWO_PI * t)`-vel. Mivel a szinusz egy teljes fordulat (TWO_PI) után ugyanazt az értéket veszi fel, mint az elején, a hurok **tökéletesen illeszkedik**.

**Feladat:** 1) Miért rándulna meg a végén, ha `sin(TWO_PI * t)` helyett `sin(t)` állna? 2) Egy kör 20 másodperc alatt pontosan háromszor forduljon körbe a középpont körül. 3) Minden kör más fázisban ússzon: a `TWO_PI * t`-hez adj hozzá egy véletlen számot a `setup()`-ból. Feltétel: a 600. képkocka ugyanúgy néz ki, mint a 0.

**Vissza az expedícióra:** [Főcím a filmestre](#mission-expedice-tvorba)
