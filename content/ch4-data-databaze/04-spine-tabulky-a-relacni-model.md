---
id: ch4-tabulky-a-relacni-model
type: spine
title: "Tabulky a relační model"
readingTime: 3
standalone: true
teaser: "Bakaláři, e-shop i herní žebříček jsou uvnitř totéž: tabulky propojené klíči."
voice: universal
parent: null
diagram: relacni-model
core: true
recallQ: "Jak je postavená tabulka evidence dat a k čemu slouží klíč?"
recallA: "Řádek = jeden záznam (jedna věc), sloupec = jedna vlastnost. Klíč je jednoznačný identifikátor záznamu, přes který se tabulky propojují — místo opisování údajů se na ně odkazuje."
highlights:
  - "Tabulka: řádek = záznam, sloupec = vlastnost."
  - "rozdělit údaje do více tabulek a propojit je klíčem."
  - "Klíč je jednoznačný identifikátor záznamu"
lang: cs
lens: generic
visuality: text-first
depth: intro
formalism: none
lengthBand: standard
genre: explainer
status: accepted
concept: ch4-tabulky-a-relacni-model
state: core
carriers: prose|table|diagram
---

Založ si v hlavě knihovnu her, které půjčuješ kamarádům. Papírek „Kubovi jsem půjčil Zeldu" se ztratí. Evidence potřebuje řád — a řád v datovém světě znamená tabulku.

**Tabulka: řádek = záznam, sloupec = vlastnost.** Jeden řádek je jedna půjčka; sloupce říkají co, komu a kdy:

| id | hra | komu | od |
|---|---|---|---|
| 1 | Zelda | Kuba | 3. 5. |
| 2 | Mario Kart | Eliška | 10. 5. |

K tomu si stanovíš **pravidla pro záznamy**: datum vždy ve stejném formátu, jméno nesmí být prázdné, id se nikdy neopakuje. Zní to pedantsky, ale vzpomeň na čištění dat — pravidla při zápisu ti ušetří čištění potom.

Teď přijde ten chytrý kousek. Kubovi půjčuješ potřetí a potřetí k němu opisuješ telefon. Když si ho změní, opravuješ tři řádky — a jeden zapomeneš. Řešení: **rozdělit údaje do více tabulek a propojit je klíčem.** Uděláš tabulku *Kamarádi* (id, jméno, telefon) a v tabulce *Půjčky* místo jména jen odkaz: `kamarad_id = 1`. **Klíč je jednoznačný identifikátor záznamu** — číslo, které patří právě jednomu kamarádovi. Údaj bydlí na jednom místě, všude jinde se na něj jen ukazuje.

Tomuhle uspořádání se říká **relační model** a je to nejrozšířenější způsob ukládání strukturovaných dat na světě. Bakaláři? Tabulky žáků, předmětů a známek propojené klíči. E-shop? Tabulky zboží, zákazníků a objednávek. Herní žebříček? Hráči a skóre. Skoro každá appka, kterou znáš, má vzadu relační databázi — a ptá se jí jazykem SQL, česky zhruba: „vyber všechny půjčky, kde kamarad_id je 1".

**Zkus to!** Navrhni tabulky pro školní knihovnu: co bude v tabulce *Knihy*, co v tabulce *Čtenáři* a jak je propojí tabulka *Výpůjčky*? Urči klíče a dvě pravidla pro zápis (např. formát data, povinné sloupce).

> **Věděl/a jsi?** Relační model vymyslel matematik Edgar Codd v roce 1970 — je starší než internet pro veřejnost, a přesto na něm dodnes běží banky, školy i e-shopy. Dobré abstrakce vydrží.

Data máš sesbíraná, čistá a uložená. Zbývá je ukázat světu tak, aby jim rozuměl — a nenechat se přitom (ani nikoho jiného) oklamat grafem.
