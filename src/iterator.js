var myObj = {

  a: [1, 2, 3],

  [Symbol.iterator]() {

    let cur = 0;
    let self = this;

    return {

      next() {
        return {
          done: cur >= self.a.length,
          value: self.a[cur++]
        }
      }

    }

  }

};

var countable = {

  [Symbol.iterator]() {
    var a = 0;
    return {
      next() {
        return {
          done: false,
          value: a++
        }
      }
    }
  }

};


for (var n of myObj) {

  console.log(n);

}

for (var n of countable) {

  console.log(n);

}

