/* Examples from class 03.02.2026 */

// ARROW FUNCTIONS:
// Arrow functions provide a concise syntax for writing function expressions.
// They are anonymous and change the way 'this' binds in functions.
// If there is only one expression, the return keyword and braces {} are optional (implicit return).
const add = (a, b) => a + b;

// Calling add() with no arguments results in undefined + undefined which is NaN.
// typeof NaN is 'number', so this logs 'number'.
console.log(typeof (add())); 
function add2(a, b) {
	return a + b;
}
console.log(add(1, 2));
console.log(add2(1, 2));

// CLOSURES AND SCOPE:
// The function getId accesses 'SECRET' from its outer scope.
// This is a closure: the function "closes over" variables from its definition environment.
// However, relying on external mutable state (like 'SECRET' which is a 'let') makes the function Impure.
// Impure functions are harder to debug because their output depends on the state of the system, not just inputs.
// If SECRET changes, the function's output changes for the same input.
let SECRET = 42;
const getId = (a) => SECRET * a;
function getId2(a) {
	return SECRET * a;
}
console.log(getId(2));
SECRET = 5; // Changing external state affects the function output
console.log(getId2(2));

// SIDE EFFECTS:
// These functions modify 'id_count' which is outside their scope.
// This is a side effect. It makes the function unpredictable and harder to test.
// A pure function should only depend on its inputs and return a value without changing external state.
// Side effects include: modifying globals, console.log, DOM manipulation, HTTP requests.
let id_count = 0;
const getId3 = () => ++id_count;
function getId4() {
	return ++id_count;
}
console.log(getId3());
console.log(getId4());