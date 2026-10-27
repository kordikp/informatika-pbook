---
id: svet-aplikace-uvnitr-zarizeni
type: spine
title: "Appka spadla a vzala text s sebou"
readingTime: 1
standalone: true
teaser: "Píšeš v appce dlouhý referát, odskočíš na chvíli do hry a po návratu je appka prázdná. Mobil ji zavřel. Kam se poděl tvůj text?"
voice: universal
parent: null
diagram: null
core: false
recallQ: "Proč zmizí neuložený dokument, když vypadne proud, a uložený ne?"
recallA: "Neuložený existuje jen v operační paměti, která bez proudu zapomene. Uložený je na úložišti, které pamatuje trvale."
lang: cs
lens: aplikace
visuality: balanced
depth: intro
formalism: none
lengthBand: standard
genre: story
status: accepted
concept: uvnitr-zarizeni
state: edited
highlights:
  - "Procesor, operační paměť, úložiště, periferie; hardware vs. software"
  - "Operační paměť je dočasná: neuložená práce zmizí, plná paměť zpomaluje"
  - "Operační systém řídí aplikace a přístup k hardwaru; výběr zařízení podle vlastností"
carriers: prose|image
---

Píšeš v appce dlouhý referát, odskočíš na chvíli do hry a po návratu je appka prázdná. Mobil ji zavřel. Kam se poděl tvůj text?

Byl jen v **operační paměti** (RAM). Tam appky drží všechno, na čem se právě pracuje: rozepsaný text, otevřenou fotku, stav hry. Operační paměť je rychlá, ale **dočasná**. Když se appka zavře nebo mobilu dojde baterka, zapomene. Trvale pamatuje **úložiště**. Co není uložené, existuje jen v operační paměti.

![Rozepsaný text v operační paměti a uložený soubor v úložišti](images/svet-aplikace-pamet.svg)

Proč mobil appku zavřel? Paměti má málo, třeba 6 GB, a hra jí chtěla hodně. **Operační systém** (Android, iOS) rozhoduje, kdo co dostane. Když paměť dochází, zavře appky na pozadí, aby ta na obrazovce běžela plynule. **Plná paměť** jinak všechno **zpomaluje**: mobil přesouvá data sem a tam a appky se sekají.

Proto dobré appky ukládají samy a průběžně, každých pár vteřin. Až budeš stavět vlastní, je to první pravidlo: nespoléhej na to, že appka poběží pořád.

Mobil je počítač jako každý jiný. **Procesor** počítá, operační paměť drží rozdělanou práci, úložiště pamatuje a **periferie** (displej, kamera, mikrofon, reproduktor) jsou cesty dovnitř a ven. To všechno je **hardware**. Appky a systém jsou **software**. Systém hlídá i to, ke kterým periferiím appka smí: kameru nedostane, dokud jí to nepovolíš.

Při **výběru mobilu** pak víš, na co se ptát. Víc operační paměti znamená víc appek naráz bez zavírání, větší úložiště víc fotek a rychlejší procesor plynulejší hry.

**Zkus to!** Podívej se v nastavení mobilu, kolik má operační paměti a kolik úložiště, a kolik úložiště je volného. Které číslo je větší a proč asi?

**Dál ve světě aplikací:** → [Frontend a backend](#svet-aplikace-cloud-a-server)
