// Filter with array methods:
// Filter even values from an array
// FILTER:
// Creates a NEW array with all elements that pass the test implemented by the provided function.
// It determines "keep it or toss it" for each element.
// It does NOT modify the original array.
array1 = [1, 10, 4, 7];

let result1 = array1.filter((x) => x % 2 == 0);
console.log(result1);

// Double the values in an array
// MAP:
// Creates a NEW array populated with the results of calling a provided function on every element.
// Use this when you want to transform every element 1-to-1.
// The length of the new array is always the same as the original.
let result2 = array1.map((x) => x * 2);
console.log(result2);

// Sum up all the values in an array
// REDUCE:
// Executes a "reducer" function on each element of the array, resulting in a single output value.
// It "boils down" the array to one value (sum, product, object, etc.).
// The accumulator 'a' keeps the running total, 'b' is the current element.
const initVal = 0;
let result3 = array1.reduce((a, b) => a + b, initVal);
console.log(result3);

// PRIMITIVE TYPES (Pass by Value):
// Primitives (number, string, boolean) are passed by value.
// Changing 'x' inside the function does NOT affect 'y' outside.
function doSomething(x) {
	x++;
	console.log(x);
}
let y = 5;
doSomething(y);
console.log(y);

// REFERENCE TYPES (Pass by Reference):
// Arrays and Objects are reference types.
// If you modify the array inside the function, the original array changes (Mutation).
// TO AVOID THIS (Immutability):
// We make a copy of the array using `.slice()` (or `[...numbers]`).
// Now modifying 'newArray' does not affect 'numberArray'.
function addSomethingToArray(numbers) {
	let newArray = numbers.slice(); // Create a shallow copy
	newArray.push(9); // Modify the copy
	return newArray;
}
let numberArray = [45, 77, 19];
console.table(numberArray);
let newArray = addSomethingToArray(numberArray);
console.table(numberArray); // Original remains unchanged
console.table(newArray);    // New array has the added element

// HIGHER-ORDER FUNCTIONS:
// A higher-order function is a function that takes another function as an argument 
// OR returns a function.
// This is a powerful concept in Functional Programming.
// Here, 'withLog' is a higher-order function.
// It takes a function 'fn' and returns a NEW function.
const withLog = (fn) => {
	// This returned function acts as a "wrapper" or "decorator".
	// It captures 'fn' via closure and remembers it.
	return (...args) => {
		// It adds behavior (logging) before running the original function.
		console.log(`Calling ${fn.name}`);
		// Then it executes the original function with the original arguments.
		return fn(...args);
	};
};

const add = (a, b) => a + b;
const minus = (a, b) => a - b;
console.log(add(5, 8));

// We create new versions of 'add' and 'minus' that have logging capabilities.
const addWithLogging = withLog(add);
const minusWithLogging = withLog(minus);

let returnValue = addWithLogging(3, 4);
console.log(returnValue);
console.log(minusWithLogging(10, 5));


// HIGHER-ORDER FUNCTIONS exercises:

// Create a function that gets a function as an input parameter 
// and then runs that function twice.

const twice = (x) => {
	x();
	x();
}

twice(() => console.log("Saluditos"));

//Also 
const Saluditos2 = () => console.log("Saluditos");
twice(Saluditos2);

// Create a function that gets an integer (factor) as an input parameter 
// and then returns a function that gets another integer (number) 
// and returns the multiplication of factor and number.
// This technique is called "Currying" or "Partial Application".

const integerFunc = (factor) => {
	// Returns a new function that "remembers" the 'factor' via closure
	return (number) => {
		console.log(factor * number);
	}
}

integerFunc(2)(3);

