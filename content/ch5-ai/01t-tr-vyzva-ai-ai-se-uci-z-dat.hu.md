---
id: vyzva-ai-ai-se-uci-z-dat-hu
translationOf: vyzva-ai-ai-se-uci-z-dat
lang: hu
type: challenge
title: "Légy te a legközelebbi szomszéd"
level: 3
minutes: 35
readingTime: 2
standalone: true
teaser: "A könyv gyümölcsfelismerője csak a színt nézi."
voice: universal
parent: null
diagram: null
core: false
status: accepted
concept: ai-se-uci-z-dat
state: edited
lens: generic
visuality: text-first
depth: standard
formalism: light
lengthBand: deep
carriers: prose|table|formula
---

A könyv gyümölcsfelismerője csak a színt nézi. A valódi modellek egyszerre több tulajdonságot figyelnek. Most egy ilyen modellt ceruzával számolsz ki, megtalálod, hol hibázik, és egyetlen példával megjavítod.

<!-- task -->

Minden gyümölcsöt két szám ír le: a **pirosság** (0 = zöld, 10 = mélypiros) és az **átmérő** cm-ben.

| tanító példa | fajta | pirosság | átmérő |
|---|---|---|---|
| A1 | alma | 9 | 7 |
| A2 | alma | 8 | 8 |
| A3 | alma | 9 | 6 |
| H1 | körte | 3 | 9 |
| H2 | körte | 4 | 10 |
| T1 | cseresznye | 10 | 2 |
| T2 | cseresznye | 9 | 2 |

A **legközelebbi szomszéd** modell az új gyümölcsnek annak a példának a fajtáját adja, amelyik a legközelebb van hozzá. A távolságot gyökvonás nélkül számold:

$$d = (\Delta\,\text{pirosság})^2 + (\Delta\,\text{átmérő})^2$$

Tesztgyümölcsök (a modell sosem látta őket): **X1** zöld alma (2, 7), **X2** kis alma (8, 5), **X3** cseresznye (10, 3), **X4** körte (5, 9).

1. Határozd meg, mit mond a modell X1–X4 esetén, és számold ki a pontosságot.
2. Egy barátod azt javasolja: „Inkább a tanító adatokon tesztelem, ott jobban jön ki.” Milyen pontosságot mér, és miért csalás ez?
3. Adj a tanító adatokhoz **egyetlen** példát úgy, hogy mind a négy teszt helyes legyen. Számolással ellenőrizd, hogy semmi mást nem rontottál el.

<!-- hint -->

X1-nél számold ki a d-t mind a hét példához. Például H1-re: (2 − 3)² + (7 − 9)² = 1 + 4 = 5. A legkisebb szám nyer.

<!-- hint -->

Milyen messze van egy tanító példa saját magától? Mi következik ebből a tanító adatokon végzett tesztre?

<!-- hint -->

A modell X1-nél téved, mert sosem látott zöld almát. Hová kellene esnie a táblázatban az új példának, hogy X1-hez közelebb legyen, mint H1 (d = 5), az X4 körtétől pedig messzebb, mint H2 (d = 2)?

<!-- solution -->

**1.** X1: legközelebb H1 (d = 5), A1-nél 49, A3-nál 50 → a modell azt mondja: **körte**, hiba. X2: legközelebb A3 (d = 1 + 1 = 2) → alma, helyes. X3: T1 (d = 0 + 1 = 1) → cseresznye, helyes. X4: H2 (d = 1 + 1 = 2), H1-nél 4 → körte, helyes. Pontosság: **4-ből 3 = 75%**.

**2.** Mindig **100%**. Minden példa önmagához van a legközelebb, d = 0-val, így a modell csak „emlékszik”. Az új gyümölcsökről ez semmit sem mond. Ezért olyan adatokon tesztelünk, amelyeket a modell a tanítás során nem látott.

**3.** Elég például egy zöld alma **(2, 6)**. X1 távolsága tőle d = 0 + 1 = 1 < 5 → alma. X4: d = 9 + 9 = 18, H2 marad közelebb (2). X2: d = 36 + 1 = 37, A3 marad (2). X3 nem változik. Jó minden olyan alma, amelynek d-je X1-től kisebb 5-nél, X4-től nagyobb 2-nél, és X2-től is nagyobb 2-nél. Eredmény: 4-ből 4. A modell nem volt buta, csak adatok hiányoztak neki.

<!-- more -->

Mérd az átmérőt centiméter helyett **milliméterben**, és számold ki újra X1-et (a hozzáadott példa nélkül). Hirtelen alma jön ki. Nem azért, mert a modell okosabb lett: a távolságot most szinte teljesen a méret adja, a szín elvész. Ezért a tanítás előtt az adatokat **normalizálják**, vagyis azonos skálára hozzák. Utána próbáld ki a **3 legközelebbi szomszéd** szabályát (szavazással), és keress egy gyümölcsöt, amelynél 1 és 3 szomszéd mást ad. Ugyanezt a saját fotóidon is kipróbálhatod a [Teachable Machine](https://teachablemachine.withgoogle.com/) oldalon: szándékosan taníts be egy modellt, amelyből valami hiányzik, és mérd meg, hol hibázik.
