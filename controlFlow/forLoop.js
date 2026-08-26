//A for loop in JavaScript is a control flow statement that repeatedly executes a block of code as long as a specified condition evaluates to true. 
// It is best used when you know in advance how many times you want to iterate over a block of code.

// print i from 1to10
for(let i=0;i<=10;i++)
{
    console.log("i=", i);
}
console.log("stops here");

// print i from 10 to 1
for(let i=10 ; i>=0 ; i--)
{
    console.log("print i=" ,i);
}

//with user input
/*const prompt = require('prompt-sync')(); // if u want to execute user input on vs code, u have to write this line
let i = prompt("enter  value of i");
for( Number(i) ; i>=0 ; i--)
{
    console.log("print value  i=" ,i);
}
*/

//infinite loop running and , freezing
/*for(;;)
{
    console.log("aashi");
}// o/p : infinite loop running and , freezing
*/

//use of break in for loop
for(let i=5 ; i==5; i--)
{
    console.log("yes");
    break;
}
console.log("no");

//initialization at top 
let i=5;
for(;i>0;i--)
{
    console.log("value of i",i);
}

// nested for loop
for (x=0 ; x<=8; x+=2)
{
    for(y=0 ; y<=9; y+=3)
    {
        console.log("hey print y ", y);
    
    }
    console.log("print value of x", x);
}

// two veriables at a time
for (let x=0 , y= 4;x<=5 && y<=7; x++ , y++)
{
    console.log("print values of x" ,x);
    console.log("print values of y", y);
}

//for loop with if else case
for (let z=9; z>=0;z--)
{
    if (z==7)
    {
        console.log ("print value of z", z);
    }
    else{
        console.log("hi z=", z);
    }
}