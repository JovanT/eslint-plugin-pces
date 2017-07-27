"use strict";

var rule = require("../../../lib/rules/set-state-obj-prop-name"),
    RuleTester = require("eslint").RuleTester;

var ruleTester = new RuleTester({ parserOptions: { ecmaVersion: 2015 } });
ruleTester.run("set-state-obj-prop-name", rule, {

    valid: [
        "this.setState({suser: result.user});",
        "this.setState((prev, props) => ({saaaa: test}));",
        "this.setState((prev, props) => { var t = 1; return ({saaaa: test})} );",
        "this.setState(function (prev, props){ var t= 1; return {saaaa: test}});"
    ],
    invalid: [
        {
            code:"this.setState({muser: result.user});",
            errors: [{
                message: "State variables should have \"s\" as a starting",
                type: "Property"
            }]
        },
        {
            code:"this.setState({aaaa: test});",
            errors: [{
                message: "State variables should have \"s\" as a starting",
                type: "Property"
            }]
        }
    ]
});