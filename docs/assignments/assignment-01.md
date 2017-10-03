# Assignment 1
Create a React/Webpack project.

1. Create an NPM project
    - `npm init`
2. Initialize and configure Webpack
    - `npm install webpack webpack-cli webpack-dev-server path`
    - create `./webpack.config.js` with

    ```javascript
    const path = require('path');
    module.exports = {
        mode: 'development',
        entry: './src/index.jsx',
        output: {
            path: path.resolve('dist'),
            filename: 'bundle.js'
        },
        resolve: {
            extensions: [ ".js", ".jsx" ]
        },
        module: {
            rules: [
                { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
                { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
            ]
        }
    }
    ```
3. Initialize and configure the Babel transpiler
    - `npm install babel-loader @babel/core @babel/preset-env @babel/preset-react --save-dev`
    - create `.babelrc` with
    ```javascript
    {
        "presets": [
            "@babel/preset-env", "@babel/preset-react"
        ]
    }
    ```
4. Create entry point and index.html
    - `mkdir src`
    - create `./src/index.jsx`
    ```javascript
    console.log("Hooray!");
    ```
    - `mkdir dist`
    - create `dist/index.html`
    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Chatterbox</title>
    </head>
    <body>
        <script src="bundle.js"></script>
    </body>
    </html>
    ```
5. in `package.json` add
    ```javascript
      ...
      "scripts": {
        "start": "webpack-dev-server --content-base dist/",
        "build": "webpack",
        ...
      }
      ...
    ``` 
6. Check compilation and dev-server
    - `npm start` starts dev-server with compilation in memory
    - check the result in the browser on `http://localhost:8080/`, also in its console
    - `npm run build` only builds the bundle (see `dist/bundle.js`)
7. Add react to the project
    - `npm install react react-dom`
8. Create a basic root component
    - mkdir `src/components`
    - create `Chatterbox.jsx` with
    ```jsx harmony
    import React from "react";
    
    export default function Chatterbox() {
        return <h1>Hooray React!</h1>;
    }
    ```
9. Create a root element for the app to mount to
    - to `dist/index.html` add `<ChatterboxRoot />`
    ```html
    ...
    <body>
        <ChatterboxRoot />
        ...
    </body>
    ...
    ```
10. Mount Chatterbox to the RootElement
    - to `src/index.jsx` add
    ```jsx harmony
    import React from "react";
    import ReactDOM from "react-dom";
    import Chatterbox from "./components/Chatterbox";
    ...
    const APP_ROOT_ELEMENT = document.querySelector("ChatterboxRoot");
    ReactDOM.render(<Chatterbox />, APP_ROOT_ELEMENT);
    ```
11. Check the results
    - `npm start`
    - `http://localhost:8080/`