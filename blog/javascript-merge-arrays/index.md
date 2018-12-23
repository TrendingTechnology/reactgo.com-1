---
title: How to merge or combine  arrays in JavaScript
date: "2018-12-13"
tags: ['javascript']
---


In JavaScript there are manyways to merge or combine arrays let's learn the most commonly used
methods to merging arrays.


## Array.Concat( ) method

JavaScript concat method creates the new array by merging two or more arrays instead of mutating the existing arrays.


```js

const num1  = [1,2,3,4];
const num2 = [5,6,7,8];

console.log(event.concat(odd))

// [1,2,3,4,5,6,7,8]

```


_Merging three arrays_

```js
const num1 = [1,2,3];
const num2 = [4,5,6];
const num3 = [7,8,9];

console.log(num1.concat(num2,num3));

// [1,2,3,4,5,6,7,8,9]

```


### Spread operator

We can also use JavaScript spread(...) operator to merge arrays.


```js
const num1  = [1,2,3,4];
const num2 = [5,6,7,8];

console.log([...num1,...num2]);

// [1,2,3,4,5,6,7,8,9]

```

### For loops

We can also merge arrays by using the loops.

```js

const  num1  = [1,2,3,4];
const num2 = [5,6,7,8];


for (let n of num2){

  num1.push(n)

}

console.log(num1)

// [1, 2, 3, 4, 5, 6, 7, 8]


```

In the above code, we changed the existing array numbers by pushing the `num2` array elements.