---
id: ai-se-uci-z-dat-sk
translationOf: ai-se-uci-z-dat
lang: sk
type: spine
title: "AI sa učí z príkladov"
readingTime: 1
standalone: true
teaser: "Telefón ťa spozná podľa tváre. Nikto mu pritom nenapísal pravidlo, ako vyzeráš. Ako to teda vie?"
voice: universal
parent: null
diagram: uceni-z-dat-sk
core: true
recallQ: "Model na rozpoznávanie tvárí trénovaný hlavne na svetlej pleti chybuje pri tmavej. Prečo?"
recallA: "Naučil sa vzory z dát, ktoré dostal. Tmavú pleť v nich takmer nevidel, a tak ju rozpoznáva horšie. Chyba je v dátach."
lens: generic
visuality: balanced
depth: intro
formalism: none
lengthBand: standard
genre: worked-example
status: accepted
concept: ai-se-uci-z-dat
conceptTitle: "AI sa učí z príkladov"
objective: "Telefón ťa spozná podľa tváre. Nikto mu pritom nenapísal pravidlo, ako vyzeráš. Ako to teda vie?"
state: core
highlights:
  - "AI = softvér, ktorý sa učí z príkladov, nie z ručne písaných pravidiel"
  - "Trénovanie a testovanie na nových dátach"
  - "Bias: chýbajúce alebo jednostranné dáta vedú k chybným alebo nespravodlivým výsledkom"
carriers: prose|diagram
---

Telefón ťa spozná podľa tváre. Nikto mu pritom nenapísal pravidlo, ako vyzeráš. Ako to teda vie?

Keby si chcel rozpoznávanie jabĺk naprogramovať pravidlami, musel by si opísať každé jablko na svete. Dnešná AI to robí inak: **ukážeš jej množstvo príkladov a ona v nich sama nájde vzory**. Tomu sa hovorí **trénovanie**. Potom ju **otestuješ** na príkladoch, ktoré nikdy nevidela.

Rozpoznávač ovocia sa trénoval na dvoch druhoch: **červených jablkách** a **zelenožltých hruškách**. Pozerá sa len na farbu. Potom dostane **nové zelené jablko**, aké v dátach nikdy nebolo. Farbou je najpodobnejšie hruškám, a tak povie „hruška“. Keď do trénovacích dát pridáš aj zelené jablká, spozná ho správne.

Model nebol zlý ani hlúpy. Naučil sa presne to, čo bolo v dátach: jablká sú červené. **Čo v dátach chýba, to model nevie.** Keď dáta niekoho alebo niečo vynechajú, model chybuje práve pri nich. Tomu sa hovorí **skreslenie** (anglicky bias).

**Vyskúšaj to!** Natrénuj si vlastný model, zadarmo a bez inštalácie, napríklad v nástroji Teachable Machine. Nauč webkameru rozlíšiť dve tvoje gestá: nazbieraj pár desiatok snímok od každého, spusti tréning, vyskúšaj. Potom ukáž gesto v inom svetle alebo v inom oblečení. Kde model zlyhá a čo to hovorí o jeho trénovacích dátach?

> **Pozor, častý omyl:** „AI je objektívna, pretože je to stroj.“ AI sa učí z dát a preberá aj ich chyby. Keď v dátach chýbajú zelené jablká, model ich nespozná.

**Ďalej:** Natrénovaný model je tiež zjednodušenie. Z mnohých príkladov si nechá len pár vzorov. Čo v dátach chýba, to vo vzoroch nebude. → [Model: užitočné zjednodušenie](#c/abstrakce-a-model)
