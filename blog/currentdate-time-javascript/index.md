---
title: How to get the current date and time using JavaScript
date: '2018-12-07'
tags: ['javascript']
---


In this tutorial, we will learn about how to access the current date and time in JavaScript by using  Date Object.


 `Date` Object  helps us to get the current date and time.


```js
console.log(new Date());

```

![javascript-datetime](./javascript-datetime.png)



### Time

We can also  access only time by using  the `new Date().toTimeString()` method


```js

console.log(new Date().toTimeString());

```

![JavaScript time](./javascript-time.png)


### Date


```js
console.log(new Date().toDateString());
```

![js current date ](./js-date.png)



### Year


```js

console.log(new Date().getFullYear());

// 2018

```
