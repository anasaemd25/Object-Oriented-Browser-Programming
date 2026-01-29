// Defining variables with different data types
// 'x' is a number
let x = 5;
// 'y' is declared but not assigned, so it holds the value 'undefined'
let y;
// 'z' is a boolean value (true)
let z = true;
// 'k' is a boolean value (false)
let k = false;

// Checking the data type of the variables using the 'typeof' operator
console.log(typeof x); // Output: "number"
console.log(typeof y); // Output: "undefined"
console.log(typeof z); // Output: "boolean"
console.log(typeof k); // Output: "boolean"


// Demonstrating "Falsy" values
// In JavaScript, undefined, null, 0, "", NaN, and false are considered "falsy" in boolean contexts.
let testValue = undefined;  // null, 0, "", undefined
if(testValue){
    console.log("This is true");
} else{
    console.log("This is false"); // This block will execute because testValue is undefined (falsy)
}

// Demonstrating "Truthy" values
// Non-empty strings, non-zero numbers, and objects are "truthy".
let test2Value = "Hello";  // " ", "1"...
if(test2Value){
    console.log("This is true"); // This block will execute because "Hello" is a non-empty string (truthy)
} else{
    console.log("This is false");
}


// JavaScript has a maximum safe integer limit for Number type.
// Integers outside this range may lose precision.
console.log(Number.MAX_SAFE_INTEGER);

let max = 9007199254740991;

// Demonstrating precision loss beyond MAX_SAFE_INTEGER
let beyondMax1 = max + 1;
let beyondMax2 = max + 2;
console.log(beyondMax1);
console.log(beyondMax2); // This might turn out to be the same as beyondMax1 due to precision loss!

console.log(beyondMax1 === beyondMax2); // This might evaluate to true unexpectedly

// Hexadecimal notation (Prefix 0x)
// Represents numbers in base-16
let hexValue = 0xFF //255 in decimal
console.log(hexValue);

// Binary notation (Prefix 0b)
// Represents numbers in base-2
let binaryValue = 0b1010 // 10 in decimal
console.log(binaryValue);

// Octal notation (Prefix 0o)
// Represents numbers in base-8 (Digits from 0 to 7)
let octalValue = 0o10; // From 0 to 7
console.log(octalValue);

// BigInt Type
// Used for integers arbitrarily larger than Number.MAX_SAFE_INTEGER.
// Created by appending 'n' to the end of an integer literal.
let bigIntValue = 2134243232532412243253n;
console.log(typeof bigIntValue); // Output: "bigint"
console.log(bigIntValue + 2n);   // Arithmetic with another BigInt
console.log(bigIntValue + 4n);

// String manipulation
let str1 = "Hello world";
// Splitting the string into an array of substrings using a space separator
let results = str1.split(" ");
console.log(results); // Output: ["Hello", "world"]
console.log(str1.length); // Output: Length of the string

// Accessing individual characters in a string
console.log(str1[0]); // First character 'H'
console.log(str1[1]); // Second character 'e'

let str2 = 'single quote str'

// Template Literals (introduced in ES6)
// Allow embedding expressions using ${...}
let str3 = `Values of x is ${x}`;
console.log(str3);
