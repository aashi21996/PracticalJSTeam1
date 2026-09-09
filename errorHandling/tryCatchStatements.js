//JavaScript fully supports the try...catch...finally statement for synchronous and asynchronous error handling.
//try: Wraps code that might throw an error.
//catch: Handles the error if one occurs in the try block.
//finally: Executes a block of code after the try and catch blocks, regardless of whether an error was thrown, caught, or even if a return statement was used inside try/catch.

/*let service =car;
let car = 5
console.log("show error",service);*/

//
try{
    let service =car;
let car = 5
console.log("show error",service);
}
catch (error){
    console.log("Caught an error:", error.message);
}

//finally block is optional
try{
    let service =car;
let car = 5
console.log("show error",service);
}
catch (error){
    console.log("Caught an error:", error.message);
}
finally {
  console.log("Finally block always runs");
}

//ReferenceError: Cannot access 'fun' before initialization
/*try{
    let ser =fun;
let fun = 5
console.log("show error",ser);
}
finally {
  console.log("Finally block always runs there is no catch");
}*/

//multiple catch are not allowed in java script
/*
try{
    let service =car;
let car = 5
console.log("show error",service);
}
catch (error){
    console.log("Caught an error:", error.message);
}
catch (error)                    //Unexpected token 'catch'
{
    console.log("x1");
}
finally {
  console.log("Finally block always runs");
}
*/
//multiple try are not allowed in java script
/*
try{
    let service =car;
let car = 5
console.log("show error",service);
}                                        //SyntaxError: Missing catch or finally after try
try{
    let raj= simran;
    let simran=0;
    console.log("i am here",raj);
}
catch (error){
    console.log("Caught an error:", error.message);
}
finally {
  console.log("Finally block always runs");
}
*/

//if code trows exception finally will always run

// multiple finally block
/*
try{
    let service =car;
let car = 5
console.log("show error",service);
}
catch (error){
    console.log("Caught an error:", error.message);
}
finally {
  console.log("Finally block always runs");
}
finally{                                        //SyntaxError: Unexpected token 'finally'

    console.log("here i am");
}
*/

//in java script error an dexception both are same thing
//6 types of error in java script

//1. A ReferenceError occurs if you use (reference) a variable that does not exist.

try {
  let x = y; // Yeh ReferenceError throw karega (kyunki 'y' declare hone se pehle use ho raha hai)
  let y = 5;
} catch(err1) {
  // Standard properties
  console.log("err1.name:", err1.name);
  console.log("err1.message:", err1.message);
  console.log("err1.stack:", err1.stack);
  
  // Vendor-specific & Deprecated Properties
 /* console.log("err1.cause:", err1.cause);       // Microsoft only (IE/Old Edge)
  console.log("err1.errorCode:", err1.errorCode);               // Microsoft only (Error code)
  console.log("err1.isOperational:", err1.isOperational);           // Firefox only
  console.log("err1.lineNumber:", err1.lineNumber);       // Firefox only
  console.log("err1.columnNumber:", err1.columnNumber);   // Firefox only
  console.log("err1.caller:", err1.caller);               // Deprecated
  console.log("err1.arguments:", err1.arguments);         // Deprecated

  // Methods (check karke print karwana padta hai taaki error na aaye)
  if (typeof err1.toSource === 'function') {
    console.log("err1.toSource():", err1.toSource());     // Firefox only method
  } else {
    console.log("err1.toSource(): Not supported in this environment");
  }*/
}

//2. A Type Error occurs when a value is of the wrong type or an operation is invalid on that type.

let anna = 5;
try {
  anna(5);
} catch(err2) {
 console.log("err2.name:", err2.name);
  console.log("err2.message:", err2.message);
  console.log("err2.stack:", err2.stack);
}

//3. A RangeError occurs when a value is out of its valid range.

try {
new Array(-1);         //array size -1 bata raha h yaha jo ki possible nai h
} catch(err3) {
  console.log("err3.name:", err3.name);
  console.log("err3.message:", err3.message);
  console.log("err3.stack:", err3.stack);
}

//4. An URIError occurs if you use illegal characters in a URI function:

try {
  decodeURI("%%%");   // You cannot URI decode percent signs
  //JavaScript me decodeURI() ek built-in function hai. Iska kaam URL-encoded (percent-encoded) string ko wapas normal readable string me convert karna hota hai.
} catch(err4) {
    console.log("err4.name:", err4.name);
  console.log("err4.message:", err4.message);
  console.log("err4.stack:", err4.stack);
}

//5. A Syntax Error occurs when the code violates JavaScript's grammar rules.
//Syntax errors are not catchable by try...catch
//Syntax errors happen before runtime
/*
try {
  let x = Math.round(4.6;)
} catch(err5) {
  let text = err.name + " " + err.description;
}
//SyntaxError: missing ) after argument list
*/
//6. An EvalError indicates an error in the eval() function. //deprecated

try {
  // Yahan hum eval() ke andar galat syntax de rahe hain
  eval("console.log('Hello'"); // Bracket miss hai
} catch (err6) {
  console.log("err6.name:", err6.name); // Output: "SyntaxError" (EvalError nahi)
  console.log("err6.message:", err6.message);
  console.log("err6.stack:", err6.stack);
}
//Agar aap actual me eval() me koi galti karoge, toh modern JavaScript EvalError nahi balki SyntaxError throw karega: