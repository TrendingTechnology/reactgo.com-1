---
title: React state management tutorial for the beginners
date: "2018-12-17"
tags: ['react']
image: "state-management-in-react.png"
---


In this tutorial, we will learn about state management in react apps with the help of examples.


## What is a state ?

State is a (private) data which is related to the particular component where we can't access the state from outside the component.


### How to intialize a state in react ?

To initialize a state in react we need to declare a new property called `state` and initialize with the object.

> Note: `state` is a reserved word in react.

```js{4}
class Login extends React.Component {

     // state
     state= { }

   render(){
       return (
           <div>
           <button>Login</button>
           </div>
       )
   }

}

```

Inside the `Login` component we initialized a state with the empty object. Our goal is to add the login functionality to the component by storing the login data inside the state object.


```js{12,18}

class Welcome extends React.Component{

    render(){
        return <h1>Welcome to react world</h1>
    }
}


class Login extends React.Component {

     state= {
         isLogin : false
     }

   render(){
       return (
           <div>
            {this.state.isLogin && <Welcome />}
           <button>Login</button>
           </div>
       )
   }

}
```

In the above code, we added `isLogin` property and `<Welcome/>` component to the `Login` component.

We have also added one condition,render `<Welcome/>` component only if `isLogin` property value is `true`.


### How to change the state ?

To change the component state we need to use this.setState( ) method provided by the react.we can't change the state directly  like `this.state.isLogin = false`.


Final step to add the login functionality.


```js{12,17,25-27}

class Welcome extends React.Component{

    render(){
        return <h1>Welcome to react world</h1>
    }
}


class Login extends React.Component {

     state= {
         isLogin : false
     }

 handleLogin = ()=>{
     this.setState({
         isLogin : !this.state.isLogin
     })
 }

   render(){
       return (
           <div>
            {this.state.isLogin && <Welcome />}
            <button onClick={this.handleLogin}>
            {this.state.isLogin ? "Logout":"Login"}
            </button>
           </div>
       )
   }

}
```
**Play with codepen**
<iframe height='265' scrolling='no' title='State management  react' src='//codepen.io/saigowthamr/embed/preview/XodGae/?height=265&theme-id=dark&default-tab=result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/saigowthamr/pen/XodGae/'>State management  react</a> by saigowtham (<a href='https://codepen.io/saigowthamr'>@saigowthamr</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

this.setState( ) method asynchronously updates the state by accepting the first argument as an object.


### What happens when we update a state ?

The parent and all its child components are rendered again with the updated state.

**For example** : In the above code when we change a state inside the `Login` component.
The component itself and its `<Welcome/>` child component is also rendered again.