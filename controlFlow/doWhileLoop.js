//A do...while loop in JavaScript executes a block of code at least once before checking if the condition is true. If the condition evaluates to true, the loop repeats.
//You can alter the standard execution of a do...while loop using built-in keywords.
//break: Exits the loop immediately, skipping any remaining iterations and condition checks.
//continue: Skips the rest of the current iteration's code and jumps straight to the while condition check.

let x=10
do{
    console.log("i am here");
    x++
}
while(x<=15);

// do whil loop with if statement
let i = 0;
do {
  i++;
   if (i === 3) {
    continue; // Skip printing 3
  }
  if (i === 6) {
    break; // Stop the loop completely at 6
  }
  console.log(i); // Prints: 1, 2, 4, 5
} while (i < 10);