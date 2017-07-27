"use strict";

var rule = require("../../../lib/rules/def-func-dec-in-arg"),
    RuleTester = require("eslint").RuleTester;

var ruleTester = new RuleTester({ parserOptions: { ecmaVersion: 2015 } });
ruleTester.run("def-func-dec-in-arg", rule, {

    valid: [
        "function functTest (pArg) {}"
    ],

    invalid: [
        {
            code: "function functTest (arg) {}",
            errors: [{
                message: "Variables which are input parameters within a function should have \"p\" as a starting",
                type: "Identifier"
            }]
        }
    ]
});