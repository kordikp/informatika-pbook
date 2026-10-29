---
id: vyzva-data-tabulka-a-evidence
type: challenge
title: "Dvě Emy a jeden klíč"
level: 3
minutes: 40
readingTime: 2
standalone: true
teaser: "Do knihovny přišla nová žákyně ze 7.A."
voice: universal
parent: null
diagram: null
core: false
lang: cs
status: accepted
concept: tabulka-a-evidence
state: edited
lens: generic
visuality: text-first
depth: standard
formalism: none
lengthBand: deep
carriers: prose|table
---

Do knihovny přišla nová žákyně ze 7.A. Jmenuje se taky Ema. Od té doby `=COUNTIF(…; "Ema")` počítá nesmysly a nikdo neví, kdo má Hobita. Tabulka je uklizená, a přesto lže.

<!-- task -->

Knihovna má jednu tabulku výpůjček se sloupci **Jméno, Třída, E-mail, Kniha, Vráceno**. Každá výpůjčka znovu opisuje jméno, třídu i e-mail.

1. Najdi **dva různé problémy** této tabulky, které vzniknou, když (a) má škola dvě Emy, (b) Ema Nováková změní e-mail.
2. Navrhni místo ní **tři tabulky** tak, aby **každý fakt byl zapsaný jen jednou**. U každé napiš sloupce a označ **klíč**: sloupec, podle kterého jde řádek jednoznačně najít.
3. Tvé tabulky obsahují tato data:

| id | jméno | třída |
|---|---|---|
| 1 | Ema Nováková | 7.B |
| 2 | Ema Dvořáková | 7.A |
| 3 | Tomáš | 7.B |
| 4 | Ondra | 7.B |

Výpůjčky (id žáka, kniha, vráceno): (1, Hobit, ano), (1, Harry Potter, ne), (2, Malý princ, ne), (3, Bratři Lví srdce, ne), (4, Hobit, ne), (2, Bratři Lví srdce, ano).

Kolik knih mají **právě teď** půjčeno žáci ze **7.B**? A kolik by v původní tabulce vrátil `COUNTIF` na „Ema“ (předpokládej, že jsou tam jen křestní jména)?

**Kritérium úspěchu:** změna e-mailu je v tvém návrhu změna jedné buňky a obě odpovědi ve 3. úkolu sedí.

<!-- hint -->

Problém (b): v kolika řádcích je e-mail Emy Novákové? Co se stane, když ho přepíšeš jen ve dvou ze tří?

<!-- hint -->

Jméno není dobrý klíč, protože se opakuje. Vymysli číslo, které se nikdy nezopakuje, jako má každý žák číslo v třídní knize.

<!-- hint -->

Ve 3. úkolu postupuj jako počítač: pro každou výpůjčku s „vráceno = ne“ najdi podle id žáka jeho třídu.

<!-- solution -->

**1.** (a) Dvě Emy nejde rozlišit: `COUNTIF` sečte výpůjčky obou a filtr „Ema“ ukáže knihy cizího člověka. (b) E-mail je opsaný v každé výpůjčce. Když ho přepíšeš jen někde, tabulka si protiřečí (tzv. **nekonzistence**).

**2.** **Žáci** (id žáka = klíč, jméno, třída, e-mail), **Knihy** (id knihy = klíč, název, autor), **Výpůjčky** (id výpůjčky = klíč, id žáka, id knihy, od, do, vráceno). Výpůjčka jen **odkazuje** na žáka a knihu jejich id. E-mail je v jediné buňce tabulky Žáci.

**3.** Nevrácené: (1, Harry Potter), (2, Malý princ), (3, Bratři Lví srdce), (4, Hobit). Žáci 1, 3 a 4 jsou ze 7.B, žák 2 ze 7.A. Odpověď: **3 knihy**. `COUNTIF` na „Ema“ by vrátil **4**, protože sečte 2 výpůjčky Emy Novákové a 2 Emy Dvořákové.

V databázovém jazyce SQL by dotaz vypadal takto:
`SELECT COUNT(*) FROM Vypujcky JOIN Zaci ON Vypujcky.id_zaka = Zaci.id WHERE Zaci.trida = '7.B' AND vraceno = 'ne'`
Slovo **JOIN** je přesně to spojení přes klíč, které v úloze děláš ručně. Takhle fungují skoro všechny databáze na světě: e-shop, školní systém i žebříček ve hře.

<!-- more -->

Zahraj si [SQL Murder Mystery](https://mystery.knightlab.com/): vraždu v SQL City vyřešíš jen dotazy, které spojují tabulky přes klíče (anglicky). Nebo v tabulkovém procesoru vyzkoušej funkci `XLOOKUP` nebo `SVYHLEDAT`: dělá totéž co JOIN pro jeden řádek.
