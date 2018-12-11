---
title: How to handle events in react apps
date:  "2018-12-11"
tags: ['react']
image: "react-eventhandling.png"
---


In this tutorial, we are going to learn about handling events to react and also why we bind this keyword in react).


- In Jsx we need to wrap the JavaScript expressions with the curly braces `{ }`.
- In normal JavaScript, we use lowercase names but in react we need to use cameCase names.


**Normal JavaScript**

```js

<button onclick="hitMe()">hit me</button>

```

**In react.**

```js

<button onClick={hitMe}>hitme</button>

```

Let's learn more about, how to attach event handlers in functional and class Based components.


### Functional components


```js{4-6,9}

function Button(){


  function handleClick(){
    alert('some one clicked me')
  }

    return (
      <button onClick={handleClick} >Click me</button>
    )

}


```

In react we need to pass the event handler function as a reference.

### Passing Arguments

we can also pass the arguments to the event handler functions.

```js{9}

function Button(){


  function handleClick(name){
     alert(name)
  }

    return (
      <button onClick={()=>handleClick('react')} >Click me</button>
    )

}

```


### Class based components


```js{10-14,21}
class Counter extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      num : 0
    }
  }

  handleInc(){
    this.setState({
      num : this.state.num+1
    })
  }

  render(){
    return (
       <div>
        <h1>Counter</h1>
        <h3>{this.state.num}</h3>
        <button onClick={this.handleInc.bind(this)}>Increment</button>
      </div>
    )
  }
}
```


In class-based components we need to bind `this` keyword to the class otherwise `this` keyword will bound to the `global window object` or in strict mode `this` will be `undefined`.


We can solve this problem by using arrow functions because in arrow functions `this` keyword will bound to its outer execution context.


>[Learn more about how classes work in JavaScript](https://jshype.com/howclassesworkinjavascript/)

Let's modify the above component by using arrow functions.

```js{10-14,21}

class Counter extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      num : 0
    }
  }

  handleInc(){
    this.setState({
      num : this.state.num+1
    })
  }

  render(){
    return (
       <div>
        <h1>Counter</h1>
        <h3>{this.state.num}</h3>
        <button onClick={()=>this.handleInc()}>Increment</button>
      </div>
    )
  }
}
```


**second way using public `class fields syntax`.**

```js{10-14,21}

class Counter extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      num : 0
    }
  }

  handleInc = () => {
    this.setState({
      num : this.state.num+1
    })
  }

  render(){
    return (
       <div>
        <h1>Counter</h1>
        <h3>{this.state.num}</h3>
        <button onClick={this.handleInc}>Increment</button>
      </div>
    )
  }
}
```



### event object

we can also stop the browser default behavior by using the event object.

```js

function Link(){


  function handleClick(e){
     console.log(e);
     e.preventDefault();
  }

    return (
      <a href="#" onClick={handleClick} >Click me</a>
    )

}

```


### React supported events

- Clipboard Events
- Composition Events
- Keyboard Events
- Focus Events
- Form Events
- Mouse Events
- Pointer Events
- Selection Events
- Touch Events
- UI Events
- Wheel Events
- Media Events
- Image Events
- Animation Events
- Transition Events
- Other Events

