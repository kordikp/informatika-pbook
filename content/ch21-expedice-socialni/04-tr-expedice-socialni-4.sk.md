---
id: expedice-socialni-4-sk
translationOf: expedice-socialni-4
lang: sk
type: spine
title: "Pod kapotou skutočného feedu"
readingTime: 1
standalone: false
teaser: "Podľa blogu, ktorý kód vtedy sprevádzal, má feed tri poschodia: 1."
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
concept: expedice-socialni-4
conceptTitle: "Pod kapotou skutočného feedu"
objective: "Podľa blogu, ktorý kód vtedy sprevádzal, má feed tri poschodia: 1."
state: edited
carriers: prose
---

**🔍 Rozbor** · krok 4 z 5 · [Overovací tím](#expedice-socialni-sk)

Podľa blogu, ktorý kód vtedy sprevádzal, má feed **tri poschodia**:

1. **Kandidáti.** Z obrovského množstva príspevkov vyberie asi 1 500 kandidátov. Zhruba polovica je od účtov, ktoré sleduješ, polovica od ostatných.
2. **Radenie.** Neurónová sieť pri každom kandidátovi odhadne, s akou pravdepodobnosťou dáš lajk, odpovieš, zdieľaš, ale aj nahlásiš alebo ťukneš „nezaujíma ma“. Každá pravdepodobnosť sa vynásobí váhou a všetko sa sčíta. Podľa zverejnených váh mala odpoveď zhruba 27-krát väčšiu váhu ako lajk a nahlásenie obrovskú zápornú váhu.
3. **Filtre.** Vyhodí zablokované a stlmené účty a stráži, aby nebolo desať príspevkov za sebou od jedného autora.

Potom otvor úplný opak: štartovaciu sadu **bluesky-social/feed-generator** na GitHube (čítať sa dá bez účtu). V priečinku *src/algos* je ukážkový feed *whats-alf*, ktorý vyberá príspevky o mimozemšťanovi ALF. Celý sa zmestí na obrazovku.

**Rozbor, odpovedz:**

- Prečo má **odpoveď** väčšiu váhu ako lajk? Čo sa stane s hádkami vo feede?
- Ktorý z vašich signálov z výzvy „Postav feed z čísel“ zodpovedá ktorému poschodiu?
- Čo zo zverejneného kódu **nespoznáš**? (Nápoveda: sieť sa učila z dát, ktoré zverejnené neboli.)
- V čom je feed ALF poctivejší a v čom horší?

**Kritérium:** pri každej otázke veta s dôvodom. Pozor, kód je z roku 2023 a dnešné X môže fungovať inak.

**Ďalší krok:** [Spravodlivý feed](#expedice-socialni-5-sk)
