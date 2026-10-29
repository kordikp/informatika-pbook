---
id: vyzva-ai-generativni-model-hu
translationOf: vyzva-ai-generativni-model
lang: hu
type: challenge
title: "Nyelvi modell három mondatból"
level: 3
minutes: 40
readingTime: 2
standalone: true
teaser: "Saját nyelvi modellt építesz."
voice: universal
parent: null
diagram: null
core: false
status: accepted
concept: generativni-model
state: edited
lens: generic
visuality: text-first
depth: standard
formalism: none
lengthBand: standard
carriers: prose|table
---

Saját nyelvi modellt építesz. Csak három igaz mondatból tanul, mégis magabiztosan leír egy valótlanságot. Aztán kiszámolod, mennyire valószínű ez, és rájössz, mi mentené meg.

<!-- task -->

Tanító szöveg:

> Prága a legnagyobb város Csehországban. Bécs a legnagyobb város Ausztriában. Brno a második legnagyobb város Csehországban.

A modelled mindig csak **egy előző szót** lát. A következő szó valószínűsége: ahányszor a szövegben következik, osztva azzal, ahányszor az előző szó előfordult.

1. Számold ki a szavak valószínűségét az „a” és a „város” után.
2. A modell a „Bécs” szóval kezd, és addig ír, amíg le nem ír egy országnevet. Mindig a legvalószínűbb szót választja. Milyen mondatot ír? Igaz?
3. Most a modell a valószínűségek szerint **sorsol**. Írd ki az összes mondatot, amelyet leírhat, és számold ki a valószínűségüket. Mekkora eséllyel ír igazat Bécsről?
4. Hány előző szót kellene látnia a modellnek ahhoz, hogy a legvalószínűbb mondat utolsó lépésében tudja, hogy Bécsről van szó?

<!-- hint -->

Az „a” szó háromszor szerepel a szövegben. Kétszer a „legnagyobb” követi. A „legnagyobb” után mindig a „város” jön.

<!-- hint -->

Az egész mondat valószínűsége az egyes lépések valószínűségeinek **szorzata**. Négy lehetséges mondat van, és a valószínűségeik összege 1.

<!-- hint -->

Amikor a modell az utolsó szót választja, csak a „város” szót látja. Hány szóval hátrébb van a „Bécs”?

<!-- solution -->

**1.** Az „a” után: legnagyobb 2/3, második 1/3. A „város” után: Csehországban 2/3, Ausztriában 1/3.

**2.** „Bécs a legnagyobb város **Csehországban**.” Hamis, pedig minden lépés a legvalószínűbb volt. Ez kicsiben a hallucináció: gördülékeny és magabiztos, de senki sem ellenőrizte.

**3.**
| mondat | számítás | valószínűség |
|---|---|---|
| Bécs a legnagyobb város Csehországban | 2/3 · 2/3 | 4/9 |
| Bécs a legnagyobb város Ausztriában | 2/3 · 1/3 | 2/9 |
| Bécs a második legnagyobb város Csehországban | 1/3 · 2/3 | 2/9 |
| Bécs a második legnagyobb város Ausztriában | 1/3 · 1/3 | 1/9 |

Csak a második mondat igaz (Bécs a legnagyobb, nem a második legnagyobb). Az igazság esélye **2/9 ≈ 22%**.

**4.** **Négy** szót: „Bécs a legnagyobb város”. Ez a négyes csak egyszer szerepel a szövegben, és „Ausztriában” követi. A hosszabb környezet tehát segít, csakhogy akkor a modell főleg a megtanult mondatokat ismétli, és sokkal több adatra van szüksége.

<!-- more -->

A valódi modellek több ezer előző tokent látnak, és a **figyelem** mechanizmusa (angolul attention) megmondja nekik, melyikekre nézzenek. Ezért emlékeznek „Bécsre”. A hallucináció azonban nem tűnik el: ha egy tény hiányzik az adatokból, vagy ritka, a valószínű folytatás még mindig lehet hamis. Írd meg ezt a modellt programként Scratchben vagy Pythonban, és etesd hosszabb szöveggel, például egy mesével. Aztán nézz bele a valódi GPT-2-be a [Transformer Explainer](https://github.com/poloclub/transformer-explainer) segítségével (angolul), és keresd meg, hol mutatja a következő token valószínűségeit.
