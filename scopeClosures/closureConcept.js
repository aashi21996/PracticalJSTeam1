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

const service = myCounter();
console.log (myCounter);


