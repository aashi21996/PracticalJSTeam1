//map() executes a provided callback function once for every element in an array and returns a new array populated with the results.

/*syntex: const newArray = array.map((element, index, array) => {
           // Return transformed element
           });   */

//
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);
console.log(numbers);
console.log(doubled);

//example 2 :Extracting properties from an array of objects
const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' }
];
const names = users.map(user => user.name);
console.log(names);

//filter() tests each element with a predicate callback function. Elements that return true (or a truthy value) are included in the output array.

const numbers1 = [1, 2, 3, 4, 5, 6];
const evens = numbers1.filter(num => num % 2 === 0);
console.log(evens);

//Example 2
const products = [
  { name: 'Laptop', price: 1000, inStock: true },
  { name: 'Phone', price: 500, inStock: false },
  { name: 'Tablet', price: 300, inStock: true }
];
const availableProducts = products.filter(item => item.inStock && item.price < 600);
console.log(availableProducts);

//The reduce() method in JavaScript executes a user-supplied "reducer" callback function on each element of an array, 
// passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.
const numbers2 = [5, 10, 15];
const sum = numbers2.reduce((acc, num1) => {
  return acc + num1;
}, 0);

console.log(sum);

//example 2
const scores = [45, 88, 92, 67, 75];
const maxScore = scores.reduce((max, current) => {
  return current > max ? current : max;
}, scores[0]);
console.log(maxScore); // 92

//example 3
const nestedArray = [[1, 2], [3, 4], [5, 6]];
const flatArray = nestedArray.reduce((acc, currentArray) => {
  return acc.concat(currentArray);
}, []); // Start value: ek khaali Array []
console.log(flatArray);
// Output: [1, 2, 3, 4, 5, 6]

//example 4
const students = [
  { name: 'Aman', status: 'Pass' },
  { name: 'Priya', status: 'Fail' },
  { name: 'Rohan', status: 'Pass' }
];
const passedStudents = students.reduce((acc, student) => {
  if (student.status === 'Pass') {
    acc.push(student.name);
  }
  return acc;
}, []); // Start value: ek khaali Array []
console.log(passedStudents);
// Output: ['Aman', 'Rohan']







/*reduce() me initial value (doosra parameter) jo doge, final result waisa hi banega:
Initial value 0 di --> Result Number banega.
Initial value "" di --> Result String banega.
Initial value {} di --> Result Object banega
Initial value [] di -->Result Array banega.*/