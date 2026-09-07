//An inner function always has access to the variables of its outer function, even after the outer function has closed (returned).

function outerFunction() {
    let count = 0; // Yeh outer function ka variable hai   
    function innerFunction() {
        count++; // Inner function outer wale variable ko access aur modify kar raha hai
        console.log(count);
    }
 return innerFunction; // Hum inner function ko return kar rahe hain, execute nahi!
}
// outerFunction ko chalaya, aur uska result ek naye variable mein save kiya
const myCounter = outerFunction();
myCounter(); // Output: 1
myCounter(); // Output: 2
myCounter(); // Output: 3

//
function createBankAccount() {
    let balance = 1000; // Yeh private variable hai, ise bahar se koi direct access nahi kar sakta

    return {
        deposit: function(amount) {
            balance += amount;
            console.log(`Deposited: ${amount}. Total Balance: ${balance}`);
        },
        withdraw: function(amount) {
            if (amount <= balance) {
                balance -= amount;
                console.log(`Withdrawn: ${amount}. Remaining: ${balance}`);
            } else {
                console.log("Balance kam hai!");
            }
        },
        getBalance: function() {
            return balance;
        }
    };
}

const myAccount = createBankAccount();

myAccount.deposit(500);  // Output: Deposited: 500. Total Balance: 1500
myAccount.withdraw(200); // Output: Withdrawn: 200. Remaining: 1300

//  Tum balance ko direct badal nahi sakte:
// console.log(balance); // Error! `balance` is not defined outside.
console.log(myAccount.getBalance()); // Output: 1300 (Sirf function ke zariye dekh sakte hain)