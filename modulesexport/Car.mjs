import Vehicle from './Vehicle.mjs';

export default class Car extends Vehicle {
  constructor(brand, model) {
    super(brand);
    this.model = model;
  }
  drive() {
    console.log(`${this.brand} ${this.model} chal rahi hai...`);
  }
}