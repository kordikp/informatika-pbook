---
id: expedice-stroje-a-site-1-sk
translationOf: expedice-stroje-a-site-1
lang: sk
type: spine
title: "Koľko adries sa zmestí do chaty"
readingTime: 1
standalone: false
teaser: "Adresa IPv4 sú štyri čísla od 0 do 255, napríklad 192.168.1.10."
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
concept: expedice-stroje-a-site-1
conceptTitle: "Koľko adries sa zmestí do chaty"
objective: "Adresa IPv4 sú štyri čísla od 0 do 255, napríklad 192.168.1.10."
state: edited
carriers: prose
---

**🧩 Výzva** · krok 1 z 5 · [Internet na chate](#expedice-stroje-a-site-sk)

Adresa IPv4 sú štyri čísla od 0 do 255, napríklad 192.168.1.10. Časť adresy určuje **sieť** (ulicu), zvyšok **zariadenie** (číslo domu). Koľko čísel patrí ulici, hovorí **maska**. Zápis /24 znamená, že ulicu tvoria prvé tri čísla. Adresy 192.168.1.10 a 192.168.1.77 sú teda susedia v tej istej sieti a switch im balíček doručí priamo. Adresa 192.168.2.5 je inde a balíček k nej musí cez **router**.

Ondra chce mať na chate dve siete: jednu pre hráčov a druhú pre „múdre“ veci (kameru pri kŕmidle a teplomer). Keď ich oddelí, kamera neuvidí do herných notebookov.

1. Ktoré dvojice sú v tej istej sieti /24?
   - 192.168.1.10 a 192.168.1.200
   - 192.168.1.10 a 192.168.2.10
   - 10.0.0.1 a 10.0.0.254
2. Maska /25 rozdelí posledné číslo na dve polovice: 0–127 a 128–255. Sú 192.168.1.10 a 192.168.1.200 v tej istej sieti /25?
3. Koľko zariadení sa zmestí do siete /24 a koľko do siete /25? Pozor: prvá adresa v sieti označuje sieť samotnú a posledná je „hlásna trúba“ pre všetkých. Žiadne zariadenie ich dostať nemôže.

**Kritérium úspechu:** všetky tri odpovede správne, vrátane počtu zariadení.

:::reveal 🔑 Riešenie
1. Áno. Nie. Áno.
2. Nie: .10 patrí do dolnej polovice (0–127), .200 do hornej (128–255).
3. 254 a 126. Keď zariadenie vidí, že cieľ je mimo jeho siete, pošle balíček **predvolenej bráne**, teda routeru. Toto rozhodnutie robí tvoj mobil pri každej správe.
:::

**Ďalší krok:** [Dielňa: prvá sieť vo Filiuse](#expedice-stroje-a-site-2-sk)
