//The JavaScript for...of loop iterates over iterable objects—such as Arrays, Strings, Maps, Sets, and NodeLists. Unlike for...in, which extracts keys/indexes, for...of directly extracts the actual values.
//basic syntex:
/*for (const value of iterable) {
   Code to execute for each value
}*/

//bank
const bank= ["emp","empid","loan"];
for(const key of bank)
{
console.log(key);
}

//
const trafficColor =["red", "yellow","green"];
for (const [index,key] of trafficColor.entries())
{
    console.log(index ,key);
}

//Strings are iterable in JavaScript. A for...of loop steps through each character one by one (including spaces and symbols).
const x="hi its me";
for(const key of x)
{
    console.log(key);
}

//Sets store unique values. for...of yields each value in insertion order.
const y= new Set([10,20,60,20,30,60]);
for(const key of y)
{
    console.log(key);
}

//Maps store key-value pairs. for...of yields each entry as a two-element array [key, value]
const user = new Map([
  ['alice', 'Admin'],
  ['bob', 'Editor']
]);

for (const [key, role] of user) 
    {
  console.log(user , role);
    }

    //query