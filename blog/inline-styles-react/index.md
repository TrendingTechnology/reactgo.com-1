---
title: How to use inline styles in react
date: "2018-12-28"
tags: ['react']
image: "inline-styles-react.png"
---

In react we can use the style attribute to add styles to the dom elements, but we need to pass the styles as a javascript object instead of  css string.


>Note: The JavaScript object properties should be __camelCased__.


Let's see an __example__.

```js

function Post(){
    return (
        <div>
            <h1>Main heading</h1>
            <p>some content</p>
        </div>
    )
}

```
Now we are adding inline styles to the Post component.

```js{10}

function Post(){

 const divStyle = {
      backgroundColor: "#cccc", // camel cased
      height: "100px",
      color: 'yellow'
 }

    return (
        <div style= { divStyle } >
            <h1>Main heading</h1>
            <p>some content</p>
        </div>
    )
}

```

In the above code, we passed a `divStyle` object to the `style` attribute.

Have you seen we are using the camelCased style properties like `backgroundColor` instead of `background-color`?

We can also pass the style object directly into the `style` attribute instead of storing it
in the separate variable.

```js{5-9}


function Post(){


    return (
        <div style= {{
                backgroundColor: "#cccc",
                height: "100px",
                color: 'yellow'
          }}>
            <h1>Main heading</h1>
            <p> some content</p>
        </div>
    )
}

```


### More examples


```js{6}
class Hello extends React.Component {

  render() {
    return (
      <div>
        <h1 style={{ color: "red" }}>Welcome to reactgo.com</h1>
      </div>
    )
  }
}
```
Adding `backgroundImage`.

```js{5}

function Who(props){

    return (
        <div style={
            {backgroundImage:"https://reactgo.com/img/download.png"}
            }>
          <h1>{props.name}</h1>
        </div>
    )
}
```
