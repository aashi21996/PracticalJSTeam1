//Strict Equality (===):Checks if two strings have the exact same sequence of UTF-16 code units. It is case-sensitive and does not perform type coercion.

let x="hello"
let y="hello"
let z="Hello"
console.log(x===y);
console.log(x===z);

//Locale-Aware Comparison (localeCompare()):Compares two strings according to language-specific rules, returning a negative number, 0, or a positive number.

// Basic usage
s="apple".localeCompare("banana"); // -1 ("apple" comes before "banana")
console.log(s);

t="cherry".localeCompare("apple");  //  1 ("cherry" comes after "apple")
console.log(t);

u="test".localeCompare("test");     //  0 (equal)
console.log(u);

//Case-Insensitive Comparison:To compare strings regardless of letter case, choose one of two approaches

const str1 = "JavaScript";
const str2 = "javascript";

//Convert both to lower case
console.log(str1.toLowerCase() === str2.toLowerCase()); // true




