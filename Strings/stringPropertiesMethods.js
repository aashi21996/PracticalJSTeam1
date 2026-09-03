//Accessing & Inspecting Characters

//charAt(index):Returns the character at the specified index.
let str = "javascript";
mid=str.charAt(4);
console.log(mid);

//charCodeAt(index):Returns the UTF-16 code (integer) of the character at the given index.
let str1 = "javascript";
mid1=str1.charCodeAt(4);
console.log(mid1);

//Case Conversion

//toUpperCase():Converts all characters to uppercase.
let str2 = "javascript";
mid2=str2.toUpperCase();
console.log(mid2);

//toLowerCase():Converts all characters to lowercase.
let str3 = "JAVASCRIPT";
mid3=str3.toLowerCase();
console.log(mid3);

//Searching & Locating Substrings

//indexOf(searchValue, start):Returns the index of the first occurrence of a substring. Returns -1 if not found.
let str4 = "hi i am learning javascript"
mid4=str4.indexOf("javascript");
console.log(mid4);
mid5=str4.indexOf("aashi");
console.log(mid5);

//lastIndexOf(searchValue, start):Returns the index of the last occurrence of a substring. Searches backward.
let str6 = "hi javascript i am learning javascript"
mid6=str6.lastIndexOf("javascript");
console.log(mid6);

//Extracting String Sections
//slice(startIndex, endIndex):Extracts a section and returns it as a new string. Accepts negative indices (counts backward from the end).

let phrase = "JavaScript";
// Index:     0123456789
mid7=phrase.slice(0, 4);   // "Java" (index 0 up to, but not including, 4)
mid8=phrase.slice(-6);     // "Script" (starts 6th character from the end)
console.log(mid7,mid8);

//substring(startIndex, endIndex):Similar to slice(), but negative values are treated as 0. If startIndex is greater than endIndex, it swaps the two arguments.
let phrase1 = "JavaScript";
// Index:     0123456789
mid9=phrase1.substring(0, 4); // "Java"
mid10=phrase1.substring(4, 0); // "Java" (swaps arguments automatically)
console.log(mid10,mid9);

//split(separator, limit):Splits a string into an array of substrings based on a separator.
let csv = "apple,banana,orange";
mid11=csv.split(","); 
console.log(mid11);

let word = "Code";
mid12=word.split(""); 
console.log(mid12);

//Trimming Whitespace
//trim():Removes whitespace from both ends of the string.
let head = "   Hello World   ";
mid13 =head.trim(); // "Hello World"
console.log(mid13);

//trimStart() (or trimLeft()):Removes whitespace from the beginning (left side) only.
let head1= "   Hello World   7";
mid14 =head1.trimStart(); // "Hello World"
console.log(mid14);

//trimEnd() (or trimRight()):Removes whitespace from the end (right side) only.
let head2= "2   Hello World   ";
mid15 =head2.trimEnd(); // "Hello World"
console.log(mid15);