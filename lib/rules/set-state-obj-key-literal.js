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
                        .filter((property) => property.key.type == "Literal")
                        .forEach(function (property) {
                            if (!reservedVars.find((str) => (str === property.key.name))) {
                                context.report(property, "state variables have to be Identifiers and not Literals take out \"\" from the object key");
                            }
                        });
                    break;
                case "ArrowFunctionExpression":

                    if (node.arguments[0].body.type === "ObjectExpression") {
                        node.arguments[0].body.properties
                            .filter((property) => property.key.type == "Literal")
                            .forEach(function (property) {
                                if (!reservedVars.find((str) => (str === property.key.name))) {
                                    context.report(property, "state variables have to be Identifiers and not Literals take out \"\" from the object key");
                                }
                            });
                    }
                    else if (node.arguments[0].body.type === "BlockStatement") {
                        var bodyPart = node.arguments[0].body.body.find((b) => (b.type == "ReturnStatement"))
                        bodyPart.argument.properties
                            .filter((property) => property.key.type == "Literal")
                            .forEach(function (property) {
                                if (!reservedVars.find((str) => (str === property.key.name))) {
                                    context.report(property, "state variables have to be Identifiers and not Literals take out \"\" from the object key");
                                }
                            });
                    }
                    break;
                case "FunctionExpression":
                    var bodyPart = node.arguments[0].body.body.find((b) => (b.type == "ReturnStatement"))
                    bodyPart.argument.properties
                        .filter((property) => property.key.type == "Literal")
                        .forEach(function (property) {
                            if (!reservedVars.find((str) => (str === property.key.name))) {
                                context.report(property, "state variables have to be Identifiers and not Literals take out \"\" from the object key");
                            }
                        });
                    break;
                default:
                    context.report(node, "state variables have to be Identifiers and not Literals take out \"\" from the object key");
            }

        }
    };
};

module.exports.schema = [];