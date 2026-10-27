---
id: svet-aplikace-over-a-oprav-sk
translationOf: svet-aplikace-over-a-oprav
lang: sk
type: spine
title: "Semafor so skrytou chybou"
readingTime: 1
standalone: true
teaser: "Navrhneš apku, ktorá riadi semafor pre chodcov. Na papieri vyzerá hotovo. Potom ju prejdeš prstom a zistíš, že sa na červenú už nikdy nevráti."
voice: universal
parent: null
diagram: null
core: false
recallQ: "Prečo nestačí vyskúšať program na jednom príklade, ktorý funguje?"
recallA: "Chyba sa často prejaví len pri niektorých vstupoch, napríklad pri nule alebo prázdnom zozname. Testy majú pokryť rôzne, aj okrajové prípady."
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
  - "Test = vstup + očakávaný výstup, pripravený vopred"
  - "Okrajové prípady (0, prázdny vstup, maximum)"
  - "Ladenie: miesto → príčina → oprava → nové overenie; efektivita ako ďalšie meradlo"
carriers: prose|table|image
---

Navrhneš apku, ktorá riadi semafor pre chodcov. Na papieri vyzerá hotovo. Potom ju prejdeš prstom a zistíš, že sa na červenú už nikdy nevráti.

Semafor má tri stavy: *Červená*, *Zelená* a *Bliká*. Prechody medzi nimi spúšťajú dva vstupy: chodec **stlačí tlačidlo**, alebo **uplynie čas**. Návrh zapíšeš do tabuľky:

| Stav | Vstup | Nový stav |
|---|---|---|
| Červená | stlačenie tlačidla | Červená, spustí sa odpočet |
| Červená | uplynul čas | Zelená |
| Zelená | stlačenie tlačidla | Zelená, nič sa nestane |
| Zelená | uplynul čas | Bliká |
| Bliká | uplynul čas | Zelená |

Skôr než začneš stavať, priprav si **testy**: **vstup a očakávaný výstup**, spísané **vopred**. *Chodec stlačí tlačidlo → do minúty sa rozsvieti zelená a potom zase červená.* Teraz **suchý beh**: prejdi tabuľku prstom. Červená → stlačenie → Zelená → Bliká → **Zelená?!** Semafor sa točí medzi zelenou a blikaním a autá stoja navždy. Test neprešiel.

![Stavy semafora: chybná šípka a oprava](images/svet-aplikace-semafor.sk.svg)

**Ladenie** ide po stope. **Miesto:** posledný riadok tabuľky. **Príčina:** z blikania vedie šípka na nesprávny stav. **Oprava:** *Bliká + uplynul čas → Červená*. **Nové overenie:** prejdi znova všetky testy, aj tie, ktoré predtým prešli.

Potom skúšaj **okrajové prípady**. Chodec stlačí tlačidlo desaťkrát za sebou: nespustí sa desať odpočtov? Stlačí ho presne vo chvíli prepnutia? Alebo ho nestlačí nikdy: zostane semafor na červenej? A nakoniec **efektivita**: semafor, ktorý dá zelenú až o tri minúty, funguje správne, lenže chodci medzitým prejdú na červenú.

**Vyskúšaj to!** Napíš tri testy pre tlačidlo „Pridať do košíka“ v e-shope: vstup a očakávaný výstup. Aspoň jeden nech je okrajový prípad. Nápoveda: čo ak tovar už nie je na sklade?

**Ďalej vo svete aplikácií:** → [Rovnaké tlačidlo, tri reakcie](#svet-aplikace-promenna-sk)
