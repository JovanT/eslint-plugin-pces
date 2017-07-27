"use strict";
var reservedVars = require('./../reserved-vars').reservedVars;

module.exports = function (context) {
    return {
        "ClassProperty": function (node) {
            if (node.key.type !== "Identifier") {
                return;
            }
            if (node.key.name !== "state") {
                return;
            }
            if (node.value.type !== "ObjectExpression") {
                return;
            }
            node.value.properties
                .filter((property) => property.key.type === "Identifier")
                .forEach(function (property) {
                    if (!reservedVars.find((str) => (str === property.key.name))) {
                        if (property.key.name.charAt(0) !== 's') {
                            context.report(property, "State variables should have \"s\" as a starting");
                        }
                    }
                });
        }
    };
};

module.exports.schema = [];