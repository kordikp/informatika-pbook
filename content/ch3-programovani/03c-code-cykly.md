---
id: ch3-code-cykly
type: spine
title: "Dva cykly v akci: násobilka a hádání hesla"
readingTime: 2
standalone: true
teaser: "Tři řádky kódu vysypou celou násobilku sedmi. Další čtyři se ptají na heslo tak dlouho, dokud se netrefíš."
voice: universal
parent: null
diagram: null
core: false
recallQ: "Kdy v kódu sáhneš po cyklu for a kdy po while?"
recallA: "Po for, když předem víš počet opakování (třeba desetkrát pro násobilku). Po while, když znáš jen podmínku konce — opakuje se, dokud platí (třeba dokud heslo není správně)."
lang: cs
lens: generic
visuality: text-first
depth: intro
formalism: none
lengthBand: standard
genre: code-walkthrough
concept: ch3-cykly-v-kodu
state: edited
status: accepted
carriers: prose|code
---

Dva mini programy, dvě různé situace. U násobilky předem víš, kolik řádků padne — přesně deset. U hádání hesla nikdo neví, na kolikátý pokus se člověk trefí. Přesně podle toho se liší i cykly, které použiješ.

**Program 1: násobilka sedmi**

```python
for i in range(1, 11):
    vysledek = i * 7
    print(i, "krát 7 je", vysledek)
```

**Řádek 1:** `for i in range(1, 11):` znamená „proměnná `i` postupně projde čísla 1 až 10 a pro každé z nich se provede tělo cyklu" — odsazené řádky pod dvojtečkou. Drobná záludnost: `range` končí těsně **před** druhým číslem, proto tam stojí 11. **Řádek 2:** spočítá `i * 7` a jedním `=` výsledek uloží do proměnné. **Řádek 3:** vypíše celou větu, třeba „3 krát 7 je 21". Tři řádky kódu, deset řádků výstupu — a kdybys chtěl násobilku až do sta, přepíšeš jediné číslo.

**Program 2: hádej heslo, dokud…**

```python
spravne = "sezam"
heslo = ""
pokusy = 0
while heslo != spravne:
    heslo = input("Zadej heslo: ")
    pokusy = pokusy + 1
print("Jsi uvnitř! Pokusů:", pokusy)
```

**Řádky 1–3:** příprava paměti — správné heslo, zatím prázdný tip hráče a počítadlo pokusů na nule. **Řádek 4:** `while heslo != spravne:` čti „dokud se tip nerovná správnému heslu, opakuj tělo". Podmínku program kontroluje před každým kolem: platí → jede se další kolo, neplatí → cyklus končí. **Řádek 5:** `input` počká, co napíšeš, a uloží to do `heslo`. Tenhle řádek je zároveň pojistka proti zacyklení — mění proměnnou z podmínky, takže cyklus má šanci jednou skončit. Kdyby uvnitř heslo nic neměnilo, program by se ptal navěky a okno by „zamrzlo". **Řádek 6:** přičte pokus. **Řádek 7:** není odsazený, do těla cyklu nepatří — provede se až po jeho konci, tedy přesně ve chvíli, kdy jsi heslo uhodl.

A teď oba programy vedle sebe: for znal počet kol dopředu (deset), while znal jen podmínku konce (správné heslo) — trefit se můžeš napoprvé i na dvacátý pokus. **Pravidlo, které z toho plyne: víš kolikrát → for; víš jen dokdy → while.**
