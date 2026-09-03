//Changing Case:Convert strings between uppercase and lowercase.

const text = "JavaScript";
console.log(text.toUpperCase()); // "JAVASCRIPT"
console.log(text.toLowerCase()); // "javascript"

//Trimming Whitespace:Remove leading and trailing spaces, tabs, and newline characters.
const str = "   Hello World!   ";
console.log(str.trim());      // "Hello World!" (both sides)
console.log(str.trimStart()); // "Hello World!   " (left side only)
console.log(str.trimEnd());   // "   Hello World!" (right side only)

//slice(start, end):Extracts a section from start index up to (but not including) end index. Supports negative indices to count from the end.

const str1 = "JavaScript";
console.log(str1.slice(0, 4));   // "Java"
console.log(str1.slice(4));      // "Script" (from index 4 to end)
console.log(str1.slice(-6));     // "Script" (last 6 characters)

//substring(start, end):Similar to slice(), but swaps negative numbers or treats them as 0.
const str2 = "JavaScript";
console.log(str2.substring(4, 0)); // "Java" (automatically swaps to 0, 4)

//Padding Strings:Fill a string with another character until it reaches a target length. Ideal for formatting numbers, dates, or visual alignment.
const num = "5";
// padStart(targetLength, padString)
console.log(num.padStart(3, "0")); // "005"

// padEnd(targetLength, padString)
console.log(num.padEnd(5, "."));   // "5...."

//repeat(count):Duplicates a string a specified number of times.
console.log("abc".repeat(3)); // "abcabcabc"

//split(separator):Divides a string into an array of substrings based on a separator pattern.
const cv = "apple,banana,cherry";
console.log(cv.split(",")); // ["apple", "banana", "cherry"]

// Split into individual characters
console.log("hello".split("")); // ["h", "e", "l", "l", "o"]