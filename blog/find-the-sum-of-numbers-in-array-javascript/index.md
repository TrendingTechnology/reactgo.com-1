---
title: How to find the sum of numbers in an array javascript
date: "2018-12-15"
tags: ['javascript']
---

In this tutorial we are going to learn two ways to find the sum of an array of numbers by using
JavaScript.


### First way using for of loop.


```js

let arr = [1,2,3,4,5];

let sum = 0;

for (let num of arr){

    sum = sum + num
}

console.log(sum) // 15

```

In the above code, we used `for of loop` to get the `number` directly instead of `index`.

On each iteration, we have added the `number` to `sum` variable.

---

### Array.reduce( ) method

There is an inbuilt `reduce` method in JavaScript which helps to calculate the sum of numbers in the array.



```js
let arr = [1,2,3,4,5];

const sum =  arr.reduce((result,number)=> result+number);

console.log(sum) // 15

```

In the above code on each iteration reducer function store, the numbers sum inside the `result` parameter and finally returns the result value.

`reduce()` method takes the [callback function](/what-is-a-callback-function-javascript/) as its first argument and runs that callback function on each element present in the array.

The callback function takes two parameters `result` and `current` element.



