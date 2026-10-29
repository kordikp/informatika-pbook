---
id: expedice-hry-4-hu
translationOf: expedice-hry-4
lang: hu
type: spine
title: "🔍 Elemzés: hogyan ugrik a Celeste"
readingTime: 1
standalone: false
teaser: "A Celeste híres platformjáték."
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
concept: expedice-hry-4
conceptTitle: "🔍 Elemzés: hogyan ugrik a Celeste"
objective: "A Celeste híres platformjáték."
state: edited
carriers: prose
---

**🔍 Elemzés** · 4. lépés / 5 · [A hétvége, amikor megszületett egy játék](#expedice-hry-hu)

A **Celeste** híres platformjáték. Eredeti változata a PICO-8 fantasy konzolon készült, és a szerzők később közzétették a főszereplő kódját: [Player.cs](https://raw.githubusercontent.com/NoelFB/Celeste/master/Source/Player/Player.cs) (angolul, C# nyelven, több ezer sor). Fiók nélkül is olvashatod. A GitHubon a fiókhoz 13 év a korhatár, de az olvasáshoz nem kell fiók.

Nem kell mindent értened. A Ctrl+F billentyűkombinációval keresd meg ezeket a nyomokat:

1. **`JumpGraceTime = 0.1f`.** Ez a prérifarkas-idő: a szélről lecsúszás után még 0,1 s-ig lehet ugrani. Ugyanaz a szám, mint a „Megbocsátó ugrás” kihívásban.
2. **`VarJumpTime = .2f`.** Változó ugrásmagasság: amíg nyomva tartod a gombot, legfeljebb 0,2 s-ig, a figura tovább emelkedik. Rövid nyomás kis ugrást ad. Keresd meg, hol állítják be a `varJumpTimer` értékét.
3. **`StNormal`, `StClimb`, `StDash`.** A figura állapotai. Hány van belőlük? Figyeld meg a `StateMachine = new StateMachine(23)` sort. A figurának 23 állapota van, nem négy, mint az extra játékban.
4. **`ConsumeBuffer()`.** Gombnyomás-memória. A gombnyomás „elhasználódik”, hogy ne okozzon két ugrást.

**Az elemzés feladata:** rajzolj automatát csak három állapotra: futás (normal), mászás (climb) és kitörés (dash). Minden nyílhoz írd oda, milyen esemény indítja. Papíron is elég. Aztán válaszold meg: miért van a figurának annyi apró trükkje, amelyet a játékos soha nem vesz észre?

**Amit magaddal viszel:** a jó irányítás nem tankönyvi fizika. Apró engedmények teszik a játékot tisztességessé az emberi ujjakkal szemben.

**Következő lépés:** [🎮 Játék vasárnap estig](#expedice-hry-5-hu)
