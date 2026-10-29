---
id: expedice-aplikace-2-hu
translationOf: expedice-aplikace-2
lang: hu
type: spine
title: "Az első app 30 perc alatt"
readingTime: 1
standalone: false
teaser: "Amire szükséged van: számítógép böngészővel, androidos mobil a MIT AI2 Companion appal és Google-fiók."
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
concept: expedice-aplikace-2
conceptTitle: "Az első app 30 perc alatt"
objective: "Amire szükséged van: számítógép böngészővel, androidos mobil a MIT AI2 Companion appal és Google-fiók."
state: edited
carriers: prose
---

**🛠 Műhely** · 2. lépés / 5 · [Appathon egy hétvége alatt](#expedice-aplikace-hu)

**Amire szükséged van:** számítógép böngészővel, androidos mobil a MIT AI2 Companion appal és Google-fiók. Még nem vagy 15 éves? Használj iskolai fiókot vagy olyat, amelyet a szülőd kezel.

1. Nyisd meg az [App Inventort](https://appinventor.mit.edu), kattints a Create Apps gombra, és hozz létre egy `Oddil` projektet.
2. Húzz a képernyőre két `TextBox` mezőt (ki fizetett, összeg), egy `Button` gombot „Hozzáadás” felirattal, egy `Label` címkét az összegnek és egy `ListView` listát a kiadásoknak.
3. Az összeg mezőjénél kapcsold be a tulajdonságok között a `NumbersOnly` beállítást. Az adatok első szabálya: számba nem lehet azt írni, hogy „száz”.
4. A Blocks részben hozz létre egy `kiadasok` változót üres listaként és egy `osszeg` változót 0 értékkel.
5. A „Hozzáadás” gomb megnyomásakor tedd a listába a „ki: összeg” szöveget, add hozzá az összeget az összeghez, és mutasd meg mindkettőt.
6. Csatlakoztasd a mobilt a Connect → AI Companion menüvel, és olvasd be a QR-kódot. A változásokat azonnal látni fogod.
7. **Próbáld elrontani:** üres összeg, nulla, 100 000 Kč. Adj hozzá feltételt, amely elutasítja az értelmetlen bemenetet, és kiírja, miért.
8. Adj hozzá egy `TinyDB` komponenst, és mentsd bele a listát, hogy az app bezárása után ne tűnjön el. Gondolj „Az app összeomlott, és magával vitte a szöveget” történetre.

**Akkor van kész, ha** az app túléli a bezárást, elutasítja az értelmetlen összeget, és az összeg egyezik a számológéppel.

**Következő lépés:** [Hány ember elég a teszthez](#expedice-aplikace-3-hu)
