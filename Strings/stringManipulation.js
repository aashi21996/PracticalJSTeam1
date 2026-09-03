//Replacing Substrings (replace() & replaceAll())

//replace():Replaces the first occurrence of a substring when using a literal string or non-global Regular Expression.

const text = "Red, Green, Red, Blue";

// Literal string (replaces first match only)
console.log(text.replace("Red", "Yellow")); 
// Result: "Yellow, Green, Red, Blue"

// Regular Expression with global flag /g (replaces all matches)
console.log(text.replace(/Red/g, "Yellow")); 
// Result: "Yellow, Green, Yellow, Blue"

// Case-insensitive replacement using /i flag
console.log(text.replace(/red/i, "Yellow")); 
// Result: "Yellow, Green, Red, Blue"

//replaceAll():Replaces all occurrences of a substring without needing a regular expression.
const text1 = "cat, dog, cat, bird";
console.log(text1.replaceAll("cat", "fish")); 
// Result: "fish, dog, fish, bird"

//Concatenating Strings:Template Literals (Recommended)
//Uses backticks (`) and ${} interpolation. Readable, clean, and supports multi-line strings.

const firstName = "Aashi";
const lastName = "kankane";
const fullName = `${firstName} ${lastName}`; 
console.log(fullName);

//Plus Operator (+ / +=):Joins strings directly. Note that if combined with numbers, it performs string conversion.

let greeting = "Hello" + " " + "World"; // "Hello World"
console.log(greeting);

greeting += "!";  // "Hello World!"
console.log(greeting);

console.log("Items: " + 5); // "Items: 5"

//concat() Method:A built-in string method for merging two or more strings.

const str1 = "Hello";
const str2 = "World";
console.log(str1.concat(" ", str2)); // "Hello World"

