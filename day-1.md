---
layout: post
tags: post
title: "Day 1: Tooling up"
intro: Installing development tools, separation of concerns, getting started with HTML and CSS, how to look things up
---

## Tools
### A code editor

We're using [VS Code](https://code.visualstudio.com/) for this, mostly because that's what I happen to use. There are other code editors like [Atom]() and [Notepad++](), which are good, too.

Fundamentally they all do the same thing: edit text files. You could absolutely make websites with the text editor that comes with your operating system — code editors just make things more convenient by adding things like syntax highlighting, shortcuts, and advanced search.

### A browser

Most web devlopers use Chrome, I like Firefox. Both these browsers have built-in developer tools we'll be using.

### The command line
It's called *Terminal* on a Mac. It lets you type commands to do stuff on your machine.

### Node.js

We'll use (I guess) Browsersync

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

Check if livereloading works. It's a website!

- This things between pointy brackets are called tags. Anything between them will show up on the page. 
- Headings
- Links
- Article, Section, Header
- Images, Video

### CSS

```css
h1 {
    color: red;
    font-family: 'Times New Roman', serif;
}
```

CSS files are basically lists of instructions for how things are supposed to look. There's a selector followed by curly brackets and a list of rules.

These rules *cascade* (that's the *C* in CSS).

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


## How to look things up

There are dozens of HTML elements and attributes, and hundreds of CSS properties. Few people memorise all of them, and that's okay: Professional programmers look things up all the time.

Some good places to find good, up to date information:

- Mozilla Developer Network (MDN)
- CSS-Tricks


## Further Reading