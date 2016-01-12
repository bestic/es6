var _ = require("lodash");

// Expressions bodies
var a = [1, 2, 3, 4, 5];

var inc = a.map(item => item + 1);
var evens = _.filter(a, item => item % 2);
var odds = _.filter(a, item => !item % 2);

// Statement block bodies

a.forEach((item, i) => {

  a[i] = item + i;

});

console.log(a);



