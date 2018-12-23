---
title: Array.some() method in JavaScript
date: "2018-12-12"
tags: ['javascript']
---


The some( ) method executes the callback function on each element present in the array and returns true immediately if at least one element passes the test condition otherwise it returns false.


```js

const users = [

    { id:1,user:"gowtham"},
    {id:2,user:"king"},
    {id:3,user:"nick"},
]


console.log(users.some(user=>user.id === 2)) //  true


console.log(users.some(user=>user.id === 10)) //  false


```



### To check whether an email is available or not.
.

```js

const emails = [
     "example1@gmail.com",
     "example2@gmail.com",
     "example3@gmail.com",
]



console.log(emails.some(email=>email === "example3@gmail.com")) // true

console.log(emails.some(email=>email === "example10@gmail.com")) // false


```

>Note: The some() method executes the callback function until it finds the truthy value otherwise it returns false.
