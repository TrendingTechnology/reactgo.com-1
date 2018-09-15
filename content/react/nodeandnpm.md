---
myid: 2
date: '2018-09-10'
title: Node and npm
description: "In this tutorial, we will be set up our development environment for that we need to install nodejs and npm so that we can install external packages from the package manager"
logo: "/img/reactlogo.svg"
thumbnail: "/img/reactjs.png"
tags: ['react']
---

# What is Nodejs?

Nodejs is a backend JavaScript framework built on top of the v8 JavaScript engine.

**why we need this ?**

- Because we need to run a local development server with the help of nodejs and also we need to test the app on the local machine.

**How to install nodejs?**

- Open nodejs.org website and download.

 <blockquote>
 Once your installation is completed open your terminal and run (node -v) if the version number is displayed then your are successfully installed.
 </blockquote>

# What is npm?

npm is a node package manager which is used to install the libraries created by the other people.
By using npm you can install or uninstall packages at any point in time.

_some important commands._

To install any new packages you need to run these commands in your terminal.

```bash
npm install <packagename>
```

Uninstalling a package

```bash
npm uninstall <packagename>
```

```bash
npm install -g <packagename>
```

-g is a global flag it means the package is globally installed in your system.

```bash
npm install -D <package>
```

-D it means the package which is only used during development, not in production.
