//A Promise is an object representing the eventual completion (or failure) of an asynchronous operation and its resulting value.
//Once a promise is either fulfilled or rejected, it is considered settled, and its state can never change again.
/*The Three States of a Promise
A promise is always in one of three mutually exclusive states:
Pending: The initial state; the asynchronous operation is still processing, and the outcome is not yet known.
Fulfilled (Resolved): The operation completed successfully, and the promise now has a resulting value.
Rejected: The operation failed, and the promise now has a reason (an error object).*/

const getNewPhone = new Promise((resolve, reject) => {
    let boardExamScore = 72; //  marks 
    console.log("Checking result...");
    setTimeout(() => {                          //arrow function using into setTimeout
        if (boardExamScore >= 90) {
            resolve("Yay! new smartphone!"); 
        } else {
            reject("Sorry"); // Kaam fail hua
        }
    }, 2000); // 2 second ka delay
});
getNewPhone
.then((message) => {
        console.log("Success: " + message); 
    })
    .catch((error) => {
        console.log("Error: " + error); 
    });
    

//.then multiple ho sakte h 
const promise = new Promise((resolve, reject) => {
resolve(10); 
});

promise
    .then((result) => {
        console.log(result); // Output: 10
        return result * 2;   // 10 ko 2 se multiply  karke aage bheja
    })
    .then((result) => {
        console.log(result); // Output: 20
        return result + 5;   // 20 mein 5 joda aur aage bheja
    })
    .then((result) => {
        console.log(result); // Output: 25
    })
    .finally(() => {
        console.log("Operation complete.");
    });

    //finally will always run