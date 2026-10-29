---
id: vyzva-postup-over-a-oprav-sk
translationOf: vyzva-postup-over-a-oprav
lang: sk
type: challenge
title: "Priestupný rok a vetva, ktorá nikdy neprebehne"
level: 3
minutes: 30
readingTime: 2
standalone: true
teaser: "Program v kalendárovej apke rozhoduje, či je rok priestupný."
voice: universal
parent: null
diagram: null
core: false
status: accepted
concept: over-a-oprav
state: edited
lens: generic
visuality: text-first
depth: standard
formalism: none
lengthBand: standard
carriers: prose|code
---

Program v kalendárovej apke rozhoduje, či je rok priestupný. Pre rok 2024 funguje. Pre 2023 tiež. A napriek tomu je zlý. Nájdeš chybu skôr, než ju nájdu používatelia?

<!-- task -->

**Pravidlo:** rok je priestupný, keď je deliteľný 4. Výnimka: roky deliteľné 100 priestupné nie sú. Výnimka z výnimky: roky deliteľné 400 priestupné sú.

```
funkcia priestupný(rok):
    ak rok je deliteľný 4: vráť ÁNO
    inak ak rok je deliteľný 100: vráť NIE
    inak ak rok je deliteľný 400: vráť ÁNO
    inak: vráť NIE
```

1. **Vopred, bez čítania kódu**, napíš čo najmenšiu sadu testov (vstup a očakávaný výstup), aby z každej skupiny rokov, s ktorou pravidlo zaobchádza inak, bol aspoň jeden. Koľko testov stačí?
2. Vykonaj kód s každým testom. Ktorý zlyhá?
3. Nájdi v kóde dve vetvy, ktoré **nikdy neprebehnú**, nech zadáš akýkoľvek rok. Prečo?
4. Oprav kód a over ho **znova všetkými testami**.

**Kritérium úspechu:** 4 testy, nájdený chybný vstup, vysvetlenie mŕtvych vetiev a oprava, ktorá prejde všetkými testami.

<!-- hint -->

Pravidlo delí roky do štyroch skupín: nedeliteľné 4, deliteľné 4, ale nie 100, deliteľné 100, ale nie 400, deliteľné 400.

<!-- hint -->

Vezmi rok 1900. Je deliteľný 4?

<!-- hint -->

Čo sa stane s rokom deliteľným 100, keď sa kód najskôr pýta na deliteľnosť 4? Skús otočiť poradie otázok.

<!-- solution -->

1. **Štyri testy:** 2023 → NIE, 2024 → ÁNO, 1900 → NIE, 2000 → ÁNO.
2. Zlyhá **1900**: je deliteľný 4, takže kód hneď vráti ÁNO. Rok 1900 ale priestupný nebol.
3. Každý rok deliteľný 100 (aj 400) je deliteľný aj 4. Prvá podmienka ho preto chytí vždy a druhá a tretia vetva sa nikdy nespustí. Takej vetve sa hovorí **mŕtvy kód** a je to varovanie, že niečo nie je v poriadku.
4. Oprava: pýtaj sa od najprísnejšej podmienky.
```
ak rok je deliteľný 400: vráť ÁNO
inak ak rok je deliteľný 100: vráť NIE
inak ak rok je deliteľný 4: vráť ÁNO
inak: vráť NIE
```
Všetky štyri testy prejdú. Jeden test na každú skupinu je spoľahlivejší než sto náhodných rokov, pretože náhodný rok deliteľný 100 skoro nikdy nevyberieš.

<!-- more -->

Efektivita: opravený kód sa pri roku 2023 pýta trikrát, kým odpovie NIE. Pritom 3 zo 4 rokov nie sú deliteľné 4. Prepíš ho tak, aby sa pri väčšine rokov pýtal len raz, a over, že stále prejde všetkými štyrmi testami.
