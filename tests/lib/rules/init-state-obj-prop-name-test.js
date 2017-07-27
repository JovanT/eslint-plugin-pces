"use strict";

var rule = require("../../../lib/rules/init-state-obj-prop-name"),
    RuleTester = require("eslint").RuleTester;

var ruleTester = new RuleTester({ parserOptions: { ecmaVersion: 2015 } });
ruleTester.run("init-state-obj-prop-name", rule, {

    valid: [
        "this.state = { suser: null  };"
    ],
    invalid: [
        {
            code:"this.state = { muser: null  };",
            errors: [{
                message: "State variables should have \"s\" as a starting",
                type: "Property"
            }]
        }
    ]
});