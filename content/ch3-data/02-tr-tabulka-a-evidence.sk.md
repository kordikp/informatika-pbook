---
id: tabulka-a-evidence-sk
translationOf: tabulka-a-evidence
lang: sk
type: spine
title: "Tabuľka: dáta s poriadkom"
readingTime: 2
standalone: true
teaser: "Napíšeš do hľadania v kontaktoch „Ja“ a mobil hneď nájde Janu aj Jakuba. Ako to dokáže tak rýchlo?"
voice: universal
parent: null
diagram: relacni-model-sk
core: true
recallQ: "Čo je v tabuľke evidencie riadok a čo stĺpec a prečo potrebuje pravidlá zápisu?"
recallA: "Riadok je jeden záznam (jedna výpožička), stĺpec jedna vlastnosť (kniha, žiak, dátum). Bez jednotných pravidiel sa dáta nedajú spoľahlivo filtrovať ani počítať."
lens: generic
visuality: balanced
depth: intro
formalism: none
lengthBand: standard
genre: worked-example
status: accepted
concept: tabulka-a-evidence
conceptTitle: "Tabuľka: dáta s poriadkom"
objective: "Napíšeš do hľadania v kontaktoch „Ja“ a mobil hneď nájde Janu aj Jakuba. Ako to dokáže tak rýchlo?"
state: core
highlights:
  - "Záznam (riadok) a vlastnosť (stĺpec); štruktúrované vs. neštruktúrované dáta"
  - "Pravidlá pre záznamy: jednotný formát, žiadne duplicity, povinné údaje"
  - "Zoradenie, filter a funkcie (súčet, počet) odpovedajú na otázky"
carriers: prose|table|diagram
---

Napíšeš do hľadania v kontaktoch „Ja“ a mobil hneď nájde Janu aj Jakuba. Ako to dokáže tak rýchlo?

**Evidencia** ukladá dáta do **tabuľky**. Každý **riadok** je jeden **záznam** (jedna výpožička) a každý **stĺpec** jedna **vlastnosť** (kto, čo, do kedy). Aby sa s tabuľkou dalo pracovať, platia **pravidlá zápisu**.

Triedna knižnica vedie zošit výpožičiek a je v ňom chaos: „Peter má Harryho, vráti v piatok 24.“, „Ondro si 1. 10. vzal Hobita, na tri týždne“, „Tomáš Robinson 30/10“ a Ema je tam dvakrát. Dnes je 28. 10. Kto má knihu po termíne? Z poznámok sa to dá len hádať. Uprataná tabuľka má jeden riadok na výpožičku a dátum vždy ako deň a mesiac:

| Žiak | Kniha | Vrátiť do |
|---|---|---|
| Peter | Harry Potter | 24. 10. |
| Ema | Malý princ | 20. 10. |
| Ondro | Hobit | 22. 10. |
| Lucia | Denník odvážneho bojka | 4. 11. |
| Tomáš | Robinson Crusoe | 30. 10. |

Filter „vrátiť do je skôr ako 28. 10.“ nájde hneď troch: Petra, Emu a Ondra.

Z poznámok sa odpoveď len hádala. V upratanej tabuľke ju **filter** našiel hneď. Filter je podmienka položená každému riadku: je dátum vrátenia skôr ako dnes?

Tabuľka vie aj **zoraďovať** a **počítať**: koľko kníh má Ema, koľko výpožičiek je po termíne. Funguje to však len vtedy, keď všetci píšu podľa rovnakých pravidiel: rovnaký formát, žiadne duplicity, nič nechýba.

Viac stĺpcov neznamená lepšiu evidenciu. Stĺpec má zmysel, keď sa naň budeš pýtať.

**Vyskúšaj to!** Navrhni tabuľku výpožičiek pre školskú knižnicu: aké bude mať stĺpce a aké dve pravidlá zápisu zavedieš (napríklad formát dátumu a povinné stĺpce)? Zapíš do nej tri výpožičky a nájdi tú, ktorá je po termíne.

> **Pozor, častý omyl:** „Tabuľka je len pekne zarovnaný text.“ Tabuľka má pravidlá: každý riadok je jeden záznam, každý stĺpec jeden druh údaja. Až vďaka nim sa dá hľadať, triediť a filtrovať. A viac stĺpcov neznamená lepšiu evidenciu.

**Ďalej:** Z upratanej tabuľky sa dá nakresliť graf. Lenže aj poctivé dáta sa dajú nakresliť nepoctivo. → [Z dát informácia](#c/z-dat-informace)
