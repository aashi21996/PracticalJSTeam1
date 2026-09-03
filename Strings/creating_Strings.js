//Single Quotes (') , Double Quotes (") and Template Literals / Backticks (``)

let name = "Alice";
let age = 25;
let greeting = `Hello, my name is ${name} and I am ${age} years old.`;
console.log(greeting);

//
let multiLine = `This is line 1.
This is line 2.
This is line 3.`;
console.log(multiLine);

//
let numStr = String(123);      // "123"
console.log(numStr);

let boolStr = String(true);    // "true"
console.log(boolStr);

let arrayStr = String([1, 2]); // "1,2"
console.log(arrayStr);

let strObj = new String("Hello");
console.log(typeof strObj); // "object"