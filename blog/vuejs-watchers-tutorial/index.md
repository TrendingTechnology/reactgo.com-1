---
title: How to use Vue.js Watchers
date: "2019-02-12"
tags: ['vuejs']
image: "vue-watchers-tutorial.png"
---

In this tutorial, we will learn about Watchers in Vue.js with the help of examples.



## Watchers

In Vue, watchers help us to __watch__ every change in the data properties.it means if we assign a watcher to a particular data property it keeps track the every data change occurred to this property.


Let's see an example.

We need to define our watcher inside the `watch` property object.

```html{15-23}
<template>
  <div>
    <h1>{{ count }}</h1>
    <button @click="count += 1;">Increment</button>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      count: 0
    };
  },
  watch: {
    //the function runs every time when a count data property changes
    count: function(value) {
      // we can access the count value in function parameter
      if (value === 5) {
        setTimeout(() => {
        // resetting the count value
          this.count = 0;
        }, 300);
      }
    }
  }
};
</script>
```
Here we added our watcher to the `count` data property so that our watcher
function runs every time when a new data is added to the `count` property.


Inside our watcher function, we added a condition if the count `value `reaches to `5` we are resetting the counter.


>Note: The name of the watch function and data property should be same.
