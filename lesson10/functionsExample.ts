// Named function declaration
function sum(a: number, b: number, c: number): number {
    return a + b + c;
}

// Function Expression: Assigning an anonymous function to a constant variable
const someVariable = function (x: number, y: number): number {
    return x * y;
}

// Function Expression with no return value (void)
const greetings = function (): void {
    console.log("Hello from greetings function");
}

// Higher-Order Function: Accepts another function as a parameter
// 'functionAsParam' is a function that returns void
function executeAnotherFunction(functionAsParam: () => void): void {
    functionAsParam(); // Execute the passed function
}

// Passing the 'greetings' function as an argument
executeAnotherFunction(greetings);

// Assigning a function to another variable (reference copy)
const fooBar = greetings;
fooBar(); // Calling through the new variable

// Function Scope Demonstration
let a = 5; // Global scope (in this module)
function example(param1: number): void {
    let b = 10; // Local scope: 'b' exists only inside this function
    console.log(a + b + param1); // Can access global 'a', local 'b', and 'param1'
}

example(15);
// console.log(b); // Error: 'b' is not defined in this scope. It was destroyed after 'example' finished.



