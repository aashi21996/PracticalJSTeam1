const fruits = ["apple","banana","grapes"];
console.log(fruits[1]);

const veg =["onion" , "tomato","gar;ic", "potato"];
console.log(veg.length);

const mixdata =[20,30,"string","data", true];
console.log(typeof mixdata[3]);

//push() & pop() — Add/Remove from End
const number = [20,30,40,60];
number.push(80);
console.log(number);
number.pop();
console.log(number);

// unshift() & shift() — Add/Remove from Start
const design = [20,30,40,60];
design.unshift(90);
console.log(design);
design.shift();
console.log(design);

//splice() — Add, Remove, or Replace at Any Position
const house = ["tent","hut","igloo"];
house.splice(2,0,"ram");
console.log(house);
house.splice(3,1);
console.log(house);

//slice(startIndex, endIndex) — endIndex is non-inclusive.
const body=["head","eyes","hand","finger"];
const subset = body.slice(1,3);
console.log(subset);

// Merge arrays
const arr1 = [1, 2];
const arr2 = [3, 4];
const merged = arr1.concat(arr2); // [1, 2, 3, 4]
console.log(merged);

//find max and min value
const arraym = [3,99,89,66,99,45,3];
const max= Math.max(...arraym);
console.log(max);
const min = Math.min(...arraym);
console.log(min);

//find unique number in array
const arrayuni =[11,12,23,11,23,66,44,44,44];
const unique =[...new Set(arrayuni)];
console.log(unique);

//find second Max & second Min value in array
const arraysec =[77,88,12,56,44,33,3,89];
const arraysecy = [...new Set(arraysec)].sort((a, b) => a - b); //Remove duplicates and sort ascending
const secondMin = arraysecy[1];   
console.log (secondMin);
const secondMax = arraysecy [arraysecy.length-2];
console.log(secondMax);

//find middle number
const arrayMid =[22,12,33,66,78,89,56,99,66];
const midIndex = Math.floor(arrayMid.length / 2);
console.log(midIndex);
console.log(arrayMid[4]);

//find duplicate (query)
const numbers = [1, 2, 3, 2, 4, 1];
const seen = [];
const duplicates = [];
for (let i = 0; i < numbers.length; i++) {
  const current = numbers[i];
if (seen.includes(current)) {
    duplicates.push(current);
  } else {
    seen.push(current);
  }
}


// user input
const prompt = require('prompt-sync')(); 
const arr=[];
for (i=0; i<3;i++)
{
let input = prompt(`enter ${i+1} input`);
arr.push(Number (input));
}
console.log("final arr" ,arr);

//find max and min value in array using for loop
const numberss = [23, 5, 87, 12, 99, -4, 42];
if (numberss.length === 0) {
  console.log("Array is empty");
} else {
  let min = numberss[0];
  let max = numberss[0];

  for (let i = 1; i < numberss.length; i++) {
    if (numberss[i] > max) {
      max = numberss[i];
    }
    if (numberss[i] < min) {
      min = numberss[i];
    }
  }
  console.log("Min value:", min); // -4
  console.log("Max value:", max); // 99
}