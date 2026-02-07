const _ = require('lodash');

// Manual currying
const printMessage = (name) => {
    return (message) => {
        return name + " : " + message;
    };
};

console.log(printMessage("Jhon")("Wazzup")); // Manual currying

const printMsgForPepe = printMessage("Pepe");
console.log(printMsgForPepe("Hello")); // Manual currying for Pepe

// Using lodash.curry
const curried = _.curry((name, message) => {
    return name + " : " + message;
});

const printMsgForAnna = curried("Anna");
console.log(printMsgForAnna("Hi there!")); // Lodash currying for Anna

console.log(curried("Maria", "Good morning!")); // Direct call with both args



