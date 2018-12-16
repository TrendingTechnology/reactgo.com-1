---
title: How to create react components
date: "2018-12-16"
tags: ['react']
image: "how-to-create-react-components.png"
---


Components are the reusable pieces of UI which help us to create once and use everywhere in our apps. In the react, we treated everything as a component.


>Note: Read about [jsx](/learn-react-jsx-detailed/) and [Virtual dom](/virtual-dom-react/) before moving down.

Let's create our first component.


```js

function Header(){

    return <h1>This is my header component</h1>

}

```

This a simple `Header` component which returns `h1` dom element.

### How to render a component in the browser?

To render a component in the browser we need to invoke the ReactDOM.render() method with two arguments.


```js
ReactDOM.render(<Header/>,document.querySelector('#root'))
```

- The first argument is which component needs to render in the dom.

- The second argument is where to render in the dom.

<iframe height="400px" width="100%" src="https://repl.it/@saigowthamr/OutlandishRespectfulLanserver?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

---

We can also pass data to the components by using `props`.let's replace the above component with props.

```js{3,7}
function Header(props){

    return <h1>{props.name}</h1>

}

ReactDOM.render(<Header name="This is my header"/>,document.querySelector('#root'))

```

To know about props in more detailed checkout  [A beginners guide to react props](/beginners-guide-to-react-props/).


There is also another way to create `react components` by using __classes__.


```js

class Header extends React.Component{

  render(){
      return (
           <h1>{this.props.name}</h1>
      )
  }

}

ReactDOM.render(<Header name="This is my header"/>,document.querySelector('#root'))

```
In class based component we need to return the jsx inside the render method.


So far we have just learned how to create react components. Now, it's time to reuse our components.


```js

function Button(props){
    return <button>{props.name}</button>
}


function App(){

 return (
     <div>
     <h1>This my post heading</h1>
     <article>this is my article</article>
     <Button name="Like" />
     <Button name="share" />
     <Button name="comment" />
     </div>
 )

}

ReactDOM.render(<App/>,document.querySelector('#root'))

```

<iframe height="400px" width="100%" src="https://repl.it/@saigowthamr/UsefulOrderlyCore?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>


In the above code we created our `Button` component once and reused three times inside the `App` component.