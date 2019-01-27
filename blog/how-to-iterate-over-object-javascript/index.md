---
title: How to iterate/loop over JavaScript Objects
date: "2019-01-27"
tags: ['javascript']
---

In this tutorial, we will learn about different ways through iterate/loop over the JavaScript object.


### For in Loop

`for in` loop helps us to get the object keys by using that keys we are outputting the object values.


This below example shows how to iterate over objects by using a __for in__ loop

```js
const obj  = {
   name: "reactgo.com",
   age: 7,
   location: "web"
}

for(let key in obj){
    console.log(obj.key)
}

// first iteration obj.name = "reactgo.com"
// second iteration obj.age = 7
// third iteration obj.location = "web"

```

### Object.keys method

In es6 we can do it a better way by using __Object.keys()__ method.

__Object.keys__ method takes the `object` as an argument and it returns back the array of keys.

```js
const obj  = {
   name: "reactgo.com",
   age: 7,
   location: "web"
}

const keys = Object.keys(obj)

console.log(keys) // ['name','age','location']

for(let key of keys){
    console.log(obj.key)
}

```


### Object.values method

It helps us to get the array of object values instead of object keys.

```js

const obj  = {
   name: "reactgo.com",
   age: 7,
   location: "web"
}

const values = Object.keys(obj)

console.log(values) // ['reactgo.com',7,'web']


for(value of values){
    console.log(value)
}

// 'reactgo.com'

// 7

// 'web'

```