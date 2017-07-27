"use strict";

var rule = require("../../../lib/rules/block-body-var"),
    RuleTester = require("eslint").RuleTester;

var ruleTester = new RuleTester({ parserOptions: { ecmaVersion: 2015 } });
ruleTester.run("block-body-var", rule, {

    valid: [
        "(pArg) => { var _t = 1 }",
        "var funcTips = (pArg) => { var _t = 1 };",
        "(arg) => { var { _t } = 1 }"
    ],
    invalid: [
        {
            code:"(arg) => { var t = 1 }",
            errors: [{
                message: "local variables should be in UpperCamelCase with \"_\" as starting character",
                type: "VariableDeclarator"
            }]
        },
         {
            code:"(arg) => { var { t } = 1 }",
            errors: [{
                message: "local variables should be in UpperCamelCase with \"_\" as starting character",
                type: "Property"
            }]
        }
    ]
});