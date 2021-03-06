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
                .filter((property) => property.key.type == "Literal")
                .forEach(function (property) {
                    if (!reservedVars.find((str) => (str === property.key.name))) {
                        context.report(property, "state variables have to be Identifiers and not Literals take out \"\" from the object key");
                    }
                });
        }
    };
};

module.exports.schema = [];