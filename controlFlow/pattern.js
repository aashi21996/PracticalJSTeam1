//Left-Aligned Right Triangle

let row=5;
for(i=1; i<=row;i++)
{
    let pattern = "";
for(j=1;j<=i;j++){
    pattern= pattern + "*"
}
console.log(pattern);
}

//Right-Aligned Right Triangle

let rows=5;
for(i=1; i<=rows;i++)
{
    let pattern = "";
for(j=1;j<=rows-i;j++){
    pattern= pattern + " ";
}
for(k=1;k<=i;k++){
    pattern=pattern + "*"
}
console.log(pattern);
}

//Pyramid Triangle (Centered)
 
let n=5
for(i=1;i<=n;i++)
{
    let patterns="";
    for (j=1;j<=n-i;j++)
    {
        patterns=patterns+" ";
    }
    for(k=1;k<=(2*i-1);k++){
        patterns=patterns+"*"
    }
    console.log(patterns);
}

// dimond pattern

let ns=5
for(i=1;i<=ns;i++)
{
    let patterns="";
    for (j=1;j<=ns-i;j++)
    {
        patterns=patterns+" ";
    }
    for(k=1;k<=(2*i-1);k++){
        patterns=patterns+"*"
    }
    console.log(patterns);
}
for(i=ns-1;i>=1;i--)
{
    pattern1="";
    for(j=1;j<=ns-i;j++)
    {
        pattern1=pattern1+" ";

    }
    for(k=1;k<=2*i-1;k++){
        pattern1=pattern1+"*";
    }console.log(pattern1);
}

//Each row counts up from 1 to the current row number.

let roww = 5;

for (let i = 1; i <= roww; i++) {
    let pattern = "";
    for (let j = 1; j <= i; j++) {
        pattern = pattern+ j + " ";
    }
    console.log(pattern);
}

//Each row repeats its own row number

let r1 = 5;

for (let i = 1; i <= r1; i++) {
    let pattern = "";
    for (let j = 1; j <= i; j++) {
        pattern = pattern+ i + " ";
    }
    console.log(pattern);
}

//

let r2 = 5;
let count = 1;

for (let i = 1; i <= r2; i++) {
    let pattern = "";
    for (let j = 1; j <= i; j++) {
        pattern=pattern+count + " ";
        count++; // Increment count for every printed number
    }
    console.log(pattern);
}