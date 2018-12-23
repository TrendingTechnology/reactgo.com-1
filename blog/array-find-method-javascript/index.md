---
title: How to find the value in an array JavaScript
date: "2018-12-10"
tags: ['javascript']
---


In javascript __Array.find( )__ method help us to find the particular value in the array.

**syntax** :  Array.find(callbackfunction)


`Array.find()` method runs the callback function on every element present in the array and returns the first matching element. Otherwise, it returns `undefined`.




**Find the object from an array by using property**


```js

const flowers = [

  {
    name:'Aster', color:'red'
  },
  {
    name:'Azalea', color:'pink'
  },
  {
    name:'Daisy',color:'white'
  }

]


console.log(flowers.find((flower)=>flower.name === 'Daisy'))


//  { color: "white",name: "Daisy"}

```

**Find a number greater than 2**

```js

const numbers = [1,2,3,4];

console.log(numbers.find((number)=>number > 2 ));

//output 3

```

Because 3 is the first matching value, so that find method returns 3.
