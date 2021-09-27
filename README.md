*Webpack Boilerplate*

- @types/webpack
- webpack
- webpack-cli
- webpack-dev-server
- webpack-merge

```bash
npm i -D @types/webpack webpack webpack-cli webpack-dev-server webpack-merge
```

- @babel/core
- @babel/preset-env
- babel-loader

```bash
npm i -D @babel/core @babel/preset-env babel-loader
```


- html-webpack-plugin
- compression-webpack-plugin
- mini-css-extract-plugin

```bash
npm i -D html-webpack-plugin compression-webpack-plugin mini-css-extract-plugin
```


- css-loader
- sass
- sass-loader
- style-loader
- postcss
- postcss-loader
- postcss-preset-env

```bash
npm i -D css-loader sass sass-loader style-loader postcss postcss-loader postcss-preset-env
```

```json
"scripts": {
    "build": "npm run prod",
    "dev-server": "webpack serve --env mode=development --open",
    "dev": "webpack --env mode=development",
    "prod": "webpack --env mode=production --env presets=compress && npm run post-build",
    "prod:preset": "npm run prod --env presets=compress,analyze",
    "post-build": "rm -rf ../backend/build && mkdir ../backend/build && cp -r build/* ../backend/build/"
  }
```


