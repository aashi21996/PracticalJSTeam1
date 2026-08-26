//The return statement immediately halts function execution and specifies a value to be passed back to the function's caller. If no value is specified, or if a function ends without encountering a return statement, it implicitly returns undefined.

function add(a, b) {
  return a + b; // Evaluation result sent back to caller
}
const sum = add(4, 6); // sum holds 10