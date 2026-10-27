---
id: svet-weby-program-en
translationOf: svet-weby-program
lang: en
type: spine
title: "Three languages of one page"
readingTime: 2
standalone: true
teaser: "A page with a button that counts clicks has five lines of HTML and five lines of JavaScript. The browser reads them literally, from top to bottom."
voice: universal
parent: null
diagram: null
core: false
recallQ: "What does a computer do if you swap two commands in a program, and why?"
recallA: "It carries them out in the new order, even if that makes no sense, because it fills in nothing. So the result can change."
lens: weby
visuality: text-first
depth: intro
formalism: none
lengthBand: standard
genre: code-walkthrough
status: accepted
concept: program
state: edited
highlights:
  - "Code is an algorithm written in a programming language (with blocks or with text)"
  - "Sequence: commands are carried out in the order they are written"
  - "Input → processing → output; the user interface is where you meet them"
carriers: prose|code
---

A page with a button that counts clicks has five lines of HTML and five lines of JavaScript. The browser reads them literally, from top to bottom.

The web speaks three languages. **HTML** says what is on the page: a heading, a paragraph, a button. **CSS** says what it looks like. **JavaScript** says what happens when you do something. Only JavaScript is a **programming language**, a way of writing down an algorithm that the browser carries out. HTML and CSS only describe the page.

```html
<p>Clicks: <span id="count">0</span></p>
<button id="click">Click me!</button>
<script>
let count = 0;
document.getElementById("click").onclick = function () {
  count = count + 1;
  document.getElementById("count").textContent = count;
};
</script>
```

That is the whole program. The **input** is a click, the **processing** adds one, the **output** is the new number on the page. The button and the number are the **user interface**, the place where a person meets the program.

The browser carries out the commands **in the order in which they are written**. Swap two lines inside the function and after the first click the page shows 0: the number is written out before one is added, and from then on it is always one step behind. And when you move `<script>` above the button, the script looks for the button before it exists on the page, and does not find it. A computer does not guess what you meant.

You can also put the same program together from blocks. In Scratch it would be the block *when this sprite clicked → change count by 1*. **A block language and a text language** write down the same algorithm, just with a different alphabet.

**Try it!** Save the code in a file called counter.html and open it in a browser. Then swap two lines inside the function. What exactly changes, and why?

**Next in the world of websites:** → [Scrambled letters](#svet-weby-kodovani-en)
