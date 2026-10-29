---
id: opakovani
type: spine
title: "Opakování (cyklus)"
readingTime: 1
standalone: true
teaser: "Feed na sociální síti nikdy neskončí. Další video, další, další… Jak se takové „pořád dokola“ zapíše do programu?"
voice: universal
parent: null
diagram: anim-rizeni-toku
core: true
recallQ: "Kdy použiješ „opakuj 10×“ a kdy „opakuj, dokud…“?"
recallA: "Pevný počet, když předem víš kolikrát. „Dokud“, když to záleží na tom, co se stane, třeba dokud robot nenarazí na zeď."
lang: cs
lens: generic
visuality: balanced
depth: intro
formalism: none
lengthBand: standard
genre: worked-example
status: accepted
concept: opakovani
conceptTitle: "Opakování (cyklus)"
state: core
highlights:
  - "Tělo cyklu a počet opakování"
  - "Opakuj n× vs. opakuj, dokud (podmínka ukončení)"
  - "Konečnost: cyklus musí skončit, jinak se program zacyklí"
carriers: prose|animation
---

Feed na sociální síti nikdy neskončí. Další video, další, další… Jak se takové „pořád dokola“ zapíše do programu?

Když se něco děje znovu a znovu, nezapisuješ to stokrát. Zapíšeš to **jednou** a řekneš, **kolikrát** se to má opakovat, nebo **dokud** něco platí. Tomu se říká **cyklus**. Příkazům, které se v něm opakují, se říká **tělo cyklu**.

Robot má objet sloup a vrátit se na start. Dlouhý program má 8 bloků: *jdi 3, otoč se vpravo*, a to celé čtyřikrát. Stejná dvojice se opakuje, takže stačí **opakuj 4×: jdi 3, otoč se vpravo**. Tři bloky místo osmi. A když má robot dojet ke zdi v chodbě, jejíž délku nezná? *Opakuj 5×: jdi 1* v krátké chodbě narazí a v dlouhé zastaví moc brzy. Funguje **opakuj, dokud není před zdí: jdi 1**.

⟦obr: images/proklik-opakovani.svg⟧

Cyklus s **pevným počtem** použiješ, když **předem víš, kolikrát**: čtyři strany čtverce. Cyklus **s podmínkou**, když to záleží na tom, co se stane: jeď, dokud nejsi u zdi.

Pozor na dvě věci. Podmínka se kontroluje **na začátku každého kola**, ne uprostřed těla. A cyklus musí jednou **skončit**. Když podmínka nikdy nepřestane platit, program se **zacyklí**. Někdy je to chyba, jindy záměr: herní smyčka nebo nekonečný feed běží schválně pořád.

**Zkus to!** Najdi tři opakování ve svém dni a u každého urči, jestli je to „opakuj 10×“, nebo „opakuj, dokud…“. Čištění zubů (dvě minuty, nebo dokud nejsou čisté?), kolečka na tréninku, scrollování feedu. Jaká je u feedu podmínka konce? A má vůbec nějakou?

> **Pozor, častý omyl:** „Cyklus hlídá podmínku pořád, i uprostřed kola.“ Kontroluje ji jen na začátku každého kola. Když se podmínka splní uprostřed, kolo ještě doběhne do konce.

**Dál:** Nekonečný feed je smyčka, která schválně nemá konec. Proč to tak sítě dělají, uvidíš v kapitole 5. → [Doporučovač a tvůj feed](#c/doporucovac)
