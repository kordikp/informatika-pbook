---
id: tabulka-a-evidence
type: spine
title: "Tabulka: data s řádem"
readingTime: 2
standalone: true
teaser: "Napíšeš do hledání v kontaktech „Ja“ a mobil hned najde Janu i Jakuba. Jak to dokáže tak rychle?"
voice: universal
parent: null
diagram: relacni-model
core: true
recallQ: "Co je v tabulce evidence řádek a co sloupec a proč potřebuje pravidla zápisu?"
recallA: "Řádek je jeden záznam (jedna výpůjčka), sloupec jedna vlastnost (kniha, žák, datum). Bez jednotných pravidel nejde data spolehlivě filtrovat ani počítat."
lang: cs
lens: generic
visuality: balanced
depth: intro
formalism: none
lengthBand: standard
genre: worked-example
status: accepted
concept: tabulka-a-evidence
conceptTitle: "Tabulka: data s řádem"
state: core
highlights:
  - "Záznam (řádek) a vlastnost (sloupec); strukturovaná vs. nestrukturovaná data"
  - "Pravidla pro záznamy: jednotný formát, žádné duplicity, povinné údaje"
  - "Řazení, filtr a funkce (součet, počet) odpovídají na otázky"
carriers: prose|table|diagram
---

Napíšeš do hledání v kontaktech „Ja“ a mobil hned najde Janu i Jakuba. Jak to dokáže tak rychle?

**Evidence** ukládá data do **tabulky**. Každý **řádek** je jeden **záznam** (jedna výpůjčka) a každý **sloupec** jedna **vlastnost** (kdo, co, do kdy). Aby se s tabulkou dalo pracovat, platí **pravidla zápisu**.

Třídní knihovna vede sešit výpůjček a je v něm chaos: „Petr má Harryho, vrátí v pátek 24.“, „Ondra si 1. 10. vzal Hobita, na tři týdny“, „Tomáš Robinson 30/10“ a Ema je tam dvakrát. Dnes je 28. 10. Kdo má knihu po termínu? Z poznámek se to dá jen hádat. Uklizená tabulka má jeden řádek na výpůjčku a datum vždycky jako den a měsíc:

| Žák | Kniha | Vrátit do |
|---|---|---|
| Petr | Harry Potter | 24. 10. |
| Ema | Malý princ | 20. 10. |
| Ondra | Hobit | 22. 10. |
| Lucie | Deník malého poseroutky | 4. 11. |
| Tomáš | Robinson Crusoe | 30. 10. |

Filtr „vrátit do je dřív než 28. 10.“ najde hned tři: Petra, Emu a Ondru.

Z poznámek se odpověď jen hádala. V uklizené tabulce ji **filtr** našel hned. Filtr je podmínka položená každému řádku: je datum vrácení dřív než dnes?

Tabulka umí také **řadit** a **počítat**: kolik knih má Ema, kolik výpůjček je po termínu. Funguje to ale jen tehdy, když všichni píšou podle stejných pravidel: stejný formát, žádné duplicity, nic nechybí.

Víc sloupců neznamená lepší evidenci. Sloupec má smysl, když se na něj budeš ptát.

**Zkus to!** Navrhni tabulku výpůjček pro školní knihovnu: jaké bude mít sloupce a jaká dvě pravidla zápisu zavedeš (třeba formát data a povinné sloupce)? Zapiš do ní tři výpůjčky a najdi tu, která je po termínu.

> **Pozor, častý omyl:** „Tabulka je jen hezky zarovnaný text.“ Tabulka má pravidla: každý řádek je jeden záznam, každý sloupec jeden druh údaje. Teprve díky nim jde hledat, třídit a filtrovat. A víc sloupců neznamená lepší evidenci.

**Dál:** Z uklizené tabulky se dá nakreslit graf. Jenže i poctivá data jde nakreslit nepoctivě. → [Z dat informace](#c/z-dat-informace)
