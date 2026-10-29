---
id: expedice-stroje-a-site-3
type: spine
title: "Rozbor: kudy jede balíček přes oceán"
readingTime: 1
standalone: false
teaser: "Takhle by mohl vypadat výpis cesty z Prahy k serveru ve Washingtonu (zjednodušený): | Skok | Čas | Router | |---|---|---| | 1 | 1 ms | 192.168.1.1 (domácí rout…"
voice: universal
parent: null
diagram: null
core: false
lang: cs
lens: generic
visuality: text-first
depth: standard
formalism: none
lengthBand: standard
genre: explainer
status: accepted
concept: expedice-stroje-a-site-3
conceptTitle: "Rozbor: kudy jede balíček přes oceán"
state: edited
carriers: prose|table
---

**🔍 Rozbor** · krok 3 z 5 · [Internet na chatě](#expedice-stroje-a-site)

Takhle by mohl vypadat výpis cesty z Prahy k serveru ve Washingtonu (zjednodušený):

| Skok | Čas | Router |
|---|---|---|
| 1 | 1 ms | 192.168.1.1 (domácí router) |
| 2 | 8 ms | router poskytovatele |
| 3 | 9 ms | uzel Praha |
| 4 | 17 ms | Frankfurt |
| 5 | * * * | (bez odpovědi) |
| 6 | 24 ms | Londýn |
| 7 | 98 ms | New York |
| 8 | 96 ms | Washington |
| 9 | 99 ms | cílový server |

Časy jsou celý ping: tam i zpátky.

**Rozeber výpis:**

1. Mezi kterými skoky balíček přeletěl Atlantik? Kolik kilometrů vlákna odpovídá tomu skoku v čase, když 1 ms pingu je asi 100 km kabelu?
2. Skok 5 nic nevrátil. Je ta cesta přerušená? Jak to poznáš z dalších řádků?
3. Skok 8 je rychlejší než skok 7, přestože je dál. Jak je to možné?
4. Proč má první řádek adresu začínající 192.168? Uvidí ji někdo na internetu?

:::reveal 🔑 Řešení
1. Mezi 6 a 7: 74 ms, tedy asi 7 400 km vlákna. Vzdušnou čarou z Londýna do New Yorku je to asi 5 600 km, kabel je delší.
2. Není, další skoky odpovídají. Ten router jen neodpovídá na tenhle druh dotazu.
3. Každý router odpovídá traceroutu, až má čas. Měří se odpověď routeru, ne přímo cesta.
4. Je to soukromá adresa domácí sítě. Domácí router ji na internetu schová za svou veřejnou adresu.
:::

**Další krok:** [Parta: tvůj kód na vesmírné stanici](#expedice-stroje-a-site-4)
