---
title: How to use React useContext hook to consume data
date: "2019-01-22"
tags: ['react']
image: "usecontext-hook-example.png"
---

In this tutorial, we will learn about a better way to consume the context data by using  __useContext__
hook.


## React Hooks tutorial series

 - [useState hook](/stateful-functional-components-react-hooks/)
 - [useRef hook](/react-use-ref-hook-example/)
 - [Fetch data using hooks](/ajax-requests-fetch-data-using-react-hooks/)

### What is React Context API?

React context API helps us to pass the data down to the react component tree instead of manually passing the data to every component by using props.

Let's see a context API __example__.

```js
import React from "react";

// ThemeContext is created with default value "null"
const ThemeContext = React.createContext(null);
// it returns two components Provider and Consumer

function App() {
  return (
    <div>
      {/* we are wrapping the Provider component by passing
      the current value "dark" */}
      <ThemeContext.Provider value="dark">
        <Post />
      </ThemeContext.Provider>
    </div>
  );
}

// Now we are consuming the ThemeContext data inside Post component
function Post() {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <div className={theme}>
          {console.log(theme) // dark}
          <h1>My posts</h1>
        </div>
      )}
    </ThemeContext.Consumer>
  );
}

```

In the above code first, we created a Context bypassing the initial value `null` it returns back two components `Provider` and `Consumer`.

__Provider__ : It is used to pass the data down to the components.

__Consumer__ : It is used to consume the data which is passed by the Provider component.

Inside the Consumer Component, we need to use the function as a child so that we can access the data in the function parameter.


### useContext hook usage example

Let's rewrite the above code by using the useContext hook.

```js
import React,{useContext} from "react";

// ThemeContext is created with default value "null"
const ThemeContext = React.createContext(null);
// it returns two components Provider and Consumer

function App() {
  return (
    <div>
      {/* we are wrapping the Provider component by passing
      the current value "dark" */}
      <ThemeContext.Provider value="dark">
        <Post />
      </ThemeContext.Provider>
    </div>
  );
}

// Now we are consuming the ThemeContext data inside Post component
function Post() {
 const theme = useContext(ThemeContext);

  return (
        <div className={theme}>
          {console.log(theme)}
            <h1>My posts</h1>
        </div>
  );
}
```

Have you seen the magic In  Post component instead of Wrapping with Provider Component we just invoke the `useContext` hook by passing the `ThemeContext`,So that we can access the data which is passed by using `value` prop in the `Provider` component.