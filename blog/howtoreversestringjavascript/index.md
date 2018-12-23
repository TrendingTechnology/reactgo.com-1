---
title: How to reverse a string in JavaScript
description: "In this tutorial, we are going to learn three different ways to reverse a string
in JavaScript by using the  reverse method, reduce method."
date: 2018-11-28
logo: ""
image: "reversestring.png"
---

In this tutorial, we are going to learn three different ways to reverse a string
in JavaScript by using the  `reverse` method, `reduce` method.


## First way

```js
const str = "hello"

str.split('').reverse().join('')

//"olleh"

```
We used `split` method to split the string into an array of individual strings
then chain it to `reverse` method.

## Second way

```js
const str = "hello"

[...str].reduce((prev,next)=>next+prev)

//"olleh"

```
First, we spread the string using `spread operator` and  reverse the string using
the `reduce` method.



## Third way

```js

function reverseString(str){

  const arr = [...str]
  let reverse= "";

  while(arr.length){
     reverse = reverse + arr.pop()
  }

  return reverse
}
```


I mostly like the [Second way](#second-way) to reverse a string using `reduce` method.


Happy coding...





