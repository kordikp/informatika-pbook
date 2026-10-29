---
id: vyzva-postup-abstrakce-a-model
type: challenge
title: "Robot, který projde každou chodbou jednou"
level: 3
minutes: 30
readingTime: 2
standalone: true
teaser: "Uklízecí robot má na baterii jen tolik, aby projel každou chodbou školy právě jednou."
voice: universal
parent: null
diagram: null
core: false
lang: cs
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

Uklízecí robot má na baterii jen tolik, aby projel každou chodbou školy právě jednou. Kudy má jet? A jde to vůbec?

<!-- task -->

Model školy je graf. Místnosti jsou uzly, chodby hrany:

**V**chod, **Š**atna, **J**ídelna, **T**ělocvična, **K**nihovna, **U**čebna.
Chodby: V–Š, V–J, Š–J, Š–T, Š–K, J–K, T–K, T–U, K–U.

1. Může robot vyjet od Vchodu, projet **každou chodbou právě jednou** a vrátit se ke Vchodu? Odpověď **dokaž**, nestačí „vyzkoušeno, funguje to“.
2. Kde musí robot začít a kde skončí, aby projel každou chodbu právě jednou? Napiš celou trasu.
3. Smíš přistavět **jednu** novou chodbu. Kterou, aby šlo vyjet od Vchodu a vrátit se k němu?
4. Model vynechal délky chodeb, schody i dveře. Proč to pro tuhle otázku nevadí? Pro jakou otázku by to vadilo?

**Kritérium úspěchu:** pravidlo, které rozhodne bez zkoušení, a trasa o 9 hranách.

<!-- hint -->

Spočítej u každé místnosti, kolik chodeb z ní vede.

<!-- hint -->

Když robot místností jen projíždí, použije jednu chodbu tam a jednu ven. Co to znamená pro počet chodeb u místnosti, kde nezačíná ani nekončí?

<!-- hint -->

Místnosti s lichým počtem chodeb jsou jen dvě. Ty jsou klíč ke všem třem odpovědím.

<!-- solution -->

**Počty chodeb:** V 2, Š 4, J 3, T 3, K 4, U 2.

1. **Nejde.** Pokaždé, když robot místností projede, spotřebuje dvě chodby. Kdyby začal a skončil ve Vchodu, musela by mít každá místnost sudý počet chodeb. Jídelna a Tělocvična mají 3.
2. Začne v **Jídelně** a skončí v **Tělocvičně** (nebo naopak). Trasa: J → V → Š → J → K → Š → T → K → U → T. To je všech 9 chodeb.
3. Chodba **J–T**. Pak má každá místnost sudý počet a okruh od Vchodu jde.
4. Otázka zní jen „jde to projet?“, a to závisí jen na tom, co s čím sousedí. Délky by vadily u otázky „jak dlouho to potrvá“ nebo „stačí baterie“.

Tohle pravidlo objevil Leonhard Euler v roce 1736 u sedmi mostů v Královci. Graf je nejjednodušší model, ve kterém jde odpověď dokázat.

<!-- more -->

Nakresli graf svého bytu, školy nebo sídliště a rozhodni, jestli jde obejít jedním tahem. Pak si ve hře navíc se želvou nakresli „domeček jedním tahem“: je to stejná úloha.
