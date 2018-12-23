---
title: How JavaScript Logical or operator (||) works
date: "2018-12-18"
tags: ['javascript']
---

In JavaScript logical or(||)  operator is used to evaluate the expressions from left to right.

It returns the first expression if it can be converted to true otherwise, it returns the second expression.


```js

 expression 1 || expression 2 (short circuit evaluated)

```

The second expression is short circuit evaluated it means the second expression is executed or evaluated only if the first expression evaluates to false.


Examples:

```js

console.log( 1 || 2 )  // 1

console.log( 0 || 10) // 10

console.log(false || true ) // true

console.log(false || false) // false

console.log( " " || "hello") // "hello"

console.log(" " || 0 ) // 0

```