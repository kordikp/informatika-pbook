---
id: vyzva-socialni-doporucovac
type: challenge
title: "Postav feed z čísel"
level: 3
minutes: 30
readingTime: 2
standalone: true
teaser: "Feed nečte myšlenky."
voice: universal
parent: svet-socialni-doporucovac
diagram: null
core: false
lang: cs
status: accepted
concept: doporucovac
state: edited
lens: socialni
visuality: text-first
depth: standard
formalism: light
lengthBand: deep
carriers: prose|table|formula
---

Feed nečte myšlenky. Počítá. Každé téma má skóre a další video dostane téma s nejvyšším číslem. Buď teď chvíli algoritmem ty.

<!-- task -->

Síť za tebe vede tuhle tabulku za jeden den:

| Téma | Zhlédnutí | Průměrně dokoukáno | Lajky | Sdílení | „Nemám zájem“ |
|---|---|---|---|---|---|
| Pejsci | 3 | 90 % | 1 | 1 | 0 |
| Fotbal | 4 | 40 % | 2 | 0 | 0 |
| Minecraft | 2 | 100 % | 0 | 0 | 0 |
| Vtipy | 5 | 30 % | 0 | 0 | 1 |
| Vaření | 1 | 80 % | 0 | 0 | 0 |

Skóre tématu se počítá takhle:

$$\text{skóre} = 10 \cdot \text{zhlédnutí} \cdot \text{dokoukáno} + 3 \cdot \text{lajky} + 5 \cdot \text{sdílení} - 15 \cdot \text{„Nemám zájem“}$$

(Dokoukáno piš jako desetinné číslo, 90 % = 0,9.)

1. Spočítej skóre všech pěti témat a seřaď je.
2. Kolik videí s Minecraftem musíš dokoukat celých (každé přidá jedno zhlédnutí se 100 %), aby Minecraft předběhl pejsky? A kolik klepnutí na „Nemám zájem“ shodí fotbal pod Minecraft?
3. Zítra má feed 10 míst a algoritmus je dá všechna vítězi. Vysvětli, proč se skóre ostatních témat pak už nikdy nezmění. Pak navrhni rozdělení 10 míst, které splní tři pravidla: aspoň 6 míst mají dvě nejlepší témata, každé téma se skóre nad 0 dostane aspoň 1 místo a 1 místo je průzkum úplně nového tématu.

<!-- hint -->

Pejsci: 10 · 3 · 0,9 = 27, k tomu 3 za lajk a 5 za sdílení, celkem 35. Stejně postupuj u ostatních.

<!-- hint -->

Jedno celé dokoukání přidá Minecraftu 10 bodů. Hledáš nejmenší počet videí, po kterém je skóre větší než 35, ne jen stejné.

<!-- hint -->

Síť se učí jen z videí, která ti ukáže. Co se stane s daty o fotbale, když ti žádný fotbal nepřijde?

<!-- solution -->

**1.** Pejsci 35, Fotbal 16 + 6 = 22, Minecraft 20, Vaření 8, Vtipy 15 − 15 = 0. Pořadí: Pejsci, Fotbal, Minecraft, Vaření, Vtipy.

**2.** Minecraft potřebuje **2 videa**: po jednom má 30 (pořád méně než 35), po dvou 40. Fotbalu stačí **1 klepnutí**: 22 − 15 = 7, to je méně než 20. Záporný signál váží víc než kladný, proto „Nemám zájem“ funguje tak rychle.

**3.** Když ti přijdou jen pejsci, o fotbale ani Minecraftu nevzniknou žádné nové řádky v tabulce. Jejich skóre zamrzne a pejsci rostou dál. To je **bublina**: smyčka, ve které algoritmus potvrzuje sám sebe. Vyhovující rozdělení je třeba: Pejsci 4, Fotbal 3, Minecraft 1, Vaření 1, průzkum 1 (4 + 3 = 7 ≥ 6, Vtipy mají 0 a nedostanou nic, součet 10). Správných řešení je víc: ověř si svoje podle tří pravidel. Skutečné sítě tomu říkají **průzkum versus využívání** (exploration a exploitation).

<!-- more -->

Postav si opravdový feed. Ve vizuální stavebnici SkyFeed pro Bluesky (s rodičem přes jeho účet) složíš filtr a řazení a uvidíš, co to udělá. Kdo chce číst kód, otevře startovací sadu bluesky-social/feed-generator na GitHubu: celý ukázkový feed je ve složce src/algos. A pak porovnej se zveřejněným algoritmem X z roku 2023, který řadí stejně, jen s tisíci signálů. Hra navíc „Krokuj feed“ tě nechá tenhle výpočet krokovat v kódu.
