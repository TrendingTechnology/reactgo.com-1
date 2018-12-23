---
title: How to sort the array of objects by key in JavaScript
date: "2018-12-21"
tags: ['javascript']
---


JavaScript has an inbuilt __sort__ method which helps us to sort the array of the objects easily; we don't need to write our own custom sort methods.

consider we have an array of objects with `name` and `price` properties.

```js

const vegetables =  [

    {name:"beans",price: 5},
    {name:"tomato",price: 3},
    {name:"pumpkin",price: 2},
    {name:"broccoli",price: 7},
]

```
### We need to sort the vegetables array in ascending order by using its price property.

example:

```js
const vegetables =  [

     {name:"beans",price: 5},
     {name:"tomato",price: 3},
     {name:"pumpkin",price: 2},
     {name:"broccoli",price: 7},
]


console.log(vegetables.sort((a,b) =>  a.price-b.price ))

```
```js
output - >

[
  {name: "pumpkin", price: 2},
  {name: "tomato", price: 3},
  {name: "beans",  price: 5},
  {name: "broccoli", price: 7}
]

```



**Array.sort()** : The sort method takes the callback function as its argument and returns the sorted array.

The return condition inside the callback function.

- if our return condition is   `a - b` then it sorts the array in ascending order.

- if our return condition is `b - a` then it sorts the array in descending order.



Let's sort our vegetables array in descending order.

```js
console.log(vegetables.sort((a,b) =>  b.price-a.price ))

```

```js
output- >

[
  {name: "broccoli",price: 7},
  {name: "beans",price: 5},
  {name: "tomato",price: 3},
  {name: "pumpkin",price: 2}
]

```