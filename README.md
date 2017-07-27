# eslint-plugin-pces

PCES JavaScript code style convention

## Installation

first make sure that VS Code extension 
[ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) is installed 

create your project folder for example `myProjectFolder`

You'll first need to install [ESLint](http://eslint.org):

incide your project folder terminal run 

```
$ npm i eslint --save-dev

next run 

```
$ node_modules\.bin\eslint --init

than choose
> Answer questions about your style

then "Y" on
? Are you using ECMAScript 6 features? (y/N) Y

then "Y" on 
? Are you using ES6 modules? (y/N) Y

than switch on Browser and Node
? Where will your code run?
 (*) Browser
>(*) Node

then "Y" on 
? Do you use CommonJS? (y/N) Y

then "Y" on 
? Do you use JSX? (y/N) Y

than "Y" on
? Do you use React (y/N) Y

than "Spaces" on 
? What style of indentation do you use?
  Tabs
> Spaces

than "Double" on 
? What quotes do you use for strings? (Use arrow keys)
> Double
  Single

than "Windows" on
? What line endings do you use?
  Unix
> Windows

than "Y" on
? Do you require semicolons? (Y/n) Y

than "JavaScript" on 
? What format do you want your config file to be in? (Use arrow keys)
> JavaScript
  YAML
  JSON

````

Next, install [eslint-plugin-pces](https://github.com/jovant/eslint-plugin-pces):

```
$ npm install eslint-plugin-pces --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-pces` globally.

## Usage

Add `pces` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "pces"
    ]
}
```

Then configure the plugin recommended under the extends section.

```json
{
    "extends": [
        "plugin:pces/recommended"
    ]
}
```

all rules are enabled as errors.

but if you want only specific rules, then configure the rules you want to use under the rules section.

Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "pces/rule-name": 2
    }
}
```

## Supported Rules

 - `pces/def-func-dec-in-arg`

function declaration - `fuction testFunct (pVar1, pVar2) {}` variables which are input parameters within a function should have `p` as a starting

 - `pces/def-func-exp-in-arg`

function fxpression - `var testFunct = fuction (pVar1, pVar2) {}` variables which are input parameters within a function should have `p` as a starting

 - `pces/arr-func-exp-in-arg`

arrow function expression - `var testFunct = (pVar1, pVar2 ...) => {}` variables which are input parameters within a function should have `p` as a starting

 - `pces/block-body-var`

all block scope variable declaration have to start with `_ (underscore)`

 - `pces/set-state-obj-key-literal`

all state object properties keys have to be identifiers `setState({ sVar1: val })` and not literals `setState({ "sVar1": val })`

 - `pces/init-state-class-prop-key-literal`

all state object properties keys have to be identifiers in class propery decalaration `state = { sVar1: val }` and not literals `state = { "sVar1": val }`

 - `pces/init-state-obj-key-literal`

all state object properties keys have to be identifiers `this.state = { sVar1: val }` and not literals `this.state = { "sVar1": val }`

 - `pces/set-state-obj-prop-name`

State variables should have `s` as a starting - `setState({ sVar1: val })`

 - `pces/init-state-obj-prop-name`

State variables should have `s` as a starting - `this.state = { sVar1: val }`

 - `pces/init-state-class-prop`

State variables should have `s` as a starting - `state = { sVar1: val }`





