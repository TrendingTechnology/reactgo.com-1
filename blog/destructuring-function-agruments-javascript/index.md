---
title: Es6|Destructuring function arguments in JavaScript
date: "2019-01-11"
tags: ['javascript']
---

In es6 we got a more powerful feature which is the destructuring syntax.

## What is Destructuring ?

Destructing syntax helps us extract the values from the arrays or objects into their own named variables.


Let's see an example without using destructuring syntax.


```js{3,4}
function userInfo(user){

   const name = user.name;
   const age = user.age;

}

userInfo({name:"gowtham",age:22})

```

In the above code, we extracted the object data by using dot notation `user.name` but you can see its already hard to declare a new variable for every property in the object we have.



### Destructuring function arguments example

Now, we are rewriting the same code by using the destructuring syntax.


```js{1}
function userInfo({name,age}){

   console.log(name,age)

}

userInfo({name:"gowtham",age:22})
```

In the above code, we unpacked the object properties inside the function parameter  by using destructuring syntax `{name, age}`.

We improved our code so much by using destructuring.


The order of destructing the object properties doesn't matter for example.

```js{1}
function userInfo({age,name}){

   console.log(name,age)

}

userInfo({name:"gowtham",age:22})
```
Here we extracted the `age` property first and `name` property second.