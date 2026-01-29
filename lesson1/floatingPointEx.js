// Demonstrating Floating Point Arithmetics issues in JavaScript
// JavaScript uses the IEEE 754 standard for representing numbers, which can lead to precision errors with decimals.

let x = 0.4 - 0.3; // Expected: 0.1, Actual: 0.10000000000000003
let y = 0.5 - 0.4; // Expected: 0.1, Actual: 0.1

console.log(x);
console.log(y);

// Comparison fails because x is not exactly 0.1 due to binary floating-point representation limits.
console.log(x === y); // Output: false