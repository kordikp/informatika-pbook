---
id: tabulka-a-evidence-en
translationOf: tabulka-a-evidence
lang: en
type: spine
title: "Table: data in order"
readingTime: 2
standalone: true
teaser: "You type “Ja” into the contacts search and your phone instantly finds Jana and Jakub. How does it manage that so fast?"
voice: universal
parent: null
diagram: relacni-model-en
core: true
recallQ: "In a record table, what is a row and what is a column, and why does it need rules for entering data?"
recallA: "A row is one record (one loan), a column is one property (book, pupil, date). Without common rules you can't reliably filter or count the data."
lens: generic
visuality: balanced
depth: intro
formalism: none
lengthBand: standard
genre: worked-example
status: accepted
concept: tabulka-a-evidence
conceptTitle: "Table: data in order"
objective: "You type “Ja” into the contacts search and your phone instantly finds Jana and Jakub. How does it manage that so fast?"
state: core
highlights:
  - "Record (row) and property (column); structured vs. unstructured data"
  - "Rules for records: one format, no duplicates, required fields"
  - "Sorting, filtering and functions (sum, count) answer questions"
carriers: prose|table|diagram
---

You type “Ja” into the contacts search and your phone instantly finds Jana and Jakub. How does it manage that so fast?

A **record-keeping system** stores data in a **table**. Each **row** is one **record** (one loan) and each **column** is one **property** (who, what, until when). For the table to be usable, there are **rules for entering data**.

The class library keeps a notebook of loans and it's a mess: “Petr has Harry, bringing it back on Friday the 24th”, “Ondra took The Hobbit on 1 Oct, for three weeks”, “Tomáš Robinson 30/10”, and Ema is in there twice. Today is 28 October. Who has a book that's overdue? From the notes you can only guess. A tidy table has one row per loan and the date always as day and month:

| Pupil | Book | Due back |
|---|---|---|
| Petr | Harry Potter | 24 Oct |
| Ema | The Little Prince | 20 Oct |
| Ondra | The Hobbit | 22 Oct |
| Lucie | Diary of a Wimpy Kid | 4 Nov |
| Tomáš | Robinson Crusoe | 30 Oct |

The filter “due back is earlier than 28 Oct” finds three at once: Petr, Ema and Ondra.

From the notes, the answer was just a guess. In the tidy table a **filter** found it at once. A filter is a condition asked of every row: is the return date earlier than today?

A table can also **sort** and **count**: how many books Ema has, how many loans are overdue. But this only works if everyone writes by the same rules: the same format, no duplicates, nothing missing.

More columns don't make better records. A column makes sense when you will ask questions about it.

**Try it!** Design a loans table for the school library: what columns will it have, and what two rules for entering data will you bring in (for example the date format and required columns)? Write three loans into it and find the one that's overdue.

> **Watch out, a common mistake:** “A table is just neatly lined-up text.” A table has rules: each row is one record, each column one kind of information. Only thanks to them can you search, sort and filter. And more columns don't make better records.

**Next:** You can draw a chart from a tidy table. But even honest data can be drawn dishonestly. → [From data to information](#c/z-dat-informace)
