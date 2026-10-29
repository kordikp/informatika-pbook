---
id: vyzva-postup-over-a-oprav-en
translationOf: vyzva-postup-over-a-oprav
lang: en
type: challenge
title: "The leap year and the branch that never runs"
level: 3
minutes: 30
readingTime: 2
standalone: true
teaser: "A program in a calendar app decides whether a year is a leap year."
voice: universal
parent: null
diagram: null
core: false
status: accepted
concept: over-a-oprav
state: edited
lens: generic
visuality: text-first
depth: standard
formalism: none
lengthBand: standard
carriers: prose|code
---

A program in a calendar app decides whether a year is a leap year. It works for 2024. For 2023 too. And yet it is wrong. Can you find the bug before the users do?

<!-- task -->

**Rule:** a year is a leap year if it is divisible by 4. Exception: years divisible by 100 are not leap years. Exception to the exception: years divisible by 400 are leap years.

```
function leap(year):
    if year is divisible by 4: return YES
    else if year is divisible by 100: return NO
    else if year is divisible by 400: return YES
    else: return NO
```

1. **Beforehand, without reading the code**, write the smallest possible set of tests (input and expected output) so that there is at least one from every group of years that the rule treats differently. How many tests are enough?
2. Run the code with each test. Which one fails?
3. Find two branches in the code that **never run**, whatever year you enter. Why?
4. Fix the code and check it **again with all the tests**.

**Success criterion:** 4 tests, the input that fails, an explanation of the dead branches and a fix that passes all the tests.

<!-- hint -->

The rule splits years into four groups: not divisible by 4, divisible by 4 but not by 100, divisible by 100 but not by 400, divisible by 400.

<!-- hint -->

Take the year 1900. Is it divisible by 4?

<!-- hint -->

What happens to a year divisible by 100 when the code asks about divisibility by 4 first? Try turning the order of the questions round.

<!-- solution -->

1. **Four tests:** 2023 → NO, 2024 → YES, 1900 → NO, 2000 → YES.
2. **1900** fails: it is divisible by 4, so the code returns YES straight away. But 1900 was not a leap year.
3. Every year divisible by 100 (and by 400) is also divisible by 4. So the first condition always catches it, and the second and third branches never run. A branch like that is called **dead code**, and it is a warning that something is wrong.
4. The fix: ask about the strictest condition first.
```
if year is divisible by 400: return YES
else if year is divisible by 100: return NO
else if year is divisible by 4: return YES
else: return NO
```
All four tests pass. One test for each group is more reliable than a hundred random years, because you will almost never pick a random year divisible by 100.

<!-- more -->

Efficiency: for 2023 the fixed code asks three times before it answers NO. Yet 3 out of 4 years are not divisible by 4. Rewrite it so that it asks only once for most years, and check that it still passes all four tests.
