"use strict";
var reservedVars = require('./../reserved-vars').reservedVars;

module.exports = function (context) {

    return {
        "CallExpression": function (node) {

            if (node.callee.type !== "MemberExpression") {
                return;
            }
            if (node.callee.object.type !== "ThisExpression") {
                return;
            }
            if (node.callee.property.name !== "setState") {
                return;
            }

            switch (node.arguments[0].type) {
                case "ObjectExpression":
                    node.arguments[0].properties
                        .filter((property) => property.key.type === "Identifier")
                        .forEach(function (property) {
                            if (!reservedVars.find((str) => (str === property.key.name))) {
                                if (property.key.name.charAt(0) !== 's') {
                                    context.report(property, "State variables should have \"s\" as a starting");
                                }
                            }
                        });
                    break;
                case "ArrowFunctionExpression":

                    if (node.arguments[0].body.type === "ObjectExpression") {
                        node.arguments[0].body.properties
                            .filter((property) => property.key.type === "Identifier")
                            .forEach(function (property) {
                                if (!reservedVars.find((str) => (str === property.key.name))) {
                                    if (property.key.name.charAt(0) !== 's') {
                                        context.report(property, "State variables should have \"s\" as a starting");
                                    }
                                }
                            });
                    }
                    else if (node.arguments[0].body.type === "BlockStatement") {
                        var bodyPart = node.arguments[0].body.body.find((b) => (b.type == "ReturnStatement"))
                        bodyPart.argument.properties
                            .filter((p) => p.key.type === "Identifier")
                            .forEach(function (property) {
                                if (!reservedVars.find((str) => (str === property.key.name))) {
                                    if (property.key.name.charAt(0) !== 's') {
                                        context.report(property, "State variables should have \"s\" as a starting");
                                    }
                                }
                            });
                    }

                    break;
                case "FunctionExpression":
                    var bodyPart = node.arguments[0].body.body.find((b) => (b.type == "ReturnStatement"))
                    bodyPart.argument.properties
                        .filter((p) => p.key.type === "Identifier")
                        .forEach(function (property) {
                            if (!reservedVars.find((str) => (str === property.key.name))) {
                                if (property.key.name.charAt(0) !== 's') {
                                    context.report(property, "State variables should have \"s\" as a starting");
                                }
                            }
                        });
                    break;
                default:
                    context.report(node, "State variables should have \"s\" as a starting");
            }

        }
    };
};

module.exports.schema = [];