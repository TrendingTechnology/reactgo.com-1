---
title: How to add external stylesheets to react
date: "2018-12-27"
tags: ['react']
image: "external-style-sheets-react.png"
---

In react apps we don't need to add link tags manually to the HTML files.

React is a JavaScript library used to build single page apps the term "single page" means there is only one html file which is re-using for every page we created in our app.

Let's see an example of adding style sheets in reactjs.

Suppose our app has `blog-post.js` page and we need to add a external style sheet to that page.

```js:title=blog-post.js
import React from 'react';

class BlogPost extends React.Component{

    render(){
       return(
        <div>
          <h1>My first post</h1>
          <h1>My second post</h1>
          <h1>My third post</h1>
        </div>
       )
    }

}

export default BlogPost;
```

Now we are creating a `blog-post.css` file and defining our styles.

```css:title=blog-post.css

.post-list{
    display:flex;
    justify-content:center;
    align-items:center;
    max-width:1000px;
    flex-direction:column;
    padding:1rem;
    background-color:#ccc
}

```
Its time to add our style sheet to the `blog-post.js` file.

We need to import the `blog-post.css` file inside the `blog-post.js` file like how we import the components or modules in react.


```js:title=blog-post.js
import React from 'react';
import './blog-post.css'

class BlogPost extends React.Component{

    render(){
     return(
        <div className="post-list">
          <h1>My first post</h1>
          <h1>My second post</h1>
          <h1>My third post</h1>
        </div>
       )
    }

}

export default BlogPost;
```
In the react apps we need to use `clasName` to add styles instead of `class`.

output

![react external style sheet example](./react-external-style-sheet-example.png)

### Why we are using className instead of class?

Beginners to the react are probably get confused what is reason to use className instead of normal `class` we use in html files.

The HTML we write  inside the react apps is not an HTML it is a [JSX](/learn-react-jsx-detailed/) and it is passed to the babel compiler and converted into JavaScript at last everything we write HTML like syntax is just a JavaScript.

In JavaScript `class` is a reserved keyword so that we need to use `className`  to add styles instead of `class`.


If you use create-react-app to bootstrap your app.At the time of development, you can see all external style sheets you created but if you run `npm run build` command you can only see `index.css` file because all css files are concatenated  into a single `index.css` file.