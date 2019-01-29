---
title: When to use const keyword over var in JavaScript
date: "2019-01-29"
tags: ['javascript']
image: "const-keyword-usage-example.png"
---

In this tutorial, we are going to learn about when to use a __const__ keyword instead of var keyword in JavaScript.


__const__: In JavaScript, if we declare a variable by using const keyword we can't reassign a new value to that variable identifier.

- const keyword is block scoped and we also see an error if we try to access any variable before initialized.


__var__: If we declare a variable by using `var` keyword we can reassign a new value to that variable
identifier.


### What is the Identifier?

 The name we are used to identifying the variables is called identifier.


Let's see some examples.

### const keyword usage example

```js

const name = "reactgo.com";

// we cant't assign the new value to const variable
name = "king" //TypeError: Assignment to constant variable.


//block scoped
if(true){
     const hello = "hello world"
     console.log(hello) // "hello world"
}

 //we can't access the variable hello outside the block scope.

console.log(hello) // Uncaught reference error
```

We can't reassign any new value to __const__ keyword variable identifier but we can mutate the objects by using keys and arrays values, like i shown in below example.

```js

const user = {
    name: "example1",
    age: 5
}

// we can't assign a new object
 user =  { } // not possible

// it is possible
user.name = "example2";

// arrays
const colors = ['red','green','blue','yellow'];

// we can't assign a new array
colors = [ ] // not possible

// it's possible
colors[0] = "olive"

colors.push('orange');
```
