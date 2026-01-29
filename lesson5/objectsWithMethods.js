// Object with data properties and a method
let example = {
    a: 10,
    b: 20,
    someMethod: function () {
        console.log("Some Mehtod Here!");
    }
}

// Calling the method of the object
example.someMethod();
console.log(example.a);

// Function Expressions: Assigning an anonymous function to a variable
let someVariable = function () {
    console.log("Some Variable Here!!");
}

let someOtherVarName = 10;

// Named Function Declaration
function namedFunction() {
    console.log("Named Function!!!");
}

namedFunction();
someVariable(); // We call this function just like any other, even if it's assigned to a variable

// Higher-Order Function: Accepting another function as a parameter (callback)
function functionExecutor(paramFunction) {
    paramFunction(); // Executing the passed function
}

console.log("Function Executor:");
// Passing 'namedFunction' by reference (without parenthesis) to be executed inside
functionExecutor(namedFunction);