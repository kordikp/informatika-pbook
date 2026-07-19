---
id: ch6-hesla-a-2fa
type: spine
title: "Hesla a 2FA: dva zámky na dveřích"
readingTime: 3
standalone: true
teaser: "Jedno heslo všude je jeden klíč od domu, školy i šatny. Ztratíš ho jednou — přijdeš o vše."
voice: universal
parent: null
diagram: dva-zamky-2fa
core: true
recallQ: "Co dělá heslo silným a proč zapnout dvoufaktorové ověření?"
recallA: "Délka a jedinečnost: dlouhé heslo (ideálně fráze) a pro každou službu jiné; pamatuje si je správce hesel. 2FA přidá druhý zámek (kód z aplikace), takže samotné ukradené heslo útočníkovi nestačí."
highlights:
  - "Nejčastěji unikne celá databáze nějaké služby — a útočníci pak zkoušejí uniklé kombinace e-mail + heslo všude jinde."
  - "Jedinečnost: každá služba svoje."
  - "2FA (dvoufaktorové ověření) znamená, že k přihlášení potřebuješ heslo + ještě něco, co máš u sebe"
lang: cs
lens: generic
visuality: text-first
depth: intro
formalism: none
lengthBand: standard
genre: explainer
status: accepted
concept: ch6-hesla-a-2fa
state: core
carriers: prose|diagram
---

Představ si, že máš jeden klíč — od domu, od školní skříňky, od kola i od šatny na tréninku. Pohodlné? Rozhodně. Až do dne, kdy ho ztratíš. Přesně tohle dělá většina lidí s hesly: jedno oblíbené, všude stejné. Útočníci to vědí — a spoléhají na to.

Jak se hesla doopravdy „hackují"? Málokdy hádáním u klávesnice. **Nejčastěji unikne celá databáze nějaké služby — a útočníci pak zkoušejí uniklé kombinace e-mail + heslo všude jinde.** Máš stejné heslo na zapomenutém fóru a v e-mailu? Únik z fóra právě otevřel tvůj e-mail. A kdo ovládne e-mail, resetuje si hesla ke všemu ostatnímu.

Z toho plynou dvě pravidla silného hesla:

- **Délka nade vše.** Krátké heslo se dá strojově vyzkoušet; dlouhá fráze ne. `ModryVelbloudZpivaOpere!` je bezpečnější i zapamatovatelnější než `P@s5w.`
- **Jedinečnost: každá služba svoje.** Pak únik z jednoho místa neotevře nic dalšího.

„Ale to si nezapamatuju!" Správně — **a nemáš.** Od toho je **správce hesel**: aplikace, která hesla generuje i pamatuje za tebe (bývá vestavěná v telefonu i prohlížeči). Ty si pamatuješ jediné pořádné heslo — to od správce.

A teď druhý zámek. **2FA (dvoufaktorové ověření) znamená, že k přihlášení potřebuješ heslo + ještě něco, co máš u sebe** — obvykle kód z aplikace v telefonu. I když heslo unikne, útočník bez tvého telefonu neprojde. Je to ten rozdíl mezi „ukradl mi klíč" a „ukradl mi klíč, ale dveře chtějí ještě otisk prstu". Zapni 2FA minimálně tam, kde by ztráta bolela nejvíc: e-mail, hlavní sociální sítě, herní účty.

**Zkus to!** Dnes večer: 1) zjisti, kolik služeb máš na stejné heslo (upřímně!), 2) zapni 2FA na svém e-mailu, 3) na webu haveibeenpwned.com si ověř, jestli se tvůj e-mail neobjevil v známém úniku dat. Výsledek tě možná nakopne k bodům 1 a 2.

> **Věděl/a jsi?** V žebříčcích nejpoužívanějších hesel světa roky vítězí „123456" a „password". Prolomit je trvá méně než sekundu — a přesto je používají miliony lidí.

Zámky máš. Jenže nejšikovnější zloděj nepáčí dveře — přemluví tě, abys mu otevřel sám. O tom je další sekce.
