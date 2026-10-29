---
id: vyzva-weby-kodovani-en
translationOf: vyzva-weby-kodovani
lang: en
type: challenge
title: "Scrambled letters in reverse"
level: 3
minutes: 30
readingTime: 2
standalone: true
teaser: "A visitor sends you a screenshot."
voice: universal
parent: svet-weby-kodovani-en
diagram: null
core: false
status: accepted
concept: kodovani
state: edited
lens: weby
visuality: text-first
depth: standard
formalism: none
lengthBand: deep
carriers: prose|table
---

A visitor sends you a screenshot. Instead of “Přijď na kroužek” (“Come to the club”) they see “PĹ™ijÄŹ na krouĹľek”. It looks like a random jumble. But it isn’t random: if you know what happened to each byte, you can read it even without a computer.

<!-- task -->

In UTF-8, letters with a code from 128 to 2047 are stored in **two bytes** following the pattern `110xxxxx 10yyyyyy`. The bits xxxxx and yyyyyy are the letter’s code (11 bits). The older encoding **Windows-1250** reads every byte as one character. A piece of its table (in hexadecimal):

| byte | 8D | 8F | 99 | A1 | BE | C3 | C4 | C5 |
|---|---|---|---|---|---|---|---|---|
| character | Ť | Ź | ™ | ˇ | ľ | Ă | Ä | Ĺ |

1. The Czech letter **č** has the code 269 (10D in hexadecimal). Split it into two UTF-8 bytes and show why it turns into “ÄŤ”.
2. The letter **ž** has the code 382 (17E). What does Windows-1250 make of it?
3. A visitor sees “Ĺˇkola”. What was the word? Work it out backwards.
4. Why did the letters without háčeks and accents survive unchanged?

**Success:** all four answers are right and you can explain each one with bytes.

<!-- hint -->

Convert 269 to binary: 269 = 256 + 8 + 4 + 1, so 1 0000 1101. Pad it with zeros on the left to 11 bits: 00100 001101.

<!-- hint -->

The first 5 bits go after 110, the other 6 after 10. Then convert each group of eight bits into a hexadecimal number, four bits at a time: 1100 = C, 0100 = 4.

<!-- hint -->

For point 3: Ĺ is the byte C5 and ˇ is A1. Take the last 5 bits from C5 and the last 6 from A1, put them one after the other and convert them to a number.

<!-- solution -->

1. 269 = 00100 001101. The first byte is 110 + 00100 = 11000100 = **C4**, the second 10 + 001101 = 10001101 = **8D**. Windows-1250 reads C4 as Ä and 8D as Ť, hence “ÄŤ”.
2. 382 = 00101 111110, so 11000101 = **C5** and 10111110 = **BE**. You get “Ĺľ”, and “žirafa” (giraffe) turns into “Ĺľirafa”.
3. C5 = 11000101 gives the bits 00101, A1 = 10100001 gives the bits 100001. Together 00101100001 = 5 · 64 + 33 = **353**, 161 in hexadecimal, and that is **š**. The word is “škola” (school).
4. Characters with a code below 128 (the English alphabet, digits, space) have a single byte in UTF-8, the same as in Windows-1250. For them the two encodings agree, so only the accented letters get scrambled.

The cure: the line `<meta charset="utf-8">` in the head and the file saved as UTF-8.

<!-- more -->

In UTF-8, emoji have **four** bytes following the pattern `11110xxx` plus three continuation bytes. How many bits of code fit into them? In your browser, press F12, open the Console and type `new TextEncoder().encode("🙂")`. It prints the bytes. Check that they match the pattern.
