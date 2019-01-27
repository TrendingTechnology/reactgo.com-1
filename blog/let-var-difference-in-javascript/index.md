---
title: JavaScript:what is the difference let and var keyword
date: "2019-01-28"
tags: ['javascript']
---

In this tutorial, we will learn about the difference between let and var keywords in JavaScript.


In JavaScript `var` and `let` keywords are used to declare variables.

>Note: In JavaScript, we can't access the variables before declaration because the variables are hoisted in JavaScript.

### Let Keyword

-  `let` keyword allows to make variables block scoped it means we can only access the variables inside the block statements.

- `let` keyword gives us an error if we try to use the variable before the declaration.

- we can reassign new values to the variables.

examples:

```js

// We can't access the variable before a declaration

console.log(boy) //Uncaught ReferenceError: boy is not defined

let boy = "👦";

console.log(boy) // "👦"

// Block scoped
if(true){
    let cooking = "🍳";
}

//we can't access the variable cooking outside the block scope

console.log(cooking) //ReferenceError: cooking is not defined


```


### Var keyword

-  `var` keyword is not block scoped.
-  `var` keyword doesn't give us any error if we try to use a variable before the declaration.
-  we can reassign new values to the variables.


```js
// We can access the variable before a declaration
// but we can't get any error

console.log(boy) //undefined

var boy = "👦";

console.log(boy) // "👦"

// Block scoped
if(true){
    var cooking = "🍳";
}

//we can access the variable cooking outside the block.

console.log(cooking) // "🍳"

```


