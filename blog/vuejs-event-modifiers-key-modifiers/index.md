---
title: Vue JS Event Modifiers and Key Modifiers
date: "2019-02-07"
tags: ['vuejs']
image: "vuejs-event-modifiers-key-modifiers.png"
---

In last tutorial, we have learned [event handling in vuejs](/vuejs-eventhandling-tutorial/); In this
the tutorial we are going to learn about event modifiers and key modifiers in Vuejs.


## Event Modifiers

Event Modifiers in Vuejs helps us to modify the default behavior of the dom events.

Let's see some examples.

>Modifiers are postfixed with the dot(.)

```html{3}
<template>
   <!-- .prevent modifier used -->
 <form @submit.prevent="handleSubmit">
  <input type="text" placeholder="Name" />
  <button>submit</button>
 </form>
</template>

<script>
  export default{
      methods:{
          handleSubmit(){
                 ...//your logic
          }
      }
  }
</script>
```
In the above code we have added a `.prevent` modifer to the `submit` event so that we have stopped the
default reloading behavior.


__Available Event Modifiers__

`.stop` modifier is used to stop the propagation of the event to its parent.

```html
<button @click.stop="alert('Hello')"></button>
```

`.once` modifier only trigger the event once.

```html
<button @click.once="handleClick">Hit me</button>
```
Here we added a `.once` modifer to the `click` event so that the `click` event only triggers the `handleClick`method one time.

`.self` modifier only trigger the event when we click on itself.

```html
 <div id="app" @click.self="alert('s');">
    <button>Hit me</button>
 </div>
```
In above code we have added a `.self` modifier to the `click` event so that the `alert` method only invokes when we click on the `div` tag.

It doesn't pass the event down to its child elements.


## Key Modifiers

In Vue.js key modifiers helps us to listen the __key__ events.

Examples

```html{4}
<template>
 <form>
  <input placeholder="name" />
  <!--submits the form when a enter key goes up -->
  <input placeholder="password" @keyup.enter="login" />
  <button>Login</button>
</form>
</template>
```
Here we added a `.enter` key modifer to the `keyup` Keyboard event so that it triggers the `login` method when a <kbd>enter</kbd> key goes up.


Other available mouse modifiers

```bash
Vue provides aliases for the most commonly used key codes when necessary for
 legacy browser support:

.enter
.tab
.delete (captures both “Delete” and “Backspace” keys)
.esc
.space
.up
.down
.left
```