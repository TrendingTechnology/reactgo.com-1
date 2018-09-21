---
myid: 2
date: '2018-09-14'
title: Introduction
description: "React router is  built on top of the react which is  used to create routing in react apps because by using only react library you don't get the routing functionality in your app"
logo: '/img/routerlogo.png'
thumbnail: '/img/reactrouter.png'
tags: ['reactrouter']
course: React router beginners guide
---

## What is react router?

React router is a routing library built on top of the react which is used to create the routing in react apps.

## Is react router is static or dynamic?

- Before the react router v4 it is static after v4 it is Dynamic.

In single page apps, there is only single html page.we are reusing the same html page to render the different components based on the navigation.

But in multipage apps, you will get an entirely new page when you navigate.

## Getting started

### How to install the react router?

we are using the create-react-app to create the app.

```bash
npx create-react-app routing
cd routing
```

To install the react router you need to download the react-router-dom package by running the following commands.

```bash
npm install react-router-dom
```

```bash
npm start  //to run  dev server
```

Now open the routing folder in your favorite code editor.

If you navigate to the public/index.html you will see a single html file which looks like this.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="theme-color" content="#000000">
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json">
    <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico">
    <title>React App</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
```

Currently, in our app, there is only a single App component.

Let's create two more components.

_users.js_

```javascript
import React from 'react'

class Users extends React.Component {
  render() {
    return <h1>Users</h1>
  }
}

export default Users
```

_contact.js_

```javascript
import React from 'react'

class Contact extends React.Component {
  render() {
    return <h1>Contact</h1>
  }
}

export default Contact
```

_app.js_

```javascript
import React from 'react'
class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
      </div>
    )
  }
}

export default App
```

Now our app has three components one is App and the other two are Users and Contact.
