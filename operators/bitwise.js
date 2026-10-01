/*Bitwise AND (&)Compares each position in binary. If both bits are 1, the result is 1.JavaScript
//  5: 00000000000000000000000000000101
//  3: 00000000000000000000000000000011
// ------------------------------------
//     00000000000000000000000000000001 = 1 */

console.log(5 & 3); // 1

/* Bitwise OR (|)Returns 1 if either bit is 1.
//  5: 00000000000000000000000000000101
//  3: 00000000000000000000000000000011
// ------------------------------------
//     00000000000000000000000000000111 = 7 */

console.log(5 | 3); // 7

 /*Bitwise XOR (^)Returns 1 if the bits are different.
 //  5: 00000000000000000000000000000101
//  3: 00000000000000000000000000000011
// ------------------------------------
//     00000000000000000000000000000110 = 6 */

console.log(5 ^ 3); // 6

/* Bitwise NOT (~)Inverts every bit. Due to 32-bit two's complement notation, ~x evaluates to -(x + 1).*/
console.log(~5);  // -6
console.log(~-1); // 0

/* Bitwise Shift Operators (<<, >>, >>>)Left Shift (<<): Equivalent to multiplying by powers of 2 ($x \times 2^y$).Sign-preserving Right Shift (>>): 
Equivalent to integer division by powers of 2 ($x / 2^y$).Zero-fill Right Shift (>>>): Treats the left operand as an unsigned integer.*/
console.log(5 << 1);  // 10  (5 * 2)
console.log(10 >> 1); // 5   (10 / 2)
