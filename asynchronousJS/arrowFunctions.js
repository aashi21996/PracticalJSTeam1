const person = {
    name: "Rahul",
    
    // Normal function
    sayHelloNormal: function() {
        setTimeout(function() {
            // Yahan 'this' window ya global object ban jayega, 'Rahul' nahi milega
            console.log("Hello, my name is " + this.name); 
        }, 1000);
    },

    // Arrow function
    sayHelloArrow: function() {
        setTimeout(() => {
            // Arrow function apna 'this' parent (person object) se le lega
            console.log("Hello, my name is " + this.name); 
        }, 1000);
    }
};

person.sayHelloArrow(); // Output: Hello, my name is Rahul 

//Implicit Return (Bina return keyword ke)
const add = (a, b) => {
    return a + b;
};

// Ab ek line mein aise likh sakte hain:
const add1 = (a1, b1) => a1 + b1; 
// Yeh automatic 'a + b' ko return kar dega!

