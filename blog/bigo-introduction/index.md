---
title: Introduction to Big O Notation
date: "2018-11-18"
image:  "bigo.png"
tags: ['javascript']
---

## What is Big O?

In computer science, big O notation is used to analyze how their running time or the space used by an algorithm.it is invented by Paul Bachmann, Edmund Landau.

Let's discuss some common time complexities with the help of examples.

###Constant time O(1)
If an algorithm has a constant time, it means that it always takes the same amount time to produce the output.

Example

```js
function removeLastitem(arr){
  return arr.pop()
}

console.log(removeLastitem([1,2,3,4,5,6]))
```

In the above example **removeLastitem** function always takes the same amount of time to remove the last item from the array it doesn't matter if the array has 10 items or 20 items.


### Linear time O(n)


if an algorithm has a linear time, it means that the running time of an algorithm grows as the input size grows.

example

```js
function sum(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i = i + 1) {
        total += arr[i];
    }
    return total;
}

console.log(sum([1, 2, 3, 4])) //10
```

In the above example,**sum** function increases its running time according to the size of the array.


### Quadratic time O(<span>n<sup>2<sup></span>)

The running time of an algorithm is directly proportional to the square of the size of the input.

example :

```js
function addAndLog(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length; j++) {
            console.log(arr[i] + arr[j])
        }//O(n)
        console.log("----")
    }// O(n)
}
```


Happy coding ...