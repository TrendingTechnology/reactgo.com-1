---
title: How to remove white spaces from a entire string JavaScript
description: "JavaScript offers us different methods to remove the items/elements from the array today we are going to learn about the pop method and shift method."
date: "2018-11-27"
logo: ''
image:  removewhites.png
tags: ['javascript']
---

Consider we have a string with a lot of white space.

```js
const str = 'this  is  a  big  old  string';

```

there is a `replace` method in the JavaScript which helps us to remove the white spaces in the entire string.


### Replace method accepts two arguments.


```js
const str = 'this  is  a  big  old  string';


str.replace(/\s/gi , '')

//"thisisabigoldstring"

```

The first argument is a regular expression which helps us to scan over the entire
string and remove the white space.



### Second way

```js
const str = 'this  is  a  big  old  string';


str.replace(/\W/gi , '')

//"thisisabigoldstring"

```


Happy coding...