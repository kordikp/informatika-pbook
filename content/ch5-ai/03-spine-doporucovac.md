---
id: doporucovac
type: spine
title: "Doporučovač a tvůj feed"
readingTime: 1
standalone: true
teaser: "Pustíš si jedno video s kočkou. Za pět minut máš feed plný koček. Kdo to rozhodl?"
voice: universal
parent: null
diagram: doporucovaci-smycka
core: true
recallQ: "Proč ti feed ukazuje pořád víc videí jednoho druhu?"
recallA: "Algoritmus se učí z tvých signálů (co sleduješ a jak dlouho) a nabízí víc toho, co tě drží. Tak vzniká smyčka, bublina."
lang: cs
lens: generic
visuality: balanced
depth: intro
formalism: none
lengthBand: standard
genre: worked-example
status: accepted
concept: doporucovac
conceptTitle: "Doporučovač a tvůj feed"
state: core
highlights:
  - "Signály: kliky, doba sledování, přeskočení, podobní uživatelé"
  - "Zpětná smyčka a filtrační bublina"
  - "Obchodní model pozornosti a závislostní design (nekonečný scroll, autoplay)"
carriers: prose|diagram
---

Pustíš si jedno video s kočkou. Za pět minut máš feed plný koček. Kdo to rozhodl?

Na sociální síti jsou miliony videí. Do tvého feedu se jich vejde jen pár a vybírá je **doporučovací systém**. Sleduje **signály**: na co klikneš, **jak dlouho se díváš**, co přeskočíš, co sdílíš a co sledují lidé s podobným vkusem. Pak ti nabídne víc toho, co tě nejspíš udrží.

Představ si, že pár kol klikáš hlavně na videa s kočkami. Feed ti jich příště ukáže víc. Protože jich vidíš víc, klikáš na ně ještě víc. Vyzkoušej to v minihře: dokážeš se z bubliny jednoho tématu prokousat ven?

Po pár kolech je feed plný jednoho druhu. Algoritmus se učí z tvých kliků a tvoje kliky ovlivňuje to, co ti ukázal. Tahle **zpětná smyčka** vytváří **bublinu**.

Proč to síť dělá? Je „zadarmo“, protože vydělává na reklamě. **Čím déle se díváš, tím víc reklam uvidíš.**

**Zkus to!** Týden dávej svému feedu záměrné signály o jednom novém tématu (třeba vesmír): pár vyhledání, dokoukaná videa, lajky. Sleduj, za jak dlouho se téma objeví samo. Právě jsi viděl svůj profil při práci.

> **Pozor, častý omyl:** „Feed ukazuje to nejlepší nebo nejnovější.“ Feed ukazuje to, u čeho tě nejspíš udrží nejdéle. A nezná tě jen podle lajků. Počítá i to, jak dlouho se na co díváš.

**Dál:** Nekonečný feed je smyčka, která schválně nemá konec. Smyčka v programu se má zastavit. Tady ji zastavuješ ty. → [Opakování (cyklus)](#c/opakovani)
