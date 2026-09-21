// Class 1 ko export kiya
export class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  getArea() {
    return Math.PI * this.radius * this.radius;
  }
}
// Class 2 ko export kiya
export class Square {
  constructor(side) {
    this.side = side;
  }
  getArea() {
    return this.side * this.side;
  }
}