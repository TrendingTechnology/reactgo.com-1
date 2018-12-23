---
title: How to find the maximum number of an array in javascript
date: "2018-12-14"
tags: ['javascript']
---


To find the Maximum number in the array of elements we can use __Math.max( )__ method in JavaScript.

__Math.max( )__ method accepts the numbers as an argument and returns, the maximum number.

syntax: `Math.max(number1,number2,..)`


```js
let arr = [11,2,3,565,53,2];


console.log(Math.max(...arr)) // 565

```

In the above code we used (...)spread operator to spread the array of numbers into individual numbers.


We can write our function by using above logic.


```js

function findMax(arr) {
  if (!arr) {
    return;
  }
  return Math.max(...arr);
}


console.log(findMax([4,32,64,39,26])) // 64


console.log(findMax([10,-10])) // 10

console.log(findMax()) // undefined

```