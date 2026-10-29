---
id: expedice-tvorba-1-sk
translationOf: expedice-tvorba-1
lang: sk
type: spine
title: "Hviezda, ktorá sa uzavrie"
readingTime: 2
standalone: false
teaser: "V knihe kreslí korytnačka hviezdu príkazom opakuj n [dopredu 100 vpravo uhol]."
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
concept: expedice-tvorba-1
conceptTitle: "Hviezda, ktorá sa uzavrie"
objective: "V knihe kreslí korytnačka hviezdu príkazom opakuj n [dopredu 100 vpravo uhol]."
state: edited
carriers: prose
---

**🧩 Výzva** · krok 1 z 5 · [Znelka pre filmový večer](#expedice-tvorba-sk)

V knihe kreslí korytnačka hviezdu príkazom `opakuj n [dopredu 100 vpravo uhol]`. Hviezda s **n** cípmi, pri ktorej korytnačka obkrúži stred **k**-krát, má uhol **360 · k : n**. Päťcípa hviezda: n = 5, k = 2, uhol 144°. Keď je k = 1, vznikne obyčajný mnohouholník.

**Úlohy:**
1. Pre n = 7 vyskúšaj všetky k od 1 do 6. Koľko **rôznych** tvarov dostaneš? Prečo nie šesť?
2. Pre n = 6 a k = 2 sa stane niečo divné. Čo presne korytnačka nakreslí a prečo?
3. Nájdi pravidlo: kedy nakreslí korytnačka jedným ťahom všetkých n cípov a kedy sa vráti na štart skôr?
4. Navrhni logo s 12 cípmi jedným ťahom, čo najostrejšie. Napíš program.

**Kritérium úspechu:** správny počet tvarov pre n = 7 so zdôvodnením, vysvetlenie prípadu n = 6, všeobecné pravidlo, ktoré platí pre akékoľvek n a k, a funkčný program pre 12 cípov.

:::reveal 💡 Nápoveda pre bod 3
Skús si prípady, ktoré sa pokazia, zapísať do tabuľky (n, k, koľko cípov naozaj vzniklo). Čo majú čísla v tých riadkoch spoločné? Pomôže ti aj hra „Korytnačka maľuje: hviezdy, kvety a rozety“.
:::

:::reveal 🔑 Riešenie
1. Pre n = 7 dajú k = 1 až 6 len **tri** rôzne tvary: sedemuholník (k = 1 alebo 6), plochú hviezdu (k = 2 alebo 5) a ostrú hviezdu (k = 3 alebo 4). Dvojica k a n − k je ten istý tvar, len sa kreslí opačným smerom.
2. Pre n = 6, k = 2 je uhol 120°: korytnačka nakreslí trojuholník, vráti sa po troch krokoch a obtiahne ho druhýkrát. Šesť cípov nevznikne.
3. Všetkých n cípov jedným ťahom vznikne práve vtedy, keď **n a k nemajú spoločného deliteľa okrem 1**.
4. Pre 12 cípov to spĺňa k = 5 (uhol 150°), ostrú hviezdu nakreslí `opakuj 12 [dopredu 100 vpravo 150]`. Logo večera máte hotové.
:::

**Ďalší krok:** [Pozadie z kódu za 30 minút](#expedice-tvorba-2-sk)
