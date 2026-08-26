// var variable ko declare kiya and value assign nai ki

var a;
console.log("a=",a);       // o/p- a= undefined



//-------------------------------------------------------------------------------
// var variable ko uppar declare kiya and value niche assign kiya
var time;
console.log(time);
time=50;              // o/p- undefined (becoz variable value is defined in last)






//------------------------------------------------------------------------------
//var variable ko upar declare kiya and then assign kiya

var time;
time=80;
console.log("time is=",time);        // o/p- time is= 80




//-----------------------------------------------------------------------------------
// var variable ko niche declared and assined kiya

console.log(age); 
var age = 25;         // o/p- undefined (reason:is given)

//reason
/*JavaScript
var age; // 1. Declaration top par chala gaya (default value = undefined)

console.log(age); // 2. Abhi tak value 25 assign nahi hui hai, isliye 'undefined' print hua!

age = 25; // 3. Assignment apni jagah par hi rehta hai*/



//-----------------------------------------------------------------------------------------------------------------------------------
//variable declation and assignment top par h

var age=28;
console.log(age);  // o/p- 28




//-----------------------------------------------------------------------------------
//Function ke sath var variable check kiya

function aashi()
{
    var a=10;
    var b=10;
    var c=a+b;
    var d=c;
    console.log("c=",d);
    
}
aashi();    //o/p- c= 20



//----------------------------------------------------------------------------------
// checking if a is lossing its value or not
var a=10;
var b=20;
var c=b/a;
var d=c;
console.log("c=",c);    // o/p- c= 2
console.log("a=",a);    // o/p- a= 10




//------------------------------------------------------------------------------------------
//Scope checking ->

function subh()
{ 
   { var e=40;
    var f=10;
    var g=e/f;
    var h=g;
    console.log("h=",h);         // o/p- h= 4
    console.log("print vaue of f",f);   //o/p- print vaue of f 10
   }
   {
    console.log("print value of e =",e);   //o/p- print value of e = 40
   }
}
subh();     