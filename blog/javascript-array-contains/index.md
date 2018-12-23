---
title: JavaScript Array Contains
date: "2018-12-16"
tags: ['javascript']
---

How to check if array contains particular value or not?

In JavaScript, we can easily check if the array contains a particular element or value by using  ` Array. includes()` method.



```js

let arr = ['king','ping','oppo','lol'];


console.log(arr.includes('king')) //  true

console.log(arr.includes('jacket')) // false

console.log(arr.includes('oppo')) // true


```

### Array.includes( )

`Array.includes()`  method takes the element as its argument and returns `true` if an array contains that element, otherwise returns `false`.