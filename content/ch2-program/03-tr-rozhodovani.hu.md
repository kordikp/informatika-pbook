---
id: rozhodovani-hu
translationOf: rozhodovani
lang: hu
type: spine
title: "Döntés (feltétel)"
readingTime: 1
standalone: true
teaser: "A telefonod néhány üzenetet magától áttesz a spambe. Hogyan dönti el, melyiket?"
voice: universal
parent: null
diagram: rizeni-toku-hu
core: true
recallQ: "Mi történik a „különben” ággal, ha a feltétel teljesül?"
recallA: "Nem fut le. A ha / különben ágak közül mindig pontosan egy fut le."
lens: generic
visuality: balanced
depth: intro
formalism: none
lengthBand: tldr
genre: worked-example
status: accepted
concept: rozhodovani
conceptTitle: "Döntés (feltétel)"
objective: "A telefonod néhány üzenetet magától áttesz a spambe. Hogyan dönti el, melyiket?"
state: core
highlights:
  - "A feltétel értéke igaz vagy hamis"
  - "Ha–különben: pontosan egy ág fut le"
  - "Feltételek összekapcsolása (és, vagy, nem)"
carriers: prose|diagram
---

A telefonod néhány üzenetet magától áttesz a spambe. Hogyan dönti el, melyiket?

A program **tud dönteni**. Ha egy **feltétel** teljesül, az egyiket csinálja, **különben** a másikat. A feltétel olyan kérdés, amelyre csak **igen** vagy **nem** a válasz: kisebb az életkor 15-nél?

Az uszoda pénztára kedvezményes és teljes árú jegyre válogatja az embereket. Kedvezményt kapnak a **15 év alatti** gyerekek és a **65 éves és idősebb** emberek. Egy feltétel nem elég, kettő kell: *ha életkor < 15 **vagy** életkor ≥ 65, akkor kedvezmény, különben teljes ár.* Válogasd szét a sort a szöveg alatti minijátékban. Figyelj Tomášra (15) és Karelre (65).

A **ha** és a **különben** ágak közül **mindig pontosan egy** fut le. Egy feltétel nem teljesülhet „egy kicsit”: vagy igaz, vagy nem.

A feltételeket **össze lehet kapcsolni**: **és** (mindkettőnek teljesülnie kell), **vagy** (egy is elég), **nem** (megfordítja az igazságot). A kedvezményhez „vagy” kellett: 15 év alatt **vagy** legalább 65.

Figyeld meg a határokat, a 15-öt és a 65-öt. Pontosan ott hibáznak a legtöbben, ezért teszteléskor mindig próbáld ki őket.

**Próbáld ki!** Írd le „ha…, akkor…, különben…” formában, hogyan döntesz reggel: ha felelés lesz, ismételj útközben; különben ha esik, vidd a kabátot; különben nyugi. Aztán próbáld ki ugyanezt a kedvenc játékod egyik szabályával.

> **Vigyázz, gyakori tévedés:** „A program mindkét ágon végigmegy.” Mindig csak az egyiken. A feltétel vagy teljesül, vagy nem. „Egy kicsit” nem teljesülhet.

**Tovább:** A táblázat szűrője egy feltétel, amelyet minden sornak felteszünk: lejárt a kölcsönzés? Igen vagy nem. → [Táblázat: rendezett adatok](#c/tabulka-a-evidence)
