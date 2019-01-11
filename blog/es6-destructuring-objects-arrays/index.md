---
title: Es6 | Destructuring Objects and arrays in JavaScript with examples
date: "2019-01-12"
tags: ['javascript']
image: "DESTRUCTURING-OBJECTS-ARRAYS-JAVASCRIPT.png"
---

In this tutorial, we will learn about how destructuring works in objects and arrays in JavaScript.


### What is Destructuring?

Destructuring syntax helps us to extract the values from the objects or arrays into its own variables.

Let's see examples.


### Destrcuturing in JavaScript objects


**Without destructuring**

```js

let user = {name:"reactgo",age:7}

console.log(user.name,user.age)

```

We normally get the data from the objects by using dot notation `user.name` but often we need to write
the repeatable code like in the above code we used `user.name` and `user.age` where the `user` is repeated twice.

### With destructuring

```js{3}

let user  = {name:"reactgo",age:7}

const {name,age} = name;

console.log(name,age)
```

In the second line, we have written destructuring syntax the left-hand side  we need to define which property values we need to extract from the object insidde the curly braces and right-hand side is from which object you need to extract the properties.


### Nested destructuring in objects

sometimes we have complex objects like one object is nested inside the other object

```js{17}

const user = {
    name:"reactgo",
    info:{
      number:839303,
      age:12,
      school:"frontend"
    }
}

// accessing the school property in the object by using dot notation

console.log(user.info.school) // "frontend"


//accessing the school property using nested destructuring

const {info:{school} } = user

console.log(school)

```
Here we extracted the value of  `school` property from the `user` object by using nested destructuring
syntax `{info:{school}} = user`.


### Destructuring in Arrays

We can also extract the values into its own variables from the arrays also by using destructuring.


array destructuring example

```js{3}

const numbers  = [1,2,3];

const [firstNum,secondNum] = numbers

console.log(firstNum) // 1

console.log(secondNum) // 2

```
In the above code, we only need the first two numbers from the `numbers` array so that we only extracted the two numbers into its own variables(`firstNum` ,`secondNum`).
