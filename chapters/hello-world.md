---
layout: post
tags: post
supTitle: "Chapter 2"
title: "Hello World"
intro: "Getting the workshop repository, drawing basic shapes, comitting your changes."
date: 2019-01-03
thumbnail: /assets/window.png
---

{% todo %}

## Things to do
- [Set up the workshop repository](#set-up-the-work­shop-repos­i­tory)
- [Draw what you see out of your win­dow](#draw-what-you-see-out-of-your-win­dow)
- [Record your changes to the repos­i­tory](#record-your-changes-to-the-repos­i­tory)
{% endtodo %}

In this chapter, we're going to use the tools we installed previously to write a program, run it through a build process, and upload it to version control.

## Set up the workshop repository

I've created a git repository where we'll keep all of our work at [github.com/awesomephant/ucw-exercises](https://github.com/awesomephant/ucw-exercises). To contribute, you need to create a copy (or *clone*) of the respoitory on your computer.

### Clone the repository

We're going to use git to download a copy (or *clone*) of the workshop repository. To do this, open the command line and navigate to a place in your file system where you'd like to keep the workshop folder. Then run the following command:

```bash
git clone https://github.com/awesomephant/ucw-exercises
``` 
Note that the second argument – the location of the repository we want to clone – is the same as the URL of the repository page on Github.

When the command is finished, it should have created a new folder called ```ucw-exercises```. You can verify this by running ```ls```, or looking for it in Finder.

### Set up the build process

The build process for this project is simple. All it does for now is watch the project files, and refresh the browser window whenever you make a change.

I've already set this up, so all you need to do is install the necessary dependencies. You do that by ```cd```-ing into the project folder, and running: 

```bash
npm install
```

If the command finishes without errors, you're good to move on.

Note that you only need to install the dependencies the first time you start working on a new project. Whenever you come come back to it, you can go straight to the following step.

### Start the development server
While in the project folder, run the following to start the build process:
```bash
npm run start
```

This will start a tiny webserver on your computer that only you can see. It has this special URL: [http://localhost:3000](http://localhost:3000). This should open in your browser automatically. If not, copy it into the address bar manually.

If you see a page with a welcome message, you're good to move on.

You can stop the server (or any other command line program) by hitting ```Ctrl+C```.

### Open the workshop folder in VSCode
Open VSCode, and open the workshop folder using the command palette (```Cmd+Shift+P```). You should see a whole list of files and folder on the left, and an empty panel on the right.

Feel free to look at some of the files in the folder. You'll recognise that ```index.html``` inside the ```exercises``` folder is the welcome page we saw in the previous step.

## Draw what you see out of your window
Under ```exercises/chapter-1```, you'll find a file called ```max.html```. Make a copy of it, and give the copy a different name. This is the file where you'll be doing your coding.

Open it in your browser by going to ```http://localhost:3000/chapter-1/[Your filename here]```. When I work on websites, I like to have VSCode and the browser open at the same time, like this:

{% fig "/assets/layout.png" "" %}

There are a few things going on in this file, but for now we'll focus on the part between ```<script>``` and ```</script>```. What you're looking at here is a Javascript program that draws a simple image to the screen:

Each line in this program is a command, not unlike the commands we've been entering on the command line. The computer starts at the top of the program and executes one command after the other until it reaches the end. 

The first four lines set up a number of different *variables*. We'll deal with variables in detail later, but for now it's enough to understand that we're defining a two-dimensional drawing area 1000 pixels square and storing it in a variable called ```c```.

```js
let el = document.querySelector('#world')
let c = el.getContext('2d')
c.canvas.width  = 1000;
c.canvas.height = 1000;
```

Then, we're defining a fill colour that should apply to ```c```.

```js
c.fillStyle = 'rgb(36,40,91)'
```

Finally, we're using a function called ```fillRect()``` to draw rectangles onto ```c```. The four numbers inside the brackets are called *parameters* and tell ```fillRect()``` where we want our rectangle, and how big it should be.

```js
c.fillRect(120, 300, 900, 10)
```

Spend some time changing these numbers, setting ```c.fillStyle``` to different values, deleting, and duplicating lines.

When you've developed a feeling for how ```fillRect()``` and ```fillStyle``` work, use them make a drawing of what you see out of your window.

If you're interested in drawing different kinds of shapes, take a look at [this article on the Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes). The [page on ```fillRect```](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fillRect) might also be useful. MDN is generally a good place to look things up, and looking things up is generally an important part of programming.

## Record your changes to the repository

Once you're happy with your program, you're ready to upload your contribution to the workshop repository.

To do this, we're going to create a *commit* in git. A commit is a set of file changes you've made, along with a message that sums up what you did. As you work on a project, your commit messages form a record of what you did at which point.

To create a new commit, we need to run a series of commands on the command line. Before you start, make sure you've stopped the development server by pressing ```Ctrl+C```.

```bash
git status
```
This will list all the files you've changed since you downloaded the repository. It should only display one file: the copy of ```max.html``` we made earlier. 

```bash
git add .
```

This will add all changed files from the list to the new commit. To verify this worked, you can run ```git status``` again. Your file should now be listed under *Changes to be committed*.


```bash
git commit -m "[Describe the changes you made]"
```

This will generate a new commit containing the files we added in the previous step, and associate it with a message. For this exercise, a short message like *Added drawing* is enough.

```bash
git push
```

This will upload (or *push*) the commit we just created to the Github repository. In some cases, you will be asked to enter your Github username and password here.

You can verify everything worked correctly by looking at the [repository page on Github](https://github.com/awesomephant/ucw-exercises). After a few minutes, your drawing should also be [available on the workshop page](https://www.maxkoehler.com/ucw-exercises/exercises/).


## Further Reading

- [Chapter 2.2](https://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository) from *Pro Git* gives a more thorough explanation of recording changes to a git repository.
- The in-progress book [*Programming Design Systems*](https://www.programmingdesignsystems.com/) by Rune Madsen is fantastic. Maybe start with the [chapter on colour](https://www.programmingdesignsystems.com/color/color-models-and-color-spaces/index.html#color-models-and-color-spaces-JDQ1fRD).