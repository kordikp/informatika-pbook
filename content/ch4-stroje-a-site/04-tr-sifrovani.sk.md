---
id: sifrovani-sk
translationOf: sifrovani
lang: sk
type: spine
title: "Šifrovanie: obálka namiesto pohľadnice"
readingTime: 1
standalone: true
teaser: "Chat píše „Správy sú koncovo šifrované“. Čo to znamená a kto ich teda neprečíta?"
voice: universal
parent: null
diagram: null
core: true
recallQ: "Web má zámok a https. Znamená to, že je dôveryhodný?"
recallA: "Nie. Zámok hovorí len to, že cesta medzi tebou a webom je šifrovaná. Podvodný web môže mať https tiež."
lens: generic
visuality: text-first
depth: intro
formalism: none
lengthBand: standard
genre: worked-example
status: accepted
concept: sifrovani
conceptTitle: "Šifrovanie: obálka namiesto pohľadnice"
objective: "Chat píše „Správy sú koncovo šifrované“. Čo to znamená a kto ich teda neprečíta?"
mustCover:
  - "Otvorený text, kľúč, šifrovaný text"
  - "Kódovanie je verejné pravidlo, šifrovanie potrebuje tajný kľúč"
  - "https a zámok = šifrovaná cesta, nie overenie poctivosti; verejná Wi-Fi"
state: core
highlights:
  - "Otvorený text, kľúč, šifrovaný text"
  - "Kódovanie je verejné pravidlo, šifrovanie potrebuje tajný kľúč"
  - "https a zámok = šifrovaná cesta, nie overenie poctivosti; verejná Wi-Fi"
carriers: prose
---

Chat píše „Správy sú koncovo šifrované“. Čo to znamená a kto ich teda neprečíta?

Každý router po ceste drží balíček v ruke. Nešifrovaná správa je ako **pohľadnica**: prečíta ju každý, kto ju nesie. **Šifrovanie** ju zamkne **kľúčom**. Bez kľúča je z nej nečitateľná zmes.

Caesarova šifra s kľúčom 3 posunie každé písmeno o tri miesta: A → D, B → E, H → K. Odkaz AHOJ sa zmení na DKRM. Kto pozná kľúč, posunie písmená späť. A kto ho nepozná? Zachytíš správu GYHG WYP POYPZRB V WPHALQ a skúšaš kľúče jeden po druhom. S kľúčom 7 vyjde ZRAZ PRI IHRISKU O PIATEJ. Caesar má len 25 kľúčov, a tak sa dá rozlúštiť skúšaním. Šifry v mobile majú kľúčov toľko, že by ich žiadny počítač nevyskúšal.

**Otvorený text** a **kľúč** dajú **šifrovaný text**. Kto kľúč má, správu odomkne. Kto ho nemá, vidí len zmes.

**Zámok a https** v prehliadači znamenajú, že **cesta** medzi tebou a webom je šifrovaná. Nehovoria, že web je **poctivý**. Podvodný web môže mať zámok tiež.

Šifrovanie nie je kódovanie. Pravidlo kódovania je verejné, kľúč šifry je tajný.

**Vyskúšaj to!** Zašifruj kamarátovi odkaz posunom písmen. Dohodnite sa na kľúči (napríklad posun o 3, takže A je D) a pošli mu ho. Tretí spolužiak bez kľúča nech skúsi odkaz rozlúštiť. Ako dlho mu to trvá? Zámok v prehliadači robí to isté, len s takým dlhým kľúčom, že sa nedá uhádnuť.

> **Pozor, častý omyl:** „Zámok v prehliadači znamená, že web je bezpečný.“ Zámok znamená len to, že spojenie je šifrované a cestou ho nikto neprečíta. Podvodný web môže mať zámok tiež.

**Ďalej:** Šifru prelomiť nejde, a tak podvodníci útočia na človeka. Zámok má pokojne aj phishingový web. Uvidíš v kapitole 6. → [Podvod mieri na človeka](#c/podvod-cili-na-cloveka)
