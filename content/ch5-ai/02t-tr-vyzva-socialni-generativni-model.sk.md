---
id: vyzva-socialni-generativni-model-sk
translationOf: vyzva-socialni-generativni-model
lang: sk
type: challenge
title: "Detektor, ktorý sa mýli častejšie, než sa zdá"
level: 3
minutes: 25
readingTime: 2
standalone: true
teaser: "Nová apka sľubuje: „Spozná 95 % deepfakov!“ Znie to skvele."
voice: universal
parent: svet-socialni-generativni-model-sk
diagram: null
core: false
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

Nová apka sľubuje: „Spozná 95 % deepfakov!“ Znie to skvele. Lenže keď ti označí video ako falošné, je to takmer isto omyl. Ako je to možné? Vypočítaj to.

<!-- task -->

Vo feede je **10 000 videí** a **100** z nich sú deepfaky. Detektor:

- správne označí **95 %** deepfakov;
- omylom označí aj **5 %** pravých videí.

1. Koľko videí detektor označí celkovo? Aká je šanca, že označené video je naozaj deepfake?
2. Na koľko percent musia klesnúť omyly pri pravých videách, aby označené video bolo deepfake s pravdepodobnosťou viac ako 50 %? (Zachytených deepfakov je stále 95.)
3. Označené videá ešte raz preveríš inou metódou, napríklad hľadaním najstaršieho výskytu. Tá je rovnako dobrá (95 % a 5 %) a od prvého detektora nezávislá. Aká je teraz šanca, že video, ktoré neprejde ani druhou kontrolou, je deepfake?

<!-- hint -->

Rozdeľ 10 000 videí na dve skupiny: 100 deepfakov a 9 900 pravých. Každú vypočítaj zvlášť.

<!-- hint -->

Označených deepfakov je 95. Označených pravých videí musí byť menej ako 95. Koľko percent z 9 900 to je?

<!-- hint -->

Druhá kontrola dostane len označené videá. Z 95 deepfakov zachytí 95 %, z omylom označených pravých videí prepustí ako podozrivé 5 %.

<!-- solution -->

**1.** Deepfaky: 95 % zo 100 = 95. Pravé videá: 5 % z 9 900 = 495. Označených spolu **590**. Naozaj falošných je 95 z 590, teda asi **16 %**. Pravých videí je toľko, že aj malé percento omylov prebije všetky zachytené deepfaky. Tomu sa hovorí **chyba základnej miery**.

**2.** Potrebuješ menej ako 95 omylov z 9 900, teda menej ako **asi 0,96 %**, zhruba pod 1 %. Päťkrát presnejší detektor, než sľubuje reklama.

**3.** Deepfaky: 95 % z 95 ≈ 90. Pravé videá: 5 % zo 495 ≈ 25. Šanca je 90 zo 115, asi **78 %**. Dve nezávislé kontroly fungujú oveľa lepšie ako jedna slávna. Preto overovatelia nespoliehajú na jeden nástroj, ale skladajú dôkazy: pôvod, najstarší výskyt, miesto, čas.

<!-- more -->

Vyskúšaj skutočný postup overovateľov: plugin InVID-WeVerify rozseká video na kľúčové snímky a pustí ich do spätného vyhľadávania obrázkov. Je to presne tá „druhá nezávislá kontrola“. Potom choď do expedície „Overovací tím“, kde ho použiješ na virálne video. A premýšľaj: keby deepfakov vo feede bolo 1 z 10 namiesto 1 zo 100, ako by sa výsledok úlohy 1 zmenil?
