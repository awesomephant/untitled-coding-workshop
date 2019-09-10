---
layout: post
tags: post
title: "CSS Part 2: Layout"
intro: The box model, responsive design, CSS Layout with Grid and Flexbox
---

## Everything is a box

- Block vs. inline elements
- Margin, Padding, Width + Height
- Relative vs. static units.

At this point, we're still doing everything in a tiny browser window. We'll work out spacing, link some pages together.

## Grid

For big, two-dimensional, overarching layout stuff.

- ```display: grid```, ```grid-template-columns```, and ```grid-template-rows``` on the container.
- Position the children using ```grid-area```.

(I would argue it's cleaner to move the children around at different breakpoints, rather than changeing the grid.)

Note that you can mix flexible and fixed units together as much as you want.

- ```max-width``` is probably useful here.
- Use devtools to see what's going on.

## Flexbox

Good for small, one-dimensional stuff. Maybe we'll use it on the navigation.

- ```display: flex``` on the container, not much going on on the children.