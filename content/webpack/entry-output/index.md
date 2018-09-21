---
myid: 3
date: '2018-09-17'
title: Entry and Output
description: "we need to tell the webpack a starting point so that webpack can figure out its dependencies and start bundling."
logo: "/img/webpacklogo.png"
thumbnail: "/img/webpack.png"
tags: ['webpack']
course: Intro to the Webpack
---

Let's create a webpack.config.js file.

*webpack.conig.js*
```js
var path = require('path');

module.exports = {
    entry: './app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};
```

**entry**: we need to tell the webpack a starting point so that webpack can figure out its dependencies and start bundling.

**output**: on which folder or file webpack needs to place the emitted file.

If you don't specify any entry or output paths by default webpack take .src/index.js file as an entry point and ./dist/main.js as an output. But in our config, we have specified the paths so that webpack doesn't fall back on defaults.

Now open your terminal and run.

```bash
npx webpack
```

```bash
Hash: 755cc826075749014b09
Version: webpack 4.19.0
Time: 422ms
Built at: 2018-09-17 06:51:29
    Asset      Size  Chunks             Chunk Names
bundle.js  1.12 KiB       0  [emitted]  main
Entrypoint main = bundle.js
[0] ./app.js 351 bytes {0} [built]

WARNING in configuration
The 'mode' option has not been set, webpack will fallback to 'production'
for this value. Set 'mode' option to 'development' or 'production'
 to enable defaults for each environment.
You can also set it to 'none' to disable any default behavior.
Learn more: https://webpack.js.org/concepts/mode/
```

You will see a dist folder with the bundle.js file is created by the webpack.


Now create a new file fn.js.

*fn.js*
```js
var btn = document.querySelector('.btn');
var title = document.querySelector('.title');

var active = false;

function changeColor() {

    active = !active
    if (active) {
        btn.style.color = 'red'
        title.style.color = 'blue'
    } else {
        btn.style.color = 'black'
        title.style.color = 'black'
    }
}
export default changeColor;
```

*app.js*

```js
import changeColor from './fn';

var btn = document.querySelector('.btn');

btn.addEventListener('click', changeColor)
```

Now app.js file becomes very small because we are moved a changeColor function to the new file.


If you run npx webpack again.

```bash
Hash: a46eab2412ca53fbdb9c
Version: webpack 4.19.0
Time: 415ms
Built at: 2018-09-17 07:15:27
    Asset      Size  Chunks             Chunk Names
bundle.js  1.17 KiB       0  [emitted]  main
Entrypoint main = bundle.js
[0] ./app.js + 1 modules 479 bytes {0} [built]
    | ./app.js 117 bytes [built]
    | ./fn.js 362 bytes [built]

```

In index.html we are pointing to the app.js file but now we need to point  ./dist/bundle.js file because the output we generated is present inside the bundle.js file.

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
    <script src="./dist/bundle.js"></script>
</body>

</html>
```

If you check in your browser the code is working fine.

in next tutorial, we will be setup webpack dev server so that we can use the local server created by the webpack.
