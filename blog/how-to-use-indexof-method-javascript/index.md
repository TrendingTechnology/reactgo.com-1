---
title: How to use indexOf method in JavaScript
date: "2018-12-17"
tags: ['javascript']
---


- In JavaScript __indexOf__ method is used to get the index of the first occurrence of the search value in the string.

- The indexOf method returns -1 if the search value is not found.

- The indexOf method is case sensitive.


### Examples

```js

const welcome = "I see what's happening here"

console.log(welcome.indexOf('happening')) //  13

console.log(welcome.indexOf('I'))  // 0

console.log(welcome.indexOf('hey')) // -1

```

__case sensitive__ example

```js

console.log("Clap along".indexOf('clap')) //  -1

```

