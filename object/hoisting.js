//Function Declarations (Fully Hoisted)
//Function declarations are hoisted completely—both their name and their entire definition (body) are placed in memory. You can call the function before defining it in your code.

// Calling function before declaration works!
greet(); 

function greet() {
  console.log("Hello, World!");
}

//var Keyword (Hoisted with undefined)
//Variables declared with var are hoisted to the top of their scope, but they are initialized with undefined. Accessing a var variable before its assignment returns undefined instead of throwing an error.

console.log(age); // Output: undefined (not ReferenceError)
var age = 25;
console.log(age); // Output: 25

// let and const (Temporal Dead Zone)
//Variables declared with let and const are hoisted, but they are not initialized. They enter a state called the Temporal Dead Zone (TDZ) from the start of the block until the execution reaches the actual line of declaration.
//Accessing a let or const variable inside the TDZ throws a ReferenceError.

console.log(score); // Uncaught ReferenceError: Cannot access 'score' before initialization
let score = 100;

// Function Expressions & Arrow Functions
//Function expressions and arrow functions assigned to variables follow the hoisting rules of the variable keyword used (var, let, or const).
// Using 'var'

sayHi(); // TypeError: sayHi is not a function
var sayHi = function() {
  console.log("Hi!");
};

// Using 'let' or 'const'
sayHello(); // ReferenceError: Cannot access 'sayHello' before initialization
const sayHello = () => {
  console.log("Hello!");
};