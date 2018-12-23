---
title: Clone or merge objects using Object.assign() in JavaScript
date: "2018-12-10"
tags: ['javascript']
---

Object.assign( ) method help us to copy the values of all enumerable properties from the one or more source objects to the target object.


**syntax**:  Object.assign(target,source)

target: target object.

source: source object (source can be one or  more objects).


### Merging objects


```js

const user = {
  id:1,
  name:"gowtham"
}

const posts = {

  title:"this is my post",
  body:"demo"
}


console.log(Object.assign(user,posts))
// output
//{ body: "demo",id: 1,name: "gowtham",title: "this is my post"}


console.log(user)
//target object is also changed

//{ body: "demo",id: 1,name: "gowtham",title: "this is my post"}


```


### Merge and overwrite the same properties

```js
const user1 = {
  id:1,
  name:"gowtham"
}

const user2 = {
  id:2,
  name:"sai"
}

const user3 = {
  id:3,
  name:"tony"
}

const user4 = {
  id:4,
  name:"nick"
}

console.log(Object.assign(user1,user2,user3,user4))

//output -> {id: 4,name: "nick"}


```


### Cloning Objects

```js
const user = {
  id:1,
  name:"gowtham"
}

const cloneuser = Object.assign({},user)

console.log(cloneuser)

//output-> {id: 1, name: "gowtham"}
```


