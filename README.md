[![Circle CI](https://circleci.com/gh/andrewdamelio/react-redux-boilerplate/tree/master.svg?style=svg&circle-token=35697916f8fc181b59f088c95a8dad886fc610a3)](https://circleci.com/gh/andrewdamelio/react-redux-boilerplate/tree/master)

# React / Redux Boilerplate

[Demo](http://andrewdamel.io/dev/react-redux)

#### Core libraries:
- [React](https://facebook.github.io/react/) 🚀
- [Redux](http://redux.js.org/) ⚗
- [React-Router](https://github.com/rackt/react-router) 🛰
- [React-Router-Redux](https://github.com/rackt/react-router-redux) 🚀 🛰 ⚗
- [Redux DevTools](https://github.com/gaearon/redux-devtools) 📊
- [ImmutableJS](https://facebook.github.io/immutable-js/) 💎
- [Webpack](https://webpack.github.io/) 🕸
- [Babel6](http://babeljs.io/) 🔑
- [ESlint](http://eslint.org/) 🚨
- Styles 🖌
  - [Radium](http://stack.formidable.com/radium/)
  - [PostCSS](https://github.com/postcss/postcss)
  - [cssnext](http://cssnext.io/)

#### middleware
  - [promiseMiddleware](https://github.com/andrewdamelio/react-redux-boilerplate/blob/master/src/middleware/promiseMiddleware.js) (example of custom middleware)
  - [redux-logger](https://github.com/fcomb/redux-logger)
  - [redux-thunk](https://github.com/gaearon/redux-thunk)

## Installation

You'll need to have [Node.js] (https://nodejs.org/) to get started.

```bash
$ npm install # Install dependencies
```

* If your having issues try updating to the latest version of node.


## Getting Started

#### Dev
```bash
$ npm run dev
```

#### ESLint
```bash
$ npm run lint
```

#### Tests
```bash
$ npm run test
$ npm run test:watch
```

#### Build
```bash
$ npm run clean
$ npm run build
$ http-server -p 8080 .

```
Open http://localhost:8080 in your browser.
