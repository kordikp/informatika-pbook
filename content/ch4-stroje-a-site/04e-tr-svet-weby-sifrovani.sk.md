---
id: svet-weby-sifrovani-sk
translationOf: svet-weby-sifrovani
lang: sk
type: spine
title: "Zámok v adresnom riadku"
readingTime: 1
standalone: true
teaser: "Na školskej Wi-Fi zadáš heslo do formulára. Kto všetko ho cestou k serveru môže prečítať? Záleží na jednom písmene: s."
voice: universal
parent: null
diagram: null
core: false
recallQ: "Web má zámok a https. Znamená to, že je dôveryhodný?"
recallA: "Nie. Zámok hovorí len to, že cesta medzi tebou a webom je šifrovaná. Podvodný web môže mať https tiež."
lens: weby
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

Na školskej Wi-Fi zadáš heslo do formulára. Kto všetko ho cestou k serveru môže prečítať? Záleží na jednom písmene: s.

Bez šifrovania cestuje formulár sieťou ako **pohľadnica**: prečíta ho každý router po ceste aj každý, kto sedí v rovnakej **verejnej Wi-Fi**. **http** je pohľadnica. **https** je **obálka**: prehliadač a server si na začiatku dohodnú **kľúč** a všetko, čo si posielajú, sa ním zašifruje. Z **otvoreného textu** *heslo123* sa stane **šifrovaný text** ako *x9Qf…*, nečitateľná zmes pre každého, kto kľúč nemá.

![Rovnaký formulár poslaný cez http a cez https](images/svet-weby-zamek.sk.svg)

Šifrovanie nie je **kódovanie**. Kódovanie, napríklad UTF-8, je **verejné pravidlo**: kto ho pozná, text prečíta. **Šifrovanie** potrebuje **tajný kľúč**. Preto „zakódované heslo“ nie je schované heslo.

A hlavne: **zámok** nehovorí, že je web **poctivý**. Hovorí len, že **cesta** medzi tebou a webom v adresnom riadku je šifrovaná. Podvodný web *skolske-prihlasenie.net* má https tiež, šifrovací certifikát dnes zadarmo dostane každý. Zámok ti zaručí, že heslo cestou nikto neprečíta. Nepovie ti, či ho práve neposielaš podvodníkovi.

Pre tvoj web z toho plynie jednoduché pravidlo. GitHub Pages aj Netlify zapnú https samy a zadarmo. Nechaj ho zapnuté, aj keď web nemá žiadny formulár: prehliadače stránky bez https označujú ako nezabezpečené.

**Vyskúšaj to!** Klikni v prehliadači na zámok vedľa adresy svojej obľúbenej stránky a pozri sa na certifikát. Pre akú doménu je vydaný? Podľa čoho by si spoznal podvodný web, ktorý má zámok tiež?

**Ďalej vo svete webov:** → [Únik z jedného fóra](#svet-weby-ucet-a-autentizace-sk)
