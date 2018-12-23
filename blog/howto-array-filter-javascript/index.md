---
title: How to use javascript array.filter
date: "2018-12-01"
logo: ''
image:  "js-array-filter.png"
tags: ['javascript']
---

In es6, we got more useful methods in javascript where the  filter method
help us to filter the particular set of elements from the arrays.


consider we have an array of numbers from 1 to 10, but we need only odd numbers from
the array.


```js
const numbers  = [1,2,3,4,5,6,7,8,9,10];

const oddNumbers = numbers.filter((e,i) => e % 2 === 1);

console.log(oddNumbers);

//output -> [1,3,5,7,9]


```

filter method accepts the callback function as a first argument , inside that callback function we need to specify our own condition.



We can also filter the objects by using the `Array.prototype.filter` method.


```js

const users = [

    {id:1,name:"mas",present:true},
    {id:2,name:"gowtham",present:false},
    {id:3,name:"king",present:true},
    {id:4,name:"major",present:false},
    {id:5,name:"lol",present:false},
    {id:6,name:"seth",present:true},
]

```

Let's write our own condition to filter  `present` users from the above array.


```js

const presentUsers = users.filter((user)=>user.present );

console.log(presentUsers);


 /*  output

     [  { id: 1, name: "mas", present: true },
        { id: 3, name: "king", present: true },
        { id: 6, name: "seth", present: true }
    ]

*/

```

Happy coding.