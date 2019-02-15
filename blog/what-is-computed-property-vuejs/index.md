---
title: Computed Properties in Vue.js with examples
date: "2019-02-11"
tags: ['vuejs']
image: "vue-computed-properties.png"
---

In this tutorial, we are going to learn about computed properties
in Vue with the help of examples.


## What is a Computed Property?

Computed properties just look like data properties in Vue but we can perform some arithmetic and non-arithmetic tasks.


```html{5}
<template>
  <ul>
   <li>First name : {{firstName}}</li>
   <li>Last name : {{lastName}}</li>
   <li>Full name : {{firstName + ' '+ lastName}}</li>
  </ul>
</template>

<script>
 data:function(){
     return{
         firstName: "Sai",
         lastName: "Gowtham"
     }
 }
</script>
```
In the above code, we have created two data properties `firstName` and `lastName`  and interpolated it inside the template.

If you look into our `template` we added our `Full Name`logic inside the `{{}}` curly braces in such cases computed properties shine.

## Example

Let's see an example of how to create our first computed property.

Computed properties are declared inside the `computed` property object.

```html{6,18-22}
<template>
  <ul>
   <li>First name : {{firstName}}</li>
   <li>Last name : {{lastName}}</li>
   <!-- computed property -->
   <li>Full name : {{fullName}}</li>
  </ul>
</template>

<script>
export default{
     data:function(){
     return{
         firstName: "Sai",
         lastName: "Gowtham"
     }
  },
  computed:{
      fullName:function(){
          return this.firstName+' '+this.lastName
      }
  }
}
```
Here we added a computed property called `fullName` which is a function where it returns the full name of the user.

We can use computed properties inside our template just like data properties.

Computed properties are cached by the vue so that it only revaluates the logic if its underlying data property changes it means if `firstName` or `lastName` doesn't change then it just returns the previously computed result without running the function again.
