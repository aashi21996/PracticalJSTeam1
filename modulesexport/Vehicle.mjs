export default class Vehicle {
  constructor(brand) {
    this.brand = brand;
  }
  start() {
    console.log(`${this.brand} start ho gayi.`);
  }
}