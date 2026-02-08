const _ = require('lodash');

// Manual currying
const printMessage = (name) => {
    return (message) => { //
        return name + " : " + message;
    };
};

console.log(printMessage("Jhon")("Wazzup")); // Manual currying

const printMsgForPepe = printMessage("Pepe");
console.log(printMsgForPepe("Hello")); // Manual currying for Pepe

// Using lodash.curry
const curried = _.curry((name, message) => { // Lodash currying
    return name + " : " + message;
});

const printMsgForHasan = curried("Hasan");
console.log(printMsgForHasan("Hi there!")); // Lodash currying for Hasan

console.log(curried("Arman", "Good morning!")); // Lodash currying with both arguments
console.log(curried("Lina")("How are you?")); // Lodash currying with separate calls