---
id: vyzva-program-rozhodovani-en
translationOf: vyzva-program-rozhodovani
lang: en
type: challenge
title: "Three tills, two bugs"
level: 3
minutes: 30
readingTime: 2
standalone: true
teaser: "Three friends from the coding club programmed a till for the swimming pool, each in a different way."
voice: universal
parent: null
diagram: null
core: false
status: accepted
concept: rozhodovani
state: edited
lens: generic
visuality: text-first
depth: standard
formalism: none
lengthBand: standard
carriers: prose|code
---

Three friends from the coding club programmed a till for the swimming pool, each in a different way. Two tills calculate wrongly. The third is correct, even though it looks odd. Can you find which is which, and one age that gives both bugs away?

<!-- task -->

Price list: up to 5 years **free**, 6 to 14 years **60 CZK**, 15 to 64 years **120 CZK**, 65 and over **60 CZK**. In Python, `elif` means “otherwise, if”. The program goes through the conditions from the top and runs the **first** one that is true. It skips the rest.

**Till A**
```
if age >= 15:
    price = 120
elif age >= 65:
    price = 60
elif age >= 6:
    price = 60
else:
    price = 0
```
**Till B**
```
if age < 6:
    price = 0
elif age < 15 or age > 65:
    price = 60
else:
    price = 120
```
**Till C**
```
if age < 6:
    price = 0
elif age >= 15 and age < 65:
    price = 120
elif age >= 65 and age < 15:
    price = 60
else:
    price = 60
```

**Task 1.** For each till, decide whether it is correct. For a wrong one, find **all** the ages for which it calculates wrongly.

**Task 2.** Two of the programs have a branch that **can never run**. Find both. Why does one of them cause a bug and the other doesn’t?

**Task 3.** Find the **smallest** set of ages to test that exposes both wrong tills.

**You’re done when:** you have the correct verdicts, the exact ranges of wrong ages, both dead branches and the smallest set of tests.

<!-- hint -->

For A, try the age 70. Which condition does the program meet first?

<!-- hint -->

For B, compare `age > 65` with the price list. How much does someone who is exactly 65 pay?

<!-- hint -->

The condition `age >= 65 and age < 15` needs someone to be at least 65 and under 15 at the same time.

<!-- solution -->

**A is wrong** for all ages **from 65 up**: a senior meets the very first condition `age >= 15` and pays 120. The branch `age >= 65` is below it and is never reached, so it is **dead**. With `elif`, order matters: the narrower condition must come first.

**B is wrong** only for the age of **exactly 65**: `65 > 65` is not true, so a 65-year-old pays 120. It should be `age >= 65`.

**C is correct.** Its third branch is dead too: nobody can be at least 65 and under 15 at the same time. But seniors fall through to `else` and pay the correct 60. The dead branch in A hid a bug; the dead branch in C only confuses people reading the code.

**The smallest set is a single age: 65.** It exposes both A and B, since both charge 120. But a good set for any till tests **both sides of every boundary**: 5, 6, 14, 15, 64, 65.

<!-- more -->

This is called **boundary value testing**. Professionals write automatic tests that run after every change to the code. Try it: wrap the till in a function `def price(age):` with `return` instead of `price = …`, and below it write lines like `assert price(65) == 60`. When a test fails, Python reports an error. Then rewrite the conditions so they can be shuffled into any order and still work. Tip: each branch must describe its whole range, for example `age >= 6 and age < 15`.
