---
layout: post
tags: post
title: "Tooling up"
intro: Installing development tools, separation of concerns, getting started with HTML and CSS, how to look things up
date: 2019-01-02
---

## Tools

Coding isn't just about writing code, it's also about using tools *around* code.

### A code editor

We're using [VS Code](https://code.visualstudio.com/) for this, mostly because that's what I happen to use. There are other code editors like [Atom]() and [Notepad++](), which are good, too.

Fundamentally they all do the same thing: edit text files. You could absolutely make websites with the text editor that comes with your operating system — code editors just make things more convenient by adding things like syntax highlighting, shortcuts, and advanced search.

### A browser

Most web devlopers use Chrome, I like Firefox. Both these browsers have built-in developer tools we'll be using.

### The command line
It's called *Terminal* on a Mac. It lets you type commands to do stuff on your machine. We won't be using it much for this, but it' good to get comfortable with it as we'll be using it to run tooling.

### Node.js

Only so we can run a development server ([BrowserSync](https://www.browsersync.io/))

- Install Node
- Write a package.json
- ```npm install``` to get BrowserSync
- npm start to run the server

If we add more tooling later (Eleventy!) we add it to the package file. The neat thing about this is that you can give the ```package.json``` to someone else and they can install the same tooling as you.

## How to look things up

Programmers look stuff up all the time. Some good places to find good information:

- [Mozilla Developer Network (MDN)](https://developer.mozilla.org/en-US/)
- [Caniuse](https://caniuse.com/) for browser support.
- [CSS-Tricks](https://css-tricks.com/) particularly on grid and flexbox. 
- Tooltips inside the code editor