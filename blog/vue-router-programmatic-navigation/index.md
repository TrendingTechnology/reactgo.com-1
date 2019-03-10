---
title: Vue router Programmatic navigation
date: "2019-03-10"
tags: ['vuejs']
image: vue-router-programmatic-navigation.png
---

In the Vue template, we navigate to different routes using `<router-link>` component but we can also navigate a user to different routes inside vue instance by using `$router` object.

There is a `push` method in the `$router` object which is used to push the user to a different route.

## example

```html{4,12-13}
<template>
    <div>
       <h1>My first post</h1>
       <button @click="navigateToHome">Go to Home</button>
    </div>
</template>

<script>
   export default{
       methods:{
           navigateToHome:function(){
               //navigation path is '/'
             this.$router.push('/')
           }
       }
   }
</script>
```

## Named routes

For named routes, we need to pass an object with the `name` of a route to `push` method.

```html{4,12-13}
<template>
    <div>
       <h1>My first post</h1>
       <button @click="navigateToPost">View Post</button>
    </div>
</template>

<script>
   export default{
       methods:{
           navigateToPost:function(){
               //name of the route
             this.$router.push({name: "post"})
           }
       }
   }
</script>
```

## Url params

If we need to add url `params` programmatically, we need to pass another object called `params` to `push` method.


```html{4,12-13}
<template>
    <div>
       <h1>My first post</h1>
       <button @click="navigateToPost">View Post</button>
    </div>
</template>

<script>
   export default{
       methods:{
           navigateToPost:function(){
               //named route with url params
             this.$router.push({name: "post",params:{id:1}})
           }
       }
   }
</script>
```