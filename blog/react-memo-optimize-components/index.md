---
title: How to optimize the functional components using React.memo
date: "2019-01-02"
tags: ['react']
image: "react-memo-tutorial.png"
---

In React 16.6 we got more useful features one of them is React.memo function.

React.memo is a higher order function which is used to optimize the functional components by shallow comparing the props.

If your functional component is rendering the same data again and again passed by the props, if you pass that component as an argument to `React.memo` function, it prevents the re-rendering and
reuse the last rendered data.

Let's see an example

```js
function MyComponent(props) {
  console.log(props);
  return (
    <div className="App">
      <button onClick={props.handleUnlike}>Unlike</button>:
      <button onClick={props.handleLike}>Like</button>
    </div>
  );
}

class App extends React.Component {
  state = {
    like: false
  };

  handleLike = () => {
    this.setState({
      like: true
    });
  };

  handleUnlike = () => {
    this.setState({
      like: false
    });
  };

  render() {
    return (
      <div>
        <MyComponent
          like={this.state.like}
          handleLike={this.handleLike}
          handleUnlike={this.handleUnlike}
        />
      </div>
    );
  }
}

```

In the above code, we defined two components and the functional component is wrapped inside the App component then we passed the props data to that component.

When we click on a `like` button or `unlike` button, the functional component is rendering again and again with the same data.

Let's use the `React.memo()` function to prevent the re-rendering of a component.

```js
function MyComponent(props) {
  console.log(props);
  return (
    <div className="App">
      <button onClick={props.handleUnlike}>Unlike</button>:
      <button onClick={props.handleLike}>Like</button>
    </div>
  );
}

const OptimizedComponent = React.memo(MyComponent);

class App extends React.Component {
  state = {
    like: false
  };

  handleLike = () => {
    this.setState({
      like: true
    });
  };

  handleUnlike = () => {
    this.setState({
      like: false
    });
  };

  render() {
    return (
      <div>
        <OptimizedComponent
          like={this.state.like}
          handleLike={this.handleLike}
          handleUnlike={this.handleUnlike}
        />
      </div>
    );
  }
}
```

We first passed our `MyComponent` to React.memo function then we get back an Optimized component.
