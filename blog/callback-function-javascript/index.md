---
title: What is a Callback function in JavaScript
date: "2018-12-08"
tags: ['javascript']
---

In this tutorial, we are going to learn about callback functions in JavaScript.


### What is a Callback function?

- If we call one function that function will call other function by itself is called
callback function.


example:

```js

function add(a,b,callback){
   return callback(a,b)
}

add(1,2,function(a,b){
    return a+b;
})

//output  3

```

Did you notice we have just called add function and that function will call the callback function?

The function which accepts the other function as an argument is called a **higher-order function**.


### Where callback functions are commonly used in JavaScript?

 - In Event handling, we commonly used callback functions in JavaScript.
 - Network requests


Consider we have a button with the click event handler is attached to it.
The second argument in the addEventListener method is a callback function.


The callback function only invokes when a click event happens on that button.

```html

<button class="btn" >click</button>

<script>

const btn = document.querySelector('.btn');

btn.addEventListener('click',function(){

   alert('someone hit me')

})

</script>
```
