---
id: svet-aplikace-informacni-system
type: spine
title: "Kdo smí co ve třídní appce"
readingTime: 1
standalone: true
teaser: "V třídní appce na výlet vidí každý, kolik kdo zaplatil? Smí kdokoli smazat seznam? Nebo jen učitelka? O tom rozhoduje návrh, ne náhoda."
voice: universal
parent: null
diagram: null
core: false
recallQ: "Proč ve školním systému nevidíš známky spolužáků, ale učitel ano?"
recallA: "Systém přiděluje práva podle rolí. Učitel potřebuje známky třídy ke své práci, žák jen svoje. Každá role dostane jen to, co potřebuje."
lang: cs
lens: aplikace
visuality: text-first
depth: intro
formalism: none
lengthBand: standard
genre: explainer
status: accepted
concept: informacni-system
state: edited
highlights:
  - "Účel systému: jaké potřebě slouží a jaká data eviduje"
  - "Role a přístupová práva (čtenář, komentátor, editor, správce)"
  - "Zásada nejmenších práv; odkaz „pro každého“ je riziko"
carriers: prose|table
---

V třídní appce na výlet vidí každý, kolik kdo zaplatil? Smí kdokoli smazat seznam? Nebo jen učitelka? O tom rozhoduje návrh, ne náhoda.

Appka na výlet je malý **informační systém**. Eviduje data, kdo jede, kdo zaplatil a kdo má alergii, a slouží jednomu **účelu**: zorganizovat výlet. Než ji postavíš, rozmysli **role** a jejich **přístupová práva**:

| Role | Co smí |
|---|---|
| žák | vidí program a svou platbu, přihlásí se na výlet |
| rodič | vidí platbu a alergie svého dítěte |
| pokladník třídy | zapisuje platby, vidí, kdo ještě nezaplatil |
| učitelka (správce) | mění program, přiděluje role |

Platí **zásada nejmenších práv**: každá role dostane jen to, co ke své práci potřebuje. Pokladník potřebuje platby, ne alergie. Žák nepotřebuje vidět, kdo nezaplatil. Když má někdo zbytečná práva navíc, každá jeho chyba nebo ukradený účet napáchá víc škody.

Nejčastější díra malých appek je **odkaz pro každého**: sdílená tabulka s nastavením „kdokoli s odkazem může upravovat“. Odkaz někdo přepošle do jiné třídy nebo dá do skupiny na sociální síti, a najednou může seznam s alergiemi číst a měnit kdokoli. Sdílej se jmény konkrétních lidí, ne odkazem.

A druhá otázka: jaká data vůbec **evidovat**. Alergie vedoucí výletu potřebuje, rodné číslo nikdo. Co appka nesbírá, to nemůže uniknout.

**Zkus to!** Vyber si appku nebo sdílený dokument, který vaše třída používá. Kdo v něm má jakou roli? Má někdo víc práv, než potřebuje?

**Dál ve světě aplikací:** → [Appka tvrdí, že chodíš míň](#svet-aplikace-z-dat-informace)
