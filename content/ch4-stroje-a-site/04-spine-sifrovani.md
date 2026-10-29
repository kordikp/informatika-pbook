---
id: sifrovani
type: spine
title: "Šifrování: obálka místo pohlednice"
readingTime: 2
standalone: true
teaser: "Chat píše „Zprávy jsou koncově šifrované“. Co to znamená a kdo je tedy nepřečte?"
voice: universal
parent: null
diagram: null
core: true
recallQ: "Web má zámeček a https. Znamená to, že je důvěryhodný?"
recallA: "Ne. Zámeček říká jen to, že cesta mezi tebou a webem je šifrovaná. Podvodný web může mít https taky."
lang: cs
lens: generic
visuality: balanced
depth: intro
formalism: none
lengthBand: standard
genre: worked-example
status: accepted
concept: sifrovani
conceptTitle: "Šifrování: obálka místo pohlednice"
state: core
highlights:
  - "Otevřený text, klíč, šifrovaný text"
  - "Kódování je veřejné pravidlo, šifrování potřebuje tajný klíč"
  - "https a zámeček = šifrovaná cesta, ne ověření poctivosti; veřejná Wi-Fi"
carriers: prose
---

Chat píše „Zprávy jsou koncově šifrované“. Co to znamená a kdo je tedy nepřečte?

Každý router po cestě balíček drží v ruce. Nešifrovaná zpráva je jako **pohlednice**: přečte ji každý, kdo ji nese. **Šifrování** ji zamkne **klíčem**. Bez klíče je z ní nečitelná změť.

Caesarova šifra s klíčem 3 posune každé písmeno o tři místa: A → D, B → E, H → K. Vzkaz AHOJ se změní na DKRM. Kdo zná klíč, posune písmena zpátky. A kdo ho nezná? Zachytíš zprávu ZYHG B OYPZAL C WLA a zkoušíš klíče jeden po druhém. S klíčem 7 vyjde SRAZ U HRISTE V PET. Caesar má jen 25 klíčů, a tak se dá rozluštit zkoušením. Šifry v mobilu mají klíčů tolik, že by je žádný počítač nevyzkoušel.

⟦obr: images/proklik-sifrovani.svg⟧

**Otevřený text** a **klíč** dají **šifrovaný text**. Kdo klíč má, zprávu odemkne. Kdo ho nemá, vidí jen změť.

**Zámeček a https** v prohlížeči znamenají, že je **cesta** mezi tebou a webem šifrovaná. Neříkají, že je web **poctivý**. Podvodný web může mít zámeček taky.

**Koncové šifrování** v chatu jde dál. U https se zpráva na serveru služby odemkne a služba ji může přečíst. U koncového šifrování mají klíč jen **telefony na obou koncích**. Server zprávu jen předá a sám ji nepřečte. Přečte ji ale každý, kdo drží telefon příjemce. A snímek obrazovky ji pošle dál.

Šifrování není kódování. Pravidlo kódování je veřejné, klíč šifry je tajný.

**Zkus to!** Zašifruj kamarádovi vzkaz posunem písmen. Domluvte se na klíči (třeba posun o 3, takže A je D) a pošli mu ho. Třetí spolužák bez klíče ať zkusí vzkaz rozluštit. Jak dlouho mu to trvá? Zámeček v prohlížeči dělá totéž, jen s tak dlouhým klíčem, že ho hádáním uhodnout nejde.

> **Pozor, častý omyl:** „Zámeček v prohlížeči znamená, že je web bezpečný.“ Zámeček znamená jen to, že spojení je šifrované a cestou ho nikdo nepřečte. Podvodný web může mít zámeček taky.

**Dál:** Dobrou šifru hádáním neprolomíš, a tak podvodníci útočí na člověka. Zámeček má klidně i phishingový web. Uvidíš v kapitole 6. → [Podvod cílí na člověka](#c/podvod-cili-na-cloveka)
