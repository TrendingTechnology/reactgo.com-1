---
id: 6
date: '2018-09-17'
title: Plugins
logo: "/img/webpacklogo.png"
thumbnail: "/img/webpack.png"
courseurl: webpack
course: Intro to the Webpack
---

The whole part of webpack is built with plugins a plugin is just an instance where it has an apply method so that we can access the entire compilation life cycle of the webpack.


## How to use plugins?

We are using an html webpack plugin it helps to create an html file based on the html template we are provided and also injects the bundle.js script to it.

```bash
npm install -D html-webpack-plugin
```


*index.html*

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Webpack tutorials | Reactgo.com</title>
</head>

<body>
    <h1 class="title">Webpack tutorial</h1>
    <button class="btn">Hit me</button>
</body>
</html>
```

*webpack.config.js*

```js
var path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            { test: /\.js$/, use: "babel-loader" }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: './index.html'
        })
    ]
};
```

Now open your terminal and run build command.

```bash
npm run build
```

Boom you will see an index.html and bundle.js file is added to the dist folder.