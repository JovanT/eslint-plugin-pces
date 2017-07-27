"use strict";

var rule = require("../../../lib/rules/def-func-exp-in-arg"),
    RuleTester = require("eslint").RuleTester;

var ruleTester = new RuleTester({ parserOptions: { ecmaVersion: 2015 } });
ruleTester.run("def-fun-exp-in-arg", rule, {

    valid: [
        "var funcTips = function (pArg) {};"
    ],

    invalid: [
        {
            code: "var functTest = function (arg) {};",
            errors: [{
                message: "Variables which are input parameters within a function should have \"p\" as a starting",
                type: "Identifier"
            }]
        }
    ]
});