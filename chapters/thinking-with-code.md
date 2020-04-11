---
layout: post
tags: post
supTitle: "Chapter 2"
title: "Hello World"
intro: "intro goes here"
date: 2019-01-03
thumbnail: /assets/tools.png
---

{% todo %}

## Things to do
- [Get the workshop repository](#get-the-work­shop-repos­i­tory)
- [Draw an object in your room](#draw-an-ob­ject-in-your-room)
- [Commit your changes](#commit-your-changes)
{% endtodo %}


## Get the workshop repository
After installing all the tools we need in the previous chapter, we're ready to start working on some code.

I've created a git repository where we'll keep all of our work at [github.com/awesomephant/ucw-exercises](https://github.com/awesomephant/ucw-exercises).

To start working with this repo, you need to complete a few steps.

### Clone the repository

Open the command line on your machine, and navigate to a place in your file system where you'd like to keep the workshop folder.

Then, we're going to download a copy of the workshop repository into a folder on your computer by running:

```bash
git clone https://github.com/awesomephant/ucw-exercises.git
``` 

As you can see, this command has three parts:
- ```git``` starts the git program we installed previously.
- ```clone``` is a *command* within git for making copies of repositories.
- ```[the url]``` is an *argument* of the clone command that tells it which repository to clone.

This multi-part structure is very common in command-line tools. We've already been using it with ```cd```, and we'll encounter more of it soon.

When ```git clone``` is finished, it should have created a new folder called ```ucw-exercises```. You can verify this by running ```ls```, or looking for it Finder.

### Install dependencies
In short, dependencies are programs written by other people that our program is built on top of. Most programs are written on top of many dependencies – often dozens or hundreds.

In this project, we only need two: [Gulp](https://gulpjs.com/) and [Browsersync](https://www.browsersync.io/). Gulp is a program that will help us set up our build process, and Browsersync will give us an auto-updating preview of what we're working on. 

On the command line, run ```cd ucw-exercises``` to enter the project directory. Then, run ```npm install``` to install our dependencies.

Note that you only need to install the dependencies the first time you start a new project. Whenever you come come back to it, you can go straight to the following step.

### Start the development server
While in the project directory, run ```npm run start```.

This will tell Browsersync to start tiny webserver on your computer that only you can see. This server has a special address: [http://localhost:3000](http://localhost:3000).

Browsersync should open this URL in your browser automatically (if not, type it in manually). If you see a page with a welcome message, you're good to move on.

You can stop the server (or any other command line program) by hitting ```Ctrl+C```.

### Open the workshop folder in VSCode
Open VSCode, and open the workshop folder using the command palette (```Cmd+Shift+P```). You should see a whole list of files and folder on the left, and an empty pane on the right.

Feel free to look at some of the files in the folder. You'll recognise that ```index.html``` inside the ```exercises``` folder is the welcome page we saw in the previous step.

## Draw an object in your room
Under ```exercises/chapter-1```, you'll find a file called ```max.html```. Make a copy of it, and give the copy a different name. This is the file where you'll be doing your coding.

Open it in your browser by going to ```http://localhost:3000/chapter-1/[Your filename here]```. When I work on websites, I like to have VSCode and the browser open at the same time, like this:


There are quite a few things going on in this file, but for now we'll focus on the part between ```<script>``` and ```</script>```. This is a Javascript program. To understand what's going on here (and in any other program), you read it line by line from to to bottom.

First, we're setting up some variables. We'll talk about variables in detail later, but for now it's enough to know that ```el``` and ```c``` are references to a special HTML element called ```<canvas>``` that lets us draw two-dimensional images using Javascript.

```js
const el = document.querySelector('#world')
const c = el.getContext('2d')
```

Then, we're setting the dimensions of that element relative to the size of your browser window:

```js
c.canvas.width = window.innerWidth - 100;
c.canvas.height = window.innerHeight - 100;
```
Finally, there are a lot of lines that look like this:

```js
c.fillRect(120, 300, 900, 10)
```

I could write a paragraph about what ```fillRect()``` and all the numbers mean, but it probably more effective for you to find out for yourself.

Spend some time changing the numbers, deleting, and adding lines and watch what happens in the browser window (it should refresh automatically each time you save a file).

When you feel comfortable, make a drawing of an object in your room.

### Looking things up
As you start experimenting, you'll probably start to have questions: How do I draw an outlined shape? How do I draw a circle? How do I draw a line?

While I'm of course happy to help out, I would encourage you look for answers yourself. This isn't because I'm lazy (although I am), but because finding and reading technical documentation are central skills in programming.

For Javascript, [Mozilla Developer Network (MDN)](https://developer.mozilla.org/en-US/) is one of the best places to look things up. The [entry about fillRect()](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fillRect), a method you're already familar with, might be a good place to start.

[Stackoverflow](https://stackoverflow.com/) also has good answers to many specific questions, although they're often just a code snippet with little explanation.

## Commit your changes



```bash
git status
```

```bash
git add exercises/chapter-1/[your file]
```

```bash
git commit -m "Some message"
```

```bash
git push
```

## Further Reading

- [Drawing shapes with canvas](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes) on MDN