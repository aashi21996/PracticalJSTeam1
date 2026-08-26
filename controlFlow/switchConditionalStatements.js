let code = "Apple";
switch (code)
{
case "Apple":
    console.log ("apple");

break;
default :
console.log("grapes");
}

//Normal switch loop
let a= 3;
let b= 5;
let c= a+b;
let y=b-a;

switch (5)
{
    case 8:
        console.log("kk");
        break;
    case null:
        console.log("ll");   
        break;
    default:
        console.log("mm");
}

// days
let d=5;
switch(d)
{
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
           
    console.log("its working day");
break;
case 6:
case 7: 
console.log("its not working day");
break;

default:
    console.log("invalid");

}

//months

let s =6;

switch(s)
{
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("feb");
        break;
    case 3:
        console.log("March");
        break;
        
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("june");
        break;
    case 7:
        console.log("july");
        break;
    case 8:
        console.log("august");
        break;
    case 9:
        console.log("september");
        break;
    case 10:
        console.log("october");
        break;
    case 11:
        console.log("november");
        break;
    case 12:
        console.log("december");
        break;
    default:
        console.log("invalid number");    

}

//days

let yj= "saturday";
switch (yj)
{
    case "monday":
    case "tuesday":
    case "wednesday":
    case "thursday":
    case "friday":
    console.log("working");
    break;
    default:
    case "saturday":
    case "sunday":
        console.log("not working");
        break;             
}

// calculator
//JavaScript mein prompt() function user se jo bhi input leta hai, 
// wo humesha String data type mein hi hota hai—firse chahe user 10 likhe ya true.
// using string ko number mein convert (Type Casting) karna
const prompt = require('prompt-sync')(); // if u want to execute user input on vs code, u have to write this line
let z = prompt("enter  operator");
let a2= prompt("enter first no");
let a3= prompt("enter second no.");
switch(z)
{
    case "+":
        console.log("addition",Number(a2)+Number(a3)); //here we r doing type casting Number(a2)
        break;
    case"-":
         console.log("subs", a2-a3);    
         break;
    case "*":
         console.log("multiplication ", a2*a3);
         break;
    case "/":
        console.log("divide ",a2/a3);
        break;
        default:
            console.log("invalid");
            break;     
}