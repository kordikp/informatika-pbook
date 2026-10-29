---
id: vyzva-data-tabulka-a-evidence-en
translationOf: vyzva-data-tabulka-a-evidence
lang: en
type: challenge
title: "Two Emas and one key"
level: 3
minutes: 40
readingTime: 3
standalone: true
teaser: "A new pupil from 7.A has joined the library."
voice: universal
parent: null
diagram: null
core: false
status: accepted
concept: tabulka-a-evidence
state: edited
lens: generic
visuality: text-first
depth: standard
formalism: none
lengthBand: deep
carriers: prose|table
---

A new pupil from 7.A has joined the library. She is called Ema too. Since then `=COUNTIF(…, "Ema")` counts nonsense and nobody knows who has The Hobbit. The table is tidy, and yet it lies.

<!-- task -->

The library has one table of loans with the columns **Name, Class, E-mail, Book, Returned**. Every loan copies out the name, class and e-mail again.

1. Find **two different problems** with this table that appear when (a) the school has two Emas, (b) Ema Nováková changes her e-mail.
2. Instead, design **three tables** so that **every fact is written down only once**. For each one, write its columns and mark the **key**: the column that lets you find a row without any doubt.
3. Your tables contain this data:

| id | name | class |
|---|---|---|
| 1 | Ema Nováková | 7.B |
| 2 | Ema Dvořáková | 7.A |
| 3 | Tomáš | 7.B |
| 4 | Ondra | 7.B |

Loans (pupil id, book, returned): (1, The Hobbit, yes), (1, Harry Potter, no), (2, The Little Prince, no), (3, The Brothers Lionheart, no), (4, The Hobbit, no), (2, The Brothers Lionheart, yes).

How many books do pupils from **7.B** have borrowed **right now**? And how many would `COUNTIF` on “Ema” return in the original table (assume it holds first names only)?

**Success criterion:** in your design, changing an e-mail means changing one cell, and both answers in task 3 are right.

<!-- hint -->

Problem (b): in how many rows is Ema Nováková’s e-mail? What happens if you change it in only two of the three?

<!-- hint -->

A name is not a good key, because it repeats. Think of a number that never repeats, like the number each pupil has in the class register.

<!-- hint -->

In task 3, work like a computer: for each loan with “returned = no”, use the pupil id to find their class.

<!-- solution -->

**1.** (a) The two Emas can’t be told apart: `COUNTIF` adds up the loans of both, and the filter “Ema” shows another person’s books. (b) The e-mail is copied into every loan. If you change it only in some places, the table contradicts itself (this is called **inconsistency**).

**2.** **Pupils** (pupil id = key, name, class, e-mail), **Books** (book id = key, title, author), **Loans** (loan id = key, pupil id, book id, from, to, returned). A loan only **points** to the pupil and the book by their ids. The e-mail is in a single cell of the Pupils table.

**3.** Not returned: (1, Harry Potter), (2, The Little Prince), (3, The Brothers Lionheart), (4, The Hobbit). Pupils 1, 3 and 4 are from 7.B, pupil 2 is from 7.A. Answer: **3 books**. `COUNTIF` on “Ema” would return **4**, because it adds up 2 loans of Ema Nováková and 2 of Ema Dvořáková.

In the database language SQL, the query would look like this:
`SELECT COUNT(*) FROM Loans JOIN Pupils ON Loans.pupil_id = Pupils.id WHERE Pupils.class = '7.B' AND returned = 'no'`
The word **JOIN** is exactly the link through the key that you do by hand in this task. This is how almost all databases in the world work: an online shop, a school system and a game leaderboard too.

<!-- more -->

Play [SQL Murder Mystery](https://mystery.knightlab.com/): you can only solve the murder in SQL City with queries that join tables through keys (in English). Or try the function `XLOOKUP` or `VLOOKUP` in a spreadsheet: it does the same as JOIN for one row.
