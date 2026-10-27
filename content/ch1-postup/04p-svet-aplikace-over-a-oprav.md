---
id: svet-aplikace-over-a-oprav
type: spine
title: "Semafor se schovanou chybou"
readingTime: 1
standalone: true
teaser: "Navrhneš appku, která řídí semafor pro chodce. Na papíře vypadá hotově. Pak ji projdeš prstem a zjistíš, že se na červenou už nikdy nevrátí."
voice: universal
parent: null
diagram: null
core: false
recallQ: "Proč nestačí vyzkoušet program na jednom příkladu, který funguje?"
recallA: "Chyba se často projeví jen u některých vstupů, třeba u nuly nebo prázdného seznamu. Testy mají pokrýt různé, i okrajové případy."
lang: cs
lens: aplikace
visuality: balanced
depth: intro
formalism: none
lengthBand: standard
genre: worked-example
status: accepted
concept: over-a-oprav
state: edited
highlights:
  - "Test = vstup + očekávaný výstup, připravený předem"
  - "Okrajové případy (0, prázdný vstup, maximum)"
  - "Ladění: místo → příčina → oprava → nové ověření; efektivita jako další měřítko"
carriers: prose|table|image
---

Navrhneš appku, která řídí semafor pro chodce. Na papíře vypadá hotově. Pak ji projdeš prstem a zjistíš, že se na červenou už nikdy nevrátí.

Semafor má tři stavy: *Červená*, *Zelená* a *Bliká*. Přechody mezi nimi spouštějí dva vstupy: chodec **stiskne tlačítko**, nebo **uplyne čas**. Návrh zapíšeš do tabulky:

| Stav | Vstup | Nový stav |
|---|---|---|
| Červená | stisk tlačítka | Červená, spustí se odpočet |
| Červená | uplynul čas | Zelená |
| Zelená | stisk tlačítka | Zelená, nic se nestane |
| Zelená | uplynul čas | Bliká |
| Bliká | uplynul čas | Zelená |

Než začneš stavět, připrav si **testy**: **vstup a očekávaný výstup**, sepsané **předem**. *Chodec stiskne tlačítko → do minuty se rozsvítí zelená a pak zase červená.* Teď **suchý běh**: projdi tabulku prstem. Červená → stisk → Zelená → Bliká → **Zelená?!** Semafor se točí mezi zelenou a blikáním a auta stojí navždy. Test neprošel.

![Stavy semaforu: chybná šipka a oprava](images/svet-aplikace-semafor.svg)

**Ladění** jde po stopě. **Místo:** poslední řádek tabulky. **Příčina:** z blikání vede šipka na špatný stav. **Oprava:** *Bliká + uplynul čas → Červená*. **Nové ověření:** projdi znovu všechny testy, i ty, které předtím prošly.

Pak zkoušej **okrajové případy**. Chodec zmáčkne tlačítko desetkrát za sebou: nespustí se deset odpočtů? Zmáčkne ho přesně ve chvíli přepnutí? Nebo ho nezmáčkne nikdy: zůstane semafor na červené? A nakonec **efektivita**: semafor, který dá zelenou až za tři minuty, funguje správně, jenže chodci mezitím přejdou na červenou.

**Zkus to!** Napiš tři testy pro tlačítko „Přidat do košíku“ v e-shopu: vstup a očekávaný výstup. Aspoň jeden ať je okrajový případ. Nápověda: co když zboží už není skladem?

**Dál ve světě aplikací:** → [Stejné tlačítko, tři reakce](#svet-aplikace-promenna)
