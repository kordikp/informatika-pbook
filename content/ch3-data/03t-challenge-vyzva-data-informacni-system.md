---
id: vyzva-data-informacni-system
type: challenge
title: "Kdo mohl smazat video?"
level: 3
minutes: 30
readingTime: 2
standalone: true
teaser: "Kroužek natáčí film."
voice: universal
parent: null
diagram: null
core: false
lang: cs
status: accepted
concept: informacni-system
state: edited
lens: generic
visuality: text-first
depth: standard
formalism: none
lengthBand: standard
carriers: prose|table
---

Kroužek natáčí film. Ve sdílené složce zmizel nejlepší záběr. Nikdo se nepřiznává. Jenže otázka „kdo to udělal“ je ta menší. Ta větší zní: kolik lidí to vůbec **mohlo** udělat?

<!-- task -->

Složka **Film 7.B** má tři podsložky: **Záběry**, **Hudba**, **Střih**. Práva fungují jako ve většině cloudových disků:
- právo nastavené na složce **zdědí** všechno uvnitř;
- když má někdo víc práv z různých míst, platí **to nejvyšší** (editor > komentátor > čtenář);
- **editor** smí nahrávat, měnit i mazat.

**Současné nastavení:** na složce Film 7.B má skupina **Celá třída 7.B (26 lidí)** právo editor. Na složce Záběry je navíc odkaz „kdokoli s odkazem může zobrazit“.

**Potřeby týmu:**
1. Tomáš nahrává záběry.
2. Ondra nahrává hudbu a záběry potřebuje jen vidět.
3. Ema píše k záběrům poznámky, nic nemaže.
4. Ty skládáš střih, potřebuješ vidět záběry i hudbu.
5. Paní učitelka chce vidět jen hotový film ve Střihu.

**Úkoly:** (a) Kolik lidí mohlo záběr smazat a proč? (b) Proč nejde problém opravit tak, že na složce Záběry nastavíš třídě „jen čtenář“? (c) Navrhni nastavení, které splní všech pět potřeb a **nedá nikomu nic navíc**. Zapiš ho jako tabulku složka × člověk. **Kritérium:** každá potřeba je splněná a žádné právo nejde odebrat, aniž by se nějaká potřeba porušila.

<!-- hint -->

Editor na nadřazené složce znamená editor i ve všech podsložkách. Kolik lidí je ve skupině?

<!-- hint -->

Pravidlo „nejvyšší vyhrává“: když někdo dostane editora shora a čtenáře na podsložce, co platí?

<!-- hint -->

Práva musíš dávat co nejníž, přímo na podsložky, a na nadřazené složce nechat jen vlastníka. A ten veřejný odkaz potřebuje vůbec někdo?

<!-- solution -->

**(a)** Záběr mohlo smazat **26 lidí** z třídy plus vlastník složky. Editor zděděný z Film 7.B platí i v Záběrech. (Odkaz „kdokoli může zobrazit“ mazat nedovolí, ale záběry vidí kdokoli, komu se odkaz dostane.)

**(b)** Protože platí **nejvyšší** právo. Třída má editora shora, čtenář na podsložce ho nepřebije. Práva se v takových systémech na podsložce přidávají, ne odebírají.

**(c)** Na **Film 7.B** nikdo kromě tebe jako vlastníka. Veřejný odkaz zrušit.

| | Záběry | Hudba | Střih |
|---|---|---|---|
| Tomáš | editor | – | – |
| Ondra | čtenář | editor | – |
| Ema | komentátor | – | – |
| ty | čtenář | čtenář | editor |
| učitelka | – | – | čtenář |

Jen **3 práva editora**, každé jen na „vlastní“ složce. To je **zásada nejmenších práv**. Smazat záběr teď může jen Tomáš (a ty jako vlastník). Druhá pojistka: koš a historie verzí, ze kterých se smazaný soubor dá obnovit.

<!-- more -->

Projdi s rodičem sdílení jedné své složky v cloudu a spočítej, kolik lidí do ní reálně vidí, včetně odkazů. Pak přidej šestou potřebu: „Bára zvenku má jednou nahrát titulky“. Dokážeš ji splnit tak, aby po týdnu neměla žádné právo? Hledej v nastavení sdílení datum vypršení přístupu.
