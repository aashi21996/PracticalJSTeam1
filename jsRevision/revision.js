// longest word in string

const str= "This is a JavaScript Review";
const mid= str.split(' ');
console.log(mid);     
var long =""
for(const value of mid)
{
    if (value.length >long.length)
    {
        long =value;
    }
}
console.log(long);


// reverse a word

const str1 = "aashi ";
const reversedStr = str1.split("").reverse().join("");
console.log(reversedStr); //Output : ihsaa

//another way: 

const str2 = "aashi ";
let reversedStr1 = "";
for (let i = str2.length - 1; i >= 0; i--) {
    reversedStr1 += str2[i];
}
console.log(reversedStr1); //Output : ihsaa


// reverse position of words

const name2 = "aashi kankane";
const reversedName = name2.split(" ").reverse().join(" ");
console.log(reversedName); // Output: "kankane aashi"


// reverse word nd position

const name4 = "aashi kankane";
const reversed = name4.split("").reverse().join("");
console.log(reversed); // Output: "enaknak ihsaa"

// same position nd reverse word

const name5 = "aashi kankane";
const reversedWords = name5
  .split(" ")                                    // ['aashi', 'kankane']
  .map(word => word.split("").reverse().join("")) // ['ihsaa', 'enaknak']
  .join(" ");                                    // "ihsaa enaknak"

console.log(reversedWords); // Output: "ihsaa enaknak"

//removing special letter

const word="hello@world";
const mid =word.replace(/[^a-zA-Z ]/g," ");
console.log(mid);

//sum and avg of array elements

let array=[1,2,3,4];
let sum=0;
for (let i=0;i<array.length;i++)
{
    sum=sum+array[i];
}
let avg =sum/array.length;
console.log(sum);
console.log(avg);

//max number of array

let array=[1,2,4,6,30,50,70,110,1000,3,4,5,7];
let max=array[0];
for(let i=0;i<array.length;i++)
{
    if(max<array[i])
    {
        max=array[i];
    }
}
    console.log(max);


 //min of array

let array=[1,2,4,6,30,50,70,110,1000,3,4,5,7];
let min=array[0];
for(let i=1;i<array.length;i++)
{
    if(min>array[i])
    {
        min=array[i];
    }
}
    console.log(min);
	
	
// sorting of array
	
let array=[1,2,3,9,8,];
for(let i=0;i<array.length;i++)
{
    for(let j=0;j<array.length-1;j++)
        {
if(array[j]>array[j+1]){
let temp =array[j];
array[j]=array[j+1];
array[j+1]=temp;
}
    }
}
console.log(array);

//palindrom 
let string ="madam";
let mid=string.split('').reverse();
let mid1=mid.join("");
console.log(mid1);