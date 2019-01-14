---
title: Stateful functional components in React using useState Hook
date: "2019-01-15"
tags: ['react']
image: "usestate-hook-react.png"
---

In this tutorial, we are going to learn about how to use the state in functional components by using
useState hook.


## What are Hooks?

Hooks are the new feature in react which allow us to use the react features in functional components without using the class-based components.

Example: `useState` hook is used to add the state in functional components

Hooks are currently in React v16.8.0-alpha.0.

### useState hook

useState hook helps us to add the state in functional components.

example:

```js{5,10,11}
import {useState} from 'react';

function Counter(){

 let [number,setCount ] = useState(0);

   return (
       <div>
        <h1>{number}</h1>
        <button onClick={()=>setCount(number+1)} >Increment</button>
        <button onClick={()=>setCount(number-1)} >Deccrement</button>
       </div>
   )
}
```
In the above code we first imported `useState` function.

useState function will accept one argument which is an initial state so that we passed `0` as an initial
state.

### What does useState return?

if we invoke a useState function with the initial state it will return an array with two values first one is current state and the second one is `function` which is used to update the current state.

```js
let [number,setCount ] = useState(0);
```

<iframe height='265' scrolling='no' title='useState hook counter example' src='//codepen.io/saigowthamr/embed/PXXQxR/?height=265&theme-id=dark&default-tab=result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/saigowthamr/pen/PXXQxR/'>useState hook counter example</a> by saigowtham (<a href='https://codepen.io/saigowthamr'>@saigowthamr</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>