---
title: How to check if a string starts with another string in JavaScript
date: "2018-12-11"
tags: ['javascript']
---


In this tutorial, we are going to learn two different ways to check if a string starts with a specified string.


### First way

`startsWith()` method in JavaScript takes the search string as its first argument and check whether a given string starts with a search string and returns true or false.

**syntax**: `String.prototype.startsWith(searchstring,position)`


```js
const str = 'this is my name'

console.log(str.startsWith('this'))

// true
```

By default, the string searching starts from position `0`. We can also change its position by passing the second argument.


```js

const str = 'this is my name'

console.log(str.startsWith('my',8)) // true

console.log(str.startsWith('my')) // false

```

### Second way

The `includes()` method returns true if a search string found in the given string, otherwise it returns false.


```js

const str = 'hey buddy this is awesome place';


console.log(str.includes('is')) // true

console.log(str.includes('place')) // true

console.log(str.includes('notfound')) //  false

```


>Note: The above two methods are case-sensitive.