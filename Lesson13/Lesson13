// Filter with array methods:
// Filter even values from an array
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
	console.log(x);	// This logs 6, but it does NOT change 'y' which is outside the function.
}

let y = 5; // 'y' is a primitive (number), so it's passed by value to 'doSomething'.
doSomething(y); // This logs 6, but 'y' remains 5 because primitives are passed by value, not by reference.
console.log(y); // 'y' remains 5 because primitives are passed by value, not by reference.

// REFERENCE TYPES (Pass by Reference):
// Arrays and Objects are reference types.
// If you modify the array inside the function, the original array changes (Mutation).
// TO AVOID THIS (Immutability):
// We make a copy of the array using `.slice()` (or `[...numbers]`).
// Now modifying 'newArray' does not affect 'numberArray'.

function addSomethingToArray(numbers) {
	let newArray = numbers.slice(); // Create a shallow copy
	// Alternatively, we could use: let newArray = [...numbers];
	newArray.push(9); // Modify the copy
	return newArray; // Return the new array with the added element
}

let numberArray = [45, 77, 19]; // Original array before modification

console.table(numberArray); // This logs the original array: [45, 77, 19]

let newArray = addSomethingToArray(numberArray); // 'newArray' is a new array with the added element, while 'numberArray' remains unchanged.

console.table(numberArray); // Original array is unchanged: [45, 77, 19]
console.table(newArray);    // New array with the added element: [45, 77, 19, 9]

// HIGHER-ORDER FUNCTIONS:
// A higher-order function is a function that takes another function as an argument OR returns a function.
// This is a powerful concept in Functional Programming.
// Here, 'withLog' is a higher-order function.
// It takes a function 'fn' and returns a NEW function.

const withLog = (fn) => {
	// It takes a function 'fn' as an argument and returns a new function that wraps the original function 'fn' with additional behavior (logging).
	// The returned function is an anonymous function that takes any number of arguments (...args) and logs the name of the original function before calling it.
	return (...args) => {
		// It adds behavior (logging) before running the original function.
		console.log(`Calling ${fn.name}`);
		// Then it executes the original function with the original arguments.
		return fn(...args);
	};
};

// This is a more concise version of 'withLog' using implicit return and template literals for cleaner logging.
const withLog2 = (fn) => (...args) => {
	console.log("Calling", fn.name || fn); // fn might not have a name if it's an anonymous function, so we log the function itself as a fallback.
	return fn(...args);
};

const add = (a, b) => a + b;
const minus = (a, b) => a - b;
console.log(add(5, 8));

// We create new versions of 'add' and 'minus' that have logging capabilities.

const addWithLogging = withLog(add); // This creates a new function that wraps 'add' with logging.
const minusWithLogging = withLog(minus); // This creates a new function that wraps 'minus' with logging.

let returnValue = addWithLogging(3, 4); // This calls the new function that logs "Calling add" and then returns the result of 'add(3, 4)', which is 7.
console.log(returnValue); // This logs 7, which is the result of 'add(3, 4)' after logging "Calling add".
console.log(minusWithLogging(10, 5)); // This calls the new function that logs "Calling minus" and then returns the result of 'minus(10, 5)', which is 5. This logs 5 after logging "Calling minus".


// HIGHER-ORDER FUNCTIONS exercises:

// Create a function that gets a function as an input parameter 
// and then runs that function twice.

const twice = (x) => {
	x();
	x();
}

twice( () => console.log("Saludos") ); 

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

// A more concise version using implicit return:
const integerFunc2 = (factor) => (number) => console.log(factor * number);
integerFunc2(2)(3);

// Also could be written as:
let factorByTwo = integerFunc2(2); // This creates a new function that multiplies its input by 2.
factorByTwo(3); // This calls the new function with 3, which logs 6 (2 * 3).