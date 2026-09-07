//1. Dot Notation (object.property)
//Dot notation is the most common, clean, and readable way to access properties.

const user = {
  name: "Priya",
  age: 24,
  city: "Mumbai"
};
// Reading properties
console.log(user.name); // "Priya"
console.log(user.age);  // 24

// Modifying and adding properties
user.age = 25;
user.country = "India";

//Limitations of Dot Notation
//The property name must be a valid JavaScript identifier (no spaces, special characters, or starting with numbers).
//You cannot use variables inside dot notation.

const key = "city";
console.log(user.key); // undefined (looks for a literal property named "key")

//2. Bracket Notation (object["property"])
//Bracket notation allows accessing properties using strings or variables inside square brackets [].
const product = {
  title: "Wireless Mouse",
  "item price": 1200,      // Property name with space
  100: "Discount Code"      // Numeric property name
};
// Accessing non-standard property names
console.log(product["item price"]); // 1200
console.log(product[100]);          // "Discount Code"

//Accessing Properties Using Variables
//Bracket notation evaluates expressions inside [], making it essential for dynamic key access:

const users = {
  name: "Rahul",
  score: 95
};

const keyToAccess = "score";

console.log(user[keyToAccess]); // 95

// Object Destructuring (Modern ES6)
//Destructuring extracts properties from an object and binds them directly to variables in a single line.

const student = {
  id: 101,
  fullName: "Aman Sharma",
  grade: "A"
};

// Extracting properties into standalone variables
const { fullName, grade } = student;
console.log(fullName); // "Aman Sharma"
console.log(grade);    // "A"

// Renaming variables during extraction
const { id: studentId } = student;
console.log(studentId); // 101

// Setting default values
const { age = 18 } = student;
console.log(age); // 18 (fallback default used because 'age' was undefined)

//Optional Chaining (?.) (Safe Access)
//Accessing properties on undefined or null objects causes a runtime error (TypeError). Optional chaining (?.) short-circuits and returns undefined instead of throwing an error.


const company = {
  name: "TechCorp",
  location: {
    city: "Bengaluru"
  }
};

// Safe nested property access
console.log(company.location?.city);    // "Bengaluru"
console.log(company.department?.title); // undefined (no error thrown)