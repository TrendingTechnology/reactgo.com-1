---
title: How to clear array in JavaScript
description: "IIn this tutorial, we are going to learn different approaches to clear the array in javascript."
date: "2018-11-26"
logo: ''
image:  "cleararray.png"
tags: ['javascript']
---

In this tutorial, we are going to learn different approaches to clear the array in javascript.

### First way

```js
var arr = [1,2,3,4,5,6]

arr = [ ]

console.log(arr)

//empty array [ ]

```
In the above example, we updated arr with the new empty array.

### Second way

```js
var arr = [1,2,3,4,5,6];

arr.length = 0;

console.log(arr);

//empty array [ ]

```
In the above code, we updated the length of the array to 0. so that it becomes empty and it takes more time compared to the first way.

### Third way

```js
var arr = [1,2,3,4,5,6]

while(arr.length){

   arr.pop()

}

console.log(arr)

//empty array [ ]

```

we are using the `Array.prototype.pop()` inside the while loop to remove every element present in the array.


Performance test shows that, the first way is the fastest way to clear the array if you are interested to see the performance test then check out [clear arrays performance](http://jsben.ch/0BNxz).

Happy coding…