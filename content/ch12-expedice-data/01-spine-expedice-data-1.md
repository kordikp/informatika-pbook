---
id: expedice-data-1
type: spine
title: "Pět dní nestačí"
readingTime: 1
standalone: false
teaser: "Ema zapsala zpoždění autobusu v minutách a počasí: | den | zpoždění | počasí | |---|---|---| | 1 | 1 | sucho | | 2 | 0 | sucho | | 3 | 2 | déšť | | 4 | 2 | suc…"
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
concept: expedice-data-1
conceptTitle: "Pět dní nestačí"
state: edited
carriers: prose|table
---

**🧩 Výzva** · krok 1 z 5 · [Případ zpožděného autobusu](#expedice-data)

Ema zapsala zpoždění autobusu v minutách a počasí:

| den | zpoždění | počasí |
|---|---|---|
| 1 | 1 | sucho |
| 2 | 0 | sucho |
| 3 | 2 | déšť |
| 4 | 2 | sucho |
| 5 | 4 | déšť |
| 6 | 1 | sucho |
| 7 | 25 | déšť |
| 8 | 3 | sucho |
| 9 | 3 | déšť |
| 10 | 0 | sucho |

1. Spočítej pro suché a deštivé dny **průměr** i **medián** (prostřední hodnotu seřazených čísel).
2. Den 7 byla na silnici nehoda. Jak se změní průměr deště, když ten den vynecháš? A medián?
3. Napiš jednou větou, co z dat **můžeš** říct a co **ne**.

:::reveal 🔑 Řešení
Sucho (0, 0, 1, 1, 2, 3): průměr asi 1,2 min, medián 1. Déšť (2, 3, 4, 25): průměr 8,5 min, medián 3,5. Bez dne 7 je průměr deště 3 a medián 3. Jediná nehoda tedy zvedla průměr skoro třikrát, medián se skoro nehnul. **Medián je odolný vůči odlehlým hodnotám.** Rozdíl 1 vs. 3 minuty naznačuje, že v dešti je zpoždění větší, ale 4 deštivé dny jsou málo. A pozor na třetí věc: v dešti jezdí víc aut i víc lidí autobusem. Data říkají „v dešti bylo zpoždění větší“, ne „déšť způsobuje zpoždění“.
:::

**Navrhni tabulku pro skutečné měření:** sloupce datum, spoj, plánovaný čas, skutečný čas, zpoždění, počasí (jen hodnoty sucho, déšť, sníh). Pravidla: čas vždy ve formátu 7:42, jeden řádek = jedna jízda, žádný den dvakrát.

**Další krok:** [Dílna: CODAP za 30 minut](#expedice-data-2)
