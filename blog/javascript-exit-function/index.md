---
title: How to exit the JavaScript function
date: "2018-12-19"
tags: ['javascript']
---

In this tutorial, we will learn about how to exit the function in JavaScript.

Sometimes we need to exit the middle of functions in that cases there is a
return keyword in JavaScript which helps us to stop the running function.

The `return` keyword exits the function by returning `undefined`.

Example:

```js
function add(a,b){

// if a and b is empty then only we exited the function
//by returning undefined

    if(!a && !b ){
        return
    }

   return a+b
}


console.log(add(1,3)) // 4

console.log(add()) // undefined

```

In the `add` function we first check, if `a` and `b`  parameters don't get any values then only we exited the function by using return keyword otherwise we add the `a` and `b`.



>Note: Any code  you add after the return keyword doesn't execute.


```js
function something(arr){

  return arr;

  // any code you add after the return keyword doesn't execute.

}

```