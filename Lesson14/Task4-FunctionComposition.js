/*
Task 4 – Function composition
Create a function that cleans up user input. It needs to do the following:
    • Trim whitespace
    • Turn lowercase
    • Capitalize the first letter
First use separate functions and then compose a new function to do all this.
*/

const { flow } = require("lodash"); // Import 'flow' for function composition

// Function to trim whitespace from the beginning and end of a string
const trimWhiteSpace = (string) => string.trim();

// Function to convert the entire string to lowercase
const toLowerCase = (string) => string.toLowerCase();

// Function to capitalize the first letter of the string
const capitalizeFirst = (string) =>
    string[0].toUpperCase() + string.slice(1);

// Manual composition: apply the functions in order
const cleanInput = (string) => capitalizeFirst(toLowerCase(trimWhiteSpace(string)));

// Example of using the manual composition
console.log(cleanInput("   hOLa Mundo   ")); // "Hola mundo"

// Composition using lodash.flow to chain functions from left to right
const compositeClean = flow(trimWhiteSpace, toLowerCase, capitalizeFirst);

// Example of using the composition with flow
let userInput2 = " jhon pOrk ChanKo ";
console.log(compositeClean(userInput2)); // "Jhon pork chanko"

// Additional examples
console.log(compositeClean("   eSTo Es Un Ejemplo   ")); // "Esto es un ejemplo"
console.log(compositeClean("   JAVASCRIPT   ")); // "Javascript"
console.log(compositeClean("   a   ")); // "A"

/*
Explanation:
- trimWhiteSpace removes extra spaces from the beginning and end of the string.
- toLowerCase converts the entire string to lowercase.
- capitalizeFirst capitalizes only the first letter of the string.
- Using flow, you can easily chain any number of functions in a readable way.
*/