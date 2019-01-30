---
title: How to loop through array of objects in JavaScript(es6)
date: "2019-01-31"
tags: ['javascript']
image: "javascript-loop-through-array-objects.png"
---

In this tutorial, we are going to learn different ways to loop through an array of
objects in JavaScript.


### First way: ForEach method

In es6 we have a __forEach__ method which helps us to iterate over the array of objects.


```js
let users = [
   {
     id:1,
     name:"king"
   },
   {
     id:2,
     name:"john"
   },
  {
    id:3,
    name:"gowtham"
  }
]

users.forEach((user)=>console.log(user.id,user.name));

// first iteration 1,"king"
// second iteration 2,"john"
// third iteration 3,"gowtham"


```

forEach methods takes the [callback function](/callback-function-javascript/) as an argument and runs on each `object` present in the array.


### Second way: For of loop

```js
let users = [
   {
     id:1,
     name:"king"
   },
   {
     id:2,
     name:"john"
   },
  {
    id:3,
    name:"gowtham"
  }

]


for(let user of users){
  console.log(user.id,user.name)
}
```

Here we used a __for of__ loop so that on each iteration different object is assigned to the `user` variable.