"use strict";

var _ = require("lodash");

// Expressions
var a = [1, 2, 3, 4, 5];

var inc = a.map(function (item) {
  return item + 1;
});

var odds = _.filter(a, function (item) {
  return item % 2;
});

console.log(odds);