/**
 * @fileoverview pces js code convention
 * @author Jovan Trajkov
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var requireIndex = require("requireindex");

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

var allRules = requireIndex(__dirname + "/rules");

function recommendAllRulesAsError(rules) {
  var result = {};
  for (var key in rules) {
      result["pces/" + key] = 2;
    }
  return result;
}

// import all rules in lib/rules
module.exports = {
    rules: allRules,
    configs: {
        recommended: {
            rules: recommendAllRulesAsError(allRules)
        }
    }
}



