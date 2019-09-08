---
layout: post
tags: post
title: "Going live"
intro: Buying hosting, Deployment
---

How do we get a website out to the real internet (ie. *deploy* it)? In theory, you could expose your laptop to the public internet and have people connect to it (we're already running a server for development). Generally that's a bad idea and you want to pay someone else to run a computer somewhere for you.

There's two things we need for a website that's just flat files:

1. Webspace: A bit of a harddrive somewhere 
2. DNS: Mapping from some domain name to your webspace.

Both of these things are essentially commodity and it doesn't really matter where you buy them. The differences between companies are things like guaranteed uptime, customer service etc.

Once that's in place, we need some way to push our code from our laptop up to the server we've rented. The most straightforward way of doing this through FTP.

- Filezilla
- Maybe a command line thing because it's more efficient

There's usually some wrangling of menus on your hosting provider (particularly setting A-Records).

After a couple hours we should be live.