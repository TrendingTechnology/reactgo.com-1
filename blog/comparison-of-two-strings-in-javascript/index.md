---
title: Comparison of two strings in JavaScript
date: "2018-12-14"
tags: ['javascript']
---

In JavaScript, we can use a comparison operator to compare the strings.

We are using three equals (===) comparison operator instead of double equals to avoid the type coercion.

```js

let str1 = "losS";

let str2 = "losS";

console.log(str1 === str2 ) //  true


let a = "c124";

let b = "c124";


console.log(a === b ) // true

```

**three equals (===)** : This operator only returns true when both values and types are same.


Let's write our own function which help us to compare strings.


```js

function strCompare(str1,str2){

    return str1 === str2 ;
}


console.log(strCompare('king','king')) // true;

console.log(strCompare('open','close')) // false;




```