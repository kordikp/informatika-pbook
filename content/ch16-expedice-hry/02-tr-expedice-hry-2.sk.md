---
id: expedice-hry-2-sk
translationOf: expedice-hry-2
lang: sk
type: spine
title: "🛠️ Prvá hra v Godote za 30 minút"
readingTime: 1
standalone: false
teaser: "Godot je profesionálny herný engine zadarmo a bez účtu."
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
conceptTitle: "🛠️ Prvá hra v Godote za 30 minút"
objective: "Godot je profesionálny herný engine zadarmo a bez účtu."
state: edited
carriers: prose
---

**🛠 Dielňa** · krok 2 z 5 · [Víkend, keď vznikla hra](#expedice-hry-sk)

[Godot](https://godotengine.org/) je profesionálny herný engine zadarmo a bez účtu. Program v ňom píšeš jazykom GDScript, ktorý sa podobá na Python. Ak je pre teba GDScript nový, prejdi si najprv pár lekcií [Learn GDScript From Zero](https://gdquest.itch.io/learn-godot-gdscript) (po anglicky, zadarmo).

**0.–5. minúta.** Stiahni Godot zo stránky projektu (inštaláciu a stiahnutie urob s vedomím rodiča) a založ nový projekt.

**5.–12. minúta.** Vytvor 2D scénu. Hlavný uzol bude `CharacterBody2D`, to je hráč. Pridaj mu dva podriadené uzly: `Sprite2D` (do vlastnosti Texture pretiahni súbor `icon.svg`) a `CollisionShape2D` s obdĺžnikom. Obdĺžnik je hitbox, rovnako ako rytier z tejto knihy.

**12.–17. minúta.** Klikni na hráča a pripoj skript. Zvoľ šablónu *Basic Movement*. Godot vloží hotový pohyb so skokom. Nájdi v ňom `_physics_process(delta)`: hernú slučku s pevným krokom fyziky.

**17.–22. minúta.** Pridaj zem: `StaticBody2D` s `CollisionShape2D` ako dlhým obdĺžnikom. Spusti hru klávesom F5 a vyber túto scénu ako hlavnú. Šípky behajú, medzerník skáče.

**22.–30. minúta.** Pridaj mincu nad zem: `Area2D` s vlastným obrázkom, tvarom a prázdnym skriptom. Na karte *Node* pripoj signál `body_entered` a do vzniknutej funkcie napíš `queue_free()`. Minca zmizne, keď do nej hráč vstúpi.

**Bonus:** nájdi v šablóne podmienku `is_on_floor()`. Pridaj kojotí čas z výzvy „Skok, ktorý odpúšťa“: skok povoľ aj 0,1 s po zídení z hrany.

Keď sa niečo nedarí, hľadaj v [dokumentácii Godotu](https://docs.godotengine.org).

**Ďalší krok:** [🤝 Jam, ku ktorému sa môžeš pridať](#expedice-hry-3-sk)
