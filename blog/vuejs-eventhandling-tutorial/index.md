---
title: Vue.JS Event Handling Tutorial with Examples
date: "2019-02-06"
tags: ['vuejs']
image: "vuejs-eventhandling-tutorial.png"
---

In this tutorial, we are going to learn about how to handle the events in vuejs.

Vuejs offers us a directive called __v:on__ which helps us to register and listen to the dom events so that whenever an event is triggered the method passed to that event is invoked.


The syntax of the v:on directive.

```html
<!-- v:on:eventname="methodname" -->

<button v:on:click="handleClick">Click</button>
```

In the above code, we have listening to the `click` event on the button so that whenever a user is clicked on the button, it invoked the `handleClick` method.


### Counter example

```html{4}
<template>
   <div>
      <h1>{{num}}</h1>
      <button  v-on:click="increment">Increment</button>
   </div>
</template>

<script>
   export default{
       data:function(){
           return{
               num:0
           }
       },
       methods:{
           increment:function(){
               this.num=this.num+1
           }
       }
   }
</script>
```

### How to pass arguments to the Event handlers?

Sometimes Event handler methods can also accept arguments let's see an example.

```html
<template>
   <div>
       <h1>{{num}}</h1>
       <!-- argument 10 is passed to the `increment method -->
      <button  v-on:click="increment(10)">Increment By 10</button>
   </div>
</template>

<script>
   export default{
       data:function(){
           return{
               num:0
           }
       },
       methods:{
           //parameter `value`
           increment:function(value){
               this.num =this.num+value
           }
       }
   }
</script>
```

Here we created an `increment` method with one parameter `value` so that we are passing the argument to the `increment(10)` method.


### How to access the default event object?

To access the default event object in methods vuejs provides a variable called `$event`.

```html
<template>
   <!-- we are passing a $event variable -->
  <input placeholder="name" v-on:onchange="handleChange($event)" />
</template>

<script>
 export default{
     methods:{
         handleChange:function($event){
             console.log($event.target.value)
         }
     }
 }
</script>
```

Here we are accessing the event object by using special `$event` variable provided by the `Vuejs`.


Sometimes we need to access both `event` object and `arguments`.

```html{3-5}
<template>
   <!-- we are passing argument plus $event variable  -->
  <button v-on:click="hitMe('You hitted me',$event)">
    Hit me Hard
  </button>
</template>

<script>
 export default{
     methods:{
         handleChange:function(message,$event){
             $event.preventDefault()
             console.log(message)
         }
     }
 }
</script>
```


### Shorthand syntax

There is also shorthand syntax vuejs offers us to listen dom events.


```html
 <!--short hand syntax @eventname="method" -->
<button @click="handleClick"></button>

  <!-- long hand syntax -->
<button v-on:click="handleClick"></button>
```
