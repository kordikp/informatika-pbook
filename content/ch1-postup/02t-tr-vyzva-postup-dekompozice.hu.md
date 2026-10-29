---
id: vyzva-postup-dekompozice-hu
translationOf: vyzva-postup-dekompozice
lang: hu
type: challenge
title: "Game jam: hány ember segít még?"
level: 3
minutes: 35
readingTime: 2
standalone: true
teaser: "Egy hétvégi game jamen játékot kell építenetek."
voice: universal
parent: null
diagram: null
core: false
status: accepted
concept: dekompozice
state: edited
lens: generic
visuality: text-first
depth: standard
formalism: none
lengthBand: deep
carriers: prose|table
---

Egy hétvégi game jamen játékot kell építenetek. Tomáš azt mondja: „Minél többen leszünk, annál hamarabb kész lesz.” Igaz ez? És hány embertől már nem?

<!-- task -->

A játék hét feladatból áll. Minden feladatot **mindig egy ember csinál az elejétől a végéig**, nem lehet szétosztani.

| Feladat | Óra | Előtte kész kell legyen |
|---|---|---|
| Ö Ötlet | 1 | semmi |
| F Forgatókönyv | 3 | Ö |
| G Grafika | 4 | Ö |
| M Mozgás kódja | 2 | Ö |
| P Pályák | 3 | F, M |
| H Hangok | 2 | F |
| T Tesztelés | 2 | G, P, H |

1. Hány óra alatt csinálja meg **egy ember**?
2. Legkevesebb hány óra alatt csinálja meg **három ember**? Írj beosztást: ki mit csinál, hánytól hányig.
3. Legkevesebb hány óra alatt csinálja meg **két ember**? Írj beosztást, és **bizonyítsd be**, hogy gyorsabban nem megy.
4. Miért nem gyorsít már semmit a **negyedik ember**?

**A siker feltétele:** négy szám, két beosztás, amely betartja a függőségeket, és indoklás a 3. és 4. ponthoz.

<!-- hint -->

Rajzold le a feladatokat gráfként: a nyíl attól a feladattól indul, amelynek előbb kell elkészülnie. Keresd meg a leghosszabb nyílláncot, és add össze az óráit.

<!-- hint -->

A Tesztelésnek a legvégén kell lennie, és 2 óráig tart. Minden másnak előtte kell elkészülnie.

<!-- hint -->

Két embernél: az Ötleten csak egy dolgozik, a másik vár. Hány óra munka marad a Tesztelés előtt, és ez mennyi egy emberre? Aztán próbáld ki, felosztható-e a munka teljesen várakozás nélkül.

<!-- solution -->

1. **17 óra**, egyszerű összeg.
2. **9 óra.** Beosztás: 0–1 Ö. 1. ember: F 1–4, P 4–7. 2. ember: M 1–3, H 4–6. 3. ember: G 1–5. T 7–9. Gyorsabban nem megy, mert az **Ö → F → P → T** lánc 1 + 3 + 3 + 2 = 9 óráig tart. Ez a **kritikus út**.
3. **11 óra.** Beosztás: 1. ember: Ö 0–1, F 1–4, P 4–7, H 7–9. 2. ember: M 1–3, G 3–7. T 9–11. **Bizonyítás:** T előtt 15 óra munka van. Az első órában csak egy ember dolgozik, így a maradék 14 órát teljesen várakozás nélkül kellene 7 + 7-re elosztani, és T 8-kor kezdődne. A 14-et 7 + 7-re csak kétféleképpen lehet felosztani: {F, G} és {M, P, H}, vagy {G, P} és {F, M, H}. Az elsőben a második ember a Forgatókönyvre vár, mielőtt elkezdhetné a Pályákat vagy a Hangokat. A másodikban a Pályák nem kezdődhetnek 6 előtt, mert F-et és M-et is a másik ember csinálja. T mindkét esetben legkorábban 9-kor kezdődik.
4. A kritikus út 9 óra, és ennyi idő alatt három ember már végez. A negyedik ember csak várna.

<!-- more -->

Így terveznek az építők és a filmesek is: ez a kritikus út módszere. Adj a táblázathoz egy „Játékmenü” feladatot (2 óra, G-től függ), és derítsd ki, változik-e a kritikus út. Aztán tervezz meg egy igazi hétvégi projektet a barátaiddal, és hasonlítsd össze a tervet a valósággal.
