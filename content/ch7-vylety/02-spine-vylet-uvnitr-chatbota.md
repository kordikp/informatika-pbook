---
id: vylet-uvnitr-chatbota
type: spine
title: "Výlet: Uvnitř chatbota"
readingTime: 1
standalone: true
teaser: "Podíváš se, jak chatbot uvnitř funguje. Čtyři kroky a pak zpátky k jádru knihy."
voice: universal
parent: null
diagram: null
core: false
recallQ: "Chatbot má teplotu nastavenou na nulu. Znamená to, že mluví pravdu?"
recallA: "Ne, jen vždy vybere nejpravděpodobnější slovo. Ano. Teplota mění riskování, ne pravdivost."
lang: cs
lens: generic
visuality: text-first
depth: standard
formalism: none
lengthBand: standard
genre: explainer
status: accepted
concept: vylet-uvnitr-chatbota
conceptTitle: "Uvnitř chatbota"
state: edited
highlights:
  - "I slova jsou čísla, stejně jako při kódování."
  - "Pořád jen předpověď. Teplota říká, jak moc riskuje."
  - "Odpověď se zdrojem jde zkontrolovat. Jestli to uděláš, rozhoduješ ty."
  - "Vidět neznamená věřit. Na tohle sázejí i podvody."
carriers: prose
---

Podíváš se, jak chatbot uvnitř funguje. Čtyři kroky a pak zpátky k jádru knihy.

### Tokeny

Model nečte písmena. Text se nejdřív rozseká na kousky, kterým se říká **tokeny**. Bývají to celá slova nebo jejich části. Věta „Chatbot nečte písmena.“ se třeba rozpadne na *Chat · bot · nečte · písm · ena · .* a každý kousek má své číslo. Model počítá jen s čísly.

> **K jádru:** I slova jsou čísla, stejně jako při [kódování](#c/kodovani).

### Teplota

U každého dalšího slova model zná pravděpodobnosti. **Teplota** určuje, jak moc riskuje. Při nule vybere vždy nejpravděpodobnější slovo, u Karla Vrby pokaždé *Stíny*. Čím vyšší teplota, tím častěji sáhne i po méně pravděpodobném: *Dům*, *Vrba*, *Ticho*. Odpovědi jsou pestřejší, ale i častěji mimo.

> **K jádru:** Pořád jen předpověď. Teplota říká, jak moc riskuje.

### Knihovna a zdroje

Některé chatboty umí před odpovědí **hledat v dokumentech** nebo na webu a připojit zdroj. Odborně se tomu říká RAG. Bez knihovny chatbot odpoví: „Karel Vrba z Kolína napsal román Stíny nad Labem (1987).“ S knihovnou nejdřív hledá v katalogu: „Autora Karla Vrbu z Kolína jsem v katalogu nenašel. Nemyslíš jiné jméno?“ Odpověď se zdrojem jde zkontrolovat. Pozor: i takový chatbot může zdroj špatně shrnout.

> **K jádru:** Odpověď se zdrojem jde zkontrolovat. Jestli to uděláš, [rozhoduješ ty](#c/rozhodujes-ty).

### Obrázky ze šumu

Generátor obrázků začíná náhodným šumem a krok po kroku odhaduje, jak by měl vypadat čistší obraz. Po pár krocích ze šumu vystoupí tvar, po dalších detaily. Stejným předpovídáním vznikají falešné hlasy a videa, **deepfaky**.

> **K jádru:** Vidět neznamená věřit. Na tohle sázejí i [podvody](#c/podvod-cili-na-cloveka).

**Zpátky do knihy:** výlet patří k sekci [Generativní AI předpovídá](#c/generativni-model). Dál pokračuj sekcí [Doporučovač a tvůj feed](#c/doporucovac).
