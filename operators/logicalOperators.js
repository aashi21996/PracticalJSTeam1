//Logical AND (&&)
//The && operator evaluates expressions from left to right.
//Boolean behavior: Returns true ONLY if both operands are truthy.
// It stops as soon as it finds the first falsy value and returns it. If all values are truthy, it returns the last truthy value.

console.log(true && true);   // o/p- true
console.log(true && false);  // o/p- false

// Non-boolean values
console.log("Cat" && "Dog"); // o/p- Dog (Both truthy -> returns last)
console.log(0 && "Dog");     // o/p- 0     (Stops at 0, the first falsy)
console.log("Cat" && null);  // o/p- null  (Stops at null, the first falsy)

//--------------------------------------------------------------------------------------------------------------------
//Logical OR (||)
//The || operator evaluates expressions from left to right.
//Boolean behavior: Returns true if at least one operand is truthy.
//It stops as soon as it finds the first truthy value and returns it. If all values are falsy, it returns the last falsy value.

console.log(true || false);  // o/p- true
console.log(false || false); // o/p- false

// Non-boolean values (Default values)
console.log("Cat" || "Dog"); // o/p- Cat(Stops at "Cat", the first truthy)
console.log("" || "Dog");    // o/p- Dog (Empty string is falsy -> skips to "Dog")
console.log(0 || false);     // o/p- false (Both falsy -> returns last)

// Practical use case: Setting default values
let userNickname = "";
let displayName = userNickname || "Guest"; 
console.log(displayName); // o/p- Guest (because "" is falsy)

//-----------------------------------------------------------------------------------------------
//Nullish Coalescing (??)
//The ?? operator was added to fix a specific issue with ||.
//While || treats all falsy values (0, "", false) as missing data, ?? only treats null and undefined as missing data ("nullish").
//Returns the right-hand side operand ONLY if the left-hand side operand is null or undefined.

let Q = 0;
let d = Q || 10; 
console.log(d); // o/p- 10 (0 is falsy, so it incorrectly fell back to 10)

// Solution using Nullish Coalescing (??):
let k=0;
let s = k ?? 10; 
console.log(s); // o/p- 0 (0 is valid, not null or undefined)

// Defaulting when truly missing:
let user= null;
console.log(user ?? "Standard User"); // o/p- "Standard User"

//-----------------------------------------------------------------------------------------------------------------
//Logical NOT (!)
//The ! operator converts a value to its opposite boolean state.
//Single NOT (!): Converts truthy to false and falsy to true.
//Double NOT (!!): Converts any value directly into its strict boolean representation.

console.log(!true);  // o/p- false
console.log(!0);     // o/p- true (0 is falsy -> becomes true)
console.log(!"Hello"); // o/p- false ("Hello" is truthy -> becomes false)

// Double NOT (!!) idiom - used to convert values to boolean:
console.log(!!"Hello"); // o/p- true
console.log(!!0);       // o/p- false
console.log(!![]);      // o/p- true (Arrays are truthy)

//---------------------------------------------------------------------------------------------------
//Operator Precedence (Order of Execution)
//When combining logical operators without parentheses, JavaScript evaluates them in this order:
//! (Highest)
//&&
//|| and ?? (Lowest)

console.log(false && true || true); // o/p- true


