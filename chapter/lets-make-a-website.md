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
    <title>Document</title>
</head>
<body>
</body>
</html>
```

Check if live reloading works. It's a website!

- This things between pointy brackets are called tags. Anything between them will show up on the page. 
- Headings
- Links
- Article, Section, Header
- Images, Video

### Semantic Markup

There's all kinds of different elements to mark common parts of a website. Some give you special functionality (such as ```<audio>``` and ```<video>```), while others give semantic information to the browser (like ```<nav>``` and ```<main>```). It's good practice to use these elements as much as you can because:

- Helps people using assistive technlogy (without much extra work)
- Helps (I think) you think clearly about hierarchy, structure etc.

## Separation of concerns

Most websites are made of three different programming languages: HTML, CSS, and Javascript. Each serves a different function:

- HTML describes the content of your website: Text, images, videos, links and so on.
- CSS defines how that content looks: The layout, typesetting, colours, and animations.
- Javascript lets you program the behaviour of your website: If someone clicks button A, Menu B opens.

This split of content, presentation, and behaviour into different languages is called *Separation of Concerns*. Maintaining it will make your life easier.

|Language  |Intent     |
|----------|-----------|
|HTML      |Content    |
|CSS       |Style      |
|Javascript|Interaction|