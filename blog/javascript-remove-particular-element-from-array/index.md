---
title: JavaScript remove particular elements from an array
date: "2019-03-01"
tags: ['Javascript']
image: javascript-remove-particular-element.png
---

In this tutorial, we will learn about how to remove particular elements from an array
in JavaScript.



## Splice method

The `Array.splice()` method helps us to remove the particular elements from an array.

example:

This is our `users` array, suppose we need to remove `user2` from an array.

```js{3}
const users = ['user1','user2','user3','user4'];

console.log(users.splice(1,1)); // ['user2']

console.log(users);

//updated users array ['user1','user3','user4'];
```

- The first argument is from which index we need to start removing an array.
- The second argument in the splice method is how many elements we need to remove from that index.

## Removing Multiple elements example

```js{3}
const users = ['user1','user2','user3','user4'];

console.log(users.splice(2,2)); // ["user3", "user4"]

console.log(users); //["user1", "user2"]

```
