---
title: How to use splice and slice methods in javascript
description: "splice method helps us to remove the elements from the existing array and also insert the new elements in the place of removed elements."
date: "2018-11-24"
logo: ''
image:  "spliceandslice.png"
tags: ['javascript']
---

## Splice method

`splice` method helps us to remove the elements from the existing array and also insert
the new elements in the place of removed elements.

`splice` method accepts three arguments.

**start**: In which index we need to start removing elements from the array.

**deleteCount**: how many elements we need to remove from the array.

**item1, item2(optional)**: insert the new elements in the place of removed
elements.(if you don’t specify new elements splice method will only remove elements).


**Remove the 2 elements from index 0**

```js

const fruits= ['oranges','grapes','mangoes','bananas'];

fruits.splice(0,2);

console.log(fruits)

//updated fruits array ['mangoes','bananas']


```



**Remove the 2 elements from index 0 ,and insert 2 new elements.**

```js

const fruits= ['oranges','grapes','mangoes','bananas'];

fruits.splice(0,2,'apples','Avocados')



console.log(fruits)


//updated fruits array ['apples','avocados','mangoes','bananas']

```

**Remove 3 elements from index 2.**

```js

const vegetables = ['broccoli','corn','cucumber','lettuce', 'pumpkin','tomato'];

vegetables.splice(2,3);

console.log(vegetables)


//updated list ['broccoli','corn','tomato'];

```

## Slice method

`slice` method helps us to get a copy of the particular portion of the array into a
new array.it doesn’t modify the original array as splice does.

**suppose we need a copy of the first two fruits from the original fruits array.**

```js
const fruits = ['apples','avocados','mangoes','bananas'];

console.log(fruits.slice(2));

//output ['apples','avocados']


//original array still stays same.

 console.log(fruits)


//['apples','avocados','mangoes','bananas'];

```

**If we need a copy of the middle fruits.**

```js
const fruits = ['apples','avocados','mangoes','bananas'];

console.log(fruits.slice(1,2));

//output ['avocados','mangoes']


console.log(fruits)

//['apples','avocados','mangoes','bananas'];

```

### What is the difference between the splice and slice methods?

- splice method modifies the original array and also insert the new elements in the place
of removed elements.

- slice method returns a copy from the original array but it can’t insert or modify
the original array.


Happy coding…

