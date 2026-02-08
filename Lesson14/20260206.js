/*
Task 3 – Currying
    Create a function printMessage().
    • Parameters: name and message.
    • Prints out [name]: [message]
    • Implement currying for sending messages to a specific person i.e. printMessageForJohn().
*/

const printMessage = (name) => {
    return (message) => {
        return name + " : " + message 
    }
}

console.log( printMessage("Jhon")("Wazzup") );

const printMsgForPepe = printMessage("Pepe"); // Currying allows to create a new function with a preset name "Pepe". This is useful for reusability and cleaner code.

console.log( printMsgForPepe("Hello") );

// Function Composition
const double = x => x * 2;
const increment = x => x + 1;
const composed = x => double(increment(x)); // First increment(x) is called, then its result is passed to double(). This is function composition, where the output of one function becomes the input of another. 
console.log(composed(3)); // 8
    
// Helper function
const double2 = x => x * 2;
const increment2 = x => x + 1;

const compose = (...fns) => // The compose function takes a variable number of functions as arguments (using the rest parameter syntax ...fns). It returns a new function that takes an initial value x.
    x => fns.reduceRight((v, fn) => fn(v), x); // Inside the returned function, we use reduceRight to apply the functions in reverse order. The reduceRight method iterates over the array of functions from right to left, applying each function to the accumulated value v, starting with the initial value x.

const composed2 = compose(double2, increment2); // We create a new function composed2 by calling compose with the double and increment functions. The order of the functions in the compose call determines the order of execution. In this case, increment will be applied first, followed by double.
console.log(composed2(3)); // 8

// 3rd way
const flow = require('lodash/flow'); 
const increment3 = x => x + 1;
const double3 = x => x * 2;
const piped = flow([increment3, double3]); // The flow function from Lodash creates a new function piped that applies the increment3 and double3 functions in sequence. The order of the functions in the array determines the order of execution. In this case, increment3 will be applied first, followed by double3.
console.log(piped(3)); // 8