"use strict";

var rule = require("../../../lib/rules/init-state-obj-key-literal"),
    RuleTester = require("eslint").RuleTester;

var ruleTester = new RuleTester({ parserOptions: { ecmaVersion: 2015 } });
ruleTester.run("init-state-obj-key-literal", rule, {

    valid: [
        "this.state = { aaa: test };"
    ],
    invalid: [
        {
            code:"this.state = { \"aaa\": test };",
            errors: [{
                message: "state variables have to be Identifiers and not Literals take out \"\" from the object key",
                type: "Property"
            }]
        }
    ]
});