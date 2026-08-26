//The JavaScript for...in loop iterates over the enumerable property keys (names) of an object. Unlike a standard for loop or for...of, it works with keys/indexes rather than the actual values.
// basic syntex
/*for (const key in object) {
  // Code to execute for each key
}*/


//The most common use case for for...in is inspecting or traversing an object's keys and values.

const student = { 
    name: "aashi",
    rollnumber : 131300001,
    fathersname : "Akhilesh kankane"
                };
for (const key in student)
    {
        console.log(key, student[key]);
    }   
    
    // atm case
    const ATM = { names : "aashi",
                  password : 1234567890,
                  money : 500000

    }
    for (const key in ATM)
    {
        console.log(key,ATM[key]);
    }

    // If you need both the index and value, combine for...of with array.entries() and destructuring:
    const arreys = ["mango", "apple", "grapes"]
    for(const key in arreys)
    {
        console.log(key,arreys[key]);
    }

