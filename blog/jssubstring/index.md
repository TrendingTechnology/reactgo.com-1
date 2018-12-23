---
title: How to get the part of a string in JavaScript
description: "Substring method helps us to get a particular part of the string by using the
start index and end index."
date: "2018-11-29"
logo: ''
image:  "js-substring.png"
tags: ['javascript']
---

Substring method helps us to get a particular part of the string by using the
`start` index and `end` index.

Substring method accepts two arguments.

```js
 const name = "jshype"

 console.log(name.substring(0,2));

 //output--> "js"

 console.log(name.substring(1,4));

 //output--> "shy"



```

**start index**: In the first argument, we need to specify the start index.

**end index**: In the second argument, we need to specify the end index (end index is not included in the output).


```js
const name = "jshype"

console.log(name.substring(2))

// output-->  "hype"

```

If we specify only single argument substring method returns a part of the string from that `index` up to end of the string. Like in the above code.



## How to use Slice method?

We can also use  `slice` method to get the part of a string.

```js
const name = "jshype"

console.log(name.slice(0,2));

//output--> "js"

const lang = "JavaScript"

console.log(lang.slice(4,lang.length))

//output --> "Script"


```


>Mdn docs show that [String.prototype.substr()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substr) is not part of the core JavaScript language and may be removed in the future. If at all possible, use the substring() method instead.


Happy coding..