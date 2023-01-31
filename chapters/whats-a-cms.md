---
layout: post
tags: post
supTitle: "Chapter 3"
title: "What's a CMS?"
intro: ""
date: 2019-01-06
thumbnail: /assets/tools.png
---

## Introduction
CMS stands for Content Management system.

This assumes that you know some HTML. If you want to try out the example at the end, you need some command line knowledge.

## The Problem
If you want to make a website, you can get quite far with just HTML (and CSS and Javascript, but we're not really talking about those here). But as your projects grow, you might run into problems. For example:

- Your site has lots and lots of content, like a hundred recipes, or a thousand archival records, or ten thousand of some other thing. It's not that you couldn't write out HTML for all of those, but it would be pretty tedious. And if you wanted to change anything about the markup, like making the titles of all your recipes a ```<h3>``` instead of an ```<h2>```, that would be annoying, too.
- There are other people who need to edit content on your website. You could teach all of them how to write HTML, but that's not always an option: Maybe they work in a different department, or they'll want to work on the site long after you've moved onto the next project.

## The solution
The solution to these problems is to separate your content from your HTML. Three things usually have to happen for this:

1. You take all the text and images (ie. your content, or your data) out of your HTML file and put them into some kind of data store (more on this later).
2. You write templates (sometimes called views) that look more or less like HTML but have special placeholders where your text and images were before.
3. You set up some kind of system that takes your data and your templates and combines them back into regular HTML - the kind we were writing before.

This solution is applied all the time, all over the web. Because of this, there are dozens of choices for all three steps: data stores, templating languages, and software that smushes data and templates together into HTML. Here are some examples:

### Data stores

- Text files. This includes Markdown, CSV, TSV, JSON, and other plaintext formats.
- Databases like MySQL or Postgres
- Productivity software like Google Docs, Dropbox, Notion, Airtable
- Fancy key-value storage you can rent from AWS, Google, or other cloud providers

Pretty much anything you can keep _information_ is going to work as a data store for your website.

### Templating languages

- JSX – usually comes with a framework called React.
- Twig – often used in PHP projects.
- Mustache – it's named that because the placeholders use curly braces ``:``, which kind of look like a sideways mustache.
- Handlebars – see above.
- Liquid – developed by Shopify, but used elsewhere too.
- PHP – really a programming language, but has been used for templating for a logn time.
- ERB – comes with a framework called Ruby

### Systems

Some systems are attached to particular datastores and templating languages. For instance, Wordpress only works with MySQL and generally uses PHP templates (though I like to use Twig instead). Kirby uses PHP templates too, but stores the data in text files.

If that's too limiting, there are systems that give you choices. For example, Eleventy mostly uses text files as its datastore, but you can write templates in Liquid, Handlebars, Mustache, and a bunch of other languages.

You might also choose to use something called a headless CMS

Finally, you could choose to write your own system to combine whichever datastore with your favourite templating language (or invent your own).

You're probably already using all kinds of CMSs. Think about what happens when you post an image on Instagram: You're uploading that image to a datastore somewhere (I happen to know it's Postgres), and it's combined with a template (I happen to know it's JSX) to produce the website you see. Wikipedia is MySQL for data and PHP for templating. The New York Times sometimes uses Google Docs for their data (at least initially).

All kinds of combinations of

## An Example

## References
- https://css-tricks.com/what-is-a-headless-cms/
