---
id: expedice-ai-1
type: spine
title: "Model má 83 %. U koho?"
readingTime: 1
standalone: false
teaser: "Celková přesnost umí schovat, kde model selhává."
voice: universal
parent: null
diagram: null
core: false
lang: cs
lens: generic
visuality: text-first
depth: standard
formalism: none
lengthBand: standard
genre: explainer
status: accepted
concept: expedice-ai-1
conceptTitle: "Model má 83 %. U koho?"
state: edited
carriers: prose|table
---

**🧩 Výzva** · krok 1 z 5 · [Model od krmítka](#expedice-ai)

Celková přesnost umí schovat, kde model selhává. Proto se výsledky zapisují do **matice záměn**. Řádky říkají, kdo na fotce opravdu byl. Sloupce říkají, co tipnul model.

| skutečnost ↓ / model → | sýkora | vrabec | kos |
|---|---|---|---|
| sýkora (10 fotek) | 9 | 1 | 0 |
| vrabec (10 fotek) | 4 | 6 | 0 |
| kos (10 fotek) | 0 | 0 | 10 |

Úkoly:
1. Ověř, že celková přesnost je opravdu kolem 83 %. Čísla, která model trefil, leží na úhlopříčce.
2. Spočítej přesnost zvlášť pro každý druh.
3. Který pták dopadá nejhůř a s kým ho model plete?
4. Ema přizná, že fotky vrabců fotila jen v létě, z boku, a bylo jich 15 proti 60 fotkám sýkor. Navrhni **dvě** změny trénovacích dat, které chybu nejspíš zmenší. U každé napiš proč.

**Kritérium úspěchu:** máš všechny tři přesnosti, víš, odkud se chyba bere, a obě změny míří na konkrétní mezeru v datech, ne na „víc fotek obecně“.

Skutečné modely se takhle kontrolují pořád. U modelu, který rozhoduje o lidech, je rozdíl 90 % proti 60 % mezi dvěma skupinami velký problém, i když celek vypadá skvěle.

:::reveal 🔑 Řešení
25/30 ≈ 83 %. Sýkora 9/10 = 90 %, vrabec 6/10 = 60 %, kos 10/10 = 100 %. Vrabec se plete se sýkorou (4×). Dobrá oprava: víc fotek vrabců z různých stran a v zimě, stejný počet fotek pro každý druh a testovací fotky z jiného dne než trénovací.
:::

**Další krok:** [Dílna: první model za 30 minut](#expedice-ai-2)
