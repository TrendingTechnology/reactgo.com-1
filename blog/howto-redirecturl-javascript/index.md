---
title: How to redirect the user to a new page in JavaScript
date: 2018-12-05
---



Consider we have contact form whenever a user submits a form we redirect the user from
contact page to home page or some other page. In such cases, we can use href property or replace method in javascript.


### href

```js
window.location.href = "https://google.com"
```

Just open your console and run above code to redirect from the current page to google.com.

### Using replace method


```js
window.location.replace("https://google.com")

```
If we use the replace method current page will not be saved in the session history, so that, we can't use the back button to navigate back to previous page.


### How to redirect from one page to another page by using a button click


```js
<button class="btn" >Click</button>

```

```js

const btn = document.querySelector('.btn')


btn.addEventListener('click',()=>{
    window.location.href = "https://yournewurl.com"
})

```