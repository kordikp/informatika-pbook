---
id: expedice-stroje-a-site-2
type: spine
title: "Dílna: první síť ve Filiu"
readingTime: 1
standalone: false
teaser: "Filius je simulátor sítí pro školy."
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
concept: expedice-stroje-a-site-2
conceptTitle: "Dílna: první síť ve Filiu"
state: edited
carriers: prose
---

**🛠 Dílna** · krok 2 z 5 · [Internet na chatě](#expedice-stroje-a-site)

**Filius** je simulátor sítí pro školy. Je zdarma a bez účtu. Filius II běží v prohlížeči na filius-ii.net (je zatím v betaverzi), Filius Classic si stáhneš z lernsoftware-filius.de pro Windows, Mac i Linux. Rozhraní je německé nebo anglické, ale stačí ti ikonky. Popis platí pro Classic, ve Filiu II jsou ovládací prvky podobné.

**Prvních 30 minut:**

1. V režimu návrhu (ikona kladívka) přetáhni na plochu dva počítače a jeden **switch**.
2. Nástrojem kabel propoj oba počítače se switchem.
3. Dvojklikem otevři první počítač a nastav adresu 192.168.0.10 a masku 255.255.255.0 (to je /24). Druhému dej adresu 192.168.0.11.
4. Přepni do simulace (zelený trojúhelník).
5. Na prvním počítači otevři instalaci softwaru a přidej **příkazovou řádku** (Befehlszeile nebo Command line).
6. Napiš ping 192.168.0.11. Kabely se rozblikají a uvidíš odpovědi i s časem.
7. Pokus: vrať se do návrhu a změň druhému počítači adresu na 192.168.1.11. Ping teď selže. Vysvětli proč, pomůže ti krok 1 expedice.
8. Bonus: otevři u switche tabulku (dvojklik v simulaci). Switch si pamatuje, který počítač je na kterém kabelu.

**Kritérium úspěchu:** ping v bodě 6 projde a v bodě 7 umíš vysvětlit, proč selhal.

**Další krok:** [Rozbor: kudy jede balíček přes oceán](#expedice-stroje-a-site-3)
