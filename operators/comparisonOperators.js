//In JavaScript, comparison operators compare two values and evaluate to a boolean result: either true or false
// Loose Equality (==)
//Loose equality performs Type Coercion. If the operands are of different data types, JavaScript automatically converts one or both values to a matching type before making the comparison.
console.log(3==4); //o/p- false
 
//-------------------------------------------------------------------------------------------------------

let y=1
let x=2
if(y==x)
{
 console.log("i am fine");
}
else
{
    console.log("i am not fine"); //o/p- i am not fine

}

//------------------------------------------------------------------------------------------------

console.log(5 == '5');           //o/p- true (string '5' becomes number 5 automatically.)
console.log(1 == true);          // true (true becomes  1)

console.log(null == undefined);  // true (special language rule)
console.log(0 == false);         // true (false becomes 0)

console.log("" == 0);   // o/p- true (reason: empty string "" converted into 0 (kuki yaha comparison number se ho raha h))
console.log([] == 0);   // o/p- true (reason:empty array [] converted into 0 (kuki yaha comparison number se ho raha h))
console.log([] == ![]); // o/p- true (reason: empty array [] converted into 0  and ![] means not true i.e false and then boolean(false) ko number mai convert karege to 0)

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Strict Equality (===)
// Strict equality compares both value and data type. No type conversion occurs. If the types differ, it instantly evaluates to false.

console.log(5 === '5');          // o/p- false (Number vs String)
console.log(1 === true);         // o/p- false (Number vs Boolean)
console.log(null === undefined); // o/p- false (Null vs Undefined)
console.log(5 === 5);            // o/p- true (Same type, same value)

//----------------------------------------------------------------------------------------------------------------------------
//Relational Operators (>, <, >=, <=)

console.log(15 > 10);  // o/p- true
console.log(10 <= 10); // o/p- true
console.log(-5 < 0);   // o/p- true

//--------------------------------------------------------------------------------------------------------------------------------
//String Comparisons

console.log('b' > 'a');     // o/p- true ('b' has higher ASCII value)
console.log('apple' < 'banana'); // o/p- true (in JS only first character ASCII value compared )
console.log('2' > '10');    // o/p- true (both r string so only first character ASCII value will compared)

//------------------------------------------------------------------------------------------------------------------------

let str1 = "hello";
let str2 = "hello";
console.log(str1 === str2); // o/p- true

// Objects compare by reference location in memory
let o1 = new String ("aashi")  //(object)
let o2 = new String ("aashi")  //(object)
let o3 = o1;

console.log(o1 === o2); // o/p- false (different locations in memory)
console.log(o1 === o3); // o/p- true  (points to the exact same reference)

let arr1 = [1, 2];
let arr2 = [1, 2];
console.log(arr1 === arr2); // o/p- false (different location par array stored h)

//----------------------------------------------------------------------------------------------
//Special Edge Cases
//NaN is the only value in JavaScript that is not equal to anything, including itself.

console.log(NaN === NaN); // o/p- false
console.log(NaN == NaN);  // o/p- false

//--------------------------------------------------------------------------------------------------------

console.log(null == undefined);  // o/p- true
console.log(null === undefined); // o/p- false
console.log(null >= 0); // o/p- true
console.log(null == 0); // o/p- false