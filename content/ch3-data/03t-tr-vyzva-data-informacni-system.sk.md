---
id: vyzva-data-informacni-system-sk
translationOf: vyzva-data-informacni-system
lang: sk
type: challenge
title: "Kto mohol zmazať video?"
level: 3
minutes: 30
readingTime: 2
standalone: true
teaser: "Krúžok natáča film."
voice: universal
parent: null
diagram: null
core: false
status: accepted
concept: informacni-system
state: edited
lens: generic
visuality: text-first
depth: standard
formalism: none
lengthBand: standard
carriers: prose|table
---

Krúžok natáča film. V zdieľanom priečinku zmizol najlepší záber. Nikto sa nepriznáva. Lenže otázka „kto to urobil“ je tá menšia. Tá väčšia znie: koľko ľudí to vôbec **mohlo** urobiť?

<!-- task -->

Priečinok **Film 7.B** má tri podpriečinky: **Zábery**, **Hudba**, **Strih**. Práva fungujú ako vo väčšine cloudových diskov:
- právo nastavené na priečinku **zdedí** všetko vnútri;
- keď má niekto viac práv z rôznych miest, platí **to najvyššie** (editor > komentátor > čitateľ);
- **editor** smie nahrávať, meniť aj mazať.

**Súčasné nastavenie:** na priečinku Film 7.B má skupina **Celá trieda 7.B (26 ľudí)** právo editor. Na priečinku Zábery je navyše odkaz „ktokoľvek s odkazom môže zobraziť“.

**Potreby tímu:**
1. Tomáš nahráva zábery.
2. Ondra nahráva hudbu a zábery potrebuje iba vidieť.
3. Ema píše k záberom poznámky, nič nemaže.
4. Ty skladáš strih, potrebuješ vidieť zábery aj hudbu.
5. Pani učiteľka chce vidieť iba hotový film v Strihu.

**Úlohy:** (a) Koľko ľudí mohlo záber zmazať a prečo? (b) Prečo sa problém nedá opraviť tak, že na priečinku Zábery nastavíš triede „iba čitateľ“? (c) Navrhni nastavenie, ktoré splní všetkých päť potrieb a **nedá nikomu nič navyše**. Zapíš ho ako tabuľku priečinok × človek. **Kritérium:** každá potreba je splnená a žiadne právo sa nedá odobrať bez toho, aby sa nejaká potreba porušila.

<!-- hint -->

Editor na nadradenom priečinku znamená editor aj vo všetkých podpriečinkoch. Koľko ľudí je v skupine?

<!-- hint -->

Pravidlo „najvyššie vyhráva“: keď niekto dostane editora zhora a čitateľa na podpriečinku, čo platí?

<!-- hint -->

Práva musíš dávať čo najnižšie, priamo na podpriečinky, a na nadradenom priečinku nechať iba vlastníka. A ten verejný odkaz vôbec niekto potrebuje?

<!-- solution -->

**(a)** Záber mohlo zmazať **26 ľudí** z triedy plus vlastník priečinka. Editor zdedený z Film 7.B platí aj v Záberoch. (Odkaz „ktokoľvek môže zobraziť“ mazať nedovolí, ale zábery vidí ktokoľvek, ku komu sa odkaz dostane.)

**(b)** Pretože platí **najvyššie** právo. Trieda má editora zhora, čitateľ na podpriečinku ho neprebije. Práva sa v takých systémoch na podpriečinku pridávajú, nie odoberajú.

**(c)** Na **Film 7.B** nikto okrem teba ako vlastníka. Verejný odkaz zrušiť.

| | Zábery | Hudba | Strih |
|---|---|---|---|
| Tomáš | editor | – | – |
| Ondra | čitateľ | editor | – |
| Ema | komentátor | – | – |
| ty | čitateľ | čitateľ | editor |
| učiteľka | – | – | čitateľ |

Iba **3 práva editora**, každé iba na „vlastnom“ priečinku. To je **zásada najmenších práv**. Zmazať záber teraz môže iba Tomáš (a ty ako vlastník). Druhá poistka: kôš a história verzií, z ktorých sa zmazaný súbor dá obnoviť.

<!-- more -->

Prejdi s rodičom zdieľanie jedného svojho priečinka v cloude a spočítaj, koľko ľudí doň reálne vidí, vrátane odkazov. Potom pridaj šiestu potrebu: „Bára zvonka má raz nahrať titulky“. Dokážeš ju splniť tak, aby po týždni nemala žiadne právo? Hľadaj v nastavení zdieľania dátum vypršania prístupu.
