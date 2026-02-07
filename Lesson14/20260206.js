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

const printMsgForPepe = printMessage("Pepe");

console.log( printMsgForPepe("Hello") );


// Function Composition

const double = x => x * 2;
const increment = x => x + 1;
const composed = x => double(increment(x)); // Primero se ejecuta increment(x)
console.log(composed(3)); // 8

// Helper function
const double2 = x => x * 2;
const increment2 = x => x + 1;
const compose = (...fns) =>
x => fns.reduceRight((v, fn) => fn(v), x);
const composed2 = compose(double, increment);
console.log(composed(3)); // 8

// 3rd way
const flow = require('lodash/flow');
const increment3 = x => x + 1;
const double3 = x => x * 2;
const piped = flow([increment3, double3]);
console.log(piped(3)); // 8