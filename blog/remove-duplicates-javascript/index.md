---
title: How to remove duplicate elements from array JavaScript
description: "In this tutorial, we will learn about how to remove duplicate elements from an array JavaScript."
date: "2018-11-25"
logo: ''
image:  "removearray.png"
tags: ['javascript']
---


In this tutorial, we will learn about how to remove duplicate elements from an array.

### First way

We are using JavaScript `new Set` Object to store the unique elements from the array.

```js
const numbers = [2,3,4,4,2,3,3,4,4,5,5,6,6,7,5,32];

console.log([...new Set(numbers)]);

// [2, 3, 4, 5, 6, 7, 32]
```

### Second way

`Array.map()` method.

```js
const jobs = ['Web Developer','Marketing Manager','Project   Manager','Web Developer'];

function getUnique(arr){

  const final = [];

  arr.map((e,i)=> !final.includes(e) && final.push(e) )

  return final
}

console.log(getUnique(jobs))

//["Web Developer", "Marketing Manager", "Project Manager"]

```

In the above code, on each iteration, we check if an element is not present in the `final` array then we are pushing that element to the `final` array.


### Third way

```js
const jobs = ['Web Developer','Marketing Manager','Project Manager','Web Developer']

function getUnique(arr){

 return arr.filter((e,i)=> arr.indexOf(e) >= i)
}

console.log(getUnique(jobs))

//["Web Developer", "Marketing Manager", "Project Manager"]

```

On each iteration, we are using the Array.indexOf method to get the `index` of that element. if the returned index is greater than the current index then we will add that element to a new array and return it.



Happy coding...