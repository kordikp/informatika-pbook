---
id: vyzva-roboti-dekompozice
type: challenge
title: "Vozítko se dvěma očima"
level: 3
minutes: 40
readingTime: 2
standalone: true
teaser: "Vozítko jede po čáře krásně, dokud nepřijde ostrá zatáčka."
voice: universal
parent: svet-roboti-dekompozice
diagram: null
core: false
lang: cs
status: accepted
concept: dekompozice
state: edited
lens: roboti
visuality: text-first
depth: standard
formalism: none
lengthBand: standard
carriers: prose|table|code
---

Vozítko jede po čáře krásně, dokud nepřijde ostrá zatáčka. Pak čára zmizí oběma senzorům a vozítko vesele jede rovně pryč ze stolu.

<!-- task -->

Vozítko má vpředu dva senzory čáry, **L** (levý) a **P** (pravý). Každý hlásí 1, když vidí černou čáru, a 0, když vidí bílý papír. Čára je tak široká, že na rovince ji vidí oba. Vozítko má dva motory, **ML** (levý) a **MP** (pravý). Když běží jen pravý motor, vozítko zatáčí doleva.

1. Vyplň tabulku pro kombinace L a P: který motor běží (1) a který stojí (0)? Řádek L = 0, P = 0 zatím nech prázdný.
2. Najdi v tabulce pravidlo, které se dá napsat **bez jediného když**: ML je pořád stejné jako jeden senzor a MP jako druhý.
3. Teď řádek 0 a 0: čára zmizela. Navrhni, co si má vozítko pamatovat a jak se podle toho rozhodne, aby se v ostré zatáčce k čáře vrátilo. Zapiš to jako pravidla *když… tak…*.

**Úspěch:** tabulka, pravidlo z bodu 2 a pravidla pro ztracenou čáru, která obstojí ve dvou testech: ostrá zatáčka doleva a ostrá zatáčka doprava.

<!-- hint -->

Když vidí čáru jen levý senzor, čára utíká doleva. Kam musí vozítko zatočit a který motor na to musí stát?

<!-- hint -->

Podívej se na sloupce tabulky: ML má v každém řádku stejnou hodnotu jako jeden ze senzorů. Senzory a motory jsou „překřížené“.

<!-- hint -->

Když čára zmizí, senzory už nic nevědí. Ví to jen minulost: který senzor viděl čáru jako poslední? Na to stačí jedna proměnná.

<!-- solution -->

| L | P | ML | MP | co dělá |
|---|---|---|---|---|
| 1 | 1 | 1 | 1 | jede rovně |
| 1 | 0 | 0 | 1 | zatáčí doleva |
| 0 | 1 | 1 | 0 | zatáčí doprava |
| 0 | 0 | ? | ? | čára zmizela |

Pravidlo bez *když*: **ML = P a MP = L**. Pravý senzor řídí levý motor a naopak. Takovému zapojení se říká Braitenbergovo vozítko a funguje i jako dva překřížené dráty.

Ztracená čára: proměnná `naposled` si pamatuje, který senzor viděl čáru jako jediný naposledy.

```
když L == 1 a P == 0: naposled = vlevo
když L == 0 a P == 1: naposled = vpravo
když L == 0 a P == 0:
    když naposled == vlevo: ML = 0, MP = 1
    jinak: ML = 1, MP = 0
```

V ostré zatáčce doleva vidí čáru jako poslední levý senzor, takže se vozítko točí doleva, dokud ji znovu nenajde. Doprava naopak. Velká úloha se rozpadla na tři menší: **vidět, rozhodnout, pamatovat si**.

<!-- more -->

Tabulku si postav z logických hradel ve hře navíc „Mozek vozítka z hradel“. Soutěžní roboty nečtou jen 0 a 1, ale odstín šedi, a zatáčí tím víc, čím dál je čára od středu. Tomu se říká proporcionální řízení. Kdo chce s robotem na čáru soutěžit, může s partou kamarádů na [Robosoutěž ČVUT](https://robosoutez.fel.cvut.cz) pro 2. stupeň ZŠ, stavebnici půjčí pořadatelé.
