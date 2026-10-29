---
id: kodovani
type: spine
title: "Všechno jsou čísla"
readingTime: 2
standalone: true
teaser: "Mobil hlásí „Úložiště je plné“. Hodina 4K videa zabere víc místa než tisíc fotek. Proč je video tak velké?"
voice: universal
parent: null
diagram: null
core: true
recallQ: "Proč má fotka s větším rozlišením větší soubor?"
recallA: "Skládá se z více pixelů a každý pixel je zakódovaný čísly. Víc pixelů znamená víc čísel, tedy víc bytů."
lang: cs
lens: generic
visuality: balanced
depth: intro
formalism: none
lengthBand: standard
genre: worked-example
status: accepted
concept: kodovani
conceptTitle: "Všechno jsou čísla"
state: core
highlights:
  - "Kódování = domluvená pravidla převodu (pixel → číslo, písmeno → číslo)"
  - "Velikost dat: bit, byte, MB, GB; rozlišení a kvalita zvětšují soubor"
  - "Typ souboru (přípona) říká, jak čísla číst; komprese šetří místo"
carriers: prose|formula
---

Mobil hlásí „Úložiště je plné“. Hodina 4K videa zabere víc místa než tisíc fotek. Proč je video tak velké?

Počítač umí uložit a poslat **jen čísla**, nakonec nuly a jedničky. Aby čísla znamenala obrázek, text nebo zvuk, potřebuješ **kódování**: domluvené pravidlo, jak co převést na čísla.

Srdíčko 8 × 8 pixelů je pro počítač tabulka nul a jedniček. Každý řádek pixelů je jeden řádek čísel:

⟦obr: images/proklik-kodovani.svg⟧

Dvojnásobné rozlišení je 16 × 16 = 256 pixelů místo 64. Dvakrát víc na šířku i na výšku dává čtyřikrát víc čísel, a tedy čtyřikrát větší soubor. Proto je 4K video tak velké.

Barevný pixel potřebuje víc čísel, obvykle tři: kolik je v něm červené, zelené a modré. I písmeno má číslo: **A** je 65. Velikost dat se měří v **bitech** a **bytech** (1 byte = 8 bitů), větší data v **kB, MB a GB**.

Každé ze tří čísel barvy zabere jeden byte. Velikost fotky bez komprese tedy spočítáš snadno:

$$\text{velikost} = \text{šířka} \times \text{výška} \times 3\ \text{B}$$

Fotka z mobilu má 4000 × 3000 pixelů: 4000 × 3000 × 3 B = 36 000 000 B, tedy asi **36 MB**. Komprese JPG ji zmenší zhruba na desetinu.

**Přípona souboru** (.png, .mp3, .txt) říká programu, podle jakého pravidla má čísla číst. **Komprese** šetří místo: místo „00000000“ zapíše „8×0“. JPG a MP3 navíc zahodí detaily, které skoro nevidíš a neslyšíš.

Kódování není šifrování. Pravidlo kódování je **veřejné**, aby data přečetl každý program.

**Zkus to!** Vyfoť něco mobilem a podívej se do podrobností fotky: kolik má pixelů na šířku a na výšku? Pak ji zmenši na polovinu šířky i výšky. Kolikrát méně pixelů má teď? A zmenšil se soubor stejně?

> **Pozor, častý omyl:** „V počítači je obrázek uložený jako obrázek.“ Uvnitř jsou jen čísla: pro každý pixel pár čísel, která říkají jeho barvu. A kódování není šifrování. Kód je domluva, kterou zná každý, šifra je tajemství.

**Dál:** Kódování je veřejné pravidlo. Šifrování přidá tajný klíč, bez kterého zprávu nepřečteš. Uvidíš v kapitole 4. → [Šifrování: obálka místo pohlednice](#c/sifrovani)
