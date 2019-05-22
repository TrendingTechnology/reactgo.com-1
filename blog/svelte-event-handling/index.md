---
title: How to handle the events in Svelte
date: "2019-05-22"
tags: ['svelte']
image: svelte-event-handling.png
---

In this tutorial, we are going to learn about event handling in svelte with the help of an example.

Svelte offers us an __`on:` directive__ which helps us to listen  the dom events.

## Counter Example

```html{10-11}:title=Counter.svelte
<script>
  let count = 1;
  function inc(){
      count = count+1;
  }
</script>

<div>
   <h1>{count}</h1>
   //listening click event on a button
   <button on:click={inc}>Increment</button>
</div>
```

In the above code, we are listening for a __click event__ on a button so that whenever a user clicks on a button we are invoking the `inc` handler method attached to it.

## How to pass arguments to the event handler function?

In some cases, we need to pass an argument to an event handler function let's see an example.

```html{3,10-11}:title=Counter.svelte
<script>
  let count = 1;
  function inc(num){
      count = count+num;
  }
</script>

<div>
   <h1>{count}</h1>
   //incrementing the count value by 2.
   <button on:click={()=>inc(2)}>Increment</button>
</div>
```

## Inline event handlers

In svelte we can also use inline event handlers without losing any performance in the app.

example:

```html{2}
<button
    on:click={() => {count = count + 1;}}>
    Increment
  </button>
```