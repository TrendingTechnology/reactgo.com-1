---
title: Intro to useReducer hook in React
date: "2019-01-23"
tags: ['react']
image: "usereducer-hook-tutorial.png"
---

In the tutorial we are going to learn about how to manage the state in react by using __useReducer__
hook.


## What is Reducer ?

If you know about redux then you are familiar with reducer function.

A Reducer is a JavaScript function which takes the two arguments initial app state, action type and returns back new app state.


### useReducer hook

useReducer hook is alternative to [useState hook](/stateful-functional-components-react-hooks/)  but by using  useReducer hook we can manage the complex state logic in our react components.

In your react app create a new file called `reducer.js`.


```js:title=reducer.js
export default function reducer(state, action) {
  switch (action.type) {
    case "INC":
      return { ...state, num: state.num + 1 };
    case "DEC":
      return { ...state, num: state.num - 1 };
    default:
      return state;
  }
}

```

This is a reducer function with two parameters `state`,`action` every time we are returning new app state instead of mutating the old state because reducer is a pure function.


Let's use our reducer function.

*useReducer hook example*
```js{5,10,12,13}:title=App.js
import React, { useReducer } from "react";
import reducer from "./reducer";

function App() {
  const [state, dispatch] = useReducer(reducer, { num: 0 });

  return (
    <div>
      {/*accessing the state*/}
      <h1>{state.num}</h1>
     {/* dispatching the type of action*/}
      <button onClick={() => dispatch({ type: "INC" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DEC" })}>Decrement</button>
    </div>
  );
}

export default App;
```

In above code, we created App component and imported reducer function from 'reducer.js' file and `useReducer` hook from the 'react' library.


__useReducer__ hook accepts two arguments first argument is reducer function and second argument is initial app state then it return array with two values `state` , `dispatch` function.

state: current app state.<br/>
dispatch: This is a function which is used to update the state by passing type of action.


### How to pass the state down to child components ?

We can also pass the useReducer hook state down to child components by using React Context API.

```js{5,8,11}
import React, { useReducer,createContext} from "react";
import reducer from "./reducer";
import Counter from './counter'

export const MyContext = createContext(null);

function App() {
  const [state, dispatch] = useReducer(reducer, { num: 0 });

  return (
    <MyContext.Provider value={{ state, dispatch }}>
      <Counter />
    </MyContext.Provider>
  );
}

export default App;
```
In the above code we created `MyContext` by invoking the createContext function with intial value `null` then We wapped the Counter component with `MyContext.Provider` component by passing the
value prop `{state,dispatch}`.

Now we can access the `state` and `dispatch` function inside the `Counter` component.


```js{5}
import React, { useContext } from "react";
import { MyContext } from "./index";

function Counter() {
  const { state, dispatch } = useContext(MyContext);

  return (
    <div>
      {/*accessing the state*/}
      <h1>{state.num}</h1>
     {/* dispatching the type of action*/}
      <button onClick={() => dispatch({ type: "INC" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DEC" })}>Decrement</button>
    </div>
  );
}

export default Counter;
```
Here we used  [useContext hook](/react-usecontext-hook-tutorial/) which is used to consume the data passed by the Provider component.