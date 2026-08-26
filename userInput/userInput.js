//u have to run :  npm install prompt-sync : command for installing some files (node_modules ,package-lock.json)
//yeah terminal se run hoga , code runner button se run nahi hoga
// for changing path : cd "folder name"
//for running the code on terminal : node "file name"
//for changing path again to original : cd ..

const prompt = require('prompt-sync')(); // if u want to execute user input on vs code, u have to write this line
let userName = prompt("enter  name");
let age = prompt("age");
console.log("print user name",userName);
console.log("print age", age);


//const prompt = require('prompt-sync')();
//1. Terminal mein user se direct inputs (baat) karne ke liye hum yeh line likhte hain.
//2. prompt-sync library humein synchronous user input lene ki suvidha deti hai — yaani jab tak user Terminal mein kuch type karke Enter nahi daba deta,
//  tab tak aapka program ruk kar wait karega.
//3. require('prompt-sync') ek function laakar deta hai, hum uske aage () laga kar us function ko turant execute (chala) dete hain.
//4.const hi kyun? Kyunki hum nahi chahte ki code mein aage chalkar koi galti se prompt variable ki value badal de ya override kar de.
//5.const prompt =... (Is line se jo final function ban kar tayar hua, usko humne prompt naam ke variable mein hamesha ke liye store (save) kar liya.)