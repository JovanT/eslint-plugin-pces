"use strict";
var reservedVars = require('./../reserved-vars').reservedVars;

module.exports = function (context) {
  return {
    "FunctionDeclaration": function (node) {

      node.params
        .filter((p) => p.type == "Identifier")
        .forEach(function (param) {
          if (!reservedVars.find((str) => (str === param.name))) {
            if (param.name.charAt(0) !== 'p') {
              context.report(param, "Variables which are input parameters within a function should have \"p\" as a starting");
            }
          }
        });
    }
  };
};

module.exports.schema = [];