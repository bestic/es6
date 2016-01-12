var parentObject = {
  test: 1,
  method() {
    console.log('parentObject call');
  }
}

var val = 20;

var newObject = {

  __proto__: parentObject,

  val,

  method() {
    super.method();
    console.log('newObject call');
  },

  ['prop' + val]: val


};

console.log(newObject);
newObject.method();