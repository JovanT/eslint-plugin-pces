"use strict";
var reservedVars = require('./../reserved-vars').reservedVars;

module.exports = function (context) {
  return {
    "BlockStatement": function (node) {

      node.body
        .filter((bodyPart) => bodyPart.type === "VariableDeclaration")
        .forEach(function (bodyPart) {
          bodyPart.declarations.forEach(function (variableDeclarator) {
            if (variableDeclarator.id.type === "Identifier") {
              if (!reservedVars.find((str) => (str === variableDeclarator.id.name))) {
                if (variableDeclarator.id.name.charAt(0) !== '_') {
                  context.report(variableDeclarator, "local variables should be in UpperCamelCase with \"_\" as starting character");
                }
              }
            }
            else if (variableDeclarator.id.type === "ObjectPattern") {
              variableDeclarator.id.properties
                .filter((p) => p.key.type === "Identifier")
                .forEach(function (property) {
                  if (!reservedVars.find((str) => (str === property.key.name))) {
                    if (property.key.name.charAt(0) !== '_') {
                      context.report(property, "local variables should be in UpperCamelCase with \"_\" as starting character");
                    }
                  }
                });
            }
          });
        });
    }
  };
};

module.exports.schema = [];