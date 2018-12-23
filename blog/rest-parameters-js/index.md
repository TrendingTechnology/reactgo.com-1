---
title: How to use Rest Parameters (...) in JavaScript
date: 2018-11-30
description: "Rest parameters help us to represent the unlimited number of function arguments
as an array in JavaScript."
image: ""
logo: ""
---


## Rest Parameters ( ... )

Rest parameters help us to represent the infinite number of function arguments as an array.


```js

function sum(a,b,...remaining){

     console.log(a)

     console.log(b)

     console.log(remaining)

}

console.log(sum(1,2,3,4,5,6,7))

//a -> 1

//b - > 2

//remaining - > [3,4,5,6,7]


```

In the above code `sum` function accepts three arguments `a`, `b` and `remaining`.
where the first two arguments values are `1`,`2` everything we passed after the first
two arguments are represented as an array.



```js
function sortNumbers(...numbers){


    return numbers.sort((a,b)=>a-b)

}


console.log(sortNumbers(4,5,6,2,1,7,3))

// [1,2,3,4,5,6,7]

```

If we prefix any parameter with (...) that parameter can accept unlimited arguments and
represent it as an array. Like in the above example we prefixed `...numbers` so that it
can accept many arguments.


Happy coding...
