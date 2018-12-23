---
title: How to generate random numbers in JavaScript
description: "In this tutorial, we are going to learn how to generate random numbers in javascript by using Math.random() method."
date: "2018-11-19"
logo: ''
image:  "random.png"
tags: ['javascript']
---

In this tutorial, we are going to learn how to generate random numbers in javascript by using `Math.random()` method.


By default `Math.random()` method generates a floating point number between 0 to 1 (inclusive of 0, but not 1).


```js
Math.random();
```

![mathrandom](01random.png)

We don't need floating point numbers so that by using `Math.floor( )` method we floor it down to a decimal number.

```js
Math.floor(Math.random());
```

![mathfloor](mathfloor.png)

### Let's generate random numbers ranging between 1- 10.

```js
Math.floor(Math.random()*10) //random numbers 0-9
```
The above code only generates random numbers between  0 –9. But we need random numbers between 1–10.

```js
Math.floor(Math.random()*10)+1; //random numbers 1-10
```
![1-10 random numbers](110random.png)


### 1–100 random numbers

```js
Math.floor(Math.random()*100)+1; //random numbers from 1-100

```

Happy coding...
