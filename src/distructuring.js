var [a, , c] = [1, 2, 3];

console.log(a);
console.log(c);

var foo = {
  bar: 'pony',
  baz: 3
};

var {bar, baz} = foo;

console.log(bar);
console.log(baz);

var {bar: a, baz: b} = foo;

console.log(a);
console.log(b);

function random({min=1, max=100}) {
  return Math.floor(Math.random() * (max - min)) + min;
}

console.log(random({}));

console.log(random({min: 5, max: 15}));