---
id: vyzva-ai-doporucovac-sk
translationOf: vyzva-ai-doporucovac
lang: sk
type: challenge
title: "Odporúčaj ako sieť a nájdi video, ktoré nikto neuvidí"
level: 3
minutes: 35
readingTime: 2
standalone: true
teaser: "Feed v knihe ti odporúča podľa toho, čo sleduješ."
voice: universal
parent: null
diagram: null
core: false
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

Feed v knihe ti odporúča podľa toho, čo sleduješ. Veľké siete sa navyše pozerajú na ľudí, ktorí sú ti podobní. Vypočítaš to ručne, krok za krokom, a narazíš na video, ktoré tento algoritmus nikdy nikomu neukáže.

<!-- task -->

Kto čo dopozeral (✓):

| | V1 Minecraft stavba | V2 Futbalové triky | V3 Gitara pre začiatočníkov | V4 Pokus s raketou | V5 Speedrun | V6 Nové video (hodinu staré) |
|---|---|---|---|---|---|---|
| **ty** | ✓ | | | ✓ | ✓ | |
| A | ✓ | ✓ | | | ✓ | |
| B | | | ✓ | ✓ | | |
| C | ✓ | | ✓ | ✓ | ✓ | |
| D | | ✓ | ✓ | | | |

Pravidlo **podobných používateľov**: podobnosť s niekým = počet videí, ktoré máte dopozerané spoločne. Skóre videa, ktoré ešte nemáš za sebou, je súčet podobností všetkých, ktorí ho dopozerali.

1. Vypočítaj svoju podobnosť s A, B, C a D.
2. Vypočítaj skóre V2, V3 a V6. Ktoré dve videá ti sieť odporučí a v akom poradí?
3. V6 nahrala pred hodinou spolužiačka. Prečo ho toto pravidlo nikdy nikomu neodporučí, aj keby bolo skvelé? Navrhni úpravu. **Kritérium:** úprava musí dať šancu aj videu s nulou pozretí a väčšina feedu zostane podľa podobnosti.

<!-- hint -->

S používateľom C máš spoločné videá V1, V4 a V5, takže podobnosť 3.

<!-- hint -->

V3 dopozerali B, C aj D. Sčítaj ich podobnosti s tebou.

<!-- hint -->

Koľko ľudí dopozeralo V6? A ako by ho niekto mohol dopozerať, keď sa nikomu neukáže?

<!-- solution -->

**1.** A: 2 (V1, V5). B: 1 (V4). C: 3 (V1, V4, V5). D: 0.

**2.** V3: B 1 + C 3 + D 0 = **4**. V2: A 2 + D 0 = **2**. V6: **0**. Odporúčanie: najprv V3 (gitara), potom V2 (futbal). Všimni si: gitaru nikdy nehľadáš. Sieť ti ju ponúkne len preto, že ju majú radi ľudia s podobným vkusom.

**3.** V6 nikto nedopozeral, takže má skóre 0 u každého používateľa. Keď sa nikomu neukáže, nikto ho nedopozerá a skóre zostane 0 navždy. To je **studený štart** a zároveň spätná slučka. Správna úprava splní kritérium, napríklad: „Každé 5. miesto vo feede dostane náhodné video mladšie ako jeden deň.“ Alebo: „Nové video dostane na začiatok skóre ako priemerné video, kým nezíska prvých 50 pozretí.“ Obe fungujú s nulou pozretí a 4 z 5 miest zostanú podľa podobnosti.

<!-- more -->

Používateľ C dopozerá takmer všetko, a tak vychádza podobný každému. Skús férovejšiu mieru: počet spoločných videí delený počtom videí, ktoré má dopozerané aspoň jeden z vás. Zmení sa poradie? Dilema „ukázať istotu, alebo skúsiť niečo nové“ má v informatike meno **prieskum, alebo využitie** (anglicky explore vs. exploit). Vymysli, koľko percent feedu dostane prieskum v tvojom návrhu, a obháj to. Prečo to sieti zarobí a prečo tebe?
