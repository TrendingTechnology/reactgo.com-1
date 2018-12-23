---
title: Array.every() method in JavaScript
date: "2018-12-12"
tags: ['javascript']
---


The every( ) method executes the callback function on each element present in the array and returns false immediately if at least one element fails the test condition otherwise, it returns true.



__Checking whether all users belong to the same school.__

```js

const users1 = [

    { id:1,user:"gowtham", school:"wim"},
    {id:2,user:"king" ,school:"wim"},
    {id:3,user:"nick",school:"rim"},
    {id:4,user:"jim",school:"wim"},
]


console.log(users1.every(user=>user.school === "wim")) //  false


const users2 = [

    { id:1,user:"gowtham", school:"wim"},
    {id:2,user:"king" ,school:"wim"},
    {id:4,user:"jim",school:"wim"},
]


console.log(users2.some(user=>user.school === "wim")) //  true

```

__Checking whether all numbers are even.__

```js

const numbers = [2,4,6,8,10];

console.log(numbers.every(number => number % 2 === 0)) // true

```


```js
const allnumbers = [1,2,3,4,5,6,7,8,9,10];

console.log(numbers.every(number => number % 2 === 0)) // false

```

**Important points**

- The `every()` method only returns true if all elements in the array passes the test condition.

- The `every()` method returns false if atleast one element in the array fails the test condition.