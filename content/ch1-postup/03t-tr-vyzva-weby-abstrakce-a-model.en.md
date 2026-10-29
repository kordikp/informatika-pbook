---
id: vyzva-weby-abstrakce-a-model-en
translationOf: vyzva-weby-abstrakce-a-model
lang: en
type: challenge
title: "An outline for the ears"
level: 3
minutes: 30
readingTime: 3
standalone: true
teaser: "Blind people use the web too."
voice: universal
parent: svet-weby-abstrakce-a-model-en
diagram: null
core: false
status: accepted
concept: abstrakce-a-model
state: edited
lens: weby
visuality: text-first
depth: standard
formalism: none
lengthBand: deep
carriers: prose|code
---

Blind people use the web too. A screen reader reads it aloud to them, and with the H key they jump from heading to heading, like you do with your eyes. So your website sketch isn’t just a picture. It’s an outline that someone will listen to. Does it sound good?

<!-- task -->

This is how a friend wrote the club’s page:

```
<div class="velky">Robotics club</div>
<h3>When we meet</h3>
<p>Every Tuesday from 15:00. You’ll find the timetable <a href="rozvrh.html">here</a>.</p>
<h1>Photos from our events</h1>
<img src="soutez.jpg">
<img src="vlnka.svg">
<h2>Sign-up form</h2>
<p style="color:#999999">Required fields are in red.</p>
<input placeholder="Name">
<div onclick="odeslat()">Send</div>
```

1. Write down what a person hears if they only jump between headings. Why doesn’t it make sense?
2. Find at least **7 accessibility problems** and write an HTML fix for each one.
3. The contrast between text and background is calculated as (L1 + 0.05) : (L2 + 0.05), where L is the relative luminance of a colour (white 1, black 0) and the lighter colour is L1. The grey #999999 has L = 0.319, the grey #767676 has L = 0.181. Work out the contrast of both on a white background. Which one passes the WCAG rule for normal text (at least 4.5 : 1)?

**Success:** the outline h1 → h2 → h2, at least 7 correct fixes and both contrast numbers.

<!-- hint -->

For a screen reader, a heading is only what’s inside h1 to h6. It doesn’t treat a div with big letters as a heading, even if it looks like one.

<!-- hint -->

For every line, ask: Can a person without a screen tell what it is? Can they reach it without a mouse, using only the Tab key? Can someone who can’t tell colours apart understand it too?

<!-- hint -->

Contrast: 1.05 : (0.319 + 0.05) and 1.05 : (0.181 + 0.05).

<!-- solution -->

1. The screen reader says: “Heading level 3, When we meet. Heading level 1, Photos from our events. Heading level 2, Sign-up form.” The club’s name is missing completely and the levels are upside down, like a book where chapter 1 comes after a sub-chapter.
2. Problems and fixes:
- div “Robotics club” → `<h1>`;
- h3 “When we meet” → `<h2>`;
- h1 “Photos from our events” → `<h2>` (a page should have only one h1);
- link “here” → a link with the text “Club timetable”;
- soutez.jpg without a description → `alt="Our robot at the regional competition"`;
- vlnka.svg is just decoration → `alt=""`, so the screen reader skips it;
- information only by colour → an asterisk and the word “required”;
- input without a label → `<label for="jmeno">Name</label>` and `id="jmeno"`;
- div as a button → `<button>Send</button>`, works with Tab and Enter.
3. #999999: 1.05 : 0.369 = **2.85 : 1**, fails. #767676: 1.05 : 0.231 = **4.54 : 1**, passes, but only just. That’s why #767676 is known as the lightest grey you may still use for text on white.

<!-- more -->

Turn on the screen reader you already have on your device: VoiceOver on iPhone and Mac, TalkBack on Android, Narrator on Windows. Close your eyes and try to find the timetable on your website. Then go through the accessibility part of [MDN Learn web development](https://developer.mozilla.org/en-US/docs/Learn_web_development) (in English).
