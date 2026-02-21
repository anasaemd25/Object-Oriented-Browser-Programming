

function executeAnotherFunction(functionAsParam) {
    functionAsParam();
}

executeAnotherFunction(function() {
    console.log("Hello from greetings function");
});

const someFunction = () => console.log("Hello from arrow function");

// no need to have function keyword
// with single line implementation, no need for curly braces
// with single line implementation, no need for return keyword
const multiplyTwoParams = (a, b) => a * b; 
console.log("Result of multiplyTwoParams(3,4): " + multiplyTwoParams(3,4));

// the above is equivalent to classical named function below:
function multiplyTwoParamsClassic(a, b) {
    return a * b;
}

// arrow function with multiple lines needs curly braces and return keyword
const multiplyAndLog = (a, b) => {
    const result = a * b;
    console.log("Result inside multiplyAndLog: " + result);
    return result;
}

// pseudo code of DOM button implementation

const buttonElement = {}
buttonElement.onClick = function(event) {
    // do something related to the event, maybe change CSS so that UI changes
    someDiv.style.display = 'none';
}

// using arrow function as event handler
buttonElement.onClick = (event) => someDiv.style.display = 'none';
