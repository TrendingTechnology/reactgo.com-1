---
title: How to create custom events in VueJS
date: "2019-02-17"
tags: ['vuejs']
image: custom-events-VueJS.png
---


Custom events helps us to communicate to parent components in Vue.js.

Let's learn how to create custom events in vue.js with the help of exmaples.

Suppose we have a `Counter` component which is accepting data from its parent component with the help of props.

```html:title=Counter.vue
<template>
  <div>
    <h1>Counter {{ count }}</h1>
    <button>Increment</button>
  </div>
</template>

<script>
export default {
  props: ["count"]
};
</script>
```
From `App` component we are passing data to `Counter` component.

```html{3}:title=App.vue
<template>
  <div>
    <Counter :count="num"/>
  </div>
</template>

<script>
import Counter from "./components/Counter";
export default {
  data: function() {
    return { num: 0 };
  },
  components: {
    Counter
  }
};
</script>
```

The problem is currently our `Increment` button present in `Counter` component can't do anything.

when we click on a `Increment` button we need to increment the `num` data property present inside our `App` component, to do that we need to create a custom event inside our `Counter` component.

Custom event can be created by using this syntax `this.$emit('eventname')`.

```html{13}:title=Counter.vue
<template>
  <div>
    <h1>Counter {{ count }}</h1>
    <button @click="increment">Increment</button>
  </div>
</template>

<script>
export default {
  props: ["count"],
  methods:{
      increment:function(){
          this.$emit('handleIncrement')
      }
  }
};
</script>
```

Now our `Counter` component is emitting the `handleIncrement` custom event to listen this event in `App` component we need to add `@handleIncrement`.

```html{3-4}:title=App.vue
<template>
  <div>
    <!-- listening for the custom event -->
    <Counter :count="num" @handleIncrement="num++"/>
  </div>
</template>

<script>
import Counter from "./components/Counter";
export default {
  data: function() {
    return { num: 0 };
  },
  components: {
    Counter
  }
};
</script>
```

## Passing arguments

Somecases we need to increment our count value by 2 or 3 in such cases `this.$emit` method can also accept the `value` as its second argument.

```html{13}:title=Counter.vue
<template>
  <div>
    <h1>Counter {{ count }}</h1>
    <button @click="incrementBy2">Increment</button>
  </div>
</template>

<script>
export default {
  props: ["count"],
  methods:{
      incrementBy2:function(){
          this.$emit('handleIncrement',2)
      }
  }
};
</script>
```

In parent component we can access that argument value by using `$event` variable.


```html{3-4}:title=App.vue
<template>
  <div>
    <!-- listening for the custom event with emitted value -->
    <Counter :count="num" @handleIncrement="num += $event;"/>
  </div>
</template>

<script>
import Counter from "./components/Counter";
export default {
  data: function() {
    return { num: 0 };
  },
  components: {
    Counter
  }
};
</script>
```