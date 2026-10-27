---
id: svet-socialni-sifrovani-sk
translationOf: svet-socialni-sifrovani
lang: sk
type: spine
title: "Kto číta tvoje správy"
readingTime: 1
standalone: true
teaser: "Napíšeš kamarátke správu. Môže ju okrem nej prečítať ešte niekto? Záleží na tom, kde sa správa zamyká a kto má kľúč."
voice: universal
parent: null
diagram: null
core: false
recallQ: "Web má zámok a https. Znamená to, že je dôveryhodný?"
recallA: "Nie. Zámok hovorí len to, že cesta medzi tebou a webom je šifrovaná. Podvodný web môže mať https tiež."
lens: socialni
visuality: balanced
depth: intro
formalism: none
lengthBand: standard
genre: explainer
status: accepted
concept: sifrovani
state: edited
highlights:
  - "Otvorený text, kľúč, šifrovaný text"
  - "Kódovanie je verejné pravidlo, šifrovanie potrebuje tajný kľúč"
  - "https a zámok = šifrovaná cesta, nie overenie poctivosti; verejná Wi-Fi"
carriers: prose|image
---

Napíšeš kamarátke správu. Môže ju okrem nej prečítať ešte niekto? Záleží na tom, kde sa správa zamyká a kto má kľúč.

Nešifrovaná správa je po ceste ako **pohľadnica**: prečíta ju každý, kto ju nesie. **Šifrovanie** z nej urobí zalepenú obálku. **Otvorený text** *v piatok o štvrtej pri kine* sa **kľúčom** zmení na **šifrovaný text**, nečitateľnú zmeť. Prečíta ho len ten, kto má kľúč.

Dôležité je, **kde** sa obálka otvára:

- **Šifrovanie po ceste** (https): správa je zamknutá medzi tvojím mobilom a serverom appky. Na serveri sa odomkne a firma ju môže čítať, ukladať a na príkaz úradov odovzdať ďalej.
- **Koncové šifrovanie** (end-to-end): správu zamkne tvoj mobil a odomkne až mobil kamarátky. Server prenáša len zmeť a kľúč nemá. Takto šifrujú napríklad Signal a WhatsApp. Pri iných appkách sa pozri do nastavení.

![Správa šifrovaná po ceste a správa šifrovaná koncovo](images/svet-socialni-e2e.sk.svg)

Šifrovanie nie je **kódovanie**. Emoji, text aj fotka sa v mobile kódujú na čísla podľa **verejného pravidla**, ktoré pozná každý, a to nič neschová. Šifrovanie potrebuje **tajný kľúč**.

A ani ten najlepší zámok neschová všetko. Koncovo šifrovanú správu môže kamarátka odfotiť, preposlať alebo ukázať. Šifrovanie chráni cestu, nie človeka na druhej strane. Na **verejnej Wi-Fi** v kaviarni sa však oplatí, že appky šifrujú aspoň po ceste: bez toho by správy mohol čítať ktokoľvek v tej istej sieti.

**Vyskúšaj to!** Pozri sa do nastavení appky, v ktorej si píšeš s kamarátmi. Je tam zmienka o koncovom (end-to-end) šifrovaní? Platí pre všetky chaty, alebo len pre niektoré?

**Ďalej vo svete sociálnych sietí:** → [Video, ktoré sa nikdy nestalo](#svet-socialni-generativni-model-sk)
