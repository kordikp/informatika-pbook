---
id: vyzva-ai-ai-se-uci-z-dat
type: challenge
title: "Buď nejbližším sousedem"
level: 3
minutes: 35
readingTime: 2
standalone: true
teaser: "Rozpoznávač ovoce v knize se dívá jen na barvu."
voice: universal
parent: null
diagram: null
core: false
lang: cs
status: accepted
concept: ai-se-uci-z-dat
state: edited
lens: generic
visuality: text-first
depth: standard
formalism: light
lengthBand: standard
carriers: prose|table|formula
---

Rozpoznávač ovoce v knize se dívá jen na barvu. Skutečné modely sledují víc vlastností najednou. Jeden takový model teď spočítáš tužkou, najdeš, kde selže, a opravíš ho jediným příkladem.

<!-- task -->

Každý plod popisují dvě čísla: **červenost** (0 = zelená, 10 = sytě červená) a **průměr** v cm.

| trénovací příklad | druh | červenost | průměr |
|---|---|---|---|
| A1 | jablko | 9 | 7 |
| A2 | jablko | 8 | 8 |
| A3 | jablko | 9 | 6 |
| H1 | hruška | 3 | 9 |
| H2 | hruška | 4 | 10 |
| T1 | třešeň | 10 | 2 |
| T2 | třešeň | 9 | 2 |

Model **nejbližšího souseda** dá novému plodu druh toho příkladu, který je mu nejblíž. Vzdálenost počítej bez odmocniny:

$$d = (\Delta\,\text{červenost})^2 + (\Delta\,\text{průměr})^2$$

Testovací plody (model je nikdy neviděl): **X1** zelené jablko (2, 7), **X2** malé jablko (8, 5), **X3** třešeň (10, 3), **X4** hruška (5, 9).

1. Urči, co model řekne u X1–X4, a spočítej přesnost.
2. Kamarád navrhuje: „Otestuju to radši na trénovacích datech, tam to vyjde líp.“ Jakou přesnost naměří a proč je to podvod?
3. Přidej do trénovacích dat **jeden** příklad tak, aby všechny čtyři testy vyšly správně. Ověř výpočtem, že jsi nic jiného nerozbilo.

<!-- hint -->

U X1 spočítej d ke všem sedmi příkladům. Například pro H1: (2 − 3)² + (7 − 9)² = 1 + 4 = 5. Nejmenší číslo vyhrává.

<!-- hint -->

Jak daleko je trénovací příklad od sebe samotného? Co z toho plyne pro test na trénovacích datech?

<!-- hint -->

Model se u X1 plete, protože nikdy neviděl zelené jablko. Kam do tabulky by měl nový příklad padnout, aby byl X1 blíž než H1 (d = 5) a hrušce X4 dál než H2 (d = 2)?

<!-- solution -->

**1.** X1: nejblíž H1 (d = 5), A1 má 49, A3 má 50 → model řekne **hruška**, chyba. X2: nejblíž A3 (d = 1 + 1 = 2) → jablko, správně. X3: T1 (d = 0 + 1 = 1) → třešeň, správně. X4: H2 (d = 1 + 1 = 2), H1 má 4 → hruška, správně. Přesnost **3 ze 4 = 75 %**.

**2.** Vždy **100 %**. Každý příklad je sám sobě nejbližší, s d = 0, takže model jen „vzpomíná“. O nových plodech to neříká nic. Proto se testuje na datech, která model při tréninku neviděl.

**3.** Stačí třeba zelené jablko **(2, 6)**. X1 k němu má d = 0 + 1 = 1 < 5 → jablko. X4: d = 9 + 9 = 18, H2 zůstává blíž (2). X2: d = 36 + 1 = 37, A3 zůstává (2). X3 se nezmění. Správné je každé jablko s d k X1 menším než 5, které je od X4 dál než 2 a od X2 dál než 2. Výsledek: 4 ze 4. Model nebyl hloupý, chyběla mu data.

<!-- more -->

Změř průměr v **milimetrech** místo centimetrů a spočítej X1 znovu (bez přidaného příkladu). Vyjde najednou jablko. Ne proto, že by model zmoudřel: vzdálenost teď skoro celou tvoří velikost a barva se ztratí. Proto se data před učením **normalizují**, převedou na stejnou stupnici. Pak zkus pravidlo **3 nejbližších sousedů** (hlasování) a najdi plod, u kterého 1 a 3 sousedé dají jiný výsledek. Na vlastních fotkách si totéž vyzkoušíš v [Teachable Machine](https://teachablemachine.withgoogle.com/): schválně natrénuj model, kterému něco chybí, a změř, kde selže.
