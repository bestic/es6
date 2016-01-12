class Car {

  constructor(topSpeed) {
    this.topSpeed = topSpeed;
    this.fuel = 0;
    this.distance = 0;
  }

  static isFaster(left, right) {
    return left.topSpeed > right.topSpeed;
  }

  move() {
    if (this.fuel <= 0) {
      throw new RangeError('Car can\'t move without fuel');
    }
    this.fuel--;
    this.distance += 2;
  }

}

class Tesla extends Car {

  constructor() {
    super(300);
  }

  move() {
    super.move();
    this.distance += 4;
  }

}