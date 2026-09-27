// checking let variable
let x=100;
console.log("print value of x", x);   // o/p- print value of x 100

//checking scope

/*Example1:
{
    let a=20
    console.log("Print1 value of a", a); //o/p: Print1 value of a 20
}

{
    console.log("print2 value of a" , a);
}      // o/p- ReferenceError: a is not defined


Example2:

{
    let year=2026
    console.log("print year=",year); //print year= 2026

}
{
let day="sunday";
console.log("print day=",day);  //print day= sunday
}

{
    console.log("print year2", year);
} // o/p- ReferenceError: year is not defined */

// checking let variable with function
function party()
{
    let a=10;
    let b=20;
    let c=b/a;
    let d=c;
     
    console.log("print value of d=",d);  // o/p- print value of d= 2
}
party();

// checking redeclaration
/*{
    let year=2026
    console.log("print year=",year);
}
{
let day="sunday";
console.log("print day=",day);
 let day="monday";
console.log("print day2=",day); // o/p- SyntaxError: Identifier 'day' has already been declared
} */ 

//checking reassignment 
{
    let year=2026
    console.log("print year=",year);
}

{
let day="sunday";
console.log("print day=",day);
  day="monday";
console.log("print day2=",day);
}

