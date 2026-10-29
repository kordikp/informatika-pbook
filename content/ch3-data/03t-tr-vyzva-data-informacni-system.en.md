---
id: vyzva-data-informacni-system-en
translationOf: vyzva-data-informacni-system
lang: en
type: challenge
title: "Who could have deleted the video?"
level: 3
minutes: 30
readingTime: 3
standalone: true
teaser: "The club is shooting a film."
voice: universal
parent: null
diagram: null
core: false
status: accepted
concept: informacni-system
state: edited
lens: generic
visuality: text-first
depth: standard
formalism: none
lengthBand: deep
carriers: prose|table
---

The club is shooting a film. The best shot has vanished from the shared folder. Nobody owns up. But the question “who did it” is the smaller one. The bigger one is: how many people **could** have done it at all?

<!-- task -->

The folder **Film 7.B** has three subfolders: **Shots**, **Music**, **Edit**. Permissions work as in most cloud drives:
- a permission set on a folder is **inherited** by everything inside;
- when someone has several permissions from different places, **the highest one** applies (editor > commenter > viewer);
- an **editor** may upload, change and delete.

**Current settings:** on the folder Film 7.B, the group **Whole class 7.B (26 people)** has editor permission. On the folder Shots there is also a link “anyone with the link can view”.

**What the team needs:**
1. Tomáš uploads shots.
2. Ondra uploads music and only needs to see the shots.
3. Ema writes notes on the shots and deletes nothing.
4. You put the edit together and need to see the shots and the music.
5. The teacher wants to see only the finished film in Edit.

**Tasks:** (a) How many people could have deleted the shot, and why? (b) Why can’t you fix the problem by setting the class to “viewer only” on the folder Shots? (c) Design settings that meet all five needs and **give nobody anything extra**. Write them as a table of folder × person. **Criterion:** every need is met, and no permission can be removed without breaking some need.

<!-- hint -->

Editor on a parent folder means editor in all its subfolders too. How many people are in the group?

<!-- hint -->

The rule “highest wins”: when someone gets editor from above and viewer on the subfolder, which one applies?

<!-- hint -->

You have to give permissions as low down as possible, straight on the subfolders, and leave only the owner on the parent folder. And does anyone need that public link at all?

<!-- solution -->

**(a)** **26 people** from the class could have deleted the shot, plus the folder’s owner. The editor permission inherited from Film 7.B applies in Shots too. (The link “anyone can view” doesn’t allow deleting, but anyone who gets the link can see the shots.)

**(b)** Because the **highest** permission applies. The class has editor from above, and viewer on the subfolder doesn’t beat it. In systems like this, permissions on a subfolder are added, not taken away.

**(c)** On **Film 7.B**, nobody except you as the owner. Cancel the public link.

| | Shots | Music | Edit |
|---|---|---|---|
| Tomáš | editor | – | – |
| Ondra | viewer | editor | – |
| Ema | commenter | – | – |
| you | viewer | viewer | editor |
| teacher | – | – | viewer |

Only **3 editor permissions**, each only on its “own” folder. This is the **principle of least privilege**. Now only Tomáš (and you as the owner) can delete a shot. A second safety net: the bin and the version history, from which a deleted file can be restored.

<!-- more -->

Go through the sharing of one of your cloud folders with a parent and count how many people can really see into it, including links. Then add a sixth need: “Bára from outside has to upload the subtitles once”. Can you meet it so that after a week she has no permission at all? Look in the sharing settings for an access expiry date.
