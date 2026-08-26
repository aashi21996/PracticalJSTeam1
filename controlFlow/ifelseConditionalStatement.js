let a=0;
if (a==0)
{
    console.log("Data is good");
}

//------------------------------------------------------------------------------------------------------------------------

let b=5;
if (26/5==b)
{
    console.log("i am here");
}
else
{
    console.log("i am not here");
}

//--------------------------------------------------------------------------------------------------------------------

let score =45;
if (score>50)
{
    console.log("pass");
}
else if(score<50)
{
    console.log("fail");
}
else
{
    console.log("average")
}

//----------------------------------------------------------------------------------------------------------

let a1= "guest";
let age= 30;
let d="kid";

if (a1=="guest")
{
    if(age==30)
    {
         console.log("welcome");
         if (d=="kid")
         {
            console.log("hey kid");
        }
        else{
            console.log("no kid");
        }
    }
else{
    console.log("not welcome")
    }
}
else{
    console.log("u r uninvited");
}

//------------------------------------------------------------------------------------------------------
let name= "aashi";
let age1="80";
let married ="yes";
if(name=="aashi" && age1=="30" && married=="yes")
{
    console.log("thanks");
}
else
{
    console.log("welcome");
}

//------------------------------------------------------------------------------------------------------------
let manager=89;
let staff="hey";
let empId=10345;

if(manager==893 || staff =="no" || empId==103445)
    {
console.log("correct");
}
else{
    console.log("incorrect");
}

//-----------------------------------------------------------------------------------------------------------------

let a2="mango";
let b2="grapes";
 if (a2=="mangos")
 {
    console.log(a2,b2);
 }
 else{
    console.log("no need");
 }

 //------------------------------------------------------------------------------------------------------------

 let e=7;
 let f=2;

 if(e%f==0)
 {
    console.log("number is even=",e);
 }
 else{
    console.log("odd number");
 }

 //----------------------------------------------------------------------------
const prompt = require('prompt-sync')(); // if u want to execute user input on vs code, u have to write this line
let today = prompt("enter  day");
 if(today!=="monday") //strict not equal to operator
 {
    console.log("i am jj");
 }
 else{
    console.log("i am js");
 }
 //---------------------------------------------------------------------------------------------------------------
 //leap year
 /*
const prompt = require('prompt-sync')(); // if u want to execute user input on vs code, u have to write this line
let year = prompt("enter  year");
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log(year + " is a Leap Year!");
} 
else {
    console.log(year + " is NOT a Leap Year!");
}*/
