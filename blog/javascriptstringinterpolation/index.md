---
title: JavaScript String interpolation
description: "In this tutorial, we will learn about string interpolation in javascript by using es6 template literals.
"
date: "2018-11-21"
logo: ''
image:  "string.png"
tags: ['javascript']
---


In this tutorial, we will learn about string interpolation in javascript
by using es6 template literals.

In normal strings, we have some limitations but in es6 template literals,
we have a new way to interpolate the strings.

## Template literals example
In normal javascript strings we use double quotes or single quotes but in template literals, we need to use backticks .

```js
   ` ` //<-- backticks
```

```js
let user= 'gowtham';
console.log(`My name is ${user}`)
// My name is gowtham
```
To evaluate the expression we need to use `${ }` dollar sign with curly braces.

```js
let name = 'gowtham';
console.log(`My name is ${name} and id is ${Math.random()}`)
console.log(` sum of 2 and 3 is ${2+3}`)
//5
```

### Multi-line strings using the template literals

```js
console.log(`This is  a multiline string
 using template literals
`)
```
Happy coding…