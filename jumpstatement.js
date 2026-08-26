//break- Terminates the current loop or switch block completely
//Loops (for, while, do-while) and switch
// writing break after default case in switch loop is optional

//continue- Skips the current iteration and jumps to the next loop iteration
//Loops (for, while, do-while)

//return- Exits a function immediately and optionally returns a value
//Functions only


//
let z = "`";
let a2= 2;
let a3= 6;
switch(z)
{
    case "+":
        console.log("addition",Number(a2)+Number(a3)); //here we r doing type casting Number(a2)
    case"-":
         console.log("subs", a2-a3);    
         break;
    case "*":
         console.log("multiplication ", a2*a3);
         break;
    default:
        console.log("invalid");
     
    case "/":
        console.log("divide ",a2/a3);
        break;
         
}

//
for (let i = 1; i <= 5; i++) 
    {
  if (i === 3) {
    continue; // Skip number 3 completely
  }
  console.log(i);
}

//
let age =7;
function checkAge(age) {
  if (age < 18) {
    return "Access Denied"; // Exits early if condition is met
  }
  return "Access Granted";
}
let output = checkAge(age);
console.log(output);
//console.log("return is",checkAge(age));

