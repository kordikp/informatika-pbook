---
id: vyzva-socialni-generativni-model
type: challenge
title: "Detektor, který se plete častěji, než se zdá"
level: 3
minutes: 25
readingTime: 2
standalone: true
teaser: "Nová appka slibuje: „Pozná 95 % deepfaků!“ Zní to skvěle."
voice: universal
parent: svet-socialni-generativni-model
diagram: null
core: false
lang: cs
status: accepted
concept: generativni-model
state: edited
lens: socialni
visuality: text-first
depth: standard
formalism: none
lengthBand: standard
carriers: prose
---

Nová appka slibuje: „Pozná 95 % deepfaků!“ Zní to skvěle. Jenže když ti označí video jako falešné, je to skoro jistě omyl. Jak je to možné? Spočítej to.

<!-- task -->

Ve feedu je **10 000 videí** a **100** z nich jsou deepfaky. Detektor:

- správně označí **95 %** deepfaků;
- omylem označí i **5 %** pravých videí.

1. Kolik videí detektor označí celkem? Jaká je šance, že označené video je opravdu deepfake?
2. Na kolik procent musí klesnout omyly u pravých videí, aby označené video bylo deepfake s pravděpodobností víc než 50 %? (Zachycených deepfaků je pořád 95.)
3. Označená videa ještě jednou prověříš jinou metodou, třeba hledáním nejstaršího výskytu. Ta je stejně dobrá (95 % a 5 %) a na prvním detektoru nezávislá. Jaká je teď šance, že video, které neprojde ani druhou kontrolou, je deepfake?

<!-- hint -->

Rozděl 10 000 videí na dvě skupiny: 100 deepfaků a 9 900 pravých. Každou spočítej zvlášť.

<!-- hint -->

Označených deepfaků je 95. Označených pravých videí musí být méně než 95. Kolik procent z 9 900 to je?

<!-- hint -->

Druhá kontrola dostane jen označená videa. Z 95 deepfaků zachytí 95 %, z omylem označených pravých videí propustí jako podezřelá 5 %.

<!-- solution -->

**1.** Deepfaky: 95 % ze 100 = 95. Pravá videa: 5 % z 9 900 = 495. Označeno celkem **590**. Opravdu falešných je 95 z 590, tedy asi **16 %**. Pravých videí je tolik, že i malé procento omylů přebije všechny zachycené deepfaky. Tomu se říká **chyba základní míry**.

**2.** Potřebuješ méně než 95 omylů z 9 900, tedy méně než **asi 0,96 %**, zhruba pod 1 %. Pětkrát přesnější detektor, než slibuje reklama.

**3.** Deepfaky: 95 % z 95 ≈ 90. Pravá videa: 5 % z 495 ≈ 25. Šance je 90 ze 115, asi **78 %**. Dvě nezávislé kontroly fungují mnohem líp než jedna slavná. Proto ověřovatelé nespoléhají na jeden nástroj, ale skládají důkazy: původ, nejstarší výskyt, místo, čas.

<!-- more -->

Vyzkoušej skutečný postup ověřovatelů: plugin InVID-WeVerify rozseká video na klíčové snímky a pustí je do zpětného vyhledávání obrázků. Je to přesně ta „druhá nezávislá kontrola“. Pak jdi do expedice „Ověřovací tým“, kde ho použiješ na virální video. A přemýšlej: kdyby deepfaků ve feedu bylo 1 z 10 místo 1 ze 100, jak by se výsledek úkolu 1 změnil?
