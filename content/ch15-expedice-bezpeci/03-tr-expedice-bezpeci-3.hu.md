---
id: expedice-bezpeci-3-hu
translationOf: expedice-bezpeci-3
lang: hu
type: spine
title: "A jelszó, amit senki sem lát"
readingTime: 2
standalone: false
teaser: "A Have I Been Pwned szolgáltatás nyilvános adatszivárgásokból gyűjti a jelszavakat, több százmillió jelszót."
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
concept: expedice-bezpeci-3
conceptTitle: "A jelszó, amit senki sem lát"
objective: "A Have I Been Pwned szolgáltatás nyilvános adatszivárgásokból gyűjti a jelszavakat, több százmillió jelszót."
state: edited
carriers: prose
---

**🔍 Elemzés** · 3. lépés / 5 · [Zászló hadművelet](#expedice-bezpeci-hu)

A **Have I Been Pwned** szolgáltatás nyilvános adatszivárgásokból gyűjti a jelszavakat, több százmillió jelszót. Meg tudja mondani, hogy a te jelszavad köztük van-e. És közben soha nem kapja meg. Hogyan?

Az elemzést maga a szolgáltatás szerzője, Troy Hunt írta: [Understanding Have I Been Pwned's Use of SHA-1 and k-Anonymity](https://www.troyhunt.com/understanding-have-i-been-pwneds-use-of-sha-1-and-k-anonymity/) (angolul, a fordító segít).

**Az eljárás röviden:**

1. A számítógéped a jelszóból kiszámolja az SHA-1 **lenyomatot**: 40 karakter a 0–9 és A–F jelekből. A `P@ssw0rd` gyakorló jelszóból olyan lenyomat jön ki, amely így kezdődik: `21BD1`.
2. A szerverre **csak a lenyomat első 5 karakterét** küldi el.
3. A szerver visszaküldi az összes kiszivárgott lenyomatot, amely így kezdődik. Több száz van belőlük.
4. A maradékot a számítógéped maga hasonlítja össze, helyben.

**Kérdések az elemzéshez:**

- **a)** Hány különböző 5 karakteres kezdet létezhet? Minden karakternek 16 lehetősége van.
- **b)** A szerver csak a `21BD1`-et ismeri. Miért nem elég ez neki ahhoz, hogy felismerje a jelszavadat?
- **c)** Mi romlana el, ha a teljes lenyomatot küldenék el?
- **d)** Miért nem jelenti a „nem található” eredmény azt, hogy a jelszó jó? Gondolj a `Vill4mos2013`-ra.

**Ellenőrizd:** a CyberChefben használd az **SHA1** műveletet a `P@ssw0rd`-re, és nézd meg, hogy a lenyomat tényleg 21BD1-gyel kezdődik.

:::reveal 🔑 Megoldás
- **a)** 16⁵ = 1 048 576 kezdet.
- **b)** Minden kezdethez több száz kiszivárgott lenyomat tartozik, és ráadásul számtalan jelszó, amely soha nem szivárgott ki. A szerver nem tudja, melyik a tiéd.
- **c)** A teljes lenyomatból a szerver, vagy bárki, aki lehallgatja a kapcsolatot, pontosan felismerné a jelszavadat, ha az valaha kiszivárgott.
- **d)** A lista csak a már kiszivárgott jelszavakat tartalmazza. Egy gyenge jelszót, amely még nem szivárgott ki, a támadó ugyanúgy kitalál a másodperc törtrésze alatt. Ezt a trükköt **k-anonimitásnak** hívják: a kérdésed elbújik több száz másik között. Ugyanez az ötlet védi a digitális lábnyom adatait is.
:::

**Következő lépés:** [Találd meg a versenyedet](#expedice-bezpeci-4-hu)
