"use strict";

var rule = require("../../../lib/rules/set-state-obj-key-literal"),
    RuleTester = require("eslint").RuleTester;

var ruleTester = new RuleTester({ parserOptions: { ecmaVersion: 2015 } });
ruleTester.run("set-state-obj-key-literal", rule, {

    valid: [
        "this.setState({aaaa: test});",
        "this.setState((prev, props) => ({aaaa: test}));",
        "this.setState((prev, props) => { var t = 1; return ({aaaa: test})} );",
        "this.setState(function (prev, props){ var t= 1; return {aaaa: test}});"
    ],
    invalid: [
        {
            code:"this.setState((prev, props) => ({\"aaaa\": test}));",
            errors: [{
                message: "state variables have to be Identifiers and not Literals take out \"\" from the object key",
                type: "Property"
            }]
        },
        {
            code:"this.setState({\"aaaa\": test});",
            errors: [{
                message: "state variables have to be Identifiers and not Literals take out \"\" from the object key",
                type: "Property"
            }]
        }
    ]
});