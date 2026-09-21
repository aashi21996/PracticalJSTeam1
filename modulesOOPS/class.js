//A class in Object-Oriented Programming (OOP) is blueprint or template from which individual objects are created. 
/* Key Components of a Class
Attributes (Variables): The state or data of the class.
Methods (Functions): The actions or behaviors the class can perform.
Constructor: A special method that executes automatically when an object is created to initialize its attributes.*/

// class syntex

class run{
    constructor(walk,jump){
        this.wail=walk;
        this.jump=jump;
    }
};

// Example

//Define the class
class Car {
  constructor(brand) {
    this.brand = brand; // Property
  }

  drive() { // Method
    console.log(`${this.brand} is driving...`);
  }
}

//Create an object
const myCar = new Car("Toyota");

//Use it
console.log(myCar.brand); // Output: Toyota
myCar.drive();            // Output: Toyota is driving...

//OOP main 4 pillars...
/* 1. Inheritance (parent child concept)
   2. Encapsulation (Data Hiding) (private proverty)
   3. Polymorphism (one Name, many Form)
   4. Abstraction (Complexity Chupana) (private method) */


   //1. Inheritance (parent child concept)

   // Parent Class
class Animal {
  constructor(name) {
    this.name = name;
  }
  makeSound() {
    console.log(`${this.name} koi aawaz nikal raha hai.`);
  }
}
// Child Class
class Dog extends Animal {
  constructor(name, breed) {
    super(name); // Parent class ke constructor ko call karta hai
    this.breed = breed;
  }
 // Method Overriding (Same method name, different behavior)
  makeSound() {
    console.log(`${this.name} bhonk raha hai! (Woof Woof)`);
  }
}
const myDog = new Dog("Tommy", "Labrador");
myDog.makeSound(); // Output: Tommy bhonk raha hai! (Woof Woof)

// Encapsulation (Data Hiding) (private proverty)

class BankAccount {
  #balance; // Private Property

  constructor(owner, initialBalance) {
    this.owner = owner;
    this.#balance = initialBalance;
  }
// Public method to deposit
  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      console.log(`₹${amount} deposit hua. Naya Balance: ₹${this.#balance}`);
    }
  }
// Getter method to view balance
  getBalance() {
    return this.#balance;
  }
}
const account = new BankAccount("Amit", 1000);
account.deposit(500); // Output: ₹500 deposit hua. Naya Balance: ₹1500
// Direct access karne ki koshish:
//console.log(account.#balance); // SyntaxError: Private field '#balance' must be declared in an enclosing class

//Polymorphism (one Name, many Form)
class Shape {
  draw() {
    console.log("Shape draw ho raha hai...");
  }
}

class Circle extends Shape {
  draw() {
    console.log("Circle draw hua.");
  }
}

class Square extends Shape {
  draw() {
    console.log("Square  draw hua.");
  }
}

const shapes = [new Circle(), new Square()];
shapes.forEach(shape => shape.draw());
// Output:
// Circle draw hua.
// Square draw hua.

//Abstraction (Complexity Chupana) (private method)
class CoffeeMachine {
  start() {
    this.#boilWater();
    this.#brewCoffee();
    console.log("Aapki Coffee taiyar hai!");
  }
 #boilWater() {
    console.log("Paani garam ho raha hai...");
  }
 #brewCoffee() {
    console.log("Coffee brew ho rahi hai...");
  }
}
const machine = new CoffeeMachine();
machine.start(); 
// User ko boiling ya brewing ka inner detail handle nahi karna padta, sirf start() dabana hota hai.


//Static Method
//Static method ek aisa function hai jo class ke naam se direct call hota hai. Iska use mostly Utility functions ya Helper tools banane ke liye hota hai.

class MathUtils {
  // Static Method
  static add(a, b) {
    return a + b;
  }
static square(num) {
    return num * num;
  }
}
// Galat Tarika (Object banakar call karna):
// const math = new MathUtils();
// math.add(5, 10); // TypeError: math.add is not a function
// Sahi Tarika (Direct Class name se call karna):
console.log(MathUtils.add(5, 10));    // Output: 15
console.log(MathUtils.square(4));     // Output: 16

//Static Property
//Static property ek aisa variable hota hai jo poori class ke liye common/shared hota hai. Agar koi property sabhi objects ke liye ek jaisi rehni chahiye, toh use static banaya jata hai.

class User {
  // Static Property (Sabhi users ke liye common counter)
  static totalUsers = 0;
constructor(name) {
    this.name = name; // Normal Instance Property
    // Jab bhi naya object banega, static counter +1 hoga
    User.totalUsers++;
  }
// Static Method to show total count
  static getCount() {
    return `Total users registered: ${User.totalUsers}`;
  }
}
// Objects banana
const u1 = new User("Rahul");
const u2 = new User("Priya");
const u3 = new User("Amit");
// Individual User ka naam access karna:
console.log(u1.name); // Output: Rahul
// Class level counter access karna:
console.log(User.getCount()); // Output: Total users registered: 3

//this Keyword inside Static: Static method ke andar this keyword class ko refer karta hai, na ki bane huye object ko.
//Accessing Instance Data: Static methods direct normal (instance) properties ko access nahi kar sakte kyunki static method ko pata nahi hota ki kaunse object ka data read karna hai.
class Car1 {
  constructor(brand) {
    this.brand = brand;
  }
static checkEngine() {
    //  Error ya undefined hoga kyunki brand individual object par hota hai
    console.log(`Checking ${this.brand}`); 
  }
}
const c1 = new Car1("BMW");
Car1.checkEngine(); // Output: Checking undefined
