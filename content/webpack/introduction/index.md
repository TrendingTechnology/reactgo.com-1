---
id: 2
date: '2018-09-17'
title: Webpack Intro
logo: "/img/webpacklogo.png"
thumbnail: "/img/webpack.png"
courseurl: webpack
course: Intro to the Webpack
---

## What is the Webpack?

Webpack is a module bundler if you know about create-react-app or angular or vue apps then you are using the webpack behind the scenes.

- It Bundles the ES Modules, CommonJS, and AMD modules.

- Code splitting helps to load the files in the chunks instead of one big js file.

- Tree shaking.

## How webpack is created?

Webpack is created by the Tobias Koppers because he wants the code splitting in the similar project called modules webmake.


## Getting started

First, we need to install the webpack by using the following commands.


[Code repository](https://github.com/saigowthamr/webpack-tutorial)

<blockquote><p>
If you don't have nodejs in your system first install the nodejs before using this commands.
</p>
</blockquote>



```bash
mkdir webpack-tutorial
cd webpack-tutorial
npm init -y
npm install webpack webpack-cli -D
```
Open webpack-tutorial folder using your code-editor.


Create an index.html and app.js file.

*index.html*

```js
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Webpack tutorials</title>
</head>

<body>
    <h1 class="title">Webpack tutorial</h1>
    <button class="btn">Hit me</button>
    <script src="/app.js"></script>
</body>
</html>
```

app.js file

```js
var btn = document.querySelector('.btn');
var title = document.querySelector('.title');

var active = false

btn.addEventListener('click', function () {

    active = !active
    if (active) {
        btn.style.color = 'red'
        title.style.color = 'blue'
    } else {
        btn.style.color = 'black'
        title.style.color = 'black'
    }
})
```
If you open the index.html file in your browser you will see a button if you click on it will change  the colors of the text.


## Modules

Modules help us to write the code in individual files instead of writing the whole code in single JavaScript file.

Let's see how modules work.

### Default imports and exports

if you put export statement before the function name or variable that function or variable is imported using the import statement.

*add.js*

```js
function add(n1, n2) {
  return n1 + n2
}
export default add
```

*new.js*

```js
import add from './add.js'

console.log(add(1, 2)) // output 3
```

These are called default imports.

### Named imports and exports

*add.js*

```js
function add(n1, n2) {
  return n1 + n2
}
export { add }
```

*new.js*
```js
import { add } from './add.js'

console.log(add(1, 2)) // output 3
```

In the next tutorial, we will be set up the basic webpack.config.js file.




