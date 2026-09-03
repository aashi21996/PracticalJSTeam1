//The Number() Function:Converts the entire string to a number. Returns NaN (Not a Number) if the string contains any non-numeric characters (except spaces).

console.log(Number("42"));      // 42
console.log(Number("3.14"));    // 3.14
console.log(Number("   100 ")); // 100 (trims spaces automatically)
console.log(Number(""));        // 0 (empty string becomes 0)
console.log(Number("42px"));    // NaN (fails because of trailing "px")

//parseInt() & parseFloat():Extracts numbers starting from the left until it hits a non-numeric character.
//parseInt(string, radix): Parses integers. Always specify the base (radix 10 for decimal).
//parseFloat(string): Parses floating-point numbers.

console.log(parseInt("42px", 10));   // 42 (stops at 'p')
console.log(parseFloat("3.14rem"));  // 3.14
console.log(parseInt("10.99", 10));  // 10 (truncates decimal part without rounding)
console.log(parseInt("abc12", 10));  // NaN (starts with non-numeric letter)

//The Unary Plus (+) Operator:Shortest syntax to convert a string to a number. Behaves identically to Number().

console.log(+"42");     // 42
console.log(+"3.14");   // 3.14
console.log(+"100px");  // NaN
console.log(+true);     // 1

//Converting Strings to Arrays
//split(separator):Splits a string based on a delimiter character or regular expression.
// Split by character/delimiter
console.log("apple,banana,cherry".split(",")); 
// Output: ["apple", "banana", "cherry"]

//Array.from():Creates an array from any iterable object (including strings).

console.log(Array.from("hello")); 
// Output: ["h", "e", "l", "l", "o"]

//Spread Operator (...):Unpacks the characters of a string into a array literal.
console.log([..."hello"]); 
// Output: ["h", "e", "l", "l", "o"]

// + and - Operations with Strings and Numbers:The + and - operators behave completely differently when applied to mixed types because + serves dual roles: addition and string concatenation.
//The + Operator (Concatenation Wins)
//If either operand is a string, JavaScript coerces the other operand to a string and concatenates them. Evaluation happens from left to right.
// String + Number -> String

console.log("5" + 2);        // "52"
console.log(10 + "20");      // "1020"

// Left-to-Right Evaluation
console.log(5 + 5 + "5");    // "105" (5 + 5 evaluates to 10, then 10 + "5" -> "105")
console.log("5" + 5 + 5);    // "555" ("5" + 5 -> "55", then "55" + 5 -> "555")

//The - Operator (Numeric Subtraction Wins):Unlike +, the - operator only exists for mathematical subtraction. JavaScript converts strings to numbers before calculating.
// String - Number -> Number
console.log("10" - 2);       // 8 (string "10" is converted to number 10)
console.log("10" - "2");     // 8 (both converted to numbers)

// Failed Coercion
console.log("hello" - 5);    // NaN (cannot convert "hello" to a valid number)
//Other Mathematical Operators (*, /, %):All other binary arithmetic operators behave like - and coerce strings to numbers:

console.log("10" * "2");     // 20
console.log("100" / "10");   // 10
console.log("10" % 3);       // 1
