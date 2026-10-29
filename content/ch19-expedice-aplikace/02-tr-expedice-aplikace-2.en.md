---
id: expedice-aplikace-2-en
translationOf: expedice-aplikace-2
lang: en
type: spine
title: "Your first app in 30 minutes"
readingTime: 1
standalone: false
teaser: "What you need: a computer with a browser, an Android phone with the MIT AI2 Companion app and a Google account."
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
conceptTitle: "Your first app in 30 minutes"
objective: "What you need: a computer with a browser, an Android phone with the MIT AI2 Companion app and a Google account."
state: edited
carriers: prose
---

**🛠 Workshop** · step 2 of 5 · [An appathon in one weekend](#expedice-aplikace-en)

**What you need:** a computer with a browser, an Android phone with the MIT AI2 Companion app and a Google account. Are you under 15? Use a school account or an account managed by a parent.

1. Open [App Inventor](https://appinventor.mit.edu), click Create Apps and start a project called `Oddil`.
2. Drag two `TextBox` fields onto the screen (who paid, amount), a `Button` with the text “Add”, a `Label` for the total and a `ListView` for the list of expenses.
3. For the amount field, switch on `NumbersOnly` in the properties. The first rule of data: you can’t type “a hundred” into a number.
4. In the Blocks section, create a variable `vydaje` as an empty list and a variable `soucet` with the value 0.
5. When “Add” is tapped, put the text “who: amount” into the list, add the amount to the total and show both.
6. Connect the phone via Connect → AI Companion and scan the QR code. You’ll see changes straight away.
7. **Try to break it:** an empty amount, zero, 100,000 CZK. Add a condition that rejects nonsense input and says why.
8. Add `TinyDB` and save the list in it so it doesn’t disappear when the app is closed. Remember the story “The app crashed and took the text with it”.

**It’s done when** the app survives being closed, rejects a nonsense amount and the total matches the calculator.

**Next step:** [How many people are enough for a test](#expedice-aplikace-3-en)
