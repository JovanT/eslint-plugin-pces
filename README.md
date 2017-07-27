# eslint-plugin-pces

PCES JavaScript code style convention

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-pces`:

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





