---
id: vyzva-ai-doporucovac
type: challenge
title: "Doporučuj jako síť a najdi video, které nikdo neuvidí"
level: 3
minutes: 35
readingTime: 2
standalone: true
teaser: "Feed v knize ti doporučuje podle toho, co sleduješ."
voice: universal
parent: null
diagram: null
core: false
lang: cs
status: accepted
concept: doporucovac
state: edited
lens: generic
visuality: text-first
depth: standard
formalism: none
lengthBand: standard
carriers: prose|table
---

Feed v knize ti doporučuje podle toho, co sleduješ. Velké sítě se navíc dívají na lidi, kteří jsou ti podobní. Spočítáš to ručně, krok za krokem, a narazíš na video, které tenhle algoritmus nikdy nikomu neukáže.

<!-- task -->

Kdo co dokoukal (✓):

| | V1 Minecraft stavba | V2 Fotbalové triky | V3 Kytara pro začátečníky | V4 Pokus s raketou | V5 Speedrun | V6 Nové video (hodinu staré) |
|---|---|---|---|---|---|---|
| **ty** | ✓ | | | ✓ | ✓ | |
| A | ✓ | ✓ | | | ✓ | |
| B | | | ✓ | ✓ | | |
| C | ✓ | | ✓ | ✓ | ✓ | |
| D | | ✓ | ✓ | | | |

Pravidlo **podobných uživatelů**: podobnost s někým = počet videí, která jste dokoukali oba. Skóre videa, které ještě nemáš za sebou, je součet podobností všech, kdo ho dokoukali.

1. Spočítej svou podobnost s A, B, C a D.
2. Spočítej skóre V2, V3 a V6. Která dvě videa ti síť doporučí a v jakém pořadí?
3. V6 nahrála před hodinou spolužačka. Proč ho tohle pravidlo nikdy nikomu nedoporučí, i kdyby bylo skvělé? Navrhni úpravu. **Kritérium:** úprava musí dát šanci i videu s nulou zhlédnutí a většina feedu zůstane podle podobnosti.

<!-- hint -->

S uživatelem C máš společná videa V1, V4 a V5, takže podobnost 3.

<!-- hint -->

V3 dokoukali B, C i D. Sečti jejich podobnosti s tebou.

<!-- hint -->

Kolik lidí dokoukalo V6? A jak by ho někdo mohl dokoukat, když se nikomu neukáže?

<!-- solution -->

**1.** A: 2 (V1, V5). B: 1 (V4). C: 3 (V1, V4, V5). D: 0.

**2.** V3: B 1 + C 3 + D 0 = **4**. V2: A 2 + D 0 = **2**. V6: **0**. Doporučení: nejdřív V3 (kytara), pak V2 (fotbal). Všimni si: kytaru jsi nikdy nehledalo tvoje ani jedno hledání. Síť ti ji nabídne jen proto, že ji mají rádi lidé s podobným vkusem.

**3.** V6 nikdo nedokoukal, takže má skóre 0 u každého uživatele. Když se nikomu neukáže, nikdo ho nedokouká a skóre zůstane 0 navždy. To je **studený start** a zároveň zpětná smyčka. Správná úprava splní kritérium, například: „Každé 5. místo ve feedu dostane náhodné video mladší než jeden den.“ Nebo: „Nové video dostane na začátek skóre jako průměrné video, dokud nesebere prvních 50 zhlédnutí.“ Obě fungují s nulou zhlédnutí a 4 z 5 míst zůstanou podle podobnosti.

<!-- more -->

Uživatel C dokoukává skoro všechno, a tak vychází podobný každému. Zkus férovější míru: počet společných videí děleno počtem videí, která dokoukal aspoň jeden z vás. Změní se pořadí? Dilema „ukázat jistotu, nebo zkusit něco nového“ má v informatice jméno **průzkum, nebo využití** (anglicky explore vs. exploit). Vymysli, kolik procent feedu dostane průzkum ve tvém návrhu, a obhaj to. Proč to síti vydělá, a proč tobě?
