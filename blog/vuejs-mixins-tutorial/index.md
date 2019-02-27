---
title: VueJS Mixins Tutorial
date: '2019-02-27'
tags: ['vuejs']
image: vuejs-mixins-tutorial.png
---

In this tutorial, we are going to learn about how to create mixins in vuejs.


## What is a Mixin?

In Vue.js Mixins helps us to distribute the reusable vue functionalities to different components.

When a component uses `mixin` all options contained in the mixin is mixed into the component own options.


## Creating a mixin

Let's create a new file called `my-mixin.js`.

```js:title=my-mixin.js
export const formMixin = {
  data: function() {
    return {
      email: "",
      password: ""
    };
  }
};
```
In the above code, we are exporting a `formMixin` containing data properties `email` and `password`.

>This mixin object can accept all options we use in vue instance.

## Using a mixin

We are using our `formMixin` inside the `Login` component and `SignUp` component because they both are using some common vue functionalities.

To use the mixin inside the components we need to import a  `mixin` and add it to the `mixins` options array.

```html{10,13}:title=Login.vue
<template>
  <form @submit.prevent="handleLogin">
    <input v-model="email" placeholder="Email" />
    <input v-model="password" placeholder="Password" />
    <button>Login</button>
  </form>
</template>

<script>
import { formMixin } from "../my-mixin";

export default {
  mixins: [formMixin],
  methods: {
    handleLogin: function() {
      console.log("email :", this.email);
      console.log("Password :", this.password);
    }
  }
};
</script>
```

Let's use the `formMixin` inside the `SignUp` component.

```html{12,14}:title=SignUp.vue
<template>
  <form @submit.prevent="handleSignup">
    <input v-model="fullName" placeholder="Full Name" />
    <input v-model="email" placeholder="Email" />
    <input v-model="password" placeholder="Password" />
    <input v-model="repassword" placeholder="Re enter password" />
    <button>SignUp</button>
  </form>
</template>

<script>
import { formMixin } from "../my-mixin";
export default {
  mixins: [formMixin],
  data: function() {
    return {
      fullName: "",
      repassword: ""
    };
  },
  methods: {
    handleSignup: function() {
      console.log("hello from signup");
      console.log("email :", this.email);
      console.log("Password :", this.password);
    }
  }
};
</script>
```
Now our `Login` component and `SignUp` component is using the `email` and `password` properties we created
inside the `formMixin`.


## Conflicting data

Sometimes we have conflicting data in `mixin` and `component` in such cases component data take priority.

For example, we have a mixin with `msg` property.

```js:title=exampleMixin.js
export const myMixin={
    data:function(){
        return{
            msg:'I lost'
        }
    }
}
```
We also have a `component` which is using the mixin can also have the same `msg` property.

```html{10,13}:title=Dummy.vue
<template>
   <div>
     <h1>{{msg}}</h1>
   </div>
</template>

<script>
import {myMixin} from '../exampleMixins';
 export default{
     mixins:[myMixin]
     data:function(){
         return{
              msg: "I Win (component)"
         }
     }
 }
</script>
```

If we check in our browser we can see.

![conflicting-options](conflicting-options.png)