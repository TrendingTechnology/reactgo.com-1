---
title: How to get the Object values list in JavaScript
date: "2018-12-13"
tags: ['javascript']
---


In this tutorial, we will learn about how to get values in the javascript Object.


Object.values( ) method is used to get the enumerable object property values as an array.

```js

let colors = {
    black: "#00000",
    white: "#ffff",
    red: "#FF0000"
}


console.log(Object.values(colors));

// ["#00000", "#ffff", "#FF0000"]


let  emails = {
    user1 : "example1@gmail.com",
    user2 : "example2@gmail.com",
    user3 : "example3@gmail.com",
}

console.log(Object.values(emails));

// ["example1@gmail.com", "example2@gmail.com", "example3@gmail.com"]


```

`Object.values()` method takes the `object` as its first argument and returns the array of object values. The ordering of the values in an array are the same order present in the object.
