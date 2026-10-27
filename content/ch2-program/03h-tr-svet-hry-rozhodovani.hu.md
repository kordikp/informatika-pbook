---
id: svet-hry-rozhodovani-hu
translationOf: svet-hry-rozhodovani
lang: hu
type: spine
title: "Ha hozzáér az érméhez"
readingTime: 1
standalone: true
teaser: "A figura csak akkor ugrik, ha a földön áll. A levegőben a szóköz semmit sem csinál. Mögötte egyetlen kérdés van, amelyre a válasz igen vagy nem."
voice: universal
parent: null
diagram: null
core: false
recallQ: "Mi történik a „különben” ággal, ha a feltétel teljesül?"
recallA: "Nem fut le. A ha / különben ágak közül mindig pontosan egy fut le."
lens: hry
visuality: text-first
depth: intro
formalism: none
lengthBand: standard
genre: worked-example
status: accepted
concept: rozhodovani
state: edited
highlights:
  - "A feltétel értéke igaz vagy hamis"
  - "Ha–különben: pontosan egy ág fut le"
  - "Feltételek összekapcsolása (és, vagy, nem)"
carriers: prose|code
---

A figura csak akkor ugrik, ha a földön áll. A levegőben a szóköz semmit sem csinál. Mögötte egyetlen kérdés van, amelyre a válasz igen vagy nem.

A játék minden szabálya egy **feltétel**: egy kérdés, amelyre a válasz **igaz** vagy **hamis**. *Hozzáér a játékos az érméhez?* Igaz → adj hozzá egy pontot, és rejtsd el az érmét. Hamis → semmi.

```
ha ⟨érinti: [érme]⟩ akkor
  változtasd [pontszám]-ot 1-gyel
  tűnj el (érme)
```

A **ha–különben** két ágból áll, és **mindig pontosan az egyik** fut le: *ha a pontszám nagyobb a rekordnál → mentsd az új rekordot, különben → írd ki, hogy „Próbáld újra”.* A játékos sosem látja mindkettőt.

A játékok szeretik **összekapcsolni** a feltételeket:

- **és**: ugorj, ha a szóköz le van nyomva, **és** a figura a földön áll. Mindkét résznek igaznak kell lennie. A második nélkül a figura a levegőben is ugrálna, egészen az égig.
- **vagy**: veszíts egy életet, ha tüskéhez **vagy** lávához érsz. Elég az egyik.
- **nem**: az ajtó kinyílik, ha a játékosnak **nincs** kulcsa? Olvasd fel hangosan a szabályt, és rögtön hallod, hogy fordítva van.

Az ütközés is feltétel. A játék a ciklus minden körében megkérdezi: *átfedik egymást?*, és a válasz szerint választ ágat.

**Próbáld ki!** Írj szabályt egy ajtóhoz, amely csak akkor nyílik ki, ha a játékosnál van a kulcs, és közvetlenül mellette áll. Melyik kötőszót használod: és, vagy, nem?

**Tovább a játékok világában:** → [Pontszám, életek, szint](#svet-hry-promenna-hu)
