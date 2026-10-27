---
id: svet-roboti-rozhodovani-hu
translationOf: svet-roboti-rozhodovani
lang: hu
type: spine
title: "Ha sötét van, kapcsolj fel"
readingTime: 1
standalone: true
teaser: "A micro:bitből készült éjszakai lámpa felkapcsol, amikor besötétedik, és lekapcsol, amikor világos van. Mögötte egyetlen kérdés áll: sötét van?"
voice: universal
parent: null
diagram: null
core: false
recallQ: "Mi történik a „különben” ággal, ha a feltétel teljesül?"
recallA: "Nem fut le. A ha / különben ágak közül mindig pontosan egy fut le."
lens: roboti
visuality: balanced
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
carriers: prose|image|code
---

A micro:bitből készült éjszakai lámpa felkapcsol, amikor besötétedik, és lekapcsol, amikor világos van. Mögötte egyetlen kérdés áll: sötét van?

A **feltétel** egy kérdés, amelyre a válasz **igaz** vagy **hamis**. *Kisebb a fényszint 50-nél?* Az érzékelő 20-at jelez → igaz. 180-at jelez → hamis.

![Éjszakai lámpa: ha sötét van, kapcsolj fel, különben kapcsolj le](images/svet-roboti-lampicka.hu.svg)

```
mindig:
  ha fényszint < 50:
    minden LED kigyújtása
  különben:
    képernyő törlése
```

A **ha** és a **különben** ágak közül **mindig pontosan egy** fut le. A lámpa sosem világít és alszik ki egyszerre.

A feltételeket **össze lehet kapcsolni**:

- **és**: kapcsolj fel, ha sötét van, **és** valaki mozog. Mindkettőnek igaznak kell lennie, különben a lámpa kíméli az elemet.
- **vagy**: sípolj, ha túl meleg **vagy** túl hideg van.
- **nem**: mutass szívet, ha a gomb **nincs** lenyomva.

Sok program egy **eseményre** vár: *az A gomb lenyomásakor → mutass mosolygós arcot*, *rázáskor → dobj a kockával*. Az esemény kívülről jövő jelzés, a feltétel olyan kérdés, amelyet a program saját magának tesz fel. Egy okosotthon ilyen szabályok gyűjteménye: *ha kinyílik az ablak → kapcsold le a fűtést*.

**Próbáld ki!** Tervezz a szobádhoz három *ha… akkor…, különben…* szabályt. Mindegyiknél írd le, melyik érzékelő deríti ki a választ a kérdésre.

**Tovább a robotok világában:** → [Lépésszámláló micro:bitből](#svet-roboti-promenna-hu)
