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