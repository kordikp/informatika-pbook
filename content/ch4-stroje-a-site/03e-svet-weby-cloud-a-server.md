---
id: svet-weby-cloud-a-server
type: spine
title: "Kde bydlí tvůj web"
readingTime: 1
standalone: true
teaser: "Soubor index.html ve tvém počítači si kamarád neotevře. Aby web viděl kdokoli, musí se přestěhovat na počítač, který nikdy nespí."
voice: universal
parent: null
diagram: null
core: false
recallQ: "Kde je tvoje fotka, kterou máš „v cloudu“?"
recallA: "Na disku serveru v datacentru nějaké firmy, často v jiné zemi. Ke kopii se dostaneš přes internet."
lang: cs
lens: weby
visuality: balanced
depth: intro
formalism: none
lengthBand: standard
genre: explainer
status: accepted
concept: cloud-a-server
state: edited
highlights:
  - "Server poskytuje službu; cloud = cizí servery"
  - "Lokálně vs. cloud: výhody a závislosti; záloha na jiném místě"
  - "Data leží v datacentru v nějaké zemi; v EU platí GDPR"
carriers: prose|table
---

Soubor index.html ve tvém počítači si kamarád neotevře. Aby web viděl kdokoli, musí se přestěhovat na počítač, který nikdy nespí.

Ten počítač je **server**: **poskytuje službu** ostatním, tady posílá soubory tvého webu každému, kdo si o ně řekne. Místu na serveru se říká **hosting**. Pro školní web je zdarma: na GitHub Pages nebo Netlify nahraješ složku a za minutu máš adresu jako *nas-krouzek.netlify.app*.

Hosting je **cloud**: tvůj web běží na **cizím počítači** v datacentru nějaké firmy. Má to **výhody**: server je zapnutý nonstop, zvládne tisíc návštěv naráz a o aktualizace se stará firma. A má to **závislosti**: když firma službu zruší, zdraží nebo ti zablokuje účet, web zmizí. Proto měj soubory webu i u sebe. **Záloha na jiném místě** je tvoje pojistka.

**Doména** je jméno, které si lidé zapamatují:

| | Hosting | Doména |
|---|---|---|
| Co to je | místo, kde web běží | jméno, které na web ukazuje |
| Příklad | GitHub Pages, Netlify | naskrouzek.cz |
| Pro začátek | zdarma | poddoména zdarma, .cz za pár stovek ročně |

Doména ukazuje na IP adresu serveru. Když se přestěhuješ k jinému hostingu, jen ji přesměruješ. Jméno zůstane, server se vymění.

A kde to datacentrum stojí? V nějaké **zemi**, a platí tam její zákony. Když web sbírá jména a e-maily třeba přes přihlášku na akci, leží tam i ta data. Pro služby v **EU** platí **GDPR**, které určuje, co s osobními údaji smějí dělat.

**Zkus to!** Zadej doménu webu své školy do nástroje typu „IP lookup“. Které firmě patří server, na kterém web běží, a ve které zemi stojí?

**Dál ve světě webů:** → [Zámeček v adresním řádku](#svet-weby-sifrovani)
