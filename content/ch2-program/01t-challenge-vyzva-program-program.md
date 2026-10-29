---
id: vyzva-program-program
type: challenge
title: "Které řádky smíš prohodit?"
level: 3
minutes: 25
readingTime: 2
standalone: true
teaser: "V jádru stačilo prohodit dva bloky a robot jel jinam."
voice: universal
parent: null
diagram: null
core: false
lang: cs
status: accepted
concept: program
state: edited
lens: generic
visuality: text-first
depth: standard
formalism: none
lengthBand: standard
carriers: prose|code
---

V jádru stačilo prohodit dva bloky a robot jel jinam. Jenže ne každé prohození něco rozbije. Některé řádky jdou přeházet beztrestně. Které, a podle čeho to poznáš?

<!-- task -->

Tady je krátký program v Pythonu. Znak `=` znamená „nastav na“: do krabičky vlevo se uloží hodnota zprava. `print` vypíše výsledek.

```
1  cena = 150
2  sleva = 30
3  kusy = 2
4  cena = cena - sleva
5  celkem = cena * kusy
6  print(celkem)
```

**Úkol 1.** Co program vypíše?

**Úkol 2.** Projdi pět dvojic sousedních řádků: 1–2, 2–3, 3–4, 4–5, 5–6. U každé rozhodni: když ty dva řádky prohodíš, vypíše program pořád totéž?

**Úkol 3.** Najdi pravidlo. Kdy dva příkazy smíš prohodit a kdy ne? Pravidlo musí jít použít na jakýkoli program, ne jen na tenhle.

**Úkol 4.** Změň řádek 2 na `sleva = cena // 5` (pětina ceny, `//` je dělení beze zbytku). Které dvojice jdou prohodit teď? Sedí na ně tvoje pravidlo?

**Kdy máš hotovo:** správný výstup, správně rozhodnuté všechny dvojice v obou verzích a pravidlo, které platí pro obě.

<!-- hint -->

U každého řádku si napiš dvě věci: které krabičky **čte** (vpravo od `=` nebo v závorce) a do které **zapisuje** (vlevo od `=`).

<!-- hint -->

Řádek 5 čte `cena` a řádek 4 ji zapisuje. Záleží pak na tom, který z nich proběhne dřív?

<!-- hint -->

Prohození je bezpečné, když ani jeden řádek nezapisuje krabičku, kterou ten druhý čte nebo zapisuje.

<!-- solution -->

**Výstup:** 240. Cena je 150 − 30 = 120 a 120 × 2 = 240.

**Původní verze:**
- 1–2 ano: nesdílejí žádnou krabičku.
- 2–3 ano.
- 3–4 ano: řádek 4 krabičku `kusy` nepoužívá.
- 4–5 ne: řádek 5 by násobil starou cenu 150 a vyšlo by 300.
- 5–6 ne: `print` by chtěl vypsat `celkem`, které ještě neexistuje, a program spadne.

**Pravidlo:** dva příkazy smíš prohodit, když **žádný z nich nezapisuje krabičku, kterou ten druhý čte nebo zapisuje**. Jinak mezi nimi je **závislost** a pořadí je pevné.

**Verze se `sleva = cena // 5`:** 1–2 už nejde, protože řádek 2 teď čte `cena`, která by ještě neexistovala. 2–3 a 3–4 jdou, 4–5 a 5–6 ne. Výstup je pořád 240, protože pětina ze 150 je 30.

<!-- more -->

Přesně tohle pravidlo používá **procesor** ve tvém mobilu. Aby byl rychlejší, sám přehazuje příkazy, které na sobě nezávisí, a některé dělá současně. Hlídá přitom stejné „čte a zapisuje“ jako ty.

Zkus si nakreslit **graf závislostí**: každý řádek je kroužek a šipka vede od řádku, který krabičku zapisuje, k řádku, který ji čte. Kolik různých pořadí všech šesti řádků dá stejný výsledek? (Pro kontrolu: 8.) Ověř si to v [Python Tutoru](https://pythontutor.com/).
