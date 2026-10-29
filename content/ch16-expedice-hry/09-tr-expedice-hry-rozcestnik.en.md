---
id: expedice-hry-rozcestnik-en
translationOf: expedice-hry-rozcestnik
lang: en
type: spine
title: "Signpost: The world of games"
readingTime: 9
standalone: true
teaser: "Real tools, communities, competitions and projects where you can keep going."
voice: universal
parent: null
diagram: null
core: false
lens: generic
visuality: text-first
depth: standard
formalism: none
lengthBand: deep
genre: explainer
status: accepted
concept: expedice-hry-rozcestnik
conceptTitle: "Signpost: The world of games"
objective: "Real tools, communities, competitions and projects where you can keep going."
state: edited
carriers: prose
---

Real tools, communities, competitions and projects where you can keep going. This selection is from October 2026: rules, prices and dates change, so always check them on the website. Before you sign up anywhere, read the page [Safe in communities](#bezpecne-v-komunitach-en).

### 🛠 Tools

#### [MakeCode Arcade](https://arcade.makecode.com)

Microsoft’s editor for retro games in the browser: blocks, JavaScript and Python, sprite drawing, and the game runs right next to the code. The shortest bridge from Scratch: the same blocks, but with sprites, tile maps, collisions and switching to text code as well. It regularly runs game jams.

*free · no age limit, works without an account (the project is saved in the browser) · en; the interface is translated into several languages (check for Czech in the settings), guides in English*

**How to start:**

1. Open arcade.makecode.com and choose a new project.
2. In “on start”, put the player sprite and a block that controls it with the arrow keys.
3. Add “on game update every 1000 ms” with a falling object inside it.
4. Add an “overlaps” event, a score and lives. Share the game with the Share button, with no personal details in the title.

#### [GDevelop](https://gdevelop.io/game-makers)

An open engine for 2D and 3D games without writing code: the logic is built from “if… then…” events, and it runs in the browser and as an app. Events are exactly the conditions and actions from the “Decisions (conditions)” core. A finished game can be published with one click on gd.games, and advanced users add their own JavaScript.

*free, paid plans add cloud backups and other services · the app can be used without an account; the account for the cloud and publishing is created by a parent or with a parent · en; interface translated into many languages*

**How to start:**

1. Download the app or open the web version.
2. Start from the platformer template and go through its events.
3. Add a coin and the event “if the player touches the coin, add a point and delete the coin”.
4. Publish on gd.games together with a parent.

#### [Godot Engine](https://godotengine.org/)

A professional open game engine for 2D and 3D, currently version 4.7.2, with its own language GDScript, similar to Python. The next level after blocks: scenes, nodes, signals and the functions `_process(delta)` and `_physics_process(delta)`, where you’ll recognise the game loop from the book. Commercial games are made with it too.

*free, open source · no account, suitable from about 12 for those who can already handle Scratch · en; the editor and documentation have translations into other languages*

**How to start:**

1. First go through the Learn GDScript From Zero app (see resources).
2. Download Godot from the download page and create a 2D project.
3. Build a scene: a player (CharacterBody2D) and a coin (Area2D with a signal on entering).
4. In `_physics_process(delta)`, move the player by speed × delta.

#### [TIC-80](https://en.wikipedia.org/wiki/TIC-80)

An open “fantasy console”: a small imaginary computer with a resolution of 240 × 136 and an editor for code, sprites, maps and music in one window. Strict limits (a small palette, small sprites) are a creative challenge and show the “Everything is numbers” core exactly: a sprite is a grid of numbers. You write in Lua and other languages.

*free; the optional PRO edition costs about 10 USD, and you can also build it from the source code · no account, from 12 · en*

**How to start:**

1. Start TIC-80 and create a game with the `new` command.
2. Open the sprite editor and draw an 8 × 8 character.
3. In the code editor, change the function TIC(), which is called 60× per second: that is the game loop.
4. Add movement with conditions on the buttons.

#### [PICO-8](https://lexaloffle.itch.io/pico-8)

The most famous fantasy console: 128 × 128 pixels, 16 colours, Lua. The original version of the game Celeste was made on it. A huge community and thousands of games whose code you can open and read. The limits make you build small, finished games.

*paid, at least 15 USD; a cheaper alternative is the free TIC-80 · a parent handles buying and downloading · en*

**How to start:**

1. Agree on the purchase with a parent, or start on TIC-80.
2. Play a few games and look into their code in the editor.
3. Find the functions _update and _draw: that is the game loop split into calculating and drawing.
4. Build a one-screen game.

### 👥 Communities

#### [Global Game Jam Next (GGJ Next)](https://itch.io/jam/ggjnext2026)

*worldwide game jam for young people · free · en, the game can be in any language*

**Age:** ages 12–17 (official GGJ range)

**How to join:**

1. The jam runs roughly from November to March; the 2026 edition has finished, watch for the next one to be announced.
2. The best option is a site at a school or club, registered by a teacher or leader.
3. With no site nearby, you can jam virtually through itch.io; the account is created and managed by a parent or teacher.

> **Stay safe:** Use a nickname, with no name, school or photo. Talk only in the jam’s official channels and with your team, and show private messages from strangers to an adult. Don’t download anything from strangers’ links and don’t pay anywhere.

#### [MakeCode Arcade game jams](https://arcade.makecode.com/gamejam/all)

*regular themed jams and a forum · free · en*

**Age:** no limit for creating; create a forum account with a parent

**How to join:**

1. On the jams page, look through past themes (sport, heist, cosy games).
2. New themes are announced on the MakeCode forum; reading doesn’t need an account.
3. Do submissions and forum posts with a parent or through a parent’s account.

> **Stay safe:** Your name and school must not be in the game’s title or your profile. On the forum, write only about games and don’t give anyone your contact details. Anyone who invites you elsewhere, to another app or a call, is a reason to stop replying and tell an adult.

#### [A studio on Scratch](https://scratch.mit.edu)

*moderated community · free · cs, sk, hu, en and many more*

**Age:** for all ages; younger children enter a parent’s e-mail when registering

**How to join:**

1. Create a studio for your crew or class and announce your own mini jam with a theme and a deadline.
2. Add games to studios with game challenges.
3. Comment specifically: what you enjoyed and one thing to improve.

> **Stay safe:** A nickname without your name or age. Follow the Scratch community guidelines and report inappropriate comments with the button. No links out of Scratch and no personal information in projects.

#### [Godot Forum](https://forum.godotengine.org)

*the engine’s official community · free · en*

**Age:** account according to the forum’s terms; younger people read without an account or ask through a parent

**How to join:**

1. Search whether someone has already asked your question.
2. Before you ask, prepare a small example: what you are doing, what you expect and what happens.
3. Mark the answer that helped as the solution.

> **Stay safe:** No personal details and no screenshots showing folder paths with your name. Never send a whole project to a stranger in a private message. Check advice like “download this program” with an adult.

### 🏆 Competitions and events

#### [CoderDojo clubs](https://coderdojo.com/)

*club · Free (a basic rule of the CoderDojo movement) · Czech*

Volunteer clubs where a child picks their own project (Scratch, web, games) and a mentor helps them. Great for independent, curious makers.

**When:** Regular meetings in each club; check the current list of clubs and dates on the website (the source is from 2019) **Age:** 7–17 years

**How to join:**

1. Find your nearest club (library, company, school) on the CoderDojo ČR website.
2. Book a place at a meeting; younger children come with a parent.
3. Bring a laptop if you have one.

#### [Hour of Code / Hour of AI (CSEd Week)](https://www.csedweek.org/)

*campaign and online activities · free · many languages including Hungarian, Czech and Slovak*

The new Hour of AI version is an easy way into AI and programming. Gifted kids can try the more advanced tutorials here.

**When:** CS Education Week 2026: 7–13 December 2026 (sources differ by a day, check on code.org) **Age:** from age 4 up

**How to join:**

1. you can do the one-hour activity at home or with your class on code.org

#### [Scratch (MIT)](https://scratch.mit.edu/)

*creative community · free · dozens of languages including Hungarian*

A moderated community where kids share games and animations and get feedback. It follows on from the Hungarian Kovács Mihály/Logo competition.

**When:** all year **Age:** recommended 8–16 years, no fixed limit

**How to join:**

1. an account on scratch.mit.edu (younger kids with a parent’s consent)
2. a class account from a teacher

### 🧪 Projects for inspiration

- **[Godot Showcase](https://godotengine.org/showcase/)**: A showcase of real games built in Godot, from small indie titles to commercial games. *You will learn:* Pick one game and try to guess which scenes and nodes it is made of, how big the hitboxes are and what is in its game loop.
- **[Learn GDScript From Zero (source code)](https://github.com/GDQuest/learn-gdscript)**: The learning app for Godot is itself an open Godot project. *You will learn:* You’ll see what a big real project looks like: folders, scenes, translations and tests. Read it without an account, GitHub has an age limit of 13.
- **[Shared games on the MakeCode Arcade forum](https://forum.makecode.com/c/share-your-arcade-projects-here/5)**: Thousands of games by children and adults; each one can be opened in the editor, code and all. *You will learn:* Analyse someone else’s game: find the game loop, the variables and the collisions. Reading the forum doesn’t need an account.
- **[Games from GGJ Next 2026](https://itch.io/jam/ggjnext2026)**: Games made at the worldwide jam by creators aged 12–17. *You will learn:* You’ll see what a team your age can manage in a few days: how small the scope is, what makes a game fun and what they didn’t have time for.

### 📚 Where to keep learning

- **[Game Programming Patterns: Game Loop](https://gameprogrammingpatterns.com/game-loop.html)**: A chapter of a freely available book about how real games handle the game loop, the time between frames and a fixed physics step. It is followed by the chapters Double Buffer and Update Method. *(en (English), free online)*
- **[Learn GDScript From Zero](https://gdquest.itch.io/learn-godot-gdscript)**: An interactive app by GDQuest: dozens of short lessons with exercises, it runs in the browser and as an app. *(en (English), community translations; free)*
- **[Godot documentation](https://docs.godotengine.org)**: Official guides from your first 2D game to physics and networking, including an introduction to programming in GDScript. *(en, partly translated into other languages; free)*
- **[MakeCode Arcade for teaching](https://www.microsoft.com/makecode/teach/arcade)**: Guides and lessons for MakeCode Arcade, suitable for self-study and for a club. *(en (English), free)*

**Back to the expedition:** [The weekend a game was made](#expedice-hry-en)
