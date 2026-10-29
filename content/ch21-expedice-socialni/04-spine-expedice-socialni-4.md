---
id: expedice-socialni-4
type: spine
title: "Pod kapotou opravdového feedu"
readingTime: 1
standalone: false
teaser: "Podle blogu, který kód tehdy doprovázel, má feed tři patra: 1."
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
concept: expedice-socialni-4
conceptTitle: "Pod kapotou opravdového feedu"
state: edited
carriers: prose
---

**🔍 Rozbor** · krok 4 z 5 · [Ověřovací tým](#expedice-socialni)

Podle blogu, který kód tehdy doprovázel, má feed **tři patra**:

1. **Kandidáti.** Z obřího množství příspěvků vybere asi 1 500 kandidátů. Zhruba polovina je od účtů, které sleduješ, polovina od ostatních.
2. **Řazení.** Neuronová síť u každého kandidáta odhadne, s jakou pravděpodobností dáš lajk, odpovíš, sdílíš, ale i nahlásíš nebo klepneš „nezajímá mě“. Každá pravděpodobnost se vynásobí vahou a vše se sečte. Podle zveřejněných vah měla odpověď zhruba 27krát větší váhu než lajk a nahlášení obrovskou zápornou váhu.
3. **Filtry.** Vyhodí zablokované a ztlumené účty a hlídá, aby nebylo deset příspěvků za sebou od jednoho autora.

Pak otevři úplný opak: startovací sadu **bluesky-social/feed-generator** na GitHubu (číst se dá bez účtu). Ve složce *src/algos* je ukázkový feed *whats-alf*, který vybírá příspěvky o mimozemšťanovi ALF. Celý se vejde na obrazovku.

**Rozbor, odpověz:**

- Proč má **odpověď** větší váhu než lajk? Co se stane s hádkami ve feedu?
- Který z vašich signálů z výzvy „Postav feed z čísel“ odpovídá kterému patru?
- Co ze zveřejněného kódu **nepoznáš**? (Nápověda: síť se učila z dat, která zveřejněná nebyla.)
- V čem je feed ALF poctivější a v čem horší?

**Kritérium:** u každé otázky věta s důvodem. Pozor, kód je z roku 2023 a dnešní X může fungovat jinak.

**Další krok:** [Spravedlivý feed](#expedice-socialni-5)
