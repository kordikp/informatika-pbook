---
id: vyzva-bezpeci-digitalni-stopa-sk
translationOf: vyzva-bezpeci-digitalni-stopa
lang: sk
type: challenge
title: "Tri nevinné stopy, jeden človek"
level: 3
minutes: 25
readingTime: 2
standalone: true
teaser: "Prezývka, fotka a blahoželanie k narodeninám."
voice: universal
parent: null
diagram: null
core: false
status: accepted
concept: digitalni-stopa
state: edited
lens: generic
visuality: text-first
depth: standard
formalism: none
lengthBand: standard
carriers: prose
---

Prezývka, fotka a blahoželanie k narodeninám. Nič z toho samo nič neprezradí. Dohromady možno áno. Vypočítaj to.

<!-- task -->

V meste žije **50 000 ľudí**. Pre zjednodušenie ber, že ročníky narodenia sú rovnomerne rozložené cez 80 rokov, v meste je 10 rovnako veľkých základných škôl a narodeniny pripadajú na každý z 365 dní rovnako často.

Ktosi zverejní tri stopy, každú na inom mieste:

1. prezývku v hre **kocour_2013** (prezradí rok narodenia),
2. fotku v mikine s názvom školy,
3. príspevok „Dnes mám narodeniny!“ s dátumom.

**Anonymná množina** je počet ľudí, ktorí zodpovedajú všetkému, čo o niekom vieš. Čím je menšia, tým ľahšie človeka nájdeš. Keď klesne pod 5, je človek prakticky dohľadateľný.

- **a)** Vypočítaj veľkosť anonymnej množiny po každej stope, v poradí 1, 2, 3.
- **b)** Smieš zmazať **jednu** stopu. Ktorú, aby množina zostala čo najväčšia? Vypočítaj všetky tri možnosti a výsledok zdôvodni.
- **c)** Model je zjednodušený. Nájdi jednu vec, kvôli ktorej je v skutočnosti množina ešte menšia.

**Kritérium úspechu:** správne čísla v a) aj b) a v c) jeden konkrétny dôvod.

<!-- hint -->

Každá stopa množinu delí: rok narodenia osemdesiatimi, škola desiatimi, deň narodenín tristošesťdesiatimi piatimi.

<!-- hint -->

Pri b) poradie stôp nehrá rolu. Vypočítaj, čo zostane, keď jedno z delení chýba.

<!-- hint -->

Pri c) mysli na to, čo ďalšie ukazuje fotka, a koľko detí rovnakého ročníka chodí do jednej školy.

<!-- solution -->

**a)** Po stope 1: 50 000 : 80 = **625** ľudí. Po stope 2: 625 : 10 ≈ **62**, to sú asi dve až tri triedy. Po stope 3: 62,5 : 365 ≈ **0,17**. Číslo menšie ako 1 znamená, že taký človek je v meste **najskôr jediný**.

**b)** Bez narodenín: 50 000 : 80 : 10 ≈ **62**. Bez roku: 50 000 : 10 : 365 ≈ **14**. Bez školy: 50 000 : 80 : 365 ≈ **1,7**. Najlepšie je odstrániť **dátum narodenín**: delí najviac, lebo má najviac možných hodnôt. Práve tá najnevinnejšia stopa je najzradnejšia. A pamätaj: zmazané neznamená zmiznuté, takže najlepšie je vôbec ju nezverejniť.

**c)** Napríklad: fotka ukáže tvár, kamarátov a miesto; z rovnakého ročníka chodí do školy len pár tried, takže stačí sa opýtať; prezývka býva rovnaká vo viacerých hrách. Vedci ukázali, že väčšinu Američanov jednoznačne určia len tri údaje: PSČ, dátum narodenia a pohlavie.

<!-- more -->

Urob rovnaký výpočet pre seba: čo prezradia tvoje prezývky, profily a fotky? Počítaj len na papieri a nikde to nezverejňuj. Zisti, čo je **k-anonymita**: tak sa chránia napríklad dáta v zdravotných štatistikách. A v nastaveniach fotoaparátu v mobile nájdi, či fotky ukladajú polohu.
