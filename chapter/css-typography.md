---
layout: post
tags: post
title: "Getting started with CSS"
intro: Selectors, Inheritance, Specificity
date: 2019-01-04
---

## Selectors and Rules

```css
h1 {
    color: red;
    font-family: 'Times New Roman', serif;
}
```

CSS files are lists of instructions for how things are supposed to look. There's a *selector* followed by curly brackets and a list of *rules*.

## Inheritance / The Cascade

These rules *cascade* (that's the *C* in CSS).

## Specificity

Sometimes it happens that more than one rule applies to the same element. The browser decides which one to follow based on the selector: Whichever rule is more *specific* to the element in questino is applied. If two rules have the same level of specificity, whichever comes later in the file counts.

It's generally good practice to rely on specificity as little as possible and keeping selectors short. Otherwise, you can dig a hole for yourself where you have to apply longer and longer selectors to make changes. I try to use a single classname for most things, with some element selectors thrown in.

CSS doesn't have to be well-formed and semantic in the same way HTML is: It's more important to find some system that makes sense to you.

## Browser Styles

Our HTML file already has some styles applied from the browser, we can leave those in place and override them or reset them using something like:

```css
* {
    margin: 0;
    padding: 0;
    font-size: 100%;
    box-sizing: border-box;
}
```