---
id: svet-roboti-rozhodovani
type: spine
title: "Když je tma, rozsviť"
readingTime: 1
standalone: true
teaser: "Noční lampička z micro:bitu se rozsvítí, když se setmí, a zhasne, když je světlo. Za tím je jediná otázka: je tma?"
voice: universal
parent: null
diagram: null
core: false
recallQ: "Co se stane s větví „jinak“, když podmínka platí?"
recallA: "Nevykoná se. Z větví když / jinak proběhne vždy právě jedna."
lang: cs
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
  - "Podmínka má hodnotu pravda, nebo nepravda"
  - "Když–jinak: provede se právě jedna větev"
  - "Skládání podmínek (a, nebo, ne)"
carriers: prose|image|code
---

Noční lampička z micro:bitu se rozsvítí, když se setmí, a zhasne, když je světlo. Za tím je jediná otázka: je tma?

**Podmínka** je otázka s odpovědí **pravda**, nebo **nepravda**. *Je úroveň světla menší než 50?* Senzor hlásí 20 → pravda. Hlásí 180 → nepravda.

![Noční lampička: když je tma, rozsviť, jinak zhasni](images/svet-roboti-lampicka.svg)

```
pořád:
  když úroveň světla < 50:
    rozsviť všechny LED
  jinak:
    vymaž displej
```

Z větví **když** a **jinak** proběhne **vždy právě jedna**. Lampička nikdy nesvítí a nezhasíná zároveň.

Podmínky jdou **skládat**:

- **a**: rozsviť, když je tma **a** někdo se hýbe. Platit musí obě, jinak lampička šetří baterii.
- **nebo**: pípni, když je moc horko **nebo** moc zima.
- **ne**: ukaž srdce, když **ne**ní stisknuté tlačítko.

Mnoho programů čeká na **událost**: *při stisknutí tlačítka A → ukaž smajlíka*, *při zatřesení → hoď kostkou*. Událost je podnět zvenku, podmínka je otázka, kterou si program položí. Chytrá domácnost je sbírka takových pravidel: *když se otevře okno → vypni topení*.

**Zkus to!** Navrhni pro svůj pokoj tři pravidla *když… tak…, jinak…*. U každého napiš, který senzor zjistí odpověď na otázku.

**Dál ve světě robotů:** → [Krokoměr z micro:bitu](#svet-roboti-promenna)
