---
id: svet-roboti-ai-se-uci-z-dat-hu
translationOf: svet-roboti-ai-se-uci-z-dat
lang: hu
type: spine
title: "Tanítsd be a micro:bitet a saját mozdulataidra"
readingTime: 1
standalone: true
teaser: "Senki sem írt a micro:bitnek olyan szabályt, hogy „ez az integetés”. Magától tanulja meg, a te példáidból."
voice: universal
parent: null
diagram: uceni-z-dat-hu
core: false
recallQ: "Egy főleg világos bőrön tanított arcfelismerő modell hibázik a sötét bőrnél. Miért?"
recallA: "Azokból az adatokból tanulta meg a mintázatokat, amelyeket kapott. Sötét bőrt alig látott bennük, ezért rosszabbul ismeri fel. A hiba az adatokban van."
lens: roboti
visuality: balanced
depth: intro
formalism: none
lengthBand: standard
genre: explainer
status: accepted
concept: ai-se-uci-z-dat
state: edited
highlights:
  - "MI = olyan szoftver, amely példákból tanul, nem kézzel írt szabályokból"
  - "Tanítás és tesztelés új adatokon"
  - "Torzítás: a hiányzó vagy egyoldalú adatok hibás vagy igazságtalan eredményekhez vezetnek"
carriers: prose|diagram
---

Senki sem írt a micro:bitnek olyan szabályt, hogy „ez az integetés”. Magától tanulja meg, a te példáidból.

A **CreateAI** (createai.microbit.org) eszközben mozdulatpéldákat rögzítesz a micro:bitnek: tíz integetést, tíz tapsot, tíz pillanatot, amikor csak állsz. A gyorsulásmérő mindegyiknél megméri, hogyan mozgott a panel. A példákból aztán a **modell** **mintázatokat** talál: az integetésnek oda-vissza ritmusa van, a tapsnak egyetlen éles lökése.

Ez a mesterséges intelligencia: **olyan szoftver, amely példákból tanul**, nem kézzel írt szabályokból. Szabályt írni az integetésre szinte lehetetlen lenne. Tíz példát megmutatni könnyű.

Aztán jön a **tesztelés új adatokon**. Azt a modellt, amely téged látott integetni, próbáld ki egy barátodon. Ő másképp integet, gyorsabban vagy bal kézzel, és a modell téved. Ilyen integetést a tanítóadatokban soha nem látott.

Ez a **torzítás**: ami hiányzik az adatokból, azt a modell nem tudja. Ha csak magadon tanítod be, jobb kezedben a micro:bittel, másoknál rosszabbul működik. A javítás az adatokban van: adj hozzá példákat több embertől, mindkét kézzel, gyorsakat és lassúakat is. A nagy MI-rendszerek is ugyanígy hibáznak. Az a modell, amely főleg egyféle arcot látott, a többit rosszabbul ismeri fel.

**Próbáld ki!** Taníts be a CreateAI-ban két mozdulatot (elég hozzá egy micro:bit és egy számítógép). Aztán hagyd, hogy három osztálytársad kipróbálja. Kinél téved a legtöbbet, és miért?

**Végigjártad a robotok egész világát. Most jön a küldetés:** → [Építs kütyüt](#mission-svet-roboti)
