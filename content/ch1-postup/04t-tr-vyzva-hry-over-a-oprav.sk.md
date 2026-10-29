---
id: vyzva-hry-over-a-oprav-sk
translationOf: vyzva-hry-over-a-oprav
lang: sk
type: challenge
title: "Koľko medzikrokov potrebuje rýchla loptička"
level: 3
minutes: 25
readingTime: 2
standalone: true
teaser: "Vieš, prečo rýchla loptička preletí pálkou."
voice: universal
parent: svet-hry-over-a-oprav-sk
diagram: null
core: false
status: accepted
concept: over-a-oprav
state: edited
lens: hry
visuality: text-first
depth: standard
formalism: none
lengthBand: standard
carriers: prose
---

Vieš, prečo rýchla loptička preletí pálkou. Teraz to spočítaš presne: od akej rýchlosti hra zlyhá a ako málo práce stačí, aby už nezlyhala nikdy.

<!-- task -->

Loptička je štvorec široký 8 px a letí vodorovne. Pálka je široká 10 px. Hra raz za snímok posunie loptičku o `v` pixelov a potom skontroluje, či sa loptička s pálkou prekrýva. **Dotyk hranou sa počíta ako zásah.**

1. Aká je najväčšia rýchlosť `v` (px za snímok), pri ktorej loptička pálkou **nikdy** nepreletí, nech štartuje odkiaľkoľvek?
2. Loptička letí 40 px za snímok. Hra môže pohyb rozdeliť na `k` rovnakých medzikrokov a kontrolovať po každom z nich. Aké najmenšie `k` stačí?
3. Napíš test (vstup a očakávaný výstup), ktorý s jednou kontrolou za snímok zlyhá a s medzikrokmi prejde. Pálka zaberá x od 20 do 30, ľavý okraj loptičky štartuje na x = 0 a loptička letí 40 px za snímok.

**Kritérium úspechu:** číslo v bode 1 so zdôvodnením, najmenšie `k` a test, v ktorom vypíšeš polohy loptičky po každej kontrole.

<!-- hint -->

Loptička sa s pálkou prekrýva, keď jej ľavý okraj x leží medzi 20 − 8 = 12 a 30. Aký dlhý je tento úsek?

<!-- hint -->

Keď je krok dlhší ako ten úsek, loptička ho môže preskočiť. Keď je kratší alebo rovnako dlhý, aspoň jedna poloha doň padne.

<!-- hint -->

Pre bod 2: každý medzikrok smie byť najviac taký dlhý ako výsledok z bodu 1.

<!-- solution -->

1. Prekrytie nastane, keď ľavý okraj loptičky leží od 12 do 30 vrátane. To je úsek dlhý **18 px** (šírka pálky + šírka loptičky). Krok do 18 px ho nemôže preskočiť, takže bezpečná rýchlosť je **v ≤ 18 px za snímok**.
2. 40 / 18 ≈ 2,2, takže **k = 3**. Medzikrok je 40 / 3 ≈ 13,3 px, čo je menej ako 18. Dva medzikroky po 20 px nestačia, pretože 20 > 18.
3. Bez medzikrokov: x = 0, potom x = 40. Ani jedna poloha neleží v úseku 12 až 30, **loptička preletí**. S medzikrokmi: x = 0; 13,3; 26,7; 40. Poloha 13,3 leží v úseku, **loptička sa odrazí**. Test: *štart 0, rýchlosť 40, pálka 20 až 30 → očakávam odraz.*

Medzikroky však stoja výkon. Guľka letiaca 2000 px za snímok by ich potrebovala vyše sto. Preto sa pri strelách používa **lúč**: hra spočíta, či úsečka medzi starou a novou polohou pretne obdĺžnik cieľa.

<!-- more -->

Fyzikálne teleso v Godote (RigidBody2D) má voľbu *Continuous CD*, spojitú detekciu kolízií, ktorá robí práve toto. Postav rýchlu strelu, voľbu zapni a vypni a porovnaj. Ešte ďalej: odvoď, v ktorom zlomku kroku loptička vstúpi do pásu medzi x = 12 a x = 30. Z toho presne spočítaš miesto odrazu, nielen to, že k nemu došlo.
