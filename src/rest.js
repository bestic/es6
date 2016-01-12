function sum(...others) {

  return others.reduce((sum, value) => sum + value);

}

console.log(sum(1, 2, 3, 4, 5));