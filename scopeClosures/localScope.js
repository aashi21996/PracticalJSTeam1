function openGiftBox() {
    var toy = "Remote Control Car";      // Local to function
    let chocolate = "Dairy Milk";        // Local to function
    const secretCode = 12345;            // Local to function
   console.log("Andar sab mil raha hai:", toy, chocolate, secretCode);
}
openGiftBox(); 
// Output: Andar sab mil raha hai: Remote Control Car Dairy Milk 12345

//  Agar hum function ke BAHAR access karne ki koshish karein:
// console.log(toy);       // Error! 
// console.log(chocolate); // Error! 
// console.log(secretCode);// Error!

//
function checkExamResult() {
    let marks = 45;
     if (marks > 33) {
        // Yeh ek block {} ke andar hain
        var statusVar = "Pass ho gaye (var)";
        let gradeLet = "Grade A (let)";
        const messageConst = "Badhai ho (const)";
    }
    // Ab dekhte hain block ke BAHAR kya milta hai:
    console.log(statusVar); // Output: Pass ho gaye (var) -> Yeh block se bahar leak ho gaya!
    // console.log(gradeLet);    // Error! Yeh block ke andar hi band hai
    // console.log(messageConst);// Error! Yeh bhi block ke andar hi band hai
}
checkExamResult();