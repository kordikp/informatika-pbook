---
id: svet-tvorba-cloud-a-server
type: spine
title: "Kam letí tvůj prompt"
readingTime: 1
standalone: true
teaser: "Napíšeš do generátoru „moje třída na výletě v Krkonoších“ a přidáš fotku. Za chvíli je obrázek hotový. Ale kde vlastně vznikl?"
voice: universal
parent: null
diagram: null
core: false
recallQ: "Kde je tvoje fotka, kterou máš „v cloudu“?"
recallA: "Na disku serveru v datacentru nějaké firmy, často v jiné zemi. Ke kopii se dostaneš přes internet."
lang: cs
lens: tvorba
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
carriers: prose|image
---

Napíšeš do generátoru „moje třída na výletě v Krkonoších“ a přidáš fotku. Za chvíli je obrázek hotový. Ale kde vlastně vznikl?

Ne v tvém mobilu. Prompt i fotka odletěly přes internet na **server** firmy, která generátor provozuje. Server je počítač, který **poskytuje službu** ostatním. Tady počítá obrázky pro miliony lidí naráz. Stojí v **datacentru**, hale plné grafických karet, a ty ho používáš na dálku. To je **cloud**: **cizí servery**, které si pronajmeš, nebo je dostaneš zdarma.

![Cesta promptu do datacentra a obrázku zpátky](images/svet-tvorba-cesta.svg)

Výhoda je jasná: obrázek, na který by tvůj notebook nestačil, máš za chvíli a kdekoli. **Závislosti** jsou tři. Bez **připojení** nic nevygeneruješ. **Firma** může službu zdražit, změnit, nebo zrušit, a tvoje historie zmizí s ní. A tvoje data jsou **u ní**: prompt, nahraná fotka spolužáků i výsledek. Podle podmínek služby je může uchovávat a někdy i použít k dalšímu trénování.

Datacentrum stojí v nějaké **zemi**, a platí tam její zákony. Pro firmy v **EU** a pro data lidí z EU platí **GDPR**: firma musí říct, co s tvými daty dělá, a na požádání je smazat. Fotka obličeje spolužáka je jeho osobní údaj. Nahrát ji bez jeho souhlasu je špatný nápad, ať server stojí kdekoli.

Některé modely běží **lokálně**, přímo na tvém počítači. Data pak nikam neletí a funguje to i bez internetu, jenže potřebuješ silný hardware a výsledky bývají slabší. A co máš jen v cloudu, měj **zálohované jinde**: povedené obrázky a projekty si stáhni, nespoléhej na historii ve službě.

**Zkus to!** Najdi v podmínkách služby, kterou používáš na obrázky nebo na chat s AI, odpovědi na dvě otázky: Smí použít moje vstupy k trénování? A dá se to vypnout?

**Dál ve světě tvorby s AI:** → [Proč je vědec vždycky děda v plášti](#svet-tvorba-ai-se-uci-z-dat)
