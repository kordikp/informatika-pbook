---
id: ch4-worked-tabulky
type: spine
title: "Školní knihovna ve třech tabulkách"
readingTime: 2
standalone: true
teaser: "Sešit výpůjček se škrtá a ztrácí — navrhneme knihovně pořádnou evidenci, krok za krokem a s klíči."
voice: universal
parent: null
diagram: null
core: false
recallQ: "Jak je postavená tabulka evidence a k čemu v ní slouží klíč?"
recallA: "Řádek = jeden záznam, sloupec = jedna vlastnost. Klíč je jednoznačný identifikátor záznamu — ostatní tabulky se na něj odkazují, místo aby údaje opisovaly."
lang: cs
lens: generic
visuality: text-first
depth: intro
formalism: none
lengthBand: standard
genre: worked-example
concept: ch4-tabulky-a-relacni-model
state: edited
status: accepted
carriers: prose|table
---

Školní knihovna vede výpůjčky v sešitě: „Hobit — Novák — vrátí do…" Škrtance, ztracené řádky, dvě různá data u jedné knihy. Pojď jí navrhnout pořádnou evidenci — krok za krokem, jako návrhář databáze.

**1. Rozmysli, co evidujeme.** Tři druhy věcí: knihy, čtenáře a výpůjčky. Základní tah: **každý druh dostane vlastní tabulku**, aby se nic neopisovalo dokola.

**2. Tabulka Knihy.** Řádek = jedna kniha, sloupec = jedna její vlastnost. Hned první sloupec je `id` — klíč, číslo patřící právě jedné knize.

| id | nazev | autor | rok |
|---|---|---|---|
| 1 | Hobit | J. R. R. Tolkien | 1937 |
| 2 | Kytice | K. J. Erben | 1853 |

**3. Tabulka Čtenáři.** Stejný princip pro lidi.

| id | jmeno | trida |
|---|---|---|
| 1 | Eliška Malá | 8.A |
| 2 | Kuba Novák | 8.B |

**4. Tabulka Výpůjčky — ta chytrá.** Lákalo by tě psát „Hobit — Kuba Novák, 8.B". Jenže když Kuba přejde do 9.B, opravuješ všechny jeho řádky a jeden zapomeneš. Výpůjčka proto **nic neopisuje, jen se klíči odkazuje**:

| id | kniha_id | ctenar_id | od | vraceno |
|---|---|---|---|---|
| 1 | 1 | 2 | 3. 3. 2026 | 28. 3. 2026 |
| 2 | 2 | 1 | 10. 3. 2026 | — |

Druhý řádek čteš: knihu 2 (Kytice) má čtenářka 1 (Eliška Malá) od 10. 3. a ještě ji nevrátila.

**5. Urči klíče.** `id` je v každé tabulce jednoznačné — nikdy se neopakuje, ani po vyřazení knihy se nepoužije znovu. Sloupce `kniha_id` a `ctenar_id` jsou odkazy na klíče sousedních tabulek; právě ony drží tři tabulky pohromadě jako jednu evidenci.

**6. Stanov dvě pravidla zápisu.** Za prvé: datum vždy ve tvaru `10. 3. 2026` — žádné „před týdnem". Za druhé: `kniha_id` a `ctenar_id` nesmí být prázdné a musí ukazovat na existující řádek. Pravidla při zápisu jsou levnější než čištění dat potom.

Že to funguje, ověříš otázkou: „Co má půjčeno 8.A?" Projdeš Výpůjčky bez `vraceno`, přes `ctenar_id` zjistíš třídu, přes `kniha_id` název. Tři tabulky, jedna odpověď.

**Co sis odnesl:** Řádek je záznam, sloupec vlastnost. Každý údaj bydlí jen na jednom místě a ostatní tabulky se na něj odkazují klíčem — a dvě pravidla při zápisu ti ušetří hodiny čištění.
