---
id: svet-weby-abstrakce-a-model-en
translationOf: svet-weby-abstrakce-a-model
lang: en
type: spine
title: "A sketch and a site map"
readingTime: 2
standalone: true
teaser: "Before they write the first line of code, designers draw the website in pencil: grey rectangles, no colours, no photos. Why so ugly?"
voice: universal
parent: null
diagram: null
core: false
recallQ: "Why does an underground map not show streets, and what would it look like as a graph?"
recallA: "To change lines you only need the stations and the connections; streets would just get in the way. The stations are nodes, the connections between them are edges."
lens: weby
visuality: visual-first
depth: intro
formalism: none
lengthBand: standard
genre: explainer
status: accepted
concept: abstrakce-a-model
state: edited
highlights:
  - "Abstraction: what matters depends on the purpose"
  - "A graph as a model: nodes and edges (the underground, friends in a class, how chapters follow each other)"
  - "No model is complete; it is always a choice"
carriers: prose|image
---

Before they write the first line of code, designers draw the website in pencil: grey rectangles, no colours, no photos. Why so ugly?

A sketch like that is called a **wireframe**, a wire model of the page. A rectangle with a cross means “a photo goes here”, wavy lines are text, an oval is a button. A wireframe deliberately **leaves out** colours, fonts and pictures, because at that moment you are solving one single question: *what will be on the page, and where*. That is **abstraction**. What matters depends on the **purpose**: for the layout it is position and size, for the graphic designer it is colours.

![A wireframe of the home page and the site map as a graph](images/svet-weby-nacrt.en.svg)

The second model is the **site map**, and that is a **graph**. Pages are **nodes**, links between them are **edges**. Edges lead from the home page to *About us*, *Events* and *Contact*, and from each event back to the list of events. In the graph you see a problem straight away: a visitor can never reach a page that no edge leads to. And when the way to the most important thing takes five clicks, it is too long.

Neither model is the whole website. The wireframe does not know what the site looks like, the map does not know what is on the pages. It is a **choice**: each model answers one question, and that is why it is good for making decisions. Even the browser keeps a loaded page as a model, a tree of elements called the **DOM**: the page contains a body, the body contains headings and paragraphs, the paragraphs contain text.

**Try it!** Draw a wireframe of your school website’s home page: only rectangles, lines and labels. Then draw the site map. Does at least one edge lead to every page?

**Next in the world of websites:** → [Three languages of one page](#svet-weby-program-en)
