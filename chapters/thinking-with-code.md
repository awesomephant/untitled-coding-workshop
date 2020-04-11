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
- [Get the workshop repo](#clone)
- [Make a drawing](#clone)
- [Commit your changes](#clone)
{% endtodo %}


## Get the workshop repository
After installing all the tools we need in the previous chapter, we're ready to start working on some code.

I've created a git repository where we'll keep all of our work at [github.com/awesomephant/ucw-exercises](https://github.com/awesomephant/ucw-exercises).

To start working with this repo, you need to complete a few steps.

### Clone the repository

Open the command line on your machine, and navigate to a place in your file system where you'd like to keep the workshop folder.

Then, we're going to download a copy of the workshop repository into a folder on your computer by running:

```
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

## Make a drawing
Under ```exercises/chapter-1```, you'll find a file called ```max.html```. Make a copy of it, and give the copy a different name. This is the file where you'll be doing your coding.

Open it in your browser by going to ```http://localhost:3000/chapter-1/[Your filename here]```

## Commit your changes

```
git status
```

```
git add exercises/chapter-1/[your file]
```

```
git commit -m "Some message"
```

```
git push
```