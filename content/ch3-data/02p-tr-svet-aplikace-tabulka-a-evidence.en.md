---
id: svet-aplikace-tabulka-a-evidence-en
translationOf: svet-aplikace-tabulka-a-evidence
lang: en
type: spine
title: "An app made from a spreadsheet"
readingTime: 2
standalone: true
teaser: "Lots of apps are an ordinary spreadsheet inside. A tool like Glide turns one into an app with search, a filter and buttons in an afternoon."
voice: universal
parent: null
diagram: null
core: false
recallQ: "In a record table, what is a row and what is a column, and why does it need rules for entering data?"
recallA: "A row is one record (one loan), a column is one property (book, pupil, date). Without common rules you can't reliably filter or count the data."
lens: aplikace
visuality: balanced
depth: intro
formalism: none
lengthBand: standard
genre: worked-example
status: accepted
concept: tabulka-a-evidence
state: edited
highlights:
  - "Record (row) and property (column); structured vs. unstructured data"
  - "Rules for records: one format, no duplicates, required fields"
  - "Sorting, filtering and functions (sum, count) answer questions"
carriers: prose|image
---

Lots of apps are an ordinary spreadsheet inside. A tool like Glide turns one into an app with search, a filter and buttons in an afternoon.

The class library: who borrowed which book and when they will return it. In the spreadsheet **each row is one record**, one loan, and **each column one property**: book, pupil, date borrowed, returned. Data like this is called **structured**: every piece of information has its own place. The app then turns the rows into cards and the columns into form fields.

![A table of loans and the app made from it](images/svet-aplikace-tabulka.en.svg)

But the app only works if the spreadsheet keeps to **rules for entries**:

- **One format:** the date always as 3 Nov 2026, not “3/11” once and “on Monday” another time. Otherwise the app can’t tell who is overdue.
- **No duplicates:** when Ollie is *Ollie* once and *Oliver Smith* another time, the app turns him into two people.
- **Required fields:** a loan without the pupil’s name is a book that has disappeared.

That is why forms in apps have drop-down lists and calendars instead of free text: the rules are enforced for you.

Only then comes the useful part. A **filter** shows only the books that haven’t been returned, **sorting** by date puts the ones borrowed longest at the top, and **functions** calculate the answers: the *count* of loans in a month, the *sum* of books one pupil has. The spreadsheet answers the question “who has overdue books?” in a second. In a pile of free notes, that is **unstructured** data, you would be searching for half an hour.

**Try it!** Design a spreadsheet for an app for borrowing balls in the gym. What columns will it have, which of them will be required, and what format must the date have?

**Next in the world of apps:** → [Who may do what in the class app](#svet-aplikace-informacni-system-en)
