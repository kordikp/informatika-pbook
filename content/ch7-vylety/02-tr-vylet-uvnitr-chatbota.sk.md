---
id: vylet-uvnitr-chatbota-sk
translationOf: vylet-uvnitr-chatbota
lang: sk
type: spine
title: "Výlet: Vnútri chatbota"
readingTime: 1
standalone: true
teaser: "Pozrieš sa, ako chatbot vnútri funguje. Štyri kroky a potom späť k jadru knihy."
voice: universal
parent: null
diagram: null
core: false
recallQ: "Chatbot má teplotu nastavenú na nulu. Znamená to, že hovorí pravdu?"
recallA: "Nie, len vždy vyberie najpravdepodobnejšie slovo. Áno. Teplota mení riskovanie, nie pravdivosť."
lens: generic
visuality: text-first
depth: standard
formalism: none
lengthBand: standard
genre: explainer
status: accepted
concept: vylet-uvnitr-chatbota
conceptTitle: "Vnútri chatbota"
objective: "Pozrieš sa, ako chatbot vnútri funguje. Štyri kroky a potom späť k jadru knihy."
state: edited
highlights:
  - "Aj slová sú čísla, rovnako ako pri kódovaní."
  - "Stále len predpoveď. Teplota hovorí, ako veľmi riskuje."
  - "Odpoveď so zdrojom sa dá skontrolovať. Či to urobíš, rozhoduješ ty."
  - "Vidieť neznamená veriť. Na toto stavajú aj podvody."
carriers: prose
---

Pozrieš sa, ako chatbot vnútri funguje. Štyri kroky a potom späť k jadru knihy.

### Tokeny

Model nečíta písmená. Text sa najprv rozseká na kúsky, ktorým sa hovorí **tokeny**. Bývajú to celé slová alebo ich časti. Veta „Chatbot nečíta písmená.“ sa napríklad rozpadne na *Chat · bot · neč · íta · písm · ená · .* a každý kúsok má svoje číslo. Model počíta len s číslami.

> **Späť k jadru:** Aj slová sú čísla, rovnako ako pri [kódovaní](#c/kodovani).

### Teplota

Pri každom ďalšom slove model pozná pravdepodobnosti. **Teplota** určuje, ako veľmi riskuje. Pri nule vyberie vždy najpravdepodobnejšie slovo, pri Karolovi Vrbovi zakaždým *Tiene*. Čím vyššia teplota, tým častejšie siahne aj po menej pravdepodobnom: *Dom*, *Vŕba*, *Ticho*. Odpovede sú pestrejšie, ale aj častejšie mimo.

> **Späť k jadru:** Stále len predpoveď. Teplota hovorí, ako veľmi riskuje.

### Knižnica a zdroje

Niektoré chatboty vedia pred odpoveďou **hľadať v dokumentoch** alebo na webe a pripojiť zdroj. Odborne sa tomu hovorí RAG. Bez knižnice chatbot odpovie: „Karol Vrba z Trnavy napísal román Tiene nad Váhom (1987).“ S knižnicou najprv hľadá v katalógu: „Autora Karola Vrbu z Trnavy som v katalógu nenašiel. Nemyslíš iné meno?“ Odpoveď so zdrojom sa dá skontrolovať. Pozor: aj taký chatbot môže zdroj zle zhrnúť.

> **Späť k jadru:** Odpoveď so zdrojom sa dá skontrolovať. Či to urobíš, [rozhoduješ ty](#c/rozhodujes-ty).

### Obrázky zo šumu

Generátor obrázkov začína náhodným šumom a krok po kroku odhaduje, ako by mal vyzerať čistejší obraz. Po pár krokoch zo šumu vystúpi tvar, po ďalších detaily. Rovnakým predpovedaním vznikajú falošné hlasy a videá, **deepfaky**.

> **Späť k jadru:** Vidieť neznamená veriť. Na toto stavajú aj [podvody](#c/podvod-cili-na-cloveka).

**Späť do knihy:** výlet patrí k sekcii [Generatívna AI predpovedá](#c/generativni-model). Ďalej pokračuj sekciou [Odporúčač a tvoj feed](#c/doporucovac).
