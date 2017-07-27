"use strict";

var rule = require("../../../lib/rules/arr-func-exp-in-arg"),
    RuleTester = require("eslint").RuleTester;

var ruleTester = new RuleTester({ parserOptions: { ecmaVersion: 2015 } });
ruleTester.run("arr-func-exp-in-arg", rule, {

    valid: [
        "(pArg) => {}",
        "var onClick = (pdadad, e) => ({});"
    ],
    invalid: [
        {
            code:"var onClick = (dadad, e) => ({});",
            errors: [{
                message: "Variables which are input parameters within a function should have \"p\" as a starting",
                type: "Identifier"
            }]
        },
        {
            code:"var funcTips = (arg) => {}",
            errors: [{
                message: "Variables which are input parameters within a function should have \"p\" as a starting",
                type: "Identifier"
            }]
        }

    ]
});