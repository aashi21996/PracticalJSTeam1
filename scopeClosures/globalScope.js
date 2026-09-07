//In JavaScript, Global Scope refers to the outermost context where variables are accessible from anywhere in your code. Variables declared outside of any function, block, or module reside here.

// Global variables
const appName = "SuperApp";
let currentUser = "Alice";

function logUser() {
  // Functions can access global variables freely
  console.log(`Current user is: ${currentUser} in ${appName}`);
}

logUser(); // Output: Current user is: Alice in SuperApp

//
var gameTitle = "Super Mario"; // Global Scope
if (true) {
    var secretLevel = "World 4-1"; // Yeh block ke andar hai, par var ki wajah se BAHAR bhi mil jayega!
}
console.log(gameTitle);   // Output: Super Mario
console.log(secretLevel); // Output: World 4-1 (Yeh block se bahar leak ho gaya!)

//
let playerLevel = 10; // Global Scope
if (true) {
    let bonusPoints = 50; // Yeh sirf is block ke andar zinda hai (Block Scoped)
    console.log(bonusPoints); // Output: 50 (Yahan chalega)
}
//console.log(bonusPoints); // Error! Yeh block ke bahar access nahi ho sakta
console.log(playerLevel); // Output: 10

//
const schoolPinCode = 284001; // Global Scope - Yeh fix hai, badal nahi sakte
// schoolPinCode = 300000; 
//  Error aayega! const variable ki value dobara change nahi kar sakte.
if (true) {
    const maxLives = 3; // Yeh bhi sirf is block ke andar rahega
    console.log(maxLives); // Output: 3
}
// console.log(maxLives); // Error!  Block ke bahar access nahi hoga