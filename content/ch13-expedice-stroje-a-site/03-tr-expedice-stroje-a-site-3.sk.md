---
id: expedice-stroje-a-site-3-sk
translationOf: expedice-stroje-a-site-3
lang: sk
type: spine
title: "Rozbor: kade ide balíček cez oceán"
readingTime: 1
standalone: false
teaser: "Takto by mohol vyzerať výpis cesty z Prahy k serveru vo Washingtone (zjednodušený): | Skok | Čas | Router | |---|---|---| | 1 | 1 ms | 192.168.1.1 (domáci rout…"
voice: universal
parent: null
diagram: null
core: false
lens: generic
visuality: text-first
depth: standard
formalism: none
lengthBand: standard
genre: explainer
status: accepted
concept: expedice-stroje-a-site-3
conceptTitle: "Rozbor: kade ide balíček cez oceán"
objective: "Takto by mohol vyzerať výpis cesty z Prahy k serveru vo Washingtone (zjednodušený): | Skok | Čas | Router | |---|---|---| | 1 | 1 ms | 192.168.1.1 (domáci rout…"
state: edited
carriers: prose|table
---

**🔍 Rozbor** · krok 3 z 5 · [Internet na chate](#expedice-stroje-a-site-sk)

Takto by mohol vyzerať výpis cesty z Prahy k serveru vo Washingtone (zjednodušený):

| Skok | Čas | Router |
|---|---|---|
| 1 | 1 ms | 192.168.1.1 (domáci router) |
| 2 | 8 ms | router poskytovateľa |
| 3 | 9 ms | uzol Praha |
| 4 | 17 ms | Frankfurt |
| 5 | * * * | (bez odpovede) |
| 6 | 24 ms | Londýn |
| 7 | 98 ms | New York |
| 8 | 96 ms | Washington |
| 9 | 99 ms | cieľový server |

Časy sú celý ping: tam aj späť.

**Rozober výpis:**

1. Medzi ktorými skokmi balíček preletel Atlantik? Koľko kilometrov vlákna zodpovedá tomu skoku v čase, keď 1 ms pingu je asi 100 km kábla?
2. Skok 5 nič nevrátil. Je tá cesta prerušená? Ako to spoznáš z ďalších riadkov?
3. Skok 8 je rýchlejší než skok 7, hoci je ďalej. Ako je to možné?
4. Prečo má prvý riadok adresu začínajúcu 192.168? Uvidí ju niekto na internete?

:::reveal 🔑 Riešenie
1. Medzi 6 a 7: 74 ms, teda asi 7 400 km vlákna. Vzdušnou čiarou z Londýna do New Yorku je to asi 5 600 km, kábel je dlhší.
2. Nie je, ďalšie skoky odpovedajú. Ten router len neodpovedá na tento druh otázky.
3. Každý router odpovedá traceroutu, až keď má čas. Meria sa odpoveď routera, nie priamo cesta.
4. Je to súkromná adresa domácej siete. Domáci router ju na internete schová za svoju verejnú adresu.
:::

**Ďalší krok:** [Partia: tvoj kód na vesmírnej stanici](#expedice-stroje-a-site-4-sk)
