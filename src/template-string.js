var a = `In Javascript '\n' is a line feed`;

var b = `In Javascript this is
not legal`;

var name = 'Alex';
var time = 'today';
var c = `Hello ${name}, how are you ${time}`;


function template() {
  console.log(arguments);
  return 'new template';
}

var c = template`Hello ${name}, how are you ${time}`;

console.log(a);
console.log(b);
console.log(c);