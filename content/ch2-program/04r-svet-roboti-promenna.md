---
id: svet-roboti-promenna
type: spine
title: "Krokoměr z micro:bitu"
readingTime: 1
standalone: true
teaser: "Připevníš micro:bit na botu a on počítá kroky. Kde si to číslo drží mezi dvěma kroky?"
voice: universal
parent: null
diagram: null
core: false
recallQ: "Skóre je 5. Program provede „nastav skóre na 3“ a pak „změň skóre o 2“. Kolik je skóre?"
recallA: "5. Nastavení přepíše hodnotu na 3, změna o 2 ji zvýší na 5. Proměnná si pamatuje jen poslední hodnotu."
lang: cs
lens: roboti
visuality: balanced
depth: intro
formalism: none
lengthBand: standard
genre: worked-example
status: accepted
concept: promenna
state: edited
highlights:
  - "Název a aktuální hodnota (právě jedna)"
  - "Nastav vs. změň o; přiřazení přepíše starou hodnotu"
  - "Proměnná jako stav programu (skóre, životy, režim)"
carriers: prose|image|code
---

Připevníš micro:bit na botu a on počítá kroky. Kde si to číslo drží mezi dvěma kroky?

V **proměnné**. Má **název** (*kroky*) a v jednu chvíli **právě jednu hodnotu**: teď 248, po dalším kroku 249.

```
při spuštění:
  nastav [kroky] na 0
při zatřesení:
  změň [kroky] o 1
  zobraz číslo [kroky]
při stisknutí tlačítka B:
  nastav [kroky] na 0
```

![Krokoměr ukazuje hodnotu proměnné kroky](images/svet-roboti-krokomer.svg)

Dva bloky, dvě různé věci:

- **nastav na** přepíše hodnotu. *Nastav kroky na 0* vymaže, co tam bylo: při spuštění a při resetu tlačítkem B.
- **změň o** přičte k tomu, co tam je. Každé zatřesení: +1.

Kdybys omylem dal do zatřesení *nastav kroky na 1*, krokoměr by ukazoval pořád 1. Každý krok by přepsal ten předchozí.

Proměnná drží i **stav** zařízení. Proměnná *režim* může být *počítám*, nebo *pauza*. Tlačítko A ji přepíná a zatřesení přičítá jen v režimu *počítám*. Stejné zatřesení, jiné chování, podle toho, co je v proměnné.

**Zkus to!** Postav krokoměr v simulátoru MakeCode. Pak přidej tlačítko A, které ukáže, kolik kroků zbývá do tisíce. Potřebuješ na to novou proměnnou?

**Dál ve světě robotů:** → [Srdce z 25 čísel](#svet-roboti-kodovani)
