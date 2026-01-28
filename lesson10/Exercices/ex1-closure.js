// Closure exercise
// Your task is to write the closure implementation, 
// which allows the following code to execute and output correct
/*** START YOUR CODE HERE */

// The 'multiplier' function is a higher-order function (a function that returns another function).
// It takes one argument 'param1' and returns a new function that takes 'param2'.
// The inner function has access to 'param1' due to closure, allowing it to multiply 'param2' by 'param1'.
const multiplier = (param1) => (param2) => param1 * param2;

/* 
// Start of commented out code: Alternative implementation explicitely showing the closure structure
function multiplier(param1){
    return function(param2){
        return param1 * param2;
    };
}
// End of commented out code
*/

/*** END YOUR CODE HERE */

// Create specific multiplier functions using the generic 'multiplier' function.
// 'multiplier2' effectively remembers that param1 was 2.
const multiplier2 = multiplier(2);
// 'multiplier6' remembers that param1 was 6.
const multiplier6 = multiplier(6);
// 'multiplier15' remembers that param1 was 15.
const multiplier15 = multiplier(15);

// Test 'multiplier2' with various inputs.
// It multiplies the input by 2.
const a = multiplier2(2);  // 2 * 2 = 4
const b = multiplier2(7);  // 2 * 7 = 14
const c = multiplier2(32); // 2 * 32 = 64

// Assertions to verify the results for multiplier2. 
// If the condition (e.g., a == 4) is false, an error message is displayed.
console.assert(a == 4, "multiplier2(2) is incorrect")
console.assert(b == 14, "multiplier2(7) is incorrect")
console.assert(c == 64, "multiplier2(32) is incorrect")

// Test 'multiplier6' with various inputs.
// It multiplies the input by 6.
const d = multiplier6(2);  // 6 * 2 = 12
const e = multiplier6(7);  // 6 * 7 = 42
const f = multiplier6(32); // 6 * 32 = 192

// Assertions to verify the results for multiplier6.
console.assert(d == 12, "multiplier6(2) is incorrect")
console.assert(e == 42, "multiplier6(7) is incorrect")
console.assert(f == 192, "multiplier6(32) is incorrect")

// Test 'multiplier15' with various inputs.
// It multiplies the input by 15.
const x = multiplier15(2);  // 15 * 2 = 30
const y = multiplier15(7);  // 15 * 7 = 105
const z = multiplier15(32); // 15 * 32 = 480

// Assertions to verify the results for multiplier15.
console.assert(x == 30, "multiplier15(2) is incorrect")
console.assert(y == 105, "multiplier15(7) is incorrect")
console.assert(z == 480, "multiplier15(32) is incorrect")

// If all assertions pass (no errors), this success message is logged.
console.log("¡Si ves este mensaje, todas las pruebas pasaron con éxito! 🎉");