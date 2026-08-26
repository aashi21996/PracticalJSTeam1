// In JavaScript, the Number data type is used to represent both integers (whole numbers like 25) 
// and floating-point numbers (decimals like 99.9).

let x=10;
console.log("print x=",x); //o/p- print x= 10
console.log(typeof x); //o/p- number
let y=8.9;
console.log("print y=",y);//o/p- print y= 8.9
console.log(typeof y); //o/p- number

//---------------------------------------------------------------------------------
// Jab aap kisi aisi calculation ki koshish karte hain jo mathematically valid nahi hai, 
// toh JavaScript NaN (Not a number) return karta hai.
let e="aashi";
let f= e/0;
console.log("print f=",f); //o/p- print f= NaN
console.log(typeof e); //o/p- string
console.log(typeof f); //o/p- number

//-----------------------------------------------------------------------------
//Agar aap kisi number ko 0 se divide karenge, ya number itna bada ho jaye jo JavaScript ki limit se bahar ho, 
// toh Infinity milta hai.

console.log(100/0); //o/p- Infinity
console.log(-4/0); //o/p- -Infinity
