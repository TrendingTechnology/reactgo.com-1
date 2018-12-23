---
title: How to check if the given value is an integer or not in JavaScript
date: 2018-12-04
description: "There is a Number.isInteger() method in JavaScript which helps us to check the whether a given value is an integer or not."
image: "integerornot.png"
---


There is a Number.isInteger() method in JavaScript which helps us to check the whether a given value is an integer or not.


Number.isInteger() method returns true whether a given value is number otherwise it returns false.

```js
function isNumeric(value){

   return Number.isInteger(value);
}

isNumeric(1222); // true

isNumeric('1222'); // false

isNumeric('booo'); // false

```

If the given value is Infinity or not a number returns false.


```js

isNumeric(Infinity) //  false

isNumeric(-Infinity) //  false

isNumeric(0) // true

```

Happy coding...