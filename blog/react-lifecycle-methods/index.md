---
title: React Lifecycle methods tutorial
date: '2018-12-30'
tags: ['react']
image: "react-lifecycycle-methods.png"
---

In this tutorial, we will learn about how to use the lifecycle methods in react.

React Lifecycle methods invoked at the different phases of a component.
There are methods which are available during the component is created,
inserted and when a component is updated or removed from the dom.

__Simple definition__ : React offers us custom methods which are executed different times during the component birth to death.

### componentDidMount()

- This method is invoked after the component is mounted to the dom tree this a good place to make network requests.

example :

```js
import React,{Component} from 'react'
import axios from 'axios';

class App extends Component{

state = {
   todo:null
}


componentDidMount(){
  axios.get('https://jsonplaceholder.typicode.com/todos/1')
  .then(res=>{
      this.setState({
          todo:res.data
      })
  })
  .catch(err=>console.log(err))
}

    render(){
        return (
            <div>
            <h1>Http requests in react</h1>
            {this.state.todo ? <p>{this.state.todo.title}</p>
            : <p>Loading...</p>}
            </div>
        )
    }

}
```


### shouldComponentUpdate(nextProps,nextState)

- shouldComponentUpdate method only re-renders the component if an state or props are updated.

- This method is invoked before an update occurs by default it returns false. This method is not called for the initial render or when a `forceUpdate()` method is used.

example:

```js
class App extends React.Component {
  state = {
    num:0
  };

  handleClick = () => {
      this.setState({
        num: Math.floor(Math.random() * 3 + 1),
      })

  };

  shouldComponentUpdate(nextProps, nextState) {
     if(this.state.num !== nextState.num){
       return true
     }
       return false
  }
  render() {
    return (
      <div>
        shouldComponentUpdate
         <br/>
        <p> {this.state.num}</p>
        <button onClick={this.handleClick}>Random</button>
      </div>
    );
  }
}
```

In the above code we only re-renders the App component if the previous `state.number` is not equal to the next `state.number`.


### componentDidUpdate()

- This method is invoked immediately after a component is updated and also it is not invoked on the initial render.

`componentDidUpdate()` method is not invoked if shouldComponentUpdate() method return false.


```js

componentDidUpdate(nextProps, nextState){

   if(this.state.auth !== nextState.auth){
       this.router.push('/login')
   }

}

```

In the above we used `componentDidUpdate` method to push the user to the login page in case he or she is logged out.


### componentwillUnmount()

This method is invoked just before a component is unmounted from the DOM. This is the ideal place to perform cleanup and canceling network requests, clearing timers.

example:

```js
componentDidMount() {
    document.addEventListener("mousemove", this.handleMove);
    document.addEventListener("mouseup", this.handleDown);
  }

  componentWillUnmount() {
    document.removeEventListener("mousemove", this.handleMove);
    document.removeEventListener("mouseup", this.handleDown);
  }
```


