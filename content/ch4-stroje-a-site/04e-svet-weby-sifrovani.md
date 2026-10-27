---
id: svet-weby-sifrovani
type: spine
title: "Zámeček v adresním řádku"
readingTime: 1
standalone: true
teaser: "Na školní Wi-Fi zadáš heslo do formuláře. Kdo všechno ho cestou k serveru může přečíst? Záleží na jednom písmenu: s."
voice: universal
parent: null
diagram: null
core: false
recallQ: "Web má zámeček a https. Znamená to, že je důvěryhodný?"
recallA: "Ne. Zámeček říká jen to, že cesta mezi tebou a webem je šifrovaná. Podvodný web může mít https taky."
lang: cs
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
  - "Otevřený text, klíč, šifrovaný text"
  - "Kódování je veřejné pravidlo, šifrování potřebuje tajný klíč"
  - "https a zámeček = šifrovaná cesta, ne ověření poctivosti; veřejná Wi-Fi"
carriers: prose|image
---

Na školní Wi-Fi zadáš heslo do formuláře. Kdo všechno ho cestou k serveru může přečíst? Záleží na jednom písmenu: s.

Bez šifrování cestuje formulář sítí jako **pohlednice**: přečte ho každý router po cestě i každý, kdo sedí ve stejné **veřejné Wi-Fi**. **http** je pohlednice. **https** je **obálka**: prohlížeč a server si na začátku domluví **klíč** a všechno, co si posílají, se jím zašifruje. Z **otevřeného textu** *heslo123* se stane **šifrovaný text** jako *x9Qf…*, nečitelná změť pro každého, kdo klíč nemá.

![Stejný formulář poslaný přes http a přes https](images/svet-weby-zamek.svg)

Šifrování není **kódování**. Kódování, třeba UTF-8, je **veřejné pravidlo**: kdo ho zná, text přečte. **Šifrování** potřebuje **tajný klíč**. Proto „zakódované heslo“ není schované heslo.

A hlavně: **zámeček** neříká, že je web **poctivý**. Říká jen, že **cesta** mezi tebou a webem v adresním řádku je šifrovaná. Podvodný web *skolni-prihlaseni.net* má https taky, šifrovací certifikát dnes zdarma dostane každý. Zámeček ti zaručí, že heslo cestou nikdo nepřečte. Neřekne ti, jestli ho právě neposíláš podvodníkovi.

Pro tvůj web z toho plyne jednoduché pravidlo. GitHub Pages i Netlify zapnou https samy a zdarma. Nech ho zapnuté, i když web nemá žádný formulář: prohlížeče stránky bez https označují jako nezabezpečené.

**Zkus to!** Klikni v prohlížeči na zámeček vedle adresy své oblíbené stránky a podívej se na certifikát. Pro jakou doménu je vydaný? Podle čeho bys poznal podvodný web, který má zámeček taky?

**Dál ve světě webů:** → [Únik z jednoho fóra](#svet-weby-ucet-a-autentizace)
