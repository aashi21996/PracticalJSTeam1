//Generators are special functions in JavaScript that can be paused and resumed,
//  allowing you to yield multiple values over time rather than returning a single value.
/* Declaration: Defined using function*.
Execution: Calling a generator function returns a Generator Object (an iterator) without executing the function body immediately.
yield Keyword: Pauses function execution and sends a value back to the caller.
.next() Method: Resumes execution until the next yield or return. It returns an object with { value: any, done: boolean }.*/

// example 1
function* numberGenerator() {
  yield 1;
  yield 2;
  yield 3;
}
const gen = numberGenerator(); // Returns generator object
console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: false }
console.log(gen.next()); // { value: undefined, done: true }

//example 2 : Iterating with for...of
function* colorGenerator() {
  yield "red";
  yield "green";
  yield "blue";
}

for (const color of colorGenerator()) {
  console.log(color); 
}

//example 3
function* infiniteIDs() {
  let id = 1;
  while (true) {
    yield `ID-${id++}`;
  }
}
const idGen = infiniteIDs();
console.log(idGen.next().value); // "ID-1"
console.log(idGen.next().value); // "ID-2"

//example 4
function* conversation() {
  const name = yield "What is your name?";
  yield `Hello, ${name}!`;
}
const chat = conversation();
console.log(chat.next().value);       // "What is your name?"
console.log(chat.next("Alice").value); // "Hello, Alice!"

// example 5
function* subTask() {
  yield "B";
  yield "C";
}
function* mainTask() {
  yield "A";
  yield* subTask(); // Delegates to subTask
  yield "D";
}
console.log([...mainTask()]); // ['A', 'B', 'C', 'D']

//example 6 : next six month date generator

// Generator Function
function* getNextSixMonths() {
  let date = new Date(); // Aaj ki date

  for (let i = 1; i <= 6; i++) {
    date.setMonth(date.getMonth() + 1); // 1 mahina aage badhao
    yield date.toDateString();          // Date wapas karo aur pause ho jao
  }
}
// Code ko run karna
const dates = getNextSixMonths();
for (let nextDate of dates) {
  console.log(nextDate);
}

//example 7 : next six years date generator
function* getNextSixYears() {
  let date1 = new Date(); // Aaj ki date

  for (let i = 1; i <= 6; i++) {
    date1.setFullYear(date1.getFullYear() + 1); // 1 year aage badhao
    yield date1.toDateString();          // Date wapas karo aur pause ho jao
  }
}
// Code ko run karna
const dates1 = getNextSixYears();
for (let nextDate of dates1) {
  console.log(nextDate);
}
