const uniqueNumbers = new Set([1, 2, 2, 3, 4]);
console.log(uniqueNumbers); // Set(4) { 1, 2, 3, 4 }
uniqueNumbers.add(5);
console.log(uniqueNumbers);

// Example2
const fruits = new Set();
// Adding elements
fruits.add("apple");
fruits.add("banana");
fruits.add("orange");
fruits.add("apple"); // Duplicate! This will be ignored.
console.log(fruits); 
// Output: Set(3) { "apple", "banana", "orange" }

//Checking Existence and Size (has(), size)
const numbers = new Set([10, 20, 30, 40]);
console.log(numbers.has(20)); // Output: true
console.log(numbers.has(99)); // Output: false
console.log(numbers.size);    // Output: 4

//Deleting Elements and Clearing (delete(), clear())
const colors = new Set(["red", "green", "blue"]);
colors.delete("green");
console.log(colors); // Set(2) { "red", "blue" }
colors.clear();
console.log(colors.size); // Output: 0

//Iterating Over a Set (for...of, forEach())
const letters = new Set(["a", "b", "c"]);
// Using for...of loop
for (let key of letters) {
    console.log(key);
}
// Using forEach
letters.forEach((value) => {
    console.log(value);
});

