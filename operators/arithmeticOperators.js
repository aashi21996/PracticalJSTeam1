let a = 100;
let b = 5;

console.log("Addition=",a + b); // o/p- Addition= 105
console.log("Substraction=",a - b); // o/p- Substraction= 95

console.log("Multiplication=",a * b); // o/p- Multiplication= 500
console.log("Division=",a / b); // o/p- Division= 20

console.log("Remainder=",a%b);  // o/p- Remainder= 0
console.log("Power=",a**b);  // o/p- Power= 10000000000

//-----------------------------------------------------------------------------
//example of remainder

let x=8;
let y=2;
if (x%y==0)
{
    console.log("number is even");
}
else
{
    console.log("number is odd");
}  //o/p- number is even

//------------------------------------------------------------------------------------------
//Post-Increment / Post-Decrement (x++ / x--)
//Pehle value use hoti hai, phir badhti/ghat-ti hai.

let z=6;
console.log("print z++ =",z++); // print z++ = 6
console.log("print z =",z); // print z = 7

let z1=100;
 console.log("print z1-- =",z1--); // o/p- print z1-- = 100
console.log("print z1=",z1); // o/p- print z1= 99

let z2=100;
 {
//let z2=500;
console.log("print inner z2-- =",z2--); // o/p- print inner z2-- = 100
console.log("print inner z2=",z2); // o/p- print inner z2= 99
}
console.log("print outer=",z2); // o/p- print outer= 99
z2=200;
console.log("print new value z2=", z2); // o/p- print new value z2= 200

//--------------------------------------------------------------------------------------------------------------
//Pre-Increment / Pre-Decrement (++x / --x)
//Pehle value badhti/ghat-ti hai, phir use hoti hai.

let w=100;
console.log("Print pre increment  w=", ++w);
console.log("Print value of w=", w);

let w1=20;
console.log("print again value of w1=",w1)
console.log("Print pre decrement  w1=", --w1);

//---------------------------------------------------------------------------------------------------------------
// imp rule

console.log(5 + 5);     // O/p- 10 (Dono numbers hain)
console.log("5" + 5);   // O/p- 55 (String Coercion - text ban gaya)

console.log("5" - 2);   // O/p- 3 (Baaki saare operators `-`, `*`, `/` string ko number mein convert kar dete hain!)
console.log("Hello" * 5); // O/p- NaN

//-----------------------------------------------------------------------------------------------------------------------------
//Operator Precedence (BODMAS Rule in JS)
/* 
() Parentheses (Sabse pehle bracket solve hota hai)
** Exponentiation
*, /, % (Left-to-right execution)
+, - (Left-to-right execution)
*/

let result = 10 + 5 * 2; 
console.log(result); // O/p- 20 

let result2 = (10 + 5) * 2;
console.log(result2); // O/p- 30

let result4 = ((12 - 4) * (2 + 3)) / (2 ** 3 - 4);
console.log(result4); // O/p- 10


