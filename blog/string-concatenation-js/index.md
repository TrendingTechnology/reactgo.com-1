---
title: Three ways to do string concatenation in JavaScript
date: "2018-12-20"
tags: ['javascript']
---

In this tutorial, we are going to learn three different ways of doing String concatenation in JavaScript.


### First way

 The (+) plus operator helps us to concat the strings in JavaScript.

```js
let str1 = "hello"

let str2 = " world"

console.log(str1+str2) // "hello world"


```


### Second way

There is an inbuilt concat method in javascript which also does the string concatenation.


```js

let str1 = "Hello";

let str2 = " Google";

let str3 = " Search";


console.log(str1.concat(str2,str3))  // "Hello Google Search"

```

The concat method returns the new string by combining the provided strings.


### Third way

```js

let arr = [ ]

let raisedHand = "✋";

let baby = "👶 "

arr.push(baby,raisedHand)


console.log(arr.join('')) //"👶 ✋"

```
`join()` method is used combine the array of individual strings into a single string.