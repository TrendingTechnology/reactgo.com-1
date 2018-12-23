---
title: How to use absolute value method(Math.abs) in JavaScript
date: "2018-12-21"
tags: ['JavaScript']
---


In JavaScript Math.abs( ) method is used to get the absolute value of a given number.

The absolute value of number is never negative.


### Examples and Usage

```js

const num = -1233

console.log(Math.abs(num)) // 1233

// The absolute value of -1233 is 1233


console.log(Math.abs(5-8)) // 3

console.log(Math.abs(-1+9)) // 8

```

The `Math.abs()` method returns zero if you pass an empty array or a string.

```js

console.log(Math.abs('')) // 0

console.log(Math.abs([ ])) // 0

```