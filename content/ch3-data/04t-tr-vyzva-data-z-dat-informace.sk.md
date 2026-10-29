---
id: vyzva-data-z-dat-informace-sk
translationOf: vyzva-data-z-dat-informace
lang: sk
type: challenge
title: "Lepší na každej mape, horší celkovo"
level: 3
minutes: 35
readingTime: 2
standalone: true
teaser: "Rebríček ukazuje, že hráč A vyhráva 67 % zápasov a hráč B iba 35 %."
voice: universal
parent: null
diagram: null
core: false
status: accepted
concept: z-dat-informace
state: edited
lens: generic
visuality: text-first
depth: standard
formalism: none
lengthBand: standard
carriers: prose|table
---

Rebríček ukazuje, že hráč A vyhráva 67 % zápasov a hráč B iba 35 %. Jasná vec. Lenže keď sa pozrieš na jednotlivé mapy, B je lepší na **oboch**. Ako je to možné?

<!-- task -->

Hra má dve mapy: ľahkú a ťažkú. Štatistiky:

| | ľahká mapa | ťažká mapa |
|---|---|---|
| hráč A | 90 výhier zo 100 | 10 výhier z 50 |
| hráč B | 19 výhier z 20 | 30 výhier zo 120 |

1. Spočítaj úspešnosť oboch hráčov na každej mape zvlášť a celkovo.
2. Vysvetli jednou-dvoma vetami, ako môže byť B lepší na oboch mapách, a predsa horší celkovo. Čo je tá **skrytá tretia vec**?
3. Navrhni **férové porovnanie** a spočítaj ho.
4. Vymysli **vlastné** dáta (napríklad dve triedy, ktoré píšu ľahký a ťažký test), kde nastane rovnaký obrat. **Kritérium:** jedna skupina je lepšia v oboch kategóriách a horšia celkovo.

<!-- hint -->

Úspešnosť = výhry / zápasy. Celkovú počítaj zo súčtov, nie ako priemer dvoch percent.

<!-- hint -->

Pozri sa, koľko zápasov na ktorej mape kto odohral. Kto hrá hlavne ťažkú mapu?

<!-- hint -->

Férové je porovnať oboch hráčov pri rovnakom pomere máp, napríklad pol na pol.

<!-- solution -->

**1.** A: ľahká 90 %, ťažká 20 %, celkovo 100/150 = **66,7 %**. B: ľahká 95 %, ťažká 25 %, celkovo 49/140 = **35 %**.

**2.** B hrá hlavne **ťažkú mapu** (120 zo 140 zápasov), A hlavne ľahkú. Celkové percento tak nemeria zručnosť, ale hlavne to, **akú mapu kto hrá**. Tomu sa hovorí **Simpsonov paradox**: skrytá tretia vec (mapa) obráti výsledok, keď skupiny sčítaš.

**3.** Pri rovnakom pomere 50 : 50: A = (90 + 20) / 2 = **55 %**, B = (95 + 25) / 2 = **60 %**. B je lepší hráč.

**4.** Príklad: v triede X napíše ľahký test úspešne 9 z 10 detí (90 %) a ťažký 6 z 20 (30 %), celkovo 15/30 = 50 %. Trieda Y ľahký 16 z 20 (80 %) a ťažký 2 z 10 (20 %), celkovo 18/30 = 60 %. X je lepšia v oboch testoch, Y celkovo. Všetky dáta, ktoré splnia kritérium, sú správne.

Rovnaký obrat sa naozaj stal v medicíne (liečba obličkových kameňov) aj pri prijímačkách na univerzity.

<!-- more -->

Otvor [CODAP](https://codap.concord.org/), zadaj svoje dáta a vytvor graf úspešnosti rozdelený podľa mapy. Potom skús graf bez rozdelenia. Ktorý z nich obstojí v poctivom rebríčku? A pozri sa na [Spurious Correlations](https://www.tylervigen.com/spurious-correlations): nájdi dvojicu, kde je za súvislosťou asi tretia vec, nie náhoda.
