---
title: How to break from a for loop in JavaScript
date: "2018-12-20"
tags: ['javascript']
---

In JavaScript, the  __break__ statement is used to stop/ terminates the loop early.



### For loop demo:

```js

const arr = [1,2,3,4,5,6];

for(let i=0;i<arr.length; i++){

   if(i === 3){
     break; // terminates the loop after 4 iterations
   }
   console.log(arr[i]);
}
```
```js
-> output
1
2
3
4
```

In the above code, we iterate through the first 4 elements present in the array. after the 4 iterations, we terminate the loop by using the break statement.



### While loop demo

```js

const arr = [1,2,3,4,5,6];

let i = 0;

while(i < arr.length){

   if(i === 4){
     break; // terminates the loop after 5 iterations
   }
   console.log(arr[i]);

   i=i+1;
}

```