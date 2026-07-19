---
id: ch1-api
type: spine
title: "API: jak si programy povídají"
readingTime: 2
standalone: true
teaser: "Appka počasí neměří počasí. Objedná si ho — přes API, jídelní lístek digitálního světa."
voice: universal
parent: null
diagram: api-cisnik
core: true
recallQ: "K čemu slouží API mezi dvěma programy?"
recallA: "Je to domluvené rozhraní: program si řekne, co chce, a dostane výsledek, aniž musí vědět, jak vzniká — jako když si z jídelního lístku objednáš jídlo bez znalosti kuchyně."
highlights:
  - "API je přesně takový jídelní lístek mezi dvěma programy."
  - "Přes API si appky půjčují schopnosti a data jiných služeb."
  - "API je domluvený jazyk téhle výměny"
lang: cs
lens: generic
visuality: text-first
depth: intro
formalism: none
lengthBand: standard
genre: explainer
status: accepted
concept: ch1-api
state: core
carriers: prose|diagram
---

V restauraci dostaneš jídelní lístek. Řekneš „jedničku bez cibule", a za chvíli máš jídlo na stole. Nemusíš vědět, jak se krájí, smaží a na jakém sporáku — kuchyň je tvoje černá skříňka. Lístek je domluva: tohle si můžeš objednat, takhle to dostaneš.

**API je přesně takový jídelní lístek mezi dvěma programy.** (Zkratka z anglického Application Programming Interface, rozhraní pro programování aplikací.) Jeden program si přes API řekne, co potřebuje, druhý mu vrátí výsledek — a ani jeden nemusí znát vnitřek toho druhého.

**Přes API si appky půjčují schopnosti a data jiných služeb.** Appka počasí žádné meteostanice nemá — pošle přes API dotaz „jaké je počasí v Brně?" serveru meteoslužby a dostane zpátky čísla. Rohlík ti ukazuje mapu doručení? Tu si přes API objednal od mapové služby. Přihlášení „přes Google" v cizí appce? Taky API. A když nějaká aplikace „umí AI", většinou to znamená, že přes API volá model běžící na cizím serveru.

Všimni si, jak to navazuje na předchozí sekce: appka (klient) posílá požadavek na server — jen místo celé stránky chce konkrétní službu nebo data. **API je domluvený jazyk téhle výměny:** přesně říká, jak se zeptat a v jakém tvaru přijde odpověď.

Proč je to geniální? Protože nikdo nemusí stavět všechno sám. Tvůrce appky poskládá hotové služby — mapy, platby, počasí, AI — a soustředí se na svůj nápad. Až budeš v kapitole o tvorbě aplikací něco stavět, uděláš to úplně stejně.

**Zkus to!** Otevři libovolnou oblíbenou appku a hraj si na detektiva: které údaje si vyrobila sama a které si nejspíš objednala přes API odjinud? (Nápověda u školních appek: mapa, předpověď počasí, přihlášení přes cizí účet — to všechno bývá objednávka z cizí kuchyně.)

> **Věděl/a jsi?** Když se řekne „appka má výpadek", často je zdravá — jen nefunguje API služby, na které spoléhá. Padne jedna velká platební nebo mapová služba a s ní zakolísají stovky aplikací po celém světě.

Tímhle máš kompletní základní mapu digitálního světa: hardware a software, data, síť, cloud — a API jako řeč, kterou se to celé domlouvá. Teď pojďme na to, jak informatik přemýšlí.
