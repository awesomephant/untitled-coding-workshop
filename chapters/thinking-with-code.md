---
layout: post
tags: post
supTitle: "Chapter 3"
title: "Variables and Loops"
intro: ""
date: 2019-01-06
thumbnail: /assets/tools.png
---

{% todo %}

## Things to do
{% endtodo %}

The goal for this chapter is to look at some programming principles and see what kind of aesthetics might emerge from them.

## Variables

*Variables* let you store and retrieve pieces of information at different points in your program.

In Javascript, you declare a variable using the keyword ```let```, followed by name for our variable, and its initial value. If we wanted to store the number ```17``` in a variable called ```a```, we would write:

```js
let a = 17
```

After that, we can use ```a``` anywhere in our program, and the computer will retrieve its value from memory:

```js
c.fillRect(10,10,a,a)
```

You can also set variables relative to other variables. In this case, the computer will look up the values of ```base``` and ```ratio```, multiply them and assign the result to ```a```. 

```js
let ratio = 1.5
let w = 10
let h = base * ratio

c.fillRect(10,10,w,h)
```

## Loops

```js
let i = 0;
while (i < 100){
    c.fillRect(10, i)
    i++;
}
```

## Exercise: Variables and Loops

Let's try to put these two concepts together to make a drawing.
