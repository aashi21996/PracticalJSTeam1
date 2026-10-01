//if else statement:

let color='red';
if (color=='organge')
{
    console.log(color +"let's dance");
}
else if (color== 'pink')
{
    console.log(color + "i am here");

}
else {
    console.log("no color");
}


//Switch statement

let color1="red";
switch (color1){
case "yellow":
console.log("yes");
break;
case "pink":
console.log("No");
case "red":
console.log("may be");
case "orange":
console.log("absolutely");
break;
default:
    console.log("han ");
}

//for loop
let i=5;
let a=0;
for(i=0;i<=5;i++)
{
    console.log ("a",a);
    ++a;
}

//while loop
let a=1;
while(a<=4)
{
    console.log(a);
    a++
}

//dowhile loop
let w=10
do{
    --w
    console.log(w);
}
while(w>=5);

//for in loop

const traffic={
    go:"green",
    waits:"yellow",
    stops:"red"
};
for(const key in traffic)
{
    console.log(key,traffic[key]);
}

//
const fruits=[1,2,3];
for(const key in fruits)
{
    console.log(key,fruits[key]);
}

//for of loop
const stud=["sup","yu" ,"rf"];
for(const [index,key] of stud.entries())
{
    console.log(index,key);
}

//
const f="no yes do";
for(const key of f)
{
    console.log(key);
}

//function decleration

function jayash(age)
{
    console.log("he is"+age);
}
jayash(4);

//
let operator;
function yumiko(a,b)
{
    operator=a+b;
    //return operator;
}
yumiko(4,5);
console.log(operator);

//
let z3;
const cincin = function aashi(z1,z2)
{
    return z3= z1+z2;
}
cincin(2,3);
console.log(z3);

//
let q5;
const momo= (q1,q2) =>
{
    return q5=q1*q2
}
momo(2,'a');
console.log(q5);

//

function shaan()
{ let s1;
    let a1;
    let a2;
    return s1=a1*a2
}
let s2 =shaan(2,3);
console.log(s2);

// array

const array= ["s","u","b","h","i"];
const a1=[10,20,30,40];
console.log(array[2]);
console.log(array.length);
for(const key in array)         
{
    console.log(key,array[key]);
}
console.log(typeof array[2])
array.pop();
console.log(array);
array.push("no");
console.log(array);
array.unshift("ty");
console.log(array);
array.shift();
console.log(array);
array.splice(3,1,"jam");
console.log(array);
array.splice(2,1)
console.log(array);
const x=array.slice(1,3)
console.log(x);
const y= array.concat(x).concat(a1);
console.log(y);
for(const key in y)
{
    console.log(key,y[key]);
}

//
const arrayaashi=[10,20,30,30,70,90,80,90];
const max = Math.max(...arrayaashi);
const min = Math.min(...arrayaashi);
const unique=[...new Set (arrayaashi)];
const midnumber = Math.floor(arrayaashi.length)/2;
console.log("midnumber",midnumber);
console.log("mid",arrayaashi[4]);
console.log(max);
console.log(min);
console.log(unique);
const secmid = [...new Set(arrayaashi)].sort((a,b)=>a-b);
console.log("f",secmid);
console.log(arrayaashi[1]);
console.log(arrayaashi.length);
console.log(arrayaashi[6]);

//
let i;
let sum=0;

const shantanu =[2,3,4,5,6];
for(i=0;i<shantanu.length;i++)
{
     sum=shantanu[i]+sum;
     
}
console.log(sum);

//
let i;
let sum=0;
let avg;

const shantanu =[2,3,4,5,6];
for(i=0;i<shantanu.length;i++)
{
     sum=shantanu[i]+sum;
     avg =sum/shantanu.length;
}
console.log(avg);

//prime no.
let sum;
for(let i=1;i<=100;i++)
{
    sum=i%2;
    if(sum!==0)
    {
      console.log(i);
    }
    
}

//
const array1=[20,30,40,90,80,50];
let max= array1[0]
for(let i=1;i<array1.length;i++)
{
    if(max<array1[i])
    {
        max=array1[i]
    }
}
    console.log(max);

    //
    const array2= [140,60,80,190,110];
    let min=array2[0];
for(let i=1;i<array2.length;i++)
{
    if(min>array2[i])
        min=array2[i]
}
    console.log(min);

    //duplicate in array
    const array6= [20,20,80,50,40,70,20];
    const empty =[];
    let a=array6[0];
    for(let i=1;i<array6.length;i++)
    {
        if(a==array6[i])
        {
            const b= array6[i].pop();
            empty.push(b);
        }
    }
    console.log (empty);

    //
    //const array7 =[20,10,50,30,180,120];
    let array7 = [5, 2, 8, 1, 4];
    for(let i=0;i<array7.length;i++)
    {
        for(let j=0;j<array7.length-1;j++)
    {
        if(array7[j]>array7[j+1])
        {
         let temp =array7[j];
         array7[j]=array7[j+1];
         array7[j+1]=temp;
    }
}
    }
    console.log(array7);

    //

    const arrayq =[10,20,50,10,30,20.];
    for(let i=0;i<arrayq.length;i++)
    {
console.log("index" , i ,":",arrayq[i]);
    }

    //locale compare

    let s="apple".localeCompare("anana");
    console.log(s);

    //
    console.log(Number("77"));
    console.log(Number("4.2p"));
    console.log(Number(""));
    console.log(Number("   100          "));


    console.log(parseInt("42p9.9"));
        console.log(parseFloat("42p.9"));
            console.log(parseInt("a42.9"));

//
console.log("aaple,mango,banana".split(","));
console.log([..."hello"]); //spread

//
const jay= "ram,shyam,rat,mango,mango,ram";
console.log(jay.replace("ram","sita"));
console.log(jay.replaceAll("mango","cherry"));
console.log(jay.replace(/ram/g ,"rrat"));
console.log(jay.replace(/Ram/i,"uiui"));

//
let username = "aashi";
let lastname = "kankane";
let fullname=`${username} ${lastname}`;
console.log(fullname);

//
let aashi = "ram";
let kankane ="jump";
console.log(aashi.concat( " " + kankane));

//
const yes = "              ram           ";
console.log(yes.trim());
console.log(yes.trimStart());
console.log(yes.trimEnd());

const no = "aaZZ";
console.log(no.padStart(5,"0"));
console.log(no.padEnd(5,"0"));
console.log(no.repeat(5));
console.log(no.toUpperCase());
console.log(no.toLowerCase());
console.log(no.slice(0,2));
console.log(no.substring(0,3));
console.log(no.split(""));
//
let str = "javascript";
let mid=str.charAt(4);
console.log(mid);

//
let str1 = "javascript";
let mid1=str1.charCodeAt(4);
console.log(mid1);

//
const car={
    brand: "toyota",
    speed:120,
    road()
    {
        console.log(`${this.brand} car is running of ${this.speed}`);
    }

}
console.log(car.brand);
car.road();

//
class student{
    constructor(name,age)
    {
        this.name =name;
        this.age=age;
    }
    study()
    {
        console.log(`${this.name} of age ${this.age} studing`);
    }
}
const yes=new student("ram",24);
yes.study();

//
const car ={
     brand1:"honey",
     size:88,
     "sunjeev a":120,
      road()
    {
        console.log(`${this.brand1} ${this.size}`);
    }
};
console.log(car.brand1);
car.road();
car.brand1="sunnney";
console.log(car);
delete car.size;
console.log(car);
car.sum="ram";
console.log(car);
console.log(car['sunjeev a']);

const person1 = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
};
// Add a Method
person1.name = function() {
  return this.firstName + " " + this.lastName;
};
console.log("My father is " + person1.name()); 