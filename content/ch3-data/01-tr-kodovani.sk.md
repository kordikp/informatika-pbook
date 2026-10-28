---
id: kodovani-sk
translationOf: kodovani
lang: sk
type: spine
title: "Všetko sú čísla"
readingTime: 2
standalone: true
teaser: "Mobil hlási „Úložisko je plné“. Hodina 4K videa zaberie viac miesta ako tisíc fotiek. Prečo je video také veľké?"
voice: universal
parent: null
diagram: null
core: true
recallQ: "Prečo má fotka s väčším rozlíšením väčší súbor?"
recallA: "Skladá sa z viacerých pixelov a každý pixel je zakódovaný číslami. Viac pixelov znamená viac čísel, teda viac bajtov."
lens: generic
visuality: text-first
depth: intro
formalism: none
lengthBand: standard
genre: worked-example
status: accepted
concept: kodovani
conceptTitle: "Všetko sú čísla"
objective: "Mobil hlási „Úložisko je plné“. Hodina 4K videa zaberie viac miesta ako tisíc fotiek. Prečo je video také veľké?"
mustCover:
  - "Kódovanie = dohodnuté pravidlá prevodu (pixel → číslo, písmeno → číslo)"
  - "Veľkosť dát: bit, bajt, MB, GB; rozlíšenie a kvalita zväčšujú súbor"
  - "Typ súboru (prípona) hovorí, ako čísla čítať; kompresia šetrí miesto"
state: core
highlights:
  - "Kódovanie = dohodnuté pravidlá prevodu (pixel → číslo, písmeno → číslo)"
  - "Veľkosť dát: bit, bajt, MB, GB; rozlíšenie a kvalita zväčšujú súbor"
  - "Typ súboru (prípona) hovorí, ako čísla čítať; kompresia šetrí miesto"
carriers: prose|code
---

Mobil hlási „Úložisko je plné“. Hodina 4K videa zaberie viac miesta ako tisíc fotiek. Prečo je video také veľké?

Počítač vie uložiť a poslať **len čísla**, nakoniec nuly a jednotky. Aby čísla znamenali obrázok, text alebo zvuk, potrebuješ **kódovanie**: dohodnuté pravidlo, ako čo previesť na čísla.

Srdiečko 8 × 8 pixelov je pre počítač tabuľka núl a jednotiek. Každý riadok je jeden riadok pixelov:

```
0 1 1 0 0 1 1 0
1 1 1 1 1 1 1 1
1 1 1 1 1 1 1 1
1 1 1 1 1 1 1 1
0 1 1 1 1 1 1 0
0 0 1 1 1 1 0 0
0 0 0 1 1 0 0 0
0 0 0 0 0 0 0 0
```

Dvojnásobné rozlíšenie je 16 × 16 = 256 pixelov namiesto 64. Dvakrát viac na šírku aj na výšku dáva štyrikrát viac čísel, a teda štyrikrát väčší súbor. Preto je 4K video také veľké.

Farebný pixel potrebuje viac čísel, zvyčajne tri: koľko je v ňom červenej, zelenej a modrej. Aj písmeno má číslo: **A** je 65. Veľkosť dát sa meria v **bitoch** a **bajtoch** (1 bajt = 8 bitov), väčšie dáta v **kB, MB a GB**.

**Prípona súboru** (.png, .mp3, .txt) hovorí programu, podľa akého pravidla má čísla čítať. **Kompresia** šetrí miesto: namiesto „00000000“ zapíše „8×0“. JPG a MP3 navyše zahodia detaily, ktoré skoro nevidíš a nepočuješ.

Kódovanie nie je šifrovanie. Pravidlo kódovania je **verejné**, aby dáta prečítal každý program.

**Vyskúšaj to!** Odfoť niečo mobilom a pozri sa do podrobností fotky: koľko má pixelov na šírku a na výšku? Potom ju zmenši na polovicu šírky aj výšky. Koľkokrát menej pixelov má teraz? A zmenšil sa súbor rovnako?

> **Pozor, častý omyl:** „V počítači je obrázok uložený ako obrázok.“ Vnútri sú len čísla: pre každý pixel pár čísel, ktoré hovoria jeho farbu. A kódovanie nie je šifrovanie. Kód je dohoda, ktorú pozná každý, šifra je tajomstvo.

**Ďalej:** Kódovanie je verejné pravidlo. Šifrovanie pridá tajný kľúč, bez ktorého správu neprečítaš. Uvidíš v kapitole 4. → [Šifrovanie: obálka namiesto pohľadnice](#c/sifrovani)
