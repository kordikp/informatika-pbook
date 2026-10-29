---
id: expedice-hry-2
type: spine
title: "🛠️ První hra v Godotu za 30 minut"
readingTime: 1
standalone: false
teaser: "Godot je profesionální herní engine zdarma a bez účtu."
voice: universal
parent: null
diagram: null
core: false
lang: cs
lens: generic
visuality: text-first
depth: standard
formalism: none
lengthBand: standard
genre: explainer
status: accepted
concept: expedice-hry-2
conceptTitle: "🛠️ První hra v Godotu za 30 minut"
state: edited
carriers: prose
---

**🛠 Dílna** · krok 2 z 5 · [Víkend, kdy vznikla hra](#expedice-hry)

[Godot](https://godotengine.org/) je profesionální herní engine zdarma a bez účtu. Program v něm píšeš jazykem GDScript, který se podobá Pythonu. Pokud je pro tebe GDScript nový, projdi si nejdřív pár lekcí [Learn GDScript From Zero](https://gdquest.itch.io/learn-godot-gdscript) (anglicky, zdarma).

**0.–5. minuta.** Stáhni Godot ze stránky projektu (instalaci a stažení proveď s vědomím rodiče) a založ nový projekt.

**5.–12. minuta.** Vytvoř 2D scénu. Hlavní uzel bude `CharacterBody2D`, to je hráč. Přidej mu dva podřízené uzly: `Sprite2D` (do vlastnosti Texture přetáhni soubor `icon.svg`) a `CollisionShape2D` s obdélníkem. Obdélník je hitbox, stejně jako rytíř z této knihy.

**12.–17. minuta.** Klikni na hráče a připoj skript. Zvol šablonu *Basic Movement*. Godot vloží hotový pohyb se skokem. Najdi v něm `_physics_process(delta)`: herní smyčku s pevným krokem fyziky.

**17.–22. minuta.** Přidej zem: `StaticBody2D` s `CollisionShape2D` jako dlouhým obdélníkem. Spusť hru klávesou F5 a vyber tuto scénu jako hlavní. Šipky běhají, mezerník skáče.

**22.–30. minuta.** Přidej minci nad zem: `Area2D` s vlastním obrázkem, tvarem a prázdným skriptem. V záložce *Node* připoj signál `body_entered` a do vzniklé funkce napiš `queue_free()`. Mince zmizí, když do ní hráč vstoupí.

**Bonus:** najdi v šabloně podmínku `is_on_floor()`. Přidej kojotí čas z výzvy „Skok, který odpouští“: skok povol i 0,1 s po sjetí z hrany.

Když se něco nedaří, hledej v [dokumentaci Godotu](https://docs.godotengine.org).

**Další krok:** [🤝 Jam, ke kterému se můžeš přidat](#expedice-hry-3)
