---
layout: post
tags: post
title: "Let's make a website!"
intro: The development workflow, HTML, Semantics
date: 2019-01-03
---

## Let's make a website

- Make a new folder
- Open that folder in VS Code (Hit ```Cmd + Shift + P``` and type ```open folder```.)
- Create a file called ```index.html```.

### HTML

```html
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Title</title>
</head>
<body>
<p>
    it's a website
</p>
</body>
</html>
```

Run ```npm run start``` and open the URL it gives you. Check if livereloading works.

- This things between pointy brackets are called tags. Anything between them will show up on the page. 
- Headings (Levels 1-6, designers already know about hierarchy so this makes sense)
- Links (Here we introduce attributes)
- Article, Section, Header (for semantics)
- Images, Video, Form elements (Elements that give you functionality)

At this point you only want to think about structure, not about presentation.

### Semantic Markup

There's all kinds of different elements to mark common parts of a website. Some give you special functionality (such as ```<audio>``` and ```<video>```), while others give semantic information to the browser (like ```<nav>``` and ```<main>```). It's good practice to use these elements as much as you can because:

- Helps people using assistive technology without much extra work (this includes things like RSS readers, social media cards, but also text-to-speech, and translation.)
- Helps (I think) you think clearly about hierarchy, structure etc.
- Also: Separation of Concerns.