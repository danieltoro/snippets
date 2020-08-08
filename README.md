## How to Start

### Installation

To install a Visual Studio Extension you can run **Command Pallete** using the command ` Cmd + Shift + P` or `Ctrl + Shift + P`, type `Install Extensions` and finally give an` Enter`, done this search by Daniel Toro and you will find the **Daniel Toro Snippets** extension.

## Search command

You can search through snippets with `Snippet Search` command which can be run with `cmd + Shift + p` or just use `cmd + shift + r` (`ctrl + alt + r` for Windows & Linux) keybinding.

## Supported languages (file extensions)

- JavaScript (.js)
- JavaScript React (.jsx)
- TypeScript (.ts)
- TypeScript React (.tsx)

## Snippets info

Next below a list with of all available Snippets and triggers for each one. Or **→** means key `tab`.

_TypeScript_ has own components and own snippets. Use search or just type `ts` before every component snippet.

I.E. `tsrcc`

## Basics ES7

### Imports

|   Trigger | Content                                               | Description
| --------: | ----------------------------------------------------- | ---------------------------------------
|   `imp →` | `import moduleName from 'module'`                     | Import a module named
|   `imn →` | `import 'module'`                                     | Import a module
|   `imd →` | `import { destructuredModule } from 'module'`         | Import destructured module
|   `ime →` | `import * as alias from 'module'`                     | Import all as an alias
|   `ima →` | `import { originalName as aliasName} from 'module'`   | Import destructured modules as an alias

### Exports

|   Trigger | Content                                               | Description
| --------: | ----------------------------------------------------- | ---------------------------------------
|   `exp →` | `export default moduleName`                           | Export default a module
|   `exd →` | `export { destructuredModule } from 'module'`         | Export a module by destructuring
|   `exa →` | `export { originalName as aliasName} from 'module'`   | Export module by destructuring as an alias
|   `enf →` | `export const functionName = (params) => { }`         | Export named function in ES7 syntax
|   `edf →` | `export default (params) => { }`                      | Export default function in ES7 syntax

### Basic Methods

|  Trigger | Method                                                | Description
| -------: | ----------------------------------------------------- | ---------------------------------------
|  `met →` | `methodName = (params) => { }`                        | Creates a method inside a class in ES7 syntax
|  `fre →` | `arrayName.forEach(element => { }`                    | Creates a forEach statement in ES7 syntax
|  `fof →` | `for(let itemName of objectName { }`                  | Iterating over property names of iterable objects
|  `fin →` | `for(let itemName in objectName { }`                  | Iterating over property values of iterable objects
| `anfn →` | `(params) => { }`                                     | Creates an anonymous function in ES7 syntax
|  `nfn →` | `const functionName = (params) => { }`                | Creates a named function in ES7 syntax
|  `dob →` | `const {propName} = objectToDescruct`                 | Creates and assigns a local variable using object destructing
|  `dar →` | `const [propName] = arrayToDescruct`                  | Creates and assigns a local variable using array destructing
|  `sti →` | `setInterval(() => { }, intervalTime`                 | Executes the given function at specified intervals in ES7 syntax
|  `sto →` | `setTimeout(() => { }, delayTime`                     | Executes the given function after the specified delay in ES7 syntax
| `prom →` | `return new Promise((resolve, reject) => { }`         | Creates and returns a new Promise in the standard ES7 syntax
|   `cp →` | `const { } = this.props`                              | Creates and assigns a local variable using props destructing
|   `cs →` | `const { } = this.state`                              | Creates and assigns a local variable using state destructing
|  `pge →` | `get {propertyName}() { }`                            | Creates a getter property inside a class in ES7 syntax
|  `pse →` | `set {propertyName}(value) { }`                       | Creates a setter property inside a class in ES7 syntax


## Basics Typescript

|    Trigger | Method                                            | Description
| ---------: | ------------------------------------------------- | ---------------------------------------
| `expint →` | `export interface interfaceName { }`              | Creates an interface on Typescript
|  `exptp →` | `export type typeName = { }`                      | Creates a type on Typescript

### Console

|  Trigger | Method                                               | Description
| -------: | ---------------------------------------------------- | ---------------------------------------
|  `cas →` | `console.assert(expression,object)`                  | If the specified expression is false, the message is written to the console along with a stack trace
|  `ccl →` | `console.clear()`                                    | Clears the console
|  `cco →` | `console.count(label)`                               | Writes the the number of times that count() has been invoked at the same line and with the same label
|  `cdi →` | `console.dir`                                        | Prints a JavaScript representation of the specified object
|  `cer →` | `console.error(object)`                              | Displays a message in the console and also includes a stack trace from where the method was called
|  `cgr →` | `console.group(label)`                               | Groups and indents all following output by an additional level, until console.groupEnd() is called
|  `cge →` | `console.groupEnd()`                                 | Closes out the corresponding console.group()
|  `ctr →` | `console.trace(object)`                              | Prints a stack trace from the point where the method was called
|  `ctm →` | `console.time("timeId")`                             | Console time wrapper
|  `cte →` | `console.timeEnd("timeId")`                          | Console time end wrapper
|  `cwa →` | `console.warn`                                       | Displays a message in the console but also displays a yellow warning icon along with the logged message
|  `cin →` | `console.info`                                       | Displays a message in the console but also displays a blue information icon along with the logged message
|  `clg →` | `console.log(object)`                                | Displays a message in the console
|  `clo →` | `console.log(object)`                                | Logs property with name
|  `clb →` | `console.log('------- Start object -------')`        | Displays a message in the console inside a block
|          | `console.log(object)`                                |
|          | `console.log('------- End object -------')`          | 



## React

### Basics

|      Trigger | Method                                                                              |
| -----------: | ----------------------------------------------------------------------------------- |
|      `imr →` | `import React from 'react'`                                                         |
|     `imrd →` | `import ReactDOM from 'react-dom'`                                                  |
|     `imrc →` | `import React, { Component } from 'react'`                                          |
|    `imrcp →` | `import React, { Component } from 'react' & import PropTypes from 'prop-types'`     |
|    `imrpc →` | `import React, { PureComponent } from 'react'`                                      |
|   `imrpcp →` | `import React, { PureComponent } from 'react' & import PropTypes from 'prop-types'` |
|     `imrm →` | `import React, { memo } from 'react'`                                               |
|    `imrmp →` | `import React, { memo } from 'react' & import PropTypes from 'prop-types'`          |
|     `imrs →` | `import React, { useState } from 'react'`                                           |
|    `imrse →` | `import React, { useState, useEffect } from 'react'`                                |
|     `impt →` | `import PropTypes from 'prop-types'`                                                |
|     `imrr →` | `import { BrowserRouter as Router, Route, NavLink} from 'react-router-dom'`         |
|     `imbr →` | `import { BrowserRouter as Router} from 'react-router-dom'`                         |
|    `imbrc →` | `import { Route, Switch, NavLink, Link } from react-router-dom'`                    |
|    `imbrr →` | `import { Route } from 'react-router-dom'`                                          |
|    `imbrs →` | `import { Switch } from 'react-router-dom'`                                         |
|    `imbrl →` | `import { Link } from 'react-router-dom'`                                           |
|   `imbrnl →` | `import { NavLink } from 'react-router-dom'`                                        |
|    `redux →` | `import { connect } from 'react-redux'`                                             |
|   `rconst →` | `constructor(props) with this.state`                                                |
|      `est →` | `this.state = { }`                                                                  |
|      `ren →` | `render() { return( ) }`                                                            |
|      `sst →` | `this.setState({ })`                                                                |
|      `ssf →` | `this.setState((state, props) => return { })`                                       |
|    `props →` | `this.props.propName`                                                               |
|    `state →` | `this.state.stateName`                                                              |
| `rcontext →` | `const ${1:contextName} = React.createContext()`                                    |
|     `cref →` | `this.${1:refName}Ref = React.createRef()`                                          |
|     `fref →` | `const ref = React.createRef()`                                                     |
|      `bnd →` | `this.methodName = this.methodName.bind(this)`                                      |


### Lifecycle methods

|      Trigger | Method                                                                              |
| -----------: | ----------------------------------------------------------------------------------- |
|      `cwm →` | `componentWillMount = () => { }` DEPRECATED!!!                                      |
|      `cdm →` | `componentDidMount = () => { }`                                                     |
|      `cwr →` | `componentWillReceiveProps = (nextProps) => { }` DEPRECATED!!!                      |
|      `scu →` | `shouldComponentUpdate = (nextProps, nextState) => { }`                             |
|     `cwup →` | `componentWillUpdate = (nextProps, nextState) => { }` DEPRECATED!!!                 |
|     `cdup →` | `componentDidUpdate = (prevProps, prevState) => { }`                                |
|     `cwun →` | `componentWillUnmount = () => { }`                                                  |
|    `gdsfp →` | `static getDerivedStateFromProps(nextProps, prevState) { }`                         |
|     `gsbu →` | `getSnapshotBeforeUpdate = (prevProps, prevState) => { }`                           |

### React Hooks

- All hooks from [official docs](https://reactjs.org/docs/hooks-reference.html) are added with hook name prefix.

|                  Trigger | Description                                                                        |
| ----------------------: | ----------------------------------------------------------------------------------- |
|            `useState →` | ` `                                                    |
|           `useEffect →` | ` `                                                    |
|          `useContext →` | ` `                                                    |
|          `useReducer →` | ` `                                                    |
|         `useCallback →` | ` `                                                    |
|             `useMemo →` | ` `                                                    |
| `useImperativeHandle →` | ` `                                                    |
|       `useDebugValue →` | ` `                                                    |
|         `useSelector →` | ` `                                                    |
|         `useDispatch →` | ` `                                                    |


### React Components

|                      Trigger | Description                                                                                    |
| ---------------------------: | ---------------------------------------------------------------------------------------------- |
|         `rcc →` or `tsrcc →` | Creates a React component class with ES7 module system                                         |
|         `rce →` or `tsrce →` | Creates a React component class with ES7 module system                                         |
|       `rfce →` or `tsrfce →` | Creates a React Functional Component with ES7 module system                                    |
|         `rfc →` or `tsrfc →` | Creates a React Functional Component with ES7 module system                                    |
|             `rfcp →` or ` →` | Creates a React Functional Component with ES7 module system with PropTypes                     |
|     `rafce →` or `tsrafce →` | Creates a React Arrow Function Component with ES7 module system                                |
|             `rafc →` or ` →` | Creates a React Arrow Function Component with ES7 module system                                |
|            `rafcp →` or ` →` | Creates a React Arrow Function Component with ES7 module system with PropTypes                 |
|             `rcep →` or ` →` | Creates a React component class with ES7 module system                                         |
|         `rpc →` or `tsrpc →` | Creates a React component class with ES7 module system                                         |
|       `rpce →` or `tsrpce →` | Creates a React pure component class with ES7 module system export                             |
|             `rpcp →` or ` →` | Creates a React component class with ES7 module system                                         |
|         `rmc →` or `tsrmc →` | Creates a React Memo Function Component with ES7 module system                                 |
|             `rmcp →` or ` →` | Creates a React Memo Function Component with ES7 module system with PropTypes                  |
|             `rccp →` or ` →` | Creates a React component class with PropTypes and ES7 module system                           |
| `rcredux →` or `tsrcredux →` | Creates a React component class with connected redux and ES7 module system                     |
|         `rcreduxp →` or ` →` | Creates a React component class with PropTypes with connected redux and ES7 module system      |
|         `rfcredux →` or ` →` | Creates a React functional component with connected redux and ES7 module system                |
|        `rfcreduxp →` or ` →` | Creates a React functional component with PropTypes with connected redux and ES7 module system |
|         `reduxmap →` or ` →` | Create a mapping for redux                                                                     |




### HOC

|      Trigger | Description                                  |
| -----------: | -------------------------------------------- |
| `hocredux →` | Creates a Higer Order Component with Redux   |
|      `hoc →` | Creates a Higer Order Component              |


## React Native

## Redux

|       Trigger | Method                    |
| ------------: | ------------------------- |
|  `rxaction →` | `redux action template`   |
|   `rxconst →` | `export const $1 = '$1'`  |
| `rxreducer →` | `redux reducer template`  |
|  `rxselect →` | `redux selector template` |

## Prop Types

|    Trigger | Method                                   |
| ---------: | ---------------------------------------- |
|    `pta →` | `PropTypes.array`                        |
|   `ptar →` | `PropTypes.array.isRequired`             |
|    `ptb →` | `PropTypes.bool`                         |
|   `ptbr →` | `PropTypes.bool.isRequired`              |
|    `ptf →` | `PropTypes.func`                         |
|   `ptfr →` | `PropTypes.func.isRequired`              |
|    `ptn →` | `PropTypes.number`                       |
|   `ptnr →` | `PropTypes.number.isRequired`            |
|    `pto →` | `PropTypes.object`                       |
|   `ptor →` | `PropTypes.object.isRequired`            |
|    `pts →` | `PropTypes.string`                       |
|   `ptsr →` | `PropTypes.string.isRequired`            |
|   `ptnd →` | `PropTypes.node`                         |
|  `ptndr →` | `PropTypes.node.isRequired`              |
|   `ptel →` | `PropTypes.element`                      |
|  `ptelr →` | `PropTypes.element.isRequired`           |
|    `pti →` | `PropTypes.instanceOf(name)`             |
|   `ptir →` | `PropTypes.instanceOf(name).isRequired`  |
|    `pte →` | `PropTypes.oneOf([name])`                |
|   `pter →` | `PropTypes.oneOf([name]).isRequired`     |
|   `ptet →` | `PropTypes.oneOfType([name])`            |
|  `ptetr →` | `PropTypes.oneOfType([name]).isRequired` |
|   `ptao →` | `PropTypes.arrayOf(name)`                |
|  `ptaor →` | `PropTypes.arrayOf(name).isRequired`     |
|   `ptoo →` | `PropTypes.objectOf(name)`               |
|  `ptoor →` | `PropTypes.objectOf(name).isRequired`    |
|   `ptsh →` | `PropTypes.shape({ })`                   |
|  `ptshr →` | `PropTypes.shape({ }).isRequired`        |
|  `ptany →` | `PropTypes.any`                          |
| `ptypes →` | `static propTypes = {}`                  |


## GraphQL

|     Trigger | Method                                                  |
| ----------: | ------------------------------------------------------- |
| `graphql →` | `import { compose, graphql } from react-apollo'`        |
|  `expgql →` | `export default compose(graphql($1, { name: $2 }))($3)` | 


## Test

|     Trigger | Description                                             |
| ----------: | ------------------------------------------------------- |
|    `desc →` | Testing `describe` block                                |
|    `test →` | Testing `test` block                                    |
|   `testa →` | Testing `asynchronous test` block                       |
|     `tit →` | Testing `it` block                                      |
|    `tita →` | Testing asynchronous `it` block                         |
|   `stest →` |         |
|  `sntest →` |         |
|  `srtest →` |         |
| `snrtest →` |         |




<!-- LICENSE -->

## License

Distributed under the MIT license. See `LICENSE` for more information.

<!-- CONTACT -->

## Contact

Daniel Toro - [Github](https://github.com/danieltoro)