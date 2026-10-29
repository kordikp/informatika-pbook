---
id: vyzva-ai-ai-se-uci-z-dat-sk
translationOf: vyzva-ai-ai-se-uci-z-dat
lang: sk
type: challenge
title: "Buď najbližším susedom"
level: 3
minutes: 35
readingTime: 2
standalone: true
teaser: "Rozpoznávač ovocia v knihe sa pozerá len na farbu."
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
lengthBand: standard
carriers: prose|table|formula
---

Rozpoznávač ovocia v knihe sa pozerá len na farbu. Skutočné modely sledujú viac vlastností naraz. Jeden taký model teraz vypočítaš ceruzkou, nájdeš, kde zlyhá, a opravíš ho jediným príkladom.

<!-- task -->

Každý plod opisujú dve čísla: **červenosť** (0 = zelená, 10 = sýtočervená) a **priemer** v cm.

| trénovací príklad | druh | červenosť | priemer |
|---|---|---|---|
| A1 | jablko | 9 | 7 |
| A2 | jablko | 8 | 8 |
| A3 | jablko | 9 | 6 |
| H1 | hruška | 3 | 9 |
| H2 | hruška | 4 | 10 |
| T1 | čerešňa | 10 | 2 |
| T2 | čerešňa | 9 | 2 |

Model **najbližšieho suseda** priradí novému plodu druh toho príkladu, ktorý je mu najbližšie. Vzdialenosť počítaj bez odmocniny:

$$d = (\Delta\,\text{červenosť})^2 + (\Delta\,\text{priemer})^2$$

Testovacie plody (model ich nikdy nevidel): **X1** zelené jablko (2, 7), **X2** malé jablko (8, 5), **X3** čerešňa (10, 3), **X4** hruška (5, 9).

1. Urči, čo model povie pri X1–X4, a vypočítaj presnosť.
2. Kamarát navrhuje: „Otestujem to radšej na trénovacích dátach, tam to vyjde lepšie.“ Akú presnosť nameria a prečo je to podvod?
3. Pridaj do trénovacích dát **jeden** príklad tak, aby všetky štyri testy vyšli správne. Over výpočtom, že sa nič iné nepokazilo.

<!-- hint -->

Pri X1 vypočítaj d ku všetkým siedmim príkladom. Napríklad pre H1: (2 − 3)² + (7 − 9)² = 1 + 4 = 5. Najmenšie číslo vyhráva.

<!-- hint -->

Ako ďaleko je trénovací príklad sám od seba? Čo z toho vyplýva pre test na trénovacích dátach?

<!-- hint -->

Model sa pri X1 mýli, pretože nikdy nevidel zelené jablko. Kam do tabuľky by mal nový príklad padnúť, aby bol k X1 bližšie ako H1 (d = 5) a od hrušky X4 ďalej ako H2 (d = 2)?

<!-- solution -->

**1.** X1: najbližšie je H1 (d = 5), A1 má 49, A3 má 50 → model povie **hruška**, chyba. X2: najbližšie je A3 (d = 1 + 1 = 2) → jablko, správne. X3: T1 (d = 0 + 1 = 1) → čerešňa, správne. X4: H2 (d = 1 + 1 = 2), H1 má 4 → hruška, správne. Presnosť **3 zo 4 = 75 %**.

**2.** Vždy **100 %**. Každý príklad je sám sebe najbližší, s d = 0, takže model si len „spomína“. O nových plodoch to nehovorí nič. Preto sa testuje na dátach, ktoré model pri tréningu nevidel.

**3.** Stačí napríklad zelené jablko **(2, 6)**. X1 k nemu má d = 0 + 1 = 1 < 5 → jablko. X4: d = 9 + 9 = 18, H2 zostáva bližšie (2). X2: d = 36 + 1 = 37, A3 zostáva (2). X3 sa nezmení. Správne je každé jablko, ktoré má d k X1 menšie ako 5 a je od X4 ďalej ako 2 a od X2 ďalej ako 2. Výsledok: 4 zo 4. Model nebol hlúpy, chýbali mu dáta.

<!-- more -->

Zmeraj priemer v **milimetroch** namiesto centimetrov a vypočítaj X1 znova (bez pridaného príkladu). Zrazu vyjde jablko. Nie preto, že by model zmúdrel: vzdialenosť teraz takmer celú tvorí veľkosť a farba sa stratí. Preto sa dáta pred učením **normalizujú**, prevedú sa na rovnakú stupnicu. Potom skús pravidlo **3 najbližších susedov** (hlasovanie) a nájdi plod, pri ktorom 1 a 3 susedia dajú iný výsledok. Na vlastných fotkách si to isté vyskúšaš v [Teachable Machine](https://teachablemachine.withgoogle.com/): schválne natrénuj model, ktorému niečo chýba, a zmeraj, kde zlyhá.
