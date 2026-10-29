---
id: expedice-bezpeci-1-en
translationOf: expedice-bezpeci-1
lang: en
type: spine
title: "Three layers"
readingTime: 2
standalone: false
teaser: "Here’s the message: 49 4F 44 4A 7B 46 44 56 57 4F 48 2D 4B 44 56 2D 4F 44 42 48 55 56 7D At first sight it’s noise."
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
concept: expedice-bezpeci-1
conceptTitle: "Three layers"
objective: "Here’s the message: 49 4F 44 4A 7B 46 44 56 57 4F 48 2D 4B 44 56 2D 4F 44 42 48 55 56 7D At first sight it’s noise."
state: edited
carriers: prose
---

**🧩 Challenge** · step 1 of 5 · [Operation Flag](#expedice-bezpeci-en)

Here’s the message:

`49 4F 44 4A 7B 46 44 56 57 4F 48 2D 4B 44 56 2D 4F 44 42 48 55 56 7D`

At first sight it’s noise. In fact, it’s two layers, one on top of the other, and you’ll peel them off one by one.

**Layer 1: hexadecimal (hex).** A computer stores letters as numbers according to the **ASCII** table. The letter A has the number 65, B 66 and so on up to Z with the number 90. Programmers like to write these numbers in hexadecimal: you count 0–9 and then A–F (A = 10, …, F = 15). The pair `41` means 4 · 16 + 1 = 65, so A.

**Layer 2: Caesar.** Once you turn the numbers into letters, you get a text that still makes no sense. But you know how it should start.

**Task:** find the flag. Then answer: why did knowing the start of the message help you so much with cracking the second layer?

**Hints:** `41` to `5A` are the letters A to Z. `7B` and `7D` are curly brackets, `2D` is a hyphen. Work out how many places the first letter is shifted from F.

:::reveal 🔑 Solution
The flag is **FLAG{CASTLE-HAS-LAYERS}**. The hex gave IODJ{FDVWOH-KDV-ODBHUV} and a Caesar shift of 3 places back returned it (I → F, O → L…). Knowing the start is a huge advantage: cryptanalysts call it **known plaintext**, and it’s exactly what helped break German ciphers in the Second World War. And notice: **neither hex nor Caesar is protection**. Hex is just a different way of writing, anyone can read it. Real encryption needs a secret key that can’t be guessed. On paper it took you a long time. In the next step you’ll manage it in a minute.
:::

**Next step:** [The CyberChef kitchen](#expedice-bezpeci-2-en)
