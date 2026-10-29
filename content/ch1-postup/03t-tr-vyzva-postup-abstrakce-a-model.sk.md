---
id: vyzva-postup-abstrakce-a-model-sk
translationOf: vyzva-postup-abstrakce-a-model
lang: sk
type: challenge
title: "Robot, ktorý prejde každou chodbou raz"
level: 3
minutes: 30
readingTime: 2
standalone: true
teaser: "Upratovací robot má v batérii len toľko, aby prešiel každou chodbou školy práve raz."
voice: universal
parent: null
diagram: null
core: false
status: accepted
concept: abstrakce-a-model
state: edited
lens: generic
visuality: text-first
depth: standard
formalism: none
lengthBand: standard
carriers: prose
---

Upratovací robot má v batérii len toľko, aby prešiel každou chodbou školy práve raz. Kadiaľ má ísť? A dá sa to vôbec?

<!-- task -->

Model školy je graf. Miestnosti sú uzly, chodby hrany:

**V**chod, **Š**atňa, **J**edáleň, **T**elocvičňa, **K**nižnica, **U**čebňa.
Chodby: V–Š, V–J, Š–J, Š–T, Š–K, J–K, T–K, T–U, K–U.

1. Môže robot vyraziť od Vchodu, prejsť **každou chodbou práve raz** a vrátiť sa k Vchodu? Odpoveď **dokáž**, nestačí „vyskúšané, funguje to“.
2. Kde musí robot začať a kde skončí, aby prešiel každú chodbu práve raz? Napíš celú trasu.
3. Smieš pristavať **jednu** novú chodbu. Ktorú, aby sa dalo vyraziť od Vchodu a vrátiť sa k nemu?
4. Model vynechal dĺžky chodieb, schody aj dvere. Prečo to pri tejto otázke nevadí? Pri akej otázke by to vadilo?

**Kritérium úspechu:** pravidlo, ktoré rozhodne bez skúšania, a trasa s 9 hranami.

<!-- hint -->

Spočítaj pri každej miestnosti, koľko chodieb z nej vedie.

<!-- hint -->

Keď robot cez miestnosť len prechádza, použije jednu chodbu dnu a jednu von. Čo to znamená pre počet chodieb pri miestnosti, kde nezačína ani nekončí?

<!-- hint -->

Miestnosti s nepárnym počtom chodieb sú len dve. Tie sú kľúčom ku všetkým trom odpovediam.

<!-- solution -->

**Počty chodieb:** V 2, Š 4, J 3, T 3, K 4, U 2.

1. **Nejde to.** Zakaždým, keď robot prejde cez miestnosť, spotrebuje dve chodby. Keby začal a skončil vo Vchode, musela by mať každá miestnosť párny počet chodieb. Jedáleň a Telocvičňa majú 3.
2. Začne v **Jedálni** a skončí v **Telocvični** (alebo naopak). Trasa: J → V → Š → J → K → Š → T → K → U → T. To je všetkých 9 chodieb.
3. Chodba **J–T**. Potom má každá miestnosť párny počet a okruh od Vchodu sa dá.
4. Otázka znie len „dá sa to prejsť?“, a to závisí len od toho, čo s čím susedí. Dĺžky by vadili pri otázke „ako dlho to potrvá“ alebo „stačí batéria“.

Toto pravidlo objavil Leonhard Euler v roku 1736 pri siedmich mostoch v Kráľovci. Graf je najjednoduchší model, v ktorom sa odpoveď dá dokázať.

<!-- more -->

Nakresli graf svojho bytu, školy alebo sídliska a rozhodni, či sa dá obísť jedným ťahom. Potom si v hre navyše s korytnačkou nakresli „domček jedným ťahom“: je to rovnaká úloha.
