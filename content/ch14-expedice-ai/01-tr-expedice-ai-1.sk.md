---
id: expedice-ai-1-sk
translationOf: expedice-ai-1
lang: sk
type: spine
title: "Model má 83 %. Pri kom?"
readingTime: 1
standalone: false
teaser: "Celková presnosť vie skryť, kde model zlyháva."
voice: universal
parent: null
diagram: null
core: false
lens: generic
visuality: text-first
depth: standard
formalism: none
lengthBand: standard
genre: explainer
status: accepted
concept: expedice-ai-1
conceptTitle: "Model má 83 %. Pri kom?"
objective: "Celková presnosť vie skryť, kde model zlyháva."
state: edited
carriers: prose|table
---

**🧩 Výzva** · krok 1 z 5 · [Model od kŕmidla](#expedice-ai-sk)

Celková presnosť vie skryť, kde model zlyháva. Preto sa výsledky zapisujú do **matice zámen**. Riadky hovoria, kto bol naozaj na fotke. Stĺpce hovoria, čo tipol model.

| skutočnosť ↓ / model → | sýkorka | vrabec | drozd |
|---|---|---|---|
| sýkorka (10 fotiek) | 9 | 1 | 0 |
| vrabec (10 fotiek) | 4 | 6 | 0 |
| drozd (10 fotiek) | 0 | 0 | 10 |

Úlohy:
1. Over, že celková presnosť je naozaj okolo 83 %. Čísla, ktoré model trafil, ležia na uhlopriečke.
2. Vypočítaj presnosť zvlášť pre každý druh.
3. Ktorý vták dopadá najhoršie a s kým ho model zamieňa?
4. Ema prizná, že vrabce fotila len v lete, z boku, a fotiek bolo 15 oproti 60 fotkám sýkoriek. Navrhni **dve** zmeny trénovacích dát, ktoré chybu najskôr zmenšia. Pri každej napíš prečo.

**Kritérium úspechu:** máš všetky tri presnosti, vieš, odkiaľ sa chyba berie, a obe zmeny mieria na konkrétnu medzeru v dátach, nie na „viac fotiek všeobecne“.

Skutočné modely sa takto kontrolujú stále. Pri modeli, ktorý rozhoduje o ľuďoch, je rozdiel 90 % oproti 60 % medzi dvoma skupinami veľký problém, aj keď celok vyzerá skvele.

:::reveal 🔑 Riešenie
25/30 ≈ 83 %. Sýkorka 9/10 = 90 %, vrabec 6/10 = 60 %, drozd 10/10 = 100 %. Vrabec sa zamieňa so sýkorkou (4×). Dobrá oprava: viac fotiek vrabcov z rôznych strán a v zime, rovnaký počet fotiek pre každý druh a testovacie fotky z iného dňa ako trénovacie.
:::

**Ďalší krok:** [Dielňa: prvý model za 30 minút](#expedice-ai-2-sk)
