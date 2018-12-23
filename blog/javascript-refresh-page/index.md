---
title: How to refresh a page by using JavaScript
date: "2018-12-15"
tags: ['javascript']
---

In JavaScript we can use location.reload() method to refresh or reload a current webpage.


`location.reload()` method accepts optional argument boolean, if we add `true` the page will be reloaded from the server. if we add `false` or unspecified the page will be reloaded from the browser cache.

```js

// page loads from the server

location.reload(true);


// page loads from the cache

location.reload(false);

```
---

We can also create our own reload button.

```html
<button class="btn">reload</button>
```
```js
const btn = document.querySelector('.btn')

btn.addEventListener('click',function(){
    location.reload();
})
```