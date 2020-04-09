---
layout: post
tags: post
supTitle: "Chapter 1"
title: "Workflow/Tools"
intro: Installing a code editor and development tools, using the command line, setting up a Github account.
date: 2019-01-02
---

{% todo %}

## 💡 Things to do
- [Install Visual Studio Code](#visual-studio)
- [Get used to the command line](#the-command-line)
- [Install node](#node)
- [Install git](#git)
- [Make a Github Account](#github)
{% endtodo %}

Programming is as much about using the right tools and setting up a good workflow as it is about actually typing out code. Most production work has a workflow that looks like this:

1. You write some code.
2. You run some kind of build process to do stuff with that code.
3. You test your program on your own computer
4. You upload your code to some kind of version control system (more on this later).

What specific tools you use to accomplish these things depends on context – what kind of software you're writing, whether you're working alone or in a team, and so on. 

The set of tools we're using for this workshop is pretty close to what I use for freelance web development. If you're interested in writing different kinds of software, you may need to adjust things. In short, they're this:

|Task|Tool|
|----|----|
|Writing code|Visual Studio Code|
|Build process|The command line + node.js|
|Local Testing|Chrome or Firefox|
|Version Control|Git/Github|

The goal for this week is to get all of these things installed on your machine, and to write, build, test, and upload a small program to verify that everything is working correctly.


## Visual Studio

Visual Studio Code is an open-source code editor developed by Microsoft. Note that this is different from Visual Studio (without the *Code*). If you already have a different editor, that's okay too.

{% cta "Download Visual Studio Code" "https://code.visualstudio.com/"%}

Visual Studio Code is really nothing more than a *really good* editor for text files. If you wanted to, you could do all of the programming that follows in TextEdit (I had a teacher once who made us do that for weeks).

The code editor is where you'll be spending most of your time, so it's a good idea to get comfortable with it.

My main suggestion is to start using keyboard commands immediately, even if it's awkward at first. You only need to remember a couple to begin with:

- ```Cmd+Shift+P``` to open the command panel. This is a search function for eveything that's available in the menus. You can open files, swap colur themes, open and close the sidebar, change your editor font size and whatever else you may need to do. it also displays additional keyboard shortcuts for common tasks, so you can start to pick those up over time.
- ```Cmd+P``` brings up a list of files you have currently open. Move up and down the list using the arrow keys, hit ```Enter``` to confirm.

## The command line

The command line (or *Terminal* on Mac) is a window that lets you do things on your computer by typing in commands and hitting ```Enter```. It takes a while to get used to, but once you are you have access to a huge range of tools to make your life as a programmer easier.

You open the command line by looking for the Terminal app.

- Type ```ls``` and hit ```Enter``` on your keyboard. You should see a list of all files and directories you have in your home directory.
- Think of any directory in the list, type ```cd [name of the directory]```, and hit ```Enter```. If you spelled everything correctly, you should now be inside whatever directory you thought of. The directory name should be displayed left of your cursor.
- Run ```ls``` again. Now, you should see a list of everything inside the directory ```cd```'d into in the previous step.
- To go back up to the parent directory, run ```cd ..``` 

Spend a few minutes ```cd```-ing and ```ls```-ing around your file system. You can speed things up by typing only the first few letters of a directory name and hitting ```Tab```, which will complete the name automatically.

If you're comfortable opening the command line and moving up and down your folders, you're ready to move on.

## Node
Node (or Node.js) is a programming language. We probably won't be writing much node ourselves in this workshop, but we are going to use tools that depend on it.

{% cta "Download node for your platform" "https://nodejs.org/en/"%}

 After the installation is complete, you can verify everything worked correctly by opening a terminal and running ```node --version```. If it gives you a version number like ```v10.16.3```, you're ready to move on.


## Git

Git is an open-source version control system that's been around forever and is considered industry standard.

In short, a version control system allows you to save different versions of files as you work on them either by yourself or with other people. It's similar to a shared Google Drive, but with much more fine-grained control over what gets saved, and how.

The central concept in git is the *repository*. A repository (or *repo*) is a project folder full of files, along with every version of those files that were ever saved. Git lets you efficiently create, compare, and combine these file versions, as well as entire repositories. 

{% cta "Download git for your platform" "https://git-scm.com/"%}

Like node, git runs on the command line. Run ```git --version``` to verify the installation worked — if it gives you a version number, you're good to move on.

## Github

Github is a commercial platform that lets you host and collaborate on git repositories. 

While you can absolutely use git without github, it makes many tasks more convenient and is pretty commonly used.

{% cta "Make a free github account" "https://github.com/"%}

Set up your profile and share the link in the workshop group. Once you've done that, I'll give you *commit access* to the workshop repository (more on that later), and you'll be ready to start writing code.

While not necessary for this workshop, it might be useful to know that you can upgrade to a professional acount for free through [Github Education](https://education.github.com/students).

## Further Reading
- Scott Chacon, Ben Straub (2014): *Pro Git*. Available at [https://git-scm.com/book/en/v2](https://git-scm.com/book/en/v2). Much of the what this book talks about is above my head, but [Chapter 1 does a good job explaining](https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control) what version control is and why it exists.

<!-- ## Set up workshop repository
- Open the command line and navigate to a place in your filesystem where you'd like to keep the files for this workshop
- ```git clone https://github.com/awesomephant/ucw-exercises.git```
- ```cd ucw-exercises```
- ```npm install```

## Exercises
You're good to go!

[go here](/exercises/chapter-1)

 -->