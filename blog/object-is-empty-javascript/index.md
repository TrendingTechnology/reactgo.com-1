---
title: How to check if the object is empty using JavaScript
date: 2018-12-05
tags: ['javascript']
---

In javascript, we can use Object.getOwnPropertyNames method to check if the given
object is empty or not.


### First way

```js
function isObjectEmpty(obj){

   return Object.getOwnPropertyNames(obj).length >= 1

}

isObjectEmpty({ }) // false

isObjectEmpty({id:1,name:"js"}) // true


```

If we pass an empty object to the `Object.getOwnPropertyNames` it  returns the empty array.
so that by using the length of that array we can check easily is the given object empty or not.


### Alternative way

We can also use Object.keys() or Object.values()


```js

Object.values({ }).length >= 1  // false


Object.values({ id:1}).length >= 1  // true


Object.keys({id:1 }).length >=1 // true

```
