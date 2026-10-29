---
id: expedice-ai-2-hu
translationOf: expedice-ai-2
lang: hu
type: spine
title: "Műhely: az első modell 30 perc alatt"
readingTime: 1
standalone: false
teaser: "Az ablak előtti madarak nem várnak, ezért kezdd az asztalon lévő tárgyakkal."
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
concept: expedice-ai-2
conceptTitle: "Műhely: az első modell 30 perc alatt"
objective: "Az ablak előtti madarak nem várnak, ezért kezdd az asztalon lévő tárgyakkal."
state: edited
carriers: prose
---

**🛠 Műhely** · 2. lépés / 5 · [Modell a madáretetőnél](#expedice-ai-hu)

Az ablak előtti madarak nem várnak, ezért kezdd az asztalon lévő tárgyakkal. Használd a [Teachable Machine](https://teachablemachine.withgoogle.com/) oldalt (ingyenes, fiók nélkül, angolul).

1. **Get Started → Image Project → Standard image model.**
2. Hozz létre három osztályt, például *bögre*, *tolltartó*, *semmi*. A *semmi* osztály az üres asztal. Nélküle a modellnek mindig tippelnie kell valamit.
3. Minden osztályba tölts fel a kamerából legalább **40 képet**. Forgasd a tárgyat, változtasd a távolságot, kapcsold fel és le a lámpát.
4. Kattints a **Train Model** gombra, és várj.
5. **Teszt új adatokon:** vidd át a laptopot egy másik szobába, vagy vegyél elő egy másik bögrét. Minden osztályra csinálj 10 próbát, és írd be őket az előző lépés tévesztési mátrixába.
6. **Szándékosan rontsd el a modellt:** taníts be egy új változatot, amelyben a tolltartót csak fehér asztalon fotózod. Aztán tedd sötét anyagra. Mi történik? Írd fel. Ez a torzítás, amelyet most a saját kezeddel állítottál elő.

**Biztonságosan:** tárgyakat fotózz, ne osztálytársakat. Más ember arcát csak az ő beleegyezésével. A modellt szülő nélkül ne mentsd a Google Drive-ra.

Van micro:bited? Ugyanezt próbáld ki mozdulatokkal a [micro:bit CreateAI](https://createai.microbit.org/) oldalon: integetés, tapsolás, nyugalom.

**Következő lépés:** [Elemzés: 50 millió firka](#expedice-ai-3-hu)
