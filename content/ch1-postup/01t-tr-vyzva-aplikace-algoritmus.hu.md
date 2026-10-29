---
id: vyzva-aplikace-algoritmus-hu
translationOf: vyzva-aplikace-algoritmus
lang: hu
type: challenge
title: "A legkevesebb utalás"
level: 3
minutes: 30
readingTime: 2
standalone: true
teaser: "A költségmegosztó app négy utalást javasol."
voice: universal
parent: svet-aplikace-algoritmus-hu
diagram: null
core: false
status: accepted
concept: algoritmus
state: edited
lens: aplikace
visuality: text-first
depth: standard
formalism: none
lengthBand: standard
carriers: prose|table
---

A költségmegosztó app négy utalást javasol. Megoldható háromból? És honnan tudod, hogy kettőből biztosan nem?

<!-- task -->

Az élményfürdős kirándulás után ezek az egyenlegek jöttek ki. A pozitív szám azt jelenti, hogy a többiek tartoznak neked, a negatív azt, hogy te tartozol.

| Ki | Egyenleg |
|---|---|
| Ema | +600 Kč |
| Tomáš | +500 Kč |
| Ondra | −500 Kč |
| Jana | −400 Kč |
| Petr | −200 Kč |

Az app **mohó módszert** használ: veszi azt, aki a legtöbbel tartozik, és ő a lehető legtöbbet küldi annak, akinek a legtöbbel tartoznak. Újraszámolja az egyenlegeket, és addig ismétli, amíg mindenki nullán nem áll.

1. Kövesd végig a mohó módszert lépésről lépésre. Hány utalás jön ki?
2. Keress kevesebb utalással járó megoldást.
3. Bizonyítsd be, hogy két utalás nem elég.
4. Találd meg a szabályt: n ember legfeljebb k csoportra osztható úgy, hogy mindegyik csoport egyenlegeinek összege nulla. Legalább hány utalás kell?

**Siker:** van háromutalásos megoldásod, el tudod magyarázni, miért nem megy kevesebbel, és megvan a képlet a 4. pontból.

<!-- hint -->

Mohón: Ondra (−500) küld Emának (+600). Emának ezután +100 marad. Folytasd Janával és Tomášsal, és figyeld, kinek mi marad.

<!-- hint -->

Keress két vagy három embert, akiknek az egyenlege együtt pontosan nulla. Egy ilyen csoport egymás között elszámol, és a többiekhez semmi köze.

<!-- hint -->

Rajzold le az embereket pontként, az utalásokat vonalként. Legalább hány vonal kell, hogy m pont összefüggjön? És mennyi lesz az egyenlegek összege minden összefüggő részben?

<!-- solution -->

**Mohó módszerrel 4 utalás jön ki:** Ondra → Ema 500 Kč (Emának marad +100), Jana → Tomáš 400 Kč (Tomášnak marad +100), Petr → Ema 100 Kč és Petr → Tomáš 100 Kč.

**Elég 3:** Ondra → Tomáš 500 Kč, Jana → Ema 400 Kč, Petr → Ema 200 Kč. Tomáš és Ondra nulla összegű csoportot alkot (+500 − 500), és a többiek is (+600 − 400 − 200).

**Miért nem 2:** az utalások hálózatot alkotnak. A hálózat minden összefüggő részében nulla az egyenlegek összege, különben valaki mínuszban maradna. Egy m emberből álló részhez legalább m − 1 utalás kell. Két utalás öt ember között legalább három különálló részt hagy. Ezek egyike csak egyetlen ember lehetne, és neki nulla egyenlegűnek kellene lennie. Ilyen ember itt nincs.

**Szabály:** a legkevesebb utalás = n − k. A legnagyobb k-t viszont nehéz megtalálni: 30 embert több mint 8 × 10²³ módon lehet csoportokra osztani. Ezért az appok mohón számolnak, és csak azt garantálják, hogy nem lesz több utalás n − 1-nél.

<!-- more -->

Találj ki hat ember egyenlegeit, amelyeknél a mohó módszer alulmarad. Legfeljebb mennyivel maradhat alul? Aztán írj App Inventorban vagy Pythonban programot, amely kevés embernél kipróbálja az összes csoportfelosztást, és megtalálja az optimumot. Hasonlítsd össze azzal, ahogyan a nyílt forráskódú [Spliit](https://github.com/spliit-app/spliit) app javasolja a kiegyenlítést.
