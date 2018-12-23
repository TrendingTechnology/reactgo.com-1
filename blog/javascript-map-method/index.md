---
title: How use map method in JavaScript
date: "2018-12-19"
tags: ['javscript']
---

In es6 we got most useful array methods in JavaScript one of them is `Array.map()` method in this tutorial we will learn about how to use the map method.


The map method takes the [callback function](/what-is-a-callback-function-javascript/) as an argument and runs on  each element present in the array, at final it returns the new array with the updated values.

> map method doesn't mutate/change the original array.

Example:

```js
function doubleNumbers(arr){

    return arr.map((num) => num*2 )

}

console.log(doubleNumbers([1,2,3,4,5])) // [2,4,6,8,10]

```

The callback function inside the map method takes three parameters `currentvalue` , `index` , `array`.


```js
function convertIntegers(arr){

    return arr.map((num)=> Number(num) );

}


console.log(convertIntegers(["1","2","3","4"]))

//output   [1, 2, 3, 4]


```