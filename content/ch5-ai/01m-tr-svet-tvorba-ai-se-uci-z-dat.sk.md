---
id: svet-tvorba-ai-se-uci-z-dat-sk
translationOf: svet-tvorba-ai-se-uci-z-dat
lang: sk
type: spine
title: "Prečo je vedec vždy dedko v plášti"
readingTime: 1
standalone: true
teaser: "Zadáš generátoru „vedec v laboratóriu“. Štyri obrázky a štyrikrát starší muž v bielom plášti s okuliarmi. Nikto mu to nenaprogramoval."
voice: universal
parent: null
diagram: null
core: false
recallQ: "Model na rozpoznávanie tvárí trénovaný hlavne na svetlej pleti chybuje pri tmavej. Prečo?"
recallA: "Naučil sa vzory z dát, ktoré dostal. Tmavú pleť v nich takmer nevidel, a tak ju rozpoznáva horšie. Chyba je v dátach."
lens: tvorba
visuality: visual-first
depth: intro
formalism: none
lengthBand: standard
genre: explainer
status: accepted
concept: ai-se-uci-z-dat
state: edited
highlights:
  - "AI = softvér, ktorý sa učí z príkladov, nie z ručne písaných pravidiel"
  - "Trénovanie a testovanie na nových dátach"
  - "Bias: chýbajúce alebo jednostranné dáta vedú k chybným alebo nespravodlivým výsledkom"
carriers: prose|image
---

Zadáš generátoru „vedec v laboratóriu“. Štyri obrázky a štyrikrát starší muž v bielom plášti s okuliarmi. Nikto mu to nenaprogramoval.

Generátor obrázkov nikto neučil pravidlami typu „vedec má plášť“. Je to **softvér, ktorý sa učí z príkladov**. Dostal stovky miliónov obrázkov s popiskami z internetu a našiel v nich **vzory**: aké tvary a farby patria k slovám *pes*, *západ slnka*, *vedec*. Takému učeniu sa hovorí **trénovanie**.

Čo je v dátach, to sa model naučí. A na internete je pri slove *vedec* hlavne jeden typ fotky: starší muž, plášť, skúmavky. Vedkýň, mladých vedcov alebo vedcov pri počítači je v popiskoch menej. Model tak neukazuje svet, aký je, ale ako bol opísaný na obrázkoch. Tomu sa hovorí **bias**: **jednostranné dáta** vedú k jednostranným výsledkom. Pri obrázkoch je z toho klišé. Pri AI, ktorá triedi prihlášky alebo rozpoznáva tváre, z toho býva **nespravodlivosť**: komu v dátach chýbajú príklady, tomu model rozumie horšie.

![Štyria vedci z generátora a čo v dátach chýbalo](images/svet-tvorba-vedec.sk.svg)

Ako sa spozná, že sa model naučil dobre? **Testovaním na nových dátach**, na príkladoch, ktoré pri trénovaní nevidel. Keď zvláda len to, čo už videl, naučil sa naspamäť. Keď to funguje aj na nových obrázkoch, našiel skutočné vzory.

Pre teba ako tvorcu z toho vyplýva jeden návyk: všímaj si, čo generátor vybral **za teba bez pýtania**. Pohlavie, vek, farbu pleti, prostredie. Keď chceš niečo iné ako priemer z internetu, povedz to v prompte: *mladá vedkyňa pri mikroskope*.

**Vyskúšaj to!** Zadaj generátoru obrázkov tri povolania: „učiteľ“, „programátor“, „zdravotník“. Čo majú výsledky spoločné? Čo si model domyslel bez tvojho zadania?

**Ďalej vo svete tvorby s AI:** → [Šesť prstov a nápis z inej planéty](#svet-tvorba-generativni-model-sk)
