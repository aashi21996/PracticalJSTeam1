// for generating current date 

const today = new Date();
console.log(today);  // o/p- 2026-08-18T18:26:46.464Z

//-------------------------------------------------------------------------------
//for specific date

const now = new Date("2026-09-11");
console.log(now); // o/p- 2026-09-11T00:00:00.000Z


//-----------------------------------------------------------------------------


const tomorrow = new Date(" ");
console.log(tomorrow); //o/p- Invalid Date


//----------------------------------------------------------------------------
//query: output?

const future = new Date(0); //passing number
console.log(future); //o/p- 1970-01-01T00:00:00.000Z



const futures = new Date("0"); //passing string
console.log(futures); //o/p- 1999-12-31T18:30:00.000Z


