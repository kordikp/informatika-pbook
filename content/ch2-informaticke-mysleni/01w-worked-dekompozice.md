---
id: ch2-worked-dekompozice
type: spine
title: "Od paniky k plánu: turnaj ve fotbálku"
readingTime: 2
standalone: true
teaser: "„Uspořádejte turnaj!" zní děsivě — dokud úkol nerozložíš na strom kousků, které si rozeberou čtyři lidi."
voice: universal
parent: null
diagram: null
core: false
recallQ: "Co je dekompozice a proč se s ní velký úkol řeší snáz?"
recallA: "Rozložení velkého problému na menší části řešitelné po jednom. Malé kousky se dají rozdělit mezi lidi, nezávislé běží souběžně a chyba se hledá v jedné větvi, ne v celém úkolu."
lang: cs
lens: generic
visuality: text-first
depth: intro
formalism: none
lengthBand: standard
genre: worked-example
concept: ch2-dekompozice
state: edited
status: accepted
carriers: prose|table
---

Třídní ti hodila na krk: „Uspořádejte třídní turnaj ve fotbálku." Velké, mlhavé, panika. Přesně úkol pro dekompozici — pojď ho rozložit.

**1. Řekni cíl jednou větou.** „Za dva týdny odpoledne proběhne v klubovně turnaj dvojic a skončí vyhlášením vítězů." Teprve jasně řečený cíl se dá rozkládat.

**2. Rozlož ho na hlavní větve.** První patro stromu — čtyři podúkoly, každý se dál drobí:

- **Místo a termín** — domluvit klubovnu, ověřit stůl a míček, vybrat den
- **Týmy** — vyhlásit přihlášky ve třídní skupině, v pátek uzavřít seznam, rozlosovat dvojice
- **Rozpis a pravidla** — zvolit systém „každý s každým", sepsat pět pravidel, vytisknout rozpis na dveře
- **Ceny a vyhlášení** — vyrobit diplomy, sehnat drobné ceny, určit, kdo vyhlásí

Mezivýsledek: z jednoho děsivého úkolu je dvanáct malých — žádný netrvá déle než jedno odpoledne.

**3. Rozděl kousky mezi lidi a urči pořadí.** Tady se ukáže síla stromu: vidíš, co na čem závisí.

| Podúkol | Kdo | Kdy | Čeká na |
|---|---|---|---|
| Místo a termín | ty | hned | nic |
| Pravidla | Petr | hned | nic |
| Ceny a diplomy | Su | hned | nic |
| Přihlášky | Anička | po potvrzení termínu | místo a termín |
| Losování a rozpis | Anička + ty | po uzávěrce přihlášek | přihlášky |

**4. Najdi, co běží paralelně.** Místo, pravidla i ceny nezávisí na ničem — tři lidi na nich pracují **naráz hned první den**. Sériová je jediná linka: termín → přihlášky → losování → rozpis. Ta určuje, jak rychle jde být hotov, všechno ostatní se vejde vedle ní.

**5. Bonus stromu: hledání chyb.** Den před turnajem chybí míček? Nehledáš viníka v mlze — míček patří do větve „Místo a termín", tedy tvojí. Když nefunguje kousek, víš kde hledat; když nefunguje „všechno", nevíš nic.

**Co sis odnesl:** Velký úkol nejdřív rozlož na strom malých kousků. Nezávislé větve rozdej lidem a nech běžet souběžně, závislé seřaď za sebe — a když se něco pokazí, strom ti ukáže, ve které větvi hledat.
