function greet(name, age) // 'name' and 'age' are PARAMETERS
{ 
  console.log(`${name} is ${age} years old.`);
}
greet("Alex", 25); // "Alex" and 25 are ARGUMENTS

//
function total(price, taxRate = 0.05)
 {
  return price + (price * taxRate);
}
console.log(total(100));       // 105 (uses default taxRate 0.05)
console.log(total(100, 0.10)); // 110 (overrides default)