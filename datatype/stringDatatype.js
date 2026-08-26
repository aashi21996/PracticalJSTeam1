/*A JavaScript string is zero or more characters written inside quotes.
('' ,"" ,``)*/

console.log("hi");  // o/p- hi
console.log(`jayash`); // o/p- jayash
console.log('i'); // o/p- i

console.log("he's"); // o/p- he's
//console.log('he's'); // o/p- SyntaxError                    
console.log("i am 'aashi'"); // o/p- i am 'aashi'

//console.log("i am "aashi""); // o/p- SyntaxError
console.log('i am "aashi"'); // o/p- i am "aashi"
//console.log('i am 'aashi'') // o/p- SyntaxError

console.log(""); // o/p- blank line
console.log(" "); // Ek space print hoga
console.log(typeof "subhi");

//---------------------------------------------------------------------------
//checking the length of string

let text = "ABCDEFGHIJKLOPQRSTUVWXYZ";
let lens = text.length;   //length() method
console.log("length=",lens); // o/p- length= 24

let text1="a ";
let length1 = text1.length;
console.log("length1=",length1); // o/p- length1= 2

let text2 = 'hi"aaa"';
let length2 = text2.length;
console.log("length2=",length2); //o/p- length2= 7

//----------------------------------------------------------------
// how to print quoted string (using \ icon before "")

let arm="hi its \"friday\\sturday\"";
console.log("weekdays=",arm); //o/p- weekdays= hi its "friday\sturday"

//---------------------------------------------------------------------------------
//string variable is in comparision with string object (data is matching)
// becoz == symbol is used here

let a="aashi"; //this is string variable
let b2=new String("aashi");  //this is object
console.log(a==b2);  //o/p- true

//-------------------------------------------------------------------------------
//string variable is in comparision with string object (type ki matching)
//becoz === symbol is used here

let a1="aashi"; //this is string variable
let b1=new String("aashi");  //this is object
console.log(a1===b1);  //o/p- false

//----------------------------------------------------------------------------------------
//string object is in comparision with string object (memory allocation ki matching)
let s=new String("subh");
let k=new String("subh");
console.log(s==k); //o/p false