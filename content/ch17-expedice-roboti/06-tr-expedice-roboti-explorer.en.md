---
id: expedice-roboti-explorer-en
translationOf: expedice-roboti-explorer
lang: en
type: spine
title: "Arduino without soldering in Wokwi"
readingTime: 1
standalone: false
teaser: "The micro:bit is easy to use, but lots of robots around the world run on Arduino, ESP32 or Raspberry Pi Pico boards."
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
concept: expedice-roboti-explorer
conceptTitle: "Arduino without soldering in Wokwi"
objective: "The micro:bit is easy to use, but lots of robots around the world run on Arduino, ESP32 or Raspberry Pi Pico boards."
state: edited
carriers: prose
---

**👀 Side trip** · [The rover that doesn’t fall off the table](#expedice-roboti-en)

The micro:bit is easy to use, but lots of robots around the world run on Arduino, ESP32 or Raspberry Pi Pico boards. [Wokwi](https://wokwi.com) is an electronics simulator in the browser: you connect the board, LEDs, buttons and sensors with your mouse and run the program without a single real part. You program in C++ (Arduino) or in MicroPython. The interface is in English and you need an account to save projects; set it up with a parent.

**Task for the first evening:**
1. An Arduino Uno and an LED on pin 13: blinking. That’s the “Hello world” of electronics.
2. Add a button and light the LED only while it’s pressed.
3. Add a light sensor and build the lamp with hysteresis from the challenge under decision-making. Same logic, different language.

Notice that in Arduino, instead of the *forever* block there’s the function `loop()`. A robot’s loop is the same everywhere: measure, decide, act.

**Back to the expedition:** [The rover that doesn’t fall off the table](#mission-expedice-roboti)
