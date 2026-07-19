---
id: ch3-cykly-v-kodu
type: spine
title: "Cykly v kódu: for a while"
readingTime: 2
standalone: true
teaser: "Napsat stokrát „posuň se o krok“? Ne. Napíšeš to jednou a řekneš: stokrát."
voice: universal
parent: null
diagram: null
core: true
recallQ: "Jaký je rozdíl mezi cyklem for a cyklem while?"
recallA: "For opakuje daný počet opakování (předem víš kolikrát), while opakuje, dokud platí podmínka — počet opakování předem znát nemusíš."
highlights:
  - "Cyklus nechá počítač opakovat kroky, místo abys je psal pořád dokola."
  - "For opakuje daný počet opakování."
  - "While opakuje, dokud něco platí."
lang: cs
lens: generic
visuality: text-first
depth: intro
formalism: none
lengthBand: standard
genre: explainer
status: accepted
concept: ch3-cykly-v-kodu
state: core
carriers: prose|code
---

Úkol: vypiš čísla od 1 do 100. Můžeš napsat sto řádků `print(1)`, `print(2)`… a u čísla 37 začít nenávidět svět. Nebo napíšeš dva řádky:

```python
for cislo in range(1, 101):
    print(cislo)
```

**Cyklus nechá počítač opakovat kroky, místo abys je psal pořád dokola.** Pamatuješ na vzory? Tohle je jejich výplata: opakující se krok zapíšeš jednou a určíš, jak dlouho se má opakovat. Na to existují dva základní cykly:

**For opakuje daný počet opakování.** Předem víš kolikrát: projdi 30 žáků v seznamu, udělej 10 dřepů, polož 8 řad dlaždic. „Pro každé číslo od 1 do 100 udělej tohle."

**While opakuje, dokud něco platí.** Předem nevíš kolikrát — víš jen, kdy přestat: *dokud hráč žije, pokračuj ve hře; dokud není heslo správně, ptej se znovu; dokud je voda studená, ohřívej.*

```python
while zivoty > 0:
    hraj_kolo()
print("Konec hry")
```

Pravidlo pro výběr je jednoduché: **víš kolikrát → for; víš jen dokdy → while.**

Jedno varování k while: když podmínka nikdy nepřestane platit, program se zacyklí a opakuje navěky — okno „zamrzne". I to je zkušenost, kterou udělal každý programátor; spraví ji krok, který podmínku někdy zneplatní (třeba odečítání životů).

A teď to spoj s minulou sekcí: **cyklus + podmínka = srdce každé hry.** *Dokud hráč žije: přečti vstup, když se dotkl překážky — odečti život, překresli obrazovku.* Téhle konstrukci se říká herní smyčka a v kapitole o herním vývoji ji rozebereme do detailu.

**Zkus to!** Najdi tři cykly ve svém dnu a urči jejich typ: čištění zubů („2 minuty" — for, nebo „dokud nejsou čisté" — while?), kolečka na tréninku, scrollování feedu (jaká je tam podmínka konce — a má vůbec nějakou?).

> **Věděl/a jsi?** Nekonečný cyklus není vždycky chyba. Tvůj telefon v jednom běží schválně: dokola kontroluje dotyky, notifikace a překresluje displej — od zapnutí do vypnutí.

Rozhodování umíš, opakování umíš. Teď se naučíš kód balit do pojmenovaných celků, které použiješ znovu a znovu: funkce.
