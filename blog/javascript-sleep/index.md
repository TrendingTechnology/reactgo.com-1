---
title: How to make functions sleep in JavaScript
description: "In this tutorial, we are going to learn how to make javascript functions sleep or delay for a particular amount of time. We are taking the help of promise constructor to make the functions sleep."
date: "2018-11-20"
logo: ''
image:  "sleep.jpeg"
tags: ['javascript']
---

In this tutorial, we are going to learn how to make javascript functions sleep or delay for a particular amount of time. We are taking the help of promise constructor to make the functions sleep.

```js
function sleep(time){
      return new Promise((resolve)=>setTimeout(resolve,time)
    )
}
```
Once a promise is resolved chain it with then method and run your code as we did in below code.

```js
sleep(2000).then(()=>{
 //do something after 2000 milliseconds
   console.log('resolved')
})
```
### async or await

```js
async function add(n1,n2){
   await sleep(2222);
   console.log(n1+n2)
}
add(1,2);
```
Hope you enjoyed….