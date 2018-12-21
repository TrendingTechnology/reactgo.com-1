---
title: How to make http requests in react
date: "2018-12-21"
tags: ['react']
image: "react-http-request.png"
---

In this tutorial, we are going to learn about how to send __Ajax__ requests in react or how to fetch the data from  APIs.


### We are using axios http library to fetch the data from the backend.

**Axios**: its a Promise based HTTP client for the browser and node.js.


first, we need to install the axios library by using the npm package manager.


```js
npm i axios
```

once you successfully installed the axios let's make some api calls to the server.


```js
import React,{Component} from 'react'
import axios from 'axios';

class App extends Component{

componentDidMount(){
  axios.get('https://jsonplaceholder.typicode.com/todos/1')
  .then(res=>console.log(res))
  .catch(err=>console.log(err))
}


    render(){
        return (
            <div>
            <h1>Http requests in react</h1>
            </div>
        )
    }

}
```
In the above code, we make the http request inside the `componentDidMount()` life cycle method and log the response in the console.

### Why componentDidMount ?

In the react componentDidMount lifecycle method is invoked immediately after a component is connected to the browsers dom.so that it is the correct place to make the http requests.


Let's store the data inside the `state` instead of logging in the browser.

#### Full example code
```js{7,26}
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
            {this.state.todo ? <p>{this.state.todo.title}</p> : <p>Loading...</p>}
            </div>
        )
    }

}
```

We are showing the `Loading...` message to the user if the request is still in process.


#### Codepen demo

<iframe height='265' scrolling='no' title='Http request in react' src='//codepen.io/saigowthamr/embed/preview/jXBNby/?height=265&theme-id=dark&default-tab=result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/saigowthamr/pen/jXBNby/'>Http request in react</a> by saigowtham (<a href='https://codepen.io/saigowthamr'>@saigowthamr</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>