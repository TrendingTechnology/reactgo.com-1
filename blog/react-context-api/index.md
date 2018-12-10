---
title: React Context API tutorial
date: "2018-12-10"
tags: ['react']
image: "react-contextapi.png"
---

In React apps we normally use props to share the data to the child components, but in some cases, we need to pass the same prop to many components in such cases context API shines.

Context API helps us to share the global data to the components without using the props (such as authentication or theme change etc).


To create a context we need to invoke the React.createContext() method by passing the initial value.

```js:title= context.js
import React from "react";

const ThemeContext = React.createContext('dark'); //passing initial value

export default ThemeContext;
```


For example, consider in our app has `Posts`  and `Contact` page components they both need to access the theme change state. so that we are using Context api to pass the data.


```js:title=app.js
import React from 'react';
import Posts from './posts';
import Contact from './contact';


function App() {

    return (
        <div>
            <Posts />
            <Contact />
        </div>
    )
}


export default App;

```

Now in our layout component we are importing the App Component  and ThemeContext.

```js
import React,{Component} from 'react';
import App from './app'
import ThemeContext from './context'


class Layout extends Component {

state={
    light: true
}


changeTheme=()=>{
    this.setState({
        light:!this.state.light
    })
}

    render() {
        return (
            <div>
               <button onClick={this.changeTheme}>Change theme</button>
                <ThemeContext.Provider value={{
                    light: this.state.light
                }}>
               <App/>
                </ThemeContext.Provider>
            </div>
        )
    }

}
```

We need to wrap the `App` Component with the `ThemeContext.Provider` component so that our `Posts` and `Contact` components can access this data provided by using the `value` property.


Now we can the access that data inside the Posts and Contact component using the `ThemeContext.Consumer` component.


```js:title=posts.js
import React from 'react'
import ThemeContext from './context'
import './posts.css'

function Posts() {

  return (
    <ThemeContext.Consumer>
      {(theme) => (

        <div className={theme.light ? "posts": "posts dark" }>
          <ul>
            <li>post 1 </li>
            <li>post 2 </li>
            <li>post 3 </li>

          </ul>

        </div>
      )
      }
    </ThemeContext.Consumer>
  )

}

export default Posts;
```

**ThemeContext.Provider** component is used to pass the data to its child components by using `value`
prop.

**ThemeContext.Consumer** component is used to consume that data using the function as a child.


You can also check [live example](https://jshype.com) where i used context api to change my site theme.