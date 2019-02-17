---
title: Intro to VueJS lifecycle hooks with examples
date: "2019-02-18"
tags: ['vuejs']
image: vuejs-lifecycle-hooks-examples.png
---

In this tutorial, we are going to learn about lifecycle hooks in vuejs with the help of examples.


## LifeCycle hooks

LifeCycle hooks are some methods which run from component creation to destruction.


## beforeCreate method

beforeCreate method runs synchronously before a component instance is initialized, it means in this stage data properties, watchers, events are still not set up.

example:

```html{14-17}
<template>
  <div>
    <h1>Vuejs lifecycle hooks</h1>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      msg: "Hello vue world"
    };
  },
  beforeCreate: function() {
    console.log("before instance is intialized");
    console.log(this.msg); // undefined
  }
}
```

## created method

__created__ method runs after a component instance is initialized,it means in this stage data properties, watchers, computed properties and events are set up.

example:

```html{14-17}
<template>
  <div>
    <h1>Vuejs lifecycle hooks</h1>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      msg: "Hello vue world"
    };
  },
  created: function() {
    console.log("after an instance is intialized");
    console.log(this.msg); // Hello vue world
  }
}
```

## beforeMount method

It runs before a component is connected into the dom.

>Note: This hook is not called during server-side rendering.

example:

```html{14-16}
<template>
  <div>
    <h1>Vuejs lifecycle hooks</h1>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      msg: "Hello vue world"
    };
  },
   beforeMount: function() {
    console.log("Component is still not connected to dom");
  }
}
```

## mounted method

It runs after a component is connected into the dom.

example:

```html{14-16}
<template>
  <div>
    <h1>Vuejs lifecycle hooks</h1>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      msg: "Hello vue world"
    };
  },
   mounted: function() {
    console.log("Component is connected to dom");
  }
}
```

## beforeUpdate method

It runs when data changes, before the component re-renders with the updated data.

example:

```html{16}
<template>
  <div id="app">
    <h1 ref="h1-element">{{ msg }}</h1>
    <button @click="msg = 'Msg is updated';">Change msg</button>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      msg: "Hello Vue world"
    };
  },
  beforeUpdate: function() {
    console.log(this.$refs["h1-element"].textContent);
    //Hello Vue world
  }
};
</script>
```

## updated method

It runs when a component data changes and component re-renders with updated data.


```html{16}
<template>
  <div id="app">
    <h1 ref="h1-element">{{ msg }}</h1>
    <button @click="msg = 'Msg is updated';">Change msg</button>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      msg: "Hello Vue world"
    };
  },
  updated: function() {
    console.log(this.$refs["h1-element"].textContent);
    //Msg is updated
  }
};
</script>
```

## beforeDestroy method

it runs before a component is destroyed.

## destroyed method

it runs after a component is destroyed.when this method is called it removes all directives, watchers and event listeners attached to the component.

example:

```html{5}
<template>
  <div>
    <h1>{{ msg }}</h1>
    <button @click="msg = 'Msg is updated';">Change msg</button>
    <button @click="$destroy();">Destroy</button>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      msg: "Hello Vue world"
    };
  },
  beforeDestroy: function() {
    console.log("before component is destroyed");
  },
  destroyed: function() {
    console.log("after a component is destroyed");
  }
};
</script>
```