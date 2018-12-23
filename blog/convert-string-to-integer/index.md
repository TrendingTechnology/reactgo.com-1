---
title: Convert string to integer in javascript
description: "In this tutorial, we are going to learn how to convert a numeric string to integer/number in javascript."
date: "2018-11-22"
logo: ''
image:  "numbertostring.png"
tags: ['javascript']
---

In this tutorial, we are going to learn how to convert a numeric string to integer/number in javascript.

### First way

```js
const a = "11";
console.log( + a ) // 11
```

if we just add the plus before the numeric string. it will convert as a number.

### Second way
Number object helps us to convert the numeric strings into a number.

```js
const a = "11";
const b = 4;
const aplusb = Number(a)+b
console.log(aplusb) // 15
```

### Third way

`Number.parseInt()` method takes two arguments first one is string and second one is base

```js
const a = "11";
const b = 4;
const aplusb = Number.parseInt(a,10)+b
console.log(aplusb) // 15
```
In the above code, we used the base 10 because of decimal numbers.

Happy coding....

