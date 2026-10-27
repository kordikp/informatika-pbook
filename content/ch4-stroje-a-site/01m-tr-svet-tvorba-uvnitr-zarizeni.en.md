---
id: svet-tvorba-uvnitr-zarizeni-en
translationOf: svet-tvorba-uvnitr-zarizeni
lang: en
type: spine
title: "Why generating takes time"
readingTime: 2
standalone: true
teaser: "On the web you get an AI picture in ten seconds. When you run a similar model on a school laptop, you wait ten minutes. Or it doesn’t start at all."
voice: universal
parent: null
diagram: null
core: false
recallQ: "Why does an unsaved document disappear when the power goes off, but a saved one doesn't?"
recallA: "The unsaved one exists only in the main memory, which forgets without power. The saved one is in storage, which remembers permanently."
lens: tvorba
visuality: text-first
depth: intro
formalism: none
lengthBand: standard
genre: explainer
status: accepted
concept: uvnitr-zarizeni
state: edited
highlights:
  - "Processor, main memory, storage, peripherals; hardware vs. software"
  - "Main memory is temporary: unsaved work disappears, full memory slows things down"
  - "The operating system runs apps and access to the hardware; choosing a device by its features"
carriers: prose
---

On the web you get an AI picture in ten seconds. When you run a similar model on a school laptop, you wait ten minutes. Or it doesn’t start at all.

Generating a picture is an enormous pile of multiplications. A model has billions of numbers, and it multiplies them many times for every picture. The **processor** is a clever all-rounder that can handle a few calculations at once. The **graphics chip** can only do simple calculations, but thousands at the same time, and that is ideal for AI. That is why AI data centres are built on thousands of graphics cards.

The second brake is **memory**. Before a model starts calculating, it has to be loaded in full from **storage** into memory, and for a graphics card into its own memory. A model for pictures can easily take several GB. When it doesn’t fit, the system moves data between storage and memory and everything crawls, or the generating doesn’t start at all. **Full memory slows down** the whole device: suddenly even the browser stutters. And memory is **temporary**. When the laptop goes to sleep in the middle of the work, the unfinished picture is gone. Saved on the disk, it stays.

The **operating system** decides which app gets how much memory and processor. That is why, while generating is running, the fan roars and the music stutters: several programs are sharing the **hardware**. Hardware is the chips and memory you can touch. The model, the editor and the system are **software**, programs that run on it.

New phones and laptops have a special chip for AI. It can run smaller models right on the device: blurring the background in a video call, captions, improving a photo. So when **choosing a device** for creating, you ask different questions than for writing school reports: how much memory it has, what graphics, and whether it has an AI chip.

**Try it!** Open the task manager on a computer (Ctrl+Shift+Esc on Windows, Activity Monitor on a Mac) and play a video or a game. Which app takes the most memory and processor?

**Next in the world of creating with AI:** → [Where your prompt goes](#svet-tvorba-cloud-a-server-en)
