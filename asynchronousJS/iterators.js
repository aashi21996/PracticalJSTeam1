//Real mai use - spread operator and for...of loop
/*Jab tumhare paas ek list (array) hoti hai, toh Iterator us list par ek-ek karke aage badhta hai.
.next() (Zaroori Method)
Ye Iterator ka sabse main method hai. Jab bhi aap .next() call karte ho, ye hamesha ek object return karta hai jisme 2 cheezein hoti hain:
value: Abhi ka data.
done: false (agar aage aur items hain) ya true (agar list khatam ho gayi).*/

const friends = ['Aman', 'Rohan', 'Priya'];
const iterator = friends[Symbol.iterator]();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

//
const colors = ['Red', 'Green'];
const iterator1 = colors[Symbol.iterator]();
console.log(iterator1.next()); // { value: 'Red', done: false }
console.log(iterator1.next()); // { value: 'Green', done: false }
console.log(iterator1.next()); // { value: undefined, done: true }

//
// 1. Ek unique Symbol banaya
const secretKey = Symbol();

const user = {
  name: "Rahul",
  age: 20
};
// 2. Symbol ko object ki key banaya
user[secretKey] = 998877; // Secret ID
// 3. Normal loops me Symbol chup jata hai (Overwrite hone se bachata hai)
console.log(Object.keys(user)); // Output: ['name', 'age']  (secretKey nahi dikhega!)
// 4. Sirf wahi access kar sakta hai jiske paas 'secretKey' Symbol hai
console.log(user[secretKey]);   // Output: 998877




