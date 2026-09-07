//Objects are variables that can store both values and functions.
//Values are stored as key:value pairs called properties.
//Functions are stored as key:function() pairs called methods.

//1. Object Literal ( most Common)

const student={
    names: "aashi",
    age: 35,

study() {
    console.log(`${this.names} studying`);
  }
};

console.log(student.names); // Output: aashi
student.study();          // Output: aashi studying

//2. ES6 Class (Modern Standard)
//Jab aapko ek hi tarah ke bahut saare objects (multiple copies) banane hon, toh hum Class ka use karte hain. Ye ek blueprint ya factory ki tarah kaam karta hai.

class Car {
  constructor(brand, speed) {
    this.brand = brand;
    this.speed = speed;
  }

  drive() {
    console.log(`${this.brand} ${this.speed} km/h ki speed par chal rahi hai.`);
  }
}

// 'new' keyword se hum naye objects banate hain
const car1 = new Car("Tata", 120);
const car2 = new Car("BMW", 200);

car1.drive(); // Output: Tata 120 km/h ki speed par chal rahi hai.
car2.drive(); // Output: BMW 200 km/h ki speed par chal rahi hai.

//3. Constructor Function (Purana Tariqa)
//ES6 Classes aane se pehle, multiple objects banane ke liye constructor functions ka use hota tha. Isme function ka pehla letter Capital rakha jata hai aur new keyword se object banaya jata hai.

function Person(name, city) {
  this.name = name;
  this.city = city;
}

// Method ko memory bachane ke liye prototype me daala jata hai
Person.prototype.sayHi = function() {
  console.log(`Hi, main ${this.name} hu aur ${this.city} me rehta hu.`);
};

const user1 = new Person("Aman", "Delhi");
user1.sayHi(); // Output: Hi, main Aman hu aur Delhi me rehta hu.


//4. Object.create() (Direct Prototype Linkage)
//Is tarike me hum ek pehle se bane hue object ko base (prototype) banakar naya object banate hain. Isse naya object puraane object ki properties inherit kar leta hai.

// Base Object (Template)
const animal = {
  eats: true,
  makeSound() {
    console.log("Awaaz nikal raha hai...");
  }
};

// Naya object banaya jo 'animal' ki properties use kar sakta hai
const dog = Object.create(animal);
dog.breed = "Labrador";

console.log(dog.eats);  // Output: true (Inherited from animal)
dog.makeSound();        // Output: Awaaz nikal raha hai...


//5. Factory Function
//Ye ek normal function hota hai jo apne andar se ek naya object return karta hai. Isme new keyword lagane ki zaroorat nahi padti.

function createMobile(brand, price) {
  return {
    brand: brand,
    price: price,
    showDetails() {
      console.log(`Mobile: ${this.brand}, Price: ₹${this.price}`);
    }
  };
}

const phone1 = createMobile("Samsung", 15000);
phone1.showDetails(); // Output: Mobile: Samsung, Price: ₹15000