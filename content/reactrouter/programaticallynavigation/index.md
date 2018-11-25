---
id: 8
date: '2018-09-15'
title: Programmatically navigate
logo: "/img/routerlogo.png"
thumbnail: "/img/reactrouter.png"
courseurl: reactrouter
course: React router beginners guide
---

## What is Programmatic navigation?

It means we need to redirect the user when an event happens on that route.

For example, when a user is successfully logged in he or she will be redirected to the home page.

## How to Navigate Programmatically in react router?

To navigate programmatically we need to take the help of history object which is passed by the react router.

Let's add a contact form to our Contact component.

There is a push method available in the history object by using the push method we are redirecting the user to the Home page whenever a user submits the form.

_contact.js_

```js
import React from 'react'

class Contact extends React.Component {
  onSubmit = () => {
    this.props.history.push('/')
  }

  render() {
    return (
      <form>
        <input placeholder="name" type="name" />
        <input placeholder="email" type="email" />
        <button onClick={this.onSubmit}>Submit</button>
      </form>
    )
  }
}

export default Contact
```
---

### [Code repository](https://github.com/saigowthamr/Reactrouter-tutorials)