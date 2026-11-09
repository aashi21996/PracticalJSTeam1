const numbers = [10, 15, 20, 25, 30];
const data =numbers.filter((num)=>num=num>20);
console.log(data);

const mid=data.reduce((acc,num)=>num=acc+num,0)
console.log(mid);
const mid2= numbers.toString();
const mid4= mid2.includes(25);
console.log(mid4);




const user = {
    name: "John",
    age: 30,
    role: "QA"
};

console.log(user.name);
user.role="Automation QA";
console.log(user.role);
user.experience= 5;
console.log(user.experience);
console.log(user);
for(const key in user)
{
    console.log(key);
}



var x=[13, 62, 6, 99, 9];
for(let i=0;i<=x.length;i++)
{
    for(let j=0;j<=x.length-1;j++)
    {
        if(x[j]<x[j+1])
        {
            let temp =x[j];
            x[j]=x[j+1];
            x[j+1]=temp;

        }
    }
}
console.log(x);



let x=[13,62];
var temp=[];

for(let i=0;i<x.length;i++)
{
    temp =x[i];
     x[i]=x[i+1];
     x[i+1]=temp;
}
console.log(x);