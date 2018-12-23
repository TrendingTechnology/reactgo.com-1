---
title: Remove whitespace from beginning and end of a string in JavaScript
date: "2018-12-17"
tags: ['javascript']
---


In JavaScript, the trim( ) method is used to trim the white spaces from the beginning and end of the string but not anywhere in between string.


### Examples:

```js

let username = "   jshype.com    "

let password = "  pass123  "

console.log(username.trim()) // "jshype.com"

console.log(password.trim()) // "pass123"


```

The trim() method is very helpful in the HTML forms. for example Login, SignUp forms.

In Login forms sometimes user forgot to remove the white space and start typing username and password then he/she unable to login in such cases `trim()` method shines.