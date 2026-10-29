---
id: expedice-hry-creator-sk
translationOf: expedice-hry-creator
lang: sk
type: spine
title: "Nepriateľ, ktorý premýšľa"
readingTime: 1
standalone: false
teaser: "Nepriateľ, ktorý len chodí sem a tam, je nuda."
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
concept: expedice-hry-creator
conceptTitle: "Nepriateľ, ktorý premýšľa"
objective: "Nepriateľ, ktorý len chodí sem a tam, je nuda."
state: edited
carriers: prose
---

**🛠️ Odbočka** · [Víkend, keď vznikla hra](#expedice-hry-sk)

Nepriateľ, ktorý len chodí sem a tam, je nuda. Nepriateľ s **automatom** hrá s tebou. Navrhni strážcu s tromi stavmi: **stráži** (chodí po trase), **prenasleduje** (hráč je bližšie ako 100 px) a **vracia sa** (hráča stratil a ide späť na trasu). Ku každej šípke napíš udalosť. Čo ak hráč zmizne za stenou? Čo ak sa vráti, zatiaľ čo sa strážca vracia?

Potom daj strážcovi mapu. Mriežka 8 × 8 s niekoľkými stenami, strážca v jednom rohu, hráč v inom. Očísluj políčka: štart má 0, jeho voľní susedia 1, ich susedia 2 a tak ďalej, ako keď sa šíri vlna. Keď vlna dorazí k hráčovi, choď od neho späť po klesajúcich číslach. To je **najkratšia cesta**. Tomuto postupu sa hovorí prehľadávanie do šírky a hry na ňom stavajú múdrejšie postupy ako A*. Koľko krokov vlna potrebuje na prázdnej mriežke z rohu do rohu?

**Späť na expedíciu:** [Víkend, keď vznikla hra](#mission-expedice-hry)
