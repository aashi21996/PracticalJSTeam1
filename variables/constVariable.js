//trying const variable
const a=10;
console.log("print value of a=",a);   // o/p- print value of a= 10


//------------------------------------------------------------------------
//let aur var ko bina value ke declare kiya ja sakta hai. 
// JavaScript inko automatically default value undefined de deti hai.
//but const ko bina value ke define nai kar sakte h

/*const a;
console.log("print value of a=",a);*/  //o/p- SyntaxError


//------------------------------------------------------------------------------------------------
//checking block usage
{
const b=80;
console.log("print value of b=",b);
}   //o/p- print value of b= 80



//--------------------------------------------------------------------------------
// checking with function

function subh()
{
    const e=90;
    const f=10;
    const g=e+f;
    const h=g;
    console.log("print value of h=", h);
        
    }
    subh();     //o/p- print value of h= 100



//-----------------------------------------------------------------------------
// scope checking


/*function text()
{
    {
        const ear=900;
        const far=10;
        const great=ear+far;
        const hut=great;
    console.log("print value of hut=", hut);
    }
    {
        console.log("print value of far=",far);
    }
    }
    text();*/     //o/p- ReferenceError: far is not defined





//--------------------------------------------------------------------------------------
// const ka reassignment

   /* {const ear=900;
    const far=10;
    const great=ear+far;
    const hut=great;
    console.log("print value of hut=", hut);
    
    
          far=20;
        console.log('print value of far=',far);
    } */  // o/p- TypeError: Assignment to constant variable.




//--------------------------------------------------------------------------------------
// const ka redeclaration

    /*{const ear=900;
    const far=10;
    const great=ear+far;
    const hut=great;
    console.log("print value of hut=", hut);
    
    
          const far=20;
        console.log('print value of far=',far);
    } */  // o/p- SyntaxError: Identifier 'far' has already been declared
    




   
    