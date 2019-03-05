---
title: How to redirect from one page to another page in Vue Router
date: "2019-03-05"
tags: ['vuejs']
image: vue-router-redirection-tutorial.png
---

In this tutorial, we will learn about how to redirect from one page to another page in Vue.js router.


For example, we have `Contact page` where its path is `/contact`, if we need to redirect from  `/contact-us` to `/contact`, we need to add a new object with two properties `redirect` and `path` to our routes array.

```js{20-23}
import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import Home from "./components/Home.vue";
import Contact from "./components/Contact.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Home
    },
    {
      path: "/contact",
      component: Contact
    },
    {
      path: "/contact-us",
      redirect: "/contact"
    }
  ]
})

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
```

Now, if a user visits `/contact-us` page he or she will be redirected to `/contact` page


## Aliasing

Aliasing means if a user visits `/contact-us` page, the URL remains `/contact-us` but the user will see `/contact` page instead of redirecting.


```js
const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Home
    },
    {
      path: "/contact",
      component: Contact,
      alias:'/contact-us'
    },

  ]
})
```