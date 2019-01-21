---
title: How to use React useRef hook with examples
date: "2019-01-21"
tags: ['react']
image: "react-useref-hook.png"
---

In this tutorial, we are going to learn how to get access the dom nodes or react elements that are created in react `render` method.


React hooks are new to react which are JavaScript functions helps us to use the react features in
functional components.


### useRef hook

In react `useRef` hooks helps us to access the dom nodes or elements so that we can interact with that dom element like accessing the `input` element value or focussing the `input` element.


example:

```js{5,9,13}
import React,{useRef} from 'react';

function TextInput(){
   //creating the ref by passing initial value null
  const nameRef = useRef(null);

  function handleFocus(){
      //current is pointing to input element when component is mounts to dom
      nameRef.current.focus()
  }
  return(
      <div>
          <input ref={nameRef} placeholder="name" />
          <button onClick={handleFocus}>Focus</button>
      </div>
    )

}
```

In the above example we have imported `useRef` hook from the 'react' then we invoked the `useRef` hooks by passing the initial value `null`.

In  `input` element we defined __ref__ attribute by passing the  `nameRef` so that we can access the input element in `nameRef.current` property.

