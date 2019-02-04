---
title: How to bind HTML attributes in Vuejs
date: "2019-02-05"
tags: ['vuejs']
image: "binding-html-attributes-vuejs.png"
---

In this tutorial, we are going to learn about binding HTML attributes in vuejs.

This is our starting code.

```js
<template>
  <div>
    <h1>Binding atrributes in {{title}}</h1>
    <img src="" />
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      title: "Vuejs",
      image: "logo.png"
    };
  }
};
</script>
```

In the above code, we need to bind the data of our `src` attribute to display the image.

Inside the `data` we have `image:"logo.png"` property, now we need to link our `src` attribute to `image` property so that we can display the image.

The problem is curly braces `{{}}` syntax doesn't work to bind the data inside the html attributes.

```js
<img src="{{image}}" /> //wrong: doesn't display any image
```

To bind the data inside the HTML attributes **Vuejs** provides us a directive called `v-bind:atrributename`.

```js
<img v-bind:src="image" /> // user can see image now
```
Here v-bind directive  binds the element’s src attribute to the value of the expression `image`.

If we use __v-bind__ directive we can evaluate JavaScript expressions
 inside the quotes `v-bind:src="js expression"`.


>There is also a shorthand syntax of `v-bind:attributename` which can also be written `:attributename`.

```html

<!-- fullhand syntax -->
<img v-bind:src="image" />

<!-- shorthand syntax -->
<img :src="image"/>

```

Similarly, we can use this syntax with other HTML attributes.

```html

<button :disabled="isActive">Click</button>

<a :href="url">My link</a>

<div :class="myClassname"></div>
```