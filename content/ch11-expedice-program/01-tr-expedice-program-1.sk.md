---
id: expedice-program-1-sk
translationOf: expedice-program-1
lang: sk
type: spine
title: "Dielňa: prvý program za 30 minút"
readingTime: 1
standalone: false
teaser: "Thonny je editor Pythonu pre začiatočníkov, zadarmo pre Windows, macOS aj Linux."
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
concept: expedice-program-1
conceptTitle: "Dielňa: prvý program za 30 minút"
objective: "Thonny je editor Pythonu pre začiatočníkov, zadarmo pre Windows, macOS aj Linux."
state: edited
carriers: prose|code
---

**🛠 Dielňa** · krok 1 z 5 · [Dvanásť hviezd](#expedice-program-sk)

**Thonny** je editor Pythonu pre začiatočníkov, zadarmo pre Windows, macOS aj Linux. Stiahneš ho z [thonny.org](https://thonny.org/), inštaláciu schvaľuje rodič. Keď nemôžeš nič inštalovať, použi v prehliadači [Python Tutor](https://pythontutor.com/), bez účtu.

1. **(5 minút)** Spusti Thonny. Hore je editor, dole konzola. Do konzoly napíš `2 + 3` a Enter. Python odpovie 5.
2. **(10 minút)** Do editora napíš:
```
meno = input("Ako sa voláš? ")
dni = int(input("Koľko dní zostáva do Vianoc? "))
print("Ahoj,", meno)
print("To je", dni * 24, "hodín.")
```
Ulož ako `advent.py` a spusti klávesom F5. Vidíš vstup, spracovanie aj výstup.
3. **(5 minút)** Zapni **View → Variables** a spusti program znova. Sleduj, ako sa plnia škatuľky.
4. **(10 minút)** Spusti ladenie: **Ctrl+F5**, potom stláčaj **F7**. Thonny ukáže každý malý krok, aj to, ako počíta `dni * 24`. Teraz schválne zmaž `int(` a jednu zátvorku `)` a zadaj 3. Program nespadne, ale vypíše „333333…“. V `dni` je teraz text a text krát 24 sa zopakuje dvadsaťštyrikrát. Takej chybe sa hovorí **logická**: program beží, len robí niečo iné, než chceš.

Hotovo máš, keď program funguje a vieš ho krokovať.

**Ďalší krok:** [Výzva: teplomer na chate](#expedice-program-2-sk)
