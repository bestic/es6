import "babel-polyfill";

function* generator () {
  yield 'f';
  yield 'o';
  yield 'o'
}

var g = generator();


//console.log([...g]);
console.log(g);
//console.log(Array.from(g))


function* generator2() {

  var i = 0;
  while (1) {
    yield i++;
  }

}

var g2 = generator2();

while (1) {
  console.log(g2.next().value);
}






