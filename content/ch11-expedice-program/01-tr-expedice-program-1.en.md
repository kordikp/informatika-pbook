---
id: expedice-program-1-en
translationOf: expedice-program-1
lang: en
type: spine
title: "Workshop: your first program in 30 minutes"
readingTime: 1
standalone: false
teaser: "Thonny is a Python editor for beginners, free for Windows, macOS and Linux."
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
conceptTitle: "Workshop: your first program in 30 minutes"
objective: "Thonny is a Python editor for beginners, free for Windows, macOS and Linux."
state: edited
carriers: prose|code
---

**🛠 Workshop** · step 1 of 5 · [Twelve stars](#expedice-program-en)

**Thonny** is a Python editor for beginners, free for Windows, macOS and Linux. You can download it from [thonny.org](https://thonny.org/); a parent approves the installation. If you can’t install anything, use [Python Tutor](https://pythontutor.com/) in your browser, with no account.

1. **(5 minutes)** Start Thonny. The editor is at the top, the console at the bottom. Type `2 + 3` into the console and press Enter. Python answers 5.
2. **(10 minutes)** Type this into the editor:
```
name = input("What's your name? ")
days = int(input("How many days until Christmas? "))
print("Hi,", name)
print("That's", days * 24, "hours.")
```
Save it as `advent.py` and run it with the F5 key. You can see the input, the processing and the output.
3. **(5 minutes)** Turn on **View → Variables** and run the program again. Watch the boxes fill up.
4. **(10 minutes)** Start debugging: **Ctrl+F5**, then keep pressing **F7**. Thonny shows every small step, even how it calculates `days * 24`. Now delete `int(` and one bracket `)` on purpose and enter 3. The program doesn’t crash, but it prints “333333…”. `days` now holds text, and text times 24 is repeated twenty-four times. This kind of bug is called a **logic error**: the program runs, it just does something different from what you want.

You’re done when the program works and you can step through it.

**Next step:** [Challenge: the thermometer at the cabin](#expedice-program-2-en)
