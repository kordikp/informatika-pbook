---
id: vyzva-stroje-a-site-cesta-dat
type: challenge
title: "Ping, který nemůže existovat"
level: 2
minutes: 25
readingTime: 2
standalone: true
teaser: "Hráč z Austrálie se na fóru chlubí: „Na pražský server mám ping 50 ms.“ Nikdo ho neviděl hrát, a přesto víš, že to není pravda."
voice: universal
parent: null
diagram: null
core: false
lang: cs
status: accepted
concept: cesta-dat
state: edited
lens: generic
visuality: text-first
depth: standard
formalism: none
lengthBand: standard
carriers: prose
---

Hráč z Austrálie se na fóru chlubí: „Na pražský server mám ping 50 ms.“ Nikdo ho neviděl hrát, a přesto víš, že to není pravda. Zpoždění na internetu totiž má spodní hranici a určuje ji fyzika.

<!-- task -->

Podklady: Praha a Sydney jsou od sebe vzdušnou čarou asi 16 000 km. Světlo letí ve vakuu 300 000 km/s, ve skleněném optickém vlákně asi 200 000 km/s. **Ping** je čas, za který balíček doletí k serveru a odpověď zpátky.

1. Spočítej nejmenší možný ping, kdyby optický kabel vedl přímo po povrchu Země.
2. Dokaž, že 50 ms je nemožné, i kdyby signál letěl rychlostí světla ve vakuu.
3. Skutečný ping z Prahy do Sydney bývá kolem 300 ms. Kam se ztrácí rozdíl? Uveď aspoň dva důvody.
4. Herní firma chce, aby hráči v Sydney měli ping pod 30 ms. Co musí udělat?

**Kritérium úspěchu:** výpočet v bodě 2 vyjde nad 50 ms, v bodě 3 jsou dva fyzikálně správné důvody a v bodě 4 řešení, které fyziku neobchází.

<!-- hint -->

Čas = dráha : rychlost. Ping je tam i zpátky, takže dráha je dvojnásobná.

<!-- hint -->

Pro důkaz dosaď nejrychlejší rychlost, jaká existuje. Když i tak vyjde víc než 50 ms, máš hotovo.

<!-- hint -->

Podívej se na mapu, kudy vedou kabely z Evropy do Austrálie: kolem Afriky nebo přes Suez, Indii a Singapur. A každý router na cestě musí balíček přijmout, přečíst adresu a poslat dál.

<!-- solution -->

1. Dráha 2 × 16 000 = 32 000 km. 32 000 : 200 000 = 0,16 s, tedy **160 ms**.
2. I ve vakuu: 32 000 : 300 000 ≈ 0,107 s = **107 ms**, a to je víc než 50 ms. Tvrzení je nemožné. (Bonus: i tunel skrz Zemi po přímce, asi 12 100 km, dá tam i zpátky 81 ms.)
3. Kabel nevede rovně, ale obchází pevniny po dně moře, takže je mnohem delší. Každý router balíček chvíli drží ve frontě, než ho pošle dál. A server potřebuje chvíli na výpočet odpovědi.
4. Postavit server **v Austrálii**, blízko hráčů. Rychlejší světlo si koupit nedá. Proto mají online hry servery po regionech a velké weby kopie po celém světě.

<!-- more -->

Změř si cestu vlastním počítačem: ve Windows napiš do příkazového řádku tracert a adresu webu, na Macu nebo v Linuxu traceroute. Uvidíš každý router a čas k němu. Najdeš skok, kde balíček přeletěl oceán? Pak zkus hru navíc „Kde se ztrácí ping“ a úrovně „Cesta sítí“ s podmořskými kabely.
