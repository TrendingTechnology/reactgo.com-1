---
title: How to convert a string to lowercase in JavaScript
description: "JavaScript provides the toLowerCase( ) method which helps us to convert the string to
lower case letters."
date: "2018-12-02"
logo: ''
image:  "lowercase.png"
tags: ['javascript']
---

JavaScript provides the toLowerCase( ) method which helps us to convert the string to
lower case letters.


**we need to chain the string with the toLowerCase( ) method.**

```js
const name = "JAVASCRIPT";

console.log(name.toLowerCase());

// "javascript"

```


### How to lowercase the first letter of a string ?

To lowercase the first letter, we need to take the first letter in the string by using
the `charAt` method then chain it to `toLowerCase` method and concat with the string
by slicing the first letter.

```js
const name = "JAVASCRIPT";

console.log( name.charAt(0).toLowerCase()+name.slice(1));

// "jAVASCRIPT"

```





>Note: the toLowerCase method doesn't mutate the original string instead of it returns the new string with the lower case letters.