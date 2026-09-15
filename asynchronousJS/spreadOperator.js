//The spread operator (...) in JavaScript is a powerful and concise syntax introduced in ES6 (ES2015).
// It allows an iterable (such as an array, string, or object) to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected.
//Despite using the same three-dot syntax (...) as the rest parameter, their purposes are exact opposites: spread expands elements out, while rest collects them together.

//Array Operations
const original = [1, 2, 3];
const copy = [...original];
console.log(copy); // [1, 2, 3]
console.log(original === copy); // false (different references in memory)
console.log(original == copy);   //false  (query)

// example 2
const fruits = ['apple', 'banana'];
const vegetables = ['carrot', 'potato'];
// Combining arrays
const produce = [...fruits, ...vegetables];
console.log(produce); // ['apple', 'banana', 'carrot', 'potato']
// Inserting elements in between
const specificProduce = ['strawberry', ...fruits, 'tomato', ...vegetables];

// example 3
const numbers = [2, 3, 4];
const updatedNumbers = [1, ...numbers, 5]; 
console.log(updatedNumbers); // [1, 2, 3, 4, 5]

// example 4
const user = { name: 'Alice', age: 25 };
const job = { role: 'Developer', city: 'New York' };
// Merging objects
const employee = { ...user, ...job };
console.log(employee); 
// { name: 'Alice', age: 25, role: 'Developer', city: 'New York' }

//example 5
const settings = { theme: 'dark', notifications: true, version: 1 };
// Update theme while keeping other properties intact
const updatedSettings = { ...settings, theme: 'light', version: 2 };
console.log(updatedSettings); 
// { theme: 'light', notifications: true, version: 2 }

//example 6
function sum(a, b, c) {
  return a + b + c;
}
const numbers1 = [10, 20, 30];
// Without spread, you would write sum(numbers[0], numbers[1], numbers[2])
console.log(sum(...numbers1)); // 60

//example 7
const scores = [45, 12, 89, 33];
console.log(Math.max(...scores)); // 89

//example 8
const greeting = "Hello";
const chars = [...greeting];
console.log(chars); // ['H', 'e', 'l', 'l', 'o']

