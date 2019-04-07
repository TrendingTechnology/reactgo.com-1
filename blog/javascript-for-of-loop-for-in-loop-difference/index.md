---
title: JavaScript- Difference between for of loop and  for in loop
date: "2019-04-07"
tags: ['javascript']
---

In JavaScript, __for loops__ are used to iterate over the arrays and helps to run some code inside the block until the given condition fails.

## For of Loop

for of loop is used to iterate over iterable objects it means
the objects which are iterable.

 example: arrays.

```js{3}
const arr = [1,2,3,4,5,6];

for(let num of arr){
     console.log(num);
}

//output - 1,2,3,4,5,6
```

In the above example, on each iteration, we are accessing the different number inside the array by using `for of` loop.


## For in Loop

_for in_ loop iterates over the enumerable objects.

example: objects

```js{7}
const obj = {
    a:1,
    b:2,
    c:3
}

for(let key in obj){
    console.log(key);
}

//output

//first iteration: a
//second iteration : b
//third iteration : c
```
In the above example, by using `for in` loop we are accessing the object keys but not values.

Let's see how to access the object values instead of keys.


```js{8}
const obj = {
    a:1,
    b:2,
    c:3
}

for(let key in obj){
    console.log(obj[key]);
}

//output

//first iteration: 1
//second iteration : 2
//third iteration : 3
```

>- for of loop helps to get the 'values' instead of 'keys' best use case to use with iterable objects.
>- for in loop best use case is to use with enumerable objects.