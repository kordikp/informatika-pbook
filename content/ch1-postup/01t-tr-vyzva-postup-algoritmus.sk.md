---
id: vyzva-postup-algoritmus-sk
translationOf: vyzva-postup-algoritmus
lang: sk
type: challenge
title: "Falošná minca na dve váženia"
level: 3
minutes: 30
readingTime: 2
standalone: true
teaser: "Ondra má v krabici 9 rovnako vyzerajúcich mincí."
voice: universal
parent: null
diagram: null
core: false
status: accepted
concept: algoritmus
state: edited
lens: generic
visuality: text-first
depth: standard
formalism: light
lengthBand: standard
carriers: prose|formula
---

Ondra má v krabici 9 rovnako vyzerajúcich mincí. Jedna je falošná a je o kúsok ľahšia. Máš rovnoramennú váhu bez závaží a smieš vážiť len dvakrát. Dá sa to? A prečo to nejde jedným vážením?

<!-- task -->

Napíš algoritmus pre robota, ktorý vie len tri veci: **položiť vybrané mince na ľavú a pravú misku**, **prečítať výsledok** (vľavo ťažšie, vpravo ťažšie, rovnováha) a **ukázať na jednu mincu**.

1. Algoritmus musí nájsť falošnú mincu **pre každú** z 9 možností, nielen pre tú, ktorú si práve predstavuješ. Zapíš ho ako **rozhodovací strom**: každé váženie je rázcestie s tromi vetvami, na konci každej vetvy je jedna minca.
2. Dokáž, že **jedno váženie nestačí**, nech mince rozdelíš akokoľvek.
3. Koľko mincí najviac dokážeš rozlíšiť na **tri** váženia? Zdôvodni.

**Kritérium úspechu:** strom má 9 koncov, každý s inou mincou, a žiadna cesta stromom nemá viac než dve váženia. Dôkaz v bode 2 a 3 stojí na počítaní, nie na skúšaní.

<!-- hint -->

Váha nemá dva výsledky, ale tri. Rovnováha je tiež informácia.

<!-- hint -->

Neváž polovicu proti polovici. Rozdeľ mince na tri kôpky.

<!-- hint -->

Každé váženie rozdelí zvyšné možnosti na tri skupiny. Koľko rôznych koncov môže mať strom s dvoma poschodiami?

<!-- solution -->

**Algoritmus:** rozdeľ mince na kôpky A = {1, 2, 3}, B = {4, 5, 6}, C = {7, 8, 9}. Polož A vľavo, B vpravo.
- Vľavo ľahšie: falošná je v A. Vpravo ľahšie: je v B. Rovnováha: je v C.
- Z vybranej trojice polož prvú mincu vľavo a druhú vpravo. Ľahšia strana ukazuje falošnú mincu. Pri rovnováhe je falošná tá tretia.

**Prečo nestačí jedno váženie:** váženie má len 3 možné výsledky, ale možností je 9. Tri výsledky nemôžu ukázať na deväť rôznych mincí.

**Tri váženia:** strom s tromi poschodiami má najviac 3 × 3 × 3 = **27** koncov, takže zvládneš 27 mincí (kôpky po 9, potom po 3, potom po 1). Všeobecne $$k \text{ vážení} \Rightarrow 3^k \text{ mincí}.$$ Rovnaká úvaha ako pri hľadaní polením, len sa delí na tretiny.

<!-- more -->

Ťažšia verzia: 12 mincí, jedna falošná, ale **nevieš, či je ľahšia, alebo ťažšia**. Tri váženia stačia. Skôr než začneš, spočítaj možnosti: 12 mincí × 2 varianty = 24 prípadov a 27 koncov stromu. Zmestí sa to, ale tesne, takže prvé váženie musí byť múdre. Skús 4 proti 4.
