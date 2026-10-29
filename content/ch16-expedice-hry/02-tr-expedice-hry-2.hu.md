---
id: expedice-hry-2-hu
translationOf: expedice-hry-2
lang: hu
type: spine
title: "🛠️ Első játék Godotban 30 perc alatt"
readingTime: 1
standalone: false
teaser: "A Godot ingyenes profi játékmotor, fiók nélkül."
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
concept: expedice-hry-2
conceptTitle: "🛠️ Első játék Godotban 30 perc alatt"
objective: "A Godot ingyenes profi játékmotor, fiók nélkül."
state: edited
carriers: prose
---

**🛠 Műhely** · 2. lépés / 5 · [A hétvége, amikor megszületett egy játék](#expedice-hry-hu)

A [Godot](https://godotengine.org/) ingyenes profi játékmotor, fiók nélkül. A programot GDScript nyelven írod benne, amely a Pythonra hasonlít. Ha a GDScript új neked, előbb végezz el néhány leckét a [Learn GDScript From Zero](https://gdquest.itch.io/learn-godot-gdscript) appban (angolul, ingyen).

**0–5. perc.** Töltsd le a Godotot a projekt oldaláról (a telepítést és a letöltést szülői tudtával végezd), és hozz létre egy új projektet.

**5–12. perc.** Hozz létre egy 2D jelenetet. A fő csomópont a `CharacterBody2D` lesz, ez a játékos. Adj hozzá két gyermek csomópontot: egy `Sprite2D`-t (a Texture tulajdonságba húzd be az `icon.svg` fájlt) és egy téglalap alakú `CollisionShape2D`-t. A téglalap a hitbox, ugyanúgy, mint a lovagnál ebben a könyvben.

**12–17. perc.** Kattints a játékosra, és csatolj hozzá egy szkriptet. Válaszd a *Basic Movement* sablont. A Godot beilleszti a kész mozgást ugrással együtt. Keresd meg benne a `_physics_process(delta)` függvényt: ez a játékciklus fix fizikai lépéssel.

**17–22. perc.** Adj hozzá talajt: egy `StaticBody2D`-t `CollisionShape2D`-vel, hosszú téglalapként. Indítsd el a játékot az F5 billentyűvel, és válaszd ki ezt a jelenetet főjelenetnek. A nyilakkal futsz, a szóközzel ugrasz.

**22–30. perc.** Tegyél egy érmét a talaj fölé: egy `Area2D`-t saját képpel, alakkal és üres szkripttel. A *Node* fülön kösd be a `body_entered` jelet, és a létrejött függvénybe írd be: `queue_free()`. Az érme eltűnik, amikor a játékos belelép.

**Bónusz:** keresd meg a sablonban az `is_on_floor()` feltételt. Add hozzá a prérifarkas-időt a „Megbocsátó ugrás” kihívásból: engedd az ugrást a szélről lecsúszás után még 0,1 s-ig.

Ha valami nem megy, keress a [Godot dokumentációjában](https://docs.godotengine.org).

**Következő lépés:** [🤝 Jam, amelyhez csatlakozhatsz](#expedice-hry-3-hu)
