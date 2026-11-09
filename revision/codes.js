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