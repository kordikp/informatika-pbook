---
id: svet-socialni-sifrovani
type: spine
title: "Kdo čte tvoje zprávy"
readingTime: 1
standalone: true
teaser: "Napíšeš kamarádce zprávu. Může ji kromě ní přečíst ještě někdo? Záleží na tom, kde se zpráva zamyká a kdo má klíč."
voice: universal
parent: null
diagram: null
core: false
recallQ: "Web má zámeček a https. Znamená to, že je důvěryhodný?"
recallA: "Ne. Zámeček říká jen to, že cesta mezi tebou a webem je šifrovaná. Podvodný web může mít https taky."
lang: cs
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
  - "Otevřený text, klíč, šifrovaný text"
  - "Kódování je veřejné pravidlo, šifrování potřebuje tajný klíč"
  - "https a zámeček = šifrovaná cesta, ne ověření poctivosti; veřejná Wi-Fi"
carriers: prose|image
---

Napíšeš kamarádce zprávu. Může ji kromě ní přečíst ještě někdo? Záleží na tom, kde se zpráva zamyká a kdo má klíč.

Nešifrovaná zpráva je po cestě jako **pohlednice**: přečte ji každý, kdo ji nese. **Šifrování** z ní udělá zalepenou obálku. **Otevřený text** *v pátek ve čtyři u kina* se **klíčem** změní na **šifrovaný text**, nečitelnou změť. Přečte ho jen ten, kdo má klíč.

Důležité je, **kde** se obálka otevírá:

- **Šifrování po cestě** (https): zpráva je zamčená mezi tvým mobilem a serverem appky. Na serveru se odemkne a firma ji může číst, ukládat a na příkaz úřadů předat dál.
- **Koncové šifrování** (end-to-end): zprávu zamkne tvůj mobil a odemkne až mobil kamarádky. Server přenáší jen změť a klíč nemá. Takhle šifrují třeba Signal a WhatsApp. U jiných appek se podívej do nastavení.

![Zpráva šifrovaná po cestě a zpráva šifrovaná koncově](images/svet-socialni-e2e.svg)

Šifrování není **kódování**. Emoji, text i fotka se v mobilu kódují na čísla podle **veřejného pravidla**, které zná každý, a to nic neschová. Šifrování potřebuje **tajný klíč**.

A ani ten nejlepší zámek neschová všechno. Koncově šifrovanou zprávu může kamarádka vyfotit, přeposlat nebo ukázat. Šifrování chrání cestu, ne člověka na druhé straně. Na **veřejné Wi-Fi** v kavárně se ale vyplatí, že appky šifrují aspoň po cestě: bez toho by zprávy mohl číst kdokoli ve stejné síti.

**Zkus to!** Podívej se do nastavení appky, ve které si píšeš s kamarády. Je tam zmínka o koncovém (end-to-end) šifrování? Platí pro všechny chaty, nebo jen pro některé?

**Dál ve světě sociálních sítí:** → [Video, které se nikdy nestalo](#svet-socialni-generativni-model)
