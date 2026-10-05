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

//
if (true) {
  var test = true; 
}
console.log(test)

if (true) {
  let test2 = true;
}
console.log(test2) 

//
const value = ""Ayushi"";

for (const i of value) {
    console.log(i);
} 

//
for (let i = 1; i <= 5; i++) {

    if (i === 3) {
        break;
    }

    if (i === 2) {
        continue;
    }

    console.log(i);
} 

// call back
function parent (name,callback)
{
    setTimeout( function child()
    {
        let data ={id:101,skill:"dancing"};
        console.log("rama");
    
        callback(data);

},4000);
}
function child (data){
    console.log(data,"rama2")
}
parent("joy",child);

// call back
function car(brand,callback)
{
    setTimeout (function(){
        let emp={id:101,address:"avasvisa"};
        callback(emp);
    },5000);
}
function info(emp){
console.log(emp);
}
car("toyota",info);


//promise

const result=new Promise((resolve,reject)=>{
    let marks= "Pass";
    setTimeout(()=>{
        if ("pass")
        resolve("selected");
    else
        reject("fail");
    },2000)
    
})
result
.then((message)=>
{
    console.log(message);

})
.catch((error)=>
{
    console.log(message);
})
.finally(() =>
{
    console.log("done");
});
///

const multiplier=(a,b,c)=>{
    return a*b*c;
}

let outcome=multiplier(2,3,4);
console.log(outcome);

//async await

function makingcoffee (){
    return new Promise ((resolve,reject) =>{
        let c="true";
      setTimeout(()=>{  if(true)
            resolve("done");
        else(false)
        reject("error");
      },2000);
    }
    );

}
async function emp ()
{
    const user =await makingcoffee();
    console.log("hey");
    
}
emp();



//for loop
for (let i=0; i<2;i++)
                 {
				 console.log(i);
				 }	  

//for..in loop

const object = {name: "aashi",
                          age: 30,
						  };
		for(const key in object)
        {console.log(key, object[key]);
		}

//for of 

const array =[1,2,3,4];
         for (const value of array)
		 {
		 console.log(value);
		 }


         //for each 
         const fruits = ["apple" ,"banana","orange"];
         fruits.forEach((value,index) => {
          console.log(index,value);
          })		


          //
          const value = "Ayushi";

for (const i of value) {
    console.log(i);
} 

//
for (let i = 1; i <= 5; i++) {

    if (i === 3) {
        break;
    }

    if (i === 2) {
        continue;
    }

    console.log(i);
} 

//
if ("0") {
  console.log("Yes");
} else {
  console.log("No");
}

//

if ("false") {
  console.log("Yes1");
} else {
  console.log("No");
}
//

const multi =(a,b,c)=>{
      return  a*b*c;
	  }

	  let result = multi(2,3,4);
      console.log(result);

      //
      const array =[1,2,3,4];
	 console.log(array);
     	
	 const array =[1,2,3,4];
	 array.push(5);
	console.log(array);

	 const array =[1,2,3,4];
	 array.pop();
	 console.log(array);

	 const array =[1,2,3,4];
	 array.unshift(9);
	 console.log(array);

	 
	 
	 const array =[1,2,3,4];
	 array.shift();
	 console.log(array);

	 const array =[1,2,3,4];
	 array.splice(3,0,8);
    console.log(array);

	 
	 const array =[1,2,3,4];
	 array.splice(2,1);
    console.log(array);

const array =[1,2,3,4];
	 const array2=array.slice(1,3);
    console.log(array2);

    //
    const string="   str     ";
    const str1=string.trim();	
    console.log(str1);		
	
    const string="   str     ";
        console.log(string.trim());	
	
	

const string="   str     ";
        console.log(string.trim());	
	    console.log(string.trimStart());
		console.log(string.trimEnd());
	
	  const str="javaSTRING";
	    console.log(str.toUpperCase());
		console.log(str.toLowerCase());
	  
const str="9999";
		console.log(str.padStart(6,"k"));
		console.log(str.padEnd(6,"k"));


	  const double="hi";
	   console.log(double.repeat(4));

       const str = "JavaScript";
	   console.log(str.slice(0,4));
       console.log(str.charAt(4));
     console.log(str.charCodeAt(4));
     console.log(str.substring(3,7));

     const str ="dancing";
	   console.log(str.substring(4,6));

       const str = "JavaScript";
	   console.log(str.slice(0,4));
	  
       let str="i am learning javascript";
         let mid =str.indexOf("javascript");
         console.log(mid);


   // 9. .lastIndexof(searchvalue,start)
	
	      const str="i am javascript learning javascript";
          let mid =str.lastIndexOf("javascript");
          console.log(mid);

          //
          const str ="apple,mango,banana";
		 let mid = str.split(",");
		 console.log(mid);
         

         //
         const str ="apple,mango,banana";
		 let mid = str.split(",");
		 console.log(mid);

         const str1 = "hello";
        const str2 ="aashi";
        let str4 = str1.concat(str2);
        console.log(str4);

        //
        const str= "red , yellow, blue,red";
        console.log(str.replaceAll("red" , "fish"));	

        const str ="red yellow,orange,red,green";
		console.log(str.replace(/red/g,"yy"));

        const str ="Red yellow,orange,red,green";
		console.log(str.replace(/red/i,"yy"));


        const str= "hello world";
	const mid = str.split("").reverse().join();
	console.log(mid);


    const user={
           name: "Ram",
		   age: 30,
		   };
	console.log(user.name);
    user.location="mumbai";
	console.log(user.location);
	user.name="syam";
	console.log(user.name);
	delete user.age;
	console.log(user);

const str= "This is a JavaScript tyuiuyytgyuuiuiiii Review";
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

const array =["apple,oo"];
     const mid= array.toString(",");
	 console.log(mid);

     const colors = ["red", "green", "blue"];

console.log(colors.toString());


//
class aashi{
    constructor(name,age){
        console.log(name);
    }
}
const fan=new aashi("ram" ,30);



//
const word= "my uiujjjj name is yyyyyyyyyyyyyyyyyy aashi kankane";
const mid =word.split(' ');
const ss=mid.sort((a,b)=>a.length -b.length);
const jh=ss.join(' ');
console.log(jh);


const str = Math.floor(Math.random() * 10) + 1;
console.log(str);


const ff=Math.floor(Math.random()*100)+1;
console.log(ff);

let todayDate = new Date;
     console.log(todayDate);

     const mapping= [1,2,3,4];
      const mid = mapping.map(num=> num*2);
      console.log(mid);	  

		     const mapping= [1,2,3,4];
 	mapping.forEach(num=>{
        console.log(num*2);
    })

     let mid="apple".localeCompare("banana");	 
	console.log(mid);
	  
let x = [1, 2, 3];
let y = x;
y.push(4);
console.log(x);


//"use strict";
     username ="ram";
	 console.log(username);
	 


     for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}

console.log([]==![]) ;

console.log(typeof NaN);



//for loop
for(let i=0;i<=5;i++)
{
  console.log(i);
}

//for ..in loop

const user= {
  name: "aashi",
  age: 30,
};
for(const key in user)
{
    console.log(key);
  //console.log(key ,user[key]);
};


// for..of loop

const aashi=[1,2,3,4];
for(const [index,value] of aashi.entries())
{
    console.log(value);
  //console.log(index, value);
}

const fruits=["apple","banana"];
fruits.forEach((value,index)=>{
console.log(index,value);});


// arrow function

const aashi=(a,b)=>{
    return a+b;
}
console.log(aashi(2,3));


//string method

const aashi ="         trim           ";
const aashi1=aashi.trim()
console.log(aashi1);
console.log(aashi.trimStart());
console.log(aashi.trimEnd());

const aashi="5";
console.log(aashi.padStart(6,0));
console.log(aashi.padEnd(6,0));

const name1="javaScript";
console.log(name1.toUpperCase());
console.log(name1.toLowerCase());
console.log(name1.substring(4,9));
console.log(name1.slice(0,4));
console.log(name1.charAt(5));
console.log(name1.charCodeAt(5));

const users= "i love javascript and javascript";
const error ="error";
console.log(users.indexOf("javascript"));
console.log(users.lastIndexOf("javascript"));
console.log(users.replaceAll("javascript","erer"));
console.log(users.replace("javascript","er1"));
console.log(users.replace(/JAVASCript/i,"rt"));
console.log(users.replace(/javascript/g,"rfrf"));
console.log(users.concat(error));
console.log(error.repeat(7));


const y ="ww ,rt,ui,oi";
console.log(y.split(","));


// string reverse

const string= "hello world";
const mid =string.split('').reverse().join();
console.log(mid);


function parent(responsed,callback){
    setTimeout(function(){
        console.log("i am responsible" ,responsed);
            jayash();

    },5000);
}
function jayash(){
    console.log("i am adult",);
}
parent ("yes",jayash);


const phone= new Promise ((resove,reject)=>{
    const marks=90;
    setTimeout(()=>{
if(marks>90)
    resolve("phone is here");
else
    reject("no phone");
    },2000);
});
phone
.then((message)=>{
    console.log(message);
})
.catch((error)=>{
    console.error(error);
});


//

function phone(){
    return new Promise((resove,reject)=>{
        let c=5;
        setTimeout(()=>{
            if (c==5)
            resove("correct");
            else
                reject("not correct");

        },2000);
    });
};

async function father(){
    try{
    console.log("bye");
    const xyz= await phone();
    console.log(xyz);
    }
    catch(error){
        console.error(error);
    }
    finally{
        console.log("done hai");
    }
};
father();

const str5 = "This is a JavaScript Review";
const mid = str5.split(' ');
    var max =""

for(const value of mid)
{
    if (max.length<value.length)
    max =value;
}
console.log(max);



const str= "This is a JavaScript tyuiuyytgyuuiuiiii Review";
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

//Write a program to sort string  based on the length of the words
const word= "my name isa aashi kankane";
const mid = word.split(' ');
const yy= mid.sort((a,b)=>a.length-b.length);
const yi = yy.join();
console.log(yi);


//generate random no. 

const num= Math.floor(Math.random() *1000)+1;
console.log(num);

const today=new Date;
console.log(today);

//map

const arry=[1,2,3,4,5,6,7];
const mid= arry.map(num => num*2);
console.log(mid);

//filter

const array=[1,2,3,4,5,6];
const mid= array.filter(num => num%2==0);
console.log(mid);

//reduce

const array=[1,2,3,4,5,6];
const mid = array.reduce((acc,num)=>acc+num,0);
console.log(mid);

//foreach loop

const array=[1,2,3,4,5];
array.forEach((num)=>{
    console.log(num*2);
});


let array =[1,2,3,2,2,1,1,5,5,2,1,3,1];
const mid=[...new Set (array)];
console.log(mid);

let array =[1,2,3,2,2,1,1,5,5,2,1,3,1];
let unique=[];
for(let i=0;i<array.length;i++)
{
    if(!unique.includes (array[i]))
        unique.push (array[i]);
}
console.log(unique);


const sentence = "JavaScript is awesome";
console.log(sentence.includes("JavaScript"));


//
const word="hello@world";
const mid =word.replace(/[^a-zA-Z ]/g," ");
console.log(mid);


//avg of array elements
let array=[1,2,3,4];
let sum=0;
for (let i=0;i<array.length;i++)
{
    sum=sum+array[i];
}
let avg =sum/array.length;
console.log(sum);
console.log(avg);


//max 

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


    //min

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

//sorting of array
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





//call back

function parent (name ,aashi){
    setTimeout(()=>{
        console.log("hi",name);
        jayash();

    },2000);

}
function jayash(){
    console.log("ram");
};
parent("abc",jayash)
console.log("done");


//promise
const getphone= new Promise((resolve,reject)=>{
    let marks=98;
    setTimeout(()=>{
        if(marks>90)
            resolve("phone");
        else
            reject("nophone");

    },2000);
});

getphone
.then((message)=>{
    console.log(message);
})
.catch((error)=>{
    console.log(error);
});



//
function data(){
    return new Promise((resolve,reject)=>{
        let c=5;
setTimeout(()=>{
    if(c==5)
    resolve("done");
    else
        reject("error");

    },2000);
});
}

async function show(){
    try{
        const qw =await data();
        console.log(qw);
    }catch(error){
        console.log(error);
    }
    finally{
        console.log("fun");
    };
};

show();






//map 

const array=[1,2,3,4,5];
const map2 = array.map((num)=> num*2);
console.log(map2);


const array=[1,2,3,4,5];
const filter2=array.filter(num => num%2==0);
console.log(filter2);

const array=[1,2,3,4,5];
const reduce2 = array.reduce((acc,num)=> acc+num,0);
console.log(reduce2);

const array=[1,2,3,4,5];
array.forEach((value,index)=>{
    console.log(index,value);
});


const arr1= ["Ayushi","Swati","Akshay"];
const arr2= [...arr1];
console.log(arr2);
console.log(arr1==arr2);




//reverse of array
const array=[1,2,3,4,5];
const mid = array.reverse();
console.log(mid);

//reverse of array
const array=[1,2,3,4,5];
let empty=[];

for (let i = array.length - 1; i >= 0; i--) {
    empty.push(array[i]);

}
console.log(empty);

// print 10 to 1

for(let i=10;i>=1;i--){
    console.log(i);
}

//maximum no. in array

const array=[1,60,77,99999,100000,7864677,211100];
let max=array[0];
for(let i=0;i<array.length;i++)
    {
if(max<array[i])
    max=array[i];
}
console.log(max);


//minimum no. of array

const array=[10,2,3,40,70,];
let min= array[0];
for(let i=0;i<array.length;i++)
{
    if(min>array[i])
        min=array[i];
}
console.log(min);


//sum of array

const array=[1,2,3,4,5]
let sum=0;
for(let i=0;i<array.length;i++)
{
    sum=sum+array[i];
}
console.log(sum);


//avg of array

const array=[1,2,3,4,5];
let sum=0;

for(let i=0;i<array.length;i++)
{
    sum=sum+array[i];
}
let avg=sum/array.length;
console.log(avg);

//sorting of array

let array=[1,7,9,3,8,1];
for(let i=0;i<array.length;i++)
{
    for(let j=0;j<array.length;j++)
    {
        if(array[j]>array[j+1])
        {
           let temp= array[j];
            array[j]=array[j+1];
            array[j+1]=temp;
        }
    }
}
console.log(array);


//duplicate in array

const array=[1,2,3,1,2,6,3,6,3,5,1,3,9];
const unique =[];
for(let i=0;i<array.length;i++)
{
    if(!unique.includes(array[i]))
    {
       unique.push(array[i]);
    }
}console.log(unique);


//array to string
const array=[1,2,3,4,5,6];
const mid=array.toString(array);
console.log(mid);

//reverse string
const ss="mindfire";
const mid = ss.split('').reverse().join("");
console.log(mid);


//longest word in string

const string="hi i amauhdkjahdkjsahdkjsakjaskj aashi kankane";
const mid=string.split(" ");
var xy="";
for(const value of mid)
{
if (value.length>xy.length)
    xy=value;
}

console.log(xy);

//sort string acording to length

const string="hi java i am learing javascrit do u know";
const mid= string.split(" ").sort((a,b)=> a.length-b.length).join(' ');
console.log(mid);


//pattern left alliened

let row=5;
for(let i=1;i<=row;i++)
{
    let pattern="";
    for (let j=1;j<=i;j++)
    {
        pattern =pattern +"*";

    }
    console.log(pattern);

}

//right alligned

let row=5;
for(let i=1;i<=row;i++)
    {
      let pattern="";
      for (let j=1;j<=row-i;j++)
      {
        pattern= pattern+" ";
      }
      for (let k=1;k<=i;k++)
      {
        pattern= pattern+"*";
      }
      console.log(pattern);
    }

let rows=5;
for(let i=1; i<=rows;i++)
{
    let pattern = "";
for(let j=1;j<=rows-i;j++){
    pattern= pattern + " ";
}
for(let k=1;k<=i;k++){
    pattern=pattern + "*"
}
console.log(pattern);
}


//
const result=(status)=>{
if(status=="passed"){
console.log("done")
}
}
result("passed1")