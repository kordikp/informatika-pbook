---
id: ucet-a-autentizace
type: spine
title: "Účet a heslo"
readingTime: 1
standalone: true
teaser: "Zapomeneš heslo a mobil nabídne „Obnovit přes e-mail“. Kdo se dostane do tvého e-mailu, dostane se tedy i do mobilu?"
voice: universal
parent: null
diagram: anim-sila-hesla
core: true
recallQ: "Proč je nebezpečné mít stejné heslo na hru i na e-mail?"
recallA: "Když hru hacknou a heslo unikne, útočník ho zkusí i na e-mail. Přes e-mail pak obnoví hesla ke všemu dalšímu."
lang: cs
lens: generic
visuality: balanced
depth: intro
formalism: none
lengthBand: standard
genre: worked-example
status: accepted
concept: ucet-a-autentizace
conceptTitle: "Účet a heslo"
state: core
highlights:
  - "Účet = identita ve službě; autentizace = ověření, že jsi to ty"
  - "Délka a jedinečnost hesla; únik z jedné služby ohrozí ostatní"
  - "Správce hesel a 2FA (něco znáš + něco máš)"
carriers: prose|animation
---

Zapomeneš heslo a mobil nabídne „Obnovit přes e-mail“. Kdo se dostane do tvého e-mailu, dostane se tedy i do mobilu?

**Účet** je tvoje identita ve službě. Když se přihlásíš, služba ověřuje, že jsi to opravdu ty. Tomu se říká **autentizace**. Kdo zná tvoje heslo, je pro službu tebou.

Útočník, který ukradl databázi hesel, zkouší 10 miliard hesel za sekundu. Nejdřív známá hesla, pak slova a jejich obměny, nakonec všechny kombinace. **heslo123** uhodne okamžitě. **P@ss1** taky. **Tr4mvaj!** vypadá složitě, ale padne za necelou minutu. Věta **žirafa jí knedlíky na Měsíci** by mu trvala asi milion let.

Silné heslo je hlavně **dlouhé**. Věta z několika slov porazí krátké heslo se znaky. Obměny jako P@ss nebo Tr4mvaj útočník zkouší mezi prvními.

Ke **každé službě jiné heslo**. Když unikne heslo z hry, útočník ho hned zkusí na e-mail.

Pamatovat si je nemusíš. **Správce hesel** je trezor, který je pamatuje za tebe. A k tomu **dvoufázové ověření (2FA)**: něco znáš (heslo) a něco máš (mobil).

**Zkus to!** Dnes večer: 1) zjisti, kolik služeb máš na stejné heslo (upřímně!), 2) zapni dvoufázové ověření na svém e-mailu, 3) na haveibeenpwned.com si ověř, jestli se tvůj e-mail neobjevil ve známém úniku dat.

> **Pozor, častý omyl:** „Krátké heslo se znaky, třeba P@ss1, je silné.“ Útočník ho vyzkouší za chvilku. Silnější je dlouhá fráze ze slov. A dvoufázové ověření chrání, i když heslo unikne.

**Dál:** Heslo častěji vyláká podvodník, než ho někdo uhodne. → [Podvod cílí na člověka](#c/podvod-cili-na-cloveka)
