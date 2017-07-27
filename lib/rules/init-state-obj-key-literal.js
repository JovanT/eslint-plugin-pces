"use strict";
var reservedVars = require('./../reserved-vars').reservedVars;

module.exports = function (context) {

    return {
        "AssignmentExpression": function (node) {

            if (node.left.type !== "MemberExpression") {
                return;
            }
            if (node.left.object.type !== "ThisExpression") {
                return;
            }
            if (node.left.property.name !== "state") {
                return;
            }

            node.right.properties
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