//The ternary operator (also called the conditional operator) is the only operator in JavaScript that takes three operands. It serves as a concise, single-line shorthand for an if...else statement.
//Syntax
//condition ? expressionIfTrue : expressionIfFalse

let y=20;
let s= y>=18 ? "yes" : "no";
console.log(s);

//
const score = 85;

const grade = score >= 90 ? "A" 
            : score >= 80 ? "B" 
            : score >= 70 ? "C" 
            : "F";

console.log(grade); // "B"