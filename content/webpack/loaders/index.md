---
myid: 5
date: '2018-09-17'
title: Loaders
description: "Loaders help us to take the particular source code and returns back the new source code.If you pass a es6 code to the babel-loader it applies  some transformations and returns back es5 code."
logo: "/img/webpacklogo.png"
thumbnail: "/img/webpack.png"
tags: ['webpack']
---

## What is Loaders?

Loaders help us to take the particular source code and returns back the new source code.

<blockquote>
Example:
<p>
If you pass a es6 code to the babel-loader it applies  some transformations and returns back es5 code.
</p>
</blockquote>


### Loaders in action

we need to install the babel loader first.

```bash
npm install -D babel-loader @babel/crore @babel/preset-env
```

Once you successfully installed the above three packages.

Let's create a .babelrc file by adding a @babel/preset-env so that we can use the modern javascript.

_.babelrc_

```json
{
    "presets": [
        [
            "@babel/preset-env"
        ]
    ]
}
```



To add loaders in the webpack config we need to specify two properties.

- **test**: We need to specify that what type of files webpack needs to apply the loaders.
- **use**: Name of the loader.

_webpack.config.js_

```js
var path = require('path');

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
    }
};
```

What it does is it finds every file that ends with .js and passes it through the babel-loader.

Let's add a build script now.

```json
"scripts": {
    "start": "webpack-dev-server",
    "build": "webpack"
  }
```

Now open your terminal and run following command.

```bash
npm run build
```

That's it we successfully added loaders to the webpack config. In the next tutorial
you learn about how to use plugins in webpack.

