// Demonstrating Pass By Value (Primitive Types)
let x = 1;
let y = 2;

let z = x + y;
console.log(z); // Output: 3 


// Copying value of x to a
let a = x;
a = 5; // Changing 'a' does NOT affect 'x' because numbers are primitives (copied by value)

let b = a + x; // a is 5, x is still 1. So 5 + 1 = 6.
console.log(b); // Output: 6 