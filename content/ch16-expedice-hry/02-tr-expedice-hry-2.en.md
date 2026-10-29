---
id: expedice-hry-2-en
translationOf: expedice-hry-2
lang: en
type: spine
title: "🛠️ Your first Godot game in 30 minutes"
readingTime: 1
standalone: false
teaser: "Godot is a professional game engine, free and with no account."
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
conceptTitle: "🛠️ Your first Godot game in 30 minutes"
objective: "Godot is a professional game engine, free and with no account."
state: edited
carriers: prose
---

**🛠 Workshop** · step 2 of 5 · [The weekend a game was made](#expedice-hry-en)

[Godot](https://godotengine.org/) is a professional game engine, free and with no account. You write programs in it in GDScript, a language similar to Python. If GDScript is new to you, first go through a few lessons of [Learn GDScript From Zero](https://gdquest.itch.io/learn-godot-gdscript) (in English, free).

**Minutes 0–5.** Download Godot from the project’s page (download and install it with your parent’s knowledge) and create a new project.

**Minutes 5–12.** Create a 2D scene. The main node will be `CharacterBody2D`, that is the player. Give it two child nodes: `Sprite2D` (drag the file `icon.svg` into the Texture property) and `CollisionShape2D` with a rectangle. The rectangle is the hitbox, just like the knight in this book.

**Minutes 12–17.** Click the player and attach a script. Choose the *Basic Movement* template. Godot inserts ready-made movement with jumping. Find `_physics_process(delta)` in it: the game loop with a fixed physics step.

**Minutes 17–22.** Add the ground: `StaticBody2D` with `CollisionShape2D` as a long rectangle. Run the game with the F5 key and choose this scene as the main one. The arrow keys run, the space bar jumps.

**Minutes 22–30.** Add a coin above the ground: `Area2D` with its own image, shape and an empty script. In the *Node* tab, connect the `body_entered` signal and in the new function write `queue_free()`. The coin disappears when the player walks into it.

**Bonus:** find the condition `is_on_floor()` in the template. Add coyote time from the challenge “The forgiving jump”: allow a jump even 0.1 s after running off an edge.

If something doesn’t work, look in the [Godot documentation](https://docs.godotengine.org).

**Next step:** [🤝 A jam you can join](#expedice-hry-3-en)
